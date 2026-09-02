import { create } from "zustand";
import {
  registerFormSchema,
  type RegisterFormValues,
} from "@/lib/schemas/register-form.schema";

export type FormStatus = "idle" | "submitting" | "success" | "error";

interface RegisterFormState {
  values: RegisterFormValues;
  errors: Partial<Record<keyof RegisterFormValues, string>>;
  status: FormStatus;
  errorMessage?: string;
  setField: (field: keyof RegisterFormValues, value: string) => void;
  submit: () => Promise<void>;
  reset: () => void;
}

const initialValues: RegisterFormValues = {
  nombre: "",
  correo: "",
  telefono: "",
  empresa: "",
  mensaje: "",
};

export const useRegisterFormStore = create<RegisterFormState>((set, get) => ({
  values: initialValues,
  errors: {},
  status: "idle",
  errorMessage: undefined,

  setField: (field, value) =>
    set((state) => {
      const nextErrors = { ...state.errors };
      if (nextErrors[field]) {
        delete nextErrors[field];
      }
      return {
        values: { ...state.values, [field]: value },
        errors: nextErrors,
      };
    }),

  submit: async () => {
    const values = get().values;
    const result = registerFormSchema.safeParse(values);

    if (!result.success) {
      const fieldErrors: Partial<Record<keyof RegisterFormValues, string>> = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof RegisterFormValues;
        if (!fieldErrors[key]) {
          fieldErrors[key] = issue.message;
        }
      }
      set({ errors: fieldErrors, status: "idle" });
      return;
    }

    set({ status: "submitting", errors: {}, errorMessage: undefined });

    try {
      const response = await fetch("/api/registro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(result.data),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        set({
          status: "error",
          errorMessage: data.message || "Ocurrió un error al procesar tu solicitud.",
        });
        return;
      }

      set({ status: "success", errors: {} });
    } catch {
      set({
        status: "error",
        errorMessage: "Error de conexión. Por favor verifica tu red e intenta nuevamente.",
      });
    }
  },

  reset: () =>
    set({
      values: initialValues,
      errors: {},
      status: "idle",
      errorMessage: undefined,
    }),
}));

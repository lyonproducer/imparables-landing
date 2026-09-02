import { z } from "zod";

export const registerFormSchema = z.object({
  nombre: z
    .string()
    .min(2, "Ingresa tu nombre completo")
    .max(80, "El nombre es demasiado largo"),
  correo: z.string().email("Ingresa un correo electrónico válido"),
  telefono: z
    .string()
    .min(7, "Ingresa un teléfono válido")
    .max(20, "El teléfono es demasiado largo"),
  empresa: z.string().max(120, "Máximo 120 caracteres").optional().or(z.literal("")),
  mensaje: z
    .string()
    .max(500, "Máximo 500 caracteres")
    .optional()
    .or(z.literal("")),
});

export type RegisterFormValues = z.infer<typeof registerFormSchema>;

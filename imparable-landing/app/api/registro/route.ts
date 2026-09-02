import { registerFormSchema } from "@/lib/schemas/register-form.schema";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = registerFormSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          ok: false,
          errors: parsed.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    // Punto de integración para CRM / Webhook / DB cuando el cliente lo defina
    // Payload validado: parsed.data
    return NextResponse.json({
      ok: true,
      message: "Registro recibido exitosamente.",
    });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        message: "Error al procesar el cuerpo de la petición.",
      },
      { status: 400 }
    );
  }
}

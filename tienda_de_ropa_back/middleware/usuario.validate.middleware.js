import { usuarioSchema } from "../schemas/usuario.schema.js"

export async function validateUsuario(req, res, next) {
    try {
        const datosValidados = await usuarioSchema.validate(req.body, {
            abortEarly: false,
            stripUnknown: true,
        });
        req.body = datosValidados;
        next();
    } catch (error) {
        console.error("Errores de validación:", error.errors);
        res.status(400).json({ message: error.errors });
    }
}

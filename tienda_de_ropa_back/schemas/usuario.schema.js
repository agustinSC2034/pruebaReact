import yup from "yup";

export const usuarioSchema = yup.object({
  nombre: yup.string().required("El nombre es requerido"),
  email: yup.string().email("El email debe ser válido").required("El email es requerido"),
  password: yup
    .string()
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .matches(/[A-Z]/, "La contraseña debe contener al menos una letra mayúscula")
    .required(),
});

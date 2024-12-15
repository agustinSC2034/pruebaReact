import yup from 'yup'

export const productSchema = yup.object({
    name: yup.string().required("El nombre es obligatorio"),
    description: yup.string().min(2).max(30),
    price: yup.number().required("El precio es obligatorio"),
    img: yup.mixed(), 
    materials: yup.array().of(yup.string()).required("Los materiales son obligatorios"),
    category: yup.string().required("La categoría es obligatoria"),
});

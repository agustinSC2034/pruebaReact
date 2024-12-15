//Imports
import express from "express";
import path from 'path';
import cors from "cors"
import { fileURLToPath } from 'url';  

//Rutas
import RutasProductos from "./routes/productos.routes.js";
import ApiRoute from "./api/routes/productos.routes.js"
import ApiUsuario from "./api/routes/usuarios.routes.js"
import multer from "multer"; 

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join( __dirname, 'img'));
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const ext = path.extname(file.originalname); 
        cb(null, file.fieldname + '-' + uniqueSuffix + ext); 
    }
});

const upload = multer({ storage });

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET, POST"
}

//Usos
app.use( '/img', express.static(path.join( __dirname, 'img' ) ) );
app.use( express.urlencoded( { extended: true } ) );
app.use( express.json());
app.use( cors(corsOptions) )

//Rutas
app.use(RutasProductos);
app.use("/api", ApiRoute);
app.use("/api", ApiUsuario);
app.post('/api/ropas', upload.single('img'), async (req, res) => {
    try {
        const { name, description, price, category, materials } = req.body;
        
        const parsedMaterials = JSON.parse(materials);

        await productSchema.validate({ 
            name, 
            description, 
            price, 
            img: req.file?.filename, 
            materials: parsedMaterials, 
            category 
        });

        res.status(201).json({ message: "Producto creado exitosamente" });
    } catch (err) {
        res.status(400).json({ message: err.errors || "Error al procesar la solicitud" });
    }
});


app.listen(3333, () => console.log("¡Servidor encendido!"));

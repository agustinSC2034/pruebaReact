import { MongoClient, ObjectId } from "mongodb"
import bcrypt from "bcrypt"
import { crearToken } from "./token.service.js";

const Client = new MongoClient("mongodb://localhost:27017")
const db = Client.db("AH20232CP1")

export async function getUsuarios(){
    await Client.connect();
    return db.collection("usuarios").find().toArray()
}

export async function agregarUsuario(usuario) {
    await Client.connect();
    const existe = await db.collection("usuarios").findOne({ email: usuario.email });
    if (existe) {
        throw new Error("Esta cuenta ya existe");
    }

    const usuarioNuevo = {
        nombre: usuario.nombre, // Asegúrate de que este campo se incluye
        email: usuario.email,
        password: await bcrypt.hash(usuario.password, 10),
        carrito: [],
    };

    await db.collection("usuarios").insertOne(usuarioNuevo);
    return usuarioNuevo;
}



export async function borrarUsuario(id){
    await Client.connect()
    return db.collection("usuarios").updateOne( {_id: ObjectId.createFromHexString(id)}, { $set: {eliminado: true} } )
}

export async function login(usuario){
    await Client.connect()
    const existe = await db.collection("usuarios").findOne({ email: usuario.email })
    if( !existe ) {
        throw new Error(" No me pude loguear ")
    }
    const esValido = await bcrypt.compare( usuario.password, existe.password )
    if( !esValido ) {
        throw new Error(" No me pude loguear ")
    }
    const token = await crearToken(existe)
    return { ...existe,token: token, password: undefined }
}

export async function agregarCarrito(idUsuario, ropa){
    await Client.connect()
    const ropaCompleto = await db.collection( "Ropa" ).findOne({ _id: ObjectId.createFromHexString(ropa._id) })
    
    const resultado = await db.collection("usuarios").updateOne(
        { _id: ObjectId.createFromHexString(idUsuario) },
        { $push: {carrito: ropaCompleto} }
    )

    return resultado.modifiedCount > 0 ? "Producto agregado" : "No se pudo agregar producto "
}
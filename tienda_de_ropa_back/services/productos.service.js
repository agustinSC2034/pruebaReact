import { MongoClient, ObjectId } from "mongodb"

const Client = new MongoClient("mongodb://localhost:27017")
const db = Client.db("AH20232CP1")

async function getRopa(filtros = {}) {
    try {
        await Client.connect();
        const filterMongo = { filtroEliminado: { $ne: true } };

        if (filtros.category) {
            filterMongo.category = { $eq: filtros.category };
        }

        if (filtros.materials) {
            filterMongo.materials = { $in: filtros.materials.split(",") };
        }


        return db.collection("Ropa").find(filterMongo).toArray();
    } catch (error) {
        console.error("Error al conectar a la base de datos:", error);
        throw error;
    }
}

async function getRopaId(id_ingresado) {
    await Client.connect()
    return db.collection("Ropa").findOne({ _id: new ObjectId(id_ingresado) })
}

async function getCategoriasUnicas() {
    try {
        await Client.connect();
        return db.collection("Ropa").distinct("category");
    } catch (error) {
        console.error("Error al obtener categorías únicas:", error);
        throw error;
    }
}

async function getMaterialesUnicos() {
    try {
        await Client.connect();
        return db.collection("Ropa").distinct("materials");
    } catch (error) {
        console.error("Error al obtener materiales únicos:", error);
        throw error;
    }
}


async function borrarProducto(id) {
    await Client.connect()
    return db.collection("Ropa").deleteOne({ _id: new ObjectId(id) })
}

async function agregarRopa(ropa) {
    try {
        await Client.connect();
        const result = await db.collection("Ropa").insertOne(ropa);
        return result;
    } catch (error) {
        console.error("Error al agregar ropa:", error);
        throw error;
    }
}
async function modificarRopa(id, ropaActualizada) {
    await Client.connect();
    return db.collection("Ropa").replaceOne({ _id: new ObjectId(id) }, ropaActualizada);
}

//Exports
export {
    getRopa,
    getRopaId,
    agregarRopa,
    getMaterialesUnicos,
    getCategoriasUnicas,
    modificarRopa,
    borrarProducto
}


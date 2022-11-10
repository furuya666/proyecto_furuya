//importando la conexion a mongo
import './database.js'
//import  de express
import express from 'express';
//instancia de express
const app = express()
//varuable dl puerto
const port = 3000
//ruta de bienvenida
app.get('/', (req, res) => {
    res.send('Hello World!')
})


//en el puerto q corre la app
app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`)
});
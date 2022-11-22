//importando la conexion a mongo
import './database.js'
//import  de express
import express from 'express';
//instancia de 

import solicitanteRoute from './routes/solicitante.js';
import jefe_areaRoute from './routes/jefe_area.js'
import analistaRoute from './routes/analista.js';
const app = express()
//varuable dl puerto
const port = 3000
//ruta de bienvenida
app.get('/', (req, res) => {
    res.send('Hello World!')
});

//middleware
app.use('/api', solicitanteRoute);
app.use('/api', jefe_areaRoute);
app.use('/api', analistaRoute);

//en el puerto q corre la app
app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`)
});
//importando la conexion a mongo
import './database.js'
//import  de express
import express from 'express';
//instancia de 

import solicitanteRoute from './routes/solicitante.js';
import jefe_areaRoute from './routes/jefe_area.js'
import analistaRoute from './routes/analista.js';
import ticketRouter from './routes/ticket.js';
import categoriaRouter from './routes/categoria.js';
import dificultadRouter from './routes/dificultad.js';
import atencionRouter from './routes/atencion.js';
import fileUpload from 'express-fileupload';
import helpdeskRouter from './routes/helpdesk.js';
const app = express();
//te permite enviar json 
app.use(express.json());
app.use(fileUpload());
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
app.use('/api', ticketRouter);
app.use('/api', categoriaRouter);
app.use('/api', dificultadRouter);
app.use('/api', atencionRouter);
app.use('/api', helpdeskRouter);


//en el puerto q corre la app
app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`)
});
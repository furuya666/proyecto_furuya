import mongoose from 'mongoose';
//mongodb connect
const MONGODB_URI = 'mongodb://localhost/furuya';
mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true

}).then(db => console.log("CONECTADO A MONGODB"))
    .catch(err => console.log(err));
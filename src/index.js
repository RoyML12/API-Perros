const express = require ('express');
const mongoose = require("mongoose");
require ("dotenv").config();
const userRoutes = require("./routes/perros.js");

const app = express();
const port = process.env.PORT || 9000;

//middlewares
app.use(express.json());
app.use('/api', userRoutes )

//routes
app.get('/', (req, res) => {
    res.send('Bienvenidos')
});

//coneccion mongo
mongoose
    .connect(process.env.mongo)
    .then(() => console.log('conectado atlaas'))
    .catch((error) => console.error(error));

app.listen(port, () => console.log('servidor listo en puerto', port));
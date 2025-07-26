const express = require('express')
const app = express();
const PORT = 3000;
const casosRouter = require("./routes/casosRouter")

app.use(express.json());

app.use(casosRouter);

app.post('/contato', (req, res) => {
    try{
        throw new Error("oi")
    }
    catch (error){
        res.send(error.message)
    }
});


app.listen(PORT, () => {
    console.log(`Servidor do Departamento de Polícia rodando em localhost:${PORT}`);
});
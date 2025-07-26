const express = require('express')
const app = express();
const PORT = 3000;
const casosRouter = require("./routes/casosRouter")
const agentesRouter = require("./routes/agentesRouter")

app.use(express.json());

app.use(casosRouter);
app.use(agentesRouter);

app.post('/contato', (req, res) => {
    const data = req.body

    const date = data['dataDeIncorporacao']
    res.json(/^\d{4}\/\d{2}\/\d{2}$/.test(date))

    if (new Date(date).toLocaleDateString('pt-BR') != date) {
        throw new AggregateError('Valor inválido para o campo "status"');
    }
});


app.listen(PORT, () => {
    console.log(`Servidor do Departamento de Polícia rodando em localhost:${PORT}`);
});
const express = require('express');
const PORT = 3030;

const app = express();
app.use(express.json());


// rotas
app.get('/', (req, res) => {
    const result = {msg: 'Users'};
    return res.json(result);
});

app.post('/:id', (req, res) => {
    const id = req.params.id;
    const dados = req.body;
    const nome = dados.nome;
    const idade = dados.idade;
    return res.json({
        nome: `${nome}`, 
        idade: `${idade}`,
        id: `${id}`
    });
});

// app.put('/')


app.listen(PORT, () => {
    console.log(`App running in port ${PORT}...`);
});


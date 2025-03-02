const express = require("express");
const fs = require("fs");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

// Rota GET básica para testar
app.get("/", (req, res) => {
    res.send("Servidor está funcionando!");
});

app.post("/enviar-pedido", (req, res) => {
    const { nomeHydra, nomeJogo } = req.body;
    
    if (!nomeHydra || !nomeJogo) {
        return res.status(400).json({ error: "Nome e jogo são obrigatórios!" });
    }

    // Criar o nome do arquivo (exemplo: pedido-joao121.txt)
    const fileName = `pedido-${nomeHydra}.txt`;
    const filePath = `./pedidos/${fileName}`;

    // Criar a pasta se não existir
    if (!fs.existsSync("./pedidos")) {
        fs.mkdirSync("./pedidos");
    }

    // Conteúdo do pedido
    const content = `Nome no Hydra Community: ${nomeHydra}\nJogo Pedido: ${nomeJogo}\n\n`;

    // Salvar o arquivo
    fs.writeFile(filePath, content, (err) => {
        if (err) {
            return res.status(500).json({ error: "Erro ao salvar o pedido!" });
        }
        res.json({ message: `Pedido salvo como ${fileName}` });
    });
});

// Iniciar o servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

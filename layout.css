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

    // Criar a pasta de pedidos se não existir
    const pedidosDir = "./pedidos-hydra";
    if (!fs.existsSync(pedidosDir)) {
        fs.mkdirSync(pedidosDir);
    }

    // Nome do arquivo para o pedido, com base no nome do jogo
    const fileName = `${nomeJogo}.txt`;
    const filePath = `${pedidosDir}/${fileName}`;

    // Conteúdo do pedido
    const content = `Nome no Hydra Community: ${nomeHydra}\nJogo Pedido: ${nomeJogo}\n\n`;

    // Salvar o pedido no arquivo correspondente
    fs.writeFile(filePath, content, (err) => {
        if (err) {
            return res.status(500).json({ error: "Erro ao salvar o pedido!" });
        }

        // Organizar os arquivos em ordem alfabética (opcional)
        organizarPedidosEmOrdem(pedidosDir);

        res.json({ message: `Pedido para ${nomeJogo} salvo com sucesso!` });
    });
});

// Função para organizar os arquivos na pasta de pedidos em ordem alfabética
function organizarPedidosEmOrdem(dir) {
    fs.readdir(dir, (err, files) => {
        if (err) {
            console.error("Erro ao ler o diretório:", err);
            return;
        }

        // Ordenar os arquivos pelo nome
        files.sort();

        // Renomear os arquivos para garantir que estão em ordem alfabética
        files.forEach((file, index) => {
            const oldPath = `${dir}/${file}`;
            const newPath = `${dir}/${index + 1}-${file}`;
            fs.rename(oldPath, newPath, (err) => {
                if (err) {
                    console.error("Erro ao renomear o arquivo:", err);
                }
            });
        });
    });
}

// Iniciar o servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

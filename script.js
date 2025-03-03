document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("formularioPedido");
    const botaoMostrar = document.getElementById("mostrarFormulario");
    const botaoEnviar = document.getElementById("enviarPedido");

    if (botaoMostrar) {
        botaoMostrar.addEventListener("click", function () {
            formulario.style.display = "block";
        });
    }

    if (botaoEnviar) {
        botaoEnviar.addEventListener("click", function () {
            const nome = document.getElementById("nomeHydra").value;
            const jogo = document.getElementById("nomeJogo").value;

            if (!nome || !jogo) {
                alert("Por favor, preencha todos os campos.");
                return;
            }

            const repo = "coreaox/pedidos";  // Seu repositório no GitHub
            const apiUrl = `https://api.github.com/repos/${repo}/issues`;

            fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer SEU_GITHUB_TOKEN_AQUI`,  // ⚠️ NÃO exponha seu token no código público
                    "Accept": "application/vnd.github.v3+json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title: `Pedido de ${nome}`,
                    body: `Usuário: ${nome}\nJogo: ${jogo}`,
                    labels: ["pedido"]
                })
            })
            .then(response => response.json())
            .then(data => {
                if (data.message) {
                    alert("Erro ao enviar o pedido: " + data.message);
                    console.error(data);
                } else {
                    alert("Pedido enviado com sucesso!");
                    document.getElementById("formularioPedido").reset();
                }
            })
            .catch(error => {
                alert("Erro na requisição. Verifique o console.");
                console.error("Erro na requisição:", error);
            });
        });
    }
});

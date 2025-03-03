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
        botaoEnviar.addEventListener("click", async function () {
            const nome = document.getElementById("nomeHydra").value.trim();
            const jogo = document.getElementById("nomeJogo").value.trim();

            if (!nome || !jogo) {
                alert("Por favor, preencha todos os campos.");
                return;
            }

            const repo = "coreaox/pedidos";  // Seu repositório no GitHub
            const apiUrl = `https://api.github.com/repos/${repo}/issues`;

            try {
                const response = await fetch(apiUrl, {
                    method: "POST",
                    headers: {
                        "Authorization": `Bearer SEU_GITHUB_TOKEN_AQUI`,  // ⚠️ Não exponha publicamente!
                        "Accept": "application/vnd.github.v3+json",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        title: `Pedido de ${nome}`,
                        body: `Usuário: ${nome}\nJogo: ${jogo}`,
                        labels: ["pedido"]
                    })
                });

                const data = await response.json();

                console.log("Resposta da API:", data); // 🔍 Log para depuração

                if (!response.ok) {
                    throw new Error(data.message || "Erro desconhecido ao enviar pedido.");
                }

                alert("Pedido enviado com sucesso!");
                document.getElementById("nomeHydra").value = "";
                document.getElementById("nomeJogo").value = "";

            } catch (error) {
                alert("Erro ao enviar pedido: " + error.message);
                console.error("Erro:", error);
            }
        });
    }
});

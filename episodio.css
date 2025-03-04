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

            const apiUrl = "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"; // 🔒 Chame um backend seguro

            try {
                const response = await fetch(apiUrl, {
                    method: "POST",
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ nome, jogo })
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

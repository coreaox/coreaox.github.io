// Exibir formulário de pedido quando o botão for clicado
document.getElementById("mostrarFormulario").addEventListener("click", function() {
    document.getElementById("formularioPedido").style.display = "block";
});

// Enviar pedido para o servidor quando o botão de enviar for clicado
document.getElementById("enviarPedido").addEventListener("click", function() {
    const nomeHydra = document.getElementById("nomeHydra").value;
    const nomeJogo = document.getElementById("nomeJogo").value;

    // Verificar se os campos estão preenchidos
    if (!nomeHydra || !nomeJogo) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Enviar pedido para o servidor
    fetch("http://localhost:3000/enviar-pedido", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ nomeHydra, nomeJogo })
    })
    .then(response => response.json())
    .then(data => {
        if (data.message) {
            alert(data.message || "Pedido enviado com sucesso!");
        }
    })
    .catch(error => {
        console.error("Erro ao enviar pedido:", error);
        alert("Houve um erro ao enviar o pedido.");
    });
});

// Função para copiar o link da fonte para a área de transferência
document.getElementById("copiarLink").addEventListener("click", function() {
    const linkFonte = "https://coreaox.github.io/coreaox.json";  // Link para o GitHub Pages

    // Usar a API Clipboard para copiar o link (recomendado)
    navigator.clipboard.writeText(linkFonte).then(function() {
        alert("Link da fonte copiado com sucesso! Agora, você pode adicioná-lo no Hydra.");
    }).catch(function(error) {
        console.error("Erro ao copiar o link:", error);
        alert("Houve um erro ao tentar copiar o link.");
    });

    // Abre o link do Hydra automaticamente
    window.open(linkFonte, "_blank");
});

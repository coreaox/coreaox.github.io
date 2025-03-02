document.getElementById("mostrarFormulario").addEventListener("click", function() {
    document.getElementById("formularioPedido").style.display = "block";
});

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
        alert(data.message || "Pedido enviado com sucesso!");
    })
    .catch(error => {
        console.error("Erro ao enviar pedido:", error);
        alert("Houve um erro ao enviar o pedido.");
    });
});

// Função para copiar link
document.getElementById("copiarLink").addEventListener("click", function() {
    const link = "http://localhost:3000"; // Alterar conforme necessário
    navigator.clipboard.writeText(link).then(() => {
        alert("Link copiado para a área de transferência!");
    });
});
document.getElementById("mostrarFormulario").addEventListener("click", function() {
    document.getElementById("formularioPedido").style.display = "block";
});

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
        alert(data.message || "Pedido enviado com sucesso!");
    })
    .catch(error => {
        console.error("Erro ao enviar pedido:", error);
        alert("Houve um erro ao enviar o pedido.");
    });
});

// Função para copiar link
document.getElementById("copiarLink").addEventListener("click", function() {
    const link = "http://localhost:3000"; // Alterar conforme necessário
    navigator.clipboard.writeText(link).then(() => {
        alert("Link copiado para a área de transferência!");
    });
});

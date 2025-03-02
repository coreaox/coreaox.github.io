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
        alert(data.message || "Pedido enviado com sucesso!");
    })
    .catch(error => {
        console.error("Erro ao enviar pedido:", error);
        alert("Houve um erro ao enviar o pedido.");
    });
});

// Função para copiar o link da fonte para a área de transferência
document.getElementById("copiarLink").addEventListener("click", function() {
    const linkFonte = "https://coreaox.github.io/";  // Link para o GitHub Pages

    // Cria um campo de texto temporário para copiar o link
    const tempInput = document.createElement("input");
    tempInput.value = linkFonte;
    document.body.appendChild(tempInput);
    
    // Seleciona o texto do campo temporário e copia
    tempInput.select();
    document.execCommand("copy");
    
    // Remove o campo temporário
    document.body.removeChild(tempInput);
    
    alert("Link da fonte copiado com sucesso! Agora, você pode adicioná-lo no Hydra.");
});

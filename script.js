// Exibir formulário de pedido quando o botão for clicado
document.getElementById("mostrarFormulario").addEventListener("click", function() {
    document.getElementById("formularioPedido").style.display = "block";
});

// Enviar pedido para o GitHub Issues
document.getElementById("enviarPedido").addEventListener("click", function() {
    const nomeHydra = document.getElementById("nomeHydra").value;
    const nomeJogo = document.getElementById("nomeJogo").value;

    // Verificar se os campos estão preenchidos
    if (!nomeHydra || !nomeJogo) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Criar título e corpo do pedido
    const issueTitle = `Pedido de ${nomeJogo}`;
    const issueBody = `**Nome no Hydra Community:** ${nomeHydra}\n**Jogo Pedido:** ${nomeJogo}`;

    // **Substitua pelo seu token pessoal do GitHub**
    const githubToken = "SEU_GITHUB_TOKEN"; 
    const repoOwner = "coreaox"; 
    const repoName = "pedidos"; 

    // Fazer requisição para criar um issue no GitHub
    fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/issues`, {
        method: "POST",
        headers: {
            "Authorization": `token ${githubToken}`,
            "Accept": "application/vnd.github.v3+json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ title: issueTitle, body: issueBody })
    })
    .then(response => response.json())
    .then(data => {
        if (data.id) {
            alert("Pedido enviado com sucesso!");
            document.getElementById("formularioPedido").reset();
        } else {
            alert("Erro ao enviar o pedido.");
            console.error(data);
        }
    })
    .catch(error => {
        console.error("Erro ao conectar com o GitHub:", error);
        alert("Houve um erro ao enviar o pedido.");
    });
});

// Função para copiar o link da fonte para a área de transferência
document.getElementById("copiarLink").addEventListener("click", function() {
    const linkFonte = "https://coreaox.github.io/coreaox.json";  // Link para o GitHub Pages

    // Criar um campo de texto temporário para copiar o link
    const tempInput = document.createElement("input");
    tempInput.value = linkFonte;
    document.body.appendChild(tempInput);
    
    // Selecionar o texto e copiar
    tempInput.select();
    document.execCommand("copy");
    
    // Remover o campo temporário
    document.body.removeChild(tempInput);
    
    alert("Link da fonte copiado com sucesso! Agora, você pode adicioná-lo no Hydra.");
    
    // Abrir o link do Hydra automaticamente
    window.open(linkFonte, "_blank");
});

//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

// Função para adicionar amigo à lista
function adicionarAmigo() {
    const inputNome = document.getElementById("amigo");
    const nome = inputNome.value.trim();

    // Verifica se o nome não está vazio
    if (nome === "") {
        alert("Por favor, digite um nome válido.");
        return;
    }

    // Adiciona o nome à lista
    amigos.push(nome);
    inputNome.value = ""; // Limpa o campo de entrada

    // Atualiza a lista de amigos na tela
    atualizarLista();
}

// Função para atualizar a lista de amigos exibida
function atualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";  // Limpa a lista antes de adicionar os novos itens

    amigos.forEach(function(amigo) {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Função para realizar o sorteio
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um nome à lista!");
        return;
    }

    // Sorteia um amigo aleatório
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    // Exibe o resultado do sorteio
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li><strong>O amigo secreto sorteado é:</strong> ${amigoSorteado}</li>`;
}

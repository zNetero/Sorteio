//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação.
//  Aqui você deverá desenvolver a lógica para resolver o problema.
let nomeAmigos = [];
function adicionarAmigo()
{
    let adicionando = document.getElementById("amigo");
    let nome = adicionando.value.trim();
    if(nome.length === 0)
    {
        alert("Por favor, insira um nome válido");
    }
    else
    {
        nomeAmigos.push(nome);
        atualizarLista();
        adicionando.value = "";
    }
       
}
function atualizarLista()
{
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    nomeAmigos.forEach((nome) => {
        let item = document.createElement("li");
        item.textContent = nome;
        lista.appendChild(item);
    });
}

function sortearAmigo()
{
    if(nomeAmigos.length === 0)
    {
        alert("Não há amigos disponíveis");
        return;
    }
    else
    {
        let indice = Math.floor(Math.random() * nomeAmigos.length);
        let nomeSorteado = nomeAmigos[indice];
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = `${nomeSorteado}`;

    }
}
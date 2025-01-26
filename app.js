let listaDeNomes = [];
listaDeIndicesSorteados = [];

document.addEventListener("DOMContentLoaded", () => {
    atualizarListaVisivel();
});

function adicionarAmigo(){
    let nome = document.querySelector('input').value;
    
    if (nome.length <2){
        alert('Digite um nome válido!');
        limparCampo();
    }
    else if (listaDeNomes.includes(nome)){
        alert('Você já digitou este nome, se há mais de uma pessoa com este nome adicione a inicial de seu sobrenome');
    }
    else {
        listaDeNomes.push(nome);
        atualizarListaVisivel();
        limparCampo();
    }
}

function atualizarListaVisivel(){
    let listaVisivel = document.getElementById('listaAmigos');

    listaVisivel.innerHTML = "";

    let n = listaDeNomes.length;

    for (let nome of listaDeNomes) {
        let novoItem = document.createElement("li");
        novoItem.textContent = nome;
        listaVisivel.appendChild(novoItem);
    }
}

function sortearAmigo(){
    quantidadeDeAmigos = listaDeNomes.length;
    if (quantidadeDeAmigos < 3){
        alert('Você precisa Adicionar pelo menos três nomes para sortear');
    }
    else {
        let indice = gerarIndiceAleatorio(quantidadeDeAmigos);
        if (indice == NaN) {
            gerarIndiceAleatorio(quantidadeDeAmigos);
        }
        console.log(indice);
        let amigoSorteado = listaDeNomes[indice];
        let resultado = document.getElementById('resultado');

        resultado.innerHTML = "";

        let newItem = document.createElement("li");
        newItem.textContent = amigoSorteado;
        resultado.appendChild(newItem);
        
    }
}

function gerarIndiceAleatorio(max) {
    let indiceEscolhido = parseInt(Math.random() * max);
    let quantidadeDeIndicesNaLista = listaDeIndicesSorteados.length;

    if(quantidadeDeIndicesNaLista == max) {
        alert('Todas as opções de nomes ja foram sorteadas, resetando...')
        listaDeIndicesSorteados = [];
    }

    if (listaDeIndicesSorteados.includes(indiceEscolhido)){
        return gerarIndiceAleatorio(max);
    }
    else {
        listaDeIndicesSorteados.push(indiceEscolhido);
        //console.log(listaDeIndicesSorteados);
        return indiceEscolhido;
    }

}

function limparCampo(){
    nome = document.querySelector('input');
    nome.value = '';
}
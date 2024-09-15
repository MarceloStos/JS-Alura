let amigos = [];
function adicionar(){

    let nome = document.getElementById('nome-amigo').value;
    let listaAmigos = document.getElementById('lista-amigos');
    if(nome == ''){
        alert('Informe o nome do amigo');
        return;
    }

    if(amigos.includes(nome)){
        alert('Nome já Adicionado');
        return;
    }
    amigos.push(nome);

    if (listaAmigos.textContent == '') {
        listaAmigos.textContent = nome; 
    } else {
        listaAmigos.textContent = listaAmigos.textContent + ', '+ nome;
    }

    nome.value = '';
    
}

function sortear(){
    if (amigos.length < 4) {
        alert('Adicione pelo menos 4 amigos!');
    } else {
        embaralha(amigos);

        let sorteio = document.getElementById('lista-sorteio');

        for (let i = 0; i < amigos.length; i++) {

            if (i == amigos.length - 1) {
                sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br>';
            } else {
                sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + '<br>';
                }
            }
        
    }
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar(){
    amigos = [];
    listaAmigos = document.getElementById('lista-amigos').textContent = '';
    sorteio = document.getElementById('lista-sorteio').innerHTML = '';
}
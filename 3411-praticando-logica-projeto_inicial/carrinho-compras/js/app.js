let totalCarrinho;
limpar();

function adicionar() {
    let item = document.getElementById('produto').value;
    let quantidade = document.getElementById('quantidade').value
    let carrinho = document.getElementById('lista-produtos');
    let campoTotal = document.getElementById('valor-total');
    let nomeItem = item.split('-')[0];
    let valorItem = item.split('R$')[1];
    let subtotal = valorItem * quantidade;
    
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeItem} <span class="texto-azul">R$${subtotal}</span>
  </section>`;
    
    totalCarrinho = totalCarrinho + subtotal;
    campoTotal.textContent = `R$ ${totalCarrinho}`
    document.getElementById('quantidade').value = 0;

}
function limpar(){
    totalCarrinho = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
}
const dialog = document.getElementById('flavor-dialog');
const lista = document.getElementById('flavor-list');
const titulo = dialog.querySelector('h4');
const itenscarrinho = document.getElementById('cart-items');
const totalcarrinho = document.getElementById('cart-total');
const carrinhovazio = document.querySelector('.cart-empty');

const catalogo = {
    refri: {
        marcas: {
         'Coca-cola': ['Normal', 'Zero'],
         'Fanta': ['laranja', 'Uva', 'Zero'],
         'Guaraná': ['Normal', 'Zero']
        },
        tamanhos: [
            { nome: 'lata 350ml', preco: 8 },
            { nome: '600ml', preco: 10 },
            { nome: '2 litros', preco: 12 }
        ]
    }
};
const listas = {
    coxinha: ['Frango c/ catupiry', 'Frango cremoso', 'queijo c/ presunto'],
    enrolado: ['Enrolado c/ queijo', 'enrolado s/ queijo'],
    risole: ['carne', 'queijo c/ presunto'],
    agua: ['com gás', 'sem gás'],
    shake: ['Morango', 'Chocolate', 'Ovomaltine', 'Flocos'],
    suco: ['laranja', 'acerola', 'maracujá', 'abacaxi']
};
let carrinho = [];
function formatar(valor) {
    return 'R$ ' + valor.toFixed(2).replace('.', ',');
}
function letpreco(texto) {
    return Number(texto.replace(/[^\d,]/g, '').replace(',', '.'));
}
function desenharcarrinho() {
    itenscarrinho.innerHTML = '';
    let total = 0;

    carrinho.forEach((item, i) => {
        total += item.preco * item.qtd;
        const li = document.createElement('li');
        li.innerHTML =`
        <div class ="cart-item-info">
        <span>${item.nome}</span>
        <small>${formatar(item.preco)} cada</small>
        </div>
        <div class="cart-qty">
        <button data-acao="menos" data-i="${i}">-</button>
        <span>${item.qtd}</span>
        <button data-acao="mais" data-i="${i}">+</button>
        </div>`;
     itenscarrinho.appendChild(li);
    });
    totalcarrinho.textContent = formatar(total);
    carrinhovazio.hidden = carrinho.length > 0;
}
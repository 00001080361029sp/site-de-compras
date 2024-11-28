let carrinho = [];

// Adicionar produto ao carrinho
document.querySelectorAll('.comprar').forEach(button => {
    button.addEventListener('click', (e) => {
        const produto = e.target.closest('.produto');
        const id = produto.getAttribute('data-id');
        const nome = produto.querySelector('h2').textContent;
        const preco = produto.querySelector('p').textContent;

        carrinho.push({ id, nome, preco });
        alert(`${nome} foi adicionado ao carrinho!`);
    });
});

// Exibir itens do carrinho (para carrinho.html)
if (window.location.pathname.includes('carrinho.html')) {
    const lista = document.getElementById('carrinho-lista');
    const totalEl = document.getElementById('carrinho-total');

    let total = 0;
    carrinho.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `${item.nome} - ${item.preco}`;
        lista.appendChild(li);

        total += parseFloat(item.preco.replace('R$', '').replace(',', '.'));
    });

    totalEl.textContent = `Total: R$ ${total.toFixed(2)}`;
}

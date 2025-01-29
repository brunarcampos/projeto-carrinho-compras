function adicionar() {
    //recuperar valores nome do produto, quantidade e valor
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade');
    // calcular o preço, o nosso subtotal
    let preco = quantidade.value * valorUnitario;
   



    
    //adicionar no carrinho
    //atualizar o valor total da comprar
}

function limpar() {

}
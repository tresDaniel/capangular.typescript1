"use strict";
exports.__esModule = true;
var CarrinhoDeCompras_1 = require("./CarrinhoDeCompras");
var Pedido_1 = require("./Pedido");
var carrinho;
var total;
var pedido;
var cliente1 = {
    nome: 'Daniel Silva',
    endereco: {
        rua: 'Rua X',
        numero: 111,
        complemento: 'Apartamento 001B',
        bairro: 'Nova Betânia',
        cep: 59000000
    }
};
var cartao = {
    nomePortador: 'Daniel Silva',
    numeroDoCartao: 4444444444444444,
    mesValidade: 11,
    anoValidade: 25,
    cvv: 111
};
var item1 = {
    produto: {
        id: 1,
        nome: 'Panela',
        descricao: 'Panela de inox',
        preco: 10.00
    },
    quantidade: 2
};
var item2 = {
    produto: {
        id: 2,
        nome: 'Caneta Bic',
        descricao: 'Tinta preta',
        preco: 0.52
    },
    quantidade: 3
};
carrinho = new CarrinhoDeCompras_1.CarrinhoDeCompras();
// Inserção de produtos no carrinho
total = carrinho.inserirItem(item1);
total += carrinho.inserirItem(item2);
var pedido1 = {
    frete_tarifado: true,
    lista: carrinho.items,
    formaDePagamento: 'cartao',
    valor: total
};
pedido = new Pedido_1.Pedido();
pedido.realizarPedido(pedido1);

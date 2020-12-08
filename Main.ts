import { CarrinhoDeCompras } from './CarrinhoDeCompras';
import { IItem } from './Item';
import { IPedido, Pedido } from './Pedido';
import { ICliente } from './Cliente';
import { CartaoDeCredito } from './FormaDePagamento';

var carrinho: CarrinhoDeCompras;
var total: number;
var pedido: Pedido;

var cliente1:ICliente = {
    nome: 'Daniel Silva',
    endereco: {
        rua: 'Rua X',
        numero: 111,
        complemento: 'Apartamento 001B',
        bairro: 'Nova Betânia',
        cep: 59000000
    }
}

var cartao:CartaoDeCredito = {
    nomePortador: 'Daniel Silva',
    numeroDoCartao: 4444444444444444,
    mesValidade: 11,
    anoValidade: 25,
    cvv: 111
}

var item1:IItem = {
    produto: {
        id: 1,
        nome: 'Panela',
        descricao: 'Panela de inox',
        preco: 10.00
    },
    quantidade: 2   
};
var item2:IItem = {
    produto: {    
        id: 2,
        nome: 'Caneta Bic',
        descricao: 'Tinta preta',
        preco: 0.52},
    quantidade: 3
};

carrinho = new CarrinhoDeCompras();

// Inserção de produtos no carrinho
total = carrinho.inserirItem(item1);
total += carrinho.inserirItem(item2);

var pedido1:IPedido = {
    frete_tarifado: true,
    lista: carrinho.items,
    formaDePagamento:'cartao',
    valor: total
};

pedido = new Pedido();
pedido.realizarPedido(pedido1);


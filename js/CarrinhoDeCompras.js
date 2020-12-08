"use strict";
exports.__esModule = true;
exports.CarrinhoDeCompras = void 0;
var Item_1 = require("./Item");
var CarrinhoDeCompras = /** @class */ (function () {
    function CarrinhoDeCompras() {
        this.items = [];
    }
    CarrinhoDeCompras.prototype.inserirItem = function (item) {
        this.item = new Item_1.Item(item.produto, item.quantidade);
        this.items.push(this.item);
        var subtotal = this.item.produto.preco * this.item.quantidade;
        console.log('Item inserido: \n Nome: %s \n Descrição: %s\n Quantidade: %s\n Valor: R$ %s ', this.item.produto.nome, this.item.produto.descricao, this.item.quantidade, subtotal);
        return subtotal;
    };
    return CarrinhoDeCompras;
}());
exports.CarrinhoDeCompras = CarrinhoDeCompras;

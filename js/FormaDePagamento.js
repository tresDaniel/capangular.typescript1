"use strict";
exports.__esModule = true;
exports.BoletoBancario = exports.CartaoDeCredito = exports.FormaDePagamento = void 0;
var FormaDePagamento = /** @class */ (function () {
    function FormaDePagamento() {
    }
    FormaDePagamento.prototype.pagamento = function (tipo) {
        if (tipo == 'cartao') {
            this.cartaoDeCredito;
        }
        else {
            this.boletoBancario;
        }
    };
    FormaDePagamento.prototype.cartaoDeCredito = function (cartao) {
        console.log('Cartão de crédito selecionado: \n Nome: %s \n Número: %s \n Validade: %s/%s \n CVV: %s', cartao.nomePortador, cartao.numeroDoCartao, cartao.mesValidade, cartao.anoValidade, cartao.cvv);
    };
    FormaDePagamento.prototype.boletoBancario = function (boleto) {
        console.log('Boleto bancário selecionado: \n Pagador: %s \n Vencimento: %s \n Valor: %s');
    };
    return FormaDePagamento;
}());
exports.FormaDePagamento = FormaDePagamento;
var CartaoDeCredito = /** @class */ (function () {
    function CartaoDeCredito() {
    }
    return CartaoDeCredito;
}());
exports.CartaoDeCredito = CartaoDeCredito;
var BoletoBancario = /** @class */ (function () {
    function BoletoBancario() {
    }
    return BoletoBancario;
}());
exports.BoletoBancario = BoletoBancario;

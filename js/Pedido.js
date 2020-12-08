"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Pedido = void 0;
var FormaDePagamento_1 = require("./FormaDePagamento");
var Pedido = /** @class */ (function (_super) {
    __extends(Pedido, _super);
    function Pedido() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.imposto = 1.08;
        _this.frete_tarifado = false;
        _this.valor = 0;
        _this.valor_total = 0;
        return _this;
    }
    Pedido.prototype.realizarPedido = function (pedido) {
        var valor_tarifado = pedido.valor * this.imposto;
        if (pedido.frete_tarifado == true) {
            this.valor_total = valor_tarifado * 1.15;
        }
        console.log('=== Forma de Pagamento === %s', new FormaDePagamento_1.FormaDePagamento().pagamento(pedido.formaDePagamento));
        console.log('=== Valor Total === \n %s', this.valor_total.toFixed(2));
        return pedido;
    };
    return Pedido;
}(FormaDePagamento_1.FormaDePagamento));
exports.Pedido = Pedido;

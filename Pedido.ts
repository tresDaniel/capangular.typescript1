import { FormaDePagamento } from "./FormaDePagamento";
import { IItem } from "./Item";

export class Pedido extends FormaDePagamento{

    imposto:number = 1.08;
    frete_tarifado:boolean = false;
    lista: [];
    formaDePagamento:string;
    valor: number = 0;
    valor_total: number = 0;

    realizarPedido(pedido:IPedido){
        let valor_tarifado = pedido.valor * this.imposto;
        if (pedido.frete_tarifado == true) {
            this.valor_total = valor_tarifado * 1.15
        }
        console.log('=== Forma de Pagamento === %s', new FormaDePagamento().pagamento(pedido.formaDePagamento));
        console.log('=== Valor Total === \n %s', this.valor_total.toFixed(2));
        return pedido;
        
    }

}

export interface IPedido {
    frete_tarifado:boolean,
    lista: IItem[],
    formaDePagamento:string,
    valor: number
}
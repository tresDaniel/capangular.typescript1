import { IItem, Item } from './Item';
import { IProduto, Produto } from './Produto';

export class CarrinhoDeCompras {
    item: IItem;
    items: Item[] = [];
    cep:number;

    constructor(){}

    inserirItem(item:IItem){
        this.item = new Item(item.produto, item.quantidade);
        this.items.push(this.item);

        let subtotal = this.item.produto.preco*this.item.quantidade;

        console.log('Item inserido: \n Nome: %s \n Descrição: %s\n Quantidade: %s\n Valor: R$ %s ', 
            this.item.produto.nome, this.item.produto.descricao, this.item.quantidade, subtotal);
        return subtotal;
    }
}
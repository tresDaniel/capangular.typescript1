import { IProduto } from './Produto';

export class Item {

    produto: IProduto;
    quantidade: number;

    constructor(produto, quantidade){
        this.produto = produto;
        this.quantidade = quantidade;
    }
}

export interface IItem {
    produto: IProduto,
    quantidade: number
}
export class Produto {

    id:number;
    nome:string;
    descricao:string;
    preco:number;

    constructor(){}

}

export interface IProduto {
    id: number,
    nome: string,
    descricao: string,
    preco: number
}
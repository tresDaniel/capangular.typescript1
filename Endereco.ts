export class Endereco {

    rua:string;
    numero:number;
    bairro:string;
    cep:number;
    complemento:string;

    constructor(){}
    
}

export interface IEndereco {
    rua:string,
    numero:number,
    bairro:string,
    cep:number,
    complemento:string
}
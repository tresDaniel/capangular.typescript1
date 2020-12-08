import { Endereco } from './Endereco';

class Cliente extends Endereco {

    nome:string;
    endereco:Endereco;

}

export interface ICliente {
    nome: string,
    endereco: Endereco
}
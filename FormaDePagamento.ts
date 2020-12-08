export class FormaDePagamento {

    pagamento(tipo:string){
        if (tipo == 'cartao'){
            this.cartaoDeCredito;
        } else {
            this.boletoBancario;
        }
    }

    cartaoDeCredito(cartao:CartaoDeCredito){

        console.log('Cartão de crédito selecionado: \n Nome: %s \n Número: %s \n Validade: %s/%s \n CVV: %s', 
            cartao.nomePortador, cartao.numeroDoCartao, cartao.mesValidade, cartao.anoValidade, cartao.cvv);
    }

    boletoBancario(boleto:BoletoBancario){
        console.log('Boleto bancário selecionado: \n Pagador: %s \n Vencimento: %s \n Valor: %s');
    }
}

export class CartaoDeCredito {
    nomePortador: string; 
    numeroDoCartao: number;
    mesValidade: number;
    anoValidade: number; 
    cvv: number;

    constructor(){}
}

export class BoletoBancario {
    pagador: string;
    vencimento: Date;
    valor: number;
}

export interface CartaoDeCredito {
    nomePortador: string, 
    numeroDoCartao: number, 
    mesValidade: number, 
    anoValidade: number, 
    cvv: number
}

export interface BoletoBancario {
    pagador: string,
    vencimento: Date,
    valor: number
}
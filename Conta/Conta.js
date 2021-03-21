export class Conta{
    constructor (saldoInicial, cliente, agencia) {
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
        if(this.constructor == Conta){
            throw new Error("Você não deveria instanciar um objeto do tipo Conta")
        }
    }

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo() {
        this._saldo;

    }
    //metodo abstrato, nao é chamado diretamente, precisa ser sobrescrito
    sacar(valor){
        throw new Error("O metodo Sacar é abstrato");
    }
    _sacar(valor,taxa){
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado; 
            return valorSacado;
        }
        return 0;
    
    }

    depositar(valor){
        this._saldo += valor; 
    
    }
    
    transferir(valor, conta){ 
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}
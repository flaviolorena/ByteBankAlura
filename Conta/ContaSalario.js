import { Conta } from "./Conta.js";

export class ContaSalario extends Conta {
    constructor(cliente){
        super(cliente)
    }

    sacar(valor){
        const taxa = 1.01;
        return this._sacar(valor,taxa);
    }
}
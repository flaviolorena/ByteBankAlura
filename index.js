import {Cliente} from './Cliente.js';
import {ContaCorrente} from './ContaCorrente.js';

const cliente1 = new Cliente("Ricardo", 12312312312);
const cliente2 = new Cliente("Alice", 33355566677);

const contaCorrenteRicardo = new ContaCorrente(cliente1 , 101 );
contaCorrenteRicardo.depositar(500);

const contaCorrenteAlice = new ContaCorrente(cliente2 , 102 );

let valor = 200;
contaCorrenteRicardo.transferir(valor, contaCorrenteAlice);

console.log(contaCorrenteRicardo);


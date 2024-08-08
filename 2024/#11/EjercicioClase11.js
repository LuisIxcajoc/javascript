class cuentaBancaria{
    saldo;

    constructor(saldo){
        this.saldo = saldo;
    }

    abonar(monto){
        this.saldo += monto;
    };

    debitar(monto){
        this.saldo -= monto;
    }

    consultar(){
        return this.saldo;
    }
}

let cuenta1 = new cuentaBancaria(500);
let cuenta2 = new cuentaBancaria(300);

cuenta1.abonar(250);

console.log(cuenta1.consultar());
console.log(cuenta2.consultar());

cuenta2.abonar(100);

console.log(cuenta1.consultar());
console.log(cuenta2.consultar());
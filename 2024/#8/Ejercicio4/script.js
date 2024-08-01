let numero = parseInt(prompt("Ingrese un número"));
let resultado;

do{
    resultado = parseInt(prompt("Ingrese otro número")); 
    if(resultado > numero){
        alert(resultado + " es mayor a " + numero);
    }
    else{
        alert(resultado + " es menor a " + numero);
    }
}
while(numero != resultado);

console.log(resultado);
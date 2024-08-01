let numero = 0;
do{
    numero = parseInt(prompt("Ingrese un nùmero"));
    if(numero < 0){
        alert("Finalizado");
        break;
    }
    console.log(Math.pow(numero,2));
    alert("El cuadrado es: " + Math.pow(numero,2));
}
while(numero >= 0);
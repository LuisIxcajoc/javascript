let numero = 0;

while(true){
    numero = parseInt(prompt("Ingrese un nùmero"));
    if(numero < 0){
        alert("Número " + numero + " es negativo.");
    }
    else{
        alert("Número " + numero + " es positivo.");
    }

    if(numero === 0){
        alert("Finalizado");
        break;
    }
}
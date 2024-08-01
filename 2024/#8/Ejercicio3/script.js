let numero = 0;

while(true){
    numero = parseInt(prompt("Ingrese un nùmero"));
    if((numero % 2) === 0){
        alert("Número " + numero + " es par");
    }
    else{
        alert("Número " + numero + " es impar");
    }

    if(numero === 0){
        alert("Finalizado");
        break;
    }
}
let num1 = parseInt(prompt("Ingrese nùmero 1"));
let num2 = parseInt(prompt("Ingrese nùmero 2"));

console.log('|-------------------------------------|');
console.log('|1. Suma                              |');
console.log('|2. Resta                             |');
console.log('|3. Multiplicación                    |');
console.log('|4. División                          |');
console.log('|5. Salir                             |');
console.log('|-------------------------------------|');

const opcion = prompt("Ingrese una opción");

switch(opcion){
    case '1':
        console.log("La suma de " + num1 + " y " + num2 + " es: " + (num1 + num2));
        break;
    case '2':
        console.log("La resta de " + num1 + " y " + num2 + " es: " + (num1 - num2));
        break;
    case '3':
        console.log("La multiplicación de " + num1 + " y " + num2 + " es: " + (num1 * num2));
        break;
    case '4':
        console.log("La división de " + num1 + " y " + num2 + " es: " + (num1 / num2));
        break;
    case '5':
        console.log("Salir");
        break;
    default:
        console.log("Opción no válido");
        break;
}
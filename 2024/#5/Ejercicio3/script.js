let num1 = prompt("Ingrese nùmero 1");
let num2 = prompt("Ingrese nùmero 2");

num1 = Number.parseFloat(num1);
num2 = Number.parseFloat(num2);

let sumaNumeros = num1 + num2;
let restaNumeros = num1 - num2;
let multiplicaNumeros = num1 * num2;
let divideNumeros = num1 / num2;

alert("Suma = " + sumaNumeros + ", resta = " + restaNumeros + ", multiplicaciòn = " + multiplicaNumeros + ", divisiòn = " + divideNumeros);
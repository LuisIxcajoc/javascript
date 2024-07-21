let gradosCentigrado = prompt("Ingrese temperatura gracoas centìgrados");

gradosCentigrado = Number.parseFloat(gradosCentigrado);

let gradosFahrenheit = (gradosCentigrado * (9/5)) + 32;

alert("Temperatura grados Fahrenheit = " + gradosFahrenheit);
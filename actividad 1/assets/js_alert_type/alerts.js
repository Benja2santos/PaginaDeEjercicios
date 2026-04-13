/* // EJECUTA EL BOTON DE RECARGA
document.querySelector("button")
        .addEventListener("click", () => {
            window.location.reload();
        });

//ejercicio 1:
alert("Hola Usuario");
//erecicio 2:
console.log("Hola Benja");
//ejercicio 3: 
let resultado = 5 + 3; console.log(resultado);
//ejercicio 4: cribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga “Hola nombreUsuario”
let nombre = prompt("Cual es tu nombre?");
alert("Hola " + nombre);
//ejercicio 5: Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
let numero1 = Number(prompt("Primer numero para sumar: "));
let numero2 = Number(prompt("Segundo numero para sumar: "));
let suma = numero1 + numero2; alert(`resultado de ${numero1} + ${numero2} = ${suma}`);
//ejercicio 6: Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
alert("Pon numeros y compararemos cual es mayor")
let num1 = Number(prompt("Primer numero: "));
let num2 = Number(prompt("Segundo numero: "));
if (num1 > num2) {
    alert(`Es mayor ${num1} que ${num2}`);
}else if ( num1 == num2){
    alert(`Los numeros ${num1} y ${num2} son iguales`);
}else {
    alert(`Es mayor ${num2} que ${num1}`);
}
//ejercicio 8: Escribe un programa que pida un número y diga si es divisible por 2
let numero_ = Number(prompt("Tu numero es divisible por 2"));
if (numero_  % 2 == 0){
    alert(`El numero ${numero_ } es divisible por 2`);
} else {
    alert("No es divisible por 2");
}

//erecicio 9: Escribe un programa que pida una frase y escriba cuantas veces aparece la letra "a"
let frase = prompt("Escriba una frase").toLowerCase();
let contador = 0;
for (let i of frase){
    if (i == "a")
        contador++
}alert(contador); */

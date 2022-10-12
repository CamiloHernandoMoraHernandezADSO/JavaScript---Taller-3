addEventListener("DOMContentLoaded", (e)=>{

/* 
Ejercicio 3
    Desarrollar un diagrama que lea 3 valores diferentes e indique cual es el mayor de ellos, el menor o
    si son iguales.
*/

let num1, num2,num3

if(num1 > num2 && num1 > num3){
    alert(`${num1} es mayor que ${num2} y ${num3}`)
}else if(num1 < num2 && num1 < num3){
    alert(`${num1} es menor que ${num2} y ${num3}`)
}
if(num2 > num1 && num2 > num3){
    alert(`${num2} es mayor que ${num1} y ${num3}`)
}else if(num2 < num1 && num2 < num3){
    alert(`${num2} es menor que ${num1} y ${num3}`)
}
if(num3 > num2 && num3 > num1){
    alert(`${num3} es mayor que ${num1} y ${num2}`)
}else if(num3 < num2 && num3 < num1){
    alert(`${num3} es menor que ${num1} y ${num2}`)
}
if(num1 == num2 || num1 == num3 || num2 == num3){
    alert(`Hay números iguales`)
}

});
addEventListener("DOMContentLoaded", (e)=>{

/* 
Ejercicio 5
    Escriba un algoritmo que calcule el área de un rectángulo siempre y cuando los lados sean positivos:
    área triangulo= lado * lado.
*/

let area, lado1,lado2

lado1 = Number(prompt("Ingrese el lado 1"))
lado2 = Number(prompt("Ingrese el lado 2"))

 if(lado1 > 0 && lado2 > 0){
     area = lado1 * lado2
     alert(`El área es ${area}`)
 }

})
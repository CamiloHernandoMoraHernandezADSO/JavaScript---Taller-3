addEventListener("DOMContentLoaded", (e)=>{
/* 
Ejercicio 11
    Programa para solicitar el nombre, apellido, edad y la nota promedio de 5 estudiantes de un curso de computación
*/

let nombre, apellido,edad,nota,promedio,i

for(i=0;i < 5;i++){
    nombre = prompt("Ingrese su nombre")
    apellido = prompt("Ingrese su apellido")
    edad = Number(prompt("Ingrese su edad"))
    nota = Number(prompt("Ingrese su nota"))
    promedio += nota
}
promedio = promedio / 5

alert(`La nota promedio del curso es ${promedio}`) 

});
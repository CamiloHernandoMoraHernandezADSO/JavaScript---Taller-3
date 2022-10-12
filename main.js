addEventListener("DOMContentLoaded", (e)=>{
/* 
Ejercicio 8
    En cierta empresa se les paga a sus trabajadores de la siguiente forma: si el empleado es de planta,
    la hora trabajada se le paga a $20000, si el empleado es administrativo, la hora trabajada se le paga
    a $10000. Para calcular su pago es necesario conocer el total de horas trabajadas.
*/

let rol, horas,valHoras, pago

rol = prompt("Ingrese el rol del empleado")
horas = Number(prompt("Ingrese la cantidad de horas trabajadas"))

if(rol.toUpperCase() == "PLANTA"){
    valHoras = 20000
    pago = valHoras * horas
}
else if(rol.toUpperCase() == "ADMINISTRATIVO"){
    valHoras = 10000
    pago = valHoras * horas

}
alert(`Su pago es de ${pago}`)
});
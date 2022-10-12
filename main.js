addEventListener("DOMContentLoaded", (e)=>{
/* 
Ejercicio 13
    En una tienda de HELADO da un descuento por compra a sus clientes con membresía dependiendo
    de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C.
    Los descuentos son los siguientes:
    Tipo A 10% de descuento
    Tipo B 15% de descuento
    Tipo C 20% de descuento
*/

let tipo, desc

tipo = prompt("Ingrese el tipo (A/B/C)")

if(tipo == 'A'){
    desc = 0.10
}
if(tipo == 'B'){
    desc = 0.15
}
if(tipo == 'C'){
    desc = 0.20
}
alert(`Su descuento es de ${desc*10}%`)


});
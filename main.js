addEventListener("DOMContentLoaded", (e)=>{
/* 
Ejercicio 10
    Calcular el valor total del valor de 5 productos, el IVA y el subtotal, visualizar los resultados de:
    Iva, Subtotal y Total de la compra de los artículos
*/

let p1, p2,p3,p4,p5, iva, subtotal,total

p1 = Number(prompt("Ingrese el valor producto 1"))
p2 = Number(prompt("Ingrese el valor producto 2"))
p3 = Number(prompt("Ingrese el valor producto 3"))
p4 = Number(prompt("Ingrese el valor producto 4"))
p5 = Number(prompt("Ingrese el valor producto 5"))
iva = 0.5
subtotal = p1 + p2 + p3 + p4 + p5
total = subtotal + subtotal*iva

alert(`IVA: ${iva*10}% \nSubtotal: ${subtotal} \nTotal: ${total}`)

});
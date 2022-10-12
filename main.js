addEventListener("DOMContentLoaded", (e)=>{

/* 
Ejercicio 7
    Calcular todos los pagos hechos de un restaurante y que si el consumo ingresado excede los
    $130.000 el descuento será del 15%, de lo contrario no hay descuento
*/

let totalPagos

totalPagos = Number(prompt("Ingrese el total de los gastos"))

if(totalPagos > 130000){
    totalPago = totalPagos - totalPagos * 0.15
    alert(`El total a pagar es ${totalPago}`)
}
else{
    alert(`El total a pagar es ${totalPagos}`)     
}

});
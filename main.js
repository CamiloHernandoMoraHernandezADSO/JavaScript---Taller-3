addEventListener("DOMContentLoaded", (e)=>{
/* 
Ejercicio 12
    Restarle al primer número al segundo (siempre y cuando el primero sea mayor que él segundo, en
    caso contrario indicar con un mensaje que la operación no es posible realizarla.
*/

let num1, num2

if(num1 > num2){
    suma = num1 - num2
    alert(`La suma de los números es ${suma}`)
}
else{
    alert(`La operación no es posible.`)
}
});
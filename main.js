addEventListener("DOMContentLoaded", (e)=>{

    /* 
    Ejercicio 2
        Calcule el mayor de tres números, permitiendo leer 3 valores diferentes
    */

    let num1, num2,num3

    num1 = Number(prompt("Ingrese un número"))
    num2 = Number(prompt("Ingrese un número"))
    num3 = Number(prompt("Ingrese un número"))

    if(num1 > num2 && num1 > num3){
        alert(`${num1} es mayor que ${num2} y ${num3}`)
    }
    else if(num2 > num1 && num2 > num3){
        alert(`${num2} es mayor que ${num1} y ${num3}`)
    }    
    else if(num3 > num2 && num3 > num1){
        alert(`${num3} es mayor que ${num1} y ${num2}`)
    }

});
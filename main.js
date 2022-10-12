addEventListener("DOMContentLoaded", (e)=>{

/* 
Ejercicio 9
    Realizar el algoritmo que lea N números, calcule y escriba la suma de los pares y el producto de los
    impares. Numero par es aquel que su residuo igual a cero (num mod !=0)
*/

let cantidad, sumaPar=0, sumaImpar=0, i, num

cantidad = Number(prompt("Ingrese la cantidad de números a ingresar"))

for(i=0; i < cantidad;i++){

    num = Number(prompt("Ingrese un numero"))
    if(num%2 == 0){
        sumaPar += num
    }
    else{
        sumaImpar += num
    }
}
alert(`La suma de los pares de ${sumaPar} \n La suma de los impares es de ${sumaImpar}`)

});
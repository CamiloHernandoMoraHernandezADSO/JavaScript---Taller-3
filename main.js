addEventListener("DOMContentLoaded", (e)=>{

    /* 
    Ejercicio 1
        Determinar si un número es positivo y menor que 100
    */
    
        let num
    
        num = Number(prompt("Ingrese un número"))
    
        if(num > 0 && num < 100){
            alert(`${num} es positivo y menor que 100`)
        }
        else{
            alert(`${num} es negativo o mayor que 100`)
        }
    
    
});
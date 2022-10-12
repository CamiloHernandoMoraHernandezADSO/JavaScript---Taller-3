addEventListener("DOMContentLoaded", (e)=>{

/* 
Ejercicio 4.
    Cálculo de áreas - Elige una figura geométrica:" Triángulo y Círculo
    ¿Qué figura quiere calcular (Escriba T o C)?
    Triangulo = base * altura / 2
    Circulo = PI * radio* radio
*/

    let area, figura, base, altura, radio


    figura = prompt("Elija una figura (T o C)")
    figura = figura.toUpperCase()
    if (figura == "T"){
        base = Number(prompt("Escriba la base del triángulo"))
        altura = Number(prompt("Escriba la altura del triángulo"))
        area = base * altura / 2
    }
    else if(figura == "C"){
        radio = Number(prompt("Ingrese el radio del círculo"))
        area = Math.PI * radio ** 2
    }
    else{
        area = 0
        figura = "0"
        alert("Elija una opción válida")
    }
    alert(`El área del ${figura} es ${area}`)
});
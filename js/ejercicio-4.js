//crear un vector con los numeros del 1 al 10
//usa un ciclo para sumar todos los numeros en el vector y mostrar el 
//resultado

//definir vector de tipo numerico

let numeros = [1, 2, 3, 4, 5,
     6, 7, 8, 9, 10];

     let suma=0

//recorrer el vector para sumar los numeros

for (let i = 0; i < numeros.length; i++ ) {
    suma= suma+numeros[i]
    
}
console.log ("la suma es: ", suma)
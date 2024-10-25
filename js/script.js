//como se inicializa un vector
let vector= [] //vacio

//vector con informacion
let nombres = ["carlos", "juan", "pepe","monica","luis",
    "brayan","michael","cache","andres"];

//imprimir o escribir
    console.log ("vector: " + nombres);

    console.log ("el nombre que esta en la posicion 0 es: " 
        + nombres[0]);
        
        //recorrer un vector 

        for (let i = 0; i < nombres.length; i++) {
            console.log (nombres [i] )
        }

//agregar informacion a un vector
nombres.push ("stiven");

console.log (nombres)

//como borrar informacion de un vector

nombres.splice (1, 2);

console.log (nombres);

    


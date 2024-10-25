//escribe un programa que recorra un vector de animales y que muestre 
//solo las que tengan mas de 5 letras

//definir un vector de tipo texto string
let animales = ["leon", "tortuga", "perro", "gato", "aguila"]

//recorrer el vector
for (let i = 0; i <animales.length; i++ ) {

    //VALIDAR QUE EL ANIMAL TENGA MAS DE 5 LETRAS

    if (animales [i].length >5)
        console.log (animales[i])
    
};
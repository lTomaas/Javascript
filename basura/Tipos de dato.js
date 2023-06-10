// VARIABLES

//Lista de tamaño 3
var lista = new Array();
lista.push(2);
lista.push(3);
lista.push(4);

console.log(lista);

var lista2 = new Array();

lista2[0] = 1;
lista2[1] = 2;

console.log(lista2);

//OBJETOS

const Celular = {
    altura: 10,
    ancho: 5,
    marca: "Motorola",
    color: "Blanco"
}

//FECHAS

const actualidad = new Date();

console.log(actualidad);

//COMPARACIONES

// === igualdad fuerte, compara valor y tipo
// 5 === "5" falso
// == igualdad debil, solo compara valor
// 5 == "5" verdadero

//Recorrer una lista
for(let valor of lista){
    console.log(valor)
}

//Operaciones lambda con los valores
lista.forEach( valor =>{
    console.log(valor)
})

//Para recorrer atributos de un objeto

for(let atributo in Celular){
    console.log(atributo,":", Celular[atributo])
}

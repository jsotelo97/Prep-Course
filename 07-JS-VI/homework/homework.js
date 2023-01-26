// Do not change any of the function names

const { stringify } = require("git-url-parse");

function mayuscula(nombre) {
 /*  La función recibe un nombre y debe devolver el mismo que recibe pero con su
  primer letra en mayúscula
  ej: Recibe "mario" ----> Devuelve "Mario"
  Tu código: */ 

  /* declaramos la variable en el cual recolectaremos el primer caracter
  ubicandolo por su matriz "0". */  
  let firsLetter = nombre.charAt(0); 

  /* declaramos la variable que guardara la transicion a mayuscula del valor
  tomado anteriormente. */  
  let firsCapitalLetter = firsLetter.toUpperCase();

  /* declaramos la variable donde tomaremos el resto de la palabra para eso
 ubicaremos desde donde tomara el inicio de la palabra con la matriz "1". */
  let wordContinue = nombre.slice(1);
  
  /* declaramos la variable donde se guardara al union del primer valor pero
  ya modificado y el resto de la palabra. y todo a a traves de una simple
  operación matemática como la suma. */
  let result = firsCapitalLetter + wordContinue;

  // llamamos el resultado.
  return result;
}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:

  /* un callback llama al otro valor que se encuentra declarado, ya sera un
  string, boolean, number, otra funcion, metodos, arrays, etc. Pero en esta
  ocacion no nos brinda ningun dato, por lo que se resume a que simplemente
  esta aguardando el ingreso del valor. */
  cb();
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como
  //callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:

  /* Como detallamos en el ejercicio anterior, para llamar un callback,
  contaremos o no con otros argumentos que seran los que al momento de
  llamar al "cb" dentro de sus parentesis ocuparan posiciones. */
  return cb(n1, n2);
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  
  /* esta es una de las manera en como se puede resolver este ejercicio,
  un dato muy relevante es que casi siempre el condicional de "aumento progresivo",
  puede servir practicamente para casi todo, es la manera más usada entre los
  principiantes. solo hay que saber bien como se dara el planteamiento. */
  var suma = 0;
  for (let i = 0; i < numeros.length; i++){
    suma = suma + numeros[i]
  }
  cb(suma)


  /* El siguiente método es más corta de ejecutar el ejecricio. Pero, requiere
  de más práctica y una mayor profundización en otras extenciones que se pueden
  usar y tiene como extencion principal .reduce  */

  /* var suma = numeros.reduce(function(acc, curr){
    return acc + curr
  }, 0)
  cb(suma) */
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:

  /* Utilizando parte de la sintaxis del empleo del "forEach" procedemos a plasmarlo
  según los parametros que nos da el ejercicio. */
  array.forEach(e => cb(e));
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor
  // devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  // Tu código:
  
  /* var newArray = [newElement, newElement, newElement]; 
     array = cb[e, e, e]   =>  newElement, newElement, newElement */


     /* declaramos el nuevo array según el enunciado. lo igualamos al primer
     parametro brindado en la funcion inicial y le agregamos le extencion .map
     para que de esta manera, gracias a los implica esta extencion, tomara 
     cada uno de los elementos que tiene el array inicial e iterara con ellos, 
     a los cuales se les asigno la denominación de "elemento => 'e' " */
     var newArray = array.map(function(e){
      
      /* resultado de la primera sentencia de código, retornamos un callback que
      llama a los elementos representados por "e" */
      return cb(e)
     })

     /* finalmente retornamos el nuevo array. */
     return newArray
}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:


  var nArray = array.filter(array => array.startsWith('a'));
  return nArray;
  
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};

// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return(array[0]);
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return(array[array.length -1]);
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return(array.length);
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:

  // declaramos el nuevo array
  let newArray=[];

  // condicional para el aumento progresivo 
  for  (let i = 0; i < array.length; i++) {

  // arreglo de condicion principal para el nuevo array
    newArray.push(array[i] + 1);
  }
  return newArray;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento)
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento)
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:

  // se uso la extencion .join para juntar palabras
  return palabras.join(' ');
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código: 
  for (let i = 0; i < array.length; i++) {
    if (elemento === array[i]) {
      return true;
    }
  }
  return false;
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:

  // se declara la variable que recolectara las acumulaciones.
  let suma = 0;

  // se declara condicional para el aumento progresivo
  for (let i = 0; i < numeros.length; i++){
  
    // Se ejecuta la operacion matemática 
    suma = suma + numeros[i]; 
  }
  
  // se retorna el acumulador.
  return suma;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  
  // se declaran las variables que simplificaran las operaciones. 
  let suma = 0;
  let promedio = 0;

  // se declara la condicional para el aumento progresivo.
  for(let i = 0; i < resultadosTest.length; i++){
  
    // se realiza las operaciones matemáticas.
    suma = suma + resultadosTest[i]; 
    promedio = suma / resultadosTest.length; 
  }

  // retorna el valor solicitado.
  return promedio;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:

  /*se declara la variable de la cual se sacaran los valores
  y se iguala al valor otorgado por el array.*/
  let box = numeros[0];
  
  // se declara condicional de aumento progresivo.
  for (let i = 1; i < numeros.length; i++){
  
    // se anida una condicional que busca el mayor valor dentro de grupo.
    if (numeros[i] > box) {
  
      // se iguala el contenedor al mayor valor encontrado.
      box = numeros[i];
    }
  }
  
  // se retorno el mayor valor
  return box;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:

  //se aplica condicional de si son valores menores a 1 entonces retorna solo 0.
  if (arguments.length < 1) {
    return 0;
  }
  
  // se declara la variable y se iguala al valor que se tomo como pase en la condicion anterior.
  let producto = 1;
  
  // se declara la condicional de aumento progresivo.
  for (var i = 0; i < arguments.length; i++) {
    producto = producto * arguments[i];
  }
  return producto;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí

  // se declara la variable que acumulara el conteo.
  let contador = 0;
  
  // se declara la condicion de aumneto progresivo.
  for (let i = 0; i < arreglo.length; i++) {
  
    // se anida la condicional que especifica el tipo de valores que se desean guardar.
    if (arreglo[i] > 18) {
  
      // operacion matemática.
      contador = contador + 1;
    }
  }
  return contador;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   

  // se declara la condicional especificando los valores para una condición.
  if (numeroDeDia === 1 || numeroDeDia === 7) {
    return "Es fin de semana";
  }
  return "Es dia Laboral";
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí

  /* se de declara variable donde se concentran un grupo de valores, se lo iguala al valor brindado
  por el array y se le agrega la extencion que permite que convertir el valor en una cadena,
  mientras que la expresión .split me genera la separación de los valores dentro de la cadena. */
  let numero = n.toString().split('');

  // se agrega el condicional que especifica el valor que se busca en el orden deseado.
  if (numero[0] === '9'){

    // Segun la propuesta del ejercicio, busca que retornen un valor booleano.
    return true;
  }
  return false;
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  

  // se declara la variable de aumento progresivo.
  for ( var i = 0; i < arreglo.length; i++){
  
    // se anida la condicion que busca la diferenciación entre los valores del arreglo.
    if (arreglo[i] !== arreglo[i + 1]){
  
      // retorna como resultado un valor booleano.
      return false;
    }
    return true;
  }
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:

  /* Se declara el nuevo array en el que se depositara el resultado, se iguala al valor brindado por el array
  y se le agraga la extención .filter, que nos permite buscar mediante una especificacion los tipos de valores
  que se buscan.*/
  let nuevoArray = array.filter((e) => e === 'Enero' || e === 'Marzo' || e === 'Noviembre');
 
  // se inserta la condicional anidada que busca establecer el parametro de exclusion.
  if (nuevoArray.length < 3){
 
    // de estar dentro del parametro de exclución, brindara el mensaje de respuesta.
    return "No se encontraron los meses pedidos";
  }
  return nuevoArray;
} 


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:

  /* se declara la nueva variable en un nuevo array y se lo iguala a un contenedor de valores. */
  let newArray = [];
 
  // se declara la variable de aumento progresivo.
  for (let i = 0; i < array.length; i++) {
 
    // se anida la condicional que afectara al array inicial sobre el parametro brindado.
    if (array[i] > 100) {
 
      // de cumplir con la condicional anterior, se agregara al nuevo array.
      newArray.push(array[i]);
    }
  }
  return newArray;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:

  // se declara la variable como nuevo array y se lo iguala a un contenedor de valores.
  var breakArray = [];
  
  // se declara la variable de aumento progresivo.
  for (var i = 0; i < 10; i++){
  
    // se especifica el tipo de aumento que tendra según especificaciones brindadas.
    numero = numero + 2;
  
    // se añade el nuevo valor al conjunto.
    breakArray.push(numero);
  
    // se anida condicional y se lo igual al valor, en este caso de ser igual se aplicara un condicion especial.
    if (i === breakArray[i]) {
      break   // esta vendria a ser la condicional especial.
    }
  }
  
  // siendo la misma condicional anidada anteriormente, solo que esta vez retornara una respuesta.
  if (i === breakArray[i]){
    return "Se interrumpió la ejecución";
  }
  return breakArray;
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:

  // se delcara la varuable como nuevo array y se iguala a un contenedor de valores.
  let continueArray = [];
  
  // se declara condicional de aumento progresivo.
  for (let i = 0; i < 10; i++){
  
    /*se declara condicional anidad donde se detalla una condicion especifica del enunciado,
    y sobre el cual se aplicara condición especial*/ 
    if (i === 5){
      continue;   // condicion especial
    }
  
    // ejecucion matemática 
    numero = numero + 2;
  
    // se añade al nuevo array.
    continueArray.push(numero);
  }
  return continueArray;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};

// No cambies los nombres de las funciones.

function crearUsuario() {
  // Crea una Clase de ES6 o una función constructor llamada "Usuario"
  // Debe aceptar un objeto "opciones" con las propiedades "usuario", "nombre", "email" y "password"
  // En el `contructor`, define el usuario, el nombre, el email y la contraseña
  // El `contructor` debe tener un método llamado "saludar" en su `prototype` que devuelva una string 'Hola, mi nombre es {{nombre}}'
  // {{nombre}} debe ser el nombre definido en cada instancia
  // Devuelve la clase
  // Tu código:
  function Usuario (opciones){
    this.usuario = opciones.usuario;
    this.nombre = opciones.nombre;
    this.email = opciones.email;
    this.password = opciones.password;
  }
  Usuario.prototype.saludar = function() {
    return 'Hola, mi nombre es ' + this.nombre;
  }
  return Usuario;
}

function agregarMetodoPrototype(Constructor) {
  // Agrega un método al Constructor del `prototype`
  // El método debe llamarse "saludar" y debe devolver la string "Hello World!"
  // Tu código:
  Constructor.prototype.saludar = function (){
  return "Hello World!"
  }
}

function agregarStringInvertida() {
  // Agrega un método al prototype de String que devuelva la misma
  // cadena de caracteres, pero invertida.
  // El método debe llamarse "reverse"
  // Ej: 'menem'.reverse() => menem
  // 'toni'.reverse() => 'inot'
  // Pista: Necesitarás usar "this" dentro de "reverse"

  /* Método 1
  se declara el método que se empleara.
  String.prototype.reverse = function() {
    
    se declará la variable que se igualara al valor que introduzcamos. 
    let stringInvertida = '';

    se propone la condicional de aumento progresivo pero con variaciones
    que hagan referencia al valor que ingresaremos pero que también aplicará
    un metodo logico que nos devolvera los valores en orden contrario, y
    se dara asi en el ancho de la cadena de valores que se ingrese. 
    for (let i = this.length - 1; i >= 0; i--) {

      se toma la variable que se declaro anteriormente y la iguala al mismo 
      sumandole el valor acompañado de la extencion .charAt que reacomoda 
      el string en el nuevo orden segun su indice.
      stringInvertida = stringInvertida + this.charAt(i);
    }

    se retorna la string invertida.
    return stringInvertida;
  } */

  // Metodo 2

  // se declara el método que se empleara.
  String.prototype.reverse = function () {

    // se declaran las variables en las cuales se les aplicara diferentes extenciones.
    // como .split que desglosa los caracteres.
    let stringSepared = this.split('');

    // seguido del .reverse que es la estrella de este ejercicio.
    let stringInverter = stringSepared.reverse();

    // y por último se crea la variable con la que se llamara el resultado que buscamos.
    let resultado = stringInverter.join("");

    // se llama el resultado.
    return resultado;
  }

  /* Método 3 (Pro)
  String.prototype.reverse = function () {
    return this.split('').reverse().join('');
  } */

}

// ---------------------------------------------------------------------------//
  //Crea el constructor de la clase "Persona"
  //Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio"
  //Debe tener un método llamado "detalle" que nos devuelve un objeto con las propiedades de la persona y sus valores.
  //Ej: { 
    //   Nombre: 'Juan',
    //   Apellido: 'Perez',
    //   Edad: 22,
    //   Domicilio: 'Saavedra 123'
    //  }

  class Persona {
    constructor(nombre, apellido, edad, domicilio) {
      // Crea el constructor:
      this.nombre = nombre;
      this.apellido = apellido;
      this.edad = edad;
      this.domicilio = domicilio;
      this.detalle = function() {
        return {
          Nombre: this.nombre,
          Apellido: this.apellido,
          Edad: this.edad,
          Domicilio: this.domicilio
        }
      }
    }
  }

function crearInstanciaPersona(nombre, apellido, edad, dir) {
  //Con esta función vamos a crear una nueva persona a partir de nuestro constructor de persona
  //(creado en el ejercicio anterior)
  //Recibirá los valores "Juan", "Perez", 22, "Saavedra 123" para sus respectivas propiedades
  //Devolver la nueva persona creada

  // la clave de este ejercicio radica en la palabra clave NUEV@, que lo que hace es referenciar
  // a la palabra clave 'new'.
  let Julio = new Persona(nombre, apellido, edad, dir);
  // se llama la nueva variable.
  return Julio;  
}
  
function agregarMetodo() {
  //La función agrega un método "datos" a la clase Persona que toma el nombre y la edad de
  //la persona y devuelve: 
  //Ej: "Juan, 22 años"
  Persona.prototype.datos = function(){
    return (this.nombre + ', ' + this.edad + ' años');
  }
}
  

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearUsuario,
  agregarMetodoPrototype,
  agregarStringInvertida,
  crearInstanciaPersona,
  agregarMetodo, 
  Persona
};

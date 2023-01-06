// No cambies los nombres de las funciones.

function crearGato (nombre, edad) {
  // Crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre".
  // Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el argumento "edad"
  // Agrega un método (funcion) llamado "meow" que devuelva el string "Meow!"
  // Devuelve el objeto
  // Tu código:
  var gato = {
    nombre: nombre, 
    edad: edad,
    meow: function(){
      return "Meow!";
    }
  }
  return gato;
}

function agregarPropiedad (objeto, property) {
  // Agrega una propiedad al objeto (argumento "objeto") con el valor `null`
  // Devuelve el objeto
  // NOTA: El nombre de la propiedad no es "propiedad",
  // el nombre es el valor del argumento llamado "property" (una cadena/string)
  // Tu código:
  objeto[property] = null;
  return objeto;
}

function invocarMetodo (objeto, metodo) {
  // "metodo" es una cadena que contiene el nombre de un método (funcion) en el objeto
  // Invoca ese método
  // Nada necesita ser devuelto ("returned")
  // Tu código:
  objeto[metodo]();
}

function multiplicarNumeroDesconocidoPorCinco (objetoMisterioso) {
  // "objetoMisterioso" tiene una propiedad llamada "numeroMisterioso"
  // Multiplica el numeroMisterioso por 5 y devuelve el producto
  // Tu código:
  let resultado = objetoMisterioso.numeroMisterioso * 5
  return resultado;
}

function eliminarPropiedad (objeto, unaPropiedad) {
  // Elimina la propiedad de objeto cuyo nombre está pasado por el parametro unaPropiedad
  // tip: tenes que usar bracket notation
  // Devuelve el objeto
  // Tu código:
  delete objeto[unaPropiedad];
  return objeto;
}

function nuevoUsuario (nombre, email, password) {
  // Crea un nuevo objeto con las propiedades coincidiendo con los argumentos que se pasan
  // a la función
  // Devuelve el objeto
  // Tu código:
  let object = {
    nombre: nombre,
    email: email,
    password: password
  }
  return object;
}

function tieneEmail (usuario) {
  // Devuelve "true" si el usuario tiene un valor definido para la propiedad "email"
  // De lo contratio, devuelve "false"
  // Tu código:
  if (usuario.email !== null && usuario.email !== undefined){
    return true;
  }
  return false;
}

function tienePropiedad (objeto, propiedad) {
  // Devuelve "true" si el objeto (parámetro "objeto") tiene una propiedad (key)
  // cuyo nombre es igual al valor del argumento "propiedad"
  // "propiedad" es un string
  // De lo contrario, devuelve "false"
  // Tu código:
  if(objeto.hasOwnProperty(propiedad)){
    return true;
  }
  return false;
}

function verificarPassword (usuario, password) {
  // Comprueba si la "password" enviada coincide con la propiedad "password" del objeto "usuario"
  // Devuelve "true" si coinciden
  // De lo contrario, devuelve "false"
  // Tu código:

  // Usamos una condicional para validar si el objeto.parametro es igual al parametro establecido.
  if (usuario.password === password){

    // Retornamos el resultado en modo booleano.
    return true;
  }
  return false;
}

function actualizarPassword (usuario, nuevaPassword) {
  // Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevaPassword"
  // Devuelve el objeto
  // Tu código:

  /* Llamamos al objeto y con DOT NOTATION accedemos a la propiedad ya establecida y la
  igualamos a la nueva propiedad que deseamos que se registre. */
  usuario.password = nuevaPassword

  //  retornamos el objeto.
  return usuario;
}

function agregarAmigo (usuario, nuevoAmigo) {
  // "usuario" tiene una propiedad llamada "amigos" que es un array
  // Agrega "nuevoAmigo" al final de ese array
  // Devuelve el objeto "usuario"
  // Tu código:

  /* Llamamos al objeto y a traves del DOT NOTATION accedemos a uno de sus propiedades, seguido
  añadimos la propiedad que nos permite adicionar un valor al final del array. */
  usuario.amigos.push(nuevoAmigo);

  // retornamos el objeto.
  return usuario;
}

function pasarUsuarioAPremium (usuarios) {
  // "usuarios" es un array de objetos "usuario"
  // Cada objeto "usuario" tiene la propiedad "esPremium"
  // Define cada propiedad "esPremium" de cada objeto como "true"
  // Devuelve el array de usuarios
  // Tu código:

  /* Usamos el condicional de aumento progresivo para poder validar cada uno de los objetos
  "usuarios". */
  for (let i = 0; i < usuarios.length; i++){

    /* Describimos la funcion que buscamos y la igualamos al valor solicitado en el enuncuado. */
    usuarios[i].esPremium = true
  }

  // retornamos el objeto.
  return usuarios
}

function sumarLikesDeUsuario (usuario) {
  // "usuario" tiene una propiedad llamada "posts" que es un array
  // "posts" es un array de objetos "post"
  // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer)
  // Suma todos los likes de todos los objetos "post"
  // Devuelve la suma
  // Tu código:

  // declaramos una variable que usaremos para llamar el resultado de la suma que se realizara.
  var resultado = 0;
  
  /* como hace referencia a que debemos validar cada uno de los valores que se haya registrado,
  necesitamos usar el condicional de aumento progresivo llamando al objeto y su propiedad seguido
  de una propiedad adicional que sera el que detallara la extencion del valor.*/
  for (let i = 0; i < usuario.posts.length; i++){
    
    /* sumamos e igualamos el totoal de valores obtenidos bajo el parametro birndado en el enunciado
    del problema. En este caso hace referencia a cuantos de los usuarios cuentan o recibieron la
    propiedad "likes". */
    resultado += usuario.posts[i].likes;
  }

  // retornamos la variable que declaramos al inicio del ejercicio.
  return resultado;
}

function agregarMetodoCalculoDescuento (producto) {
  // Agregar un método (función) al objeto "producto" llamado "calcularPrecioDescuento"
  // Este método debe multiplicar el "precio" del "producto" ("producto.precio" o "producto[precio]")
  // y "porcentajeDeDescuento" para obtener el descuento
  // El método resta el descuento del precio y devuelve el precio con descuento
  // Devuelve el objeto "producto" al final de la función
  // Ejemplo:
  // producto.precio -> 20
  // producto.porcentajeDeDescuento -> 0.2 (o simplemente ".2")
  // producto.calcularPrecioDescuento() -> 20 - (20 * 0.2)
  // Tu código:

  /* dentro del objeto producto existe una propiedad que se llama calcularPrecioDescuento,
  la cual, es llamada a traves de DOT NOTATION y se le asigna una funcion*/
  producto.calcularPrecioDescuento = function() {
    /* retornamos el precio del descuento despues de haber realizado los calculos
    relacionados obteniendo los demas datos de las otras propiedades declaradas.*/
    return this.precio - (this.precio * this.porcentajeDeDescuento);
  }
  // retornamos el objeto.
  return producto;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearGato,
  agregarPropiedad,
  invocarMetodo,
  multiplicarNumeroDesconocidoPorCinco,
  eliminarPropiedad,
  nuevoUsuario,
  tieneEmail,
  tienePropiedad,
  verificarPassword,
  actualizarPassword,
  agregarAmigo,
  pasarUsuarioAPremium,
  sumarLikesDeUsuario,
  agregarMetodoCalculoDescuento
}

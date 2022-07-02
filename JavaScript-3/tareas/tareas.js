// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  return array[0];
}

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length -1];
  }

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  // if (Array.isArray(array)) { 
  //   if (array.filter(i => typeof i !== "number").length === 0) {
  //     return array.map(i => i + 1);
  //   }
  // }
  arrayIncrementado= [];
  for( let i = 0; i < array.length; i++){
   arrayIncrementado.push (array [i] + 1);
  }
  return arrayIncrementado;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  return palabras.join(' ');  // .join es un separador.
 }

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  if (array.includes (elemento)){  // includes sirve para ver si una cadena existe dentro de otra.
    return true;
  }
  return false;
}

function agregarNumeros(numeros) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  // var acumulador = 0;
  // for (var i = 0; i < numeros.length ; i++){
  //   acumulador += numeros [i];
  // }
  // return acumulador;
  function suma( a, b ){
    return a + b;
  }
  const resultado = numeros.reduce(suma);
  return resultado;
}
  
function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  // var promedio = 0;
  // for(var i = 0; i < resultadosTest.length; i++){
  //   promedio += resultadosTest[i]
  // }
  // return promedio / resultadosTest.length;
  function suma(a,b){
    return a + b;
  }
  const resultado = resultadosTest.reduce(suma);
  return resultado / resultadosTest.length;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  // return mayor = Math.max.apply(null, numeros);
  var mayor = 0;
  for (var i = 0 ; i < numeros.length ; i++){
    if (numeros[i] > mayor){
      mayor = numeros[i];
    }
  }
  return mayor;
}

function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 19.
  //Escribe tu código aquí:
  let elementoMayor = 0;
  for (i = 0; i < arreglo.length; i++){
    if (arreglo[i] > 18){
      elementoMayor += 1;
    }
  }
  return elementoMayor;
}

function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí:
 if (numeroDeDia === 1 || numeroDeDia === 7){
  return "Es fin de semana";
 }else{
  return "Es dia Laboral";
 }
} 

function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí:
  let numeroString = n.toString();
  if (numeroString[0] == 9){
    return true;
  }else{
    return false;
  }
}

function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí:
  let newArreglo = arreglo[0];
  for (i = 1; i < arreglo.length; i++){
    if (newArreglo !== arreglo[i]){
      return false;
    }else{
      return true;
    }
  } 
}

function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  let nuevosMeses = [];
  for (i = 0 ; i < array.length; i++ ){
    if (array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre"){
      nuevosMeses.push(array[i]);
    }
  }
  if (nuevosMeses.length === 3){
    return nuevosMeses;
  }else{
    return "No se encontraron los meses pedidos";
  }
}

function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  let nuevoArray = [];
  for (i =0 ; i < array.length; i++){
    if (array[i] > 100){
      nuevoArray.push(array[i])
    }
  }
  return nuevoArray;
}


// No modificar nada debajo de esta línea, de lo contrario no correrán los test.
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
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
};

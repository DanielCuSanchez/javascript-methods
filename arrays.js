const initArrayMethods = () => {
  let arregloDeFrutas = ["🍎", "🍍", "🍋", "🍓", "🍉"];
  console.log("Arreglo de frutas inicial".magenta);
  console.log(arregloDeFrutas);
  console.log("longitud del arreglo: ", `${arregloDeFrutas.length}`.magenta);

  //Devuelve una nueva matriz combinando valores de una matriz que se especifica como parámetro con valores de matriz existentes.

  console.log("concat() method".magenta);
  console.log(arregloDeFrutas.concat(["🍌", "🍇"]));

  //Devuelve verdadero o falso si cada elemento de la matriz especificada satisface una condición especificada en la función de devolución de llamada. Devuelve falso incluso si un solo elemento no satisface la condición.

  console.log("every() method".magenta);
  console.log(arregloDeFrutas.every((element) => element === "🍇"));

  //Devuelve una nueva matriz con todos los elementos que satisfacen una condición especificada en la función de devolución de llamada.
  console.log("filter() method".magenta);
  console.log(arregloDeFrutas.filter((element) => element === "🍉"));

  //Ejecuta una función de devolución de llamada para cada elemento de una matriz.
  console.log("forEach() method".magenta);
  arregloDeFrutas.forEach((element) => {
    console.log(element.concat(" ___agregar___", " 🚀"));
  });
  //Devuelve el índice de la primera aparición del elemento especificado en la matriz, o -1 si no se encuentra.
  console.log("indexOf() method".blue);
  console.log(arregloDeFrutas.indexOf("🍉"));
  //Devuelve la cadena de todos los elementos separados por el separador especificado
  console.log("join() method".magenta);
  console.log(arregloDeFrutas.join("__👾__")); //__👾__🍍__👾__🍋__👾__🍓__👾__🍉

  //Devuelve el índice de la última aparición del elemento especificado en la matriz, o -1 si no se encuentra.
  console.log("lastIndexOf() method".blue);
  console.log(arregloDeFrutas.lastIndexOf("P")); //-1 porque la "P" no se encuentra en el arreglo

  //Crea una nueva matriz con los resultados de llamar a una función proporcionada en cada elemento de esta matriz.
  console.log("map() method".magenta);
  console.log(arregloDeFrutas.map((element) => element.charCodeAt(0))); //Devulve char UNICODE por cada elemento

  //Elimina el último elemento de una matriz y devuelve ese elemento.
  console.log("pop() method".magenta);
  console.log(arregloDeFrutas);
  console.log(arregloDeFrutas.pop());

  //Agrega uno o más elementos al final de una matriz y devuelve la nueva longitud de la matriz.
  console.log("push() method".magenta);
  console.log(arregloDeFrutas.push("😃"));
  console.log(arregloDeFrutas);

  //Pasa dos elementos simultáneamente en la función de devolución de llamada (hasta que llega al último elemento) y devuelve un solo valor.

  console.log("reduce() method".magenta);
  console.log(arregloDeFrutas);
  console.log(
    "Acumulador: ",
    arregloDeFrutas.reduce((acumulador, actual) => {
      console.log("actual: ", actual);
      return acumulador + actual;
    })
  );

  //Pasa dos elementos simultáneamente en la función de devolución de llamada de derecha a izquierda (hasta que llega al último elemento) y devuelve un solo valor.
  console.log("reduceRight() method".magenta);
  console.log(
    arregloDeFrutas.reduceRight((acumulador, actual) => acumulador + actual)
  );

  //Invierte los elementos de una matriz. El elemento en el último índice será el primero y el elemento en el índice 0 será el último.
  console.log("reverse() method".magenta);
  console.log(arregloDeFrutas);
  console.log(arregloDeFrutas.reverse());

  //Elimina el primer elemento de una matriz y devuelve ese elemento.
  console.log("shift() method".magenta);
  console.log(arregloDeFrutas.shift());

  //Devuelve una nueva matriz con elementos de principio a fin especificados.
  console.log("slice() method".magenta);
  console.log(arregloDeFrutas.slice(0, 2));
  console.log(arregloDeFrutas);

  //Devuelve verdadero si al menos un elemento de esta matriz satisface la condición de la función de devolución de llamada.
  console.log("some() method".magenta);
  console.log(arregloDeFrutas.some((element) => element === "🍍"));

  //Sorts the elements of an array.
  console.log("sort() method".magenta);
  console.log([1, 2, 22, 0, 2220, 55].sort((a, d) => a - d));

  //Agrega y / o elimina elementos de una matriz.
  console.log("splice() method".magenta);
  console.log(arregloDeFrutas.splice(0, 1));
  console.log(arregloDeFrutas);

  //Devuelve una cadena que representa la matriz y sus elementos.
  console.log("toString() method".magenta);
  console.log(arregloDeFrutas.toString());

  //Agrega uno o más elementos al frente de una matriz y devuelve la nueva longitud de la matriz.
  console.log("unshift() method".magenta);
  console.log(arregloDeFrutas.unshift("🍇"));
  console.log(arregloDeFrutas);
};

module.exports = { initArrayMethods };

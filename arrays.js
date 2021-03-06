const initArrayMethods = () => {
  let arregloDeFrutas = ["馃崕", "馃崓", "馃崑", "馃崜", "馃崏"];
  console.log("Arreglo de frutas inicial".magenta);
  console.log(arregloDeFrutas);
  console.log("longitud del arreglo: ", `${arregloDeFrutas.length}`.magenta);

  //Devuelve una nueva matriz combinando valores de una matriz que se especifica como par谩metro con valores de matriz existentes.

  console.log("concat() method".magenta);
  console.log(arregloDeFrutas.concat(["馃崒", "馃崌"]));

  //Devuelve verdadero o falso si cada elemento de la matriz especificada satisface una condici贸n especificada en la funci贸n de devoluci贸n de llamada. Devuelve falso incluso si un solo elemento no satisface la condici贸n.

  console.log("every() method".magenta);
  console.log(arregloDeFrutas.every((element) => element === "馃崌"));

  //Devuelve una nueva matriz con todos los elementos que satisfacen una condici贸n especificada en la funci贸n de devoluci贸n de llamada.
  console.log("filter() method".magenta);
  console.log(arregloDeFrutas.filter((element) => element === "馃崏"));

  //Ejecuta una funci贸n de devoluci贸n de llamada para cada elemento de una matriz.
  console.log("forEach() method".magenta);
  arregloDeFrutas.forEach((element) => {
    console.log(element.concat(" ___agregar___", " 馃殌"));
  });
  //Devuelve el 铆ndice de la primera aparici贸n del elemento especificado en la matriz, o -1 si no se encuentra.
  console.log("indexOf() method".blue);
  console.log(arregloDeFrutas.indexOf("馃崏"));
  //Devuelve la cadena de todos los elementos separados por el separador especificado
  console.log("join() method".magenta);
  console.log(arregloDeFrutas.join("__馃懢__")); //__馃懢__馃崓__馃懢__馃崑__馃懢__馃崜__馃懢__馃崏

  //Devuelve el 铆ndice de la 煤ltima aparici贸n del elemento especificado en la matriz, o -1 si no se encuentra.
  console.log("lastIndexOf() method".blue);
  console.log(arregloDeFrutas.lastIndexOf("P")); //-1 porque la "P" no se encuentra en el arreglo

  //Crea una nueva matriz con los resultados de llamar a una funci贸n proporcionada en cada elemento de esta matriz.
  console.log("map() method".magenta);
  console.log(arregloDeFrutas.map((element) => element.charCodeAt(0))); //Devulve char UNICODE por cada elemento

  //Elimina el 煤ltimo elemento de una matriz y devuelve ese elemento.
  console.log("pop() method".magenta);
  console.log(arregloDeFrutas);
  console.log(arregloDeFrutas.pop());

  //Agrega uno o m谩s elementos al final de una matriz y devuelve la nueva longitud de la matriz.
  console.log("push() method".magenta);
  console.log(arregloDeFrutas.push("馃槂"));
  console.log(arregloDeFrutas);

  //Pasa dos elementos simult谩neamente en la funci贸n de devoluci贸n de llamada (hasta que llega al 煤ltimo elemento) y devuelve un solo valor.

  console.log("reduce() method".magenta);
  console.log(arregloDeFrutas);
  console.log(
    "Acumulador: ",
    arregloDeFrutas.reduce((acumulador, actual) => {
      console.log("actual: ", actual);
      return acumulador + actual;
    })
  );

  //Pasa dos elementos simult谩neamente en la funci贸n de devoluci贸n de llamada de derecha a izquierda (hasta que llega al 煤ltimo elemento) y devuelve un solo valor.
  console.log("reduceRight() method".magenta);
  console.log(
    arregloDeFrutas.reduceRight((acumulador, actual) => acumulador + actual)
  );

  //Invierte los elementos de una matriz. El elemento en el 煤ltimo 铆ndice ser谩 el primero y el elemento en el 铆ndice 0 ser谩 el 煤ltimo.
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

  //Devuelve verdadero si al menos un elemento de esta matriz satisface la condici贸n de la funci贸n de devoluci贸n de llamada.
  console.log("some() method".magenta);
  console.log(arregloDeFrutas.some((element) => element === "馃崓"));

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

  //Agrega uno o m谩s elementos al frente de una matriz y devuelve la nueva longitud de la matriz.
  console.log("unshift() method".magenta);
  console.log(arregloDeFrutas.unshift("馃崌"));
  console.log(arregloDeFrutas);
};

module.exports = { initArrayMethods };

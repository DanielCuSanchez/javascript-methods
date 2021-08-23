const initStringsMethods = () => {
  let miFrase = "Hola mundo con Javascript";
  let miFrase2 = "ESTO es otra frase";

  console.log("Frase inicial".red);
  console.log(miFrase.blue);
  console.log("Longitud de caracteres de la frase: ", `${miFrase.length}`.red);

  //Muestra la letra en la posición 2
  console.log("charAt(position)	method".blue);
  console.log(miFrase.charAt(2)); //Imprime l

  //UNICODE Es un super set de ASCII, unicode es de 32 bits y es un sistema flexible
  //Norma UTF (Uniform transform format)

  //Muestra el valor Unicode del caracter dado en una posición solicitada
  console.log("charCodeAt(position) method".blue);
  console.log(miFrase.charCodeAt(0)); //Devuelve el valor 97 que es unicode de a

  //Concatena 2 o más strings
  console.log("concat([string,,]) method".blue);
  console.log(miFrase.concat(" ", miFrase2)); // Hola mundo con Javascript ESTO es otra frase

  //Retorna el indice de la primera ocurrencia dentro del string
  console.log("indexOf(SearchString, Position) method".blue);
  console.log(miFrase.indexOf("o")); //Devuelve 1 que es la posición de "o"

  //Retorna el indice de la ultima ocurrencia dentro del string
  console.log("lastIndexOf(SearchString, Position) method".blue);
  console.log(miFrase.lastIndexOf("o")); //Devuelve 12 que es la posición de la última ocurrencia de "o"

  //Compara 2 strings y devuelve la posición en base al orden alfabetico
  console.log("localeCompare(string,position)	method".blue);
  console.log(miFrase.localeCompare(miFrase2, 0)); //devuelve 1 porque Hola es una frase que empieza con H y esta despues de la E de la otra frase

  //Devuelve del string el string que hace match con la expresión regular
  console.log("match(RegExp) method".blue);
  console.log(miFrase.match("Hola")); //Retorna un areglo con la info del match

  //Reemplaza el string por el nuevo que se solicita en parametro
  console.log("replace(searchValue, replaceValue) method".blue);
  console.log(miFrase.replace("Hola", "Hello")); //imprime Hello mundo con Javascript

  //Extrae una sección de una cadena según el índice inicial y final especificado y devuelve una nueva cadena.
  console.log("slice(startNumber, endNumber) method".blue);
  console.log(miFrase.slice(0, 4)); // imprime Hola que es hasta la posición 3

  //Divide una cadena en una matriz de cadenas separando la cadena en subcadenas según el separador especificado. La expresión regular también se puede utilizar como separador.

  console.log("split(separatorString, limitNumber) method".blue);
  console.log(miFrase.split(" ")); //[ 'Hola', 'mundo', 'con', 'Javascript' ]

  //Devuelve los caracteres de una cadena desde la posición inicial especificada hasta el número especificado de caracteres (longitud).
  console.log("substr(start, length) method".blue);
  console.log(miFrase.substr(0, 4)); //Hola

  //Devuelve los caracteres de una cadena entre los índices inicial y final.
  console.log("substring(start, end) method".blue);
  console.log(miFrase.substring(0, 10)); //Hola mundo

  //Convierte una cadena a minúsculas según la configuración regional actual.
  console.log("toLocaleLowerCase() method".blue);
  console.log(miFrase.toLocaleLowerCase()); //hola mundo con javascript

  //Convierte una picadura en mayúsculas según la ubicación actual.
  console.log("toLocaleUpperCase() method".blue);
  console.log(miFrase.toLocaleUpperCase()); //HOLA MUNDO CON JAVASCRIPT

  //Devuelve un valor de cadena en minúsculas.
  console.log("toLowerCase() method".blue);
  console.log(miFrase.toLowerCase()); //hola mundo con javascript

  //Devuelve el valor del objeto String.
  console.log("toString() method".blue);
  console.log(miFrase.toString());

  //Devuelve un valor de cadena en mayúsculas.
  console.log("toUpperCase() method".blue);
  console.log(miFrase.toUpperCase()); //HOLA MUNDO CON JAVASCRIPT

  //Devuelve el valor primitivo del objeto de cadena especificado.
  console.log("valueOf() method".blue);
  console.log(miFrase.valueOf()); //Hola mundo con Javascript
};

module.exports = { initStringsMethods };

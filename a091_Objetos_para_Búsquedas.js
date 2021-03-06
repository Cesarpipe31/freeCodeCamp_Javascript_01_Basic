// Usa objetos para hacer búsquedas
// Los objetos pueden ser considerados como un almacenamiento clave/valor,
// como un diccionario. Si tienes datos tabulares, puedes utilizar un objeto
// para hacer una búsqueda de valores en lugar de una declaración switch o
// encadenar if/else. Esto es de mucha utilidad cuando se sabe que los datos
// de entrada están limitados a un cierto rango.

// Aquí hay un ejemplo de una simple búsqueda de alfabeto inverso:

// const alpha = {
//   1:"Z",
//   2:"Y",
//   3:"X",
//   4:"W",
//   ...
//   24:"C",
//   25:"B",
//   26:"A"
// };

// alpha[2];
// alpha[24];

// const value = 2;
// alpha[value];
// alpha[2] es la cadena Y, alpha[24] es la cadena C, y alpha[value] es la cadena Y.

// Convierte la declaración switch en un objeto llamado lookup. Úsalo para buscar val
// y asignar la cadena asociada a la variable result.

// ///

// // Configuración
// function phoneticLookup(val) {
//   let result = "";

//   // Cambia solo el código debajo de esta línea
//   switch(val) {
//     case "alpha":
//       result = "Adams";
//       break;
//     case "bravo":
//       result = "Boston";
//       break;
//     case "charlie":
//       result = "Chicago";
//       break;
//     case "delta":
//       result = "Denver";
//       break;
//     case "echo":
//       result = "Easy";
//       break;
//     case "foxtrot":
//       result = "Frank";
//   }

//   // Cambia solo el código encima de esta línea
//   return result;
// }

// phoneticLookup("charlie");

///

// Configuración
function phoneticLookup(val) {
  let result = ""

  // Cambia solo el código debajo de esta línea
  const lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank",
  }
  result = lookup[val]
  // Cambia solo el código encima de esta línea
  return result
}

phoneticLookup("charlie")

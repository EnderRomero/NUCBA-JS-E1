// 1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.

function parOImpar(num) {
  num % 2 === 0
    ? console.log(`El número ${num} es par`)
    : console.log(`El número ${num} es impar`);
}

parOImpar(4);
parOImpar(7);

// 2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.

function mayorMenorOIgual(num1, num2) {
  if (num1 === num2) {
    console.log(`El número ${num1} es igual al número ${num2}`);
  } else {
    num1 < num2
      ? console.log(`El número ${num1} es menor que el número ${num2}`)
      : console.log(`El número ${num1} es mayor que el número ${num2}`);
  }
}

mayorMenorOIgual(2, 5)
mayorMenorOIgual(5, 5)
mayorMenorOIgual(8, 5)

// 3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.
// 4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.
// 5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.
// 6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.
// 7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".
// 8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.

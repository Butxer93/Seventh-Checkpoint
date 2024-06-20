// Cree una función JS que acepte 4 argumentos. Suma los dos primeros argumentos, luego los dos segundos y multiplícalos. Si el número creado es mayor que 50, la consola registra "¡El número es mayor que 50!". Si es más pequeño, la consola registra "¡El número es menor que 50!"

function sumAndMultiply(a, b, c, d) {
    let sum1 = a + b;
    let sum2 = c + d;
    let multiply = sum1 * sum2;
    if (multiply > 50) {
        console.log("¡El número es mayor que 50!");
    } else {
        console.log("¡El número es menor que 50!");
    }
}

sumAndMultiply(2,3,6,1) // 35
sumAndMultiply(2,3,6,9) // 75
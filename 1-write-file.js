/**
 * Escribe un fichero de nombre "test.txt" con el texto "Hello World!".
 * 
 */

const fs = require('fs');

fs.writeFile("text.txt", "Hello World!", err => {
    if (err) {
        console.log("Ha ocurrido un error: ", err)
    } else {
        console.log("Hecho!")
    }
})
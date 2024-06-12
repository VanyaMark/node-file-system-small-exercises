/**
 * Lee el fichero "test.txt" que acabas de crear y muestra su contenido por la consola
 */

const fs = require('fs');

fs.readFile("./text.txt", "utf-8", (err, data) => {

    if (err) {
        console.log("Error: ", err)
    } else {
        console.log(data)
    }
})
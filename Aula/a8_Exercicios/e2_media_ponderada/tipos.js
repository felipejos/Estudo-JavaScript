const notas = document.getElementById("dados")
                .innerHTML.split("\n").map(x => Number(x));

let media = ((notas[0] * 2) + (notas[1] * 3) + (notas[2] * 5))/10;

console.log(media);
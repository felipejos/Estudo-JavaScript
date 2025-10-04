// TAMANHO DO ARRAY
const valores = ["Maria", 37, false, 1.64];
const t1 = valores.length;
console.log("Tamanho do Array " + t1);

// REMOVER ELEMENTOS
const nomes = ["Maria", "João", "Ana", "Marcos"];
console.log(nomes);
console.log("\nTeste pop e shift");
const r1 = nomes.pop(); // Remove o ultimo elemento do array e retorna para r1
const r2 = nomes.shift(); // Remove o primeiro elemento do array e retorna para r2

console.log("shift: " + r2);
console.log("pop: " + r1);
console.log("sobrou: " + nomes);

// INSERIR ELEMENTOS
const alturas = [1.65, 1.82, 1.7];
alturas.push(1.75); //insere no final
alturas.unshift(1.58); //insere no começo

console.log("\nTeste push e unshift");
console.log(alturas);

// INSERIR E REMOVER EM QUALQUER LUGAR
const letras = ["A", "B", "C", "D", "E", "F"];
console.log("\nTeste splice");
console.log(letras);
letras.splice(2, 3, 'X', 'Y'); // A partir da posição 2 remove 3 elementos e insere quantos elementos quiser
console.log(letras);

// CONCATENAR ARRAYS
const meninas = ["Maria", "Ana"];
const meninos = ["João", "Marcos"];

const todos = meninas.concat(meninos);
console.log("\nTeste concat");
console.log(todos)

// ACESSO E ATRIBUIÇÃO
const idades = [20, 30, 40, 50];
idades[1] = 38; // atualiza o valor antigo
console.log("\nTeste acesso e atribuição")
console.log(idades)

// PERCORRER UM ARRAY
console.log("\nTeste percorrer array")
const frutas = ["Banana", "Laranja", "Uva"];
for(let i = 0; i < frutas.length; i++){
    console.log(frutas[i])
}

console.log("\nTeste com ForEach")
// PERCORRER ARRAY COM FOR EACH
frutas.forEach(item => {
    console.log(item)
})
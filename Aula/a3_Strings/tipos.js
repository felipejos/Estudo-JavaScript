console.log("String literal entre aspas duplas");
console.log('String literal entre aspas simples');
console.log(`String literal entre crases`);

console.log("\nConcatenação e interpolação");
const num = 14.5;
console.log("O valor do produto é " + num);
console.log(`O valor do produto é ${num}`); //interpolação

console.log("\nConversão entre number e string")

const str1 = num.toString();
console.log(`Tipo de ${str1} é ${typeof str1}`)

const str2 = num.toFixed(2); //define quantidade de casas decimais
console.log(`Tipo de  ${str2}: ${typeof str2}`);

const num1 = Number("14.5"); //converte uma string em numero
console.log(`Tipo de ${num1}: ${typeof num1}`);

const num2 = parseInt("21", 10); //converte uma string em numero na base 10
console.log(`Tipo de ${num2}: ${typeof num2}`);

const num3 = parseInt("21", 16); //converte na base 16
console.log(`Tipo de ${num3}: ${typeof num3}`);

const num4 = parseFloat("21.34", 10); //converte numero quebrado na base 10
console.log(`Tipo de ${num4}: ${typeof num4}`);

const str = "Felipe Jose  ";
console.log(`\nconst str = "Felipe José  ";`)
console.log(`toLowerCase: ${str.toLowerCase()}`); //converte tudo para minusculo
console.log(`toUpperCase: ${str.toUpperCase()}`); //converte tudo para maiusculo
console.log(`charAt(3): ${str.charAt(3)}`); //pega o charactere da posição 3
console.log(`tipo vetor str[3]: ${str[3]}`); //pega o charactere da posição 3
console.log(`replace: ${str.replace("i", "#")}`);
console.log(`replace recorrente: ${str.replace(/e/g, "#")}`);
console.log(`length: ${str.length}`);
console.log(`indexOf: ${str.indexOf("e")}`);
console.log(`lastIndexOf: ${str.lastIndexOf("e")}`);
console.log(`substring: ${str.substring(3)}`); //recorta a string a partir da posição
console.log(`substring: ${str.substring(3, 8)}`); //recorta a string a partir da posição 3 ate a 8

const data = "05/03/1992";
const mes = Number(data.substring(3, 5)); // pega o mes e ja converte para numero
console.log(mes);

const valor = 200.88;
const novoValor = valor.toString().replace(".", ",");
console.log(novoValor)

console.log(`trim: ${str.trim()}`) //apaga os espaços em branco no inicio e fim
# JavaScript - Strings

## Concatenação e Interpolação
```javascript
console.log("Um string literal pode ficar entre aspas duplas");
console.log('Um string literal pode ficar entre aspas simples');
console.log(`Um string literal pode ficar entre crases`);

console.log("Concatenação e interpolação");
console.log("O valor do produto é " + num + '.'); // concatenação
console.log(`O valor do produto é ${num}`); // interpolação (printf) 
```

## Conversão entre number e string
```javascript
// converte um numero para string
const str1 = num.toString(); 
console.log(`Tipo de ${str1}: ${typeof str1}`);

// converte um numero quebrado para string
const str2 = num.toFixed(2); 
console.log(`Tipo de ${str2}: ${typeof str2}`);

// converte um numero para string
const num1 = Number("14.5"); 
console.log(`Tipo de ${num1}: ${typeof num1}`);

// converte um numero inteiro na base 10
const num2 = parseInt("21", 10); 
console.log(`Tipo de ${num2}: ${typeof num2}`);

// converte um numero inteiro na base 16
const num3 = parseInt("21", 16);
console.log(`Tipo de ${num3}: ${typeof num3}`);

// converte um numero quebrado na base 10
const num4 = parseFloat("21.34", 10);
console.log(`Tipo de ${num4}: ${typeof num4}`);
```

## Funções de string

```javascript
const str = "Maria Silva  ";
console.log(`const str = "Maria Silva  "`);

console.log(`toLowerCase: ${str.toLowerCase()}`); // tudo minusculo
console.log(`toUpperCase: ${str.toUpperCase()}`); // tudo maiusculo
console.log(`charAt(3): ${str.charAt(3)}`); // char na posição 3
console.log(`replace (primeiro): ${str.replace("i", "$", )}`); // troca o char por outra coisa
console.log(`replace (todos): ${str.replace(/i/g, "$", )}`); // troca o char recorrente
console.log(`length: ${str.length}`); // verifica o tamanho da String
console.log(`indexOf: ${str.indexOf("i")}`); // retorna a posição da primeira string i
console.log(`lastIndexOf: ${str.lastIndexOf("i")}`); // retorna a ultima posição da string i
console.log(`subtring: ${str.substring(3, 8)}`); // recorta a String
console.log(`trim: ${str.trim()}`); // retira espaços em branco da frente e depois da String
```


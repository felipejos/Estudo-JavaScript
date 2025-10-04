const hora = 14;

if (hora < 12) {
  console.log("Bom dia");
} else if (hora < 18) {
  console.log("Boa tarde");
} else {
  console.log("Boa noite");
}

console.log("\nDia da Semana: ")
const week = 3;
switch (week) {
  case 1:
    console.log("Domingo");
    break;
  case 2:
    console.log("Segunda");
    break;
  case 3:
    console.log("Terça");
    break;
  case 4:
    console.log("Quarta");
    break;
  case 5:
    console.log("Quinta");
    break;
  case 6:
    console.log("Sexta");
    break;
  case 7:
    console.log("Sábado");
    break;
  default:
    console.log("Valor inválido");
}

console.log("\nLaço de repetição contando as repetições")
let count = 4;
while (count > 0) {
  console.log(`COUNT = ${count}`);
  count--;
}

console.log("\nMostra o valor de I enquanto for menor que 4")
for (let i = 0; i < 4; i++) {
  console.log(`I = ${i}`);
}

console.log("\ndo while: ")
let test = 4;
do {
  console.log(`TEST = ${test}`);
  test--;
} while (test > 0);
Este repositório explica, de forma simples e direta, como acessar elementos do HTML, manipular conteúdos, recortar textos, converter valores e formatar números usando JavaScript.

---

## 🏷️ 1. Selecionando um elemento do HTML
Você pode capturar um elemento específico de uma página utilizando o seu **ID**.  
Isso é útil quando você precisa acessar ou alterar o conteúdo de uma parte específica do HTML.

document.getElementById("**ID**");

---

## 📥 2. Acessando o conteúdo interno
Cada elemento do HTML possui um conteúdo interno, e podemos obtê-lo para leitura ou manipulação.  
Essa técnica é muito usada para exibir informações dinâmicas na tela, como mensagens, resultados e dados de entrada.

**VARIAVEL**.innerHTML

---

## ✂️ 3. Recortando textos com `split()`
O método **split()** permite **dividir uma string em partes**, com base em um separador (como espaço, vírgula ou quebra de linha).  
Por exemplo, um nome completo pode ser dividido em partes — nome, sobrenome e último nome — gerando um **array** com cada palavra separada.

---

## 🔢 4. Convertendo textos em números
Em JavaScript, dados que vêm do HTML geralmente são tratados como **texto** (strings).  
Para realizar cálculos, é necessário converter esses valores em **números reais ou inteiros**.  
A conversão garante que operações matemáticas funcionem corretamente, evitando erros de tipo.

Number(**VARIAVEL**);

---

## 🧮 5. Convertendo listas de textos em números
Quando temos uma **lista (array)** com vários textos representando números, podemos transformá-los todos de uma vez.  
Isso é feito aplicando uma função de conversão em cada item do array, gerando uma nova lista somente com números.

**ARRAY**.map(x => Number(x));

---

## 🎯 6. Arredondando números
Ao trabalhar com valores numéricos, é comum precisar limitar as **casas decimais**.  
O arredondamento serve para exibir resultados mais limpos e legíveis, especialmente quando se trata de valores monetários ou resultados de cálculos precisos.

**ARRAY**[**POSIÇÃO**].toFixed(**CASASDECIMAIS**)
**ARRAY**[0].toFixed(2)

---

## 💡 Dica extra
Para testar os conceitos, crie uma pequena página HTML com um elemento que contenha números ou textos.  
Depois, utilize o JavaScript para acessar, dividir, converter e formatar esses dados.  
Você pode acompanhar os resultados abrindo o **console do navegador (F12)**.

---

## 🧰 Tecnologias utilizadas
- 🟨 JavaScript (ES6+)  
- 🌐 HTML5  
- 🧠 Console do navegador

---

## ✨ Autor
**Felipe Soares**  
💻 Apaixonado por programação e aprendizado constante.

📫 [GitHub](https://github.com/felipejos)

---
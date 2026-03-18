document.write("<h1>Exercício 2</h1>");

var temperatura = prompt("Digite a temperatura Fahrenheit");

document.write("<p>A temperatura digitada foi " + temperatura + "</p>")

var resultado = ( Number(temperatura) - 32) * 5/9;
document.write("<p>O resultado convertido é " + resultado + "</p>" );
document.write("<h1>Exercício</h1>");

var valor = prompt ("Digite o valor da prestação");
document.write("<p> O valor da prestação foi "+ valor + "</p>");

var taxa = prompt ("A taxa de juros");
document.write("<p> O valor da taxa de juros foi " + taxa + " </p>");

var tempo = prompt ("O tempo de atraso");
document.write("<p>O tempo de atraso foi " + tempo + " </p>");

var valor = valor + ( valor * (taxa * taxa /100) * tempo);
document.write("<p>O valor da parcela foi " );


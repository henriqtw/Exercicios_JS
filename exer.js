function dadosDoAluno() {
let nomeDoAluno = "Eduardo Dias Roxo da Silva";
let idadeDoAluno = 17;
let curso = "Desenvolvimento de Sistemas";
let Semestre = "1°";

console.log("Nome: " + nomeDoAluno);
console.log("Idade: " + idadeDoAluno);
console.log("Curso: " + curso);
console.log("Semestre: " + Semestre);
}

console.log("Excercício 1");

console.log("===DADOS DO ALUNO===");
dadosDoAluno();

console.log(" ")

function compra() {
let precoTeclado = 150.00;
console.log("Preço do teclado: R$ " + precoTeclado.toFixed(2));
let precoMouse = 80.00;
console.log("Preço do mouse: R$ " + precoMouse.toFixed(2));
return precoTeclado + precoMouse;
}

console.log("Excercício 2");

console.log("===PRODUTOS===");
console.log("Valor total da compra: R$ " + compra().toFixed(2));

console.log(" ")

console.log("Excercício 3");

function calculartroco() {
    let valorDisponivel = 100.00;
    let valorGasto = 67.90;
    let troco = valorDisponivel - valorGasto;
    console.log("Valor disponível: R$ " + valorDisponivel.toFixed(2));
    console.log("Valor gasto: R$ " + valorGasto.toFixed(2));
    console.log("Troco: R$ " + troco.toFixed(2));
}

console.log("===COMPRA===");
calculartroco();

console.log(" ")

console.log("Excercício 4");

function calcularTemp(){
let Celcius = 25;
let Fahrenheit = (Celcius * 9/5) + 32;
console.log("Temperatura em Celsius: " + Celcius + "°C");
console.log("Temperatura em Fahrenheit: " + Fahrenheit.toFixed(2) + "°F");
}

console.log("===TEMPERATURA===");
calcularTemp();

console.log(" ")

console.log("Excercício 5");

function calcularArea() {
let base = 10;
let altura = 8;
let area = base * altura;
console.log("Base: " + base + "m");
console.log("Altura: " + altura + "m");
console.log("Área do retângulo: " + area + "m²");
}

console.log("===ÁREA DO RETÂNGULO===");
calcularArea();

console.log(" ")

console.log("Excercício 6");

function salario(){
    let salarioInicial = 3500.00
    let reajuste = salarioInicial * 0.08;
    console.log("Salário inicial: R$ " + salarioInicial.toFixed(2));
    console.log("Reajuste: R$" + reajuste.toFixed(2));
    console.log("Novo salário: R$ " + (salarioInicial + reajuste).toFixed(2));
}

console.log("===SALÁRIO===");
salario();

console.log(" ")

console.log("Excercício 7");

function notebook() {
    let precoNotebook = 4000.00;
    let desconto = "15%";
    let valorDesconto = precoNotebook * 0.15;
    let precoFinal = precoNotebook - valorDesconto;
    console.log("Preço do notebook: R$ " + precoNotebook.toFixed(2));
    console.log("Desconto: " + desconto);
    console.log("Valor do desconto: R$ " + valorDesconto.toFixed(2));
    console.log("Preço final: R$ " + precoFinal.toFixed(2));
}

console.log("===NOTEBOOK===");
notebook();

console.log(" ")

console.log("Excercício 8");

function mediaAluno() {
    let nota1 = 7.0;
    let nota2 = 8.0;
    let nota3 = 9.0;
    let media = (nota1 + nota2 + nota3) / 3;
    console.log("Nota 1: " + nota1);
    console.log("Nota 2: " + nota2);
    console.log("Nota 3: " + nota3);
    console.log("Média: " + media.toFixed(1));
}

console.log("===MÉDIA DO ALUNO===");
dadosDoAluno();
mediaAluno();

console.log(" ")

console.log("Excercício 9");

function contador() {
    let horas = 14;
    let minutos = horas * 60;
    let segundos = minutos * 60;
    console.log("Horas: " + horas + "h");
    console.log("Minutos: " + minutos + "min");
    console.log("Segundos: " + segundos + "s");
}

console.log("===CONTADOR===");
contador();

console.log(" ")

console.log("Excercício 10");

function corrida() {
    let distancia = 300;
    let litroPKm = 12;
    let litroGasolina = 6;
    let gasto = litroGasolina * (distancia / litroPKm);

    console.log("Distância: " + distancia + " km");
    console.log("Consumo: " + litroPKm + " km/l");
    console.log("Litros de gasolina: " + (distancia / litroPKm).toFixed(2));
    console.log("Gasto: R$" + gasto.toFixed(2));
}

console.log("===CORRIDA===");
corrida();

console.log(" ")

console.log("Excercício 11");

function soma() {
    let numero1 = 10;
    let numero2 = 5;
    let resultado = numero1 + numero2;
    console.log("Número 1: " + numero1);
    console.log("Número 2: " + numero2);
    console.log("Soma: " + resultado);
}

console.log("===SOMA===");
soma();

console.log(" ")

console.log("Excercício 12");

function calculadora(numero3, numero4) {
    soma();
    let resultado1 = numero3 + numero4;
    console.log("Soma: " + resultado1);
    let resultado2 = numero3 - numero4;
    console.log("Subtração: " + resultado2);
    let resultado3 = numero3 * numero4;
    console.log("Multiplicação: " + resultado3);
    let resultado4 = numero3 / numero4;
    console.log("Divisão: " + resultado4.toFixed(2));
}

console.log("===CALCULADORA===");
calculadora(10, 5);

console.log(" ")

console.log("Excercício 13");

function calculadoraMedia() {
 let numero5 = 10;
 let numero6 = 4;
 let numero7 = 8;
 let media = (numero5 + numero6 + numero7) / 3;
 console.log("Número 1: " + numero5);
 console.log("Número 2: " + numero6);
 console.log("Número 3: " + numero7);
 console.log("Média: " + media.toFixed(1));
}

console.log("===MÉDIA===");
calculadoraMedia();

console.log(" ")

function caculoSalario() {
let salarioBase = 2000.00;
let bonus = 500.00;
let salarioFinal = salarioBase + bonus;
console.log("Salário base: R$ " + salarioBase.toFixed(2));
console.log("Bônus: R$ " + bonus.toFixed(2));
console.log("Salário final: R$ " + salarioFinal.toFixed(2));
}

console.log("===SALÁRIO FINAL===");
caculoSalario();

console.log(" ")

console.log("Excercício 15");

function calcularDesconto() {
    let produto = "celular";
    let precoCelular = 18000.00;
    let desconto = 10;
    console.log("Produto: " + produto);
    console.log("Preço: R$ " + precoCelular.toFixed(2));
    console.log("Desconto: " + desconto + "%");
    let valorDesconto = precoCelular * (desconto / 100);
    console.log("Valor do desconto: R$ " + valorDesconto.toFixed(2));
    console.log("Preço final: R$ " + (precoCelular - valorDesconto).toFixed(2));
}

console.log("===DESCONTO===");
calcularDesconto();

console.log(" ")

console.log("Excercício 16");

function sistemaPagamento() {
    let valorCurso = 1000.00;
    let parcelas = 6;
    let valorParcela = valorCurso / parcelas;
    console.log("Valor do curso: R$ " + valorCurso.toFixed(2));
    console.log("Número de parcelas: " + parcelas);
    console.log("Valor da parcela: R$ " + valorParcela.toFixed(2));
}

console.log("===SISTEMA DE PAGAMENTO===");
sistemaPagamento();

console.log(" ")

console.log("Excercício 17");

function comissao() {
    let totalvendido = 100000.00;
    let comissao = totalvendido * 0.05;
    console.log("Total vendido: R$ " + totalvendido.toFixed(2));
    console.log("Comissão: R$ " + comissao.toFixed(2));
    console.log("Valor adquirido: R$ " + (comissao).toFixed(2));
}

console.log("===COMISSÃO===");
comissao();

console.log(" ")

console.log("Excercício 18");

function calculaHorasTrabalhadas() {
    let horasTrabalhadas = 160;
    let valorHora = 25.00;
    let salario = horasTrabalhadas * valorHora;
    console.log("Horas trabalhadas: " + horasTrabalhadas + "h");
    console.log("Valor por hora: R$ " + valorHora.toFixed(2));
    console.log("Salário por horas trabalhadas: R$ " + salario.toFixed(2));
}

console.log("===HORAS TRABALHADAS===");
calculaHorasTrabalhadas();

console.log(" ")

console.log("Excercício 19");

function sistemasNotas(){
    let nomeAluno = "Alemãozinho da Alanis que nunca vai pegar Menezes";
    let nota1 = 6.7;
    let nota2 = 8.9;
    let nota3 = 7.2;
    let nota4 = 4.2;
    let nota5 = 9.1;
    let media = (nota1 + nota2 + nota3 + nota4 + nota5) / 5;
    console.log("Aluno: " + nomeAluno);
    console.log("Nota 1: " + nota1);
    console.log("Nota 2: " + nota2);
    console.log("Nota 3: " + nota3);
    console.log("Nota 4: " + nota4);
    console.log("Nota 5: " + nota5);
    console.log("Média: " + media.toFixed(1));
}

console.log("===BOLETIM===");
sistemasNotas();

console.log(" ")

console.log("Excercício 20");

function orcamento() {
    let processador = 3000.00;
    let memoriaRam = 800.00;
    let placaMae = 1200.00;
    let placaDeVideo = 2500.00;
    let ssd = 600.00;
    let desconto = 0.10;
    let avista = processador + memoriaRam + placaMae + placaDeVideo + ssd;
    let valorDesconto = (processador + memoriaRam + placaMae + placaDeVideo + ssd) * desconto;
    let total = avista - valorDesconto
    let parcelado = avista / 12 + valorDesconto;
    console.log("Processador: R$ " + processador.toFixed(2));
    console.log("Memória RAM: R$ " + memoriaRam.toFixed(2));
    console.log("Placa Mãe: R$ " + placaMae.toFixed(2));
    console.log("Placa de Vídeo: R$ " + placaDeVideo.toFixed(2));
    console.log("SSD: R$ " + ssd.toFixed(2));
    console.log("---------------------");
    console.log("A vista: R$ " + avista.toFixed(2));

    console.log(" ")

    console.log("Desconto: R$ " + valorDesconto.toFixed(2));
    console.log("Parcelado: R$ " + parcelado.toFixed(2));
    console.log("---------------------");

    console.log(" ")

    console.log("Total: R$" + total.toFixed(2))
}

console.log("=====================")
console.log("ORÇAMENTO - PC GAMER");
console.log("=====================")
orcamento();

    console.log(" ")

console.log("Muito Obrigado! Feito por Alexandre Henrique")
/*var x = 10;
var y = 5;
function func(x,y) {
    var x = 20;
    var y = 20;
    return x + y;
}

alert(func(x,y));

console.log(func(10,10));

var variavel = 10;
var Variavel = 5;

function Func(){
    return Variavel !== variavel; 
}

function teste() {
    if (x > 5) {
        y = 30;
        alert("A variável x é maior que 5 e y é igual a =",y);
    }
}

var status = 50;



function condicional(){
    if (status >= 20){
        alert("entregador já saiu para entrega");
    } else {
        alert("entregador ainda não saiu do estabelecimento");
    }
}

teste();
condicional();


var status = "";


function salvar(){

    status = document.getElementById("status da entrega").value;
    if (status <= 10){
        alert("Procurando");
    }
    if (status == 20){
        alert("Indo à origem");
    }
    if (status == 30){
        alert("Chegou à origem");
    }
    if (status == 40){
        alert("Saiu para entrega");
    }
    if (status == 50){
        alert("Indo ao destino");
    }
    if (status == 60){
        alert("Chegou ao destino");
    }
    if(status == 70){
        alert("Finalizada");
    }
    if(status == 80){
        alert("Cancelada");
    }
}

*/
/*

funçao em objeto


var pessoa = {
    idade:21,
    nome:"Rvan",
    sobrenome: "Brunn",
    altura:1.76,
    casado: false,
    aniversario: function () {
        pessoa.idade++;
        console.log(pessoa);
    },
    nomeComSobrenome: function () {
        pessoa.nome = pessoa.nome+" "+pessoa.sobrenome;
        // ou, return pessoa.nome + " " + pessoa.sobrenome;
    }
    
};

pessoa.nomeComSobrenome();


pessoa.aniversario();
pessoa.aniversario();
pessoa.aniversario();



*/


/*

function name(){
    return 'Texto';
}

function numero() {
    return 1;
}

//invocando array

function arr() {
    return [1,2,3,4,5,6,7,8,9,10];
}

console.log(arr()[5]);

//funcao para somar itens do array
function calculo (){
    var soma = arr()[9] + arr()[9];
    return soma;
}

// funcao com objeto
console.log(calculo());

function obj(){
    objeto = {
        nome: "rvan",
        idade: "21",
        peso: "70kg"
    }
    return objeto;
}

console.log(obj().nome);

// ou

function obje(){
    return {
        nome: "brunn",
        idade: "22 jaja",
        peso: 64
    }
}

console.log(obje().nome);


*/

// passando arrays e objetos como argumento de funcao

/*

var arr = [0,1,2,3,4,5,6,7,8,9,10];

function argumento (arg){
    return arg;
}
  
console.log(argumento(arr)[5]);

*/


// var a,b = 2, c = 3; 

// switch case:

/*

function func(x) {
    switch(x){
        case 1: console.log("valor igual a 1");
        break;

        case 2: console.log("valor igual a 2");
        break;

        case 3: console.log("valor igual a 3")
        break;
        default:
            console.log("numero diferente de 1,2 e 3")
        break;
    }
    
}


func(1);
func(2);
func(3);
func("teste");

*/
/*
//laço:
var contador = 0;

while(contador < 10){
    console.log(contador);
    contador++;
}
*/


/*
//modulo:
var divisao = 10 / 2;
var divisao2 = 10%2;
// resultado da divisao e resto:
console.log(divisao,divisao2);
*/

/*

numero = 0;
total = 0;
// quantos numeros pares entre 0 e 150?
while(numero <= 10){
    numero % 2 === 0? console.log(numero) : "";
    numero % 2 === 0? total++ : "";
    numero++;
}
console.log("total igual a: ",total);

*/

// array + lenght:

/*
var arr = ['rvan', 'brunn','santi', {pessoa: '29 anos'}];

var quantidade = arr.length; 

console.log("essa é a quantidade: ", length);

while (quantidade >= 0) {
    console.log(arr[--quantidade]);
}

*/


//arrow function:
/*
function sum(a,b){
    return a+b;
}

var sum2 = (a,b) => a+b; 


function isPositive(number) {
    return number >= 0;
}

//se tiver só um parametro pode tirar o parenteses
var isPositive2 = number => number >= 0;


function randomNumber() {
    return Math.random;
}

var randomNumber2 = () => Math.random;


document.addEventListener('click', function(){
    console.log('click');
})

document.addEventListener('click', () => console.log('click'))
*/

// this:
/*
var user = {
    nome:"rvan",
    sobrenome:"brunn",
    nomeCompleto(){
        // essa sintaxe faz o mesmo que: console.log(this.nome+" espaço "+this.sobrenome)
        console.log(`${this.nome} espaço ${this.sobrenome}`)       
    }
};

user.nomeCompleto();
*/



/*
const alphabet = ["A","B","C","D","E","F"]

const numbers = [1, 2, 3, 4, 5, 6]
*/

//colecao
/*
const produtos = [
    {
        nome: "notebook",
        preco: 2100
    },
    {
        nome: "smartphone",
        preco: 400
    },
    {
        nome: "carregador",
        preco: 100
    }
] 


/*
function precoEmReais (p) {
    return p.preco * 4;
}
*/
// map: Transformacao de valores de uma colecao de reais para dólares

// const precosEmReais = produtos.map(p => p.preco * 4)

//console.log(precosEmReais);
//console.log(produtos);

// reduce
/*
function total (a,b) {
    var total = a = b.preco[0];
    return total;
}
*/

// lista com 2 itens, soma dos precos dos itens dessa lista
//reduce pode receber uma funcao callback como parametro
// 3 parâmetros, sendo "a" o acumulador que somará os precos (que iniciará em 0), 
// "b" sendo o item que será acumulado e "0" o valor de partida

//const total = produtos.reduce((a,b) => a + b.preco, 0);
//console.log(total);

// combinando map e reduce

// o "b" não é mais um produto, trata-se do resultado do cálculo do map
// para usar o reduce, estamos tratando b como sendo um NÚMERO,
// se fizessemos "b.preco" estaríamos tentando obter a propriedade preco de um produto que não mais existe


const colecaoB = [
    {item: "mouse", custo: 30.0, desconto: 0.5},
    {item: "teclado", custo: 80.0, desconto: 0.5},
    {item: "pendriver", custo: 30.0, desconto: 0.5},
    {item: "hd", custo: 200.0, desconto: 0.5},
    {item: "ssd", custo: 300.0, desconto: 0.5},
    {item: "gabiente", custo: 100.0, desconto: 0.5},
    {item: "monitor", custo: 800.0, desconto: 0.5}
]



const precinho = colecaoB.map(produto => produto.custo * produto.desconto);
console.log(precinho);

//const total = produtos.map(p => p.preco * 4).reduce((a,b) => a + b, 0);

// console.log(total);

// map e reduce exemplo 2
const numeros = [3,4,7,1,9,7]

function dobrarValor(num){
    return num * 2;
}



//filter

function altoCusto(produtin){
    return produtin.custo>=100; 
}

const valoresAltos = colecaoB.filter(altoCusto);
console.log(colecaoB);
//com arrow function direto
const valorzao = colecaoB.filter(produtozin => produtozin.custo >= 100)
.map(aplicarDesconto)
.map(precoDesconto);

console.log(valorzao);

function precoDesconto(precoComDesconto) {
    return precoComDesconto * 0.5;
}

function aplicarDesconto (produto) {
    return produto.custo * (1 - produto.desconto);
}

// aqui não ta funcionando, retorna not a number.

 

//aqui 
const promocaozinha = d => d.custo * (1 - d.desconto); //aqui não

/*
const resultado = colecaoB
.map(p => p * 0.5)
.map(d => d.custo * (1 - d.desconto));
*/

//const resultado = colecaoB
//.map(precin)
//.map(promocaozinha);

// duas transformacoes de valor

//const resultado = colecaoB
//.map(precoDesconto);
//.map(promocaozinha);





const notas = [7.1,8.3,6.3,7.7,9.1,4.3]

function aprovado(nota){
    return nota >= 7;
}

const result = notas.filter(aprovado)

//utilizando arrow function:
const rst = notas.filter(nota => nota>= 7);
console.log(result);
console.log(rst);



//ola mundo do reduce: SOMA:

const numerozinhos = [1,2,3,4,5,6,7,8,9,10]

const somaDeNumerozinhos = numerozinhos.reduce((a,b) => a + b,0)
console.log(somaDeNumerozinhos);

function soma (a,b){
    return a + b;
}



function media (acc,num){
    const novoTotal = acc.total + num
    const novaQtde = acc.qtde + 1
    
    return {
        total: novoTotal,
        qtde: novaQtde,
        media: novoTotal/novaQtde
    }
}

const totalidade = numerozinhos.reduce(media, {total: 0, qtde: 0, media: 0})
//aqui printa tudo de totalidade
console.log(totalidade);
//aqui printa só a média
console.log(totalidade.media);


//const total = colecaoB.reduce((a,b) => a + b.custo * (1 - b.desconto), 0);

/*
const mapeando = numeros.map(n => n * 2)

function dobrarValor (n){
    return n*2;
}
console.log(dobrarValor);

//console.log(mapeando);
/*
const reduzindo = colecaoB.reduce((a,b) => a + b.custo * (1 - b.desconto), 0)

//console.log(reduzindo);

const mapeandoReduzindo = colecaoB.map(i => i).reduce((acumulador,produto) => acumulador + produto * (1 - produto), 0);
console.log(mapeandoReduzindo);
console.log(colecaoB);

//callback functions
/*
var taskOne = () => console.log("task 1");

var taskTwo = () => console.log("task 2, after 3 seconds");

function taskThree () {
    console.log("task 3");
}

// função de exibir mensagem
// const message = () => console.log("Mensagem exibida após 2 segundos")

taskOne();
// função de timeout
*/
//console.log(resultado);
/*
document.querySelector('#callback-btn').addEventListener('click', () => console.log("Mensagem exibida após 2 segundos"));

taskThree();


// escopo de variaveis e funcoes
/*
var numero = 1; 

function somaLocal(){
    numero = 5;
    console.log(numero + numero);

}

console.log(somaLocal());


function func() {

    numero2 = 5;
    return numero+numero2;

}

func();
console.log(numero2);


function retornavel(a,b,c){
    return a;
}


console.log(retornavel('retornando o valor de \'a\''))
*/
// ou
// console.log(numero);



/*

var carro = {
    portas: 4,
    marca: "fiat"
}

var modelo;

function verModelo (){
    if (carro.portas === 4){
        modelo = "Fiat 4 portas";
        console.log(modelo);
    } else {
        modelo = "Fiat 2 portas";
        console.log(modelo);
    }
}

//verModelo();

// com operador ternário:

var ternario = 
    carro.portas === 4 ? (modelo = "Quatro portas") : (modelo = "Duas portas");
    console.log(ternario);


*/

/*
var numero = 0;

var booleano;

function func1(){
    if (numero === 1){
        return true;
    } else {
        return false;
    }
}

function func(){
    if (numero){
        booleano = true;
        console.log(booleano);
    } else {
        booleano = false;
        console.log(booleano);
    }
}
func();

*/

// or



/*

function apresentar(){
    console.log("o nome da pessoa é: ",pessoa.nome+
    "\nA idade é: "+pessoa.idade,
    "\nA altura é: "+pessoa.altura,
    "\nÉ casado? "+pessoa.casado
    );

    if (pessoa.casado == true){
        console.log("\npra que casar men")
    } else if (pessoa.casado == false){
        console.log("\nsortero ein")
    }
    if (pessoa.idade < 18){
        console.log("\nmenor de idad")
    } else {
        console.log("\nmaior de idad")
    }
}

apresentar();

*/
/*
var jogo = {
    nomeJogo: 'f12020',
    genero: 'corrida',
    preco: 65.0,
    loja: 'humbleBundle',
    ativadoEm: 'steam'
};

function salvarJogo(){
    nome = document.getElementById("Nome").value;
    genero = document.getElementById("Genero").value;
    preco = document.getElementById("Preco").value;
    loja = document.getElementById("Loja").value;
    ativadoEm = document.getElementById("ativadoEm").value;
}

salvarJogo();

alert(jogo);

*/


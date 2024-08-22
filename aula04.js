//FUNÇÕES!!!!
let X = "NADA";
console.log(X)
X = 19;
y = 20;

imprimeTexto(y)
// declaração de frunção

// 1) declara a função

function imprimeTexto (Texto){
    console.log(Texto)
}

// 2) chamar/executar função
imprimeTexto(X)
imprimeTexto("vini")

function soma (){
    return 2 + 2
 }
console.log(soma())
imprimeTexto(somaNumeros(2, 3))
imprimeTexto(somaNumeros(23, 34))
function somaNumeros(numero1, numero2){
    return numero1 + numero2
}

function nomeIdade( nome, idade){
    return`Meu nome é ${nome} e minha idade é {idade} `
}
// A ordem dos paramentros é importante!!
imprimeTexto(nomeIdade("vini", 17))
imprimeTexto(nomeIdade(17, "gabriel"))

imprimeTexto(Multiplicacao())
//voce pode definir um paramentro inicial para a funcão
function Multiplicacao(numero4 = 2, numero5 = 5){
    return numero4 * numero5
}
imprimeTexto(Multiplicacao(soma(3,4), soma(5,10)))

//contante de fuçao
const constanteSoma = function (nume1, nume2){return nume1 + nume2}
console.log(constanteSoma(3,6))

//função e var sao "listadas" no topo do arquivo 

//arrow function
const apresentaArrow = nome =>`meu nome é ${nome}`;
const somaEmFlechar = (nu1, nu2) => nu1 + nu2
console.log(apresentaArrow("vini"))
console.log(somaEmFlechar(12,98))

const somaNumeroPequenos = (num1, num2)=>{
    if (num1 > 10 || num2 > 10){
        return "essa função e para Pequenos"
    }
else{
    return num1 +num2
    }
}
console.log(somaNumeroPequenos(2,1))

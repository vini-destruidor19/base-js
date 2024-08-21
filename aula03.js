// alguns erros comuns

// const numero; primeiro erro:(const nao declarada)

const minhaVar = "oi"// segundo erro(não declarar uma variavel e chamar -la no codigo)
console.log(minhaVar)// exemplo chamr minhavar

console.error("isso esta errado") // terceiro erro(voce pode declarar um erro com o console.erro )
 
// condicional abreviada if(){}

let idadeMinha = 19;
let idadeCliente = 18;
if(idadeCliente >= idadeMinha){
    console.log("pode")
}
else{
    console.log("nao vai poder")
}

console.log(idadeCliente>= idadeMinha? "cerveja" : "suco")
//modo ternario, utilizando a estrutura____>=____?____:_____
//modo ternario, utilizando a estrutura____<=____?____:_____
//modo ternario, utilizando a estrutura____==____?____:_____

// template stryng
const nome = "vini";
const idade = 17;
const cidadeNatal = "Foz de iguaçu"

const apresentacao = "Meu nome é " + nome + ", minha idade é "+ idade + " e nasci em "+ cidadeNatal;
console.log(apresentacao)

const apresentacao2 =`Meu nome é ${nome}, minha idade é ${idade}, e minha cidade natal é ${cidadeNatal}`;
console.log(apresentacao2)



//.var ->criando ema variável

//var altura = 5;
//var comprimento = 8;

//var area = altura * comprimento;
//console.log(area);

// let ->criando ema variável(forma mais atualizada de criar uma var)

let altura = 5;
let comprimento = 8;
let forma = "retângulo";
let area;

if (forma ==="retâgulo"){
    area = altura * comprimento
}
else{
    area = (altura * comprimento)/2
}
 console.log(area);

//const -> ultilizada para criar "variaveis" que são fixas, ou, seja não se altera 
//condições booleanas(truly ou falsy)
// 0 = false
// 1 = true

const usuariologado = true;
const contapaga = false;

console.log(0 === false)
console.log(contapaga == 0)
console.log(contapaga === 0)
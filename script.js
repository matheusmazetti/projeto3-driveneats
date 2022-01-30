
let valorP = 0;
let valorB = 0;
let valorS = 0;
let contP = 0;
let contB = 0;
let contS = 0;

function liberaBotao(){
    let cont = contP + contB + contS;
    if (cont == 3) {
        document.querySelector(".pedido-fechado").style.display = "block";
    }
}
//seleção de pedidos
function selecFrango(valorPrato) {
    let borda = document.querySelector(".frango");
    let bordaOut = document.querySelector(".carne");
    let bordaOut2 = document.querySelector(".peixe");
    //adiciona borda verde
    borda.classList.add("selecionado");
    //remove a borda dos outros itens
    bordaOut.classList.remove("selecionado");
    bordaOut2.classList.remove("selecionado");
    //atribui o valor do pedido a variavel correspondente
    valorP = parseFloat(valorPrato);
    contP = 1;
    liberaBotao();
}
function selecCarne(valorPrato) {
    let borda = document.querySelector(".carne");
    let bordaOut = document.querySelector(".peixe");
    let bordaOut2 = document.querySelector(".frango");
    borda.classList.add("selecionado");
    bordaOut.classList.remove("selecionado");
    bordaOut2.classList.remove("selecionado");
    valorP = parseFloat(valorPrato);
    contP = 1;
    liberaBotao();
}
function selecPeixe(valorPrato) {
    let borda = document.querySelector(".peixe");
    let bordaOut = document.querySelector(".carne");
    let bordaOut2 = document.querySelector(".frango");
    borda.classList.add("selecionado");
    bordaOut.classList.remove("selecionado");
    bordaOut2.classList.remove("selecionado");
    valorP = parseFloat(valorPrato);
    contP = 1;
    liberaBotao();
}
function selecCoca(valorBebida) {
    let borda = document.querySelector(".coca");
    let bordaOut = document.querySelector(".guarana");
    let bordaOut2 = document.querySelector(".pepsi");
    borda.classList.add("selecionado");
    bordaOut.classList.remove("selecionado");
    bordaOut2.classList.remove("selecionado");
    valorB = parseFloat(valorBebida);
    contB = 1;
    liberaBotao();
}
function selecGuarana(valorBebida) {
    let borda = document.querySelector(".guarana");
    let bordaOut = document.querySelector(".coca");
    let bordaOut2 = document.querySelector(".pepsi");
    borda.classList.add("selecionado");
    bordaOut.classList.remove("selecionado");
    bordaOut2.classList.remove("selecionado");
    valorB = parseFloat(valorBebida);
    contB = 1;
    liberaBotao();
}
function selecPepsi(valorBebida) {
    let borda = document.querySelector(".pepsi");
    let bordaOut = document.querySelector(".guarana");
    let bordaOut2 = document.querySelector(".coca");
    borda.classList.add("selecionado");
    bordaOut.classList.remove("selecionado");
    bordaOut2.classList.remove("selecionado");
    valorB = parseFloat(valorBebida);
    contB = 1;
    liberaBotao();
}
function selecPudim(valorSobremesa) {
    let borda = document.querySelector(".pudim");
    let bordaOut = document.querySelector(".brigadeiro");
    let bordaOut2 = document.querySelector(".sunday");
    borda.classList.add("selecionado");
    bordaOut.classList.remove("selecionado");
    bordaOut2.classList.remove("selecionado");
    valorS = parseFloat(valorSobremesa);
    contS = 1;
    liberaBotao();
}
function selecBrigadeiro(valorSobremesa) {
    let borda = document.querySelector(".brigadeiro");
    let bordaOut = document.querySelector(".pudim");
    let bordaOut2 = document.querySelector(".sunday");
    borda.classList.add("selecionado");
    bordaOut.classList.remove("selecionado");
    bordaOut2.classList.remove("selecionado");
    valorS = parseFloat(valorSobremesa);
    contS = 1;
    liberaBotao();
}
function selecSunday(valorSobremesa) {
    let borda = document.querySelector(".sunday");
    let bordaOut = document.querySelector(".brigadeiro");
    let bordaOut2 = document.querySelector(".pudim");
    borda.classList.add("selecionado");
    bordaOut.classList.remove("selecionado");
    bordaOut2.classList.remove("selecionado");
    valorS = parseFloat(valorSobremesa);
    contS = 1;
    liberaBotao();
}



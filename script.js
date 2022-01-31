
let valorP = 0;
let valorB = 0;
let valorS = 0;
let valorTotal = 0;
let contP = 0;
let contB = 0;
let contS = 0;
let nomeP = null;
let nomeB = null;
let nomeS = null;
let nomeCliente = null;
let endereco = null;

function liberaBotao(){
    let cont = contP + contB + contS;
    if (cont == 3) {
        document.querySelector(".pedido-fechado").style.display = "block";
    }
}
//seleção de pedidos
function selecFrango(valorPrato, nomeCompleto) {
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
    //atribui o nome do prato a variavel correspondente
    nomeP = nomeCompleto;
}
function selecCarne(valorPrato, nomeCompleto) {
    let borda = document.querySelector(".carne");
    let bordaOut = document.querySelector(".peixe");
    let bordaOut2 = document.querySelector(".frango");
    borda.classList.add("selecionado");
    bordaOut.classList.remove("selecionado");
    bordaOut2.classList.remove("selecionado");
    valorP = parseFloat(valorPrato);
    contP = 1;
    liberaBotao();
    nomeP = nomeCompleto;
}
function selecPeixe(valorPrato, nomeCompleto) {
    let borda = document.querySelector(".peixe");
    let bordaOut = document.querySelector(".carne");
    let bordaOut2 = document.querySelector(".frango");
    borda.classList.add("selecionado");
    bordaOut.classList.remove("selecionado");
    bordaOut2.classList.remove("selecionado");
    valorP = parseFloat(valorPrato);
    contP = 1;
    liberaBotao();
    nomeP = nomeCompleto;
}
function selecCoca(valorBebida, nomeCompleto) {
    let borda = document.querySelector(".coca");
    let bordaOut = document.querySelector(".guarana");
    let bordaOut2 = document.querySelector(".pepsi");
    borda.classList.add("selecionado");
    bordaOut.classList.remove("selecionado");
    bordaOut2.classList.remove("selecionado");
    valorB = parseFloat(valorBebida);
    contB = 1;
    liberaBotao();
    nomeB = nomeCompleto;
}
function selecGuarana(valorBebida, nomeCompleto) {
    let borda = document.querySelector(".guarana");
    let bordaOut = document.querySelector(".coca");
    let bordaOut2 = document.querySelector(".pepsi");
    borda.classList.add("selecionado");
    bordaOut.classList.remove("selecionado");
    bordaOut2.classList.remove("selecionado");
    valorB = parseFloat(valorBebida);
    contB = 1;
    liberaBotao();
    nomeB = nomeCompleto;
}
function selecPepsi(valorBebida, nomeCompleto) {
    let borda = document.querySelector(".pepsi");
    let bordaOut = document.querySelector(".guarana");
    let bordaOut2 = document.querySelector(".coca");
    borda.classList.add("selecionado");
    bordaOut.classList.remove("selecionado");
    bordaOut2.classList.remove("selecionado");
    valorB = parseFloat(valorBebida);
    contB = 1;
    liberaBotao();
    nomeB = nomeCompleto;
}
function selecPudim(valorSobremesa, nomeCompleto) {
    let borda = document.querySelector(".pudim");
    let bordaOut = document.querySelector(".brigadeiro");
    let bordaOut2 = document.querySelector(".sunday");
    borda.classList.add("selecionado");
    bordaOut.classList.remove("selecionado");
    bordaOut2.classList.remove("selecionado");
    valorS = parseFloat(valorSobremesa);
    contS = 1;
    liberaBotao();
    nomeS = nomeCompleto;
}
function selecBrigadeiro(valorSobremesa, nomeCompleto) {
    let borda = document.querySelector(".brigadeiro");
    let bordaOut = document.querySelector(".pudim");
    let bordaOut2 = document.querySelector(".sunday");
    borda.classList.add("selecionado");
    bordaOut.classList.remove("selecionado");
    bordaOut2.classList.remove("selecionado");
    valorS = parseFloat(valorSobremesa);
    contS = 1;
    liberaBotao();
    nomeS = nomeCompleto;
}
function selecSunday(valorSobremesa, nomeCompleto) {
    let borda = document.querySelector(".sunday");
    let bordaOut = document.querySelector(".brigadeiro");
    let bordaOut2 = document.querySelector(".pudim");
    borda.classList.add("selecionado");
    bordaOut.classList.remove("selecionado");
    bordaOut2.classList.remove("selecionado");
    valorS = parseFloat(valorSobremesa);
    contS = 1;
    liberaBotao();
    nomeS = nomeCompleto;
}
function fecharPedido(){
    nomeCliente = prompt("Digite o seu nome: ");
    endereco = prompt("Digite o seu endereço: ");
    valorTotal = (valorP + valorB + valorS).toFixed(2);
    let valorP1 = valorP.toFixed(2);
    let valorB1 = valorB.toFixed(2);
    let valorS1 = valorS.toFixed(2);
    let valorTString = String(valorTotal);
    valorTModificado = valorTString.replace(".", ",");
    let valorPString = String(valorP1);
    valorPModificado = valorPString.replace(".", ",");
    let valorBString = String(valorB1);
    valorBModificado = valorBString.replace(".", ",");
    let valorSString = String(valorS1);
    valorSModificado = valorSString.replace(".", ",");
    let tipoPrato = document.querySelector(".tipo-prato");
    tipoPrato.innerHTML = (nomeP);
    let tipoBebida = document.querySelector(".tipo-bebida");
    tipoBebida.innerHTML = (nomeB);
    let tipoSobremesa = document.querySelector(".tipo-sobremesa");
    tipoSobremesa.innerHTML = (nomeS);
    let valorPrato = document.querySelector(".valor-prato");
    valorPrato.innerHTML = (valorPModificado);
    let valorBebida = document.querySelector(".valor-bebida");
    valorBebida.innerHTML = (valorBModificado);
    let valorSobremesa = document.querySelector(".valor-sobremesa");
    valorSobremesa.innerHTML = (valorSModificado);
    let valorEscrito = document.querySelector(".valor-total");
    valorEscrito.innerHTML = ("R$ " + valorTModificado);
    let aparecerTela = document.querySelector(".tela-pedido");
    aparecerTela.style.display = "block";
}
function enviarPedido(){
    let texto = ("Olá, gostaria de fazer o pedido:\n- Prato: " + nomeP + "\n- Bebida: " + nomeB + "\n- Sobremesa: " + nomeS + "\nTotal: R$ " + valorTotal + "\n\nNome: " + nomeCliente + "\nEndereço: " + endereco);
    texto = window.encodeURIComponent(texto);
    window.open("https://wa.me/5562999769996?text=" + texto);
}



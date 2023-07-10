let btnAdd = document.querySelector("#addBotao");

// criar evento para click no botão//

btnAdd.addEventListener("click", function(){
    let inputValor = document.querySelector('#meuInput').value;
    if (inputValor === ""){
        alert("Você não preencheu os campos, não pode deixar vazio!")
     }else{
       // alert("LOGIN REALIZADO COM SUCESSO!")
       document.querySelector("#mensagem-ok").insertAdjacentHTML(
        "afterend",
        ` <div class="card-teste">
        <span>LOGIN EFETUADO COM SUCESSO!</span>
        </div>
        `
       );  
       let mensagem = document.querySelector('.card-teste');
       setTimeout(() => {
        mensagem.style.display = "none";
       }, 3000);
    }
       document.querySelector('#meuInput').value = "";
    
});


btnAdd.addEventListener("click", function(){
    let inputValor = document.querySelector('#meuInput-1').value;
   if (inputValor === ""){
        alert("Você não preencheu os campos, não pode deixar vazio!")
     }else {
      //  alert("LOGIN REALIZADO COM SUCESSO!")
      }
    document.querySelector('#meuInput-1').value = "";
});


let decrementar = document.querySelector(".bi-dash-square-dotted");
let incrementar = document.querySelector(".bi-plus-square-dotted");
let textoProduto = document.querySelector(".quantidadeProduto");
let quantidadeProduto = parseInt(textoProduto.textContent);

incrementar.addEventListener("click", function(){
  quantidadeProduto++;
  textoProduto.innerHTML = quantidadeProduto;
});


decrementar.addEventListener("click", function(){
  if (quantidadeProduto<=1){
   alert("A quantidade de produto não pode ser menor que 1")
  }else{
   quantidadeProduto--;
   textoProduto.innerHTML = quantidadeProduto
  }
  });

console.log(decrementar);
console.log(incrementar);
console.log(quantidadeProduto);

function consultaEndereco(){
  let cep = document.querySelector("#cep").value;
if(cep.length != 8) {
     alert("CEP INVÁLIDO, o CEP obrigatoriamente precisa ter 8 números");
      return;}
  
let url=`https://viacep.com.br/ws/${cep}/json/`
fetch(url).then(function(response){
  response.json().then(function(data){
      //console.log(data);
      mostrarEndereco(data);
  });
      
});
}

function mostrarEndereco(dados){
 // console.log(dados);[
    let nomeLocalizacao = document.querySelector(".nome-localizacao");

if (dados.erro){
  nomeLocalizacao.innerHTML = "CEP NÃO ENCONTRADO"
  }else{
  
  //console.log(dados.localidade);
 nomeLocalizacao.innerHTML = dados.localidade;
}
}

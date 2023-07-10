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


let coracao = document.querySelector(".bi-hand-thumbs-up-fill");
coracao.addEventListener('click', function(event){
    if(event.target.nodeName === "I"){
    event.target.classList.toggle("red");
    }
});

let coracao1 = document.querySelector(".bi-hand-thumbs-down-fill");
coracao1.addEventListener('click', function(event){
    if(event.target.nodeName === "I"){
    event.target.classList.toggle("red");
    }
});

let coracao2 = document.querySelector(".bi-search-heart");
coracao2.addEventListener('click', function(event){
    if(event.target.nodeName === "I"){
    event.target.classList.toggle("red");
    }
});
let btnAdd = document.querySelector("#addBotao");
btnAdd.addEventListener("click", function(){
    let inputValor = document.querySelector('.meuInput-1').value;
   if (inputValor === ""){
        alert("Você não preencheu os campos, não pode deixar vazio!")
     }else {
  alert("LOGIN REALIZADO COM SUCESSO!")
      }
    document.querySelector('.meuInput-1').value = "";
});
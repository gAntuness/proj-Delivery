let modal = document.querySelectorAll("#produto-car");
let excluir = document.querySelectorAll(".bi-trash3");

    for (let i=0; i < excluir.length; i++){
        excluir[i].addEventListener("click", function(event){
            if(event.target.matches(".bi-trash3")){
                modal[i].remove();
            };
        });
    };

    

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
    
async function getAdvice(){
    const resposta = await fetch("https://api.adviceslip.com/advice");

  //  console.log(resposta);

    const data = await resposta.json();
///console.log(data);
 document.querySelector("#advice").innerHTML = data.slip.advice;
}
getAdvice();

// botão funcionando

let botaoAdvice = document.querySelector("#get-advice");
 
botaoAdvice.addEventListener("click", function(){
    getAdvice();
});

 
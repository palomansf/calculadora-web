let visor = document.querySelector(".visor");
let botoes = document.querySelectorAll("button");

let valorAtual = "";

botoes.forEach(function(botao) {

    botao.addEventListener("click", function() {

        let valorBotao = botao.innerText;

        if (valorBotao === "=") {

            visor.value = eval(valorAtual);

        } else if (valorBotao === "C") {

            valorAtual = "";
            visor.value = "0";

        } else {

            valorAtual += valorBotao;
            visor.value = valorAtual;

        }

    });

});

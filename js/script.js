var acaoEscolhida = "";
var valorTela = "";
var valorAntigoTela;

function atualizaTela(valor) {
  var tela = document.getElementById("tela");
  valorTela = valor;
  tela.innerText = valorTela;

  if (valorTela != "" && valorAntigoTela != "" && acaoEscolhida != "") {
    document.getElementById("botaoIgual").removeAttribute("disabled");

    return;
  }

  document.getElementById("botaoIgual").setAttribute("disabled", "disabled");
}

function botaoDigitoClick(event) {
  var digito = event.target.value;
  atualizaTela(`${valorTela}${digito}`);
}

function botaoAcaoClick(event) {
  var acao = event.target.value;
  rodarAcao(acao);
}

function rodarAcao(acao) {
  if (acao === "=") {
    var resultado;
    if (acaoEscolhida === "+") {
      resultado = parseInt(valorAntigoTela) + parseInt(valorTela);
    }

    if (acaoEscolhida === "-") {
      resultado = parseInt(valorAntigoTela) - parseInt(valorTela);
    }

    if (acaoEscolhida === "/") {
      resultado = parseInt(valorAntigoTela) / parseInt(valorTela);
    }

    if (acaoEscolhida === "*") {
      resultado = parseInt(valorAntigoTela) * parseInt(valorTela);
    }

    atualizaTela(resultado);
    valorAntigoTela = ""; // explicar isso só depois da primeira conta
    return;
  }

  if (acao === "c") {
    location.reload();
  }

  valorAntigoTela = valorTela;
  acaoEscolhida = acao;
  atualizaTela("");
}

var query = location.search.slice(1);
var partes = query.split("&");
var data = {};
partes.forEach(function (parte) {
  var chaveValor = parte.split("=");
  var chave = chaveValor[0];
  var valor = chaveValor[1];
  data[chave] = valor;
});



if(data.status == 403){
    corpo = document.getElementById("corpo")

    corpo.innerHTML = `
    <br><br>
    <h2 class="erro">Erro no<br>  Agendamento</h2>
    <br>
    <h4>Você já <b>agendou</b><br> um estação para este dia<br> </h4>
    <a href="teste_agendamento.html" class="ok mt-4"><button>OK</button>   </a>`
}


if(data.status == 200){
    corpo = document.getElementById("corpo")

    corpo.innerHTML = `<img src="img/Stroke-1.png" alt="">
    <br><br>
    <h2>Agendamento <br> concluído com<br> sucesso</h2>
    <br>
    <h4>Esperamos você em nosso <br> escritório de <br> <b>São Paulo</b> </h4>
    <a href="teste_agendamento.html" class="ok mt-4"><button>OK</button>   </a>`
}


if(data.status == 406){
    corpo = document.getElementById("corpo")

    corpo.innerHTML = `
    <br><br>
    <h2 class="erro">Erro no<br>  Agendamento</h2>
    <br>
    <h4>A estação escolhida já<br> está <b>agendada</b>   </h4>
    <a href="teste_agendamento.html" class="ok mt-4"><button>OK</button>   </a>`
}
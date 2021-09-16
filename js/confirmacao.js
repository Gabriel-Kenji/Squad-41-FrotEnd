var query = location.search.slice(1);
var partes = query.split("&");
var data = {};
partes.forEach(function (parte) {
  var chaveValor = parte.split("=");
  var chave = chaveValor[0];
  var valor = chaveValor[1];
  data[chave] = valor;
});

nav = document.getElementById("voltar_nav");

nav.innerHTML = `
    <a href="agendamento.html?sede=${data.sede}">
    <img
    alt=""
    src="img/Vector.png"
    className="d-inline-block align-top "
    />
    </a> `;

arruma_data = data.date.split("-");

if (arruma_data[1] == 01) {
  mes = "Janeiro";
}
if (arruma_data[1] == 02) {
  mes = "Fevereiro";
}
if (arruma_data[1] == 03) {
  mes = "Março";
}
if (arruma_data[1] == 04) {
  mes = "Abril";
}
if (arruma_data[1] == 05) {
  mes = "Maio";
}
if (arruma_data[1] == 06) {
  mes = "Junho";
}
if (arruma_data[1] == 07) {
  mes = "Julho";
}
if (arruma_data[1] == 08) {
  mes = "Agosto";
}
if (arruma_data[1] == 09) {
  mes = "Setembro";
}
if (arruma_data[1] == 10) {
  mes = "Outubro";
}
if (arruma_data[1] == 11) {
  mes = "Novembro";
}
if (arruma_data[1] == 12) {
  mes = "Dezembro";
}
axios
  .get("http://localhost:5000/agendamentos/" + data.date + "/" + data.sede)
  .then((response) => {
    var agendamentos = response.data;
    var livres = 0;
    agendamentos.estaco.forEach((estacoes) => {
      livres++;
    });

    var teste = document.getElementById("finalizacao");
    if (data.sede == 1) {
      var sede = `
          
      <div class="row mb-2 calendario-inicial">
      <div class="col-md-6 mb-2 sede" id="vaga">
        <div
          class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div class="col-auto d-none d-lg-block ">
          <div class="imagem-sede">
            <img src='img/SP.png'  >
          </div>

          </div>
          <div class="col p-4 d-flex flex-column position-static">
            <h1 class="mb-5">São Paulo</h1>
            <table>
                <tr>
                    <td><img src='img/user.png' class='user'/></td>
                    <td>        </td>
                    <td>        </td>
                    <td> <h4 class="card-text mb-auto">${
                        agendamentos.quant - livres
                        }/${agendamentos.quant}</h4></td>
                </tr>
            </table>
          </div>

        </div>
        <table>
          <tr>
            <td><img src='img/calendario.png' /></td>
            <td> </td>
            <td> </td>
            <td> Você está agendando para: <b>${
                arruma_data[2]
                } de ${mes} de ${arruma_data[0]} </b></td>
          </tr>

        </table>
        <br>
        <table>
          <tr>
            <td><img src='img/relogio.png' /></td>
            <td> </td>
            <td> </td>
            <td> Horário:
              das <b>${data.entrada}</b> às <b>${data.saida} </b></td>
          </tr>

        </table>
      </div>
      <div class="col-md-6 texto_calendario-inicial" id="vaga">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.3571828787276!2d-46.66357918502235!3d-23.555611884685714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce582d7a8f2451%3A0x2df5a2e09a20b779!2sR.%20Bela%20Cintra%2C%20986%20-%202%C2%BA%20andar%20-%20Consola%C3%A7%C3%A3o%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001415-002!5e0!3m2!1spt-BR!2sbr!4v1631675948201!5m2!1spt-BR!2sbr"
          class="mapa" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        <br><br>
        <p><b>Endereço:</b></p>
        <p>Rua Bela Cintra, 986 - 2º andar Consolação, São Paulo - SP</p>
      </div>
    </div>
    <div class="col-md-12 botao_avancar" id="avancar">

      <button onclick="Finalizar()">Confirmar agendamento</button>

    </div>
          `;
    } else if (data.sede == 2) {
      var sede = `
  
          
  
      <div class="row mb-2 calendario-inicial">
      <div class="col-md-6 mb-3 sede" id="vaga">
        <div
          class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div class="col-auto d-none d-lg-block">
          <div class="imagem-sede">
             <img src='img/SANTOS.png' >
          </div>

          </div>
          <div class="col p-4 d-flex flex-column position-static">
            <h1 class="mb-5">Santos</h1>

            <table>
                <tr>
                    <td><img src='img/user.png' class='user'/></td>
                    <td>        </td>
                    <td>        </td>
                    <td> <h4 class="card-text mb-auto">${
                        agendamentos.quant - livres
                        }/${agendamentos.quant}</h4></td>
                </tr>
            </table>
          </div>

        </div>

        <table>
          <tr>
            <td><img src='img/calendario.png' /></td>
            <td>        </td>
            <td>        </td>
            <td> Você está agendando para: <b>${
                arruma_data[2]
                } de ${mes} de ${arruma_data[0]} </b></td>
          </tr>

        </table>
        <br>
        <table>
          <tr>
            <td><img src='img/relogio.png' /></td>
            <td>        </td>
            <td>        </td>
            <td> Horário:
              das <b>${data.entrada}</b> às <b>${data.saida} </b></td>
          </tr>

        </table>

      </div>
      <div class=" col-md-6 " id="vaga">
        <div class="mapa-inicial">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3646.034693960299!2d-46.33343908501456!3d-23.9592132844868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce030c4b240a97%3A0x9a30518492646e10!2sPr%C3%A7.%20dos%20Expedicion%C3%A1rios%2C%2019%20-%202%C2%BA%20andar%20-%20Gonzaga%2C%20Santos%20-%20SP%2C%2011065-500!5e0!3m2!1spt-BR!2sbr!4v1631676002886!5m2!1spt-BR!2sbr"
          class="mapa" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>
        <br><br>
        <p><b>Endereço:</b></p>
        <p>Praça Dos Expedicionários, 19 2º andar Gonzaga, Santos - SP</p>
      </div>
    </div>
    <div class="col-md-12 botao_avancar" id="avancar">

      <button onclick="Finalizar()">Confirmar agendamento</button>
    </div>
          `;
    }

    teste.innerHTML = `
      
          ${sede}
          
      `;
  });

  function Finalizar(){

    dados = {
        id: sessionStorage.getItem('id'),
        date: data.date,
        estacaoId: data.estacoes,
        entrada: data.entrada,
        saida: data.saida
    }
    alert(dados.id)
    axios
    .post("http://localhost:5000/agendamentos/",dados )
    .then((response) => {
        window.location.href = `concluido.html?status=${response.status}`;
    }).catch(err=>{
        window.location.href = `concluido.html?status=${err.response.status}`;
    })
   
  }

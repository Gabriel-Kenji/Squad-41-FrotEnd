


function Agendar() {
  var idField = document.getElementById("id");
  var id = 3;
  var dateField = document.getElementById("date");
  var date = dateField.value;
  var estacaoId = 4;
  axios
    .post("http://localhost:5000/agendamentos", { id, date, estacaoId })
    .then((res) => {
      DIA(date,1);
      alert("criado");
    })
    .catch((err) => {
      alert("falha no login");
    });
}




function DIA(data,sede) {
  // document.getElementById('lista').innerHTML = "";
  // var $lista = document.getElementById('lista'),
  // // Pega a string do conteúdo atual
  // HTMLTemporario = $lista.innerHTML,
  // // Novo HTML que será inserido
  // HTMLNovo =  '';
  // for (var i = 1; i <= 4; i++) {
  //   HTMLNovo += `${data}. Horario: ${i}</br>`;
  // }
  // // Concatena as strings colocando o novoHTML antes do HTMLTemporario
  // HTMLTemporario = HTMLNovo + HTMLTemporario;

  // // Coloca a nova string(que é o HTML) no DOM
  // $lista.innerHTML = HTMLTemporario;
  axios
    .get("http://localhost:5000/agendamentos/"+data+"/"+ sede )
    .then((response) => {
      var agendamentos = response.data;
      var title_date = document.getElementById("title-date");
      
      var modal = document.getElementById("modal");
      modal.innerText = "";

      modal.innerHTML = `
              <table id="lista">
              <tr>
                <th>ID</th>
                <th>Email</th>
                <th>Data</th>
              </tr>
              </table>`;
      arruma_data = data.split("-");
      title_date.innerHTML =
        arruma_data[2] + "/" + arruma_data[1] + "/" + arruma_data[0];
      agendar = false;
      if (arruma_data[0] == now.getFullYear()) {
        if (arruma_data[1] == now.getMonth() + 1) {
          if (arruma_data[2] >= now.getDate()) {
            agendar = true;
          }
        } else if (arruma_data[1] > now.getMonth()) {
          agendar = true;
        }
      } else if (arruma_data[0] > now.getFullYear()) {
        agendar = true;
      }

      est = ""
      select = false
      agendamentos.estaco.forEach(estacoes => {
        if(!select){
          est = `<select class="form-control" id="exampleFormControlSelect1">`
        }
        select = true
        est = est + `<option value="${estacoes.id}">${estacoes.number}</option>`
      });
      if(select){
        est = est + "</select>"
      }
      
      
      if (agendar) {
        modal.innerHTML =  `
            
                  <div class="progress mb-4">
                  
                  <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="30" aria-valuemin="0" aria-valuemax="240">30/240</div>
                  </div>
                  ${est}
                  <input type="hidden" name="id" id="id" value="3" >
                  <input type="hidden" name="date" id="date" value=${data}>
                  <button onclick="Agendar()">agendar</button>
                  
                  <table id="lista">
                  <tr>
                    <th>ID</th>
                    <th>Email</th>
                    <th>Data</th>
                  </tr>
                  </table>`;
                  
      }
      var list = document.getElementById("lista");
      agendamentos.agendamento.forEach((agendamento) => {
        var item = document.createElement("tr");

        item.setAttribute("data-id", agendamento.id);
        item.setAttribute("data-title", agendamento.user.email);
        item.setAttribute("data-year", agendamento.date);

        item.innerHTML = `<td>${agendamento.id}</td><td>${agendamento.user.email}</td><td>${agendamento.date}</td>`;

        list.appendChild(item);
      });
    })
    .catch((error) => {
      console.log(error);
    });
}






function Agendar() {
  var idField = document.getElementById("id");
  var id = 3;
  var dateField = document.getElementById("date");
  var date = dateField.value;
  var estacaoId = 4;

  var form = document.getElementById("dados");

  
    form.submit();
  
  
}

function Agenda(data,sede) {


  axios
    .get("http://localhost:5000/agendamentos/"+data+"/"+ sede )
    .then((response) => {
      var agendamentos = response.data;
      var title_date = document.getElementById("title-date");
      
      var modal = document.getElementById("vaga");
      modal.innerText = "";
      
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
          est = `<select class="form-control mb-3" id="exampleFormControlSelect1">`
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
                  
                  <div class="progress-bar" role="progressbar" style="width: 25%;"  aria-valuenow="30" aria-valuemin="0" aria-valuemax="240">30/240</div>
                  </div>
                  <h5>Escolha a sua estação de trabalho:</h5>
                  ${est}
                  <input type="hidden" name="id" id="id" value="3" >
                  <input type="hidden" name="date" id="date" value=${data}>
                  <button onclick="Agendar()">agendar</button>
                  `;
                  
      }  
    })
    .catch((error) => {
      console.log(error);
    });
  
}
function Lista(data,sede) {
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
      
      var modal = document.getElementById("vaga");
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
                  
                  <div class="progress-bar" role="progressbar" style="width: 25%;"  aria-valuenow="30" aria-valuemin="0" aria-valuemax="240">30/240</div>
                  </div>
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



function DIA(data,sede) {
  axios
    .get("http://localhost:5000/agendamentos/"+data+"/"+ sede )
    .then((response) => {
      var agendamentos = response.data;
      
      
      var modal = document.getElementById("vaga");
      var avancar = document.getElementById("avancar");
      modal.innerText = "";

      var livres = 0
      agendamentos.estaco.forEach(estacoes => {
        livres++
      })

      
      var total = agendamentos.quant

      
      var ocupados = total - livres
     
      var por_atual = ocupados/(total/100)
      arruma_data = data.split("-");
       

      modal.innerHTML =  `
                
              <div class="titulo-horario">
                <h4 id>Data: ${arruma_data[2]}/${arruma_data[1]}/${arruma_data[0]}</h4>
              </div>           
                <div class="row quantidades">
                <div class="col-md-12 quantidade">
                  <label class="ocupacao"><b>Não é mais possivel agendar uma estação de trabalho nesse dia</b></label>
                </div>
              </div>
                  `;

                  avancar.innerHTML=""
      
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

      
      
      
      if (agendar) {
        if(total == ocupados){
          modal.innerHTML =  `
                
              <div class="titulo-horario">
                <h4 id>Data: ${arruma_data[2]}/${arruma_data[1]}/${arruma_data[0]}</h4>
              </div>           
                <div class="row quantidades">
                <div class="col-md-12 quantidade">
                  <label class="ocupacao"><b>Não há mais vagas disponiveis para este dia</b></label>
                </div>
              </div>
                  `;
                  avancar.innerHTML=""
        }else{
          modal.innerHTML =  `
          <div class="titulo-horario">
          <h4 class="mb-3">Data: ${arruma_data[2]}/${arruma_data[1]}/${arruma_data[0]}</h4>
          <h5>Escolha o horários <br> 
            entre 8h -18h </h5>
        </div>
        <form action="confirmacao.html" method="get" id="dados">
        <div class="col-sm-12 ">
          <div class="row horarios">
            <div class="col-md-6  Entrada">
              <h5>Entrada</h5>
              
              <input type="hidden" name="id" id="id" value="3" >
              <input type="hidden" name="date" id="date" value=${data}>
              <input type="hidden" name="sede" id="date" value=${sede}>
              
              <div class="horario-button">
                <select class="form-control  horario-button" name="entrada"  onfocus='this.size=3;' onblur='this.size=1;' 
                onchange='this.size=1; this.blur();'>
                  <option value="8h00">8:00</option>
                    <option value="8h30">8:30</option>
                    <option value="9h00">9:00</option>
                    <option value="9h30">9:30</option>
                    <option value="10h00">10:00</option>
                    <option value="10h30">10:30</option>
                    <option value="11h00">11:00</option>
                    <option value="11h30">11:30</option>
                    <option value="12h00">12:00</option>
                    <option value="12h30">12:30</option>
                    <option value="13h00">13:00</option>
                    <option value="13h30">13:30</option>
                    <option value="14h00">14:00</option>
                    <option value="14h30">14:30</option>
                    <option value="15h00">15:00</option>
                    <option value="15h30">15:30</option>
                    <option value="16h00">16:00</option>
                    <option value="16h30">16:30</option>
                    <option value="17h00">17:00</option>
                    <option value="17h30">17:30</option>
                </select>
              </div>
            </div>
            <div class="col-md-6 Saida">
              <h5>Saída</h5>
              <div class="horario-button">
                <select class="form-control horario-button" name="saida" onfocus='this.size=3;' onblur='this.size=1;' 
                onchange='this.size=1; this.blur();'>
                  <option value="8h30">8:30</option>
                  <option value="9h00">9:00</option>
                  <option value="9h30">9:30</option>
                  <option value="10h00">10:00</option>
                  <option value="10h30">10:30</option>
                  <option value="11h00">11:00</option>
                  <option value="11h30">11:30</option>
                  <option value="12h00">12:00</option>
                  <option value="12h30">12:30</option>
                  <option value="13h00">13:00</option>
                  <option value="13h30">13:30</option>
                  <option value="14h00">14:00</option>
                  <option value="14h30">14:30</option>
                  <option value="15h00">15:00</option>
                  <option value="15h30">15:30</option>
                  <option value="16h00">16:00</option>
                  <option value="16h30">16:30</option>
                  <option value="17h00">17:00</option>
                  <option value="17h30">17:30</option>
                  <option value="18h00">18:00</option>
                </select>
              </div>
            </div>
          </div>
          
        </div>
        </form>
        <div class="row quantidades">
          <div class="col-md-12 quantidade">
            <label class="ocupacao"><b>${ocupados}</b> pessoas já agendaram </br>
              para esse dia e horário, </br>
              restam <b>${total - ocupados}</b> vagas</label>
          </div>
        </div>
        `;

        avancar.innerHTML=`<button onclick="Agendar()">Avançar</button>`
        
        }
       
                  
      }


    })
}



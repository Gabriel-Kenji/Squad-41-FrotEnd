session = sessionStorage.getItem('id')
if(session != undefined){
  
  token = localStorage.getItem("token")
  if(token != undefined)
  { 
    axios.post("http://localhost:50000/auth",{token}).then(res =>{
    }).catch(err =>{
        window.location.href = "index.html";
    })
  }else{
    window.location.href = "index.html";
  }
  
}else{
  localStorage.removeItem("token")
  window.location.href = "index.html";
}



var axiosConfig = {
  headers: {
      Authorization: "Bearer " + localStorage.getItem("token")
  }
}




function Agendar() {
  var Entrada = document.getElementById("entrada");
  var hr1 = Entrada.value;
  var Saida = document.getElementById("saida");
  var hr2 = Saida.value;

  h1 = hr1.split("h");
  h2 = hr2.split("h");

 
if(parseInt(h1[0]) <=parseInt(h2[0]) ){
  if(parseInt(h1[0]) == parseInt(h2[0])){
    if(parseInt(h1[1]) < parseInt(h2[1])){
      var form = document.getElementById("dados");

  
      form.submit();
    }else{
      var error = document.getElementById("erro")

      error.innerHTML= `<p >Escolha um horário válido</p>`
    }
  }else{
    var form = document.getElementById("dados");

  
    form.submit();
  }
  var error = document.getElementById("erro")

}else{
  var error = document.getElementById("erro")

      error.innerHTML= `<p >Escolha um horário válido</p>`
}

  
  
  
}

function DIA(data,sede) {

  var modal = document.getElementById("vaga");
  modal.innerHTML = `<div class="mt-5">
                      <img src="img/loading-buffering.gif" alt="">
                    </div>`;
  axios
    .get("http://localhost:50000/agendamentos/"+data+"/"+ sede ,axiosConfig)
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

      est = ""
      select = false
      agendamentos.estaco.forEach(estacoes => {
        if(!select){
          est = `<select class="form-control horario-button" name="estacoes" onfocus='this.size=3;' onblur='this.size=1;' onchange='this.size=1; this.blur();'>`
        }
        select = true
        est = est + `<option value="${estacoes.id}">${estacoes.number}</option>`
      });
      if(select){
        est = est + "</select>"
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
              
              <input type="hidden" name="date" id="date" value=${data}>
              <input type="hidden" name="sede" id="date" value=${sede}>
              
              <div class="horario-button">
                <select class="form-control  horario-button" name="entrada" id="entrada"  onfocus='this.size=3;' onblur='this.size=1;' 
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
                <select class="form-control horario-button" name="saida" id="saida" onfocus='this.size=3;' onblur='this.size=1;' 
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
            <div class="erro" id="erro">  </div>
            <div class="estacoes" ><p><b>Selecione uma estação de trabalho:</b></p> ${est} </div>
          </div>
          
          
          </div>
        </form>
        <div class="row quantidades">
          <div class="col-md-12 quantidade">
            <label class="ocupacao"><b class="num">${ocupados}</b> pessoas já agendaram </br>
              para esse dia , </br>
              restam <b class="num">${total - ocupados}</b> vagas</label>
          </div>
        </div>
        `;

        avancar.innerHTML=`<button onclick="Agendar()">Agendar agora</button>`
        
        }
       
                  
      }


    })
}



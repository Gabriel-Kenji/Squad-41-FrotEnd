var query = location.search.slice(1);
    var partes = query.split("&");
    var data = {};
    partes.forEach(function (parte) {
    var chaveValor = parte.split("=");
    var chave = chaveValor[0];
    var valor = chaveValor[1];
    data[chave] = valor;
    });
    arruma_data = data.date.split("-");

    if(arruma_data[1] == 01){
        mes = "Janeiro";
    }
    if(arruma_data[1] == 02){
        mes = "Fevereiro";
    }
    if(arruma_data[1] == 03){
        mes = "Março";   
    }
    if(arruma_data[1] == 04){
        mes = "Abril"; 
    }
    if(arruma_data[1] == 05){
        mes = "Maio"
    }
    if(arruma_data[1] == 06){
           mes = "Junho";
    }
    if(arruma_data[1] == 07){
         mes = "Julho";
    }
    if(arruma_data[1] == 08){
        mes = "Agosto";
    }
    if(arruma_data[1] == 09){
        mes = "Setembro";
    }
    if(arruma_data[1] == 10){
        mes = "Outubro";
    }
    if(arruma_data[1] == 11){
        mes = "Novembro";
    }
    if(arruma_data[1] == 12){
        mes = "Dezembro";
    }

    var teste = document.getElementById("finalizacao");
    if(data.sede == 1){
        var sede = `
        
        <div class="row mb-2 calendario-inicial">
            <div class="col-md-6 texto_calendario-inicial" id="vaga">
                <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div class="col-auto d-none d-lg-block">
                        <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                        <title>Placeholder</title>
                        <rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

                    </div>
                    <div class="col p-4 d-flex flex-column position-static">
                        <strong class="d-inline-block mb-2 text-primary">World</strong>
                        <h3 class="mb-0">Featured post</h3>
                        <div class="mb-1 text-muted">Nov 12</div>
                            <p class="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="stretched-link">Continue reading</a>
                        </div>

                    </div>
                    <img
                    alt=""
                    src="img/calendario.png" "
                    /><p>Você está agendando para: <b>${arruma_data[2]} de ${mes} de ${arruma_data[0]} </b> </p>
                    <img
                    alt=""
                    src="img/relogio.png" "
                    /><p>Horário:
                    das <b>${data.entrada}</b> às <b>${data.saida} </b></p>
    
                </div>
                <div class="col-md-6 texto_calendario-inicial" id="vaga">
                    <p><img
                    src="img/calendario.png" 
                    />
                    Você está agendando para: <b>${arruma_data[2]} de ${mes} de ${arruma_data[0]} </b> </p>
                    <img
                    alt=""
                    src="img/relogio.png" "
                    /><p>Horário:
                    das <b>${data.entrada}</b> às <b>${data.saida} </b></p>
                    
                </div>
                <div class="col-md-6 texto_calendario-inicial" id="vaga">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.3571828787276!2d-46.66357918502235!3d-23.555611884685714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce582d7a8f2451%3A0x2df5a2e09a20b779!2sR.%20Bela%20Cintra%2C%20986%20-%202%C2%BA%20andar%20-%20Consola%C3%A7%C3%A3o%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001415-002!5e0!3m2!1spt-BR!2sbr!4v1631675948201!5m2!1spt-BR!2sbr"class="mapa"  style="border:0;" allowfullscreen=""    loading="lazy"></iframe> 
                    <br><br>
                    <p><b>Endereço:</b></p>
                    <p>Rua Bela Cintra, 986 - 2º andar Consolação, São Paulo - SP</p>
                </div>
            </div>
        </div>
        `
    }else if(data.sede == 2){
        var sede = `

        

        <div class="row mb-2 calendario-inicial">
            <div class="col-md-6 texto_calendario-inicial" id="vaga">
                <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div class="col-auto d-none d-lg-block">
                        <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                        <title>Placeholder</title>
                        <rect width="100%" height="100%" fill="#55595c"/>
                        <text x="50%" y="50%" fill="#eceeef" dy=".3em">Santos</text></svg>

                    </div>
                    <div class="col p-4 d-flex flex-column position-static">
                        <h3 class="mb-0">Santos</h3>
                        <div class="mb-1 text-muted">Nov 12</div>
                            <p class="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="stretched-link">Continue reading</a>
                        </div>
        
                    </div>
                    <img
                    alt=""
                    src="img/calendario.png" "
                    /><p>Você está agendando para: <b>${arruma_data[2]} de ${mes} de ${arruma_data[0]} </b> </p>
                    <img
                    alt=""
                    src="img/relogio.png" "
                    /><p>Horário:
                    das <b>${data.entrada}</b> às <b>${data.saida} </b></p>
            
                </div>
                <div class="col-md-6 texto_calendario-inicial" id="vaga">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3646.034693960299!2d-46.33343908501456!3d-23.9592132844868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce030c4b240a97%3A0x9a30518492646e10!2sPr%C3%A7.%20dos%20Expedicion%C3%A1rios%2C%2019%20-%202%C2%BA%20andar%20-%20Gonzaga%2C%20Santos%20-%20SP%2C%2011065-500!5e0!3m2!1spt-BR!2sbr!4v1631676002886!5m2!1spt-BR!2sbr"class="mapa" style="border:0;" allowfullscreen="" loading="lazy"></iframe> 
                    <br><br>
                    <p><b>Endereço:</b></p>
                    <p>Praça Dos Expedicionários, 19 2º andar Gonzaga, Santos - SP</p>
                </div>
            </div>
        </div>
        `
    }
    
   
    teste.innerHTML=`
    
        ${sede}
        
    `
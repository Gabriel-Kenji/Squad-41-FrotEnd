import { Button, NavDropdown, FormControl, Row } from "react-bootstrap";
import calendario from "../../_assets/img/calendario.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../_assets/css/home.css";

function Home() {
  return (
    <div class="row calendario-inicial">
      <div class="col-sm-6 texto_calendario-inicial">
        <div class="titulo-calendario-inicial">
          <h4>QUE TAL AGENDAR UMA ATIVIDADE?</h4>
        </div>
        <p>
          Quer marcar um horario para utilizar o espaço dos <b>escritorios</b> do grupo  <b className = "fcamara"> FCamara?</b>
          <br/>
          Se sim você veio ao lugar certo, na plataforma de agendamento "NOME qualquer" você conseguira agendar a utilização de uma das estações de trabalho disponíveis!
        </p>
        <p class="link-perfil">
          <a href="">Acesse seu perfil</a> e experimente agora!
        </p>
      </div>
      <div class="col-sm-6">
        <img src={calendario} alt="calendario" class="imagem-calendario-inicial" />
      </div>
    </div>
  );
}

export default Home;

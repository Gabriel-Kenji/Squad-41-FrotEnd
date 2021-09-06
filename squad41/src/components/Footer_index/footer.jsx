import { Button, NavDropdown, FormControl, Row } from "react-bootstrap";
import logo from "../../_assets/img/logofcamara.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../_assets/css/footer.css";

function Footer() {
  return (
      <footer>
        <div class="row footer">
        
          <div class="col-sm-6">
            <div class="col-sm-12 logos-footer">
            
              <a href="https://www.fcamara.com.br/">
              <img class="logofcamara-footer" src={logo} alt="" />
              </a>
            </div>
            <div class="col-sm-12 copyright">
              <h6>
                © 2021 FCamara Formação e Consultoria.
                <br />
                Todos os direitos reservados
              </h6>
            </div>
          </div>
          <div class="col-sm-6 logar-footer">
          <p class="logar-footer-texto"> Ainda não fez o seu agendamento?</p>
          <button class="btn btn-logar-footer" >
            Entrar
          </button>
        </div>
        </div>
        
      </footer>
  );
}

export default Footer;

cadastro = sessionStorage.getItem('cadastro')

if(cadastro == 1)
{
    sessionStorage.removeItem("cadastro")
    cad = document.getElementById("cadastro")
    cad.innerHTML = `<div class="alert alert-success" role="alert">
    Cadastro realizado com sucesso!
  </div>`
}
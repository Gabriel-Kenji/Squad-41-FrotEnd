function Cadastro(){
    var nameField =  document.getElementById("name")
    var emailField =  document.getElementById("email")
    var passwordField =  document.getElementById("password")
    var email = emailField.value
    var password = passwordField.value
    var name = nameField.value

    var erro =  document.getElementById("erro")

    axios.post("http://localhost:5000/users",{email,password,name}).then(res =>{
        sessionStorage.setItem('cadastro', 1);
        window.location.href = "index.html";
    }).catch(err =>{
        erro.innerHTML = `<p>E-mail ou senha incorreto</p>`
        alert(err)
    })
}
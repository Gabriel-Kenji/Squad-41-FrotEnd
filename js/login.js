var axiosConfig = {
    headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
    }
}


function Login(){
    var emailField =  document.getElementById("email")
    var passwordField =  document.getElementById("password")
    var email = emailField.value
    var password = passwordField.value

    var erro =  document.getElementById("erro")

    axios.post("http://localhost:5000/login",{email,password}).then(res =>{
        var token = res.data.token
        var id = res.data.id
        localStorage.setItem("token", token)
        axiosConfig.headers.Authorization = "Bearer " + localStorage.getItem("token")
        sessionStorage.setItem('id', id);
        window.location.href = "sedes.html";
    }).catch(err =>{
        erro.innerHTML = `<p>E-mail ou senha incorreto</p>`
        alert(err)
    })
}
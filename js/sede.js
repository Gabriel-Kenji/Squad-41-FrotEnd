session = sessionStorage.getItem('id')
if(session != undefined){
  token = localStorage.getItem("token")
  if(token != undefined)
  {
    axios.post("http://localhost:5000/auth",{token}).then(res =>{
        
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
nome = document.getElementById("nome")

axios.get("http://localhost:5000/users/" + session ).then(res =>{
    nome.innerHTML = res.data.name
}).catch(err =>{
})
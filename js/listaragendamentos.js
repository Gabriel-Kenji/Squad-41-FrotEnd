session = sessionStorage.getItem("id");
if (session != undefined) {
  token = localStorage.getItem("token");
  if (token != undefined) {
    axios
      .post("http://localhost:50000/auth", { token })
      .then((res) => {})
      .catch((err) => {
        window.location.href = "index.html";
      });
  } else {
    window.location.href = "index.html";
  }
} else {
  localStorage.removeItem("token");
  window.location.href = "index.html";
}
teste = document.getElementById("teste");
var axiosConfig = {
  headers: {
    Authorization: "Bearer " + localStorage.getItem("token"),
  },
};

axios
  .get("http://localhost:50000/agendamentos/" + session, axiosConfig)
  .then((res) => {
    dados = res.data;
    sede = "";
    teste.innerHTML = "";
    dados.forEach((agenda) => {
      if (agenda.estacao.sedeId == 1) {
        sede = "São Paulo";
      } else if (agenda.estacao.sedeId == 2) {
        sede = "Santos";
      }

      data = agenda.date;
      arruma_data = data.split("-");
      teste.innerHTML =
        teste.innerHTML +
        `
    <tr>
      <td>${arruma_data[2]}/${arruma_data[1]}/${arruma_data[0]}</td>
      <td>${sede}</td>
      <td>${agenda.entrada} - ${agenda.saida}</td>
      <td>${agenda.estacao.number} </td>
      <td><button onclick="Delete(${agenda.id})" class="btn btn-danger btn-sm">Cancelar</button></td>
    </tr>`;
    });
  })
  .catch((err) => {});

function Delete(id) {
  axios
    .delete("http://localhost:50000/agendamento/" +id, axiosConfig)
    .then((res) => {
        document.location.reload(true)
    }).catch(err=>{

    })
}

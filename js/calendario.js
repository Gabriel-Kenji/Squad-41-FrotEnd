now = new Date();

var query = location.search.slice(1);
var partes = query.split("&");
var data = {};
partes.forEach(function (parte) {
  var chaveValor = parte.split("=");
  var chave = chaveValor[0];
  var valor = chaveValor[1];
  data[chave] = valor;
});



// document.addEventListener("DOMContentLoaded", function () {
//   var calendarEl = document.getElementById("calendar");

//   var calendar = new FullCalendar.Calendar(calendarEl, {
//     selectable: true,
//     height: "500px",
//     expandRows: false,
//     locale: "pt-br",
//     axisFormat: "h:mm",
//     columnFormat: {
//       month: "ddd", // Mon
//       week: "ddd d", // Mon 7
//       day: "dddd M/d", // Monday 9/7
//       agendaDay: "dddd d",
//     },
//     buttonText: {
//       today: "Hoje",
//       month: "Mês",
//       week: "Semana",
//       day: "Dia",
//       list: "Lista",
//     },
//     headerToolbar: {
//       left: "prev",
//       center: "title",
//       right: "next",
//     },
//     // theme: true,
//     dateClick: function (info) {
//       alert("clicked " + info.dateStr);

//       DIA(info.dateStr, data.sede);
//       listar();
//     },
//   });

//   calendar.render();
// });

document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    height: '400px',
    expandRows: false,
    locale: "pt-br",
    headerToolbar: {
      left: 'prev',
      center: 'title',
      right: 'next'
    },
    selectable: true,
    dayMaxEvents: true, // allow "more" link when too many events
    dateClick: function (info) {
                  DIA(info.dateStr, data.sede);
                }
  });

  calendar.render();
});

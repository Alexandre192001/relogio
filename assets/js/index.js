// Tempo para atualizar
const time = 1000;

function relogio() {
  // Pegando os campos do HTML
  const horas = document.querySelector(".hora");
  const minutos = document.querySelector(".minutos");
  const segundos = document.querySelector(".segundos");

  // Buscando hora,minuto e segundos do PC
  const data = new Date();
  let hh = data.getHours();
  let mm = data.getMinutes();
  let ss = data.getSeconds();

  // Se for menos que 10 será adicionado um 0 atrás do número
  if(hh<10){
    hh = "0" + hh
  }

  if(mm<10){
    mm = "0" + mm
  }

  if(ss<10){
    ss = "0" + ss
  }

  // Inserindo valores nos elementos HTML
  horas.innerHTML = hh;
  minutos.innerHTML = mm;
  segundos.innerHTML = ss;

  
}

// a cada 1 segundo chamar a função relogio
setInterval(() => {
  relogio()
},time)
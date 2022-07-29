const diasElemento = document.getElementById("dias");
const horasElemento = document.getElementById("horas");
const minutosElemento = document.getElementById("minutos");
const segundosElemento = document.getElementById("segundos");

const inicioCenso = "1 Aug 2022"

function contador(){
    const censoData = new Date(inicioCenso);
    console.log(censoData)
    const dataAtual = new Date();

    const totalSegundos = (censoData - dataAtual) / 1000;
    
    const dias = Math.floor(totalSegundos / 3600 / 24);
    const horas = Math.floor(totalSegundos / 3600) % 24;
    const minutos = Math.floor(totalSegundos / 60) % 60;
    const segundos = Math.floor(totalSegundos) % 60;

    diasElemento.innerHTML = formatTime(dias);
    horasElemento.innerHTML = formatTime(horas);
    minutosElemento.innerHTML = formatTime(minutos);
    segundosElemento.innerHTML = formatTime(segundos);
}

function formatTime(time){
    return time < 10 ? '0' + time : time;
}

contador();

setInterval(contador, 1000);

// Função para o contador de visitas
function liveViews(response) {
    document.getElementById('visitas').innerText = response.value;
}
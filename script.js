const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let nome = document.getElementById('nome').value;
  let email = document.getElementById('email').value;
  let data = {
    nome,
    email,
  }
  let convertData = JSON.stringify(data);

  localStorage.setItem('lead', convertData)

  let content = document.getElementById('cadastrar')

  let carregando = `<p>carregando...</p>`

  let pronto = `<p>pronto</p>`

  content.innerHTML = carregando


  setTimeout(() => {
    content.innerHTML = pronto
  }, 1000)

})






function hours(duration, display) {
    let timer = duration,hours, minutes, seconds;
    setInterval(function () {
        hours =    parseInt(timer /60,10);
        minutes = parseInt(timer % 60, 10);
        seconds = parseInt(timer % 60, 10);
        hours = hours < 10 ? "0" + hours: hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
       
        display.textContent = hours + "hs" +  minutes + "min" + seconds + "seg"
        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
  }
  window.onload = function () {
    var duration = 60 * 24; 
        display = document.querySelector('#timer'); 
    hours(duration, display); 
  };
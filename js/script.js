// function voor de tijd krijgen
function setTime(){
  var date = new Date();

  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();

  // om de achtergrond te veranderen op basis van uren
  var background = document.querySelector(".background").style;

  if (h >= 6 && h < 12 || h>=22 && h<24) {
    background.background = 'radial-gradient(ellipse at bottom, #000035 0%, #090a0f 100%)';
  } else if (h >= 12 && h< 20){
      background.background = 'radial-gradient(ellipse at bottom, #edcfb9 0%, #090a0f 100%)';
  } else if (h >= 20 && h < 22){
      background.background = 'radial-gradient(ellipse at bottom, #f06553 0%, #090a0f 100%)';
  } else {
        background.background = 'radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)';
  }

  // Voor het toevoegen van nul indien nodig
  h < 10 ? h = "0"+ h : h;
  m < 10 ? m = "0" +m : m;
  s < 10 ? s = "0"+ s : s;


  // tijd in html zetten
  document.getElementById('hour').innerHTML = h;
  document.getElementById('minutes').innerHTML = m;
  document.getElementById('seconds').innerHTML = s;


}

// functie om de seconden aanvragen
setInterval(function(){
  setTime();
}, 1000);

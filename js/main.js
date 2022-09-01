


function startTimer(speed, numToRun, classEl){
    let timer = 0;
    let interval = setInterval(function(){
      classEl.innerHTML = timer;
      timer+=1;
      if (timer > numToRun) {
        clearInterval(interval);
      }
    }, speed);
  }
  startTimer(60, 105, document.querySelector('.int-info-one'));
  startTimer(80, 62, document.querySelector('.int-info-two'));
  startTimer(100, 50, document.querySelector('.int-info-three'));

  const buttonTell = document.querySelector('.tel-button');
  const contentTell = document.querySelector('.tel-show');
  buttonTell.onclick = function() {
    contentTell.classList.toggle('active');
  }
  buttonTell.onclick = function() {
    contentTell.classList.toggle('active');
  }
  const buttonTellTwo = document.querySelector('.contact-click');
  buttonTellTwo.onclick = function() {
    contentTell.classList.toggle('active');
  }
  // Connecting the parallax effect
  $('.menu__burger').click(function(e){
    $('.menu__burger').toggleClass('active');
    $('.burger-header').toggleClass('active');
  })


const scene = document.getElementById('scene');
const parallaxInstance = new Parallax (scene);
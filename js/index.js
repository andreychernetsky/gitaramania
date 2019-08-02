var btn = document.querySelector('.section');
var nav = document.getElementById('nav');
btn.addEventListener('click', function () {
  nav.classList.toggle('active');
});

function responsiveText() {
  let maxHeath = 0;
  const cardItem = document.getElementsByClassName('card-item__text-item');
  const colDivs = document.getElementsByClassName('col');
  const legthCol = colDivs.length - 1;

  for (let i = 0; i <= legthCol; i++) {
    const heagth = colDivs[i].clientHeight;
    /* console.dir(heagth)*/
    if (heagth > maxHeath) {
      /* console.log(heagth > maxHeath);*/
      maxHeath = heagth;
    }
  }

  for (let i = 0; i <= legthCol; i++) {
    /* console.log(cardItem[i]);*/
    cardItem[i].style['padding-bottom'] = (maxHeath - colDivs[i].clientHeight) + 'px'
  }
}

window.onload = function () {
  responsiveText();
}



/*
JQuery(document).ready(function($) {
  JQuery(function($){
    $('.table').stacktable();
  })
})
*/
// burger
// при нажатие возникает меню с затеменнием в мобильной версии
(() => {
  let btn = document.querySelector('.menu-btn');
  let nav = document.getElementById('nav');
  btn.addEventListener('click', function () {
    nav.classList.toggle('active');
  });
})();
// accordion
(() => {
  const acc = document.getElementsByClassName("accordion__header");
  let i;
  for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function () {
      this.classList.toggle("active");
      this.nextElementSibling.classList.toggle("show");
    }
  }
})();
// прокрутка по якорям
(() => {
  // // собираем все якоря; устанавливаем время анимации и количество кадров
// const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
//       animationTime = 300,
//       framesCount = 20;
// anchors.forEach(function(item) {
//   // каждому якорю присваиваем обработчик события
//   item.addEventListener('click', function(e) {
//     // убираем стандартное поведение
//     e.preventDefault();
//     // для каждого якоря берем соответствующий ему элемент и определяем его координату Y
//     let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top;
//     // запускаем интервал, в котором
//     let scroller = setInterval(function() {
//       // считаем на сколько скроллить за 1 такт
//       let scrollBy = coordY / framesCount;
//       // если к-во пикселей для скролла за 1 такт больше расстояния до элемента
//       // и дно страницы не достигнуто
//       if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
//         // то скроллим на к-во пикселей, которое соответствует одному такту
//         window.scrollBy(0, scrollBy);
//       } else {
//         // иначе добираемся до элемента и выходим из интервала
//         window.scrollTo(0, coordY);
//         clearInterval(scroller);
//       }
//     // время интервала равняется частному от времени анимации и к-ва кадров
//     }, animationTime / framesCount);
//   });
// });
// function currentYPosition() {
//     // Firefox, Chrome, Opera, Safari
//     if (self.pageYOffset) return self.pageYOffset;
//     // Internet Explorer 6 - standards mode
//     if (document.documentElement && document.documentElement.scrollTop)
//         return document.documentElement.scrollTop;
//     // Internet Explorer 6, 7 and 8
//     if (document.body.scrollTop) return document.body.scrollTop;
//     return 0;
// }
// function elmYPosition(eID) {
//     var elm = document.getElementById(eID);
//     var y = elm.offsetTop;
//     var node = elm;
//     while (node.offsetParent && node.offsetParent != document.body) {
//         node = node.offsetParent;
//         y += node.offsetTop;
//     } return y;
// }
// function smoothScroll(eID) {
//     var startY = currentYPosition();
//     var stopY = elmYPosition(eID);
//     var distance = stopY > startY ? stopY - startY : startY - stopY;
//     if (distance < 100) {
//         scrollTo(0, stopY); return;
//     }
//     var speed = Math.round(distance / 100);
//     if (speed >= 20) speed = 20;
//     var step = Math.round(distance / 25);
//     var leapY = stopY > startY ? startY + step : startY - step;
//     var timer = 0;
//     if (stopY > startY) {
//         for ( var i=startY; i<stopY; i+=step ) {
//             setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
//             leapY += step; if (leapY > stopY) leapY = stopY; timer++;
//         } return;
//     }
//     for ( var i=startY; i>stopY; i-=step ) {
//         setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
//         leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
//     }
// }
  const anchors = document.querySelectorAll('a[href*="#"]');
  for (const anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const blockID = anchor.getAttribute('href');
      document.querySelector('' + blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  }
})();
(() => {
})();
//кнопка на вверх
// $(function () {
//   $(window).scroll(function () {
//     if ($(this).scrollTop() != 0)
//       $('#toTop').fadeIn();
//     else
//       $('#toTop').fadeOut();
//   });
//   $('#toTop').click(function () {
//     $('body,html').animate({
//       scrollTop: 0
//     }, 800);
//   });
// });
(function () {
  'use strict';

  function trackScroll() {
    let scrolled = window.pageYOffset;
    let coords = document.documentElement.clientHeight;
    if (scrolled > coords) {
      goTopBtn.classList.add('topButton__show');
    }
    if (scrolled < coords) {
      goTopBtn.classList.remove('topButton__show');
    }
  }

  function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -80);
      setTimeout(backToTop, 0);
    }
  }

  const goTopBtn = document.querySelector('.topButton');
  window.addEventListener('scroll', trackScroll);
  goTopBtn.addEventListener('click', backToTop);
})();
//для мобильного меню
(() => {
  const burger = () => {
    const navBtn = document.getElementById('navMenu');
    navBtn.style.display === 'none' ? navBtn.style.display = 'block' : navBtn.style.display = 'none';
  };
  document.getElementById('btn').addEventListener('click', burger);
})();
//accordion2



/*
// викторина 2
const option1 = document.querySelector('.option1');
option2 = document.querySelector('.option2');
option3 = document.querySelector('.option3');
option4 = document.querySelector('.option4');

const optionElements = document.querySelectorAll('.option');
const question = document.getElementById('number-of-question'),
  numberOfAllQuestion = document.getElementById('number-of-all-questions');

let indexOfQuestion,
  indexOfPage = 0;

const answersTracker = document.getElementById('answers-tracker');
const btnNext = document.getElementById('btn-next');

let score = 0;

const correctAnswer = document.getElementById('correct-answer'),
  numberOfAllQuestion2 = document.getElementById('number-of-all-questions-2'),
  btnTruAgain = document.getElementById('btn-try-again');

const questions = [
  {
    question:'Сколько нот в музыке?',
    options:[
      'восемь',
      'семь',
      '12',
      '6'
    ],

    rightAnswer:1
  },
  {
    question:'Сколько ступеней в музыке?',
    options:[
      'восемь',
      'семь',
      '12',
      '6'
    ],

    rightAnswer:1
  },
  {
    question:'как назвается треться нота в C-dur?',
    options:[
      'фа',
      'соль',
      'ми',
      '6'
    ],

    rightAnswer:2
  }
];

numberOfAllQuestion.innerHtml = questions.length;

const load =()=>{
  question.innerHTML = questions[0].question;

}

window.addEventListener('liad',()=>{
  load()
})

*/
{
 {
  const accButton = document.querySelectorAll('.accordion2__button');
  accButton.forEach(btn => btn.addEventListener('click',()=>{
    const openButton = btn.nextElementSibling.classList.contains('accordion__panel--open');
    if(openButton) {
      closeAcc(btn.nextElementSibling);
    } else {
      accButton.forEach(x=>closeAcc(x.nextElementSibling));
      openAcc(btn.nextElementSibling);
    }
  }))

  function openAcc(item) {
    item.classList.add('accordion__panel--open');
    item.style.maxHeight = item.scrollHeight+'px';
    item.style.padding = '1rem auto'
  }

  function closeAcc(item) {
    item.classList.remove('accordion__panel--open');
    item.style.maxHeight = '0';
    item.style.paddin = '0 1.5rem 0 1.5rem';
  }


}


}
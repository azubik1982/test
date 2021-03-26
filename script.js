// menu-navigation // Делел по 1-й лекции Сергея Шаляпина
// const menuNav = document.getElementById('nav-menu');

// menuNav.addEventListener('click', (event) => {
//   menuNav.querySelectorAll('#nav-menu a').forEach(el => el.classList.remove('active'));
//     event.target.classList.add('active');
// });

// menu-navigation-scrolling function // Делал по лекции 2 Сергея Шаляпина (от 17 марта)
// const menu = document.getElementById('nav-menu');


document.addEventListener('scroll', onScroll);

function onScroll(eventScroll) {
    // console.log(eventScroll);
  const curPos = window.scrollY;
    // console.log(curPos);

  const menuLink = document.querySelectorAll('.menu-link'); //find elements with class "menu-links"
  const navMenuLincs = document.querySelectorAll('#nav-menu a'); //find links tag "a" from navigation menu

  // Для элемнтов с классом меню-линк, хочу вывести их id - работает
  menuLink.forEach((elMenuId) => {
      // console.log(elMenuId);
      //  debugger;
      // elMenuId.getAttribute('id'); // - выводит id элементов - работает
       if (elMenuId.offsetTop - document.querySelector('header').offsetHeight <= curPos && (elMenuId.offsetTop + elMenuId.offsetHeight) - document.querySelector('header').offsetHeight > curPos){
          navMenuLincs.forEach((a) => {
          a.classList.remove('active');
          if (elMenuId.getAttribute('id') === a.getAttribute('href').substring(1)) {
            a.classList.add('active');
            burgerMenu.parentElement.parentElement.classList.remove('__clickBrg');
            document.body.classList.remove('_lock');
            document.querySelector('a.active').addEventListener('click' , function() {
              burgerMenu.parentElement.parentElement.classList.remove('__clickBrg');
            document.body.classList.remove('_lock');
            });

          }
        });
      }
    });
}


// menu-portfolio- button-click styles-change
portfolio.addEventListener('click', (eventClick) => {
  if (eventClick.target.classList.contains("button_borderd")) {
    portfolio.querySelectorAll('button').forEach(el => el.classList.remove('button_borderd_active'));
      if (eventClick.target.classList.contains("button_borderd")) {
          eventClick.target.classList.add('button_borderd_active');
      }
  }
}
);

// shufle portfolio images - when click

var parent = document.getElementById("shufle");
//  console.log(parent);
 var imgs = parent.children;
//  console.log(imgs);
// Create a document fragment to hold the shuffled elements
 var frag = document.createDocumentFragment();

//do function who happens when has click-on portfolio buttons
portfolio.addEventListener('click', (eventShufl) =>{
// Loop until every element is moved out of the parent and into the document fragment
 while (imgs.length) {
   // select one random child element and move it into the document fragment
      frag.appendChild(imgs[Math.floor(Math.random() * imgs.length)]);
  }
// appending the document fragment appends all the elements, in the shuffled order
parent.appendChild(frag);
});


// slider-skript // -- work

const images = document.querySelectorAll('.slider .slider-line img'); //take all images in slider-section
const sliderLine = document.querySelector('.slider-line');             //take all images-array
let count = 1; //number of active slide
let width;
let _bckGr1;

//set- width-height size of slider item for working-place

function init(){
  // console.log('resize');
  width = document.querySelector('.slider').offsetWidth; //find a width of slider-block from working-place
  sliderLine.style.width = width * images.length + 'px'; //find the length of images-array
  images.forEach( item => {
    //do the width of image - for slider-block
    item.style.width = width + 'px';
    //add height = auto - for item, for work addaptive
    item.style.height = 'auto';
  });
  rollSlider();
  // console.log(width);
}

window.addEventListener('resize' , init);               //start init-function when resize-happens
init();

//scroll images-in slider block

document.querySelector('.slider_left').addEventListener('click' , function() {
  sliderLine.style.transition = "transform .5s ease-in-out";
  var max = images.length;
  count <= 0 ? false : count--;

  rollSlider();
  jump();
});


document.querySelector('.slider_right').addEventListener('click' , function() {
  sliderLine.style.transition = "transform .5s ease-in-out";
  var max = images.length;
  count >= max - 1 ? false : count++;

  rollSlider();
  jump();
});

//move - slide-function
function rollSlider(){
  sliderLine.style.transform = 'translate(-'+count*width + 'px)';
};

//jump for do hide-adding of images in slider

function jump() {
  sliderLine.addEventListener('transitionend', function(){
    images[count].id === "first_clone" ? count = 1 : count;
    images[count].id === "last_clone" ? count = images.length - 2 : count;
    sliderLine.style.transition = "none";
    rollSlider()
  });

//background - for slider
  const sliderBckGr = document.querySelector('#home');
  if (count % 2 == 0) {
    sliderBckGr.classList.add('_bckGr2');
  } else {
    sliderBckGr.classList.remove('_bckGr2');
  }
}


//burger-menu
const navMenuLincs = document.querySelectorAll('#nav-menu a');
const burgerMenu = document.querySelector('.hamburger');
burgerMenu.addEventListener('click', function(){
  burgerMenu.parentElement.parentElement.classList.toggle('__clickBrg');
  document.body.classList.toggle('_lock');
  document.querySelector('.slider').classList.toggle('_lock');
})

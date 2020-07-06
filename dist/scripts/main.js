const openBtn = document.getElementById('Openmenu');
const menu = document.getElementById('mob-nav');
const close_ = document.getElementById('Closemenu');
openBtn.addEventListener('click',(e)=>{
  openBtn.style.display = 'None';
  menu.style.transition = '0.3s ease-in-out';
  menu.style.display = 'block';
  menu.style.transform = 'translateX(0px)';
  close_.style.display = 'block';

});

close_.addEventListener('click',()=>{
  close_.style.display = 'None';
  openBtn.style.display = 'block';
  menu.style.transform = 'translateX(-500px)'
});

const navs = document.getElementsByClassName('nav-item');
for(let i = 0; i < navs.length; i++){
  navs[i].addEventListener('click',()=>{
    close_.style.display = 'None';
    openBtn.style.display = 'block';
    menu.style.transform = 'translateX(-500px)'
  });
}


const carousel = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');
console.log(images);
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//counter
let count = 1;
const size = images[0].clientWidth;
console.log(size);
carousel.style.transform = 'translateX(' + (-size * count) + 'px)';
carousel.style.width = size + 'px';

//buttons
nextBtn.addEventListener('click',()=>{
  carousel.style.transition = "transform 0.4s ease-in-out";
  count++;
  carousel.style.transform = 'translateX(' + (-size * count) + 'px)';
});

prevBtn.addEventListener('click',()=>{
  carousel.style.transition = "transform 0.4s ease-in-out";
  count--;
  carousel.style.transform = 'translateX(' + (-size * count) + 'px)';
});

carousel.addEventListener('transitionend',()=>{
  if(images[count].id === 'lastClone'){
    carousel.style.transition = 'none';
    count = images.length - 2;
    carousel.style.transform = 'translateX(' + (-size * count) + 'px)';
  }
  if(images[count].id === 'firstClone'){
    carousel.style.transition = 'none';
    count = images.length - count;
    carousel.style.transform = 'translateX(' + (-size * count) + 'px)';
  }
});
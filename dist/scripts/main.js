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



const carousel = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');
console.log(images);
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//counter
let count = 1;
const size = images[0].clientWidth;
carousel.style.transform = 'translateX(' + (-size * count) + 'px)';
carousel.style.width = size + 'px';

/*//buttons
nextBtn.addEventListener('click',()=>{
  if(count >= images.length - 1)return;
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
});*/

/*
function postToGoogle() {
       var field1 = $("#firstnameField").val();
       var field2 = $("#lastnameField").val();
       var field3 = $("#emailField").val();
       var field4 = $("#descField").val();
   
       /*if(field1 == ""){
           alert('Please Fill Your Name');
           document.getElementById("firstnameField").focus();
           return false;
       }
       if(field2 == ""){
           alert('Please Fill Your Email');
           document.getElementById("lastnameField").focus();
           return false;
       }
       if(field3 == "" || field3.length > 10 || field3.length < 10){
           alert('Please Fill Your Mobile Number');
           document.getElementById("emailField").focus();
           return false;
       }
   
       $.ajax({
        url: "https://docs.google.com/forms/d/e/1FAIpQLSdRJsUDRtJ06ktWiAP0-56Lx7surtRbXpQz9bn2vNmzOUGMOA/formResponse?",
        data: {"entry.1400226010": field1, "entry.1628362279": field2, "entry.1569788439": field3, "entry.560530074": field4},
        type: "POST",
        dataType: "xml",
        success: function(d)}
        {
        },
        error: function(x, y, z)
            {
    
                $('#success-msg').show();
                $('#form').hide();
    
            }
    });
    return false;
    }
*/

var index = 0;
function next()
{
  if(count >= images.length - 1){
    return;
  }
  carousel.style.transition = "transform 0.4s ease-in-out";
  count++;
  carousel.style.transform = 'translateX(' + (-size * count) + 'px)';
  
  setTimeout(next, 3000);
}
next();

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



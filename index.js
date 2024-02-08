window.onscroll = function () {
    scrollRotate();
};

function scrollRotate() {
    let image = document.getElementById("reload");
    let rotAngle=window.scrollY/2
    image.style.transform = "rotateY(" + rotAngle + "deg)";
    if(rotAngle>=180){
        image.style.transform = "rotateY(180deg)"; 
        window.removeEventListener('scroll', scrollRotate);
    }
    else{
    if(rotAngle>90){
        image.style.filter = "grayscale(100%)";
    }
    else{
        image.style.filter = "none";
    }
}
}
window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var triggerPosition = 300;
    var aboutMainDiv = document.querySelector('.about_main_div');

    if (scrollPosition > triggerPosition) {
        aboutMainDiv.style.right = '10%'; 
    } else {
        aboutMainDiv.style.right = '-30%'; 
    }
});
function myFunction() {
    var x = document.getElementById("topnav_links");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var triggerPosition = 200;
    var words = document.querySelectorAll('.slogan_main_div p span');

    words.forEach(function(word, index) {
        if (scrollPosition > triggerPosition * index) {
            word.style.opacity = '1';
        } else {
            word.style.opacity = '0'; 
        }
    });
});







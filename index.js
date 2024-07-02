window.onscroll = function () {
    scrollRotate();
};
//handles the rotation of and transition of center image
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
// Handles the flying in of the about section
window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var flyInTriggerPosition = 300;
    var aboutMainDiv = document.querySelector('.about_main_div');
    var imagepos = document.querySelector('.wrapper');

    if (scrollPosition > flyInTriggerPosition) {
        aboutMainDiv.style.right = '10%'; 
        imagepos.style.position = 'absolute';
    } else {
        aboutMainDiv.style.right = '-30%'; 
        imagepos.style.position = 'fixed';
    }
});

// Handles the appearance/disappearance of the central image as we scroll
window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var imageTriggerPosition = 700;
    var imagepos = document.querySelector('.wrapper');

    if (scrollPosition > imageTriggerPosition) {
        imagepos.style.position = 'absolute';
    } else {
        imagepos.style.position = 'fixed';
    }
});

// Handles opening and closing of the hamburger menu
function myFunction() {
    var x = document.getElementById("topnav_links");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

// Handles the appearance of the slogan as we scroll
window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var sloganTriggerPosition = 200;
    var words = document.querySelectorAll('.slogan_main_div p span');

    words.forEach(function(word, index) {
        if (scrollPosition > sloganTriggerPosition * index) {
            word.style.opacity = '1';
        } else {
            word.style.opacity = '0'; 
        }
    });
});

// Handles the disappearance of about & slogan as we scroll
window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var disappearTriggerPosition = 700;
    var aboutMainDiv = document.querySelector('.about_main_div');
    var sloganMainDiv = document.querySelector('.slogan_main_div');

    if (scrollPosition > disappearTriggerPosition) {
        aboutMainDiv.style.right = '-30%'; // Hides the about section
        sloganMainDiv.style.opacity = '0'; // Hides the slogan section
    } else if (scrollPosition > 300) { // Ensure it can fly in
        aboutMainDiv.style.right = '10%'; // Shows the about section
        sloganMainDiv.style.opacity = '1'; // Shows the slogan section
    }
});
// Handles the flying in of project section
window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var TriggerPosition = 710;
    var projectMainDiv = document.querySelector('.projects_main_div');
    if (scrollPosition > TriggerPosition) {
       projectMainDiv.style.bottom='30%';
    } else if (scrollPosition < 710) { // Ensure it can fly in
        projectMainDiv.style.bottom='-60%';
    }
});









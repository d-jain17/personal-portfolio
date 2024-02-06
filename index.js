window.onscroll = function () {
    scrollRotate();
};

function scrollRotate() {
    let image = document.getElementById("reload");
    let rotAngle=window.scrollY/11
    image.style.transform = "rotateY(" + rotAngle + "deg)";
    if(rotAngle>90){
        image.style.filter = "grayscale(100%)";
    }
    else{
        image.style.filter = "none";
    }
}
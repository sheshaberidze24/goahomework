var i = 0;
var images = []; //array
var time = 3000; // time in millie seconds

//images
images[0] = "url(image1.jfif)";
images[1] = "url(image2.jpg)";
images[2] = "url(image3.avif)";

//function
function changeImage() {
    var el = document.getElementById('body');
    el.style.backgroundImage = images[i];
    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout('changeImage()', time);
}
window.onload = changeImage;
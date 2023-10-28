const slider = document.querySelector(".image-slider");
const leftArrow = document.querySelector(".leftArr");
const rightArrow = document.querySelector(".rightArr");


//Image data for slider

const images = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg","img5.jpg", "img6.jpg"];

let id = 0;

// Slider function 

function slide(id) {
    slider.style.backgroundImage = `url(./photos//${images[id]})`

    slider.classList.add("image-fade");

    setTimeout(() => {
        slider.classList.remove("image-fade");
    }, 550);
}

leftArrow.addEventListener('click', () => {
    id --;

    if(id < 0){
        id = images.length - 1;
     }
     slide(id);
}); 

rightArrow.addEventListener('click', () => {
    id ++;

    if(id > images.length - 1){
        id = 0;
     }
     slide(id);
}); 


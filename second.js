// Changing Appearance //
function changeSkin(fileName){
    let skinPic = document.querySelector("#girlBody");
    skinPic.setAttribute("src", fileName);
}
function changeEyeColor(fileName){
    let eyePic = document.querySelector("#eyeDefault");
    eyePic.setAttribute("src", fileName);
}
function changeDress(fileName){
    let dressPic = document.querySelector("#dressDefault");
    dressPic.setAttribute("src", fileName); 
}
function changeShoe(fileName){
    let shoePic = document.querySelector("#shoeDefault");
    shoePic.setAttribute("src", fileName);
}
function changeHair(fileName){
    let hairPic = document.querySelector("#hairDefault");
    hairPic.setAttribute("src", fileName);
}

// Reset Button //
function reset(fileName){
    let skinPic = document.querySelector("#girlBody");
    skinPic.setAttribute("src", "images/pale.png");
    let eyePic = document.querySelector("#eyeDefault");
    eyePic.setAttribute("src", fileName);
    let dressPic = document.querySelector("#dressDefault");
    dressPic.setAttribute("src", fileName);
    let shoePic = document.querySelector("#shoeDefault");
    shoePic.setAttribute("src", fileName);
    let hairPic = document.querySelector("#hairDefault");
    hairPic.setAttribute("src", fileName);
}

// Slider Functionality //
const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];
productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

// Preload Images
const skinOptions = ['images/pale.png', 'images/fair.png', 'images/light.png', 'images/medium.png', 'images/deep1.png', 'images/deep2.png'];
const eyeOptions = ['images/brown_eyes.png', 'images/amber_eyes.png', 'images/green_eyes.png', 'images/blue_eyes.png', 'images/gray_eyes.png'];
const hairOptions = ['images/hair1black.png', 'images/hair2black.png', 'images/hair3black.png', 'images/hair4black.png', 'images/hair5black.png', 'images/hair1brown.png', 'images/hair2brown.png', 'images/hair3brown.png', 'images/hair4brown.png', 'images/hair5brown.png', 'images/hair1ginger.png', 'images/hair2ginger.png', 'images/hair3ginger.png', 'images/hair4ginger.png', 'images/hair5ginger.png', 'images/hair1blonde.png', 'images/hair2blonde.png', 'images/hair3blonde.png', 'images/hair4blonde.png', 'images/hair5blonde.png'];
const dressOptions = ['images/dress1red.png', 'images/dress2red.png', 'images/dress3red.png', 'images/dress4red.png', 'images/dress5red.png', 'images/dress1white.png', 'images/dress2white.png', 'images/dress3white.png', 'images/dress4white.png', 'images/dress5white.png', 'images/dress1pink.png', 'images/dress2pink.png', 'images/dress3pink.png', 'images/dress4pink.png', 'images/dress5pink.png', 'images/dress1blue.png', 'images/dress2blue.png', 'images/dress3blue.png', 'images/dress4blue.png', 'images/dress5blue.png', 'images/dress1black.png', 'images/dress2black.png', 'images/dress3black.png', 'images/dress4black.png', 'images/dress5black.png'];
const shoeOptions = ['images/shoe1beige.png', 'images/shoe2beige.png', 'images/shoe3beige.png', 'images/shoe4beige.png', 'images/shoe5beige.png', 'images/shoe1black.png', 'images/shoe2black.png', 'images/shoe3black.png', 'images/shoe4black.png', 'images/shoe5black.png', 'images/shoe1white.png', 'images/shoe2white.png', 'images/shoe3white.png', 'images/shoe4white.png', 'images/shoe5white.png', 'images/shoe1brown.png', 'images/shoe2brown.png', 'images/shoe3brown.png', 'images/shoe4brown.png', 'images/shoe5brown.png'];


// Select Random Options
function getRandomOption(options, length) {
  const randomIndex = Math.floor(Math.random() * length);
  return options[randomIndex];
}

function generateRandomGirl() {
  changeSkin(getRandomOption(skinOptions, 6));
  changeEyeColor(getRandomOption(eyeOptions, 5));
  changeHair(getRandomOption(hairOptions, 20));
  changeDress(getRandomOption(dressOptions, 25));
  changeShoe(getRandomOption(shoeOptions, 20));
}
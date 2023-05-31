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
const skinOptions = ['images/pale.PNG', 'images/fair.PNG', 'images/light.PNG', 'images/medium.PNG', 'images/deep1.PNG', 'images/deep2.PNG'];
const eyeOptions = ['images/brown_eyes.PNG', 'images/amber_eyes.PNG', 'images/green_eyes.PNG', 'images/blue_eyes.PNG', 'images/gray_eyes.PNG'];
const hairOptions = ['hair1black.PNG', 'hair2black.PNG', 'hair3black.PNG', 'hair4black.PNG', 'hair5black.PNG', 'hair1brown.PNG', 'hair2brown.PNG', 'hair3brown.PNG', 'hair4brown.PNG', 'hair5brown.PNG', 'hair1ginger.PNG', 'hair2ginger.PNG', 'hair3ginger.PNG', 'hair4ginger.PNG', 'hair5ginger.PNG', 'hair1blonde.PNG', 'hair2blonde.PNG', 'hair3blonde.PNG', 'hair4blonde.PNG', 'hair5blonde.PNG'];
const dressOptions = ['dress1red.PNG', 'dress2red.PNG', 'dress3red.PNG', 'dress4red.PNG', 'dress5red.PNG', 'dress1white.PNG', 'dress2white.PNG', 'dress3white.PNG', 'dress4white.PNG', 'dress5white.PNG', 'dress1pink.PNG', 'dress2pink.PNG', 'dress3pink.PNG', 'dress4pink.PNG', 'dress5pink.PNG', 'dress1blue.PNG', 'dress2blue.PNG', 'dress3blue.PNG', 'dress4blue.PNG', 'dress5blue.PNG', 'dress1black.PNG', 'dress2black.PNG', 'dress3black.PNG', 'dress4black.PNG', 'dress5black.PNG'];
const shoeOptions = ['shoe1beige.PNG', 'shoe2beige.PNG', 'shoe3beige.PNG', 'shoe4beige.PNG', 'shoe5beige.PNG', 'shoe1black.PNG', 'shoe2black.PNG', 'shoe3black.PNG', 'shoe4black.PNG', 'shoe5black.PNG', 'shoe1white.PNG', 'shoe2white.PNG', 'shoe3white.PNG', 'shoe4white.PNG', 'shoe5white.PNG', 'shoe1brown.PNG', 'shoe2brown.PNG', 'shoe3brown.PNG', 'shoe4brown.PNG', 'shoe5brown.PNG'];

// Select Random Options
function getRandomOption(options, length) {
  const randomIndex = Math.floor(Math.random() * length);
  return options[randomIndex];
}

function generateRandomGirl() {
  changeSkin(getRandomOption(skinOptions, 6));
  changeEyeColor(getRandomOption(eyeOptions, 5));
  changeHair("images/" + getRandomOption(hairOptions, 20));
  changeDress("images/" + getRandomOption(dressOptions, 25));
  changeShoe("images/" + getRandomOption(shoeOptions, 20));
}
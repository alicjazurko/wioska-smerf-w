

const img = document.querySelector('nav section section');
const wioska = document.querySelector('nav section ul li:nth-child(1) a');
const rollercoaster = document.querySelector('nav section ul li:nth-child(2)');
const aqua = document.querySelector('nav section ul li:nth-child(3)');
const papa = document.querySelector('nav section ul li:nth-child(4)');
const muchomor = document.querySelector('nav section ul li:nth-child(5)');

wioska.addEventListener('mouseover', function() {
    img.style.backgroundImage = "url('images/wioska.jpg')";
})

rollercoaster.addEventListener('mouseover', function() {
    img.style.backgroundImage = "url('images/rollercoaster.jpg')";
})

aqua.addEventListener('mouseover', function() {
    img.style.backgroundImage = "url('images/aqua.jpg')";
})

papa.addEventListener('mouseover', function() {
    img.style.backgroundImage = "url('images/papa.jpg')";
})

muchomor.addEventListener('mouseover', function() {
    img.style.backgroundImage = "url('images/muchomor.jpg')";
})

const krainy = document.querySelector('nav ul li:nth-child(1)'); //element menu glównego - krainy
const sekcjaKrainy = document.querySelector('nav section'); //wyskakujące okienko z krainy
const obrazkiKrainy = document.querySelector('nav section section'); //obrazek po najechaniu na menu krainy sekcja
krainy.addEventListener('click', function() {
    sekcjaKrainy.classList.toggle("activeKrainySekcja");
    obrazkiKrainy.classList.toggle("activeKrainySekcja");
    
})




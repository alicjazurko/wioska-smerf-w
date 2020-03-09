const slideList = [{
    img: "images/1.jpg",
    text: "Witaj w Wiosce Smerfów"
}, 
{
    img: "images/2.jpg",
    text: "Czeka Cię tu mnóstwo zabawy"
}, 
{
    img: "images/3.jpg",
    text: "Poczujesz się jak w bajce"
},
{
    img: "images/4.jpg",
    text: "Nie zabraknie rollercoasterów u Gargamela"
},
{
    img: "images/5.jpg",
    text: "Na samą myśl o Klakierze przejdą Ci ciarki"
},
{
    img: "images/6.jpg",
    text: "Czekają Cię niesamowite spotkania ze Smerfami"
},
{
    img: "images/7.jpg",
    text: "Wyjedziesz stąd jako niebieski smerf"
}];

const image = document.querySelector('img.slider');
const h1 = document.querySelector('h1.slider');
const dots = [...document.querySelectorAll('.dots span')];


//Interfejs
const time = 4000;
let active = 0;

//Implementacje


const changeDots = () => {
    const activeDot = dots.findIndex(dot => dot.classList.contains('active'))
    dots[activeDot].classList.remove('active');
    dots[active].classList.add('active');

}

const changeSlide = () => {
    active++;
    if(active === slideList.length) {
        active = 0;
    }
    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;
    changeDots();
    
}


let indexInterval = setInterval(changeSlide, time);

const pressKey = (e) => {
    
    
    if(e.keyCode == 39 || e.keyCode == 37) {
        clearInterval(indexInterval);
        e.keyCode == 37 ? active-- : active++;
         if(active === slideList.length) {
            active = 0;
        }else if(active < 0) {
            active = slideList.length - 1;
        }
        image.src = slideList[active].img;
        h1.textContent = slideList[active].text;
        changeDots();

        indexInterval = setInterval(changeSlide, time);
}
}
setInterval(pressKey, time);
window.addEventListener('keydown', pressKey)
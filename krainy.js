document.addEventListener('scroll', function() {

    const windowHeight = window.innerHeight; 
    const scrollValue = window.scrollY;

    const krainyWioska = document.querySelector('.krainyWioska');
    const krainyWioskafromTop = krainyWioska.offsetTop;
    const krainyWioskaheight = krainyWioska.offsetHeight;

    const krainyGargamel = document.querySelector('.krainyGargamel');
    const krainyGargamelfromTop = krainyGargamel.offsetTop;
    const krainyGargamelheight = krainyGargamel.offsetHeight;

    const krainyAqua = document.querySelector('.krainyAqua');
    const krainyAquafromTop = krainyAqua.offsetTop;
    const krainyAquaheight = krainyAqua.offsetHeight;

    const krainyPapa = document.querySelector('.krainyPapa');
    const krainyPapafromTop = krainyPapa.offsetTop;
    const krainyPapaheight = krainyPapa.offsetHeight;

    const krainyMuchomor = document.querySelector('.krainyMuchomor');
    const krainyMuchomorfromTop = krainyMuchomor.offsetTop;
    const krainyMuchomorheight = krainyMuchomor.offsetHeight;

    // console.log(scrollValue + " " + krainyWioskafromTop + " " + krainyWioskaheight + " " + windowHeight + " " );
    if(scrollValue > (krainyWioskafromTop - krainyWioskaheight/2 + windowHeight)) {
        krainyWioska.classList.add('active');
    } 
    if(scrollValue > (krainyGargamelfromTop - krainyGargamelheight/2 + windowHeight)) {
        krainyGargamel.classList.add('active');
    } 
    if(scrollValue > (krainyAquafromTop - krainyAquaheight/2 + windowHeight)) {
        krainyAqua.classList.add('active');
    } 
    if(scrollValue > (krainyPapafromTop - krainyPapaheight/2 + windowHeight)) {
        krainyPapa.classList.add('active');
    } 
    if(scrollValue > (krainyMuchomorfromTop - krainyMuchomorheight/2 + windowHeight)) {
        krainyMuchomor.classList.add('active');
    } 

    if(scrollValue < 500) {
        krainyWioska.classList.remove('active');
        krainyGargamel.classList.remove('active');
        krainyAqua.classList.remove('active');
        krainyPapa.classList.remove('active');
        krainyMuchomor.classList.remove('active');
    }

})
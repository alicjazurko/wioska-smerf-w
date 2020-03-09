document.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const footer = document.querySelector('footer section.stopka');
    const footer1 = document.querySelector('footer');
    const footerFromTop = footer1.offsetTop;
    const footerHeight = footer.offsetHeight;


    // console.log(scrollPosition + " " + footerFromTop + " " + footerHeight)
    if (scrollPosition > footerFromTop - footerHeight) {
        footer.classList.add("footerActive");
    }
})
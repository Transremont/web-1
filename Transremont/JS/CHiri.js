let slideIndex = 0;
mostrarSlide(slideIndex);

// Cambia la imagen automáticamente cada 3 segundos
setInterval(function() {
    cambiarSlide(1);
}, 1000); // Cambia a 3000 milisegundos

function cambiarSlide(n) {
    mostrarSlide(slideIndex += n);
}

function mostrarSlide(n) {
    const slides = document.getElementsByClassName("slide");
    if (n >= slides.length) { slideIndex = 0; }
    if (n < 0) { slideIndex = slides.length - 1; }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
        slides[i].classList.remove("active");
    }
    
    slides[slideIndex].style.display = "block";  
    slides[slideIndex].classList.add("active");
}
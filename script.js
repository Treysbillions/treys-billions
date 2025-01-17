// Diaporama JavaScript
const slides = document.querySelectorAll('.diaporama-slide');
let currentIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${100 * (i - index)}%)`;
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

// Ajouter les événements aux boutons
document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);

// Afficher la première slide
showSlide(currentIndex);

// Réduire la taille des images du diaporama
document.querySelectorAll('.diaporama-slide img').forEach(img => {
    img.style.maxWidth = '70%'; // Redimensionne à 70% de la largeur du conteneur
    img.style.height = 'auto'; // Maintient les proportions
    img.style.margin = '0 auto'; // Centre l'image horizontalement
});

let currentIndex = 0; // L'index de l'image actuellement affichée
const slides = document.querySelectorAll('.diaporama-slide');
const totalSlides = slides.length;

function nextSlide() {
    // Passe à l'image suivante
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlidesPosition();
}

function prevSlide() {
    // Passe à l'image précédente
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlidesPosition();
}

function updateSlidesPosition() {
    const container = document.querySelector('.diaporama-container');
    if (container) {
        container.style.transform = `translateX(-${currentIndex * 100}%)`; // Déplace les images
    }
}

// Change les images toutes les 3 secondes
setInterval(nextSlide, 3000);

// Vérification pour s'assurer que les éléments existent avant d'ajouter les écouteurs d'événements
const nextButton = document.querySelector('.diaporama-next');
const prevButton = document.querySelector('.diaporama-prev');

if (nextButton) {
    nextButton.addEventListener('click', nextSlide);
}

if (prevButton) {
    prevButton.addEventListener('click', prevSlide);
}


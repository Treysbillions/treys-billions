let currentIndex = 0; // L'index de l'image actuellement affichée
const slides = document.querySelectorAll('.diaporama-slide');
const totalSlides = slides.length;
const slideWidth = 100 / 3; // Pour afficher 3 images à la fois

// Fonction pour passer à la diapositive suivante
function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlidesPosition();
}

// Fonction pour revenir à la diapositive précédente
function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlidesPosition();
}

// Fonction pour mettre à jour la position des diapositives en fonction de l'index actuel
function updateSlidesPosition() {
    const container = document.querySelector('.diaporama-container');
    container.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
}

// Change les images toutes les 3 secondes
setInterval(nextSlide, 3000);

// Écouteurs d'événements pour les flèches de navigation (si vous en avez)
document.querySelector('.diaporama-next').addEventListener('click', nextSlide);
document.querySelector('.diaporama-prev').addEventListener('click', prevSlide);

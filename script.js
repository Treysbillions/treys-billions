let currentIndex = 0; // L'index de l'image actuellement affichée
const slides = document.querySelectorAll('.diaporama-slide');
const totalSlides = slides.length;

// Fonction pour passer à la diapositive suivante
function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides; // Passe à l'image suivante
    updateSlidesPosition();
}

// Fonction pour revenir à la diapositive précédente
function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Passe à l'image précédente
    updateSlidesPosition();
}

// Fonction pour mettre à jour la position du conteneur
function updateSlidesPosition() {
    const container = document.querySelector('.diaporama-container');
    container.style.transform = `translateX(-${currentIndex * 100}%)`; // Déplace le conteneur horizontalement
}

// Change les images toutes les 3 secondes
setInterval(nextSlide, 3000);

// Écouteurs d'événements pour les flèches de navigation
document.querySelector('.diaporama-next').addEventListener('click', nextSlide);
document.querySelector('.diaporama-prev').addEventListener('click', prevSlide);
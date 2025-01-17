// Gestion du diaporama
let slideIndex = 0;

// Fonction pour changer le diaporama
function changeSlide(n) {
    const slides = document.querySelectorAll('.diaporama-slide');
    slideIndex += n;

    if (slideIndex < 0) {
        slideIndex = slides.length - 1; // Retour à la dernière image si avant la première
    } else if (slideIndex >= slides.length) {
        slideIndex = 0; // Retour à la première image si après la dernière
    }

    // Mise à jour de la position du diaporama
    document.querySelector('.diaporama-slides').style.transform = `translateX(-${slideIndex * 100}%)`;
}

// Fonction d'initialisation automatique du diaporama
function autoSlide() {
    const slides = document.querySelectorAll('.diaporama-slide');
    slideIndex = (slideIndex + 1) % slides.length;
    document.querySelector('.diaporama-slides').style.transform = `translateX(-${slideIndex * 100}%)`;
    setTimeout(autoSlide, 5000); // Change toutes les 5 secondes
}

// Ajouter des événements aux boutons de navigation
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.prev').addEventListener('click', function() {
        changeSlide(-1);
    });

    document.querySelector('.next').addEventListener('click', function() {
        changeSlide(1);
    });

    // Démarrer le diaporama automatique
    autoSlide();
});

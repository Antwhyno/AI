//Il gère l'interactivité, c'est-à-dire le fait de passer d'une diapo à l'autre via la molette 
// ou le clavier sans encombrer l'écran avec des boutons de navigation. 

const slider = document.getElementById('slider');
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
let isAnimating = false;

// Fonction pour changer de diapositive
function goToSlide(index) {
    // Empêche de dépasser la première ou la dernière diapositive
    if (index < 0 || index >= slides.length) return;
    
    currentSlide = index;
    // Déplace le grand conteneur sur l'axe Y
    slider.style.transform = `translateY(-${currentSlide * 100}vh)`;
    
    // Verrouille la navigation pendant l'animation pour éviter les bugs visuels
    isAnimating = true;
    setTimeout(() => {
        isAnimating = false;
    }, 800); // 800ms correspond à la durée de la transition dans le CSS
}

// Écouteur d'événement pour la molette de la souris
window.addEventListener('wheel', (e) => {
    if (isAnimating) return;
    
    if (e.deltaY > 0) {
        // Molette vers le bas
        goToSlide(currentSlide + 1);
    } else if (e.deltaY < 0) {
        // Molette vers le haut
        goToSlide(currentSlide - 1);
    }
});

// Écouteur d'événement pour le clavier
window.addEventListener('keydown', (e) => {
    if (isAnimating) return;
    
    if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        goToSlide(currentSlide + 1);
    } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        goToSlide(currentSlide - 1);
    }
});
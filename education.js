// Education cards animation
const educationCards = document.querySelectorAll('.education-card');

const animateEducation = () => {
    educationCards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < window.innerHeight - 100) {
            card.classList.add('fade-in');
        }
    });
};

window.addEventListener('scroll', animateEducation);
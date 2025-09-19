// Skills progress bars animation
const progressBars = document.querySelectorAll('.progress-bar');

const animateProgressBars = () => {
    progressBars.forEach(bar => {
        const value = bar.getAttribute('data-progress');
        bar.style.width = `${value}%`;
    });
};

// Trigger animation when section is in view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateProgressBars();
        }
    });
});

document.querySelectorAll('.skills-section').forEach(section => {
    observer.observe(section);
});
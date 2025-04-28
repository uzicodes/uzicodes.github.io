
// Typing Effect
const text = "I'm Utsho Heaven Chowdhury";
let index = 0;
function type() {
    document.getElementById('typing').textContent = text.slice(0, index++);
    if (index <= text.length) {
        setTimeout(type, 100);
    }
}
type();

// Scroll Reveal Animation
window.addEventListener('scroll', reveal);
function reveal() {
    const sections = document.querySelectorAll('section');
    for (let i = 0; i < sections.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = sections[i].getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            sections[i].classList.add('active');
        } else {
            sections[i].classList.remove('active');
        }
    }
}

// Animation on scroll
function animateOnScroll() {
  const elements = document.querySelectorAll('.fade-in-left, .fade-in-right, .fade-in-up');
  
  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const elementBottom = element.getBoundingClientRect().bottom;
    
    // Check if element is in viewport
    if (elementTop < window.innerHeight && elementBottom > 0) {
      element.classList.add('animate');
    }
  });
}

// Run animation on load and scroll
document.addEventListener('DOMContentLoaded', () => {
  animateOnScroll();
  window.addEventListener('scroll', animateOnScroll);
}); 
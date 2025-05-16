// Custom JavaScript for Petrafied.ink

document.addEventListener('DOMContentLoaded', function() {
  // Initialize lightbox
  lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true,
    'albumLabel': "Image %1 of %2",
    'fadeDuration': 300
  });
  
  // Add active class to current nav item
  const currentLocation = window.location.pathname;
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  
  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    if (linkPath === currentLocation || (currentLocation.includes(linkPath) && linkPath !== '/')) {
      link.classList.add('active');
    }
  });
  
  // Y2K animated elements
  const addRandomStars = () => {
    const mainContent = document.querySelector('.main-content');
    if (!mainContent) return;
    
    // Add some random star elements
    for (let i = 0; i < 5; i++) {
      const star = document.createElement('span');
      star.classList.add('y2k-star');
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.animationDelay = `${Math.random() * 5}s`;
      mainContent.appendChild(star);
    }
  };
  
  // Call function to add stars
  addRandomStars();
});

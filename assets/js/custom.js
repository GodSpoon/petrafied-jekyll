// Custom JS for Petrafied.ink

document.addEventListener('DOMContentLoaded', function() {
  // Initialize lightbox
  lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true,
    'fadeDuration': 300,
    'imageFadeDuration': 300,
    'albumLabel': "Tattoo %1 of %2"
  });
  
  // Add active class to current nav item
  const currentLocation = window.location.pathname;
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  
  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    if (currentLocation === linkPath || 
        (linkPath !== '/' && currentLocation.includes(linkPath))) {
      link.classList.add('active');
    }
  });
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 100,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Add hover effects to gallery items
  const galleryItems = document.querySelectorAll('.gallery-item');
  galleryItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.05)';
    });
    
    item.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
    });
  });
});

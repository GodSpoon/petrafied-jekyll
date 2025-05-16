// Custom JavaScript for the Petrafied.ink website

document.addEventListener('DOMContentLoaded', function() {
  // Initialize the Bootstrap carousel with a 5 second interval
  var carousel = new bootstrap.Carousel(document.getElementById('featuredWorkCarousel'), {
    interval: 5000,
    wrap: true
  });
  
  // Handle custom cursor behavior
  document.body.style.cursor = "url('/assets/labubu.cur'), auto";
  
  // Add hover effects to social buttons
  const socialButtons = document.querySelectorAll('.social-btn');
  socialButtons.forEach(button => {
    button.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.05)';
    });
    button.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
    });
  });
  
  // Add lightbox functionality for portfolio gallery
  const portfolioImages = document.querySelectorAll('.gallery-item a');
  portfolioImages.forEach(image => {
    image.addEventListener('click', function(e) {
      // Lightbox is initialized through the included lightbox library
      // This is just for any additional custom behavior
    });
  });
});

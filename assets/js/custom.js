// Initialize gallery and position side GIFs

// Position side GIFs and add animation
function positionSideGifs() {
  const sideGifsLeft = document.querySelectorAll('.side-gif-left');
  const sideGifsRight = document.querySelectorAll('.side-gif-right');
  
  // Position left side GIFs
  sideGifsLeft.forEach(gif => {
    const randomTop = 20 + Math.random() * 60; // Random position between 20% and 80% from top
    gif.style.top = randomTop + '%';
    
    // Add floating animation with random duration
    const animationDuration = 3 + Math.random() * 2; // Between 3 and 5 seconds
    gif.style.animation = `float ${animationDuration}s ease-in-out infinite`;
  });
  
  // Position right side GIFs
  sideGifsRight.forEach(gif => {
    const randomTop = 20 + Math.random() * 60; // Random position between 20% and 80% from top
    gif.style.top = randomTop + '%';
    
    // Add floating animation with random duration
    const animationDuration = 3 + Math.random() * 2; // Between 3 and 5 seconds
    gif.style.animation = `float ${animationDuration}s ease-in-out infinite`;
  });
}

// Initialize gallery as soon as possible
function initializeGallery() {
  const slides = document.querySelectorAll('.gallery-slider .slide');
  if (slides.length > 0) {
    // Make sure the first slide is active
    slides.forEach(slide => slide.classList.remove('active'));
    slides[0].classList.add('active');
  }
}

// Document ready function
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded - initializing site features');
  
  // Position side GIFs
  positionSideGifs();
  
  // Initialize gallery
  initializeGallery();
  
  // Make sure custom cursor is applied
  try {
    document.body.style.cursor = `url('${window.location.origin}/assets/default_cursor.cur'), auto`;
  } catch (e) {
    console.log('Custom cursor could not be applied:', e);
  }
});

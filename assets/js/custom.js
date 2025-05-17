// Core site functionality

// Global variables
let slideIndex = 0;
let slideInterval;

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

// Gallery slider functions
function showSlides() {
  const slides = document.querySelectorAll('.gallery-slider .slide');
  if (slides.length === 0) return;
  
  slides.forEach(slide => slide.classList.remove('active'));
  slides[slideIndex].classList.add('active');
}

function changeSlide(n) {
  const slides = document.querySelectorAll('.gallery-slider .slide');
  if (slides.length === 0) return;
  
  slideIndex += n;
  if (slideIndex >= slides.length) { slideIndex = 0; }
  if (slideIndex < 0) { slideIndex = slides.length - 1; }
  showSlides();
}

// Initialize gallery with auto-rotation
function initializeGallery() {
  const slides = document.querySelectorAll('.gallery-slider .slide');
  if (slides.length === 0) return;
  
  // Initialize first slide
  slideIndex = 0;
  showSlides();
  
  // Set up auto-rotation
  if (slideInterval) clearInterval(slideInterval);
  slideInterval = setInterval(function() { changeSlide(1); }, 5000);
  
  // Add click handlers for controls if they don't have them
  const prevButton = document.querySelector('.gallery-slider .prev');
  const nextButton = document.querySelector('.gallery-slider .next');
  
  if (prevButton && !prevButton.hasAttribute('data-initialized')) {
    prevButton.setAttribute('data-initialized', 'true');
    prevButton.addEventListener('click', function() { changeSlide(-1); });
  }
  
  if (nextButton && !nextButton.hasAttribute('data-initialized')) {
    nextButton.setAttribute('data-initialized', 'true');
    nextButton.addEventListener('click', function() { changeSlide(1); });
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

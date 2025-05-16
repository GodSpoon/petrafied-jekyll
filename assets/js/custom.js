// custom.js for Petrafied.ink

document.addEventListener('DOMContentLoaded', function() {
  // Set custom cursor
  setCursor();

  // Initialize lightbox
  initializeLightbox();

  // Add page transition effects
  addPageTransitions();

  // Random GIF placement
  randomizeGifs();
});

// Custom cursor implementation
function setCursor() {
  const cursorStyle = document.createElement('style');
  cursorStyle.innerHTML = `
  * {
    cursor: url('/assets/labubu.cur') 4 4, auto !important;
  }
  `;
  document.head.appendChild(cursorStyle);
}

// Function to initialize Lightbox for portfolio gallery
function initializeLightbox() {
  // If using lightbox library, add any custom options here
  if (typeof lightbox !== 'undefined') {
    lightbox.option({
      'resizeDuration': 300,
      'wrapAround': true,
      'fadeDuration': 300,
      'imageFadeDuration': 300,
      'albumLabel': "Image %1 of %2"
    });
  }
}

// Add page transition effects
function addPageTransitions() {
  // Add transition class to main elements
  const mainContent = document.querySelector('.main-content');
  if (mainContent) {
    mainContent.classList.add('page-transition');
  }

  // Handle link clicks for smooth transitions
  document.querySelectorAll('a').forEach(link => {
    // Skip external links and javascript links
    if (link.hostname === window.location.hostname &&
      !link.href.includes('javascript:') &&
      !link.target) {

      link.addEventListener('click', function(e) {
        e.preventDefault();

        const currentPage = window.location.href;
        const newPage = this.href;

        // Don't animate if clicking on the current page
        if (currentPage === newPage) return;

        // Fade out
        document.body.style.opacity = 0;

        // Navigate after short delay
        setTimeout(function() {
          window.location = newPage;
        }, 300);
      });
      }
  });

  // Ensure page fades in on load
  window.addEventListener('pageshow', function() {
    document.body.style.opacity = 1;
  });
}

// Random GIF placement
function randomizeGifs() {
  const sideGifs = document.querySelectorAll('.side-gif');

  sideGifs.forEach(gif => {
    // Randomize vertical position
    const topPos = 20 + Math.random() * 40; // Between 20% and 60%
    gif.style.top = `${topPos}%`;

    // Add random animation
    gif.style.animation = `float ${3 + Math.random() * 2}s ease-in-out infinite`;
  });

  // Add floating animation style
  const floatStyle = document.createElement('style');
  floatStyle.innerHTML = `
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
  }
  `;
  document.head.appendChild(floatStyle);
}

// Portfolio gallery features
function initializePortfolioFilters() {
  // If portfolio filter buttons exist, add functionality
  const filterButtons = document.querySelectorAll('.portfolio-filter-btn');
  if (filterButtons.length > 0) {
    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));

        // Add active class to clicked button
        this.classList.add('active');

        // Get filter value
        const filter = this.getAttribute('data-filter');

        // Filter gallery items
        const items = document.querySelectorAll('.gallery-item');
        items.forEach(item => {
          if (filter === 'all' || item.classList.contains(filter)) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }
}

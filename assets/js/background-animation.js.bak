// Background Animation Controller
document.addEventListener('DOMContentLoaded', function() {
  // Create a container for our animated background
  const bgContainer = document.createElement('div');
  bgContainer.id = 'animated-background';
  bgContainer.classList.add('animated-background');
  
  // Add the container to the body as the first child
  document.body.insertBefore(bgContainer, document.body.firstChild);
  
  // Load SVG animation
  const svgPath = document.querySelector('meta[name="base-url"]').content + '/assets/images/backgrounds/background-animation.svg';
  
  // Add the SVG as a background
  fetch(svgPath)
    .then(response => response.text())
    .then(svgContent => {
      // Insert the SVG content
      bgContainer.innerHTML = svgContent;
      
      // Adjust SVG for better performance
      const svg = bgContainer.querySelector('svg');
      if (svg) {
        // Make it responsive and improve performance
        svg.setAttribute('width', '100%');
        svg.setAttribute('height', '100%');
        
        // Set viewBox for proper scaling
        svg.setAttribute('viewBox', '0 0 200 200');
        svg.setAttribute('preserveAspectRatio', 'xMidYMid slice');
      }
    })
    .catch(error => {
      console.error('Error loading SVG animation:', error);
      // Fallback to static background if SVG fails to load
      bgContainer.style.backgroundImage = 'url("' + 
        document.querySelector('meta[name="base-url"]').content + 
        '/assets/images/backgrounds/cycles.gif")';
    });
});

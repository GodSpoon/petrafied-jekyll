// Font Switcher for Petrafied.ink

// Font options
const fonts = [
  { name: 'Roomach', class: 'font-roomach', preview: 'R', titleFont: true, bodyFont: false },
  { name: 'Builder Sans', class: 'font-builder-sans', preview: 'B', titleFont: true, bodyFont: true },
  { name: 'Open Sans', class: 'font-open-sans', preview: 'O', titleFont: true, bodyFont: true },
  { name: 'Fredoka', class: 'font-fredoka', preview: 'F', titleFont: true, bodyFont: true },
  { name: 'Stylish', class: 'font-stylish', preview: 'S', titleFont: true, bodyFont: false },
  { name: 'Pixelify Sans', class: 'font-pixelify', preview: 'P', titleFont: true, bodyFont: false },
  { name: 'Antina Bold', class: 'font-antina', preview: 'A', titleFont: true, bodyFont: false }
];

// Create the font switcher UI
function createFontSwitcher() {
  // Create the main container
  const fontSwitcher = document.createElement('div');
  fontSwitcher.className = 'font-switcher';
  
  // Add toggle button
  const toggleBtn = document.createElement('div');
  toggleBtn.className = 'font-switcher-toggle';
  toggleBtn.innerHTML = '<i class="fas fa-font"></i>';
  toggleBtn.title = 'Toggle Font Switcher';
  toggleBtn.addEventListener('click', toggleFontSwitcher);
  
  // Create the title
  const title = document.createElement('h4');
  title.textContent = 'Font Switcher';
  
  // Create the options container
  const fontOptions = document.createElement('div');
  fontOptions.className = 'font-options';
  
  // Add font options
  fonts.forEach(font => {
    const option = document.createElement('div');
    option.className = 'font-option';
    option.dataset.fontClass = font.class;
    
    // Create the preview element
    const preview = document.createElement('span');
    preview.className = 'font-preview';
    preview.style.fontFamily = font.name;
    preview.textContent = font.preview;
    
    // Create the label
    const label = document.createElement('span');
    label.textContent = font.name;
    
    // Add click handler
    option.addEventListener('click', () => setFont(font.class));
    
    // Build the option
    option.appendChild(preview);
    option.appendChild(label);
    fontOptions.appendChild(option);
  });
  
  // Build the font switcher
  fontSwitcher.appendChild(toggleBtn);
  fontSwitcher.appendChild(title);
  fontSwitcher.appendChild(fontOptions);
  
  // Add to the body
  document.body.appendChild(fontSwitcher);
  
  // Check for saved preference
  const savedFont = localStorage.getItem('petrafied-font');
  if (savedFont) {
    setFont(savedFont);
  }
}

// Toggle the font switcher visibility
function toggleFontSwitcher() {
  const fontSwitcher = document.querySelector('.font-switcher');
  fontSwitcher.classList.toggle('collapsed');
}

// Set the selected font
function setFont(fontClass) {
  // Remove existing font classes
  fonts.forEach(font => {
    document.body.classList.remove(font.class);
  });
  
  // Add the selected font class
  document.body.classList.add(fontClass);
  
  // Save preference
  localStorage.setItem('petrafied-font', fontClass);
  
  // Update active class
  const options = document.querySelectorAll('.font-option');
  options.forEach(option => {
    if (option.dataset.fontClass === fontClass) {
      option.classList.add('active');
    } else {
      option.classList.remove('active');
    }
  });
}

// Initialize the font switcher when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  createFontSwitcher();
});

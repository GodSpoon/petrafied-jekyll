// Font Switcher for Petrafied.ink

// Font options
const fonts = [
  { name: 'Roomach', class: 'font-roomach', preview: 'R', titleFont: true, bodyFont: false },
  { name: 'Builder Sans', class: 'font-builder-sans', preview: 'B', titleFont: true, bodyFont: true },
  { name: 'Open Sans', class: 'font-open-sans', preview: 'O', titleFont: true, bodyFont: true },
  { name: 'Fredoka', class: 'font-fredoka', preview: 'F', titleFont: true, bodyFont: true },
  { name: 'Stylish', class: 'font-stylish', preview: 'S', titleFont: true, bodyFont: false },
  { name: 'Pixelify Sans', class: 'font-pixelify', preview: 'P', titleFont: true, bodyFont: false },
  // Metal fonts
  { name: 'Antina Bold', class: 'font-antina-bold', preview: 'A', titleFont: true, bodyFont: false },
  { name: 'Antina Extra Bold', class: 'font-antina-extra-bold', preview: 'A', titleFont: true, bodyFont: false },
  { name: 'Antina Extra Light', class: 'font-antina-extra-light', preview: 'A', titleFont: true, bodyFont: false },
  { name: 'Antina Heavy', class: 'font-antina-heavy', preview: 'A', titleFont: true, bodyFont: false },
  { name: 'Antina Light', class: 'font-antina-light', preview: 'A', titleFont: true, bodyFont: false },
  { name: 'Antina Regular', class: 'font-antina-regular', preview: 'A', titleFont: true, bodyFont: false },
  { name: 'Antina Ultra', class: 'font-antina-ultra', preview: 'A', titleFont: true, bodyFont: false },
  { name: 'Berosong', class: 'font-berosong', preview: 'B', titleFont: true, bodyFont: false },
  { name: 'CCFlameOn Nova', class: 'font-ccflameon-nova', preview: 'C', titleFont: true, bodyFont: false },
  { name: 'CCFlameOn Plasma', class: 'font-ccflameon-plasma', preview: 'C', titleFont: true, bodyFont: false },
  { name: 'CCFlameOn Regular', class: 'font-ccflameon-regular', preview: 'C', titleFont: true, bodyFont: false },
  { name: 'CCMeltdown Open', class: 'font-ccmeltdown-open', preview: 'C', titleFont: true, bodyFont: false },
  { name: 'CCMeltdown Regular', class: 'font-ccmeltdown-regular', preview: 'C', titleFont: true, bodyFont: false },
  { name: 'CCPrimalScream Fill', class: 'font-ccprimalscream-fill', preview: 'C', titleFont: true, bodyFont: false },
  { name: 'CCPrimalScream Open', class: 'font-ccprimalscream-open', preview: 'C', titleFont: true, bodyFont: false },
  { name: 'CCPrimalScream Outline', class: 'font-ccprimalscream-outline', preview: 'C', titleFont: true, bodyFont: false },
  { name: 'CCPrimalScream Regular', class: 'font-ccprimalscream-regular', preview: 'C', titleFont: true, bodyFont: false },
  { name: 'Graveblade', class: 'font-graveblade', preview: 'G', titleFont: true, bodyFont: false },
  { name: 'Megasord', class: 'font-megasord', preview: 'M', titleFont: true, bodyFont: false },
  { name: 'MetalMania', class: 'font-metalmania', preview: 'M', titleFont: true, bodyFont: false },
  { name: 'Metalista Black', class: 'font-metalista-black', preview: 'M', titleFont: true, bodyFont: false },
  { name: 'Metalista Death', class: 'font-metalista-death', preview: 'M', titleFont: true, bodyFont: false },
  { name: 'Metalista Speed', class: 'font-metalista-speed', preview: 'M', titleFont: true, bodyFont: false },
  { name: 'Redeyes', class: 'font-redeyes', preview: 'R', titleFont: true, bodyFont: false },
  { name: 'Shogun Black', class: 'font-shogun-black', preview: 'S', titleFont: true, bodyFont: false },
  { name: 'Shogun BlackExtended', class: 'font-shogun-blackextended', preview: 'S', titleFont: true, bodyFont: false },
  { name: 'Shogun Bold', class: 'font-shogun-bold', preview: 'S', titleFont: true, bodyFont: false },
  { name: 'Shogun BoldExtended', class: 'font-shogun-boldextended', preview: 'S', titleFont: true, bodyFont: false },
  { name: 'Shogun Light', class: 'font-shogun-light', preview: 'S', titleFont: true, bodyFont: false },
  { name: 'Shogun LightExtended', class: 'font-shogun-lightextended', preview: 'S', titleFont: true, bodyFont: false },
  { name: 'Taurunum Ferrum Iron', class: 'font-taurunum-ferrum-iron', preview: 'T', titleFont: true, bodyFont: false },
  { name: 'Taurunum Ferrum Steel', class: 'font-taurunum-ferrum-steel', preview: 'T', titleFont: true, bodyFont: false },
  { name: 'TotallyGothic Regular', class: 'font-totallygothic-regular', preview: 'T', titleFont: true, bodyFont: false },
  { name: 'TotallyGothic WideCaps', class: 'font-totallygothic-widecaps', preview: 'T', titleFont: true, bodyFont: false },
  { name: 'True Gore', class: 'font-true-gore', preview: 'T', titleFont: true, bodyFont: false }
];

// Create the font switcher UI
function createFontSwitcher() {
  // Create the main container
  const fontSwitcher = document.createElement('div');
  fontSwitcher.className = 'font-switcher collapsed'; // Start collapsed by default
  
  // Add toggle button
  const toggleBtn = document.createElement('div');
  toggleBtn.className = 'font-switcher-toggle';
  toggleBtn.innerHTML = '<i class="fas fa-font"></i>';
  toggleBtn.title = 'Toggle Font Switcher';
  toggleBtn.addEventListener('click', toggleFontSwitcher);
  
  // Create the title
  const titleContainer = document.createElement('div');
  titleContainer.className = 'font-switcher-header';
  
  const title = document.createElement('h4');
  title.textContent = 'Font Switcher';
  
  // Add a count of total fonts
  const fontCount = document.createElement('span');
  fontCount.className = 'font-count';
  fontCount.textContent = `(${fonts.length} fonts)`;
  
  titleContainer.appendChild(title);
  titleContainer.appendChild(fontCount);
  
  // Create search input
  const searchContainer = document.createElement('div');
  searchContainer.className = 'font-search-container';
  
  const searchInput = document.createElement('input');
  searchInput.type = 'text';
  searchInput.className = 'font-search-input';
  searchInput.placeholder = 'Search fonts...';
  searchInput.addEventListener('input', filterFonts);
  
  const clearSearch = document.createElement('span');
  clearSearch.className = 'clear-search';
  clearSearch.innerHTML = '<i class="fas fa-times"></i>';
  clearSearch.style.display = 'none';
  clearSearch.addEventListener('click', () => {
    searchInput.value = '';
    clearSearch.style.display = 'none';
    filterFonts.call(searchInput);
  });
  
  searchInput.addEventListener('input', function() {
    clearSearch.style.display = this.value ? 'block' : 'none';
  });
  
  searchContainer.appendChild(searchInput);
  searchContainer.appendChild(clearSearch);
  
  // Create category buttons for quick filtering
  const categoryContainer = document.createElement('div');
  categoryContainer.className = 'font-category-container';
  
  const allBtn = document.createElement('button');
  allBtn.className = 'category-btn active';
  allBtn.textContent = 'All';
  allBtn.addEventListener('click', () => filterByCategory('all', allBtn));
  
  const basicBtn = document.createElement('button');
  basicBtn.className = 'category-btn';
  basicBtn.textContent = 'Basic';
  basicBtn.addEventListener('click', () => filterByCategory('basic', basicBtn));
  
  const metalBtn = document.createElement('button');
  metalBtn.className = 'category-btn';
  metalBtn.textContent = 'Metal';
  metalBtn.addEventListener('click', () => filterByCategory('metal', metalBtn));
  
  categoryContainer.appendChild(allBtn);
  categoryContainer.appendChild(basicBtn);
  categoryContainer.appendChild(metalBtn);
  
  // Add random font button
  const randomBtn = document.createElement('button');
  randomBtn.className = 'random-font-btn';
  randomBtn.innerHTML = '<i class="fas fa-random"></i> Random';
  randomBtn.title = 'Try a random font';
  randomBtn.addEventListener('click', selectRandomFont);
  
  // Create the options container
  const fontOptions = document.createElement('div');
  fontOptions.className = 'font-options';
  
  // Add font options
  fonts.forEach(font => {
    const option = document.createElement('div');
    option.className = 'font-option';
    option.dataset.fontClass = font.class;
    option.dataset.category = font.class.includes('font-antina') || 
                             font.class.includes('ccflameon') || 
                             font.class.includes('ccmeltdown') || 
                             font.class.includes('ccprimalscream') || 
                             font.class.includes('metalista') || 
                             font.class.includes('megasord') || 
                             font.class.includes('metalmania') || 
                             font.class.includes('graveblade') || 
                             font.class.includes('redeyes') || 
                             font.class.includes('shogun') || 
                             font.class.includes('taurunum') || 
                             font.class.includes('totallygothic') || 
                             font.class.includes('true-gore') ? 'metal' : 'basic';
    
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
  fontSwitcher.appendChild(titleContainer);
  fontSwitcher.appendChild(searchContainer);
  fontSwitcher.appendChild(categoryContainer);
  fontSwitcher.appendChild(randomBtn);
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

// Select a random font
function selectRandomFont() {
  const activeCategoryBtn = document.querySelector('.category-btn.active');
  const currentCategory = activeCategoryBtn ? activeCategoryBtn.textContent.toLowerCase() : 'all';
  
  let availableFonts = fonts;
  
  // Filter by category if needed
  if (currentCategory !== 'all') {
    availableFonts = fonts.filter(font => {
      const category = font.class.includes('font-antina') || 
                      font.class.includes('ccflameon') || 
                      font.class.includes('ccmeltdown') || 
                      font.class.includes('ccprimalscream') || 
                      font.class.includes('metalista') || 
                      font.class.includes('megasord') || 
                      font.class.includes('metalmania') || 
                      font.class.includes('graveblade') || 
                      font.class.includes('redeyes') || 
                      font.class.includes('shogun') || 
                      font.class.includes('taurunum') || 
                      font.class.includes('totallygothic') || 
                      font.class.includes('true-gore') ? 'metal' : 'basic';
      return category === currentCategory;
    });
  }
  
  // Select a random font from available options
  if (availableFonts.length > 0) {
    const randomIndex = Math.floor(Math.random() * availableFonts.length);
    const randomFont = availableFonts[randomIndex];
    
    // Apply the random font
    setFont(randomFont.class);
    
    // Flash animation on the chosen font
    const options = document.querySelectorAll('.font-option');
    options.forEach(option => {
      if (option.dataset.fontClass === randomFont.class) {
        option.classList.add('highlight');
        setTimeout(() => {
          option.classList.remove('highlight');
        }, 1500);
        
        // Scroll to the selected font
        option.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  }
}

// Filter fonts based on search input
function filterFonts() {
  const searchValue = this.value.toLowerCase();
  const options = document.querySelectorAll('.font-option');
  const activeCategoryBtn = document.querySelector('.category-btn.active');
  const currentCategory = activeCategoryBtn ? activeCategoryBtn.textContent.toLowerCase() : 'all';
  
  let visibleCount = 0;
  
  options.forEach(option => {
    const fontName = option.querySelector('span:last-child').textContent.toLowerCase();
    const category = option.dataset.category;
    
    // Check if the font matches both the search term and the selected category
    const matchesSearch = fontName.includes(searchValue);
    const matchesCategory = currentCategory === 'all' || category === currentCategory;
    
    if (matchesSearch && matchesCategory) {
      option.style.display = '';
      visibleCount++;
    } else {
      option.style.display = 'none';
    }
  });
  
  // Update the font count display
  const fontCount = document.querySelector('.font-count');
  if (fontCount) {
    fontCount.textContent = `(${visibleCount} of ${fonts.length} fonts)`;
  }
}

// Filter fonts by category
function filterByCategory(category, button) {
  // Update active button
  const categoryBtns = document.querySelectorAll('.category-btn');
  categoryBtns.forEach(btn => btn.classList.remove('active'));
  button.classList.add('active');
  
  const searchInput = document.querySelector('.font-search-input');
  const searchValue = searchInput ? searchInput.value.toLowerCase() : '';
  
  const options = document.querySelectorAll('.font-option');
  let visibleCount = 0;
  
  options.forEach(option => {
    const fontName = option.querySelector('span:last-child').textContent.toLowerCase();
    const fontCategory = option.dataset.category;
    
    // Check if the font matches both the search term and the selected category
    const matchesSearch = fontName.includes(searchValue);
    const matchesCategory = category === 'all' || fontCategory === category;
    
    if (matchesSearch && matchesCategory) {
      option.style.display = '';
      visibleCount++;
    } else {
      option.style.display = 'none';
    }
  });
  
  // Update the font count display
  const fontCount = document.querySelector('.font-count');
  if (fontCount) {
    fontCount.textContent = `(${visibleCount} of ${fonts.length} fonts)`;
  }
}

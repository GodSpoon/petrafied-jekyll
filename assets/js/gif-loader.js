// GIF loader helper
const gifCategories = {
  small: '/assets/images/gifs/small/',
  medium: '/assets/images/gifs/medium/',
  large: '/assets/images/gifs/large/',
  banner: '/assets/images/gifs/banner/',
  icon: '/assets/images/gifs/icon/',
  animated: '/assets/images/gifs/animated/'
};

function getGifPath(gifName, preferredCategory = null) {
  // If specific category is requested, try that first
  if (preferredCategory && gifCategories[preferredCategory]) {
    const path = `${gifCategories[preferredCategory]}${gifName}`;
    // Check if file exists at this path
    try {
      const img = new Image();
      img.src = path;
      if (img.complete) {
        return path;
      }
    } catch (e) {
      // Continue to fallback
    }
  }
  
  // Try categories in order from smallest to largest
  const fallbackOrder = ['icon', 'small', 'medium', 'large', 'banner', 'animated'];
  
  for (const category of fallbackOrder) {
    if (category === preferredCategory) continue; // Skip if we already tried this
    
    const path = `${gifCategories[category]}${gifName}`;
    try {
      const img = new Image();
      img.src = path;
      if (img.complete) {
        return path;
      }
    } catch (e) {
      // Continue to next category
    }
  }
  
  // If no categorized version is found, fall back to the original location
  return `/assets/images/gifs/${gifName}`;
}

// Add to global scope
window.getGifPath = getGifPath;

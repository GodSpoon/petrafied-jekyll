/**
 * SVG Background Animation Controller
 * This script loads SVG frame animations in a more efficient way
 * by preloading a subset of frames and cycling through them
 */
document.addEventListener('DOMContentLoaded', function() {
  // Initialize intervals array
  window.intervals = [];
  
  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  // Create the background container if it doesn't exist
  let bgContainer = document.getElementById('animated-background');
  if (!bgContainer) {
    bgContainer = document.createElement('div');
    bgContainer.id = 'animated-background';
    bgContainer.classList.add('animated-background');
    document.body.insertBefore(bgContainer, document.body.firstChild);
  }
  
  // Get the base URL for assets
  let baseUrl = document.querySelector('meta[name="base-url"]')?.content || '';
  
  // Ensure baseUrl doesn't end with a slash when we need to append one
  if (baseUrl && baseUrl.endsWith('/')) {
    baseUrl = baseUrl.slice(0, -1);
  }
  
  // Add logging for debugging
  console.log('SVG Background starting with base URL:', baseUrl || 'empty (using relative paths)');
  
  // SVG frame animation settings
  const settings = {
    totalFrames: 336,           // Total number of frames available (0-335)
    framesToPreload: 24,        // Number of frames to preload (keep low for performance)
    frameStep: 14,              // Use every Nth frame to reduce load but maintain smoothness
    animationSpeed: prefersReducedMotion ? 500 : 180, // Slower for reduced motion preference
    // Ensure the path is constructed correctly regardless of baseUrl
    framesPath: baseUrl ? `${baseUrl}/assets/images/backgrounds/bg-frames-svg/` : '/assets/images/backgrounds/bg-frames-svg/',
    pattern: 'frame-{num}.svg', // Pattern for frame filenames
    opacity: 0.25,              // Opacity of the animation (slightly increased)
    size: '400px',              // Size of each SVG pattern tile (increased for better visibility)
    crossFade: !prefersReducedMotion // Disable crossfade for reduced motion preference
  };
  
  // Create SVG container
  const svgContainer = document.createElement('div');
  svgContainer.style.position = 'fixed';
  svgContainer.style.top = '0';
  svgContainer.style.left = '0';
  svgContainer.style.width = '100%';
  svgContainer.style.height = '100%';
  svgContainer.style.opacity = settings.opacity.toString();
  svgContainer.style.pointerEvents = 'none';
  svgContainer.style.zIndex = '-1';
  svgContainer.style.backgroundAttachment = 'fixed'; // Keeps background fixed during scroll
  svgContainer.style.transition = 'background-image 0.1s ease-in-out'; // Smooth transition between frames
  
  // Add to the background container
  bgContainer.appendChild(svgContainer);
  
  // Create a second container for crossfade effect if enabled
  let secondContainer = null;
  if (settings.crossFade) {
    secondContainer = document.createElement('div');
    secondContainer.style.position = 'fixed';
    secondContainer.style.top = '0';
    secondContainer.style.left = '0';
    secondContainer.style.width = '100%';
    secondContainer.style.height = '100%';
    secondContainer.style.opacity = '0'; // Start invisible
    secondContainer.style.pointerEvents = 'none';
    secondContainer.style.zIndex = '-1';
    secondContainer.style.backgroundAttachment = 'fixed';
    secondContainer.style.transition = 'opacity 0.15s ease-in-out';
    bgContainer.appendChild(secondContainer);
  }
  
  // Preload selected frames to improve performance
  const preloadedFrames = [];
  let loadedCount = 0;
  let currentFrameIndex = 0;
  let isPaused = false;
  let loadingTimeoutId = null;
  
  // Set a timeout for frame loading
  loadingTimeoutId = setTimeout(() => {
    if (loadedCount === 0) {
      console.warn('No frames loaded after timeout, using fallback');
      useFallbackAnimation();
    }
  }, 5000); // 5 second timeout
  
  // Handle tab visibility changes to save resources
  document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
      // Pause animation when tab not visible
      pauseAnimation();
    } else if (isPaused) {
      // Resume animation when tab becomes visible
      resumeAnimation();
    }
  });
  
  // Pause animation
  function pauseAnimation() {
    if (!isPaused && window.intervals) {
      window.intervals.forEach(interval => clearInterval(interval));
      isPaused = true;
    }
  }
  
  // Resume animation
  function resumeAnimation() {
    if (isPaused) {
      startAnimation();
      isPaused = false;
    }
  }
  
  // Adjust frame step based on device performance
  // Use a larger step on mobile devices or slower connections
  if (window.innerWidth < 768 || (navigator.connection && navigator.connection.effectiveType === '3g')) {
    settings.frameStep = Math.max(settings.frameStep, 28); // Larger step (fewer frames) for mobile
    settings.framesToPreload = Math.min(settings.framesToPreload, 12); // Fewer frames for mobile
  }
  
  // Only load a subset of frames with a step to reduce load
  for (let i = 0; i < settings.totalFrames; i += settings.frameStep) {
    if (preloadedFrames.length >= settings.framesToPreload) break;
    
    const frameNum = i.toString().padStart(3, '0');
    const framePath = `${settings.framesPath}${settings.pattern.replace('{num}', frameNum)}`;
    
    console.log('Attempting to load frame:', framePath);
    
    // Create image element to preload
    const img = new Image();
    img.onload = function() {
      loadedCount++;
      console.log(`Frame loaded (${loadedCount}/${preloadedFrames.length}):`, framePath);
      
      // Mark this frame as successfully loaded
      const frameIndex = preloadedFrames.findIndex(frame => frame.path === framePath);
      if (frameIndex !== -1) {
        preloadedFrames[frameIndex].loaded = true;
      }
      
      if (loadedCount === 1) {
        // Start with first loaded frame immediately
        createBackgroundPattern(framePath, svgContainer);
      }
      
      if (loadedCount === preloadedFrames.length) {
        // All frames loaded, start animation
        startAnimation();
      }
    };
    img.onerror = function() {
      console.error(`Failed to load frame: ${framePath}`);
      // Log the full URL for debugging
      console.error('Full attempted URL:', window.location.origin + framePath);
      
      // Still count as loaded to not block animation
      loadedCount++;
      // Mark this frame as failed to load
      const frameIndex = preloadedFrames.findIndex(frame => frame.path === framePath);
      if (frameIndex !== -1) {
        preloadedFrames[frameIndex].loaded = false;
      }
      
      if (loadedCount === preloadedFrames.length) {
        // Check if we have at least some frames loaded
        const loadedFrames = preloadedFrames.filter(frame => frame.loaded);
        console.log('Frames loaded:', loadedFrames.length, 'of', preloadedFrames.length);
        
        // Clear the loading timeout since we've completed loading
        if (loadingTimeoutId) {
          clearTimeout(loadingTimeoutId);
          loadingTimeoutId = null;
        }
        
        if (loadedFrames.length > 0) {
          startAnimation();
        } else {
          // No frames loaded successfully, use fallback
          useFallbackAnimation();
        }
      }
    };
    img.src = framePath;
    
    preloadedFrames.push({
      path: framePath,
      img: img,
      loaded: false // Will be set to true when loaded
    });
  }
  
  // Create the background pattern
  function createBackgroundPattern(framePath, container) {
    container.style.backgroundImage = `url(${framePath})`;
    container.style.backgroundSize = settings.size;
    container.style.backgroundRepeat = 'repeat';
    container.style.backgroundPosition = 'center center';
  }
  
  // Get screen-based background size
  function getBackgroundSizeForScreen() {
    // Adjust pattern size based on screen width
    if (window.innerWidth < 768) {
      return '300px'; // Smaller tiles on mobile
    } else if (window.innerWidth > 1600) {
      return '500px'; // Larger tiles on big screens
    }
    return settings.size; // Default size
  }
  
  // Apply responsive sizing on window resize
  function applyResponsiveSizing() {
    const newSize = getBackgroundSizeForScreen();
    svgContainer.style.backgroundSize = newSize;
    if (secondContainer) {
      secondContainer.style.backgroundSize = newSize;
    }
  }
  
  // Listen for window resize events
  window.addEventListener('resize', applyResponsiveSizing);
  
  // Animate through the frames
  function startAnimation() {
    // Get only the successfully loaded frames
    const loadedFrames = preloadedFrames.filter(frame => frame.loaded);
    
    if (loadedFrames.length === 0) {
      useFallbackAnimation();
      return;
    }
    
    // Clear any existing intervals
    if (window.intervals) {
      window.intervals.forEach(interval => clearInterval(interval));
    }
    window.intervals = [];
    
    // Apply initial responsive sizing
    applyResponsiveSizing();
    
    // Set initial frame
    createBackgroundPattern(loadedFrames[0].path, svgContainer);
    if (secondContainer) {
      createBackgroundPattern(loadedFrames[0].path, secondContainer);
    }
    currentFrameIndex = 0;
    
    // Cycle through frames
    if (settings.crossFade && secondContainer) {
      // Crossfade animation
      let activeFront = false; // false = svgContainer, true = secondContainer
      
      const intervalId = setInterval(() => {
        // Update frame index
        currentFrameIndex = (currentFrameIndex + 1) % loadedFrames.length;
        
        // Set new frame to the background container
        if (activeFront) {
          createBackgroundPattern(loadedFrames[currentFrameIndex].path, svgContainer);
          // Fade out front, showing back
          secondContainer.style.opacity = '0';
          svgContainer.style.opacity = settings.opacity.toString();
        } else {
          createBackgroundPattern(loadedFrames[currentFrameIndex].path, secondContainer);
          // Fade out back, showing front
          svgContainer.style.opacity = '0';
          secondContainer.style.opacity = settings.opacity.toString();
        }
        
        // Toggle active container
        activeFront = !activeFront;
      }, settings.animationSpeed);
      
      window.intervals.push(intervalId);
    } else {
      // Standard animation without crossfade
      const intervalId = setInterval(() => {
        currentFrameIndex = (currentFrameIndex + 1) % loadedFrames.length;
        createBackgroundPattern(loadedFrames[currentFrameIndex].path, svgContainer);
      }, settings.animationSpeed);
      
      window.intervals.push(intervalId);
    }
  }
  
  // Fallback animation using GIF
  function useFallbackAnimation() {
    console.warn('Using fallback animation - SVG frames failed to load');
    
    // Remove second container if it exists
    if (secondContainer) {
      bgContainer.removeChild(secondContainer);
      secondContainer = null;
    }
    
    // Determine fallback image path with more reliable URL construction
    let fallbackPath;
    
    if (baseUrl) {
      fallbackPath = `${baseUrl}/assets/images/backgrounds/cycles.gif`;
    } else {
      fallbackPath = '/assets/images/backgrounds/cycles.gif';
    }
    
    console.log('Using fallback GIF at:', fallbackPath);
    
    // Test if the fallback image exists
    const testImage = new Image();
    testImage.onload = function() {
      console.log('Fallback image loaded successfully');
    };
    testImage.onerror = function() {
      console.error('Fallback image failed to load, trying root-relative URL');
      fallbackPath = '/assets/images/backgrounds/cycles.gif';
      console.log('New fallback path:', fallbackPath);
    };
    testImage.src = fallbackPath;
    
    // Set fallback GIF as background
    svgContainer.style.backgroundImage = `url(${fallbackPath})`;
    svgContainer.style.backgroundSize = getBackgroundSizeForScreen();
    svgContainer.style.backgroundRepeat = 'repeat';
    svgContainer.style.backgroundPosition = 'center center';
    svgContainer.style.backgroundAttachment = 'fixed';
    svgContainer.style.opacity = settings.opacity.toString();
    
    // Ensure responsive sizing still works with fallback
    window.addEventListener('resize', () => {
      svgContainer.style.backgroundSize = getBackgroundSizeForScreen();
    });
  }
  
  // Add debug function (can be accessed via console)
  window.svgBackgroundStats = () => {
    return {
      totalFrames: settings.totalFrames,
      framesToPreload: settings.framesToPreload,
      loadedFrames: preloadedFrames.filter(frame => frame.loaded).length,
      failedFrames: preloadedFrames.filter(frame => !frame.loaded).length,
      animationActive: loadedCount > 0 && window.intervals && window.intervals.length > 0,
      usingFallback: loadedCount === 0 || preloadedFrames.filter(frame => frame.loaded).length === 0,
      frameStep: settings.frameStep,
      animationSpeed: settings.animationSpeed,
      crossFade: settings.crossFade,
      reducedMotion: prefersReducedMotion,
      baseUrl: baseUrl,
      framesPath: settings.framesPath,
      timeoutActive: loadingTimeoutId !== null
    };
  };
  
  // Function to adjust animation speed
  window.adjustAnimationSpeed = (factor) => {
    // Get any running animation intervals
    const intervals = window.intervals || [];
    
    // Clear existing intervals
    intervals.forEach(interval => clearInterval(interval));
    
    // Adjust speed
    settings.animationSpeed = Math.max(50, Math.min(1000, Math.round(settings.animationSpeed * factor)));
    
    // Restart animation with new speed
    startAnimation();
    
    return settings.animationSpeed;
  };
});

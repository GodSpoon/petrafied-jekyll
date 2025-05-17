---
layout: page
title: SVG Animation Test
---

<div class="container">
  <h1>SVG Background Animation Test</h1>
  <p>This page is a test suite for the new SVG frame animation background. It allows you to see the animation frames, test the fallback, and control various settings.</p>
  
  <div class="card mt-4">
    <div class="card-header bg-dark text-light">
      <h2 class="mb-0">Animation Controls</h2>
    </div>
    <div class="card-body">
      <div class="row">
        <div class="col-md-6">
          <div class="mb-3">
            <button id="check-status" class="btn btn-primary">Check Status</button>
            <button id="toggle-animation" class="btn btn-secondary">Pause/Resume</button>
          </div>
          <div class="mb-3">
            <button id="test-fallback" class="btn btn-warning">Test Fallback</button>
            <button id="faster" class="btn btn-info">Speed Up</button>
            <button id="slower" class="btn btn-info">Slow Down</button>
          </div>
          <div class="status-panel mt-3 p-3 bg-dark text-light" id="status-panel" style="font-family: monospace; white-space: pre-wrap; border-radius: 4px;">
            Animation status will appear here...
          </div>
        </div>
        <div class="col-md-6 text-center">
          <h3>Current Frame</h3>
          <div id="frame-preview" style="width: 200px; height: 200px; margin: 0 auto; border: 1px solid #9882d9; background-size: cover;"></div>
        </div>
      </div>
    </div>
  </div>
  
  <div class="card mt-4">
    <div class="card-header bg-dark text-light">
      <h2 class="mb-0">Technical Details</h2>
    </div>
    <div class="card-body">
      <p>This background animation uses individual SVG frames from the <code>assets/images/backgrounds/bg-frames-svg/</code> folder.</p>
      <p>Features include:</p>
      <ul>
        <li>Frame-based animation with optimized loading</li>
        <li>Responsive sizing based on screen width</li>
        <li>Optional crossfade between frames</li>
        <li>Performance optimizations for mobile</li>
        <li>Reduced animation for users with reduced motion preference</li>
        <li>Automatic pausing when tab is not visible</li>
      </ul>
    </div>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    // Simple controls for testing
    document.getElementById('check-status').addEventListener('click', function() {
      const stats = window.svgBackgroundStats ? window.svgBackgroundStats() : 'Stats not available';
      document.getElementById('status-panel').textContent = JSON.stringify(stats, null, 2);
      
      // Update preview if we have loaded frames
      if (window.svgBackgroundStats && window.svgBackgroundStats().loadedFrames > 0) {
        updateFramePreview();
      }
    });
    
    document.getElementById('toggle-animation').addEventListener('click', function() {
      const bgContainer = document.querySelector('.animated-background');
      if (bgContainer) {
        if (bgContainer.style.display === 'none') {
          bgContainer.style.display = '';
          this.textContent = 'Pause Animation';
        } else {
          bgContainer.style.display = 'none';
          this.textContent = 'Resume Animation';
        }
      }
    });
    
    document.getElementById('test-fallback').addEventListener('click', function() {
      const bgContainer = document.querySelector('.animated-background');
      if (bgContainer) {
        const div = bgContainer.querySelector('div');
        if (div) {
          div.style.backgroundImage = 'url({{ site.baseurl }}/assets/images/backgrounds/cycles.gif)';
          div.style.backgroundSize = '400px';
          div.style.backgroundRepeat = 'repeat';
          document.getElementById('status-panel').textContent = 'Fallback animation activated';
        }
      }
    });
    
    // Speed control
    document.getElementById('faster').addEventListener('click', function() {
      if (window.adjustAnimationSpeed) {
        window.adjustAnimationSpeed(0.75); // 25% faster
        updateStatus();
      }
    });
    
    document.getElementById('slower').addEventListener('click', function() {
      if (window.adjustAnimationSpeed) {
        window.adjustAnimationSpeed(1.25); // 25% slower
        updateStatus();
      }
    });
    
    // Display current frame in preview
    function updateFramePreview() {
      const bgContainer = document.querySelector('.animated-background');
      if (bgContainer && bgContainer.querySelector('div')) {
        const bgImage = window.getComputedStyle(bgContainer.querySelector('div')).backgroundImage;
        document.getElementById('frame-preview').style.backgroundImage = bgImage;
      }
    }
    
    function updateStatus() {
      const stats = window.svgBackgroundStats ? window.svgBackgroundStats() : 'Stats not available';
      document.getElementById('status-panel').textContent = JSON.stringify(stats, null, 2);
    }
    
    // Update frame preview periodically
    setInterval(updateFramePreview, 200);
  });
</script>

---
layout: page
title: About Me
subtitle: Get to know Petra
---

<div class="about-container">
  <div class="about-image">
    <img src="{{ site.baseurl }}/assets/images/profile/PrimaryProfile.jpg" alt="Petra" class="img-fluid rounded">
  </div>
  <div class="about-text">
    <h2>Petra (they/them)</h2>
    <p>Tattoo artist at <a href="https://www.instagram.com/thepaintedladyfw/" target="_blank">The Painted Lady</a> in Fort Wayne, Indiana.</p>
    <p>With 4 years of experience, I specialize in Illustrative, Cybercygilism, and Neo-Traditional tattoo styles.</p>
    <p><em>"Spiritually old, mentally unwell"</em></p>
    
    <h3>Interests</h3>
    <ul>
      <li>Sea life knowledge</li>
      <li>Gay Vampires</li>
      <li>Antiques</li>
      <li>Baldurs Gate 3</li>
      <li>Anti-government</li>
    </ul>
    
    <div class="mt-4">
      <img src="{{ site.baseurl }}/assets/images/gifs/heartfelt.gif" alt="Heart" class="img-fluid" style="max-width: 100px;">
    </div>
  </div>
</div>

<div class="row mt-5">
  <div class="col">
    <h2>More About Me</h2>
    <div class="row">
      {% for i in (1..7) %}
        <div class="col-md-4 mb-4">
          <img src="{{ site.baseurl }}/assets/images/profile/about_me_{{ i }}.jpg" alt="About Petra" class="img-fluid rounded">
        </div>
      {% endfor %}
    </div>
  </div>
</div>

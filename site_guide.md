# Petrafied.ink Website Requirements

## Table of Contents
- [General Requirements](#general-requirements)
- [Theme and Design](#theme-and-design)
- [Color Palette](#color-palette)
- [Assets Structure](#assets-structure)
- [Functionality](#functionality)
- [Artist Information](#artist-information)
- [Important Links](#important-links)
- [Technical Specifications](#technical-specifications)
- [Reference Materials](#reference-materials)
- [Filetree Structure](#filetree-structure)
- [Build Commands](#build-commands)

## General Requirements
- Create a tattoo artist website for Petra (they/them) at petrafied.ink
- Implement using Jekyll static site generator
- Host on GitHub Pages
- Blend professional functionality with fun/funny elements
- Create responsive design working on both desktop and mobile devices

## Theme and Design
- Use beautiful-jekyll theme as the foundation
- Customize theme with the defined color palette
- Maintain "edgy emo, modern & clean neocities" aesthetic
- Include subtle Y2K elements (animated GIFs, starry backgrounds)
- Add CSS-generated/animated texture background behind content
- Use images from the assets/images directory for favicon and gallery
- Implement jekyll-fa-icons for primary iconography

## Color Palette

<!-- Coolors Palette Widget -->
<script src="https://coolors.co/palette-widget/widget.js"></script>
<script data-id="07953001025888269">new CoolorsPaletteWidget("07953001025888269", ["9882d9","2a2d34","fefcfd"]); </script>

```css
/* CSS HEX */
--tropical-indigo: #9882d9ff;
--gunmetal: #2a2d34ff;
--white: #fefcfdff;

/* CSS HSL */
--tropical-indigo: hsla(255, 53%, 68%, 1);
--gunmetal: hsla(222, 11%, 18%, 1);
--white: hsla(330, 50%, 99%, 1);

/* SCSS HEX */
$tropical-indigo: #9882d9ff;
$gunmetal: #2a2d34ff;
$white: #fefcfdff;

/* SCSS HSL */
$tropical-indigo: hsla(255, 53%, 68%, 1);
$gunmetal: hsla(222, 11%, 18%, 1);
$white: hsla(330, 50%, 99%, 1);

/* SCSS RGB */
$tropical-indigo: rgba(152, 130, 217, 1);
$gunmetal: rgba(42, 45, 52, 1);
$white: rgba(254, 252, 253, 1);

/* SCSS Gradient */
$gradient-top: linear-gradient(0deg, #9882d9ff, #2a2d34ff, #fefcfdff);
$gradient-right: linear-gradient(90deg, #9882d9ff, #2a2d34ff, #fefcfdff);
$gradient-bottom: linear-gradient(180deg, #9882d9ff, #2a2d34ff, #fefcfdff);
$gradient-left: linear-gradient(270deg, #9882d9ff, #2a2d34ff, #fefcfdff);
$gradient-top-right: linear-gradient(45deg, #9882d9ff, #2a2d34ff, #fefcfdff);
$gradient-bottom-right: linear-gradient(135deg, #9882d9ff, #2a2d34ff, #fefcfdff);
$gradient-top-left: linear-gradient(225deg, #9882d9ff, #2a2d34ff, #fefcfdff);
$gradient-bottom-left: linear-gradient(315deg, #9882d9ff, #2a2d34ff, #fefcfdff);
$gradient-radial: radial-gradient(#9882d9ff, #2a2d34ff, #fefcfdff);
```

## Assets Structure

```
assets                         # Central directory for static resources used across the project
├── default_cursor.cur         # Default custom cursor used for general site interaction
├── favicon.ico                # Favicon displayed in browser tabs for brand/site identity
├── fonts                      # Custom and third-party fonts used for typography styling
│   ├── BuilderSans-Light-300.otf        # Light weight of BuilderSans, for subtle text
│   ├── BuilderSans-Medium-500.otf       # Medium weight of BuilderSans, for balanced body text
│   ├── BuilderSans-SemiBold-600.otf     # Semi-bold weight of BuilderSans, for emphasized headings
│   ├── Fredoka-Bold.ttf                 # Bold Fredoka font, likely used for playful headers
│   ├── Fredoka-SemiBold.ttf            # Semi-bold Fredoka, used where bold is too heavy
│   ├── MetalMania-Regular.ttf          # Stylized display font, likely for decorative titles
│   ├── open-sans-600.ttf               # Open Sans bold (600), for general emphasis
│   ├── open-sans-700.ttf               # Open Sans extra bold (700), for strong emphasis
│   ├── open-sans-800.ttf               # Open Sans heavy (800), for titles or standout text
│   ├── open-sans-v34-...regular.ttf    # Full character set of Open Sans, supports multiple languages
│   └── Stylish-Regular.ttf            # Decorative or headline font for special styling
├── images                     # All static image resources grouped by purpose
│   ├── backgrounds            # Background images used in layouts or sections
│   ├── brand_icons            # Logos and iconography related to other companies
│   ├── favicon.ico           # Duplicate or alternate favicon for compatibility
│   ├── gifs                   # Animated gifs for quirky oldschool internet elements and UI feedback
│   ├── heart_favicon.png     # Alternate heart-themed favicon
│   ├── heart_favicon_transparent.png  # Transparent version of heart favicon for theme support
│   ├── memes                  # Humorous or informal images used for community engagement
│   ├── petrafiedlogo.jpg     # Main logo image for "Petrafied" branding
│   ├── portfolio              # Images for portfolio display or case studies
│   └── profile                # profile pictures and about me pictures of Petra
├── labubu.cur                # Alternate custom cursor (possibly themed or seasonal)
├── tree                      # Placeholder or directory for site structure or JSON config
└── videos
    └── reels                 # Short-form video clips or highlight reels used for content display
```

## Functionality
- Implement custom cursor using the cursor files in assets
- Ensure layout responsiveness across various screen dimensions
- Include profile section with artist information and gallery
- Provide all important links (appointment scheduling, social media)
- Integrate portfolio gallery with images from assets/images/portfolio
- Use custom fonts for various text elements from assets/fonts directory

## Artist Information
- **Name**: Petra (they/them pronouns)
- **Identity**: Non-binary
- **Location**: Fort Wayne, Indiana
- **Shop**: The Painted Lady (Instagram: @thepaintedladyfw)
- **Experience**: 4 years
- **Style**: Illustrative, Cybercygilism and Neo-Traditional
- **Bio Quote**: "Spiritually old, mentally unwell"
- **Interests**: Sea life knowledge, Gay Vampires, Antiques, Baldurs Gate 3, Anti-government

## Important Links
- **Schedule Appointment**: https://tally.so/r/3yYpJ0
- **Email**: petrafied@thepaintedladyfw.com
- **Shop Location**: https://maps.app.goo.gl/APDiCzUPpAnmppW98
- **Venmo**: https://account.venmo.com/u/sikorskip
- **Social Media**:
  - TikTok: https://www.tiktok.com/@shmegl
  - Instagram: https://www.instagram.com/shmegl/
  - Facebook: https://www.facebook.com/shmeagl
- **"Important Website"**: https://cat-bounce.com/

## Technical Specifications
- Use Jekyll static site generator
- Build on beautiful-jekyll theme
- Install and configure jekyll-fa-icons plugin for icons
- Organize assets according to the provided structure
- Follow Jekyll file naming conventions
- Use Liquid templates for dynamic content
- Leverage Jekyll's YAML front matter for page configuration
- Implement custom CSS to override theme defaults for color palette

## Reference Materials
- Current live site HTML in `.dev/` folder
- Example Y2K-style site for inspiration in `.dev/` folder
- Template site in `.dev/reference - retro_reactblog/`

## Filetree Structure

The `filetree.json` file represents your directory structure as a nested JSON object:

- Each **directory** is represented as an object `{}` with its contents as nested key-value pairs
- Each **file** is represented as a value of `1` to save tokens
- The structure follows your filesystem hierarchy exactly, with each level nested inside its parent

Example:
```json
{
  "src": {
    "main.py": 1,
    "utils": {
      "helpers.py": 1
    }
  },
  "docs": {
    "README.md": 1
  }
}
```

## Build Commands
```bash
# Install dependencies
bundle install

# Serve site locally with live reload
bundle exec jekyll serve --livereload

# Build site for production
bundle exec jekyll build

# Serve site without live reload
bundle exec jekyll serve
```

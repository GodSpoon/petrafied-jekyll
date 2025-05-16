├── .gitignore
├── 404.html
├── Gemfile
├── LICENSE.md
├── README.md
├── _config.yml
├── _includes
    ├── footer.html
    ├── google_analytics.html
    ├── head.html
    ├── header.html
    ├── logo.html
    ├── nav.html
    ├── section.html
    └── social_icons.html
├── _layouts
    ├── blog.html
    ├── default.html
    ├── home.html
    ├── page.html
    └── post.html
├── _posts
    ├── 2012-09-12-first-post.md
    ├── 2013-09-12-second-post.md
    ├── 2014-09-12-third-post.md
    ├── 2015-09-12-fourth-post.md
    └── 2018-01-12-elements.html
├── _sass
    ├── jekyll-theme-prologue.scss
    └── libs
    │   ├── _functions.scss
    │   ├── _mixins.scss
    │   ├── _skel.scss
    │   └── _vars.scss
├── _sections
    ├── about-me.html
    ├── contact.html
    ├── intro.html
    ├── portfolio.html
    └── welcome-to-jekyll.md
├── assets
    ├── css
    │   ├── ie8.css
    │   ├── ie9.css
    │   ├── images
    │   │   ├── ie
    │   │   │   └── grad0-15.svg
    │   │   └── overlay.png
    │   └── main.scss
    ├── images
    │   ├── avatar.jpg
    │   ├── banner.jpg
    │   ├── pic02.jpg
    │   ├── pic03.jpg
    │   ├── pic04.jpg
    │   ├── pic05.jpg
    │   ├── pic06.jpg
    │   ├── pic07.jpg
    │   ├── pic08.jpg
    │   └── screenshot.png
    └── js
    │   ├── ie
    │       ├── PIE.htc
    │       ├── backgroundsize.min.htc
    │       ├── html5shiv.js
    │       └── respond.min.js
    │   ├── jquery.scrolly.min.js
    │   ├── jquery.scrollzer.min.js
    │   ├── main.js
    │   ├── skel.min.js
    │   └── util.js
├── blog.html
├── index.md
├── jekyll-theme-prologue.gemspec
└── reading-list.md


/.gitignore:
--------------------------------------------------------------------------------
1 | /_site
2 | *.gem
3 | .sass-cache
4 | Gemfile.lock


--------------------------------------------------------------------------------
/404.html:
--------------------------------------------------------------------------------
 1 | ---
 2 | title: 404 Error
 3 | layout: page
 4 | icon: fa-unlink
 5 | permalink: /404
 6 | hide: true
 7 | robots: noindex, nofollow
 8 | canonical: false
 9 | ---
10 | <p>The requested page could not be found.</p>


--------------------------------------------------------------------------------
/Gemfile:
--------------------------------------------------------------------------------
1 | source "https://rubygems.org"
2 | gemspec


--------------------------------------------------------------------------------
/LICENSE.md:
--------------------------------------------------------------------------------
 1 | Creative Commons Attribution 3.0 Unported
 2 | http://creativecommons.org/licenses/by/3.0/
 3 | 
 4 | License
 5 | 
 6 | THE WORK (AS DEFINED BELOW) IS PROVIDED UNDER THE TERMS OF THIS CREATIVE COMMONS PUBLIC LICENSE ("CCPL" OR "LICENSE"). THE WORK IS PROTECTED BY COPYRIGHT AND/OR OTHER APPLICABLE LAW. ANY USE OF THE WORK OTHER THAN AS AUTHORIZED UNDER THIS LICENSE OR COPYRIGHT LAW IS PROHIBITED.
 7 | 
 8 | BY EXERCISING ANY RIGHTS TO THE WORK PROVIDED HERE, YOU ACCEPT AND AGREE TO BE BOUND BY THE TERMS OF THIS LICENSE. TO THE EXTENT THIS LICENSE MAY BE CONSIDERED TO BE A CONTRACT, THE LICENSOR GRANTS YOU THE RIGHTS CONTAINED HERE IN CONSIDERATION OF YOUR ACCEPTANCE OF SUCH TERMS AND CONDITIONS.
 9 | 
10 | 1. Definitions
11 | 
12 |    1. "Adaptation" means a work based upon the Work, or upon the Work and other pre-existing works, such as a translation, adaptation, derivative work, arrangement of music or other alterations of a literary or artistic work, or phonogram or performance and includes cinematographic adaptations or any other form in which the Work may be recast, transformed, or adapted including in any form recognizably derived from the original, except that a work that constitutes a Collection will not be considered an Adaptation for the purpose of this License. For the avoidance of doubt, where the Work is a musical work, performance or phonogram, the synchronization of the Work in timed-relation with a moving image ("synching") will be considered an Adaptation for the purpose of this License.
13 |    2. "Collection" means a collection of literary or artistic works, such as encyclopedias and anthologies, or performances, phonograms or broadcasts, or other works or subject matter other than works listed in Section 1(f) below, which, by reason of the selection and arrangement of their contents, constitute intellectual creations, in which the Work is included in its entirety in unmodified form along with one or more other contributions, each constituting separate and independent works in themselves, which together are assembled into a collective whole. A work that constitutes a Collection will not be considered an Adaptation (as defined above) for the purposes of this License.
14 |    3. "Distribute" means to make available to the public the original and copies of the Work or Adaptation, as appropriate, through sale or other transfer of ownership.
15 |    4. "Licensor" means the individual, individuals, entity or entities that offer(s) the Work under the terms of this License.
16 |    5. "Original Author" means, in the case of a literary or artistic work, the individual, individuals, entity or entities who created the Work or if no individual or entity can be identified, the publisher; and in addition (i) in the case of a performance the actors, singers, musicians, dancers, and other persons who act, sing, deliver, declaim, play in, interpret or otherwise perform literary or artistic works or expressions of folklore; (ii) in the case of a phonogram the producer being the person or legal entity who first fixes the sounds of a performance or other sounds; and, (iii) in the case of broadcasts, the organization that transmits the broadcast.
17 |    6. "Work" means the literary and/or artistic work offered under the terms of this License including without limitation any production in the literary, scientific and artistic domain, whatever may be the mode or form of its expression including digital form, such as a book, pamphlet and other writing; a lecture, address, sermon or other work of the same nature; a dramatic or dramatico-musical work; a choreographic work or entertainment in dumb show; a musical composition with or without words; a cinematographic work to which are assimilated works expressed by a process analogous to cinematography; a work of drawing, painting, architecture, sculpture, engraving or lithography; a photographic work to which are assimilated works expressed by a process analogous to photography; a work of applied art; an illustration, map, plan, sketch or three-dimensional work relative to geography, topography, architecture or science; a performance; a broadcast; a phonogram; a compilation of data to the extent it is protected as a copyrightable work; or a work performed by a variety or circus performer to the extent it is not otherwise considered a literary or artistic work.
18 |    7. "You" means an individual or entity exercising rights under this License who has not previously violated the terms of this License with respect to the Work, or who has received express permission from the Licensor to exercise rights under this License despite a previous violation.
19 |    8. "Publicly Perform" means to perform public recitations of the Work and to communicate to the public those public recitations, by any means or process, including by wire or wireless means or public digital performances; to make available to the public Works in such a way that members of the public may access these Works from a place and at a place individually chosen by them; to perform the Work to the public by any means or process and the communication to the public of the performances of the Work, including by public digital performance; to broadcast and rebroadcast the Work by any means including signs, sounds or images.
20 |    9. "Reproduce" means to make copies of the Work by any means including without limitation by sound or visual recordings and the right of fixation and reproducing fixations of the Work, including storage of a protected performance or phonogram in digital form or other electronic medium.
21 | 
22 | 2. Fair Dealing Rights. Nothing in this License is intended to reduce, limit, or restrict any uses free from copyright or rights arising from limitations or exceptions that are provided for in connection with the copyright protection under copyright law or other applicable laws.
23 | 
24 | 3. License Grant. Subject to the terms and conditions of this License, Licensor hereby grants You a worldwide, royalty-free, non-exclusive, perpetual (for the duration of the applicable copyright) license to exercise the rights in the Work as stated below:
25 | 
26 |    1. to Reproduce the Work, to incorporate the Work into one or more Collections, and to Reproduce the Work as incorporated in the Collections;
27 |    2. to create and Reproduce Adaptations provided that any such Adaptation, including any translation in any medium, takes reasonable steps to clearly label, demarcate or otherwise identify that changes were made to the original Work. For example, a translation could be marked "The original work was translated from English to Spanish," or a modification could indicate "The original work has been modified.";
28 |    3. to Distribute and Publicly Perform the Work including as incorporated in Collections; and,
29 |    4. to Distribute and Publicly Perform Adaptations.
30 |    5.
31 | 
32 |       For the avoidance of doubt:
33 |          1. Non-waivable Compulsory License Schemes. In those jurisdictions in which the right to collect royalties through any statutory or compulsory licensing scheme cannot be waived, the Licensor reserves the exclusive right to collect such royalties for any exercise by You of the rights granted under this License;
34 |          2. Waivable Compulsory License Schemes. In those jurisdictions in which the right to collect royalties through any statutory or compulsory licensing scheme can be waived, the Licensor waives the exclusive right to collect such royalties for any exercise by You of the rights granted under this License; and,
35 |          3. Voluntary License Schemes. The Licensor waives the right to collect royalties, whether individually or, in the event that the Licensor is a member of a collecting society that administers voluntary licensing schemes, via that society, from any exercise by You of the rights granted under this License.
36 | 
37 | The above rights may be exercised in all media and formats whether now known or hereafter devised. The above rights include the right to make such modifications as are technically necessary to exercise the rights in other media and formats. Subject to Section 8(f), all rights not expressly granted by Licensor are hereby reserved.
38 | 
39 | 4. Restrictions. The license granted in Section 3 above is expressly made subject to and limited by the following restrictions:
40 | 
41 |    1. You may Distribute or Publicly Perform the Work only under the terms of this License. You must include a copy of, or the Uniform Resource Identifier (URI) for, this License with every copy of the Work You Distribute or Publicly Perform. You may not offer or impose any terms on the Work that restrict the terms of this License or the ability of the recipient of the Work to exercise the rights granted to that recipient under the terms of the License. You may not sublicense the Work. You must keep intact all notices that refer to this License and to the disclaimer of warranties with every copy of the Work You Distribute or Publicly Perform. When You Distribute or Publicly Perform the Work, You may not impose any effective technological measures on the Work that restrict the ability of a recipient of the Work from You to exercise the rights granted to that recipient under the terms of the License. This Section 4(a) applies to the Work as incorporated in a Collection, but this does not require the Collection apart from the Work itself to be made subject to the terms of this License. If You create a Collection, upon notice from any Licensor You must, to the extent practicable, remove from the Collection any credit as required by Section 4(b), as requested. If You create an Adaptation, upon notice from any Licensor You must, to the extent practicable, remove from the Adaptation any credit as required by Section 4(b), as requested.
42 |    2. If You Distribute, or Publicly Perform the Work or any Adaptations or Collections, You must, unless a request has been made pursuant to Section 4(a), keep intact all copyright notices for the Work and provide, reasonable to the medium or means You are utilizing: (i) the name of the Original Author (or pseudonym, if applicable) if supplied, and/or if the Original Author and/or Licensor designate another party or parties (e.g., a sponsor institute, publishing entity, journal) for attribution ("Attribution Parties") in Licensor's copyright notice, terms of service or by other reasonable means, the name of such party or parties; (ii) the title of the Work if supplied; (iii) to the extent reasonably practicable, the URI, if any, that Licensor specifies to be associated with the Work, unless such URI does not refer to the copyright notice or licensing information for the Work; and (iv) , consistent with Section 3(b), in the case of an Adaptation, a credit identifying the use of the Work in the Adaptation (e.g., "French translation of the Work by Original Author," or "Screenplay based on original Work by Original Author"). The credit required by this Section 4 (b) may be implemented in any reasonable manner; provided, however, that in the case of a Adaptation or Collection, at a minimum such credit will appear, if a credit for all contributing authors of the Adaptation or Collection appears, then as part of these credits and in a manner at least as prominent as the credits for the other contributing authors. For the avoidance of doubt, You may only use the credit required by this Section for the purpose of attribution in the manner set out above and, by exercising Your rights under this License, You may not implicitly or explicitly assert or imply any connection with, sponsorship or endorsement by the Original Author, Licensor and/or Attribution Parties, as appropriate, of You or Your use of the Work, without the separate, express prior written permission of the Original Author, Licensor and/or Attribution Parties.
43 |    3. Except as otherwise agreed in writing by the Licensor or as may be otherwise permitted by applicable law, if You Reproduce, Distribute or Publicly Perform the Work either by itself or as part of any Adaptations or Collections, You must not distort, mutilate, modify or take other derogatory action in relation to the Work which would be prejudicial to the Original Author's honor or reputation. Licensor agrees that in those jurisdictions (e.g. Japan), in which any exercise of the right granted in Section 3(b) of this License (the right to make Adaptations) would be deemed to be a distortion, mutilation, modification or other derogatory action prejudicial to the Original Author's honor and reputation, the Licensor will waive or not assert, as appropriate, this Section, to the fullest extent permitted by the applicable national law, to enable You to reasonably exercise Your right under Section 3(b) of this License (right to make Adaptations) but not otherwise.
44 | 
45 | 5. Representations, Warranties and Disclaimer
46 | 
47 | UNLESS OTHERWISE MUTUALLY AGREED TO BY THE PARTIES IN WRITING, LICENSOR OFFERS THE WORK AS-IS AND MAKES NO REPRESENTATIONS OR WARRANTIES OF ANY KIND CONCERNING THE WORK, EXPRESS, IMPLIED, STATUTORY OR OTHERWISE, INCLUDING, WITHOUT LIMITATION, WARRANTIES OF TITLE, MERCHANTIBILITY, FITNESS FOR A PARTICULAR PURPOSE, NONINFRINGEMENT, OR THE ABSENCE OF LATENT OR OTHER DEFECTS, ACCURACY, OR THE PRESENCE OF ABSENCE OF ERRORS, WHETHER OR NOT DISCOVERABLE. SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF IMPLIED WARRANTIES, SO SUCH EXCLUSION MAY NOT APPLY TO YOU.
48 | 
49 | 6. Limitation on Liability. EXCEPT TO THE EXTENT REQUIRED BY APPLICABLE LAW, IN NO EVENT WILL LICENSOR BE LIABLE TO YOU ON ANY LEGAL THEORY FOR ANY SPECIAL, INCIDENTAL, CONSEQUENTIAL, PUNITIVE OR EXEMPLARY DAMAGES ARISING OUT OF THIS LICENSE OR THE USE OF THE WORK, EVEN IF LICENSOR HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
50 | 
51 | 7. Termination
52 | 
53 |    1. This License and the rights granted hereunder will terminate automatically upon any breach by You of the terms of this License. Individuals or entities who have received Adaptations or Collections from You under this License, however, will not have their licenses terminated provided such individuals or entities remain in full compliance with those licenses. Sections 1, 2, 5, 6, 7, and 8 will survive any termination of this License.
54 |    2. Subject to the above terms and conditions, the license granted here is perpetual (for the duration of the applicable copyright in the Work). Notwithstanding the above, Licensor reserves the right to release the Work under different license terms or to stop distributing the Work at any time; provided, however that any such election will not serve to withdraw this License (or any other license that has been, or is required to be, granted under the terms of this License), and this License will continue in full force and effect unless terminated as stated above.
55 | 
56 | 8. Miscellaneous
57 | 
58 |    1. Each time You Distribute or Publicly Perform the Work or a Collection, the Licensor offers to the recipient a license to the Work on the same terms and conditions as the license granted to You under this License.
59 |    2. Each time You Distribute or Publicly Perform an Adaptation, Licensor offers to the recipient a license to the original Work on the same terms and conditions as the license granted to You under this License.
60 |    3. If any provision of this License is invalid or unenforceable under applicable law, it shall not affect the validity or enforceability of the remainder of the terms of this License, and without further action by the parties to this agreement, such provision shall be reformed to the minimum extent necessary to make such provision valid and enforceable.
61 |    4. No term or provision of this License shall be deemed waived and no breach consented to unless such waiver or consent shall be in writing and signed by the party to be charged with such waiver or consent.
62 |    5. This License constitutes the entire agreement between the parties with respect to the Work licensed here. There are no understandings, agreements or representations with respect to the Work not specified here. Licensor shall not be bound by any additional provisions that may appear in any communication from You. This License may not be modified without the mutual written agreement of the Licensor and You.
63 |    6. The rights granted under, and the subject matter referenced, in this License were drafted utilizing the terminology of the Berne Convention for the Protection of Literary and Artistic Works (as amended on September 28, 1979), the Rome Convention of 1961, the WIPO Copyright Treaty of 1996, the WIPO Performances and Phonograms Treaty of 1996 and the Universal Copyright Convention (as revised on July 24, 1971). These rights and subject matter take effect in the relevant jurisdiction in which the License terms are sought to be enforced according to the corresponding provisions of the implementation of those treaty provisions in the applicable national law. If the standard suite of rights granted under applicable copyright law includes additional rights not granted under this License, such additional rights are deemed to be included in the License; this License is not intended to restrict the license of any rights under applicable law.
64 | 


--------------------------------------------------------------------------------
/README.md:
--------------------------------------------------------------------------------
  1 | # ⚠️ Unmaintained ⚠️
  2 | 
  3 | # Prologue - Jekyll Theme
  4 | 
  5 | [![Gem Version](https://badge.fury.io/rb/jekyll-theme-prologue.svg)](https://badge.fury.io/rb/jekyll-theme-prologue)
  6 | 
  7 | ![Prologue Theme](assets/images/screenshot.png "Prologue Theme Screenshot")
  8 | 
  9 | This is Prologue, a simple, single page responsive site template from [HTML5 UP](https://html5up.net/prologue), now available as a blog-aware Jekyll theme from [Chris Bobbe](https://chrisbobbe.github.io). It features a clean, minimalistic design and a sticky sidebar with navigation-linked scrolling.
 10 | 
 11 | **Demo**: https://chrisbobbe.github.io/jekyll-theme-prologue/
 12 | 
 13 | # Added Features
 14 | 
 15 | * **Blogging and multi-page features you expect from Jekyll**
 16 | * Compatible with GitHub Pages
 17 | * **[Formspree.io](https://formspree.io/) contact form integration** - just add your email to the `_config.yml` and it works!
 18 | * Build your homepage with **custom scrolly sections** in the _sections folder
 19 |  * Set a **cover photo** for any section (not just the first), with alt text for screen readers and SEO
 20 | * Add your **social profiles** easily in `_config.yml`.
 21 | * Automatic search engine optimization (SEO) **meta tags** based on info you provide in `_config.yml` and frontmatter
 22 | * **Google Analytics** built-in; just put your [Tracking ID](https://support.google.com/analytics/answer/1008080?hl=en) in `_config.yml` as `google_analytics`
 23 | * Custom **404 page** (called 404.html; to activate, move it to your project directory).
 24 | 
 25 | # Installation
 26 | 
 27 | There are two ways to get started (choose one):
 28 | 
 29 | 1. **Install the [jekyll-theme-prologue gem](https://rubygems.org/gems/jekyll-theme-prologue).** Instructions are in the [Jekyll docs](https://jekyllrb.com/docs/themes/#installing-a-theme). After running `bundle install`, you can find the theme files by running `open $(bundle show jekyll-theme-prologue)`.  A sample working `_config.yml` file ships with the gem; if you want to activate it, move it to your project's root directory. It will do nothing until you move it there, replacing the default `_config.yml` file.
 30 | 2. **Fork or clone the [GitHub repository](https://github.com/chrisbobbe/jekyll-theme-prologue).** If you want to use [GitHub Pages](https://pages.github.com/), create a branch named `gh-pages`, and replace `theme: jekyll-theme-prologue` with `remote_theme: chrisbobbe/jekyll-theme-prologue` in the provided `_config.yml` ([GitHub Pages now supports open-source themes on GitHub](https://github.com/blog/2464-use-any-theme-with-github-pages)).
 31 | 
 32 | Next, make sure that `url` and `base_url` are set for your own website in `_config.yml`. For local testing, make them both blank. Add a photo avatar to your project, then set `avatar: path/to/your/avatar.jpg` in _config.yml; for example, `avatar: assets/images/avatar.jpg` (48x48 pixels works best). Poke around the sample `_config.yml` file to see how you can add your social profiles.
 33 | 
 34 | # Build your homepage
 35 | 
 36 | 1. **Your `_config.yml` file must include the following line or your homepage won't work**: `collections: [sections]`. This tells Jekyll to look in the _sections folder (which you will create) for your content and render it all on one page.
 37 | 
 38 | 2. **Create a `_sections` folder** in your project's root directory and start adding content to your homepage. Set a cover photo in any of the sections by adding `cover-photo: path/to/photo.jpg` and `cover-photo-alt: your alt text here` to the section's frontmatter. Sample content is provided in the [GitHub repository](https://github.com/chrisbobbe/jekyll-theme-prologue/tree/master/_sections).
 39 | 
 40 | All new sections should be added as html or Markdown documents in the `_sections` folder. The following section variables can be set with [frontmatter](https://jekyllrb.com/docs/frontmatter/):
 41 | - `title` (required)
 42 | - `order` (required; orders the sequence of sections on the page. Example: `1`)
 43 | - `cover-photo` (optional; sets a background image for the section. Example: `assets/images/banner.jpg`)
 44 | - `cover-photo-alt` (required if using a cover photo. Describes the photo for screen readers and SEO; e.g. "Dome of Light art installation, Kaohsiung, Taiwan")
 45 | - `icon` (optional; see [Font Awesome](https://fontawesome.com/icons) for icon codes. Example: `fa-github`)
 46 | - `icon-style` (optional; "solid" is default, "regular" for outline style icons, or "brands" for logos)
 47 | - `auto-header` (optional; "use-title" is default, "none" for no header, or custom header text)
 48 | - `hide` (optional; if `true`, the section won't appear)
 49 | 
 50 | # Start blogging!
 51 | 
 52 | Jekyll has great resources to get you started writing blog posts. Check out [this Jekyll Docs page](https://jekyllrb.com/docs/posts/) first. When you've written a post or two, copy the following into a new file in your project directory called `blog.html`, and you'll see a link to your blog from the homepage:
 53 | 
 54 | ```
 55 | ---
 56 | layout: blog
 57 | title: My Blog
 58 | ---
 59 | ```
 60 | 
 61 | -- and that's it!
 62 | 
 63 | # Add a page
 64 | 
 65 | To add a page, just make a new .html or .md file in your project directory. There's an example called `reading-list` [provided](https://github.com/chrisbobbe/jekyll-theme-prologue/blob/master/reading-list.md) with the GitHub repository. Add this frontmatter:
 66 | 
 67 | ```
 68 | ---
 69 | title: My New Page
 70 | layout: page
 71 | ---
 72 | ```
 73 | 
 74 | You can also set these page variables in the frontmatter, if you want:
 75 | - `subtitle`
 76 | - `order` (orders links in the nav menu, e.g. `1`)
 77 | - `icon` (optional; see [Font Awesome](https://fontawesome.com/icons) for icon codes. Example: `fa-github`)
 78 | - `icon-style` (optional; "solid" is default, "regular" for outline style icons, or "brands" for logos)
 79 | - `hide` (optional; if `true`, a link won't appear in the nav menu. All this does is remove the nav link; your page will still be served to anyone who has the URL.)
 80 | 
 81 | **This same set of frontmatter variables (including `title`) can also be set in `index.md` and `blog.html`.** You may want to give them titles, or hide the homepage link with `hide: true` if the homepage is the only page.
 82 | 
 83 | For advanced SEO, this theme also lets you add `permalink` (see [Jekyll Docs](https://jekyllrb.com/docs/permalinks/#where-to-configure-permalinks)), `robots` (string, e.g. "noindex, nofollow"), and `canonical` (boolean; true is default) to any page or post.
 84 | 
 85 | # Contributing
 86 | 
 87 | Please feel free to submit issues and feature requests!
 88 | 
 89 | # Credits
 90 | 
 91 | Thanks to @andrewbanchich for his many Jekyll adaptations of HTML5 UP's elegant themes, which helped and inspired me, and of course many thanks to HTML5 UP.
 92 | 
 93 | Original README from HTML5 UP:
 94 | 
 95 | ```
 96 | Prologue by HTML5 UP
 97 | html5up.net | @ajlkn
 98 | Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
 99 | 
100 | 
101 | This is Prologue, a simple, single page responsive site template. It features a
102 | clean, minimalistic design and a sticky sidebar with navigation-linked scrolling.
103 | 
104 | Demo content images* are courtesy of the ridiculously talented Felicia Simion. Check out
105 | more of her amazing work over at deviantART:
106 | 
107 | http://ineedchemicalx.deviantart.com/
108 | 
109 | (* = Not included! Only meant for use with my own on-site demo, so please do NOT download
110 | and/or use any of Felicia's work without her explicit permission!)
111 | 
112 | Demo banner images* courtesy of Unsplash, a radtastic collection of CC0 (public domain)
113 | images you can use for pretty much whatever.
114 | 
115 | (* = Not included)
116 | 
117 | AJ
118 | aj@lkn.io | @ajlkn
119 | 
120 | PS: Not sure how to get that contact form working? Give formspree.io a try (it's awesome).
121 | 
122 | 
123 | Credits:
124 | 
125 | 	Demo Images:
126 | 		Felicia Simion (ineedchemicalx.deviantart.com)
127 | 		Unsplash (unsplash.com)
128 | 
129 | 	Icons:
130 | 		Font Awesome (fortawesome.github.com/Font-Awesome)
131 | 
132 | 	Other
133 | 		jQuery (jquery.com)
134 | 		html5shiv.js (@afarkas @jdalton @jon_neal @rem)
135 | 		CSS3 Pie (css3pie.com)
136 | 		background-size polyfill (github.com/louisremi)
137 | 		Respond.js (j.mp/respondjs)
138 | 		jquery.scrolly (@ajlkn)
139 | 		jquery.scrollzer (@ajlkn)
140 | 		Skel (skel.io)
141 | ```
142 | 


--------------------------------------------------------------------------------
/_config.yml:
--------------------------------------------------------------------------------
 1 | # Developer's Note: This is a sample _config.yml file offered with
 2 | # jekyll-theme-prologue for your convenience. To use it, move it to your
 3 | # project's root directory. Please note that the following lines are
 4 | # NECESSARY for Prologue to work correctly:
 5 | #
 6 | # theme: jekyll-theme-prologue
 7 | # collections: [sections]
 8 | #
 9 | # They activate the theme and tell Jekyll to find your homepage content
10 | # in /_sections. Note where "sections" starts with an underscore
11 | # and where it doesn't. The social settings will make links to
12 | # Twitter, etc., but only if you give the URL.
13 | #
14 | # Also, be sure to customize url and baseurl for your site.
15 | #
16 | # ---------------------------------------------------------------
17 | #
18 | # Welcome to Jekyll!
19 | #
20 | # This config file is meant for settings that affect your whole blog, values
21 | # which you are expected to set up once and rarely edit after that. If you find
22 | # yourself editing this file very often, consider using Jekyll's data files
23 | # feature for the data you need to update frequently.
24 | #
25 | # For technical reasons, this file is *NOT* reloaded automatically when you use
26 | # 'bundle exec jekyll serve'. If you change this file, please restart the server process.
27 | 
28 | # Site settings
29 | # These are used to personalize your new site. If you look in the HTML files,
30 | # you will see them accessed via {{ site.title }}, {{ site.email }}, and so on.
31 | # You can create any custom variable you would like, and they will be accessible
32 | # in the templates via {{ site.myvariable }}.
33 | title: Your awesome title
34 | subtitle: Your awesome subtitle
35 | description: >- # this means to ignore newlines until "baseurl:"
36 |   This is the demo site for a Jekyll theme version of
37 |   HTML5 UP's sleek, responsive site template Prologue.
38 | author: Your Incredible Name
39 | email: your-email@example.com
40 | avatar: assets/images/avatar.jpg
41 | 
42 | # You'll want to customize url and baseurl for your own site:
43 | baseurl: "/jekyll-theme-prologue" # the subpath of your site, e.g. /blog
44 | url: "" # the base hostname & protocol for your site
45 | 
46 | # Social settings
47 | # Make sure to include the full url including protocol, e.g. https://github.com/chrisbobbe
48 | twitter_url:
49 | facebook_url:
50 | googleplus_url:
51 | instagram_url:
52 | linkedin_url:
53 | github_url:
54 | stackoverflow_url:
55 | pinterest_url:
56 | slack_url:
57 | dribbble_url:
58 | 
59 | # Google Analytics Tracking ID goes here:
60 | google_analytics:
61 | 
62 | # The following settings are NECESSARY for the Prologue theme to run:
63 | theme: jekyll-theme-prologue
64 | collections: [sections]
65 | 


--------------------------------------------------------------------------------
/_includes/footer.html:
--------------------------------------------------------------------------------
 1 | <!-- Footer -->
 2 | <div id="footer">
 3 |   
 4 |   <!-- Copyright -->
 5 |   <ul class="copyright">
 6 |     {% if site.title or site.author %}
 7 |       <li>&copy; {{- site.title | default: site.author -}}. All rights reserved.</li>
 8 |     {% endif %}
 9 |     <li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
10 |     <li>Jekyll integration: <a href="https://chrisbobbe.github.io/">Chris Bobbe</a></li>
11 |   </ul>
12 |   
13 | </div>


--------------------------------------------------------------------------------
/_includes/google_analytics.html:
--------------------------------------------------------------------------------
1 | <!-- Global site tag (gtag.js) - Google Analytics -->
2 | <script async src="https://www.googletagmanager.com/gtag/js?id={{- site.google_analytics -}}"></script>
3 | <script>
4 |   window.dataLayer = window.dataLayer || [];
5 |   function gtag(){dataLayer.push(arguments);}
6 |   gtag('js', new Date());
7 |   gtag('config', '{{- site.google_analytics -}}');
8 | </script>


--------------------------------------------------------------------------------
/_includes/head.html:
--------------------------------------------------------------------------------
 1 | <head>
 2 |   {%- if site.google_analytics and jekyll.environment == 'production' -%}
 3 |     {%- include google_analytics.html -%}
 4 |   {%- endif -%}
 5 |   
 6 |   <!-- Robots -->
 7 |   <meta name="robots" content="{{- page.robots | default: 'index, follow' -}}" />
 8 |   {%- unless page.canonical == false -%}<link rel="canonical" href="{{- page.url | absolute_url -}}" />{%- endunless -%}
 9 |   
10 |   <!-- Title, description, author -->
11 |   {%- capture _page_title -%}
12 |     {%- if page.title -%}{{- page.title | append: ' | ' -}}{%- endif -%}
13 |     {{- site.title | default: "Untitled Website" -}}
14 |     {%- if site.subtitle -%}{{- site.subtitle | prepend: ' - ' -}}{%- endif -%}
15 |   {%- endcapture -%}
16 |   {%- assign _page_title = _page_title | escape -%}
17 |   {%- assign _page_description = page.description | default: site.description | default: _page_title | escape -%}
18 | 
19 |   <title>{{- _page_title -}}</title>
20 |   <meta name="description" content="{{- _page_description -}}" />
21 |   <meta name="author" content="{{- site.author -}}" />
22 |   
23 |   <!-- Open Graph -->
24 |   <meta property="og:title" content="{{- _page_title -}}" />
25 |   <meta property="og:type" content="website" />
26 |   <meta property="og:image" content="{{- site.avatar | absolute_url -}}" />
27 |   <meta property="og:url" content="{{- page.url | absolute_url -}}" />
28 |   <meta property="og:site_name" content="{{- site.title | escape -}}" />
29 |   <meta property="og:description" content="{{- _page_description -}}" />
30 |   
31 |   <!-- Styles -->
32 |   <meta charset="utf-8" />
33 |   <meta name="viewport" content="width=device-width, initial-scale=1" />
34 |   <!--[if lte IE 8]><script src="{{- 'assets/js/ie/html5shiv.js' | relative_url -}}" defer></script><![endif]-->
35 |   <link rel="stylesheet" href="{{- 'assets/css/main.css' | relative_url -}}" />
36 |   <!--[if lte IE 8]><link rel="stylesheet" href="{{- 'assets/css/ie8.css' | relative_url -}}" /><![endif]-->
37 |   <!--[if lte IE 9]><link rel="stylesheet" href="{{- 'assets/css/ie9.css' | relative_url -}}" /><![endif]-->
38 |   <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css">
39 | 
40 |   <!-- Scripts -->
41 |   <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js" defer></script>
42 |   <script src="{{- 'assets/js/jquery.scrolly.min.js' | relative_url -}}" defer></script>
43 |   <script src="{{- 'assets/js/jquery.scrollzer.min.js' | relative_url -}}" defer></script>
44 |   <script src="{{- 'assets/js/skel.min.js' | relative_url -}}" defer></script>
45 |   <script src="{{- 'assets/js/util.js' | relative_url -}}" defer></script>
46 |   <!--[if lte IE 8]><script src="{{- 'assets/js/ie/respond.min.js' | relative_url -}}" defer></script><![endif]-->
47 |   <script src="{{- 'assets/js/main.js' | relative_url -}}" defer></script>
48 | 
49 | </head>


--------------------------------------------------------------------------------
/_includes/header.html:
--------------------------------------------------------------------------------
 1 | {%- comment -%}
 2 |   Include vars:
 3 |   scrolly_nav
 4 | {%- endcomment -%}
 5 | 
 6 | <!-- Header -->
 7 | <div id="header">
 8 |   <div class="top">
 9 |     {%- include logo.html -%}
10 |     {%- include nav.html section_items=include.scrolly_nav -%}
11 |   </div>
12 |   <div class="bottom">
13 |     {%- include social_icons.html -%}
14 |   </div>
15 | </div>
16 | 


--------------------------------------------------------------------------------
/_includes/logo.html:
--------------------------------------------------------------------------------
1 | <!-- Logo -->
2 | <div id="logo">
3 |   <a href="{{- '/' | absolute_url -}}" id="home-link">
4 |     <span class="image avatar48"><img src="{{- site.avatar | relative_url -}}" alt="{{- site.author | default: 'unknown author' | prepend: 'Avatar of ' -}}" /></span>
5 |     <h1 id="title">{{- site.title -}}</h1>
6 |     <p>{{- site.subtitle -}}</p>
7 |   </a>
8 | </div>


--------------------------------------------------------------------------------
/_includes/nav.html:
--------------------------------------------------------------------------------
 1 | {%- comment -%}
 2 |   Include vars:
 3 |   section_items
 4 | {%- endcomment -%}
 5 | 
 6 | <!-- Nav -->
 7 | <nav id="nav">
 8 |   <ul>
 9 |     {%- assign _pages = site.html_pages | where_exp: "page", "page.hide != true" -%}
10 |     {%- unless _pages == null -%}
11 |       {%- assign _pages = _pages | sort: 'order' -%}
12 |       {%- for _page in _pages -%}
13 |         {%- assign _title = _page.title | default: _page.layout -%}
14 |         {%- assign _slug = _title | slugify -%}
15 |         {%- assign _icon = _page.icon | default: 'fa-link' -%}
16 |         {%- if _page.icon-style == 'regular' -%}
17 |           {%- assign _class = 'icon-r' -%}
18 |         {%- elsif _page.icon-style == 'brands' -%}
19 |           {%- assign _class = 'icon-b' -%}
20 |         {%- else -%}
21 |           {%- assign _class = 'icon' -%}
22 |         {%- endif -%}
23 |         {%- comment -%}<!-- page.url (no underscore) is the url of the current page-->{%- endcomment -%}
24 |         {%- if _page.url == page.url -%}
25 |           <li><a href="#" id="{{- _slug -}}" class="active">
26 |             <span class="{{ _class }} {{ _icon }}">{{- _title -}}</span>
27 |           </a></li>
28 |         {%- elsif _page.url -%}
29 |           <li><a href="{{- _page.url | absolute_url -}}" id="{{- _slug -}}-link">
30 |             <span class="{{ _class }} {{ _icon }}">{{- _title -}}</span>
31 |           </a></li>
32 |         {%- else -%}
33 |           <li><a href="{{- '/' | absolute_url -}}" id="broken-link"><span class="icon fa-unlink">[broken link]</span></a></li>
34 |         {%- endif -%}
35 |       {%- endfor -%}
36 |     {%- endunless -%}
37 |     {%- assign _sections = include.section_items | where_exp: "section", "section.hide != true" -%}
38 |     {%- if _pages[0] and _sections[0] -%}<hr>{%- endif -%}
39 |     {%- unless _sections == null -%}
40 |       {%- for _sect in _sections -%}
41 |         {%- assign _title = _sect.title | default: _sect.layout | default: 'Untitled' -%}
42 |         {%- assign _slug = _title | slugify -%}
43 |         {%- assign _icon = _sect.icon | default: 'fa-file' -%}
44 |         {%- if _sect.icon-style == 'regular' -%}
45 |           {%- assign _class = 'icon-r' -%}
46 |         {%- elsif _sect.icon-style == 'brands' -%}
47 |           {%- assign _class = 'icon-b' -%}
48 |         {%- else -%}
49 |           {%- assign _class = 'icon' -%}
50 |         {%- endif -%}
51 |         <li><a href="#{{- _slug -}}" id="{{- _slug -}}-link" class="scrolly"><span class="{{ _class }} {{ _icon }}">{{- _title -}}</span></a></li>
52 |       {%- endfor -%}
53 |     {%- endunless -%}
54 |   </ul>
55 | </nav>


--------------------------------------------------------------------------------
/_includes/section.html:
--------------------------------------------------------------------------------
 1 | {%- comment -%}
 2 |   Include vars:
 3 | 	title
 4 |   subtitle
 5 | 	photo
 6 | 	photo-alt
 7 | 	auto-header
 8 | 	content
 9 | {%- endcomment -%}
10 | 
11 | {%- assign _title = include.title | default: 'Untitled' -%}
12 | {%- assign _slug = include.title | strip_html | slugify | default: 'untitled' -%}
13 | 
14 | {%- if include.photo and include.photo-alt -%}
15 | 	{%- capture _photo -%}
16 | 		<img src="{{- include.photo | relative_url -}}" alt="{{- include.photo-alt -}}" class="back">
17 | 	{%- endcapture -%}
18 | 	{%- assign _class = 'shade-one cover dark' -%}
19 | {%- else -%}
20 | 	{%- assign _photo = '' -%}
21 | 	{%- capture _class -%}shade-{%- cycle 'two', 'three', 'four', 'three' -%}{%- endcapture -%}
22 | {%- endif -%}
23 | 
24 | {%- if include.auto-header == 'none' -%}
25 | 	{%- assign _heading = "" -%}
26 | {%- else -%}
27 | 	{%- capture _heading -%}
28 | 		<header>
29 | 			<h2>
30 |         {%- if include.auto-header == null or include.auto-header == 'use-title' -%}
31 |           {{- _title -}}
32 |         {%- else -%}
33 |           {{- include.auto-header -}}
34 |         {%- endif -%}
35 |       </h2>
36 |       {%- if include.subtitle -%}<p>{{- include.subtitle -}}</p>{%- endif -%}
37 | 		</header>
38 | 	{%- endcapture -%}
39 | {%- endif -%}
40 | 
41 | <section id="{{- _slug -}}" class="{{- _class -}}">
42 |   <div class="container">
43 |     {{- _photo -}}
44 |     {{- _heading -}}
45 |     {{- include.content -}}
46 |   </div>
47 | </section>
48 | 


--------------------------------------------------------------------------------
/_includes/social_icons.html:
--------------------------------------------------------------------------------
 1 | <!-- Social Icons -->
 2 | <ul class="icons">
 3 |   {%- if site.twitter_url -%}
 4 |   <li><a href="{{- site.twitter_url -}}" class="icon-b fa-twitter"><span class="label">Twitter</span></a></li>
 5 |   {%- endif -%}
 6 |   {%- if site.facebook_url -%}
 7 |   <li><a href="{{- site.facebook_url -}}" class="icon-b fa-facebook-f"><span class="label">Facebook</span></a></li>
 8 |   {%- endif -%}
 9 |   {%- if site.googleplus_url -%}
10 |   <li><a href="{{- site.googleplus_url -}}" class="icon-b fa-google-plus-g"><span class="label">Google Plus</span></a></li>
11 |   {%- endif -%}
12 |   {%- if site.instagram_url -%}
13 |   <li><a href="{{- site.instagram_url -}}" class="icon-b fa-instagram"><span class="label">Instagram</span></a></li>
14 |   {%- endif -%}
15 |   {%- if site.linkedin_url -%}
16 |   <li><a href="{{- site.linkedin_url -}}" class="icon-b fa-linkedin-in"><span class="label">LinkedIn</span></a></li>
17 |   {%- endif -%}
18 |   {%- if site.github_url -%}
19 |   <li><a href="{{- site.github_url -}}" class="icon-b fa-github"><span class="label">GitHub</span></a></li>
20 |   {%- endif -%}
21 |   {%- if site.stackoverflow_url -%}
22 |   <li><a href="{{- site.stackoverflow_url -}}" class="icon-b fa-stack-overflow"><span class="label">StackOverflow</span></a></li>
23 |   {%- endif -%}
24 |   {%- if site.pinterest_url -%}
25 |   <li><a href="{{- site.pinterest_url -}}" class="icon-b fa-pinterest"><span class="label">Pinterest</span></a></li>
26 |   {%- endif -%}
27 |   {%- if site.slack_url -%}
28 |   <li><a href="{{- site.slack_url -}}" class="icon-b fa-slack-hash"><span class="label">Slack</span></a></li>
29 |   {%- endif -%}
30 |   {%- if site.dribbble_url -%}
31 |   <li><a href="{{- site.dribbble_url -}}" class="icon-b fa-dribbble"><span class="label">Dribbble</span></a></li>
32 |   {%- endif -%}
33 |   {%- if site.email -%}
34 |   <li><a href="mailto:{{- site.email -}}" class="icon fa-envelope"><span class="label">Email</span></a></li>
35 |   {%- endif -%}
36 | </ul>
37 | 


--------------------------------------------------------------------------------
/_layouts/blog.html:
--------------------------------------------------------------------------------
 1 | ---
 2 | layout: default
 3 | ---
 4 | {%- assign _posts = site.posts | sort: 'date' | reverse -%}
 5 | {%- include header.html scrolly_nav=_posts -%}
 6 | <!-- Main -->
 7 | <div id="main">
 8 | 	{%- if page.content != "" -%}
 9 | 		{%- include section.html title=page.title photo=page.cover-photo photo-alt=page.cover-photo-alt auto-header=page.auto-header content=page.content -%}
10 | 	{%- endif -%}
11 | 	<!-- Posts List -->
12 | 	{%- for _post in _posts -%}
13 | 		{%- capture _title -%}
14 | 			<a href="{{- _post.url | absolute_url -}}">{{- _post.title -}}</a>
15 | 		{%- endcapture -%}
16 | 		{%- capture _subtitle -%}
17 | 			{% if _post.author -%}{{- _post.author }} | {% endif %}
18 | 			{{- _post.date | date_to_long_string -}}
19 | 		{%- endcapture -%}
20 | 		{%- capture _excerpt -%}<p>{{- _post.excerpt | strip_html | truncatewords: 100 -}}</p>{%- endcapture -%}
21 | 		{%- capture _link -%}<a href="{{- _post.url | absolute_url -}}">read more</a>{%- endcapture -%}
22 | 		{%- assign _content = _excerpt | append: _link -%}
23 | 		{%- include section.html title=_title subtitle=_subtitle content=_content -%}
24 | 	{%- endfor -%}
25 | </div>


--------------------------------------------------------------------------------
/_layouts/default.html:
--------------------------------------------------------------------------------
 1 | <!DOCTYPE HTML>
 2 | <!--
 3 | Prologue by HTML5 UP
 4 | html5up.net | @ajlkn
 5 | Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
 6 | Jekyll integration by Chris Bobbe | chrisbobbe.github.io
 7 | -->
 8 | <html>
 9 | 	{%- include head.html -%}
10 | 	<body>
11 | 		{{- content -}}
12 | 		{%- include footer.html -%}
13 | 	</body>
14 | </html>


--------------------------------------------------------------------------------
/_layouts/home.html:
--------------------------------------------------------------------------------
 1 | ---
 2 | layout: default
 3 | ---
 4 | {%- assign _sections = site.sections | sort: 'order' -%}
 5 | {%- include header.html scrolly_nav=_sections -%}
 6 | <!-- Main -->
 7 | <div id="main">
 8 | 	{%- if page.content != "" -%}
 9 | 		{%- include section.html title=page.title photo=page.cover-photo photo-alt=page.cover-photo-alt auto-header=page.auto-header content=page.content -%}
10 | 	{%- endif -%}
11 | 	<!-- Sections -->
12 | 	{%- for _section in _sections -%}
13 | 		{%- include section.html title=_section.title photo=_section.cover-photo photo-alt=_section.cover-photo-alt auto-header=_section.auto-header content=_section.content -%}
14 | 	{%- endfor -%}
15 | </div>


--------------------------------------------------------------------------------
/_layouts/page.html:
--------------------------------------------------------------------------------
 1 | ---
 2 | layout: default
 3 | ---
 4 | {%- include header.html -%}
 5 | 
 6 | <!-- Main -->
 7 | <div id="main">
 8 | 	<!-- Page -->
 9 | 	<article class="shade-two">
10 | 	  <div class="container">
11 | 			<header>
12 | 				<h2>{{- page.title -}}</h2>
13 | 				{%- if page.subtitle -%}<p>{{- page.subtitle -}}</p>{%- endif -%}
14 | 			</header>
15 | 	    {{- content -}}
16 | 	  </div>
17 | 	</article>
18 | </div>


--------------------------------------------------------------------------------
/_layouts/post.html:
--------------------------------------------------------------------------------
 1 | ---
 2 | layout: default
 3 | ---
 4 | {%- include header.html -%}
 5 | 
 6 | <!-- Main -->
 7 | <div id="main">
 8 | 	<!-- Post -->
 9 | 	<article class="shade-two">
10 | 	  <div class="container">
11 | 			<header>
12 | 				<h2>{{- page.title -}}</h2>
13 | 				<p>{% if page.author %}{{ page.author }}, {% endif %}{{- page.date | date_to_long_string -}}</p>
14 | 			</header>
15 | 	    {{- content -}}
16 | 	  </div>
17 | 	</article>
18 | </div>


--------------------------------------------------------------------------------
/_posts/2012-09-12-first-post.md:
--------------------------------------------------------------------------------
 1 | ---
 2 | title: First Post
 3 | author: Chris
 4 | layout: post
 5 | ---
 6 | Lorem ipsum dolor sit amet, iusto ridens dictas te sed. Error latine vis et. Ex cum munere definitiones, ne quas debitis contentiones cum, epicurei constituam ea sit. Dicant aeterno dolorum ex eum, qui everti iisque consectetuer ea! Duo in falli similique, nec tritani accusam te. Enim sapientem intellegat te pri, nam at atqui accumsan vituperata.
 7 | 
 8 | Sed id graeci feugiat. No meis summo consequat vel! Albucius phaedrum omittantur eos an, ex sit lorem possim perpetua. Usu et sumo posidonium, ut qui dicat sapientem tincidunt, et has consul oporteat torquatos! In qui fabulas facilisis, justo nonumes an his, quo vidisse nusquam facilisis no. Eam iriure mediocrem suavitate an?
 9 | 
10 | Quo te solum malorum prompta, porro oblique senserit cum et! Pro wisi cetero periculis ei, nam ullum dicit accusam ne, ad quo apeirian principes dissentiunt. An mea mucius vocent iisque? Vel eu altera consetetur, clita perfecto mea ad. Eos in vero ullum regione, ei veniam disputando pro, nam et iuvaret detracto voluptua.
11 | 
12 | Ad tritani deleniti sit, ne per ubique habemus singulis. Pro at integre alienum mediocritatem, mea ad libris adipisci necessitatibus, nostro constituam sit te. Recusabo oportere et mea, case minimum deleniti no quo, deseruisse conclusionemque vis te. Nam ex iudicabit constituam accommodare, dicam singulis ex eos! Eu mea viderer ceteros repudiandae, id erat voluptatum mea, ut consul omittam convenire quo. Id justo ipsum mei, modus contentiones per et! At mel omnium lucilius instructior, vel quando graeco in, eos docendi periculis eloquentiam ut.
13 | 
14 | Eam habemus aliquando ut. Id idque virtute antiopam duo, et idque falli incorrupte eos, in sea omnium instructior. Mei ex nostrud moderatius cotidieque, cu sea partiendo euripidis, eam no tollit doming! Has ne facilisi vulputate, aliquando disputationi mel eu. Ex pri diceret delectus intellegam, regione definiebas pro ex.


--------------------------------------------------------------------------------
/_posts/2013-09-12-second-post.md:
--------------------------------------------------------------------------------
 1 | ---
 2 | title: Second Post
 3 | author: Chris
 4 | layout: post
 5 | ---
 6 | 
 7 | Lorem ipsum dolor sit amet, harum malorum nominavi mea et. Atqui maluisset duo cu, summo dignissim voluptatum sit ut. Ad quo quidam delicatissimi. Cum nihil noster patrioque id. Per at maiorum definitiones. Cu vix sint aliquip. No duo alia sale persecuti.
 8 | 
 9 | Pri id consul meliore luptatum, vix iudico impetus salutatus eu, duo at causae admodum complectitur. Qui eu salutandi dignissim, ea dictas audire commodo eos, vim cu autem dicam. Novum placerat moderatius sea ex, debet labitur reprehendunt mei ad. Tempor theophrastus et est, id tollit ponderum usu, at vis consul detraxit. Sit ut adhuc aeque.
10 | 
11 | Ut eum labore antiopam. Cum eu modus rationibus. Illud deleniti cum cu. At vix illum vitae tation, solet oporteat complectitur at vel. Vim te simul eleifend, et per insolens conceptam, ad sint posidonium est. Ad vocent propriae principes duo.
12 | 
13 | <span class="image right"><img src="{{ 'assets/images/pic03.jpg' | relative_url }}" alt="" /></span>
14 | 
15 | Audire periculis id vis, cum eu sonet option patrioque, his dicam sanctus imperdiet ad. Ad sonet dolorum est. Eu dolore adipisci volutpat mei, eu nec nisl molestiae. Usu ad veri omnesque pertinacia, duis scripserit ad nam. Quo id eligendi legendos.
16 | 
17 | Eos cu partiendo vituperatoribus. Mel id duis delenit atomorum, mei tamquam nostrum ne, id eum hinc decore mediocrem. Mei feugiat habemus tincidunt ut, atqui detraxit ex usu. Vix ad commodo eripuit alienum, an has idque delicatissimi. Dolores reformidans mel ne, duis numquam disputando quo te.
18 | 
19 | Eum eu tritani accusata qualisque, pro ei purto vocent. Vim in insolens hendrerit similique. Nobis munere antiopam ei vix. Cum no labore partiendo conceptam. Sea id vide viderer mandamus, magna posidonium nam at. Ad populo persius duo, vel audire detracto scribentur ut.
20 | 
21 | Vim te fastidii sententiae. Vix ad facilis gloriatur, mei an diceret iracundia vituperatoribus. Iudico consetetur dissentiunt pri ut. Consul dictas pri ne. Nec an alia volumus scaevola, eos movet deleniti argumentum te. Latine abhorreant his ad, ut modus in the following table:
22 | 
23 | <div class="table-wrapper">
24 |   <table>
25 |     <thead>
26 |       <tr>
27 |         <th>Name</th>
28 |         <th>Description</th>
29 |         <th>Price</th>
30 |       </tr>
31 |     </thead>
32 |     <tbody>
33 |       <tr>
34 |         <td>Item 1</td>
35 |         <td>Ante turpis integer aliquet porttitor.</td>
36 |         <td>29.99</td>
37 |       </tr>
38 |       <tr>
39 |         <td>Item 2</td>
40 |         <td>Vis ac commodo adipiscing arcu aliquet.</td>
41 |         <td>19.99</td>
42 |       </tr>
43 |       <tr>
44 |         <td>Item 3</td>
45 |         <td> Morbi faucibus arcu accumsan lorem.</td>
46 |         <td>29.99</td>
47 |       </tr>
48 |       <tr>
49 |         <td>Item 4</td>
50 |         <td>Vitae integer tempus condimentum.</td>
51 |         <td>19.99</td>
52 |       </tr>
53 |       <tr>
54 |         <td>Item 5</td>
55 |         <td>Ante turpis integer aliquet porttitor.</td>
56 |         <td>29.99</td>
57 |       </tr>
58 |     </tbody>
59 |     <tfoot>
60 |       <tr>
61 |         <td colspan="2"></td>
62 |         <td>100.00</td>
63 |       </tr>
64 |     </tfoot>
65 |   </table>
66 | </div>
67 | 
68 | Amet illum at sea, est autem fabulas eu, quod nonumes lobortis no sed. Has ei fugit adipisci reprimique. Enim tamquam ornatus pri ei. Alii harum invidunt nec ex, pri vidit latine ne. Has vocent nominati rationibus ad, ex partiendo prodesset moderatius has, vim quod paulo ad. Ex nec etiam electram, pri illud appetere eu.
69 | 
70 | An nobis instructior eos, eam libris aperiam corrumpit ex. Case omnesque eu per. Et vix iisque tritani. Autem posidonium eu vis, sit et mutat brute. Usu ne postulant intellegat omittantur, mazim saperet adolescens mel at.
71 | 
72 | Nam at velit percipit detraxit, quas modus mea ut. Ius an natum doctus vivendum. Quo at debet vidisse viderer, mollis eripuit ex nec. Sed ut choro saepe, sale augue sea et. His nemore dolorum mnesarchum at, ius an adipisci aliquando, laoreet placerat ea ius.


--------------------------------------------------------------------------------
/_posts/2014-09-12-third-post.md:
--------------------------------------------------------------------------------
 1 | ---
 2 | title: Third Post
 3 | author: Chris
 4 | layout: post
 5 | icon: fa-lightbulb
 6 | icon-style: regular
 7 | ---
 8 | See the icon?
 9 | 
10 | Lorem ipsum dolor sit amet, harum malorum nominavi mea et. Atqui maluisset duo cu, summo dignissim voluptatum sit ut. Ad quo quidam delicatissimi. Cum nihil noster patrioque id. Per at maiorum definitiones. Cu vix sint aliquip. No duo alia sale persecuti.
11 | 
12 | <span class="image left"><img src="{{ 'assets/images/pic03.jpg' | relative_url }}" alt="" /></span>
13 | 
14 | Pri id consul meliore luptatum, vix iudico impetus salutatus eu, duo at causae admodum complectitur. Qui eu salutandi dignissim, ea dictas audire commodo eos, vim cu autem dicam. Novum placerat moderatius sea ex, debet labitur reprehendunt mei ad. Tempor theophrastus et est, id tollit ponderum usu, at vis consul detraxit. Sit ut adhuc aeque.
15 | 
16 | Ut eum labore antiopam. Cum eu modus rationibus. Illud deleniti cum cu. At vix illum vitae tation, solet oporteat complectitur at vel. Vim te simul eleifend, et per insolens conceptam, ad sint posidonium est. Ad vocent propriae principes duo.
17 | 
18 | Audire periculis id vis, cum eu sonet option patrioque, his dicam sanctus imperdiet ad. Ad sonet dolorum est. Eu dolore adipisci volutpat mei, eu nec nisl molestiae. Usu ad veri omnesque pertinacia, duis scripserit ad nam. Quo id eligendi legendos.
19 | 
20 | Eos cu partiendo vituperatoribus. Mel id duis delenit atomorum, mei tamquam nostrum ne, id eum hinc decore mediocrem. Mei feugiat habemus tincidunt ut, atqui detraxit ex usu. Vix ad commodo eripuit alienum, an has idque delicatissimi. Dolores reformidans mel ne, duis numquam disputando quo te.
21 | 
22 | Eum eu tritani accusata qualisque, pro ei purto vocent. Vim in insolens hendrerit similique. Nobis munere antiopam ei vix. Cum no labore partiendo conceptam. Sea id vide viderer mandamus, magna posidonium nam at. Ad populo persius duo, vel audire detracto scribentur ut.
23 | 
24 | Vim te fastidii sententiae. Vix ad facilis gloriatur, mei an diceret iracundia vituperatoribus. Iudico consetetur dissentiunt pri ut. Consul dictas pri ne. Nec an alia volumus scaevola, eos movet deleniti argumentum te. Latine abhorreant his ad, ut modus tempor euismod pri.
25 | 
26 | Amet illum at sea, est autem fabulas eu, quod nonumes lobortis no sed. Has ei fugit adipisci reprimique. Enim tamquam ornatus pri ei. Alii harum invidunt nec ex, pri vidit latine ne. Has vocent nominati rationibus ad, ex partiendo prodesset moderatius has, vim quod paulo ad. Ex nec etiam electram, pri illud appetere eu.
27 | 
28 | An nobis instructior eos, eam libris aperiam corrumpit ex. Case omnesque eu per. Et vix iisque tritani. Autem posidonium eu vis, sit et mutat brute. Usu ne postulant intellegat omittantur, mazim saperet adolescens mel at.
29 | 
30 | Nam at velit percipit detraxit, quas modus mea ut. Ius an natum doctus vivendum. Quo at debet vidisse viderer, mollis eripuit ex nec. Sed ut choro saepe, sale augue sea et. His nemore dolorum mnesarchum at, ius an adipisci aliquando, laoreet placerat ea ius.


--------------------------------------------------------------------------------
/_posts/2015-09-12-fourth-post.md:
--------------------------------------------------------------------------------
 1 | ---
 2 | title: Fourth Post
 3 | author: Chris
 4 | layout: post
 5 | ---
 6 | Lorem ipsum dolor sit amet, harum malorum nominavi mea et. Atqui maluisset duo cu, summo dignissim voluptatum sit ut. Ad quo quidam delicatissimi. Cum nihil noster patrioque id. Per at maiorum definitiones. Cu vix sint aliquip. No duo alia sale persecuti.
 7 | 
 8 | Pri id consul meliore luptatum, vix iudico impetus salutatus eu, duo at causae admodum complectitur. Qui eu salutandi dignissim, ea dictas audire commodo eos, vim cu autem dicam. Novum placerat moderatius sea ex, debet labitur reprehendunt mei ad. Tempor theophrastus et est, id tollit ponderum usu, at vis consul detraxit. Sit ut adhuc aeque.
 9 | 
10 | Ut eum labore antiopam. Cum eu modus rationibus. Illud deleniti cum cu. At vix illum vitae tation, solet oporteat complectitur at vel. Vim te simul eleifend, et per insolens conceptam, ad sint posidonium est. Ad vocent propriae principes duo.
11 | 
12 | Audire periculis id vis, cum eu sonet option patrioque, his dicam sanctus imperdiet ad. Ad sonet dolorum est. Eu dolore adipisci volutpat mei, eu nec nisl molestiae. Usu ad veri omnesque pertinacia, duis scripserit ad nam. Quo id eligendi legendos.
13 | 
14 | Eos cu partiendo vituperatoribus. Mel id duis delenit atomorum, mei tamquam nostrum ne, id eum hinc decore mediocrem. Mei feugiat habemus tincidunt ut, atqui detraxit ex usu. Vix ad commodo eripuit alienum, an has idque delicatissimi. Dolores reformidans mel ne, duis numquam disputando quo te.
15 | 
16 | Eum eu tritani accusata qualisque, pro ei purto vocent. Vim in insolens hendrerit similique. Nobis munere antiopam ei vix. Cum no labore partiendo conceptam. Sea id vide viderer mandamus, magna posidonium nam at. Ad populo persius duo, vel audire detracto scribentur ut.
17 | 
18 | Vim te fastidii sententiae. Vix ad facilis gloriatur, mei an diceret iracundia vituperatoribus. Iudico consetetur dissentiunt pri ut. Consul dictas pri ne. Nec an alia volumus scaevola, eos movet deleniti argumentum te. Latine abhorreant his ad, ut modus tempor euismod pri.
19 | 
20 | Amet illum at sea, est autem fabulas eu, quod nonumes lobortis no sed. Has ei fugit adipisci reprimique. Enim tamquam ornatus pri ei. Alii harum invidunt nec ex, pri vidit latine ne. Has vocent nominati rationibus ad, ex partiendo prodesset moderatius has, vim quod paulo ad. Ex nec etiam electram, pri illud appetere eu.
21 | 
22 | An nobis instructior eos, eam libris aperiam corrumpit ex. Case omnesque eu per. Et vix iisque tritani. Autem posidonium eu vis, sit et mutat brute. Usu ne postulant intellegat omittantur, mazim saperet adolescens mel at.
23 | 
24 | Nam at velit percipit detraxit, quas modus mea ut. Ius an natum doctus vivendum. Quo at debet vidisse viderer, mollis eripuit ex nec. Sed ut choro saepe, sale augue sea et. His nemore dolorum mnesarchum at, ius an adipisci aliquando, laoreet placerat ea ius.


--------------------------------------------------------------------------------
/_posts/2018-01-12-elements.html:
--------------------------------------------------------------------------------
  1 | ---
  2 | title: Elements Reference
  3 | layout: post
  4 | ---
  5 | <!-- Text stuff -->
  6 | <h2>Text</h2>
  7 | <p>This is <b>bold</b> and this is <strong>strong</strong>. This is <i>italic</i> and this is <em>emphasized</em>.
  8 | 	This is <sup>superscript</sup> text and this is <sub>subscript</sub> text.
  9 | 	This is <u>underlined</u> and this is code: <code>for (;;) { ... }</code>.
 10 | 	Finally, this is a <a href="#">link</a>.</p>
 11 | 	<hr />
 12 | 	<h2>Heading Level 2</h2>
 13 | 	<h3>Heading Level 3</h3>
 14 | 	<hr />
 15 | 	<header>
 16 | 		<h2>Heading with a Subtitle</h2>
 17 | 		<p>Lorem ipsum dolor sit amet nullam id egestas urna aliquam</p>
 18 | 	</header>
 19 | 	<p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
 20 | 	<hr />
 21 | 	
 22 | 	<!-- Lists -->
 23 | 	<h2>Lists</h2>
 24 | 	<div class="row">
 25 | 		<div class="6u 12u$(small)">
 26 | 			
 27 | 			<h3>Unordered</h3>
 28 | 			<ul>
 29 | 				<li>Dolor pulvinar etiam.</li>
 30 | 				<li>Sagittis lorem eleifend.</li>
 31 | 				<li>Felis feugiat dolore viverra.</li>
 32 | 				<li>Dolor pulvinar etiam.</li>
 33 | 			</ul>
 34 | 			
 35 | 			<h3>Icons</h3>
 36 | 			<ul class="icons">
 37 | 				<li><a href="#" class="icon fa-envelope"><span class="label">Twitter</span></a></li>
 38 | 				<li><a href="#" class="icon-r fa-envelope"><span class="label">Twitter</span></a></li>
 39 | 				<li><a href="#" class="icon fa-user"><span class="label">Facebook</span></a></li>
 40 | 				<li><a href="#" class="icon-r fa-user"><span class="label">Instagram</span></a></li>
 41 | 				<li><a href="#" class="icon-b fa-github"><span class="label">Github</span></a></li>
 42 | 				<li><a href="#" class="icon-b fa-github-alt"><span class="label">Dribbble</span></a></li>
 43 | 			</ul>
 44 | 			
 45 | 		</div>
 46 | 		<div class="6u$ 12u$(small)">
 47 | 			
 48 | 			<h3>Ordered</h3>
 49 | 			<ol>
 50 | 				<li>Dolor pulvinar etiam.</li>
 51 | 				<li>Etiam vel felis at viverra.</li>
 52 | 				<li>Felis enim feugiat magna.</li>
 53 | 				<li>Etiam vel felis nullam.</li>
 54 | 				<li>Felis enim et tempus.</li>
 55 | 			</ol>
 56 | 		
 57 | 		</div>
 58 | 	</div>
 59 | 	<h3>Definition</h3>
 60 | 	<dl>
 61 | 		<dt>Item 1</dt>
 62 | 		<dd>
 63 | 			<p>Lorem ipsum dolor vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent.</p>
 64 | 		</dd>
 65 | 		<dt>Item 2</dt>
 66 | 		<dd>
 67 | 			<p>Lorem ipsum dolor vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent.</p>
 68 | 		</dd>
 69 | 		<dt>Item 3</dt>
 70 | 		<dd>
 71 | 			<p>Lorem ipsum dolor vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent.</p>
 72 | 		</dd>
 73 | 	</dl>
 74 | 	
 75 | 	<h3>Button</h3>
 76 | 		<a href="#" class="button">Button</a>
 77 | 		<a href="#" class="button icon fa-search">Icon</a>
 78 | 	
 79 | 	<hr />
 80 | 	
 81 | 	<!-- Blockquote -->
 82 | 	<h2>Blockquote</h2>
 83 | 	<blockquote>Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan faucibus. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis.</blockquote>
 84 | 	
 85 | 	<hr />
 86 | 	
 87 | 	<!-- Table -->
 88 | 	<h2>Table</h2>
 89 | 	<div class="table-wrapper">
 90 | 		<table>
 91 | 			<thead>
 92 | 				<tr>
 93 | 					<th>Name</th>
 94 | 					<th>Description</th>
 95 | 					<th>Price</th>
 96 | 				</tr>
 97 | 			</thead>
 98 | 			<tbody>
 99 | 				<tr>
100 | 					<td>Item 1</td>
101 | 					<td>Ante turpis integer aliquet porttitor.</td>
102 | 					<td>29.99</td>
103 | 				</tr>
104 | 				<tr>
105 | 					<td>Item 2</td>
106 | 					<td>Vis ac commodo adipiscing arcu aliquet.</td>
107 | 					<td>19.99</td>
108 | 				</tr>
109 | 				<tr>
110 | 					<td>Item 3</td>
111 | 					<td> Morbi faucibus arcu accumsan lorem.</td>
112 | 					<td>29.99</td>
113 | 				</tr>
114 | 				<tr>
115 | 					<td>Item 4</td>
116 | 					<td>Vitae integer tempus condimentum.</td>
117 | 					<td>19.99</td>
118 | 				</tr>
119 | 				<tr>
120 | 					<td>Item 5</td>
121 | 					<td>Ante turpis integer aliquet porttitor.</td>
122 | 					<td>29.99</td>
123 | 				</tr>
124 | 			</tbody>
125 | 			<tfoot>
126 | 				<tr>
127 | 					<td colspan="2"></td>
128 | 					<td>100.00</td>
129 | 				</tr>
130 | 			</tfoot>
131 | 		</table>
132 | 	</div>
133 | 	
134 | 	<hr />
135 | 	
136 | 	<!-- Form -->
137 | 	<h2>Form</h2>
138 | 	
139 | 	<form method="post" action="#">
140 | 		<div class="row uniform">
141 | 			<div class="6u 12u$(xsmall)">
142 | 				<input type="text" name="demo-name" id="demo-name" value="" placeholder="Name" />
143 | 			</div>
144 | 			<div class="6u$ 12u$(xsmall)">
145 | 				<input type="email" name="demo-email" id="demo-email" value="" placeholder="Email" />
146 | 			</div>
147 | 			<!-- Break -->
148 | 			<div class="12u$">
149 | 				<div class="select-wrapper">
150 | 					<select name="demo-category" id="demo-category">
151 | 						<option value="">- Category -</option>
152 | 						<option value="1">Manufacturing</option>
153 | 						<option value="1">Shipping</option>
154 | 						<option value="1">Administration</option>
155 | 						<option value="1">Human Resources</option>
156 | 					</select>
157 | 				</div>
158 | 			</div>
159 | 			<!-- Break -->
160 | 			<div class="4u 12u$(small)">
161 | 				<input type="radio" id="demo-priority-low" name="demo-priority" checked>
162 | 				<label for="demo-priority-low">Low</label>
163 | 			</div>
164 | 			<div class="4u 12u$(small)">
165 | 				<input type="radio" id="demo-priority-normal" name="demo-priority">
166 | 				<label for="demo-priority-normal">Normal</label>
167 | 			</div>
168 | 			<div class="4u$ 12u$(small)">
169 | 				<input type="radio" id="demo-priority-high" name="demo-priority">
170 | 				<label for="demo-priority-high">High</label>
171 | 			</div>
172 | 			<!-- Break -->
173 | 			<div class="6u 12u$(small)">
174 | 				<input type="checkbox" id="demo-copy" name="demo-copy">
175 | 				<label for="demo-copy">Email me a copy</label>
176 | 			</div>
177 | 			<div class="6u$ 12u$(small)">
178 | 				<input type="checkbox" id="demo-human" name="demo-human" checked>
179 | 				<label for="demo-human">I am a human</label>
180 | 			</div>
181 | 			<!-- Break -->
182 | 			<div class="12u$">
183 | 				<textarea name="demo-message" id="demo-message" placeholder="Enter your message" rows="6"></textarea>
184 | 			</div>
185 | 			<!-- Break -->
186 | 			<div class="12u$">
187 | 				<div class="actions">
188 | 					<input type="submit" value="Send Message" class="special" />
189 | 					<input type="reset" value="Reset" />
190 | 				</div>
191 | 			</div>
192 | 		</div>
193 | 	</form>
194 | 	
195 | 	<hr />
196 | 	
197 | 	<!-- Image -->
198 | 	<h2>Image</h2>
199 | 
200 | 	<div class="row">
201 |     <div class="4u 12u$(mobile)">
202 |       <div class="item">
203 |         <a href="#" class="image fit"><img src="{{ 'assets/images/pic02.jpg' | relative_url }}" alt="Ipsum Feugiat" /></a>
204 |         <header>
205 |           <h3>Ipsum Feugiat</h3>
206 |         </header>
207 |       </div>
208 |       <div class="item">
209 |         <a href="#" class="image fit"><img src="{{ 'assets/images/pic03.jpg' | relative_url }}" alt="Rhoncus Semper" /></a>
210 |         <header>
211 |           <h3>Rhoncus Semper</h3>
212 |         </header>
213 |       </div>
214 |     </div>
215 |     <div class="4u 12u$(mobile)">
216 |       <div class="item">
217 |         <a href="#" class="image fit"><img src="{{ 'assets/images/pic04.jpg' | relative_url }}" alt="Magna Nullam" /></a>
218 |         <header>
219 |           <h3>Magna Nullam</h3>
220 |         </header>
221 |       </div>
222 |       <div class="item">
223 |         <a href="#" class="image fit"><img src="{{ 'assets/images/pic05.jpg' | relative_url }}" alt="Natoque Vitae" /></a>
224 |         <header>
225 |           <h3>Natoque Vitae</h3>
226 |         </header>
227 |       </div>
228 |     </div>
229 |     <div class="4u$ 12u$(mobile)">
230 |       <div class="item">
231 |         <a href="#" class="image fit"><img src="{{ 'assets/images/pic06.jpg' | relative_url }}" alt="Dolor Penatibus" /></a>
232 |         <header>
233 |           <h3>Dolor Penatibus</h3>
234 |         </header>
235 |       </div>
236 |       <div class="item">
237 |         <a href="#" class="image fit"><img src="{{ 'assets/images/pic07.jpg' | relative_url }}" alt="Orci Convallis" /></a>
238 |         <header>
239 |           <h3>Orci Convallis</h3>
240 |         </header>
241 |       </div>
242 |     </div>
243 |   </div>
244 | 	
245 | 	<h3>Left &amp; Right</h3>
246 | 	<p><span class="image left"><img src="{{ 'assets/images/pic03.jpg' | relative_url }}" alt="" /></span>Lorem ipsum dolor sit accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Vestibulum ante ipsum primis in faucibus magna blandit adipiscing eu felis iaculis.</p>
247 | 	<p><span class="image right"><img src="{{ 'assets/images/pic02.jpg' | relative_url }}" alt="" /></span>Lorem ipsum dolor sit accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Vestibulum ante ipsum primis in faucibus magna blandit adipiscing eu felis iaculis.</p>
248 | 	
249 | 	<hr />
250 | 	
251 | 	<!-- Preformatted Code -->
252 | 	<h2>Preformatted</h2>
253 | 	<pre><code>i = 0;
254 | 
255 | while (!deck.isInOrder()) {
256 | 	print 'Iteration ' + i;
257 | 	deck.shuffle();
258 | 	i++;
259 | }
260 | 
261 | print 'It took ' + i + ' iterations to sort the deck.';</code></pre>


--------------------------------------------------------------------------------
/_sass/jekyll-theme-prologue.scss:
--------------------------------------------------------------------------------
   1 | @import 'libs/vars';
   2 | @import 'libs/functions';
   3 | @import 'libs/mixins';
   4 | @charset "UTF-8";
   5 | @import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300italic,400,600");
   6 | 
   7 | /*
   8 | 	Prologue by HTML5 UP
   9 | 	html5up.net | @ajlkn
  10 | 	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
  11 | */
  12 | 
  13 | 	@import "libs/skel";
  14 | 
  15 | 	@include skel-breakpoints((
  16 | 		wide: '(min-width: 961px) and (max-width: 1880px)',
  17 | 		normal: '(min-width: 961px) and (max-width: 1620px)',
  18 | 		narrow: '(min-width: 961px) and (max-width: 1320px)',
  19 | 		narrower: '(max-width: 960px)',
  20 | 		mobile: '(max-width: 736px)'
  21 | 	));
  22 | 
  23 | 	@include skel-layout((
  24 | 		reset: 'full',
  25 | 		boxModel: 'border',
  26 | 		grid: ( gutters: (40px, 40px) ),
  27 | 		conditionals: true,
  28 | 		containers: 1400px,
  29 | 		breakpoints: (
  30 | 			wide: (
  31 | 				containers: 1200px,
  32 | 				grid: (
  33 | 					gutters: (40px, 40px)
  34 | 				),
  35 | 			),
  36 | 			normal: (
  37 | 				containers: 960px,
  38 | 				grid: (
  39 | 					gutters: (40px, 40px)
  40 | 				),
  41 | 			),
  42 | 			narrow: (
  43 | 				containers: 100%,
  44 | 				grid: (
  45 | 					gutters: (20px, 20px)
  46 | 				),
  47 | 			),
  48 | 			narrower: (
  49 | 				containers: 100%,
  50 | 				grid: (
  51 | 					gutters: (20px, 20px)
  52 | 				),
  53 | 			),
  54 | 			mobile: (
  55 | 				containers: (100%, true),
  56 | 			)
  57 | 		)
  58 | 	));
  59 | 
  60 | /* Basic */
  61 | 
  62 | 	body {
  63 | 		background: #fff;
  64 | 		font-family: 'Source Sans Pro', sans-serif;
  65 | 		font-size: 19pt;
  66 | 		font-weight: 300;
  67 | 		line-height: 1.75em;
  68 | 		color: #888;
  69 | 
  70 | 		&.is-loading * {
  71 | 			@include vendor('transition', 'none !important');
  72 | 			@include vendor('animation', 'none !important');
  73 | 		}
  74 | 	}
  75 | 
  76 | 	input, textarea, select {
  77 | 		font-family: 'Source Sans Pro', sans-serif;
  78 | 		font-size: 19pt;
  79 | 		font-weight: 300;
  80 | 		line-height: 1.75em;
  81 | 		color: #888;
  82 | 	}
  83 | 
  84 | 	h1, h2, h3, h4, h5, h6 {
  85 | 		font-weight: 300;
  86 | 		color: #666;
  87 | 		line-height: 1.5em;
  88 | 	}
  89 | 
  90 | 	h1 a, h2 a, h3 a, h4 a, h5 a, h6 a {
  91 | 		color: inherit;
  92 | 		text-decoration: none;
  93 | 
  94 | 		strong {
  95 | 			color: #333;
  96 | 		}
  97 | 	}
  98 | 
  99 | 	h2 {
 100 | 		font-size: 2em;
 101 | 		letter-spacing: -1px;
 102 | 	}
 103 | 
 104 | 	h3 {
 105 | 		font-size: 1.5em;
 106 | 	}
 107 | 
 108 | 	header {
 109 | 		margin: 0 0 2em 0;
 110 | 
 111 | 		> p {
 112 | 			margin: 1em 0 0 0;
 113 | 		}
 114 | 	}
 115 | 
 116 | 	footer {
 117 | 		margin: 2em 0 0 0;
 118 | 	}
 119 | 
 120 | 	strong, b {
 121 | 		font-weight: 300;
 122 | 		color: #666;
 123 | 	}
 124 | 
 125 | 	em, i {
 126 | 		font-style: italic;
 127 | 	}
 128 | 
 129 | 	a {
 130 | 		text-decoration: none;
 131 | 		color: inherit;
 132 | 		border-bottom: dotted 1px rgba(128, 128, 128, 0.5);
 133 | 		@include vendor('transition', ('color 0.35s ease-in-out', 'border-bottom-color 0.35s ease-in-out'));
 134 | 		outline: 0;
 135 | 
 136 | 		&:hover {
 137 | 			color: #E27689;
 138 | 			border-bottom-color: rgba(255, 255, 255, 0);
 139 | 		}
 140 | 	}
 141 | 
 142 | 	sub {
 143 | 		position: relative;
 144 | 		top: 0.5em;
 145 | 		font-size: 0.8em;
 146 | 	}
 147 | 
 148 | 	sup {
 149 | 		position: relative;
 150 | 		top: -0.5em;
 151 | 		font-size: 0.8em;
 152 | 	}
 153 | 
 154 | 	hr {
 155 | 		border: 0;
 156 | 		border-top: solid 1px #41484c;
 157 | 	}
 158 | 
 159 | 	code {
 160 | 		background: rgba(0, 0, 0, 0.05);
 161 | 		border-color: rgba(0, 0, 0, 0.2);
 162 | 		border-radius: 4px;
 163 | 		font-family: "Courier New", monospace;
 164 | 		font-size: 0.9em;
 165 | 		padding: 0.25em 0.325em;
 166 | 	}
 167 | 
 168 | 	pre {
 169 | 		-webkit-overflow-scrolling: touch;
 170 | 		font-family: "Courier New", monospace;
 171 | 		font-size: 0.9em;
 172 | 		tab-size: 4;
 173 | 		margin: 0 0 2em 0;
 174 | 		code {
 175 | 			display: block;
 176 | 			line-height: 1.5;
 177 | 			padding: 0.75em 1em;
 178 | 			overflow-x: auto;
 179 | 		}
 180 | 	}
 181 | 
 182 | 	blockquote {
 183 | 		margin-left: 1em;
 184 | 		border-left: solid 0.5em #ddd;
 185 | 		padding: 1em 0 1em 2em;
 186 | 		font-style: italic;
 187 | 	}
 188 | 
 189 | 	p, ul, ol, dl, table {
 190 | 		margin-bottom: 2em;
 191 | 	}
 192 | 
 193 | 	dl {
 194 | 		dt {
 195 | 			font-weight: 300;
 196 | 			color: #666;
 197 | 		}
 198 | 		dd {
 199 | 			margin-left: 1em
 200 | 		}
 201 | 	}
 202 | 
 203 | 	br.clear {
 204 | 		clear: both;
 205 | 	}
 206 | 
 207 | /* Sections/Article */
 208 | 
 209 | 	section, article {
 210 | 		margin-bottom: 3em;
 211 | 
 212 | 		> :last-child,
 213 | 		> .container,
 214 | 		&:last-child,
 215 | 		> .container > :last-child {
 216 | 			margin-bottom: 0;
 217 | 		}
 218 | 
 219 | 		.row > & {
 220 | 			margin-bottom: 0;
 221 | 		}
 222 | 
 223 | 		.row {
 224 | 			margin-top: 40px;
 225 | 		}
 226 | 
 227 | 		.row > * {
 228 | 			padding-top: 0;
 229 | 		}
 230 | 
 231 | 		ul, ol {
 232 | 			padding-left: 0.25em;
 233 | 			margin-left: 1.25em;
 234 | 		}
 235 | 	}
 236 | 
 237 | /* Image */
 238 | 
 239 | 	.image {
 240 | 		display: inline-block;
 241 | 		border: 0;
 242 | 
 243 | 		img {
 244 | 			display: block;
 245 | 			width: 100%;
 246 | 		}
 247 | 
 248 | 		&.avatar48 {
 249 | 			width: 48px;
 250 | 			height: 48px;
 251 | 			background: #f00;
 252 | 
 253 | 			img {
 254 | 				width: 48px;
 255 | 				height: 48px;
 256 | 			}
 257 | 		}
 258 | 
 259 | 		&.fit {
 260 | 			display: block;
 261 | 			width: 100%;
 262 | 		}
 263 | 
 264 | 		&.featured {
 265 | 			display: block;
 266 | 			width: 100%;
 267 | 			margin: 0 0 2em 0;
 268 | 		}
 269 | 
 270 | 		&.left {
 271 | 			float: left;
 272 | 			margin: 0 2em 2em 0;
 273 | 		}
 274 | 
 275 | 		&.right {
 276 | 			float: right;
 277 | 			margin: 0 0 2em 2em;
 278 | 		}
 279 | 
 280 | 		&.centered {
 281 | 			display: block;
 282 | 			margin: 0 0 2em 0;
 283 | 
 284 | 			img {
 285 | 				margin: 0 auto;
 286 | 				width: auto;
 287 | 			}
 288 | 		}
 289 | 	}
 290 | 
 291 | /* List */
 292 | 
 293 | 	ul {
 294 | 		list-style: disc;
 295 | 
 296 | 		&.icons {
 297 | 			cursor: default;
 298 | 
 299 | 			li {
 300 | 				display: inline-block;
 301 | 			}
 302 | 
 303 | 			a {
 304 | 				display: inline-block;
 305 | 				width: 2em;
 306 | 				height: 2em;
 307 | 				line-height: 2em;
 308 | 				text-align: center;
 309 | 				border: 0;
 310 | 			}
 311 | 		}
 312 | 	}
 313 | 
 314 | 	ol {
 315 | 		list-style: decimal;
 316 | 	}
 317 | 
 318 | /* Form */
 319 | 
 320 | 	form {
 321 | 		label {
 322 | 			display: block;
 323 | 			text-align: left;
 324 | 			margin-bottom: 0.5em;
 325 | 		}
 326 | 
 327 | 		input[type="text"],
 328 | 		input[type="email"],
 329 | 		input[type="password"],
 330 | 		select,
 331 | 		textarea {
 332 | 			position: relative;
 333 | 			-webkit-appearance: none;
 334 | 			display: block;
 335 | 			border: 0;
 336 | 			outline: 0;
 337 | 			background: #fff;
 338 | 			background: rgba(255, 255, 255, 0.75);
 339 | 			width: 100%;
 340 | 			border-radius: 0.35em;
 341 | 			padding: 0.75em 1em 0.75em 1em;
 342 | 			box-shadow: inset 0 0.1em 0.1em 0 rgba(0, 0, 0, 0.05);
 343 | 			border: solid 1px rgba(0, 0, 0, 0.15);
 344 | 			@include vendor('transition', 'all 0.35s ease-in-out');
 345 | 
 346 | 			&:focus {
 347 | 				box-shadow: 0 0 2px 1px #8ebebc;
 348 | 				background: #fff;
 349 | 			}
 350 | 		}
 351 | 
 352 | 		input[type="text"],
 353 | 		input[type="email"],
 354 | 		input[type="password"],
 355 | 		select {
 356 | 			line-height: 1.25em;
 357 | 		}
 358 | 
 359 | 		textarea {
 360 | 			min-height: 14em;
 361 | 		}
 362 | 
 363 | 		.formerize-placeholder {
 364 | 			color: #555 !important;
 365 | 		}
 366 | 
 367 | 		::-webkit-input-placeholder {
 368 | 			color: #555 !important;
 369 | 		}
 370 | 
 371 | 		:-moz-placeholder {
 372 | 			color: #555 !important;
 373 | 		}
 374 | 
 375 | 		::-moz-placeholder {
 376 | 			color: #555 !important;
 377 | 		}
 378 | 
 379 | 		:-ms-input-placeholder {
 380 | 			color: #555 !important;
 381 | 		}
 382 | 
 383 | 		::-moz-focus-inner {
 384 | 			border: 0;
 385 | 		}
 386 | 	}
 387 | 
 388 | /* Table */
 389 | 
 390 | 	table {
 391 | 		width: 100%;
 392 | 		text-align: left;
 393 | 
 394 | 		tbody {
 395 | 			tr {
 396 | 				&:nth-child(2n+2) {
 397 | 					background: #f4f4f4;
 398 | 				}
 399 | 			}
 400 | 		}
 401 | 
 402 | 		td {
 403 | 			padding: 0.5em 1em 0.5em 1em;
 404 | 		}
 405 | 
 406 | 		th {
 407 | 			text-align: left;
 408 | 			padding: 0.5em 1em 0.5em 1em;
 409 | 			color: #fff;
 410 | 			background: #222729 url('images/overlay.png');
 411 | 		}
 412 | 
 413 | 		thead {
 414 | 			background: #444;
 415 | 			color: #fff;
 416 | 		}
 417 | 
 418 | 		tfoot {
 419 | 			background: #eee;
 420 | 		}
 421 | 	}
 422 | 
 423 | /* Button */
 424 | 
 425 | 	input[type="button"],
 426 | 	input[type="submit"],
 427 | 	input[type="reset"],
 428 | 	button,
 429 | 	.button {
 430 | 		position: relative;
 431 | 		display: inline-block;
 432 | 		border-radius: 0.35em;
 433 | 		color: #fff !important;
 434 | 		text-decoration: none;
 435 | 		padding: 0.75em 2.5em 0.75em 2.5em;
 436 | 		background-color: #8ebebc;
 437 | 		border: 0;
 438 | 		cursor: pointer;
 439 | 		@include vendor('background-image', ('linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.15))', 'url("images/overlay.png")'));
 440 | 		@include vendor('transition', 'background-color 0.35s ease-in-out');
 441 | 
 442 | 		&:hover {
 443 | 			background-color: #9ececc;
 444 | 		}
 445 | 
 446 | 		&:active {
 447 | 			background-color: #7eaeac;
 448 | 		}
 449 | 	}
 450 | 
 451 | /* Item */
 452 | 
 453 | 	.item {
 454 | 		box-shadow: 0 0.05em 0.15em 0 rgba(0, 0, 0, 0.05);
 455 | 		margin-bottom: 40px;
 456 | 
 457 | 		header {
 458 | 			color: #666;
 459 | 			text-align: center;
 460 | 			background: #fff;
 461 | 			margin: 0;
 462 | 			padding: 1em;
 463 | 			font-size: 0.8em;
 464 | 
 465 | 			h3 {
 466 | 				font-size: 1em;
 467 | 			}
 468 | 		}
 469 | 	}
 470 | 
 471 | /* Icons */
 472 | 
 473 | 	.icon {
 474 | 		@include icon(before);
 475 | 	}
 476 | 
 477 | 	.icon-r {
 478 | 		@include icon(before, regular);
 479 | 	}
 480 | 
 481 | 	.icon-b {
 482 | 		@include icon(before, brands);
 483 | 	}
 484 | 
 485 | /* Header */
 486 | 
 487 | 	#header {
 488 | 		@include vendor('display', 'flex');
 489 | 		@include vendor('flex-direction', 'column');
 490 | 		@include vendor('justify-content', 'space-between');
 491 | 		background: #222629 url('images/overlay.png');
 492 | 		box-shadow: inset -0.25em 0 0.25em 0 rgba(0, 0, 0, 0.1);
 493 | 		color: #fff;
 494 | 		height: 100%;
 495 | 		left: 0;
 496 | 		overflow-y: auto;
 497 | 		position: fixed;
 498 | 		text-align: right;
 499 | 		top: 0;
 500 | 		width: 375px;
 501 | 
 502 | 		.top {
 503 | 			@include vendor('flex-grow', '1');
 504 | 		}
 505 | 
 506 | 		.bottom {
 507 | 			@include vendor('flex-shrink', '0');
 508 | 			padding: 1.5em 0 0.75em 0;
 509 | 
 510 | 			> :last-child {
 511 | 				margin-bottom: 0;
 512 | 			}
 513 | 		}
 514 | 
 515 | 		.icons {
 516 | 			font-size: 0.8em;
 517 | 			text-align: center;
 518 | 
 519 | 			a {
 520 | 				color: #41484c;
 521 | 				@include vendor('transition', 'color 0.35s ease-in-out');
 522 | 
 523 | 				&:hover {
 524 | 					color: #fff;
 525 | 				}
 526 | 			}
 527 | 		}
 528 | 	}
 529 | 
 530 | 	#logo {
 531 | 		position: relative;
 532 | 		margin: 1.75em 1.5em 1.5em 1.5em;
 533 | 		min-height: 48px;
 534 | 		cursor: default;
 535 | 
 536 | 		a {
 537 | 			border: 0;
 538 | 		}
 539 | 
 540 | 		h1 {
 541 | 			position: relative;
 542 | 			color: #fff;
 543 | 			font-weight: 600;
 544 | 			font-size: 1em;
 545 | 			line-height: 1em;
 546 | 		}
 547 | 
 548 | 		p {
 549 | 			position: relative;
 550 | 			display: block;
 551 | 			font-size: 0.6em;
 552 | 			color: rgba(255, 255, 255, 0.5);
 553 | 			line-height: 1.25em;
 554 | 			margin: 0.5em 0 0 0;
 555 | 		}
 556 | 
 557 | 		.image {
 558 | 			position: absolute;
 559 | 			left: 0;
 560 | 			top: 0;
 561 | 		}
 562 | 	}
 563 | 
 564 | 	#nav {
 565 | 		ul {
 566 | 			list-style: none;
 567 | 			margin-bottom: 0;
 568 | 			hr {
 569 | 				margin: auto 1.5em;
 570 | 			}
 571 | 
 572 | 			li {
 573 | 				a {
 574 | 					display: block;
 575 | 					padding: 0.5em 1.5em 0.5em 1.5em;
 576 | 					color: rgba(255, 255, 255, 0.5);
 577 | 					text-decoration: none;
 578 | 					outline: 0;
 579 | 					border: 0;
 580 | 					@include vendor('transition', 'none');
 581 | 
 582 | 					span {
 583 | 						position: relative;
 584 | 						display: block;
 585 | 						font-size: 0.8em;
 586 | 
 587 | 						&::before {
 588 | 							position: absolute;
 589 | 							left: 0;
 590 | 							color: #41484c;
 591 | 							text-align: center;
 592 | 							width: 1.25em;
 593 | 							line-height: 1.75em;
 594 | 						}
 595 | 					}
 596 | 
 597 | 					&.active {
 598 | 						background: rgba(0, 0, 0, 0.15);
 599 | 						box-shadow: inset 0 0 0.25em 0 rgba(0, 0, 0, 0.125);
 600 | 						color: #fff;
 601 | 
 602 | 						span::before {
 603 | 							color: #e27689;
 604 | 						}
 605 | 					}
 606 | 				}
 607 | 			}
 608 | 		}
 609 | 	}
 610 | 
 611 | /* Footer */
 612 | 
 613 | 	#footer {
 614 | 		margin-left: 375px;
 615 | 		text-align: center;
 616 | 		background-color: #dce3e2;
 617 | 		padding: 3em 0 4em 0;
 618 | 		box-shadow: inset 0 1px 0 0 rgba(0, 0, 0, 0.05), inset 0 0.1em 0.1em 0 rgba(0, 0, 0, 0.025);
 619 | 		font-size: 0.8em;
 620 | 
 621 | 		.copyright {
 622 | 			cursor: default;
 623 | 			margin: 0;
 624 | 
 625 | 			li {
 626 | 				display: inline-block;
 627 | 				line-height: 1em;
 628 | 				border-left: solid 1px rgba(128, 128, 128, 0.35);
 629 | 				padding: 0 0 0 0.5em;
 630 | 				margin: 0 0 0 0.5em;
 631 | 
 632 | 				&:first-child {
 633 | 					border-left: 0;
 634 | 					padding-left: 0;
 635 | 					margin-left: 0;
 636 | 				}
 637 | 			}
 638 | 		}
 639 | 	}
 640 | 
 641 | /* Main */
 642 | 
 643 | 	#main {
 644 | 		margin-left: 375px;
 645 | 		> section {
 646 | 			text-align: center;
 647 | 		}
 648 | 		> article {
 649 | 			text-align: left;
 650 | 			header {
 651 | 				p {
 652 | 					font-style: italic;
 653 | 				}
 654 | 			}
 655 | 		}
 656 | 		> section, article {
 657 | 			margin: 0;
 658 | 			overflow: hidden;
 659 | 			padding: 4em 0;
 660 | 			box-shadow: inset 0 1px 0 0 rgba(0, 0, 0, 0.05), inset 0 0.1em 0.1em 0 rgba(0, 0, 0, 0.025);
 661 | 			background-image: url('images/overlay.png');
 662 | 
 663 | 			&.dark {
 664 | 				color: #ddd;
 665 | 				color: rgba(255, 255, 255, 0.75);
 666 | 
 667 | 				h2, h3, h4, h5, h6 {
 668 | 					color: inherit;
 669 | 				}
 670 | 
 671 | 				strong {
 672 | 					color: #fff;
 673 | 					border-color: inherit;
 674 | 				}
 675 | 
 676 | 				a {
 677 | 					color: #fff;
 678 | 					border-color: inherit;
 679 | 
 680 | 					&:hover {
 681 | 						border-bottom-color: rgba(255, 255, 255, 0);
 682 | 					}
 683 | 				}
 684 | 			}
 685 | 
 686 | 			&.cover {
 687 | 				padding: 6em 0;
 688 | 				position: relative;
 689 | 				z-index: 0;
 690 | 				img.back {
 691 | 					position: absolute;
 692 | 					object-fit: cover;
 693 | 					width: 100%;
 694 | 					height: 100%;
 695 | 					left: 0;
 696 | 					top: 0;
 697 | 					z-index: -1;
 698 | 				}
 699 | 			}
 700 | 
 701 | 			&.shade-one {
 702 | 				background-color: #81918E;
 703 | 			}
 704 | 
 705 | 			&.shade-two {
 706 | 				background-color: #f5fafa;
 707 | 			}
 708 | 
 709 | 			&.shade-three {
 710 | 				background-color: #ecf1f1;
 711 | 			}
 712 | 
 713 | 			&.shade-four {
 714 | 				background-color: #e8edec;
 715 | 			}
 716 | 		}
 717 | 	}
 718 | 
 719 | /* Wide */
 720 | 
 721 | 	@include breakpoint(wide) {
 722 | 
 723 | 		/* Basic */
 724 | 
 725 | 			body, input, textarea, select {
 726 | 				font-size: 17pt;
 727 | 			}
 728 | 
 729 | 		/* Header */
 730 | 
 731 | 			#header {
 732 | 				width: 300px;
 733 | 			}
 734 | 
 735 | 		/* Footer */
 736 | 
 737 | 			#footer {
 738 | 				margin-left: 300px;
 739 | 			}
 740 | 
 741 | 		/* Main */
 742 | 
 743 | 			#main {
 744 | 				margin-left: 300px;
 745 | 			}
 746 | 
 747 | 	}
 748 | 
 749 | /* Normal */
 750 | 
 751 | 	@include breakpoint(normal) {
 752 | 
 753 | 		/* Main */
 754 | 
 755 | 			#main {
 756 | 				> section, article {
 757 | 					padding: 3em 0;
 758 | 				}
 759 | 
 760 | 				section {
 761 | 					&.cover {
 762 | 						padding: 5em 0;
 763 | 					}
 764 | 				}
 765 | 			}
 766 | 
 767 | 		/* Header */
 768 | 			#nav {
 769 | 				ul {
 770 | 					hr {
 771 | 						margin: auto 1.25em;
 772 | 					}
 773 | 				}
 774 | 			}
 775 | 	}
 776 | 
 777 | /* Narrow */
 778 | 
 779 | 	@include breakpoint(narrow) {
 780 | 
 781 | 		/* Basic */
 782 | 
 783 | 			body, input, textarea, select {
 784 | 				font-size: 16pt;
 785 | 			}
 786 | 
 787 | 			.container {
 788 | 				padding: 0 2em 0 2em;
 789 | 			}
 790 | 
 791 | 		/* List */
 792 | 
 793 | 			ul {
 794 | 				&.icons {
 795 | 					li {
 796 | 						a {
 797 | 							width: 1.75em;
 798 | 						}
 799 | 					}
 800 | 				}
 801 | 			}
 802 | 
 803 | 		/* Item */
 804 | 
 805 | 			.item {
 806 | 				margin-bottom: 20px;
 807 | 			}
 808 | 
 809 | 		/* Header */
 810 | 
 811 | 			#header {
 812 | 				width: 20%;
 813 | 			}
 814 | 
 815 | 			#logo {
 816 | 				.image {
 817 | 					position: relative;
 818 | 					margin: 0 0 0.5em 0;
 819 | 				}
 820 | 			}
 821 | 
 822 | 			#nav {
 823 | 				ul {
 824 | 					list-style: none;
 825 | 					li {
 826 | 						a {
 827 | 							font-size: 0.8em;
 828 | 							padding-top: 0.5em;
 829 | 							padding-bottom: 0.5em;
 830 | 
 831 | 							span {
 832 | 								padding-right: 2.25em;
 833 | 
 834 | 								&::before {
 835 | 									left: 100%;
 836 | 									margin-left: -1.25em;
 837 | 									line-height: 2.25em;
 838 | 								}
 839 | 							}
 840 | 						}
 841 | 					}
 842 | 				}
 843 | 			}
 844 | 
 845 | 		/* Footer */
 846 | 
 847 | 			#footer {
 848 | 				margin-left: 20%;
 849 | 			}
 850 | 
 851 | 		/* Main */
 852 | 
 853 | 			#main {
 854 | 				margin-left: 20%;
 855 | 			}
 856 | 
 857 | 	}
 858 | 
 859 | /* Narrower */
 860 | 
 861 | 	#headerToggle {
 862 | 		display: none;
 863 | 	}
 864 | 
 865 | 	@include breakpoint(narrower) {
 866 | 
 867 | 		/* Basic */
 868 | 
 869 | 			html, body {
 870 | 				overflow-x: hidden;
 871 | 			}
 872 | 
 873 | 			body, input, textarea, select {
 874 | 				font-size: 16pt;
 875 | 			}
 876 | 
 877 | 			header {
 878 | 				br {
 879 | 					display: none;
 880 | 				}
 881 | 
 882 | 			}
 883 | 
 884 | 			.container {
 885 | 				padding: 0 2em 0 2em;
 886 | 			}
 887 | 
 888 | 		/* Item */
 889 | 
 890 | 			.item {
 891 | 				margin-bottom: 15px;
 892 | 			}
 893 | 
 894 | 		/* List */
 895 | 
 896 | 			ul {
 897 | 				&.icons {
 898 | 					a {
 899 | 						width: 1.75em;
 900 | 						font-size: 1.25em;
 901 | 					}
 902 | 				}
 903 | 			}
 904 | 
 905 | 		/* Header */
 906 | 
 907 | 			#header {
 908 | 				@include vendor('backface-visibility', 'hidden');
 909 | 				@include vendor('transform', 'translateX(#{_size(header) * -1})');
 910 | 				@include vendor('transition', ('transform #{_duration(header)} ease'));
 911 | 				-webkit-overflow-scrolling: touch;
 912 | 				display: block;
 913 | 				height: 100%;
 914 | 				left: 0;
 915 | 				overflow-y: auto;
 916 | 				position: fixed;
 917 | 				top: 0;
 918 | 				width: _size(header);
 919 | 				z-index: _misc(z-index-base) + 2;
 920 | 				width: _size(header);
 921 | 				background: #222729 url('images/overlay.png');
 922 | 				box-shadow: inset -0.25em 0 0.25em 0 rgba(0, 0, 0, 0.125);
 923 | 
 924 | 				.top {
 925 | 					position: relative;
 926 | 				}
 927 | 
 928 | 				.bottom {
 929 | 					border-top: solid 1px rgba(255, 255, 255, 0.05);
 930 | 					box-shadow: 0 -1px 0 0 rgba(0, 0, 0, 0.15);
 931 | 					padding-top: 2em;
 932 | 					margin-top: 2em;
 933 | 					position: relative;
 934 | 				}
 935 | 			}
 936 | 
 937 | 			#logo {
 938 | 				margin: 1.5em 1.25em 1.25em 1.25em;
 939 | 			}
 940 | 
 941 | 			#nav {
 942 | 				ul {
 943 | 					list-style: none;
 944 | 					hr {
 945 | 						margin: auto 1.25em;
 946 | 					}
 947 | 					li {
 948 | 						a {
 949 | 							padding: 0.5em 1.25em 0.5em 1.25em;
 950 | 						}
 951 | 					}
 952 | 				}
 953 | 			}
 954 | 
 955 | 			#headerToggle {
 956 | 				@include vendor('backface-visibility', 'hidden');
 957 | 				@include vendor('transition', 'transform #{_duration(header)} ease');
 958 | 				display: block;
 959 | 				height: 2.25em;
 960 | 				left: 0;
 961 | 				position: fixed;
 962 | 				top: 0;
 963 | 				width: 3.25em;
 964 | 				z-index: _misc(z-index-base) + 1;
 965 | 
 966 | 				.toggle {
 967 | 					position: absolute;
 968 | 					left: 0;
 969 | 					top: 0;
 970 | 					width: 100%;
 971 | 					height: 100%;
 972 | 					outline: 0;
 973 | 					border: 0;
 974 | 
 975 | 					&::before {
 976 | 						font-family: "Font Awesome 5 Free";
 977 | 						text-decoration: none;
 978 | 						font-style: normal;
 979 | 						font-weight: 900;
 980 | 						-webkit-font-smoothing: antialiased;
 981 | 						-moz-osx-font-smoothing: grayscale;
 982 | 						content: '\f0c9';
 983 | 						color: #fff;
 984 | 						font-size: 18px;
 985 | 						line-height: 2.25em;
 986 | 						background: rgba(128, 136, 144, 0.5);
 987 | 						border-radius: 0.35em;
 988 | 						text-align: center;
 989 | 						position: absolute;
 990 | 						left: 0.5em;
 991 | 						top: 0.5em;
 992 | 						display: block;
 993 | 						width: 3.25em;
 994 | 						height: 2.25em;
 995 | 						line-height: 2.25em;
 996 | 					}
 997 | 				}
 998 | 			}
 999 | 
1000 | 			body {
1001 | 				&.header-visible {
1002 | 					#main {
1003 | 						@include vendor('transform', 'translateX(#{_size(header)})');
1004 | 					}
1005 | 
1006 | 					#headerToggle {
1007 | 						@include vendor('transform', 'translateX(#{_size(header)})');
1008 | 					}
1009 | 
1010 | 					#header {
1011 | 						@include vendor('transform', 'translateX(0)');
1012 | 					}
1013 | 				}
1014 | 			}
1015 | 
1016 | 		/* Footer */
1017 | 
1018 | 			#footer {
1019 | 				margin-left: 0;
1020 | 			}
1021 | 
1022 | 		/* Main */
1023 | 
1024 | 			#main {
1025 | 				@include vendor('backface-visibility', 'hidden');
1026 | 				@include vendor('transition', 'transform #{_duration(header)} ease');
1027 | 				padding-bottom: 1px;
1028 | 				margin-left: 0;
1029 | 
1030 | 				> section, article {
1031 | 					padding: 3em 0;
1032 | 				}
1033 | 
1034 | 				section {
1035 | 					&.cover {
1036 | 						padding: 4em 0;
1037 | 					}
1038 | 				}
1039 | 			}
1040 | 	}
1041 | 
1042 | /* Mobile */
1043 | 
1044 | 	@include breakpoint(mobile) {
1045 | 
1046 | 		/* Basic */
1047 | 
1048 | 			body, input, textarea, select {
1049 | 				font-size: 14pt;
1050 | 			}
1051 | 
1052 | 			h2 {
1053 | 				font-size: 1.5em;
1054 | 				letter-spacing: 0;
1055 | 				font-weight: 300;
1056 | 			}
1057 | 
1058 | 			.container {
1059 | 				padding: 0 15px 0 15px;
1060 | 			}
1061 | 
1062 | 		/* List */
1063 | 
1064 | 			ul {
1065 | 				&.icons {
1066 | 					a {
1067 | 						width: 2em;
1068 | 						font-size: 1.25em;
1069 | 					}
1070 | 				}
1071 | 			}
1072 | 
1073 | 		/* Main */
1074 | 
1075 | 			#main {
1076 | 				> section, article {
1077 | 					padding: 2em 0;
1078 | 				}
1079 | 
1080 | 				section {
1081 | 					&.cover {
1082 | 						padding: 4em 0em;
1083 | 
1084 | 						header {
1085 | 							padding: 0 1em;
1086 | 						}
1087 | 					}
1088 | 				}
1089 | 			}
1090 | 
1091 | 		/* Footer */
1092 | 
1093 | 			#footer {
1094 | 				.copyright {
1095 | 					li {
1096 | 						display: block;
1097 | 						line-height: 1.25em;
1098 | 						border: 0;
1099 | 						padding: 0;
1100 | 						margin: 1em 0 0 0;
1101 | 
1102 | 						&:first-child {
1103 | 							margin-top: 0;
1104 | 						}
1105 | 					}
1106 | 				}
1107 | 			}
1108 | 
1109 | 	}


--------------------------------------------------------------------------------
/_sass/libs/_functions.scss:
--------------------------------------------------------------------------------
 1 | /// Gets a duration value.
 2 | /// @param {string} $keys Key(s).
 3 | /// @return {string} Value.
 4 | @function _duration($keys...) {
 5 | 	@return val($duration, $keys...);
 6 | }
 7 | 
 8 | /// Gets a font value.
 9 | /// @param {string} $keys Key(s).
10 | /// @return {string} Value.
11 | @function _font($keys...) {
12 | 	@return val($font, $keys...);
13 | }
14 | 
15 | /// Gets a misc value.
16 | /// @param {string} $keys Key(s).
17 | /// @return {string} Value.
18 | @function _misc($keys...) {
19 | 	@return val($misc, $keys...);
20 | }
21 | 
22 | /// Gets a palette value.
23 | /// @param {string} $keys Key(s).
24 | /// @return {string} Value.
25 | @function _palette($keys...) {
26 | 	@return val($palette, $keys...);
27 | }
28 | 
29 | /// Gets a size value.
30 | /// @param {string} $keys Key(s).
31 | /// @return {string} Value.
32 | @function _size($keys...) {
33 | 	@return val($size, $keys...);
34 | }


--------------------------------------------------------------------------------
/_sass/libs/_mixins.scss:
--------------------------------------------------------------------------------
  1 | /// Makes an element's ::before pseudoelement a FontAwesome icon.
  2 | /// @param {string} $where Optional pseudoelement to target (before or after).
  3 | /// @param {string} $style Which font to use (solid, regular, or brands).
  4 | /// @param {string} $content Optional content value to use.
  5 | @mixin icon($where: before, $style: solid, $content: false) {
  6 | 
  7 | 	text-decoration: none;
  8 | 
  9 | 	&::#{$where} {
 10 | 
 11 | 		@if $content {
 12 | 			content: $content;
 13 | 		}
 14 | 
 15 | 		@if $style == brands {
 16 | 			font-family: "Font Awesome 5 Brands";
 17 | 		}
 18 | 		@else {
 19 | 			font-family: "Font Awesome 5 Free";
 20 | 		}
 21 | 
 22 | 		@if $style == regular {
 23 | 			font-weight: 400;
 24 | 		}
 25 | 		@else {
 26 | 			font-weight: 900;
 27 | 		}
 28 | 
 29 | 		display: inline-block;
 30 | 		font-size: 1.25em;
 31 | 		text-decoration: none;
 32 | 		font-style: normal;
 33 | 		line-height: 1;
 34 | 		-webkit-font-smoothing: antialiased;
 35 | 		-moz-osx-font-smoothing: grayscale;
 36 | 	}
 37 | 
 38 | 	> .label {
 39 | 		display: none;
 40 | 	}
 41 | }
 42 | 
 43 | /// Applies padding to an element, taking the current element-margin value into account.
 44 | /// @param {mixed} $tb Top/bottom padding.
 45 | /// @param {mixed} $lr Left/right padding.
 46 | /// @param {list} $pad Optional extra padding (in the following order top, right, bottom, left)
 47 | /// @param {bool} $important If true, adds !important.
 48 | @mixin padding($tb, $lr, $pad: (0,0,0,0), $important: null) {
 49 | 
 50 | 	@if $important {
 51 | 		$important: '!important';
 52 | 	}
 53 | 
 54 | 	$x: 0.1em;
 55 | 
 56 | 	@if unit(_size(element-margin)) == 'rem' {
 57 | 		$x: 0.1rem;
 58 | 	}
 59 | 
 60 | 	padding: ($tb + nth($pad,1)) ($lr + nth($pad,2)) max($x, $tb - _size(element-margin) + nth($pad,3)) ($lr + nth($pad,4)) #{$important};
 61 | 
 62 | }
 63 | 
 64 | /// Encodes a SVG data URL so IE doesn't choke (via codepen.io/jakob-e/pen/YXXBrp).
 65 | /// @param {string} $svg SVG data URL.
 66 | /// @return {string} Encoded SVG data URL.
 67 | @function svg-url($svg) {
 68 | 
 69 | 	$svg: str-replace($svg, '"', '\'');
 70 | 	$svg: str-replace($svg, '%', '%25');
 71 | 	$svg: str-replace($svg, '<', '%3C');
 72 | 	$svg: str-replace($svg, '>', '%3E');
 73 | 	$svg: str-replace($svg, '&', '%26');
 74 | 	$svg: str-replace($svg, '#', '%23');
 75 | 	$svg: str-replace($svg, '{', '%7B');
 76 | 	$svg: str-replace($svg, '}', '%7D');
 77 | 	$svg: str-replace($svg, ';', '%3B');
 78 | 
 79 | 	@return url("data:image/svg+xml;charset=utf8,#{$svg}");
 80 | 
 81 | }
 82 | 
 83 | /// Initializes base flexgrid classes.
 84 | /// @param {string} $vertical-align Vertical alignment of cells.
 85 | /// @param {string} $horizontal-align Horizontal alignment of cells.
 86 | @mixin flexgrid-base($vertical-align: null, $horizontal-align: null) {
 87 | 
 88 | 	// Grid.
 89 | 		@include vendor('display', 'flex');
 90 | 		@include vendor('flex-wrap', 'wrap');
 91 | 
 92 | 		// Vertical alignment.
 93 | 			@if ($vertical-align == top) {
 94 | 				@include vendor('align-items', 'flex-start');
 95 | 			}
 96 | 			@else if ($vertical-align == bottom) {
 97 | 				@include vendor('align-items', 'flex-end');
 98 | 			}
 99 | 			@else if ($vertical-align == center) {
100 | 				@include vendor('align-items', 'center');
101 | 			}
102 | 			@else {
103 | 				@include vendor('align-items', 'stretch');
104 | 			}
105 | 
106 | 		// Horizontal alignment.
107 | 			@if ($horizontal-align != null) {
108 | 				text-align: $horizontal-align;
109 | 			}
110 | 
111 | 	// Cells.
112 | 		> * {
113 | 			@include vendor('flex-shrink', '1');
114 | 			@include vendor('flex-grow', '0');
115 | 		}
116 | 
117 | }
118 | 
119 | /// Sets up flexgrid columns.
120 | /// @param {integer} $columns Columns.
121 | @mixin flexgrid-columns($columns) {
122 | 
123 | 	> * {
124 | 		$cell-width: 100% / $columns;
125 | 		width: #{$cell-width};
126 | 	}
127 | 
128 | }
129 | 
130 | /// Sets up flexgrid gutters.
131 | /// @param {integer} $columns Columns.
132 | /// @param {number} $gutters Gutters.
133 | @mixin flexgrid-gutters($columns, $gutters) {
134 | 
135 | 	// Apply padding.
136 | 		> * {
137 | 			$cell-width: 100% / $columns;
138 | 
139 | 			padding: ($gutters * 0.5);
140 | 			width: $cell-width;
141 | 		}
142 | 
143 | }
144 | 
145 | /// Sets up flexgrid gutters (flush).
146 | /// @param {integer} $columns Columns.
147 | /// @param {number} $gutters Gutters.
148 | @mixin flexgrid-gutters-flush($columns, $gutters) {
149 | 
150 | 	// Apply padding.
151 | 		> * {
152 | 			$cell-width: 100% / $columns;
153 | 			$cell-width-pad: $gutters / $columns;
154 | 
155 | 			padding: ($gutters * 0.5);
156 | 			width: calc(#{$cell-width} + #{$cell-width-pad});
157 | 		}
158 | 
159 | 	// Clear top/bottom gutters.
160 | 		> :nth-child(-n + #{$columns}) {
161 | 			padding-top: 0;
162 | 		}
163 | 
164 | 		> :nth-last-child(-n + #{$columns}) {
165 | 			padding-bottom: 0;
166 | 		}
167 | 
168 | 	// Clear left/right gutters.
169 | 		> :nth-child(#{$columns}n + 1) {
170 | 			padding-left: 0;
171 | 		}
172 | 
173 | 		> :nth-child(#{$columns}n) {
174 | 			padding-right: 0;
175 | 		}
176 | 
177 | 	// Adjust widths of leftmost and rightmost cells.
178 | 		> :nth-child(#{$columns}n + 1),
179 | 		> :nth-child(#{$columns}n) {
180 | 			$cell-width: 100% / $columns;
181 | 			$cell-width-pad: ($gutters / $columns) - ($gutters / 2);
182 | 
183 | 			width: calc(#{$cell-width} + #{$cell-width-pad});
184 | 		}
185 | 
186 | }
187 | 
188 | /// Reset flexgrid gutters (flush only).
189 | /// Used to override a previous set of flexgrid gutter classes.
190 | /// @param {integer} $columns Columns.
191 | /// @param {number} $gutters Gutters.
192 | /// @param {integer} $prev-columns Previous columns.
193 | @mixin flexgrid-gutters-flush-reset($columns, $gutters, $prev-columns) {
194 | 
195 | 	// Apply padding.
196 | 		> * {
197 | 			$cell-width: 100% / $prev-columns;
198 | 			$cell-width-pad: $gutters / $prev-columns;
199 | 
200 | 			padding: ($gutters * 0.5);
201 | 			width: calc(#{$cell-width} + #{$cell-width-pad});
202 | 		}
203 | 
204 | 	// Clear top/bottom gutters.
205 | 		> :nth-child(-n + #{$prev-columns}) {
206 | 			padding-top: ($gutters * 0.5);
207 | 		}
208 | 
209 | 		> :nth-last-child(-n + #{$prev-columns}) {
210 | 			padding-bottom: ($gutters * 0.5);
211 | 		}
212 | 
213 | 	// Clear left/right gutters.
214 | 		> :nth-child(#{$prev-columns}n + 1) {
215 | 			padding-left: ($gutters * 0.5);
216 | 		}
217 | 
218 | 		> :nth-child(#{$prev-columns}n) {
219 | 			padding-right: ($gutters * 0.5);
220 | 		}
221 | 
222 | 	// Adjust widths of leftmost and rightmost cells.
223 | 		> :nth-child(#{$prev-columns}n + 1),
224 | 		> :nth-child(#{$prev-columns}n) {
225 | 			$cell-width: 100% / $columns;
226 | 			$cell-width-pad: $gutters / $columns;
227 | 
228 | 			padding: ($gutters * 0.5);
229 | 			width: calc(#{$cell-width} + #{$cell-width-pad});
230 | 		}
231 | 
232 | }
233 | 
234 | /// Adds debug styles to current flexgrid element.
235 | @mixin flexgrid-debug() {
236 | 
237 | 	box-shadow: 0 0 0 1px red;
238 | 
239 | 	> * {
240 | 		box-shadow: inset 0 0 0 1px blue;
241 | 		position: relative;
242 | 
243 | 		> * {
244 | 			position: relative;
245 | 			box-shadow: inset 0 0 0 1px green;
246 | 		}
247 | 	}
248 | 
249 | }
250 | 
251 | /// Initializes the current element as a flexgrid.
252 | /// @param {integer} $columns Columns (optional).
253 | /// @param {number} $gutters Gutters (optional).
254 | /// @param {bool} $flush If true, clears padding around the very edge of the grid.
255 | @mixin flexgrid($settings: ()) {
256 | 
257 | 	// Settings.
258 | 
259 | 		// Debug.
260 | 			$debug: false;
261 | 
262 | 			@if (map-has-key($settings, 'debug')) {
263 | 				$debug: map-get($settings, 'debug');
264 | 			}
265 | 
266 | 		// Vertical align.
267 | 			$vertical-align: null;
268 | 
269 | 			@if (map-has-key($settings, 'vertical-align')) {
270 | 				$vertical-align: map-get($settings, 'vertical-align');
271 | 			}
272 | 
273 | 		// Horizontal align.
274 | 			$horizontal-align: null;
275 | 
276 | 			@if (map-has-key($settings, 'horizontal-align')) {
277 | 				$horizontal-align: map-get($settings, 'horizontal-align');
278 | 			}
279 | 
280 | 		// Columns.
281 | 			$columns: null;
282 | 
283 | 			@if (map-has-key($settings, 'columns')) {
284 | 				$columns: map-get($settings, 'columns');
285 | 			}
286 | 
287 | 		// Gutters.
288 | 			$gutters: 0;
289 | 
290 | 			@if (map-has-key($settings, 'gutters')) {
291 | 				$gutters: map-get($settings, 'gutters');
292 | 			}
293 | 
294 | 		// Flush.
295 | 			$flush: true;
296 | 
297 | 			@if (map-has-key($settings, 'flush')) {
298 | 				$flush: map-get($settings, 'flush');
299 | 			}
300 | 
301 | 	// Initialize base grid.
302 | 		@include flexgrid-base($vertical-align, $horizontal-align);
303 | 
304 | 	// Debug?
305 | 		@if ($debug) {
306 | 			@include flexgrid-debug;
307 | 		}
308 | 
309 | 	// Columns specified?
310 | 		@if ($columns != null) {
311 | 
312 | 			// Initialize columns.
313 | 				@include flexgrid-columns($columns);
314 | 
315 | 			// Gutters specified?
316 | 				@if ($gutters > 0) {
317 | 
318 | 					// Flush gutters?
319 | 						@if ($flush) {
320 | 
321 | 							// Initialize gutters (flush).
322 | 								@include flexgrid-gutters-flush($columns, $gutters);
323 | 
324 | 						}
325 | 
326 | 					// Otherwise ...
327 | 						@else {
328 | 
329 | 							// Initialize gutters.
330 | 								@include flexgrid-gutters($columns, $gutters);
331 | 
332 | 						}
333 | 
334 | 				}
335 | 
336 | 		}
337 | 
338 | }
339 | 
340 | /// Resizes a previously-initialized grid.
341 | /// @param {integer} $columns Columns.
342 | /// @param {number} $gutters Gutters (optional).
343 | /// @param {list} $reset A list of previously-initialized grid columns (only if $flush is true).
344 | /// @param {bool} $flush If true, clears padding around the very edge of the grid.
345 | @mixin flexgrid-resize($settings: ()) {
346 | 
347 | 	// Settings.
348 | 
349 | 		// Columns.
350 | 			$columns: 1;
351 | 
352 | 			@if (map-has-key($settings, 'columns')) {
353 | 				$columns: map-get($settings, 'columns');
354 | 			}
355 | 
356 | 		// Gutters.
357 | 			$gutters: 0;
358 | 
359 | 			@if (map-has-key($settings, 'gutters')) {
360 | 				$gutters: map-get($settings, 'gutters');
361 | 			}
362 | 
363 | 		// Previous columns.
364 | 			$prev-columns: false;
365 | 
366 | 			@if (map-has-key($settings, 'prev-columns')) {
367 | 				$prev-columns: map-get($settings, 'prev-columns');
368 | 			}
369 | 
370 | 		// Flush.
371 | 			$flush: true;
372 | 
373 | 			@if (map-has-key($settings, 'flush')) {
374 | 				$flush: map-get($settings, 'flush');
375 | 			}
376 | 
377 | 	// Resize columns.
378 | 		@include flexgrid-columns($columns);
379 | 
380 | 	// Gutters specified?
381 | 		@if ($gutters > 0) {
382 | 
383 | 			// Flush gutters?
384 | 				@if ($flush) {
385 | 
386 | 					// Previous columns specified?
387 | 						@if ($prev-columns) {
388 | 
389 | 							// Convert to list if it isn't one already.
390 | 								@if (type-of($prev-columns) != list) {
391 | 									$prev-columns: ($prev-columns);
392 | 								}
393 | 
394 | 							// Step through list of previous columns and reset them.
395 | 								@each $x in $prev-columns {
396 | 									@include flexgrid-gutters-flush-reset($columns, $gutters, $x);
397 | 								}
398 | 
399 | 						}
400 | 
401 | 					// Resize gutters (flush).
402 | 						@include flexgrid-gutters-flush($columns, $gutters);
403 | 
404 | 				}
405 | 
406 | 			// Otherwise ...
407 | 				@else {
408 | 
409 | 					// Resize gutters.
410 | 						@include flexgrid-gutters($columns, $gutters);
411 | 
412 | 				}
413 | 
414 | 		}
415 | 
416 | }


--------------------------------------------------------------------------------
/_sass/libs/_skel.scss:
--------------------------------------------------------------------------------
  1 | // skel.scss v3.0.2-dev | (c) skel.io | MIT licensed */
  2 | 
  3 | // Vars.
  4 | 
  5 | 	/// Breakpoints.
  6 | 	/// @var {list}
  7 | 	$breakpoints: () !global;
  8 | 
  9 | 	/// Vendor prefixes.
 10 | 	/// @var {list}
 11 | 	$vendor-prefixes: (
 12 | 		'-moz-',
 13 | 		'-webkit-',
 14 | 		'-ms-',
 15 | 		''
 16 | 	);
 17 | 
 18 | 	/// Properties that should be vendorized.
 19 | 	/// @var {list}
 20 | 	$vendor-properties: (
 21 | 		'align-content',
 22 | 		'align-items',
 23 | 		'align-self',
 24 | 		'animation',
 25 | 		'animation-delay',
 26 | 		'animation-direction',
 27 | 		'animation-duration',
 28 | 		'animation-fill-mode',
 29 | 		'animation-iteration-count',
 30 | 		'animation-name',
 31 | 		'animation-play-state',
 32 | 		'animation-timing-function',
 33 | 		'appearance',
 34 | 		'backface-visibility',
 35 | 		'box-sizing',
 36 | 		'filter',
 37 | 		'flex',
 38 | 		'flex-basis',
 39 | 		'flex-direction',
 40 | 		'flex-flow',
 41 | 		'flex-grow',
 42 | 		'flex-shrink',
 43 | 		'flex-wrap',
 44 | 		'justify-content',
 45 | 		'object-fit',
 46 | 		'object-position',
 47 | 		'order',
 48 | 		'perspective',
 49 | 		'pointer-events',
 50 | 		'transform',
 51 | 		'transform-origin',
 52 | 		'transform-style',
 53 | 		'transition',
 54 | 		'transition-delay',
 55 | 		'transition-duration',
 56 | 		'transition-property',
 57 | 		'transition-timing-function',
 58 | 		'user-select'
 59 | 	);
 60 | 
 61 | 	/// Values that should be vendorized.
 62 | 	/// @var {list}
 63 | 	$vendor-values: (
 64 | 		'filter',
 65 | 		'flex',
 66 | 		'linear-gradient',
 67 | 		'radial-gradient',
 68 | 		'transform'
 69 | 	);
 70 | 
 71 | // Functions.
 72 | 
 73 | 	/// Removes a specific item from a list.
 74 | 	/// @author Hugo Giraudel
 75 | 	/// @param {list} $list List.
 76 | 	/// @param {integer} $index Index.
 77 | 	/// @return {list} Updated list.
 78 | 	@function remove-nth($list, $index) {
 79 | 
 80 | 		$result: null;
 81 | 
 82 | 		@if type-of($index) != number {
 83 | 			@warn "$index: #{quote($index)} is not a number for `remove-nth`.";
 84 | 		}
 85 | 		@else if $index == 0 {
 86 | 			@warn "List index 0 must be a non-zero integer for `remove-nth`.";
 87 | 		}
 88 | 		@else if abs($index) > length($list) {
 89 | 			@warn "List index is #{$index} but list is only #{length($list)} item long for `remove-nth`.";
 90 | 		}
 91 | 		@else {
 92 | 
 93 | 			$result: ();
 94 | 			$index: if($index < 0, length($list) + $index + 1, $index);
 95 | 
 96 | 			@for $i from 1 through length($list) {
 97 | 
 98 | 				@if $i != $index {
 99 | 					$result: append($result, nth($list, $i));
100 | 				}
101 | 
102 | 			}
103 | 
104 | 		}
105 | 
106 | 		@return $result;
107 | 
108 | 	}
109 | 
110 | 	/// Replaces a substring within another string.
111 | 	/// @author Hugo Giraudel
112 | 	/// @param {string} $string String.
113 | 	/// @param {string} $search Substring.
114 | 	/// @param {string} $replace Replacement.
115 | 	/// @return {string} Updated string.
116 | 	@function str-replace($string, $search, $replace: '') {
117 | 
118 | 		$index: str-index($string, $search);
119 | 
120 | 		@if $index {
121 | 			@return str-slice($string, 1, $index - 1) + $replace + str-replace(str-slice($string, $index + str-length($search)), $search, $replace);
122 | 		}
123 | 
124 | 		@return $string;
125 | 
126 | 	}
127 | 
128 | 	/// Replaces a substring within each string in a list.
129 | 	/// @param {list} $strings List of strings.
130 | 	/// @param {string} $search Substring.
131 | 	/// @param {string} $replace Replacement.
132 | 	/// @return {list} Updated list of strings.
133 | 	@function str-replace-all($strings, $search, $replace: '') {
134 | 
135 | 		@each $string in $strings {
136 | 			$strings: set-nth($strings, index($strings, $string), str-replace($string, $search, $replace));
137 | 		}
138 | 
139 | 		@return $strings;
140 | 
141 | 	}
142 | 
143 | 	/// Gets a value from a map.
144 | 	/// @author Hugo Giraudel
145 | 	/// @param {map} $map Map.
146 | 	/// @param {string} $keys Key(s).
147 | 	/// @return {string} Value.
148 | 	@function val($map, $keys...) {
149 | 
150 | 		@if nth($keys, 1) == null {
151 | 			$keys: remove-nth($keys, 1);
152 | 		}
153 | 
154 | 		@each $key in $keys {
155 | 			$map: map-get($map, $key);
156 | 		}
157 | 
158 | 		@return $map;
159 | 
160 | 	}
161 | 
162 | // Mixins.
163 | 
164 | 	/// Sets the global box model.
165 | 	/// @param {string} $model Model (default is content).
166 | 	@mixin boxModel($model: 'content') {
167 | 
168 | 		$x: $model + '-box';
169 | 
170 | 		*, *:before, *:after {
171 | 			-moz-box-sizing: #{$x};
172 | 			-webkit-box-sizing: #{$x};
173 | 			box-sizing: #{$x};
174 | 		}
175 | 
176 | 	}
177 | 
178 | 	/// Wraps @content in a @media block using a given breakpoint.
179 | 	/// @param {string} $breakpoint Breakpoint.
180 | 	/// @param {map} $queries Additional queries.
181 | 	@mixin breakpoint($breakpoint: null, $queries: null) {
182 | 
183 | 		$query: 'screen';
184 | 
185 | 		// Breakpoint.
186 | 			@if $breakpoint and map-has-key($breakpoints, $breakpoint) {
187 | 				$query: $query + ' and ' + map-get($breakpoints, $breakpoint);
188 | 			}
189 | 
190 | 		// Queries.
191 | 			@if $queries {
192 | 				@each $k, $v in $queries {
193 | 					$query: $query + ' and (' + $k + ':' + $v + ')';
194 | 				}
195 | 			}
196 | 
197 |         @media #{$query} {
198 |             @content;
199 |         }
200 | 
201 | 	}
202 | 
203 | 	/// Wraps @content in a @media block targeting a specific orientation.
204 | 	/// @param {string} $orientation Orientation.
205 | 	@mixin orientation($orientation) {
206 | 		@media screen and (orientation: #{$orientation}) {
207 | 			@content;
208 | 		}
209 | 	}
210 | 
211 | 	/// Utility mixin for containers.
212 | 	/// @param {mixed} $width Width.
213 | 	@mixin containers($width) {
214 | 
215 | 		// Locked?
216 | 			$lock: false;
217 | 
218 | 			@if length($width) == 2 {
219 | 				$width: nth($width, 1);
220 | 				$lock: true;
221 | 			}
222 | 
223 | 		// Modifiers.
224 | 			.container.\31 25\25		{ width: 100%; max-width: $width * 1.25; min-width: $width; }
225 | 			.container.\37 5\25			{ width: $width * 0.75; }
226 | 			.container.\35 0\25			{ width: $width * 0.5; }
227 | 			.container.\32 5\25			{ width: $width * 0.25; }
228 | 
229 | 		// Main class.
230 | 			.container {
231 | 				@if $lock {
232 | 					width: $width !important;
233 | 				}
234 | 				@else {
235 | 					width: $width;
236 | 				}
237 | 			}
238 | 
239 | 	}
240 | 
241 | 	/// Utility mixin for grid.
242 | 	/// @param {list} $gutters Column and row gutters (default is 40px).
243 | 	/// @param {string} $breakpointName Optional breakpoint name.
244 | 	@mixin grid($gutters: 40px, $breakpointName: null) {
245 | 
246 | 		// Gutters.
247 | 			@include grid-gutters($gutters);
248 | 			@include grid-gutters($gutters, \32 00\25, 2);
249 | 			@include grid-gutters($gutters, \31 50\25, 1.5);
250 | 			@include grid-gutters($gutters, \35 0\25, 0.5);
251 | 			@include grid-gutters($gutters, \32 5\25, 0.25);
252 | 
253 | 		// Cells.
254 | 			$x: '';
255 | 
256 | 			@if $breakpointName {
257 | 				$x: '\\28' + $breakpointName + '\\29';
258 | 			}
259 | 
260 | 			.\31 2u#{$x}, .\31 2u\24#{$x} { width: 100%; clear: none; margin-left: 0; }
261 | 			.\31 1u#{$x}, .\31 1u\24#{$x} { width: 91.6666666667%; clear: none; margin-left: 0; }
262 | 			.\31 0u#{$x}, .\31 0u\24#{$x} { width: 83.3333333333%; clear: none; margin-left: 0; }
263 | 			.\39 u#{$x}, .\39 u\24#{$x} { width: 75%; clear: none; margin-left: 0; }
264 | 			.\38 u#{$x}, .\38 u\24#{$x} { width: 66.6666666667%; clear: none; margin-left: 0; }
265 | 			.\37 u#{$x}, .\37 u\24#{$x} { width: 58.3333333333%; clear: none; margin-left: 0; }
266 | 			.\36 u#{$x}, .\36 u\24#{$x} { width: 50%; clear: none; margin-left: 0; }
267 | 			.\35 u#{$x}, .\35 u\24#{$x} { width: 41.6666666667%; clear: none; margin-left: 0; }
268 | 			.\34 u#{$x}, .\34 u\24#{$x} { width: 33.3333333333%; clear: none; margin-left: 0; }
269 | 			.\33 u#{$x}, .\33 u\24#{$x} { width: 25%; clear: none; margin-left: 0; }
270 | 			.\32 u#{$x}, .\32 u\24#{$x} { width: 16.6666666667%; clear: none; margin-left: 0; }
271 | 			.\31 u#{$x}, .\31 u\24#{$x} { width: 8.3333333333%; clear: none; margin-left: 0; }
272 | 
273 | 			.\31 2u\24#{$x} + *,
274 | 			.\31 1u\24#{$x} + *,
275 | 			.\31 0u\24#{$x} + *,
276 | 			.\39 u\24#{$x} + *,
277 | 			.\38 u\24#{$x} + *,
278 | 			.\37 u\24#{$x} + *,
279 | 			.\36 u\24#{$x} + *,
280 | 			.\35 u\24#{$x} + *,
281 | 			.\34 u\24#{$x} + *,
282 | 			.\33 u\24#{$x} + *,
283 | 			.\32 u\24#{$x} + *,
284 | 			.\31 u\24#{$x} + * {
285 | 				clear: left;
286 | 			}
287 | 
288 | 			.\-11u#{$x} { margin-left: 91.6666666667% }
289 | 			.\-10u#{$x} { margin-left: 83.3333333333% }
290 | 			.\-9u#{$x} { margin-left: 75% }
291 | 			.\-8u#{$x} { margin-left: 66.6666666667% }
292 | 			.\-7u#{$x} { margin-left: 58.3333333333% }
293 | 			.\-6u#{$x} { margin-left: 50% }
294 | 			.\-5u#{$x} { margin-left: 41.6666666667% }
295 | 			.\-4u#{$x} { margin-left: 33.3333333333% }
296 | 			.\-3u#{$x} { margin-left: 25% }
297 | 			.\-2u#{$x} { margin-left: 16.6666666667% }
298 | 			.\-1u#{$x} { margin-left: 8.3333333333% }
299 | 
300 | 	}
301 | 
302 | 	/// Utility mixin for grid.
303 | 	/// @param {list} $gutters Gutters.
304 | 	/// @param {string} $class Optional class name.
305 | 	/// @param {integer} $multiplier Multiplier (default is 1).
306 | 	@mixin grid-gutters($gutters, $class: null, $multiplier: 1) {
307 | 
308 | 		// Expand gutters if it's not a list.
309 | 			@if length($gutters) == 1 {
310 | 				$gutters: ($gutters, 0);
311 | 			}
312 | 
313 | 		// Get column and row gutter values.
314 | 			$c: nth($gutters, 1);
315 | 			$r: nth($gutters, 2);
316 | 
317 | 		// Get class (if provided).
318 | 			$x: '';
319 | 
320 | 			@if $class {
321 | 				$x: '.' + $class;
322 | 			}
323 | 
324 | 		// Default.
325 | 			.row#{$x} > * { padding: ($r * $multiplier) 0 0 ($c * $multiplier); }
326 | 			.row#{$x} { margin: ($r * $multiplier * -1) 0 -1px ($c * $multiplier * -1); }
327 | 
328 | 		// Uniform.
329 | 			.row.uniform#{$x} > * { padding: ($c * $multiplier) 0 0 ($c * $multiplier); }
330 | 			.row.uniform#{$x} { margin: ($c * $multiplier * -1) 0 -1px ($c * $multiplier * -1); }
331 | 
332 | 	}
333 | 
334 | 	/// Wraps @content in vendorized keyframe blocks.
335 | 	/// @param {string} $name Name.
336 | 	@mixin keyframes($name) {
337 | 
338 | 		@-moz-keyframes #{$name} { @content; }
339 | 		@-webkit-keyframes #{$name} { @content; }
340 | 		@-ms-keyframes #{$name} { @content; }
341 | 		@keyframes #{$name} { @content; }
342 | 
343 | 	}
344 | 
345 | 	///
346 | 	/// Sets breakpoints.
347 | 	/// @param {map} $x Breakpoints.
348 | 	///
349 | 	@mixin skel-breakpoints($x: ()) {
350 | 		$breakpoints: $x !global;
351 | 	}
352 | 
353 | 	///
354 | 	/// Initializes layout module.
355 | 	/// @param {map} config Config.
356 | 	///
357 | 	@mixin skel-layout($config: ()) {
358 | 
359 | 		// Config.
360 | 			$configPerBreakpoint: ();
361 | 
362 | 			$z: map-get($config, 'breakpoints');
363 | 
364 | 			@if $z {
365 | 				$configPerBreakpoint: $z;
366 | 			}
367 | 
368 | 		// Reset.
369 | 			$x: map-get($config, 'reset');
370 | 
371 | 			@if $x {
372 | 
373 | 				/* Reset */
374 | 
375 | 				@include reset($x);
376 | 
377 | 			}
378 | 
379 | 		// Box model.
380 | 			$x: map-get($config, 'boxModel');
381 | 
382 | 			@if $x {
383 | 
384 | 				/* Box Model */
385 | 
386 | 				@include boxModel($x);
387 | 
388 | 			}
389 | 
390 | 		// Containers.
391 | 			$containers: map-get($config, 'containers');
392 | 
393 | 			@if $containers {
394 | 
395 | 				/* Containers */
396 | 
397 | 				.container {
398 | 					margin-left: auto;
399 | 					margin-right: auto;
400 | 				}
401 | 
402 | 				// Use default is $containers is just "true".
403 | 					@if $containers == true {
404 | 						$containers: 960px;
405 | 					}
406 | 
407 | 				// Apply base.
408 | 					@include containers($containers);
409 | 
410 | 				// Apply per-breakpoint.
411 | 					@each $name in map-keys($breakpoints) {
412 | 
413 | 						// Get/use breakpoint setting if it exists.
414 | 							$x: map-get($configPerBreakpoint, $name);
415 | 
416 | 							// Per-breakpoint config exists?
417 | 								@if $x {
418 | 									$y: map-get($x, 'containers');
419 | 
420 | 									// Setting exists? Use it.
421 | 										@if $y {
422 | 											$containers: $y;
423 | 										}
424 | 
425 | 								}
426 | 
427 | 						// Create @media block.
428 | 							@media screen and #{map-get($breakpoints, $name)} {
429 | 								@include containers($containers);
430 | 							}
431 | 
432 | 					}
433 | 
434 | 			}
435 | 
436 | 		// Grid.
437 | 			$grid: map-get($config, 'grid');
438 | 
439 | 			@if $grid {
440 | 
441 | 				/* Grid */
442 | 
443 | 				// Use defaults if $grid is just "true".
444 | 					@if $grid == true {
445 | 						$grid: ();
446 | 					}
447 | 
448 | 				// Sub-setting: Gutters.
449 | 					$grid-gutters: 40px;
450 | 					$x: map-get($grid, 'gutters');
451 | 
452 | 					@if $x {
453 | 						$grid-gutters: $x;
454 | 					}
455 | 
456 | 				// Rows.
457 | 					.row {
458 | 						border-bottom: solid 1px transparent;
459 | 						-moz-box-sizing: border-box;
460 | 						-webkit-box-sizing: border-box;
461 | 						box-sizing: border-box;
462 | 					}
463 | 
464 | 					.row > * {
465 | 						float: left;
466 | 						-moz-box-sizing: border-box;
467 | 						-webkit-box-sizing: border-box;
468 | 						box-sizing: border-box;
469 | 					}
470 | 
471 | 					.row:after, .row:before {
472 | 						content: '';
473 | 						display: block;
474 | 						clear: both;
475 | 						height: 0;
476 | 					}
477 | 
478 | 					.row.uniform > * > :first-child {
479 | 						margin-top: 0;
480 | 					}
481 | 
482 | 					.row.uniform > * > :last-child {
483 | 						margin-bottom: 0;
484 | 					}
485 | 
486 | 				// Gutters (0%).
487 | 					@include grid-gutters($grid-gutters, \30 \25, 0);
488 | 
489 | 				// Apply base.
490 | 					@include grid($grid-gutters);
491 | 
492 | 				// Apply per-breakpoint.
493 | 					@each $name in map-keys($breakpoints) {
494 | 
495 | 						// Get/use breakpoint setting if it exists.
496 | 							$x: map-get($configPerBreakpoint, $name);
497 | 
498 | 							// Per-breakpoint config exists?
499 | 								@if $x {
500 | 									$y: map-get($x, 'grid');
501 | 
502 | 									// Setting exists?
503 | 										@if $y {
504 | 
505 | 											// Sub-setting: Gutters.
506 | 												$x: map-get($y, 'gutters');
507 | 
508 | 												@if $x {
509 | 													$grid-gutters: $x;
510 | 												}
511 | 
512 | 										}
513 | 
514 | 								}
515 | 
516 | 						// Create @media block.
517 | 							@media screen and #{map-get($breakpoints, $name)} {
518 | 								@include grid($grid-gutters, $name);
519 | 							}
520 | 
521 | 					}
522 | 
523 | 			}
524 | 
525 | 	}
526 | 
527 | 	/// Resets browser styles.
528 | 	/// @param {string} $mode Mode (default is 'normalize').
529 | 	@mixin reset($mode: 'normalize') {
530 | 
531 | 		@if $mode == 'normalize' {
532 | 
533 | 			// normalize.css v3.0.2 | MIT License | git.io/normalize
534 | 				html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background-color:transparent}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:700}dfn{font-style:italic}h1{font-size:2em;margin:.67em 0}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{-moz-box-sizing:content-box;box-sizing:content-box;height:0}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{height:auto}input[type=search]{-webkit-appearance:textfield;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0}textarea{overflow:auto}optgroup{font-weight:700}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}
535 | 
536 | 		}
537 | 		@else if $mode == 'full' {
538 | 
539 | 			// meyerweb.com/eric/tools/css/reset v2.0 | 20110126 | License: none (public domain)
540 | 				html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block;}body{line-height:1;}ol,ul{list-style:none;}blockquote,q{quotes:none;}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none;}table{border-collapse:collapse;border-spacing:0;}body{-webkit-text-size-adjust:none}
541 | 
542 | 		}
543 | 
544 | 	}
545 | 
546 | 	/// Vendorizes a declaration's property and/or value(s).
547 | 	/// @param {string} $property Property.
548 | 	/// @param {mixed} $value String/list of value(s).
549 | 	@mixin vendor($property, $value) {
550 | 
551 | 		// Determine if property should expand.
552 | 			$expandProperty: index($vendor-properties, $property);
553 | 
554 | 		// Determine if value should expand (and if so, add '-prefix-' placeholder).
555 | 			$expandValue: false;
556 | 
557 | 			@each $x in $value {
558 | 				@each $y in $vendor-values {
559 | 					@if $y == str-slice($x, 1, str-length($y)) {
560 | 
561 | 						$value: set-nth($value, index($value, $x), '-prefix-' + $x);
562 | 						$expandValue: true;
563 | 
564 | 					}
565 | 				}
566 | 			}
567 | 
568 | 		// Expand property?
569 | 			@if $expandProperty {
570 | 			    @each $vendor in $vendor-prefixes {
571 | 			        #{$vendor}#{$property}: #{str-replace-all($value, '-prefix-', $vendor)};
572 | 			    }
573 | 			}
574 | 
575 | 		// Expand just the value?
576 | 			@elseif $expandValue {
577 | 			    @each $vendor in $vendor-prefixes {
578 | 			        #{$property}: #{str-replace-all($value, '-prefix-', $vendor)};
579 | 			    }
580 | 			}
581 | 
582 | 		// Neither? Treat them as a normal declaration.
583 | 			@else {
584 | 		        #{$property}: #{$value};
585 | 			}
586 | 
587 | 	}


--------------------------------------------------------------------------------
/_sass/libs/_vars.scss:
--------------------------------------------------------------------------------
 1 | // Misc.
 2 | 	$misc: (
 3 | 		z-index-base:	10000
 4 | 	);
 5 | 
 6 | // Duration.
 7 | 	$duration: (
 8 | 		header: 0.5s
 9 | 	);
10 | 
11 | // Size.
12 | 	$size: (
13 | 		header: 275px
14 | 	);
15 | 
16 | // Font.
17 | 	$font: (
18 | 	);
19 | 
20 | // Palette.
21 | 	$palette: (
22 | 	);


--------------------------------------------------------------------------------
/_sections/about-me.html:
--------------------------------------------------------------------------------
 1 | ---
 2 | title: About Me
 3 | icon: fa-user
 4 | order: 3
 5 | ---
 6 | 
 7 | <a href="#" class="image featured"><img src="assets/images/pic08.jpg" alt="" /></a>
 8 | 
 9 | <p>Tincidunt eu elit diam magnis pretium accumsan etiam id urna. Ridiculus
10 | ultricies curae quis et rhoncus velit. Lobortis elementum aliquet nec vitae
11 | laoreet eget cubilia quam non etiam odio tincidunt montes. Elementum sem
12 | parturient nulla quam placerat viverra mauris non cum elit tempus ullamcorper
13 | dolor. Libero rutrum ut lacinia donec curae mus vel quisque sociis nec
14 | ornare iaculis.</p>
15 | 


--------------------------------------------------------------------------------
/_sections/contact.html:
--------------------------------------------------------------------------------
 1 | ---
 2 | title: Contact
 3 | icon: fa-envelope
 4 | order: 4
 5 | ---
 6 | 
 7 | <p>Elementum sem parturient nulla quam placerat viverra
 8 | mauris non cum elit tempus ullamcorper dolor. Libero rutrum ut lacinia
 9 | donec curae mus. Eleifend id porttitor ac ultricies lobortis sem nunc
10 | orci ridiculus faucibus a consectetur. Porttitor curae mauris urna mi dolor.</p>
11 | 
12 | <form method="post" action="https://formspree.io/{{ site.email }}">
13 |   <div class="row">
14 |     <div class="6u 12u$(mobile)"><input type="text" name="name" placeholder="Name" /></div>
15 |     <div class="6u$ 12u$(mobile)"><input type="text" name="email" placeholder="Email" /></div>
16 |     <div class="12u$">
17 |       <textarea name="message" placeholder="Message"></textarea>
18 |     </div>
19 |     <div class="12u$">
20 |       <input type="submit" value="Send Message" />
21 |     </div>
22 |   </div>
23 | </form>
24 | 


--------------------------------------------------------------------------------
/_sections/intro.html:
--------------------------------------------------------------------------------
 1 | ---
 2 | title: Intro
 3 | cover-photo: assets/images/banner.jpg
 4 | cover-photo-alt: example cover photo
 5 | auto-header: none
 6 | icon: fa-comment
 7 | order: 1
 8 | ---
 9 | <header>
10 |   <h2 class="alt">Hi! I'm <strong>Prologue</strong>, a <a href="http://html5up.net/license">free</a> responsive<br />
11 |   site template designed by <a href="http://html5up.net/prologue">HTML5 UP</a>.</h2>
12 |   <p>Adapted for Jekyll by <a href=https://chrisbobbe.github.io/>Chris Bobbe</a>. Get started on <a href="https://github.com/chrisbobbe/jekyll-theme-prologue">GitHub!</a></p>
13 | </header>
14 | 
15 | <footer>
16 |   <a href="#portfolio" class="button scrolly">Magna Aliquam</a>
17 | </footer>
18 | 


--------------------------------------------------------------------------------
/_sections/portfolio.html:
--------------------------------------------------------------------------------
 1 | ---
 2 | title: Portfolio
 3 | icon: fa-th
 4 | order: 2
 5 | ---
 6 | 
 7 | <p>Vitae natoque dictum etiam semper magnis enim feugiat convallis convallis
 8 |   egestas rhoncus ridiculus in quis risus amet curabitur tempor orci penatibus.
 9 |   Tellus erat mauris ipsum fermentum etiam vivamus eget. Nunc nibh morbi quis
10 |   fusce hendrerit lacus ridiculus.</p>
11 | 
12 |   <div class="row">
13 |     <div class="4u 12u$(mobile)">
14 |       <div class="item">
15 |         <a href="#" class="image fit"><img src="{{ 'assets/images/pic02.jpg' | relative_url }}" alt="Ipsum Feugiat" /></a>
16 |         <header>
17 |           <h3>Ipsum Feugiat</h3>
18 |         </header>
19 |       </div>
20 |       <div class="item">
21 |         <a href="#" class="image fit"><img src="{{ 'assets/images/pic03.jpg' | relative_url }}" alt="Rhoncus Semper" /></a>
22 |         <header>
23 |           <h3>Rhoncus Semper</h3>
24 |         </header>
25 |       </div>
26 |     </div>
27 |     <div class="4u 12u$(mobile)">
28 |       <div class="item">
29 |         <a href="#" class="image fit"><img src="{{ 'assets/images/pic04.jpg' | relative_url }}" alt="Magna Nullam" /></a>
30 |         <header>
31 |           <h3>Magna Nullam</h3>
32 |         </header>
33 |       </div>
34 |       <div class="item">
35 |         <a href="#" class="image fit"><img src="{{ 'assets/images/pic05.jpg' | relative_url }}" alt="Natoque Vitae" /></a>
36 |         <header>
37 |           <h3>Natoque Vitae</h3>
38 |         </header>
39 |       </div>
40 |     </div>
41 |     <div class="4u 12u$(mobile)">
42 |       <div class="item">
43 |         <a href="#" class="image fit"><img src="{{ 'assets/images/pic06.jpg' | relative_url }}" alt="Dolor Penatibus" /></a>
44 |         <header>
45 |           <h3>Dolor Penatibus</h3>
46 |         </header>
47 |       </div>
48 |       <div class="item">
49 |         <a href="#" class="image fit"><img src="{{ 'assets/images/pic07.jpg' | relative_url }}" alt="Orci Convallis" /></a>
50 |         <header>
51 |           <h3>Orci Convallis</h3>
52 |         </header>
53 |       </div>
54 |     </div>
55 |   </div>
56 | 


--------------------------------------------------------------------------------
/_sections/welcome-to-jekyll.md:
--------------------------------------------------------------------------------
 1 | ---
 2 | title: Welcome to Jekyll!
 3 | icon: fa-check
 4 | order: 5
 5 | ---
 6 | 
 7 | This Jekyll theme lets you build as many of these sections as you want. They live in the _sections folder in your project's root directory. For some examples, see the [GitHub repository](https://github.com/chrisbobbe/jekyll-theme-prologue). Just be sure to add some [frontmatter](https://jekyllrb.com/docs/frontmatter/) to each section.
 8 | 
 9 | All sections have titles, which are listed in the site's navigation menu. At the top of each section, the section's title will render by default (e.g., Welcome to Jekyll!). If you want it to show something different (see Intro), add **auto-header: none** to your frontmatter, and add your text in a <h2> tag inside a <header> tag outside the frontmatter. You'll want to give each section an **order** parameter, also in the frontmatter, or it won't know where to put itself and will hide. Icons are from [Font Awesome](https://fontawesome.com/icons).
10 | 
11 | You may notice that this section is written in Markdown -- either Markdown or html works!
12 | 


--------------------------------------------------------------------------------
/assets/css/ie8.css:
--------------------------------------------------------------------------------
 1 | /*
 2 | 	Prologue by HTML5 UP
 3 | 	html5up.net | @ajlkn
 4 | 	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
 5 | */
 6 | 
 7 | /* Section/Article */
 8 | 
 9 | 	section > .last-child, section.last-child, article > .last-child, article.last-child {
10 | 		margin-bottom: 0;
11 | 	}
12 | 
13 | /* Form */
14 | 
15 | 	form input[type="text"],
16 | 	form input[type="email"],
17 | 	form input[type="password"],
18 | 	form select,
19 | 	form textarea {
20 | 		-ms-behavior: url("assets/js/ie/PIE.htc");
21 | 	}
22 | 
23 | /* Button */
24 | 
25 | 	input[type="button"],
26 | 	input[type="submit"],
27 | 	input[type="reset"],
28 | 	button,
29 | 	.button {
30 | 		-ms-behavior: url("assets/js/ie/PIE.htc");
31 | 	}
32 | 
33 | /* Header */
34 | 
35 | 	#nav ul li a {
36 | 		color: #888;
37 | 	}
38 | 
39 | 		#nav ul li a.active {
40 | 			background: #1C2022;
41 | 		}
42 | 
43 | 	#headerToggle .toggle {
44 | 		background-color: #888;
45 | 	}
46 | 
47 | /* Main */
48 | 
49 | 	#main > section.cover {
50 | 		background-position: auto;
51 | 		-ms-behavior: url("assets/js/ie/backgroundsize.min.htc");
52 | 	}


--------------------------------------------------------------------------------
/assets/css/ie9.css:
--------------------------------------------------------------------------------
 1 | /*
 2 | 	Prologue by HTML5 UP
 3 | 	html5up.net | @ajlkn
 4 | 	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
 5 | */
 6 | 
 7 | /* Button */
 8 | 
 9 | 	input[type="button"],
10 | 	input[type="submit"],
11 | 	input[type="reset"],
12 | 	button,
13 | 	.button {
14 | 		background-image: url("images/ie/grad0-15.svg");
15 | 	}


--------------------------------------------------------------------------------
1 | <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
2 | 	<defs>
3 | 		<linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%" spreadMethod="pad">
4 | 			<stop offset="0%" stop-color="rgba(0,0,0,0)" stop-opacity="1"/>
5 | 			<stop offset="100%" stop-color="rgba(0,0,0,0.15)" stop-opacity="1"/>
6 | 		</linearGradient>
7 | 	</defs>
8 | 	<rect x="0" y="0" width="100%" height="100%" style="fill:url(#gradient1);" />
9 | </svg>


--------------------------------------------------------------------------------
https://raw.githubusercontent.com/chrisbobbe/jekyll-theme-prologue/53cd4c877fb8b47f89fbe688837942011549b733/assets/css/images/overlay.png


--------------------------------------------------------------------------------
/assets/css/main.scss:
--------------------------------------------------------------------------------
1 | ---
2 | # Only the main Sass file needs front matter (the dashes are enough)
3 | ---
4 | @import "jekyll-theme-prologue";


--------------------------------------------------------------------------------
https://raw.githubusercontent.com/chrisbobbe/jekyll-theme-prologue/53cd4c877fb8b47f89fbe688837942011549b733/assets/images/avatar.jpg


--------------------------------------------------------------------------------
https://raw.githubusercontent.com/chrisbobbe/jekyll-theme-prologue/53cd4c877fb8b47f89fbe688837942011549b733/assets/images/banner.jpg


--------------------------------------------------------------------------------
https://raw.githubusercontent.com/chrisbobbe/jekyll-theme-prologue/53cd4c877fb8b47f89fbe688837942011549b733/assets/images/pic02.jpg


--------------------------------------------------------------------------------
https://raw.githubusercontent.com/chrisbobbe/jekyll-theme-prologue/53cd4c877fb8b47f89fbe688837942011549b733/assets/images/pic03.jpg


--------------------------------------------------------------------------------
https://raw.githubusercontent.com/chrisbobbe/jekyll-theme-prologue/53cd4c877fb8b47f89fbe688837942011549b733/assets/images/pic04.jpg


--------------------------------------------------------------------------------
https://raw.githubusercontent.com/chrisbobbe/jekyll-theme-prologue/53cd4c877fb8b47f89fbe688837942011549b733/assets/images/pic05.jpg


--------------------------------------------------------------------------------
https://raw.githubusercontent.com/chrisbobbe/jekyll-theme-prologue/53cd4c877fb8b47f89fbe688837942011549b733/assets/images/pic06.jpg


--------------------------------------------------------------------------------
https://raw.githubusercontent.com/chrisbobbe/jekyll-theme-prologue/53cd4c877fb8b47f89fbe688837942011549b733/assets/images/pic07.jpg


--------------------------------------------------------------------------------
https://raw.githubusercontent.com/chrisbobbe/jekyll-theme-prologue/53cd4c877fb8b47f89fbe688837942011549b733/assets/images/pic08.jpg


--------------------------------------------------------------------------------
https://raw.githubusercontent.com/chrisbobbe/jekyll-theme-prologue/53cd4c877fb8b47f89fbe688837942011549b733/assets/images/screenshot.png


--------------------------------------------------------------------------------
/assets/js/ie/PIE.htc:
--------------------------------------------------------------------------------
 1 | <!--
 2 | PIE: CSS3 rendering for IE
 3 | Version 1.0.0
 4 | http://css3pie.com
 5 | Dual-licensed for use under the Apache License Version 2.0 or the General Public License (GPL) Version 2.
 6 | -->
 7 | <PUBLIC:COMPONENT lightWeight="true">
 8 | <!-- saved from url=(0014)about:internet -->
 9 | <PUBLIC:ATTACH EVENT="oncontentready" FOR="element" ONEVENT="init()" />
10 | <PUBLIC:ATTACH EVENT="ondocumentready" FOR="element" ONEVENT="init()" />
11 | <PUBLIC:ATTACH EVENT="ondetach" FOR="element" ONEVENT="cleanup()" />
12 | 
13 | <script type="text/javascript">
14 | var doc = element.document;var f=window.PIE;
15 | if(!f){f=window.PIE={F:"-pie-",nb:"Pie",La:"pie_",Ac:{TD:1,TH:1},cc:{TABLE:1,THEAD:1,TBODY:1,TFOOT:1,TR:1,INPUT:1,TEXTAREA:1,SELECT:1,OPTION:1,IMG:1,HR:1},fc:{A:1,INPUT:1,TEXTAREA:1,SELECT:1,BUTTON:1},Gd:{submit:1,button:1,reset:1},aa:function(){}};try{doc.execCommand("BackgroundImageCache",false,true)}catch(aa){}for(var ba=4,Z=doc.createElement("div"),ca=Z.getElementsByTagName("i"),ga;Z.innerHTML="<!--[if gt IE "+ ++ba+"]><i></i><![endif]--\>",ca[0];);f.O=ba;if(ba===6)f.F=f.F.replace(/^-/,"");f.ja=
16 | doc.documentMode||f.O;Z.innerHTML='<v:shape adj="1"/>';ga=Z.firstChild;ga.style.behavior="url(#default#VML)";f.zc=typeof ga.adj==="object";(function(){var a,b=0,c={};f.p={Za:function(d){if(!a){a=doc.createDocumentFragment();a.namespaces.add("css3vml","urn:schemas-microsoft-com:vml")}return a.createElement("css3vml:"+d)},Ba:function(d){return d&&d._pieId||(d._pieId="_"+ ++b)},Eb:function(d){var e,g,j,i,h=arguments;e=1;for(g=h.length;e<g;e++){i=h[e];for(j in i)if(i.hasOwnProperty(j))d[j]=i[j]}return d},
17 | Rb:function(d,e,g){var j=c[d],i,h;if(j)Object.prototype.toString.call(j)==="[object Array]"?j.push([e,g]):e.call(g,j);else{h=c[d]=[[e,g]];i=new Image;i.onload=function(){j=c[d]={h:i.width,f:i.height};for(var k=0,n=h.length;k<n;k++)h[k][0].call(h[k][1],j);i.onload=null};i.src=d}}}})();f.Na={gc:function(a,b,c,d){function e(){k=j>=90&&j<270?b:0;n=j<180?c:0;m=b-k;p=c-n}function g(){for(;j<0;)j+=360;j%=360}var j=d.sa;d=d.zb;var i,h,k,n,m,p,r,t;if(d){d=d.coords(a,b,c);i=d.x;h=d.y}if(j){j=j.jd();g();e();
18 | if(!d){i=k;h=n}d=f.Na.tc(i,h,j,m,p);a=d[0];d=d[1]}else if(d){a=b-i;d=c-h}else{i=h=a=0;d=c}r=a-i;t=d-h;if(j===void 0){j=!r?t<0?90:270:!t?r<0?180:0:-Math.atan2(t,r)/Math.PI*180;g();e()}return{sa:j,xc:i,yc:h,td:a,ud:d,Wd:k,Xd:n,rd:m,sd:p,kd:r,ld:t,rc:f.Na.dc(i,h,a,d)}},tc:function(a,b,c,d,e){if(c===0||c===180)return[d,b];else if(c===90||c===270)return[a,e];else{c=Math.tan(-c*Math.PI/180);a=c*a-b;b=-1/c;d=b*d-e;e=b-c;return[(d-a)/e,(c*d-b*a)/e]}},dc:function(a,b,c,d){a=c-a;b=d-b;return Math.abs(a===0?
19 | b:b===0?a:Math.sqrt(a*a+b*b))}};f.ea=function(){this.Gb=[];this.oc={}};f.ea.prototype={ba:function(a){var b=f.p.Ba(a),c=this.oc,d=this.Gb;if(!(b in c)){c[b]=d.length;d.push(a)}},Ha:function(a){a=f.p.Ba(a);var b=this.oc;if(a&&a in b){delete this.Gb[b[a]];delete b[a]}},xa:function(){for(var a=this.Gb,b=a.length;b--;)a[b]&&a[b]()}};f.Oa=new f.ea;f.Oa.Rd=function(){var a=this,b;if(!a.Sd){b=doc.documentElement.currentStyle.getAttribute(f.F+"poll-interval")||250;(function c(){a.xa();setTimeout(c,b)})();
20 | a.Sd=1}};(function(){function a(){f.L.xa();window.detachEvent("onunload",a);window.PIE=null}f.L=new f.ea;window.attachEvent("onunload",a);f.L.ta=function(b,c,d){b.attachEvent(c,d);this.ba(function(){b.detachEvent(c,d)})}})();f.Qa=new f.ea;f.L.ta(window,"onresize",function(){f.Qa.xa()});(function(){function a(){f.mb.xa()}f.mb=new f.ea;f.L.ta(window,"onscroll",a);f.Qa.ba(a)})();(function(){function a(){c=f.kb.md()}function b(){if(c){for(var d=0,e=c.length;d<e;d++)f.attach(c[d]);c=0}}var c;if(f.ja<9){f.L.ta(window,
21 | "onbeforeprint",a);f.L.ta(window,"onafterprint",b)}})();f.lb=new f.ea;f.L.ta(doc,"onmouseup",function(){f.lb.xa()});f.he=function(){function a(h){this.Y=h}var b=doc.createElement("length-calc"),c=doc.body||doc.documentElement,d=b.style,e={},g=["mm","cm","in","pt","pc"],j=g.length,i={};d.position="absolute";d.top=d.left="-9999px";for(c.appendChild(b);j--;){d.width="100"+g[j];e[g[j]]=b.offsetWidth/100}c.removeChild(b);d.width="1em";a.prototype={Kb:/(px|em|ex|mm|cm|in|pt|pc|%)$/,ic:function(){var h=
22 | this.Jd;if(h===void 0)h=this.Jd=parseFloat(this.Y);return h},yb:function(){var h=this.ae;if(!h)h=this.ae=(h=this.Y.match(this.Kb))&&h[0]||"px";return h},a:function(h,k){var n=this.ic(),m=this.yb();switch(m){case "px":return n;case "%":return n*(typeof k==="function"?k():k)/100;case "em":return n*this.xb(h);case "ex":return n*this.xb(h)/2;default:return n*e[m]}},xb:function(h){var k=h.currentStyle.fontSize,n,m;if(k.indexOf("px")>0)return parseFloat(k);else if(h.tagName in f.cc){m=this;n=h.parentNode;
23 | return f.n(k).a(n,function(){return m.xb(n)})}else{h.appendChild(b);k=b.offsetWidth;b.parentNode===h&&h.removeChild(b);return k}}};f.n=function(h){return i[h]||(i[h]=new a(h))};return a}();f.Ja=function(){function a(e){this.X=e}var b=f.n("50%"),c={top:1,center:1,bottom:1},d={left:1,center:1,right:1};a.prototype={zd:function(){if(!this.ac){var e=this.X,g=e.length,j=f.v,i=j.qa,h=f.n("0");i=i.na;h=["left",h,"top",h];if(g===1){e.push(new j.ob(i,"center"));g++}if(g===2){i&(e[0].k|e[1].k)&&e[0].d in c&&
24 | e[1].d in d&&e.push(e.shift());if(e[0].k&i)if(e[0].d==="center")h[1]=b;else h[0]=e[0].d;else if(e[0].W())h[1]=f.n(e[0].d);if(e[1].k&i)if(e[1].d==="center")h[3]=b;else h[2]=e[1].d;else if(e[1].W())h[3]=f.n(e[1].d)}this.ac=h}return this.ac},coords:function(e,g,j){var i=this.zd(),h=i[1].a(e,g);e=i[3].a(e,j);return{x:i[0]==="right"?g-h:h,y:i[2]==="bottom"?j-e:e}}};return a}();f.Ka=function(){function a(b,c){this.h=b;this.f=c}a.prototype={a:function(b,c,d,e,g){var j=this.h,i=this.f,h=c/d;e=e/g;if(j===
25 | "contain"){j=e>h?c:d*e;i=e>h?c/e:d}else if(j==="cover"){j=e<h?c:d*e;i=e<h?c/e:d}else if(j==="auto"){i=i==="auto"?g:i.a(b,d);j=i*e}else{j=j.a(b,c);i=i==="auto"?j/e:i.a(b,d)}return{h:j,f:i}}};a.Kc=new a("auto","auto");return a}();f.Ec=function(){function a(b){this.Y=b}a.prototype={Kb:/[a-z]+$/i,yb:function(){return this.ad||(this.ad=this.Y.match(this.Kb)[0].toLowerCase())},jd:function(){var b=this.Vc,c;if(b===undefined){b=this.yb();c=parseFloat(this.Y,10);b=this.Vc=b==="deg"?c:b==="rad"?c/Math.PI*180:
26 | b==="grad"?c/400*360:b==="turn"?c*360:0}return b}};return a}();f.Jc=function(){function a(c){this.Y=c}var b={};a.Qd=/\s*rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d+|\d*\.\d+)\s*\)\s*/;a.Fb={aliceblue:"F0F8FF",antiquewhite:"FAEBD7",aqua:"0FF",aquamarine:"7FFFD4",azure:"F0FFFF",beige:"F5F5DC",bisque:"FFE4C4",black:"000",blanchedalmond:"FFEBCD",blue:"00F",blueviolet:"8A2BE2",brown:"A52A2A",burlywood:"DEB887",cadetblue:"5F9EA0",chartreuse:"7FFF00",chocolate:"D2691E",coral:"FF7F50",cornflowerblue:"6495ED",
27 | cornsilk:"FFF8DC",crimson:"DC143C",cyan:"0FF",darkblue:"00008B",darkcyan:"008B8B",darkgoldenrod:"B8860B",darkgray:"A9A9A9",darkgreen:"006400",darkkhaki:"BDB76B",darkmagenta:"8B008B",darkolivegreen:"556B2F",darkorange:"FF8C00",darkorchid:"9932CC",darkred:"8B0000",darksalmon:"E9967A",darkseagreen:"8FBC8F",darkslateblue:"483D8B",darkslategray:"2F4F4F",darkturquoise:"00CED1",darkviolet:"9400D3",deeppink:"FF1493",deepskyblue:"00BFFF",dimgray:"696969",dodgerblue:"1E90FF",firebrick:"B22222",floralwhite:"FFFAF0",
28 | forestgreen:"228B22",fuchsia:"F0F",gainsboro:"DCDCDC",ghostwhite:"F8F8FF",gold:"FFD700",goldenrod:"DAA520",gray:"808080",green:"008000",greenyellow:"ADFF2F",honeydew:"F0FFF0",hotpink:"FF69B4",indianred:"CD5C5C",indigo:"4B0082",ivory:"FFFFF0",khaki:"F0E68C",lavender:"E6E6FA",lavenderblush:"FFF0F5",lawngreen:"7CFC00",lemonchiffon:"FFFACD",lightblue:"ADD8E6",lightcoral:"F08080",lightcyan:"E0FFFF",lightgoldenrodyellow:"FAFAD2",lightgreen:"90EE90",lightgrey:"D3D3D3",lightpink:"FFB6C1",lightsalmon:"FFA07A",
29 | lightseagreen:"20B2AA",lightskyblue:"87CEFA",lightslategray:"789",lightsteelblue:"B0C4DE",lightyellow:"FFFFE0",lime:"0F0",limegreen:"32CD32",linen:"FAF0E6",magenta:"F0F",maroon:"800000",mediumauqamarine:"66CDAA",mediumblue:"0000CD",mediumorchid:"BA55D3",mediumpurple:"9370D8",mediumseagreen:"3CB371",mediumslateblue:"7B68EE",mediumspringgreen:"00FA9A",mediumturquoise:"48D1CC",mediumvioletred:"C71585",midnightblue:"191970",mintcream:"F5FFFA",mistyrose:"FFE4E1",moccasin:"FFE4B5",navajowhite:"FFDEAD",
30 | navy:"000080",oldlace:"FDF5E6",olive:"808000",olivedrab:"688E23",orange:"FFA500",orangered:"FF4500",orchid:"DA70D6",palegoldenrod:"EEE8AA",palegreen:"98FB98",paleturquoise:"AFEEEE",palevioletred:"D87093",papayawhip:"FFEFD5",peachpuff:"FFDAB9",peru:"CD853F",pink:"FFC0CB",plum:"DDA0DD",powderblue:"B0E0E6",purple:"800080",red:"F00",rosybrown:"BC8F8F",royalblue:"4169E1",saddlebrown:"8B4513",salmon:"FA8072",sandybrown:"F4A460",seagreen:"2E8B57",seashell:"FFF5EE",sienna:"A0522D",silver:"C0C0C0",skyblue:"87CEEB",
31 | slateblue:"6A5ACD",slategray:"708090",snow:"FFFAFA",springgreen:"00FF7F",steelblue:"4682B4",tan:"D2B48C",teal:"008080",thistle:"D8BFD8",tomato:"FF6347",turquoise:"40E0D0",violet:"EE82EE",wheat:"F5DEB3",white:"FFF",whitesmoke:"F5F5F5",yellow:"FF0",yellowgreen:"9ACD32"};a.prototype={parse:function(){if(!this.Ua){var c=this.Y,d;if(d=c.match(a.Qd)){this.Ua="rgb("+d[1]+","+d[2]+","+d[3]+")";this.Yb=parseFloat(d[4])}else{if((d=c.toLowerCase())in a.Fb)c="#"+a.Fb[d];this.Ua=c;this.Yb=c==="transparent"?0:
32 | 1}}},U:function(c){this.parse();return this.Ua==="currentColor"?c.currentStyle.color:this.Ua},fa:function(){this.parse();return this.Yb}};f.ha=function(c){return b[c]||(b[c]=new a(c))};return a}();f.v=function(){function a(c){this.$a=c;this.ch=0;this.X=[];this.Ga=0}var b=a.qa={Ia:1,Wb:2,z:4,Lc:8,Xb:16,na:32,K:64,oa:128,pa:256,Ra:512,Tc:1024,URL:2048};a.ob=function(c,d){this.k=c;this.d=d};a.ob.prototype={Ca:function(){return this.k&b.K||this.k&b.oa&&this.d==="0"},W:function(){return this.Ca()||this.k&
33 | b.Ra}};a.prototype={de:/\s/,Kd:/^[\+\-]?(\d*\.)?\d+/,url:/^url\(\s*("([^"]*)"|'([^']*)'|([!#$%&*-~]*))\s*\)/i,nc:/^\-?[_a-z][\w-]*/i,Yd:/^("([^"]*)"|'([^']*)')/,Bd:/^#([\da-f]{6}|[\da-f]{3})/i,be:{px:b.K,em:b.K,ex:b.K,mm:b.K,cm:b.K,"in":b.K,pt:b.K,pc:b.K,deg:b.Ia,rad:b.Ia,grad:b.Ia},fd:{rgb:1,rgba:1,hsl:1,hsla:1},next:function(c){function d(p,r){p=new a.ob(p,r);if(!c){k.X.push(p);k.Ga++}return p}function e(){k.Ga++;return null}var g,j,i,h,k=this;if(this.Ga<this.X.length)return this.X[this.Ga++];for(;this.de.test(this.$a.charAt(this.ch));)this.ch++;
34 | if(this.ch>=this.$a.length)return e();j=this.ch;g=this.$a.substring(this.ch);i=g.charAt(0);switch(i){case "#":if(h=g.match(this.Bd)){this.ch+=h[0].length;return d(b.z,h[0])}break;case '"':case "'":if(h=g.match(this.Yd)){this.ch+=h[0].length;return d(b.Tc,h[2]||h[3]||"")}break;case "/":case ",":this.ch++;return d(b.pa,i);case "u":if(h=g.match(this.url)){this.ch+=h[0].length;return d(b.URL,h[2]||h[3]||h[4]||"")}}if(h=g.match(this.Kd)){i=h[0];this.ch+=i.length;if(g.charAt(i.length)==="%"){this.ch++;
35 | return d(b.Ra,i+"%")}if(h=g.substring(i.length).match(this.nc)){i+=h[0];this.ch+=h[0].length;return d(this.be[h[0].toLowerCase()]||b.Lc,i)}return d(b.oa,i)}if(h=g.match(this.nc)){i=h[0];this.ch+=i.length;if(i.toLowerCase()in f.Jc.Fb||i==="currentColor"||i==="transparent")return d(b.z,i);if(g.charAt(i.length)==="("){this.ch++;if(i.toLowerCase()in this.fd){g=function(p){return p&&p.k&b.oa};h=function(p){return p&&p.k&(b.oa|b.Ra)};var n=function(p,r){return p&&p.d===r},m=function(){return k.next(1)};
36 | if((i.charAt(0)==="r"?h(m()):g(m()))&&n(m(),",")&&h(m())&&n(m(),",")&&h(m())&&(i==="rgb"||i==="hsa"||n(m(),",")&&g(m()))&&n(m(),")"))return d(b.z,this.$a.substring(j,this.ch));return e()}return d(b.Xb,i)}return d(b.na,i)}this.ch++;return d(b.Wb,i)},D:function(){return this.X[this.Ga-- -2]},all:function(){for(;this.next(););return this.X},ma:function(c,d){for(var e=[],g,j;g=this.next();){if(c(g)){j=true;this.D();break}e.push(g)}return d&&!j?null:e}};return a}();var ha=function(a){this.e=a};ha.prototype=
37 | {Z:0,Od:function(){var a=this.qb,b;return!a||(b=this.o())&&(a.x!==b.x||a.y!==b.y)},Td:function(){var a=this.qb,b;return!a||(b=this.o())&&(a.h!==b.h||a.f!==b.f)},hc:function(){var a=this.e,b=a.getBoundingClientRect(),c=f.ja===9,d=f.O===7,e=b.right-b.left;return{x:b.left,y:b.top,h:c||d?a.offsetWidth:e,f:c||d?a.offsetHeight:b.bottom-b.top,Hd:d&&e?a.offsetWidth/e:1}},o:function(){return this.Z?this.Va||(this.Va=this.hc()):this.hc()},Ad:function(){return!!this.qb},cb:function(){++this.Z},hb:function(){if(!--this.Z){if(this.Va)this.qb=
38 | this.Va;this.Va=null}}};(function(){function a(b){var c=f.p.Ba(b);return function(){if(this.Z){var d=this.$b||(this.$b={});return c in d?d[c]:(d[c]=b.call(this))}else return b.call(this)}}f.B={Z:0,ka:function(b){function c(d){this.e=d;this.Zb=this.ia()}f.p.Eb(c.prototype,f.B,b);c.$c={};return c},j:function(){var b=this.ia(),c=this.constructor.$c;return b?b in c?c[b]:(c[b]=this.la(b)):null},ia:a(function(){var b=this.e,c=this.constructor,d=b.style;b=b.currentStyle;var e=this.wa,g=this.Fa,j=c.Yc||(c.Yc=
39 | f.F+e);c=c.Zc||(c.Zc=f.nb+g.charAt(0).toUpperCase()+g.substring(1));return d[c]||b.getAttribute(j)||d[g]||b.getAttribute(e)}),i:a(function(){return!!this.j()}),H:a(function(){var b=this.ia(),c=b!==this.Zb;this.Zb=b;return c}),va:a,cb:function(){++this.Z},hb:function(){--this.Z||delete this.$b}}})();f.Sb=f.B.ka({wa:f.F+"background",Fa:f.nb+"Background",cd:{scroll:1,fixed:1,local:1},fb:{"repeat-x":1,"repeat-y":1,repeat:1,"no-repeat":1},sc:{"padding-box":1,"border-box":1,"content-box":1},Pd:{top:1,right:1,
40 | bottom:1,left:1,center:1},Ud:{contain:1,cover:1},eb:{Ma:"backgroundClip",z:"backgroundColor",da:"backgroundImage",Pa:"backgroundOrigin",S:"backgroundPosition",T:"backgroundRepeat",Sa:"backgroundSize"},la:function(a){function b(s){return s&&s.W()||s.k&k&&s.d in t}function c(s){return s&&(s.W()&&f.n(s.d)||s.d==="auto"&&"auto")}var d=this.e.currentStyle,e,g,j,i=f.v.qa,h=i.pa,k=i.na,n=i.z,m,p,r=0,t=this.Pd,v,l,q={M:[]};if(this.wb()){e=new f.v(a);for(j={};g=e.next();){m=g.k;p=g.d;if(!j.P&&m&i.Xb&&p===
41 | "linear-gradient"){v={ca:[],P:p};for(l={};g=e.next();){m=g.k;p=g.d;if(m&i.Wb&&p===")"){l.color&&v.ca.push(l);v.ca.length>1&&f.p.Eb(j,v);break}if(m&n){if(v.sa||v.zb){g=e.D();if(g.k!==h)break;e.next()}l={color:f.ha(p)};g=e.next();if(g.W())l.db=f.n(g.d);else e.D()}else if(m&i.Ia&&!v.sa&&!l.color&&!v.ca.length)v.sa=new f.Ec(g.d);else if(b(g)&&!v.zb&&!l.color&&!v.ca.length){e.D();v.zb=new f.Ja(e.ma(function(s){return!b(s)},false))}else if(m&h&&p===","){if(l.color){v.ca.push(l);l={}}}else break}}else if(!j.P&&
42 | m&i.URL){j.Ab=p;j.P="image"}else if(b(g)&&!j.$){e.D();j.$=new f.Ja(e.ma(function(s){return!b(s)},false))}else if(m&k)if(p in this.fb&&!j.bb)j.bb=p;else if(p in this.sc&&!j.Wa){j.Wa=p;if((g=e.next())&&g.k&k&&g.d in this.sc)j.ub=g.d;else{j.ub=p;e.D()}}else if(p in this.cd&&!j.bc)j.bc=p;else return null;else if(m&n&&!q.color)q.color=f.ha(p);else if(m&h&&p==="/"&&!j.Xa&&j.$){g=e.next();if(g.k&k&&g.d in this.Ud)j.Xa=new f.Ka(g.d);else if(g=c(g)){m=c(e.next());if(!m){m=g;e.D()}j.Xa=new f.Ka(g,m)}else return null}else if(m&
43 | h&&p===","&&j.P){j.Hb=a.substring(r,e.ch-1);r=e.ch;q.M.push(j);j={}}else return null}if(j.P){j.Hb=a.substring(r);q.M.push(j)}}else this.Bc(f.ja<9?function(){var s=this.eb,o=d[s.S+"X"],u=d[s.S+"Y"],x=d[s.da],y=d[s.z];if(y!=="transparent")q.color=f.ha(y);if(x!=="none")q.M=[{P:"image",Ab:(new f.v(x)).next().d,bb:d[s.T],$:new f.Ja((new f.v(o+" "+u)).all())}]}:function(){var s=this.eb,o=/\s*,\s*/,u=d[s.da].split(o),x=d[s.z],y,z,B,E,D,C;if(x!=="transparent")q.color=f.ha(x);if((E=u.length)&&u[0]!=="none"){x=
44 | d[s.T].split(o);y=d[s.S].split(o);z=d[s.Pa].split(o);B=d[s.Ma].split(o);s=d[s.Sa].split(o);q.M=[];for(o=0;o<E;o++)if((D=u[o])&&D!=="none"){C=s[o].split(" ");q.M.push({Hb:D+" "+x[o]+" "+y[o]+" / "+s[o]+" "+z[o]+" "+B[o],P:"image",Ab:(new f.v(D)).next().d,bb:x[o],$:new f.Ja((new f.v(y[o])).all()),Wa:z[o],ub:B[o],Xa:new f.Ka(C[0],C[1])})}}});return q.color||q.M[0]?q:null},Bc:function(a){var b=f.ja>8,c=this.eb,d=this.e.runtimeStyle,e=d[c.da],g=d[c.z],j=d[c.T],i,h,k,n;if(e)d[c.da]="";if(g)d[c.z]="";if(j)d[c.T]=
45 | "";if(b){i=d[c.Ma];h=d[c.Pa];n=d[c.S];k=d[c.Sa];if(i)d[c.Ma]="";if(h)d[c.Pa]="";if(n)d[c.S]="";if(k)d[c.Sa]=""}a=a.call(this);if(e)d[c.da]=e;if(g)d[c.z]=g;if(j)d[c.T]=j;if(b){if(i)d[c.Ma]=i;if(h)d[c.Pa]=h;if(n)d[c.S]=n;if(k)d[c.Sa]=k}return a},ia:f.B.va(function(){return this.wb()||this.Bc(function(){var a=this.e.currentStyle,b=this.eb;return a[b.z]+" "+a[b.da]+" "+a[b.T]+" "+a[b.S+"X"]+" "+a[b.S+"Y"]})}),wb:f.B.va(function(){var a=this.e;return a.style[this.Fa]||a.currentStyle.getAttribute(this.wa)}),
46 | qc:function(){var a=0;if(f.O<7){a=this.e;a=""+(a.style[f.nb+"PngFix"]||a.currentStyle.getAttribute(f.F+"png-fix"))==="true"}return a},i:f.B.va(function(){return(this.wb()||this.qc())&&!!this.j()})});f.Vb=f.B.ka({wc:["Top","Right","Bottom","Left"],Id:{thin:"1px",medium:"3px",thick:"5px"},la:function(){var a={},b={},c={},d=false,e=true,g=true,j=true;this.Cc(function(){for(var i=this.e.currentStyle,h=0,k,n,m,p,r,t,v;h<4;h++){m=this.wc[h];v=m.charAt(0).toLowerCase();k=b[v]=i["border"+m+"Style"];n=i["border"+
47 | m+"Color"];m=i["border"+m+"Width"];if(h>0){if(k!==p)g=false;if(n!==r)e=false;if(m!==t)j=false}p=k;r=n;t=m;c[v]=f.ha(n);m=a[v]=f.n(b[v]==="none"?"0":this.Id[m]||m);if(m.a(this.e)>0)d=true}});return d?{J:a,Zd:b,gd:c,ee:j,hd:e,$d:g}:null},ia:f.B.va(function(){var a=this.e,b=a.currentStyle,c;a.tagName in f.Ac&&a.offsetParent.currentStyle.borderCollapse==="collapse"||this.Cc(function(){c=b.borderWidth+"|"+b.borderStyle+"|"+b.borderColor});return c}),Cc:function(a){var b=this.e.runtimeStyle,c=b.borderWidth,
48 | d=b.borderColor;if(c)b.borderWidth="";if(d)b.borderColor="";a=a.call(this);if(c)b.borderWidth=c;if(d)b.borderColor=d;return a}});(function(){f.jb=f.B.ka({wa:"border-radius",Fa:"borderRadius",la:function(b){var c=null,d,e,g,j,i=false;if(b){e=new f.v(b);var h=function(){for(var k=[],n;(g=e.next())&&g.W();){j=f.n(g.d);n=j.ic();if(n<0)return null;if(n>0)i=true;k.push(j)}return k.length>0&&k.length<5?{tl:k[0],tr:k[1]||k[0],br:k[2]||k[0],bl:k[3]||k[1]||k[0]}:null};if(b=h()){if(g){if(g.k&f.v.qa.pa&&g.d===
49 | "/")d=h()}else d=b;if(i&&b&&d)c={x:b,y:d}}}return c}});var a=f.n("0");a={tl:a,tr:a,br:a,bl:a};f.jb.Dc={x:a,y:a}})();f.Ub=f.B.ka({wa:"border-image",Fa:"borderImage",fb:{stretch:1,round:1,repeat:1,space:1},la:function(a){var b=null,c,d,e,g,j,i,h=0,k=f.v.qa,n=k.na,m=k.oa,p=k.Ra;if(a){c=new f.v(a);b={};for(var r=function(l){return l&&l.k&k.pa&&l.d==="/"},t=function(l){return l&&l.k&n&&l.d==="fill"},v=function(){g=c.ma(function(l){return!(l.k&(m|p))});if(t(c.next())&&!b.fill)b.fill=true;else c.D();if(r(c.next())){h++;
50 | j=c.ma(function(l){return!l.W()&&!(l.k&n&&l.d==="auto")});if(r(c.next())){h++;i=c.ma(function(l){return!l.Ca()})}}else c.D()};a=c.next();){d=a.k;e=a.d;if(d&(m|p)&&!g){c.D();v()}else if(t(a)&&!b.fill){b.fill=true;v()}else if(d&n&&this.fb[e]&&!b.repeat){b.repeat={f:e};if(a=c.next())if(a.k&n&&this.fb[a.d])b.repeat.Ob=a.d;else c.D()}else if(d&k.URL&&!b.src)b.src=e;else return null}if(!b.src||!g||g.length<1||g.length>4||j&&j.length>4||h===1&&j.length<1||i&&i.length>4||h===2&&i.length<1)return null;if(!b.repeat)b.repeat=
51 | {f:"stretch"};if(!b.repeat.Ob)b.repeat.Ob=b.repeat.f;a=function(l,q){return{t:q(l[0]),r:q(l[1]||l[0]),b:q(l[2]||l[0]),l:q(l[3]||l[1]||l[0])}};b.slice=a(g,function(l){return f.n(l.k&m?l.d+"px":l.d)});if(j&&j[0])b.J=a(j,function(l){return l.W()?f.n(l.d):l.d});if(i&&i[0])b.Da=a(i,function(l){return l.Ca()?f.n(l.d):l.d})}return b}});f.Ic=f.B.ka({wa:"box-shadow",Fa:"boxShadow",la:function(a){var b,c=f.n,d=f.v.qa,e;if(a){e=new f.v(a);b={Da:[],Bb:[]};for(a=function(){for(var g,j,i,h,k,n;g=e.next();){i=g.d;
52 | j=g.k;if(j&d.pa&&i===",")break;else if(g.Ca()&&!k){e.D();k=e.ma(function(m){return!m.Ca()})}else if(j&d.z&&!h)h=i;else if(j&d.na&&i==="inset"&&!n)n=true;else return false}g=k&&k.length;if(g>1&&g<5){(n?b.Bb:b.Da).push({fe:c(k[0].d),ge:c(k[1].d),blur:c(k[2]?k[2].d:"0"),Vd:c(k[3]?k[3].d:"0"),color:f.ha(h||"currentColor")});return true}return false};a(););}return b&&(b.Bb.length||b.Da.length)?b:null}});f.Uc=f.B.ka({ia:f.B.va(function(){var a=this.e.currentStyle;return a.visibility+"|"+a.display}),la:function(){var a=
53 | this.e,b=a.runtimeStyle;a=a.currentStyle;var c=b.visibility,d;b.visibility="";d=a.visibility;b.visibility=c;return{ce:d!=="hidden",nd:a.display!=="none"}},i:function(){return false}});f.u={R:function(a){function b(c,d,e,g){this.e=c;this.s=d;this.g=e;this.parent=g}f.p.Eb(b.prototype,f.u,a);return b},Cb:false,Q:function(){return false},Ea:f.aa,Lb:function(){this.m();this.i()&&this.V()},ib:function(){this.Cb=true},Mb:function(){this.i()?this.V():this.m()},sb:function(a,b){this.vc(a);for(var c=this.ra||
54 | (this.ra=[]),d=a+1,e=c.length,g;d<e;d++)if(g=c[d])break;c[a]=b;this.I().insertBefore(b,g||null)},za:function(a){var b=this.ra;return b&&b[a]||null},vc:function(a){var b=this.za(a),c=this.Ta;if(b&&c){c.removeChild(b);this.ra[a]=null}},Aa:function(a,b,c,d){var e=this.rb||(this.rb={}),g=e[a];if(!g){g=e[a]=f.p.Za("shape");if(b)g.appendChild(g[b]=f.p.Za(b));if(d){c=this.za(d);if(!c){this.sb(d,doc.createElement("group"+d));c=this.za(d)}}c.appendChild(g);a=g.style;a.position="absolute";a.left=a.top=0;a.behavior=
55 | "url(#default#VML)"}return g},vb:function(a){var b=this.rb,c=b&&b[a];if(c){c.parentNode.removeChild(c);delete b[a]}return!!c},kc:function(a){var b=this.e,c=this.s.o(),d=c.h,e=c.f,g,j,i,h,k,n;c=a.x.tl.a(b,d);g=a.y.tl.a(b,e);j=a.x.tr.a(b,d);i=a.y.tr.a(b,e);h=a.x.br.a(b,d);k=a.y.br.a(b,e);n=a.x.bl.a(b,d);a=a.y.bl.a(b,e);d=Math.min(d/(c+j),e/(i+k),d/(n+h),e/(g+a));if(d<1){c*=d;g*=d;j*=d;i*=d;h*=d;k*=d;n*=d;a*=d}return{x:{tl:c,tr:j,br:h,bl:n},y:{tl:g,tr:i,br:k,bl:a}}},ya:function(a,b,c){b=b||1;var d,e,
56 | g=this.s.o();e=g.h*b;g=g.f*b;var j=this.g.G,i=Math.floor,h=Math.ceil,k=a?a.Jb*b:0,n=a?a.Ib*b:0,m=a?a.tb*b:0;a=a?a.Db*b:0;var p,r,t,v,l;if(c||j.i()){d=this.kc(c||j.j());c=d.x.tl*b;j=d.y.tl*b;p=d.x.tr*b;r=d.y.tr*b;t=d.x.br*b;v=d.y.br*b;l=d.x.bl*b;b=d.y.bl*b;e="m"+i(a)+","+i(j)+"qy"+i(c)+","+i(k)+"l"+h(e-p)+","+i(k)+"qx"+h(e-n)+","+i(r)+"l"+h(e-n)+","+h(g-v)+"qy"+h(e-t)+","+h(g-m)+"l"+i(l)+","+h(g-m)+"qx"+i(a)+","+h(g-b)+" x e"}else e="m"+i(a)+","+i(k)+"l"+h(e-n)+","+i(k)+"l"+h(e-n)+","+h(g-m)+"l"+i(a)+
57 | ","+h(g-m)+"xe";return e},I:function(){var a=this.parent.za(this.N),b;if(!a){a=doc.createElement(this.Ya);b=a.style;b.position="absolute";b.top=b.left=0;this.parent.sb(this.N,a)}return a},mc:function(){var a=this.e,b=a.currentStyle,c=a.runtimeStyle,d=a.tagName,e=f.O===6,g;if(e&&(d in f.cc||d==="FIELDSET")||d==="BUTTON"||d==="INPUT"&&a.type in f.Gd){c.borderWidth="";d=this.g.w.wc;for(g=d.length;g--;){e=d[g];c["padding"+e]="";c["padding"+e]=f.n(b["padding"+e]).a(a)+f.n(b["border"+e+"Width"]).a(a)+(f.O!==
58 | 8&&g%2?1:0)}c.borderWidth=0}else if(e){if(a.childNodes.length!==1||a.firstChild.tagName!=="ie6-mask"){b=doc.createElement("ie6-mask");d=b.style;d.visibility="visible";for(d.zoom=1;d=a.firstChild;)b.appendChild(d);a.appendChild(b);c.visibility="hidden"}}else c.borderColor="transparent"},ie:function(){},m:function(){this.parent.vc(this.N);delete this.rb;delete this.ra}};f.Rc=f.u.R({i:function(){var a=this.ed;for(var b in a)if(a.hasOwnProperty(b)&&a[b].i())return true;return false},Q:function(){return this.g.Pb.H()},
59 | ib:function(){if(this.i()){var a=this.jc(),b=a,c;a=a.currentStyle;var d=a.position,e=this.I().style,g=0,j=0;j=this.s.o();var i=j.Hd;if(d==="fixed"&&f.O>6){g=j.x*i;j=j.y*i;b=d}else{do b=b.offsetParent;while(b&&b.currentStyle.position==="static");if(b){c=b.getBoundingClientRect();b=b.currentStyle;g=(j.x-c.left)*i-(parseFloat(b.borderLeftWidth)||0);j=(j.y-c.top)*i-(parseFloat(b.borderTopWidth)||0)}else{b=doc.documentElement;g=(j.x+b.scrollLeft-b.clientLeft)*i;j=(j.y+b.scrollTop-b.clientTop)*i}b="absolute"}e.position=
60 | b;e.left=g;e.top=j;e.zIndex=d==="static"?-1:a.zIndex;this.Cb=true}},Mb:f.aa,Nb:function(){var a=this.g.Pb.j();this.I().style.display=a.ce&&a.nd?"":"none"},Lb:function(){this.i()?this.Nb():this.m()},jc:function(){var a=this.e;return a.tagName in f.Ac?a.offsetParent:a},I:function(){var a=this.Ta,b;if(!a){b=this.jc();a=this.Ta=doc.createElement("css3-container");a.style.direction="ltr";this.Nb();b.parentNode.insertBefore(a,b)}return a},ab:f.aa,m:function(){var a=this.Ta,b;if(a&&(b=a.parentNode))b.removeChild(a);
61 | delete this.Ta;delete this.ra}});f.Fc=f.u.R({N:2,Ya:"background",Q:function(){var a=this.g;return a.C.H()||a.G.H()},i:function(){var a=this.g;return a.q.i()||a.G.i()||a.C.i()||a.ga.i()&&a.ga.j().Bb},V:function(){var a=this.s.o();if(a.h&&a.f){this.od();this.pd()}},od:function(){var a=this.g.C.j(),b=this.s.o(),c=this.e,d=a&&a.color,e,g;if(d&&d.fa()>0){this.lc();a=this.Aa("bgColor","fill",this.I(),1);e=b.h;b=b.f;a.stroked=false;a.coordsize=e*2+","+b*2;a.coordorigin="1,1";a.path=this.ya(null,2);g=a.style;
62 | g.width=e;g.height=b;a.fill.color=d.U(c);c=d.fa();if(c<1)a.fill.opacity=c}else this.vb("bgColor")},pd:function(){var a=this.g.C.j(),b=this.s.o();a=a&&a.M;var c,d,e,g,j;if(a){this.lc();d=b.h;e=b.f;for(j=a.length;j--;){b=a[j];c=this.Aa("bgImage"+j,"fill",this.I(),2);c.stroked=false;c.fill.type="tile";c.fillcolor="none";c.coordsize=d*2+","+e*2;c.coordorigin="1,1";c.path=this.ya(0,2);g=c.style;g.width=d;g.height=e;if(b.P==="linear-gradient")this.bd(c,b);else{c.fill.src=b.Ab;this.Nd(c,j)}}}for(j=a?a.length:
63 | 0;this.vb("bgImage"+j++););},Nd:function(a,b){var c=this;f.p.Rb(a.fill.src,function(d){var e=c.e,g=c.s.o(),j=g.h;g=g.f;if(j&&g){var i=a.fill,h=c.g,k=h.w.j(),n=k&&k.J;k=n?n.t.a(e):0;var m=n?n.r.a(e):0,p=n?n.b.a(e):0;n=n?n.l.a(e):0;h=h.C.j().M[b];e=h.$?h.$.coords(e,j-d.h-n-m,g-d.f-k-p):{x:0,y:0};h=h.bb;p=m=0;var r=j+1,t=g+1,v=f.O===8?0:1;n=Math.round(e.x)+n+0.5;k=Math.round(e.y)+k+0.5;i.position=n/j+","+k/g;i.size.x=1;i.size=d.h+"px,"+d.f+"px";if(h&&h!=="repeat"){if(h==="repeat-x"||h==="no-repeat"){m=
64 | k+1;t=k+d.f+v}if(h==="repeat-y"||h==="no-repeat"){p=n+1;r=n+d.h+v}a.style.clip="rect("+m+"px,"+r+"px,"+t+"px,"+p+"px)"}}})},bd:function(a,b){var c=this.e,d=this.s.o(),e=d.h,g=d.f;a=a.fill;d=b.ca;var j=d.length,i=Math.PI,h=f.Na,k=h.tc,n=h.dc;b=h.gc(c,e,g,b);h=b.sa;var m=b.xc,p=b.yc,r=b.Wd,t=b.Xd,v=b.rd,l=b.sd,q=b.kd,s=b.ld;b=b.rc;e=h%90?Math.atan2(q*e/g,s)/i*180:h+90;e+=180;e%=360;v=k(r,t,h,v,l);g=n(r,t,v[0],v[1]);i=[];v=k(m,p,h,r,t);n=n(m,p,v[0],v[1])/g*100;k=[];for(h=0;h<j;h++)k.push(d[h].db?d[h].db.a(c,
65 | b):h===0?0:h===j-1?b:null);for(h=1;h<j;h++){if(k[h]===null){m=k[h-1];b=h;do p=k[++b];while(p===null);k[h]=m+(p-m)/(b-h+1)}k[h]=Math.max(k[h],k[h-1])}for(h=0;h<j;h++)i.push(n+k[h]/g*100+"% "+d[h].color.U(c));a.angle=e;a.type="gradient";a.method="sigma";a.color=d[0].color.U(c);a.color2=d[j-1].color.U(c);if(a.colors)a.colors.value=i.join(",");else a.colors=i.join(",")},lc:function(){var a=this.e.runtimeStyle;a.backgroundImage="url(about:blank)";a.backgroundColor="transparent"},m:function(){f.u.m.call(this);
66 | var a=this.e.runtimeStyle;a.backgroundImage=a.backgroundColor=""}});f.Gc=f.u.R({N:4,Ya:"border",Q:function(){var a=this.g;return a.w.H()||a.G.H()},i:function(){var a=this.g;return a.G.i()&&!a.q.i()&&a.w.i()},V:function(){var a=this.e,b=this.g.w.j(),c=this.s.o(),d=c.h;c=c.f;var e,g,j,i,h;if(b){this.mc();b=this.wd(2);i=0;for(h=b.length;i<h;i++){j=b[i];e=this.Aa("borderPiece"+i,j.stroke?"stroke":"fill",this.I());e.coordsize=d*2+","+c*2;e.coordorigin="1,1";e.path=j.path;g=e.style;g.width=d;g.height=c;
67 | e.filled=!!j.fill;e.stroked=!!j.stroke;if(j.stroke){e=e.stroke;e.weight=j.Qb+"px";e.color=j.color.U(a);e.dashstyle=j.stroke==="dashed"?"2 2":j.stroke==="dotted"?"1 1":"solid";e.linestyle=j.stroke==="double"&&j.Qb>2?"ThinThin":"Single"}else e.fill.color=j.fill.U(a)}for(;this.vb("borderPiece"+i++););}},wd:function(a){var b=this.e,c,d,e,g=this.g.w,j=[],i,h,k,n,m=Math.round,p,r,t;if(g.i()){c=g.j();g=c.J;r=c.Zd;t=c.gd;if(c.ee&&c.$d&&c.hd){if(t.t.fa()>0){c=g.t.a(b);k=c/2;j.push({path:this.ya({Jb:k,Ib:k,
68 | tb:k,Db:k},a),stroke:r.t,color:t.t,Qb:c})}}else{a=a||1;c=this.s.o();d=c.h;e=c.f;c=m(g.t.a(b));k=m(g.r.a(b));n=m(g.b.a(b));b=m(g.l.a(b));var v={t:c,r:k,b:n,l:b};b=this.g.G;if(b.i())p=this.kc(b.j());i=Math.floor;h=Math.ceil;var l=function(o,u){return p?p[o][u]:0},q=function(o,u,x,y,z,B){var E=l("x",o),D=l("y",o),C=o.charAt(1)==="r";o=o.charAt(0)==="b";return E>0&&D>0?(B?"al":"ae")+(C?h(d-E):i(E))*a+","+(o?h(e-D):i(D))*a+","+(i(E)-u)*a+","+(i(D)-x)*a+","+y*65535+","+2949075*(z?1:-1):(B?"m":"l")+(C?d-
69 | u:u)*a+","+(o?e-x:x)*a},s=function(o,u,x,y){var z=o==="t"?i(l("x","tl"))*a+","+h(u)*a:o==="r"?h(d-u)*a+","+i(l("y","tr"))*a:o==="b"?h(d-l("x","br"))*a+","+i(e-u)*a:i(u)*a+","+h(e-l("y","bl"))*a;o=o==="t"?h(d-l("x","tr"))*a+","+h(u)*a:o==="r"?h(d-u)*a+","+h(e-l("y","br"))*a:o==="b"?i(l("x","bl"))*a+","+i(e-u)*a:i(u)*a+","+i(l("y","tl"))*a;return x?(y?"m"+o:"")+"l"+z:(y?"m"+z:"")+"l"+o};b=function(o,u,x,y,z,B){var E=o==="l"||o==="r",D=v[o],C,F;if(D>0&&r[o]!=="none"&&t[o].fa()>0){C=v[E?o:u];u=v[E?u:
70 | o];F=v[E?o:x];x=v[E?x:o];if(r[o]==="dashed"||r[o]==="dotted"){j.push({path:q(y,C,u,B+45,0,1)+q(y,0,0,B,1,0),fill:t[o]});j.push({path:s(o,D/2,0,1),stroke:r[o],Qb:D,color:t[o]});j.push({path:q(z,F,x,B,0,1)+q(z,0,0,B-45,1,0),fill:t[o]})}else j.push({path:q(y,C,u,B+45,0,1)+s(o,D,0,0)+q(z,F,x,B,0,0)+(r[o]==="double"&&D>2?q(z,F-i(F/3),x-i(x/3),B-45,1,0)+s(o,h(D/3*2),1,0)+q(y,C-i(C/3),u-i(u/3),B,1,0)+"x "+q(y,i(C/3),i(u/3),B+45,0,1)+s(o,i(D/3),1,0)+q(z,i(F/3),i(x/3),B,0,0):"")+q(z,0,0,B-45,1,0)+s(o,0,1,
71 | 0)+q(y,0,0,B,1,0),fill:t[o]})}};b("t","l","r","tl","tr",90);b("r","t","b","tr","br",0);b("b","r","l","br","bl",-90);b("l","b","t","bl","tl",-180)}}return j},m:function(){if(this.ec||!this.g.q.i())this.e.runtimeStyle.borderColor="";f.u.m.call(this)}});f.Tb=f.u.R({N:5,Md:["t","tr","r","br","b","bl","l","tl","c"],Q:function(){return this.g.q.H()},i:function(){return this.g.q.i()},V:function(){this.I();var a=this.g.q.j(),b=this.g.w.j(),c=this.s.o(),d=this.e,e=this.uc;f.p.Rb(a.src,function(g){function j(s,
72 | o,u,x,y){s=e[s].style;var z=Math.max;s.width=z(o,0);s.height=z(u,0);s.left=x;s.top=y}function i(s,o,u){for(var x=0,y=s.length;x<y;x++)e[s[x]].imagedata[o]=u}var h=c.h,k=c.f,n=f.n("0"),m=a.J||(b?b.J:{t:n,r:n,b:n,l:n});n=m.t.a(d);var p=m.r.a(d),r=m.b.a(d);m=m.l.a(d);var t=a.slice,v=t.t.a(d),l=t.r.a(d),q=t.b.a(d);t=t.l.a(d);j("tl",m,n,0,0);j("t",h-m-p,n,m,0);j("tr",p,n,h-p,0);j("r",p,k-n-r,h-p,n);j("br",p,r,h-p,k-r);j("b",h-m-p,r,m,k-r);j("bl",m,r,0,k-r);j("l",m,k-n-r,0,n);j("c",h-m-p,k-n-r,m,n);i(["tl",
73 | "t","tr"],"cropBottom",(g.f-v)/g.f);i(["tl","l","bl"],"cropRight",(g.h-t)/g.h);i(["bl","b","br"],"cropTop",(g.f-q)/g.f);i(["tr","r","br"],"cropLeft",(g.h-l)/g.h);i(["l","r","c"],"cropTop",v/g.f);i(["l","r","c"],"cropBottom",q/g.f);i(["t","b","c"],"cropLeft",t/g.h);i(["t","b","c"],"cropRight",l/g.h);e.c.style.display=a.fill?"":"none"},this)},I:function(){var a=this.parent.za(this.N),b,c,d,e=this.Md,g=e.length;if(!a){a=doc.createElement("border-image");b=a.style;b.position="absolute";this.uc={};for(d=
74 | 0;d<g;d++){c=this.uc[e[d]]=f.p.Za("rect");c.appendChild(f.p.Za("imagedata"));b=c.style;b.behavior="url(#default#VML)";b.position="absolute";b.top=b.left=0;c.imagedata.src=this.g.q.j().src;c.stroked=false;c.filled=false;a.appendChild(c)}this.parent.sb(this.N,a)}return a},Ea:function(){if(this.i()){var a=this.e,b=a.runtimeStyle,c=this.g.q.j().J;b.borderStyle="solid";if(c){b.borderTopWidth=c.t.a(a)+"px";b.borderRightWidth=c.r.a(a)+"px";b.borderBottomWidth=c.b.a(a)+"px";b.borderLeftWidth=c.l.a(a)+"px"}this.mc()}},
75 | m:function(){var a=this.e.runtimeStyle;a.borderStyle="";if(this.ec||!this.g.w.i())a.borderColor=a.borderWidth="";f.u.m.call(this)}});f.Hc=f.u.R({N:1,Ya:"outset-box-shadow",Q:function(){var a=this.g;return a.ga.H()||a.G.H()},i:function(){var a=this.g.ga;return a.i()&&a.j().Da[0]},V:function(){function a(C,F,O,H,M,P,I){C=b.Aa("shadow"+C+F,"fill",d,j-C);F=C.fill;C.coordsize=n*2+","+m*2;C.coordorigin="1,1";C.stroked=false;C.filled=true;F.color=M.U(c);if(P){F.type="gradienttitle";F.color2=F.color;F.opacity=
76 | 0}C.path=I;l=C.style;l.left=O;l.top=H;l.width=n;l.height=m;return C}var b=this,c=this.e,d=this.I(),e=this.g,g=e.ga.j().Da;e=e.G.j();var j=g.length,i=j,h,k=this.s.o(),n=k.h,m=k.f;k=f.O===8?1:0;for(var p=["tl","tr","br","bl"],r,t,v,l,q,s,o,u,x,y,z,B,E,D;i--;){t=g[i];q=t.fe.a(c);s=t.ge.a(c);h=t.Vd.a(c);o=t.blur.a(c);t=t.color;u=-h-o;if(!e&&o)e=f.jb.Dc;u=this.ya({Jb:u,Ib:u,tb:u,Db:u},2,e);if(o){x=(h+o)*2+n;y=(h+o)*2+m;z=x?o*2/x:0;B=y?o*2/y:0;if(o-h>n/2||o-h>m/2)for(h=4;h--;){r=p[h];E=r.charAt(0)==="b";
77 | D=r.charAt(1)==="r";r=a(i,r,q,s,t,o,u);v=r.fill;v.focusposition=(D?1-z:z)+","+(E?1-B:B);v.focussize="0,0";r.style.clip="rect("+((E?y/2:0)+k)+"px,"+(D?x:x/2)+"px,"+(E?y:y/2)+"px,"+((D?x/2:0)+k)+"px)"}else{r=a(i,"",q,s,t,o,u);v=r.fill;v.focusposition=z+","+B;v.focussize=1-z*2+","+(1-B*2)}}else{r=a(i,"",q,s,t,o,u);q=t.fa();if(q<1)r.fill.opacity=q}}}});f.Pc=f.u.R({N:6,Ya:"imgEl",Q:function(){var a=this.g;return this.e.src!==this.Xc||a.G.H()},i:function(){var a=this.g;return a.G.i()||a.C.qc()},V:function(){this.Xc=
78 | j;this.Cd();var a=this.Aa("img","fill",this.I()),b=a.fill,c=this.s.o(),d=c.h;c=c.f;var e=this.g.w.j(),g=e&&e.J;e=this.e;var j=e.src,i=Math.round,h=e.currentStyle,k=f.n;if(!g||f.O<7){g=f.n("0");g={t:g,r:g,b:g,l:g}}a.stroked=false;b.type="frame";b.src=j;b.position=(d?0.5/d:0)+","+(c?0.5/c:0);a.coordsize=d*2+","+c*2;a.coordorigin="1,1";a.path=this.ya({Jb:i(g.t.a(e)+k(h.paddingTop).a(e)),Ib:i(g.r.a(e)+k(h.paddingRight).a(e)),tb:i(g.b.a(e)+k(h.paddingBottom).a(e)),Db:i(g.l.a(e)+k(h.paddingLeft).a(e))},
79 | 2);a=a.style;a.width=d;a.height=c},Cd:function(){this.e.runtimeStyle.filter="alpha(opacity=0)"},m:function(){f.u.m.call(this);this.e.runtimeStyle.filter=""}});f.Oc=f.u.R({ib:f.aa,Mb:f.aa,Nb:f.aa,Lb:f.aa,Ld:/^,+|,+$/g,Fd:/,+/g,gb:function(a,b){(this.pb||(this.pb=[]))[a]=b||void 0},ab:function(){var a=this.pb,b;if(a&&(b=a.join(",").replace(this.Ld,"").replace(this.Fd,","))!==this.Wc)this.Wc=this.e.runtimeStyle.background=b},m:function(){this.e.runtimeStyle.background="";delete this.pb}});f.Mc=f.u.R({ua:1,
80 | Q:function(){return this.g.C.H()},i:function(){var a=this.g;return a.C.i()||a.q.i()},V:function(){var a=this.g.C.j(),b,c,d=0,e,g;if(a){b=[];if(c=a.M)for(;e=c[d++];)if(e.P==="linear-gradient"){g=this.vd(e.Wa);g=(e.Xa||f.Ka.Kc).a(this.e,g.h,g.f,g.h,g.f);b.push("url(data:image/svg+xml,"+escape(this.xd(e,g.h,g.f))+") "+this.dd(e.$)+" / "+g.h+"px "+g.f+"px "+(e.bc||"")+" "+(e.Wa||"")+" "+(e.ub||""))}else b.push(e.Hb);a.color&&b.push(a.color.Y);this.parent.gb(this.ua,b.join(","))}},dd:function(a){return a?
81 | a.X.map(function(b){return b.d}).join(" "):"0 0"},vd:function(a){var b=this.e,c=this.s.o(),d=c.h;c=c.f;var e;if(a!=="border-box")if((e=this.g.w.j())&&(e=e.J)){d-=e.l.a(b)+e.l.a(b);c-=e.t.a(b)+e.b.a(b)}if(a==="content-box"){a=f.n;e=b.currentStyle;d-=a(e.paddingLeft).a(b)+a(e.paddingRight).a(b);c-=a(e.paddingTop).a(b)+a(e.paddingBottom).a(b)}return{h:d,f:c}},xd:function(a,b,c){var d=this.e,e=a.ca,g=e.length,j=f.Na.gc(d,b,c,a);a=j.xc;var i=j.yc,h=j.td,k=j.ud;j=j.rc;var n,m,p,r,t;n=[];for(m=0;m<g;m++)n.push(e[m].db?
82 | e[m].db.a(d,j):m===0?0:m===g-1?j:null);for(m=1;m<g;m++)if(n[m]===null){r=n[m-1];p=m;do t=n[++p];while(t===null);n[m]=r+(t-r)/(p-m+1)}b=['<svg width="'+b+'" height="'+c+'" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="g" gradientUnits="userSpaceOnUse" x1="'+a/b*100+'%" y1="'+i/c*100+'%" x2="'+h/b*100+'%" y2="'+k/c*100+'%">'];for(m=0;m<g;m++)b.push('<stop offset="'+n[m]/j+'" stop-color="'+e[m].color.U(d)+'" stop-opacity="'+e[m].color.fa()+'"/>');b.push('</linearGradient></defs><rect width="100%" height="100%" fill="url(#g)"/></svg>');
83 | return b.join("")},m:function(){this.parent.gb(this.ua)}});f.Nc=f.u.R({T:"repeat",Sc:"stretch",Qc:"round",ua:0,Q:function(){return this.g.q.H()},i:function(){return this.g.q.i()},V:function(){var a=this,b=a.g.q.j(),c=a.g.w.j(),d=a.s.o(),e=b.repeat,g=e.f,j=e.Ob,i=a.e,h=0;f.p.Rb(b.src,function(k){function n(Q,R,U,V,W,Y,X,S,w,A){K.push('<pattern patternUnits="userSpaceOnUse" id="pattern'+G+'" x="'+(g===l?Q+U/2-w/2:Q)+'" y="'+(j===l?R+V/2-A/2:R)+'" width="'+w+'" height="'+A+'"><svg width="'+w+'" height="'+
84 | A+'" viewBox="'+W+" "+Y+" "+X+" "+S+'" preserveAspectRatio="none"><image xlink:href="'+v+'" x="0" y="0" width="'+r+'" height="'+t+'" /></svg></pattern>');J.push('<rect x="'+Q+'" y="'+R+'" width="'+U+'" height="'+V+'" fill="url(#pattern'+G+')" />');G++}var m=d.h,p=d.f,r=k.h,t=k.f,v=a.Dd(b.src,r,t),l=a.T,q=a.Sc;k=a.Qc;var s=Math.ceil,o=f.n("0"),u=b.J||(c?c.J:{t:o,r:o,b:o,l:o});o=u.t.a(i);var x=u.r.a(i),y=u.b.a(i);u=u.l.a(i);var z=b.slice,B=z.t.a(i),E=z.r.a(i),D=z.b.a(i);z=z.l.a(i);var C=m-u-x,F=p-o-
85 | y,O=r-z-E,H=t-B-D,M=g===q?C:O*o/B,P=j===q?F:H*x/E,I=g===q?C:O*y/D;q=j===q?F:H*u/z;var K=[],J=[],G=0;if(g===k){M-=(M-(C%M||M))/s(C/M);I-=(I-(C%I||I))/s(C/I)}if(j===k){P-=(P-(F%P||P))/s(F/P);q-=(q-(F%q||q))/s(F/q)}k=['<svg width="'+m+'" height="'+p+'" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">'];n(0,0,u,o,0,0,z,B,u,o);n(u,0,C,o,z,0,O,B,M,o);n(m-x,0,x,o,r-E,0,E,B,x,o);n(0,o,u,F,0,B,z,H,u,q);if(b.fill)n(u,o,C,F,z,B,O,H,M||I||O,q||P||H);n(m-x,o,x,F,r-E,B,E,H,x,P);n(0,
86 | p-y,u,y,0,t-D,z,D,u,y);n(u,p-y,C,y,z,t-D,O,D,I,y);n(m-x,p-y,x,y,r-E,t-D,E,D,x,y);k.push("<defs>"+K.join("\n")+"</defs>"+J.join("\n")+"</svg>");a.parent.gb(a.ua,"url(data:image/svg+xml,"+escape(k.join(""))+") no-repeat border-box border-box");h&&a.parent.ab()},a);h=1},Dd:function(){var a={};return function(b,c,d){var e=a[b],g;if(!e){e=new Image;g=doc.createElement("canvas");e.src=b;g.width=c;g.height=d;g.getContext("2d").drawImage(e,0,0);e=a[b]=g.toDataURL()}return e}}(),Ea:f.Tb.prototype.Ea,m:function(){var a=
87 | this.e.runtimeStyle;this.parent.gb(this.ua);a.borderColor=a.borderStyle=a.borderWidth=""}});f.kb=function(){function a(l,q){l.className+=" "+q}function b(l){var q=v.slice.call(arguments,1),s=q.length;setTimeout(function(){if(l)for(;s--;)a(l,q[s])},0)}function c(l){var q=v.slice.call(arguments,1),s=q.length;setTimeout(function(){if(l)for(;s--;){var o=q[s];o=t[o]||(t[o]=new RegExp("\\b"+o+"\\b","g"));l.className=l.className.replace(o,"")}},0)}function d(l){function q(){if(!U){var w,A,L=f.ja,T=l.currentStyle,
88 | N=T.getAttribute(g)==="true",da=T.getAttribute(i)!=="false",ea=T.getAttribute(h)!=="false";S=T.getAttribute(j);S=L>7?S!=="false":S==="true";if(!R){R=1;l.runtimeStyle.zoom=1;T=l;for(var fa=1;T=T.previousSibling;)if(T.nodeType===1){fa=0;break}fa&&a(l,p)}J.cb();if(N&&(A=J.o())&&(w=doc.documentElement||doc.body)&&(A.y>w.clientHeight||A.x>w.clientWidth||A.y+A.f<0||A.x+A.h<0)){if(!Y){Y=1;f.mb.ba(q)}}else{U=1;Y=R=0;f.mb.Ha(q);if(L===9){G={C:new f.Sb(l),q:new f.Ub(l),w:new f.Vb(l)};Q=[G.C,G.q];K=new f.Oc(l,
89 | J,G);w=[new f.Mc(l,J,G,K),new f.Nc(l,J,G,K)]}else{G={C:new f.Sb(l),w:new f.Vb(l),q:new f.Ub(l),G:new f.jb(l),ga:new f.Ic(l),Pb:new f.Uc(l)};Q=[G.C,G.w,G.q,G.G,G.ga,G.Pb];K=new f.Rc(l,J,G);w=[new f.Hc(l,J,G,K),new f.Fc(l,J,G,K),new f.Gc(l,J,G,K),new f.Tb(l,J,G,K)];l.tagName==="IMG"&&w.push(new f.Pc(l,J,G,K));K.ed=w}I=[K].concat(w);if(w=l.currentStyle.getAttribute(f.F+"watch-ancestors")){w=parseInt(w,10);A=0;for(N=l.parentNode;N&&(w==="NaN"||A++<w);){H(N,"onpropertychange",C);H(N,"onmouseenter",x);
90 | H(N,"onmouseleave",y);H(N,"onmousedown",z);if(N.tagName in f.fc){H(N,"onfocus",E);H(N,"onblur",D)}N=N.parentNode}}if(S){f.Oa.ba(o);f.Oa.Rd()}o(1)}if(!V){V=1;L<9&&H(l,"onmove",s);H(l,"onresize",s);H(l,"onpropertychange",u);ea&&H(l,"onmouseenter",x);if(ea||da)H(l,"onmouseleave",y);da&&H(l,"onmousedown",z);if(l.tagName in f.fc){H(l,"onfocus",E);H(l,"onblur",D)}f.Qa.ba(s);f.L.ba(M)}J.hb()}}function s(){J&&J.Ad()&&o()}function o(w){if(!X)if(U){var A,L=I.length;F();for(A=0;A<L;A++)I[A].Ea();if(w||J.Od())for(A=
91 | 0;A<L;A++)I[A].ib();if(w||J.Td())for(A=0;A<L;A++)I[A].Mb();K.ab();O()}else R||q()}function u(){var w,A=I.length,L;w=event;if(!X&&!(w&&w.propertyName in r))if(U){F();for(w=0;w<A;w++)I[w].Ea();for(w=0;w<A;w++){L=I[w];L.Cb||L.ib();L.Q()&&L.Lb()}K.ab();O()}else R||q()}function x(){b(l,k)}function y(){c(l,k,n)}function z(){b(l,n);f.lb.ba(B)}function B(){c(l,n);f.lb.Ha(B)}function E(){b(l,m)}function D(){c(l,m)}function C(){var w=event.propertyName;if(w==="className"||w==="id")u()}function F(){J.cb();for(var w=
92 | Q.length;w--;)Q[w].cb()}function O(){for(var w=Q.length;w--;)Q[w].hb();J.hb()}function H(w,A,L){w.attachEvent(A,L);W.push([w,A,L])}function M(){if(V){for(var w=W.length,A;w--;){A=W[w];A[0].detachEvent(A[1],A[2])}f.L.Ha(M);V=0;W=[]}}function P(){if(!X){var w,A;M();X=1;if(I){w=0;for(A=I.length;w<A;w++){I[w].ec=1;I[w].m()}}S&&f.Oa.Ha(o);f.Qa.Ha(o);I=J=G=Q=l=null}}var I,K,J=new ha(l),G,Q,R,U,V,W=[],Y,X,S;this.Ed=q;this.update=o;this.m=P;this.qd=l}var e={},g=f.F+"lazy-init",j=f.F+"poll",i=f.F+"track-active",
93 | h=f.F+"track-hover",k=f.La+"hover",n=f.La+"active",m=f.La+"focus",p=f.La+"first-child",r={background:1,bgColor:1,display:1},t={},v=[];d.yd=function(l){var q=f.p.Ba(l);return e[q]||(e[q]=new d(l))};d.m=function(l){l=f.p.Ba(l);var q=e[l];if(q){q.m();delete e[l]}};d.md=function(){var l=[],q;if(e){for(var s in e)if(e.hasOwnProperty(s)){q=e[s];l.push(q.qd);q.m()}e={}}return l};return d}();f.supportsVML=f.zc;f.attach=function(a){f.ja<10&&f.zc&&f.kb.yd(a).Ed()};f.detach=function(a){f.kb.m(a)}};
94 | var $=element;function init(){if(doc.media!=="print"){var a=window.PIE;a&&a.attach($)}}function cleanup(){if(doc.media!=="print"){var a=window.PIE;if(a){a.detach($);$=0}}}$.readyState==="complete"&&init();
95 | </script>
96 | </PUBLIC:COMPONENT>
97 | 


--------------------------------------------------------------------------------
/assets/js/ie/backgroundsize.min.htc:
--------------------------------------------------------------------------------
1 | <component lightWeight="true">
2 | <attach event="onpropertychange" onevent="handlePropertychange()" />
3 | <attach event="ondetach" onevent="restore()" />
4 | <attach event="onresize" for="window" onevent="handleResize()" />
5 | <script type="text/javascript">
6 | var rsrc=/url\(["']?(.*?)["']?\)/,positions={top:0,left:0,bottom:1,right:1,center:0.5},doc=element.document;init(); function init(){var b=doc.createElement("div"),a=doc.createElement("img"),c,d;b.style.position="absolute";b.style.zIndex=-1;b.style.top=0;b.style.right=0;b.style.left=0;b.style.bottom=0;b.style.overflow="hidden";a.style.position="absolute";a.style.width=a.style.width="auto";b.appendChild(a);element.insertBefore(b,element.firstChild);d=[element.currentStyle.backgroundPositionX,element.currentStyle.backgroundPositionY];element.bgsExpando=c={wrapper:b,img:a,backgroundSize:element.currentStyle["background-size"], backgroundPositionX:positions[d[0]]||parseFloat(d[0])/100,backgroundPositionY:positions[d[1]]||parseFloat(d[1])/100};"auto"==element.currentStyle.zIndex&&(element.style.zIndex=0);"static"==element.currentStyle.position&&(element.style.position="relative");refreshDisplay(element,c)&&(refreshDimensions(element,c),refreshBackgroundImage(element,c,function(){updateBackground(element,c)}))} function refreshDisplay(b,a){var c=b.currentStyle.display;c!=a.display&&(a.display=c,a.somethingChanged=!0);return"none"!=c}function refreshDimensions(b,a){var c=b.offsetWidth-(parseFloat(b.currentStyle.borderLeftWidth)||0)-(parseFloat(b.currentStyle.borderRightWidth)||0),d=b.offsetHeight-(parseFloat(b.currentStyle.borderTopWidth)||0)-(parseFloat(b.currentStyle.borderBottomWidth)||0);if(c!=a.innerWidth||d!=a.innerHeight)a.innerWidth=c,a.innerHeight=d,a.somethingChanged=!0} function refreshBackgroundImage(b,a,c){var d=a.img,e=(rsrc.exec(b.currentStyle.backgroundImage)||[])[1];if(e&&e!=a.backgroundSrc){a.backgroundSrc=e;a.somethingChanged=!0;d.onload=function(){var b=d.width,e=d.height;1==b&&1==e||(a.imgWidth=b,a.imgHeight=e,a.constrain=!1,c(),d.style.visibility="visible",d.onload=null)};d.style.visibility="hidden";d.src=a.backgroundSrc;if(d.readyState||d.complete)d.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",d.src=a.backgroundSrc;a.ignoreNextPropertyChange= !0;b.style.backgroundImage="none"}else c()} function updateBackground(b,a){if(a.somethingChanged){var c=a.img,d=a.innerWidth/a.innerHeight,e=a.imgWidth/a.imgHeight,f=a.constrain;"contain"==a.backgroundSize?e>d?(a.constrain=d="width",e=Math.floor((a.innerHeight-a.innerWidth/e)*a.backgroundPositionY),c.style.top=e+"px",d!=f&&(c.style.width="100%",c.style.height="auto",c.style.left=0)):(a.constrain=d="height",e=Math.floor((a.innerWidth-a.innerHeight*e)*a.backgroundPositionX),c.style.left=e+"px",d!=f&&(c.style.width="auto",c.style.height="100%", c.style.top=0)):"cover"==a.backgroundSize&&(e>d?(a.constrain=d="height",e=Math.floor((a.innerHeight*e-a.innerWidth)*a.backgroundPositionX),c.style.left=-e+"px",d!=f&&(c.style.width="auto",c.style.height="100%",c.style.top=0)):(a.constrain=d="width",e=Math.floor((a.innerWidth/e-a.innerHeight)*a.backgroundPositionY),c.style.top=-e+"px",d!=f&&(c.style.width="100%",c.style.height="auto",c.style.left=0)));a.somethingChanged=!1}} function handlePropertychange(){var b=element.bgsExpando;b.ignoreNextPropertyChange?b.ignoreNextPropertyChange=!1:refreshDisplay(element,b)&&(refreshDimensions(element,b),refreshBackgroundImage(element,b,function(){updateBackground(element,b)}))}function handleResize(){var b=element.bgsExpando;"none"!=b.display&&(refreshDimensions(element,b),updateBackground(element,b))} function restore(){var b=element.bgsExpando;try{element.style.backgroundImage="url('"+b.backgroundSrc+"')",element.removeChild(b.wrapper),element.bgsExpando=null}catch(a){}};
7 | </script>


--------------------------------------------------------------------------------
/assets/js/ie/html5shiv.js:
--------------------------------------------------------------------------------
1 | /*
2 |  HTML5 Shiv v3.6.2 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
3 | */
4 | (function(l,f){function m(){var a=e.elements;return"string"==typeof a?a.split(" "):a}function i(a){var b=n[a[o]];b||(b={},h++,a[o]=h,n[h]=b);return b}function p(a,b,c){b||(b=f);if(g)return b.createElement(a);c||(c=i(b));b=c.cache[a]?c.cache[a].cloneNode():r.test(a)?(c.cache[a]=c.createElem(a)).cloneNode():c.createElem(a);return b.canHaveChildren&&!s.test(a)?c.frag.appendChild(b):b}function t(a,b){if(!b.cache)b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag();
5 | a.createElement=function(c){return!e.shivMethods?b.createElem(c):p(c,a,b)};a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/\w+/g,function(a){b.createElem(a);b.frag.createElement(a);return'c("'+a+'")'})+");return n}")(e,b.frag)}function q(a){a||(a=f);var b=i(a);if(e.shivCSS&&!j&&!b.hasCSS){var c,d=a;c=d.createElement("p");d=d.getElementsByTagName("head")[0]||d.documentElement;c.innerHTML="x<style>article,aside,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}</style>";
6 | c=d.insertBefore(c.lastChild,d.firstChild);b.hasCSS=!!c}g||t(a,b);return a}var k=l.html5||{},s=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,r=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,j,o="_html5shiv",h=0,n={},g;(function(){try{var a=f.createElement("a");a.innerHTML="<xyz></xyz>";j="hidden"in a;var b;if(!(b=1==a.childNodes.length)){f.createElement("a");var c=f.createDocumentFragment();b="undefined"==typeof c.cloneNode||
7 | "undefined"==typeof c.createDocumentFragment||"undefined"==typeof c.createElement}g=b}catch(d){g=j=!0}})();var e={elements:k.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup main mark meter nav output progress section summary time video",version:"3.6.2",shivCSS:!1!==k.shivCSS,supportsUnknownElements:g,shivMethods:!1!==k.shivMethods,type:"default",shivDocument:q,createElement:p,createDocumentFragment:function(a,b){a||(a=f);if(g)return a.createDocumentFragment();
8 | for(var b=b||i(a),c=b.frag.cloneNode(),d=0,e=m(),h=e.length;d<h;d++)c.createElement(e[d]);return c}};l.html5=e;q(f)})(this,document);
9 | 


--------------------------------------------------------------------------------
/assets/js/ie/respond.min.js:
--------------------------------------------------------------------------------
1 | /*! Respond.js v1.4.2: min/max-width media query polyfill
2 |  * Copyright 2014 Scott Jehl
3 |  * Licensed under MIT
4 |  * http://j.mp/respondjs */
5 | 
6 | !function(a){"use strict";a.matchMedia=a.matchMedia||function(a){var b,c=a.documentElement,d=c.firstElementChild||c.firstChild,e=a.createElement("body"),f=a.createElement("div");return f.id="mq-test-1",f.style.cssText="position:absolute;top:-100em",e.style.background="none",e.appendChild(f),function(a){return f.innerHTML='&shy;<style media="'+a+'"> #mq-test-1 { width: 42px; }</style>',c.insertBefore(e,d),b=42===f.offsetWidth,c.removeChild(e),{matches:b,media:a}}}(a.document)}(this),function(a){"use strict";function b(){v(!0)}var c={};a.respond=c,c.update=function(){};var d=[],e=function(){var b=!1;try{b=new a.XMLHttpRequest}catch(c){b=new a.ActiveXObject("Microsoft.XMLHTTP")}return function(){return b}}(),f=function(a,b){var c=e();c&&(c.open("GET",a,!0),c.onreadystatechange=function(){4!==c.readyState||200!==c.status&&304!==c.status||b(c.responseText)},4!==c.readyState&&c.send(null))},g=function(a){return a.replace(c.regex.minmaxwh,"").match(c.regex.other)};if(c.ajax=f,c.queue=d,c.unsupportedmq=g,c.regex={media:/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,keyframes:/@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,comments:/\/\*[^*]*\*+([^/][^*]*\*+)*\//gi,urls:/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,findStyles:/@media *([^\{]+)\{([\S\s]+?)$/,only:/(only\s+)?([a-zA-Z]+)\s?/,minw:/\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,maxw:/\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,minmaxwh:/\(\s*m(in|ax)\-(height|width)\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/gi,other:/\([^\)]*\)/g},c.mediaQueriesSupported=a.matchMedia&&null!==a.matchMedia("only all")&&a.matchMedia("only all").matches,!c.mediaQueriesSupported){var h,i,j,k=a.document,l=k.documentElement,m=[],n=[],o=[],p={},q=30,r=k.getElementsByTagName("head")[0]||l,s=k.getElementsByTagName("base")[0],t=r.getElementsByTagName("link"),u=function(){var a,b=k.createElement("div"),c=k.body,d=l.style.fontSize,e=c&&c.style.fontSize,f=!1;return b.style.cssText="position:absolute;font-size:1em;width:1em",c||(c=f=k.createElement("body"),c.style.background="none"),l.style.fontSize="100%",c.style.fontSize="100%",c.appendChild(b),f&&l.insertBefore(c,l.firstChild),a=b.offsetWidth,f?l.removeChild(c):c.removeChild(b),l.style.fontSize=d,e&&(c.style.fontSize=e),a=j=parseFloat(a)},v=function(b){var c="clientWidth",d=l[c],e="CSS1Compat"===k.compatMode&&d||k.body[c]||d,f={},g=t[t.length-1],p=(new Date).getTime();if(b&&h&&q>p-h)return a.clearTimeout(i),i=a.setTimeout(v,q),void 0;h=p;for(var s in m)if(m.hasOwnProperty(s)){var w=m[s],x=w.minw,y=w.maxw,z=null===x,A=null===y,B="em";x&&(x=parseFloat(x)*(x.indexOf(B)>-1?j||u():1)),y&&(y=parseFloat(y)*(y.indexOf(B)>-1?j||u():1)),w.hasquery&&(z&&A||!(z||e>=x)||!(A||y>=e))||(f[w.media]||(f[w.media]=[]),f[w.media].push(n[w.rules]))}for(var C in o)o.hasOwnProperty(C)&&o[C]&&o[C].parentNode===r&&r.removeChild(o[C]);o.length=0;for(var D in f)if(f.hasOwnProperty(D)){var E=k.createElement("style"),F=f[D].join("\n");E.type="text/css",E.media=D,r.insertBefore(E,g.nextSibling),E.styleSheet?E.styleSheet.cssText=F:E.appendChild(k.createTextNode(F)),o.push(E)}},w=function(a,b,d){var e=a.replace(c.regex.comments,"").replace(c.regex.keyframes,"").match(c.regex.media),f=e&&e.length||0;b=b.substring(0,b.lastIndexOf("/"));var h=function(a){return a.replace(c.regex.urls,"$1"+b+"$2$3")},i=!f&&d;b.length&&(b+="/"),i&&(f=1);for(var j=0;f>j;j++){var k,l,o,p;i?(k=d,n.push(h(a))):(k=e[j].match(c.regex.findStyles)&&RegExp.$1,n.push(RegExp.$2&&h(RegExp.$2))),o=k.split(","),p=o.length;for(var q=0;p>q;q++)l=o[q],g(l)||m.push({media:l.split("(")[0].match(c.regex.only)&&RegExp.$2||"all",rules:n.length-1,hasquery:l.indexOf("(")>-1,minw:l.match(c.regex.minw)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:l.match(c.regex.maxw)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}v()},x=function(){if(d.length){var b=d.shift();f(b.href,function(c){w(c,b.href,b.media),p[b.href]=!0,a.setTimeout(function(){x()},0)})}},y=function(){for(var b=0;b<t.length;b++){var c=t[b],e=c.href,f=c.media,g=c.rel&&"stylesheet"===c.rel.toLowerCase();e&&g&&!p[e]&&(c.styleSheet&&c.styleSheet.rawCssText?(w(c.styleSheet.rawCssText,e,f),p[e]=!0):(!/^([a-zA-Z:]*\/\/)/.test(e)&&!s||e.replace(RegExp.$1,"").split("/")[0]===a.location.host)&&("//"===e.substring(0,2)&&(e=a.location.protocol+e),d.push({href:e,media:f})))}x()};y(),c.update=y,c.getEmValue=u,a.addEventListener?a.addEventListener("resize",b,!1):a.attachEvent&&a.attachEvent("onresize",b)}}(this);


--------------------------------------------------------------------------------
/assets/js/jquery.scrolly.min.js:
--------------------------------------------------------------------------------
1 | /* jquery.scrolly v1.0.0-dev | (c) @ajlkn | MIT licensed */
2 | (function(e){function u(s,o){var u,a,f;if((u=e(s))[t]==0)return n;a=u[i]()[r];switch(o.anchor){case"middle":f=a-(e(window).height()-u.outerHeight())/2;break;default:case r:f=Math.max(a,0)}return typeof o[i]=="function"?f-=o[i]():f-=o[i],f}var t="length",n=null,r="top",i="offset",s="click.scrolly",o=e(window);e.fn.scrolly=function(i){var o,a,f,l,c=e(this);if(this[t]==0)return c;if(this[t]>1){for(o=0;o<this[t];o++)e(this[o]).scrolly(i);return c}l=n,f=c.attr("href");if(f.charAt(0)!="#"||f[t]<2)return c;a=jQuery.extend({anchor:r,easing:"swing",offset:0,parent:e("body,html"),pollOnce:!1,speed:1e3},i),a.pollOnce&&(l=u(f,a)),c.off(s).on(s,function(e){var t=l!==n?l:u(f,a);t!==n&&(e.preventDefault(),a.parent.stop().animate({scrollTop:t},a.speed,a.easing))})}})(jQuery);


--------------------------------------------------------------------------------
/assets/js/jquery.scrollzer.min.js:
--------------------------------------------------------------------------------
1 | /* jquery.scrollzer v0.2 | (c) @ajlkn | MIT licensed */
2 | jQuery.scrollzer=function(e,t){var r=jQuery(window),a=jQuery(document);r.load(function(){var i,o,s,l,n,c,u=jQuery.extend({activeClassName:"active",suffix:"-link",pad:50,firstHack:!1,lastHack:!1},t),d=[],f=jQuery();for(i in e)s=jQuery("#"+e[i]),l=jQuery("#"+e[i]+u.suffix),s.length<1||l.length<1||(o={},o.link=l,o.object=s,d[e[i]]=o,f=f.add(l));var v,h=function(){var e;for(i in d)e=d[i],e.start=Math.ceil(e.object.offset().top)-u.pad,e.end=e.start+Math.ceil(e.object.innerHeight());r.trigger("scroll")};r.resize(function(){window.clearTimeout(v),v=window.setTimeout(h,250)});var j,m=function(){f.removeClass("scrollzer-locked")};r.scroll(function(e){var t=0,o=!1;n=r.scrollTop(),window.clearTimeout(j),j=window.setTimeout(m,250);for(i in d)i!=c&&n>=d[i].start&&n<=d[i].end&&(c=i,o=!0),t++;u.lastHack&&n+r.height()>=a.height()&&(c=i,o=!0),o&&!f.hasClass("scrollzer-locked")&&(f.removeClass(u.activeClassName),d[c].link.addClass(u.activeClassName))}),r.trigger("resize")})};
3 | 


--------------------------------------------------------------------------------
/assets/js/main.js:
--------------------------------------------------------------------------------
  1 | /*
  2 | 	Prologue by HTML5 UP
  3 | 	html5up.net | @ajlkn
  4 | 	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
  5 | */
  6 | 
  7 | (function($) {
  8 | 
  9 | 	skel.breakpoints({
 10 | 		wide: '(min-width: 961px) and (max-width: 1880px)',
 11 | 		normal: '(min-width: 961px) and (max-width: 1620px)',
 12 | 		narrow: '(min-width: 961px) and (max-width: 1320px)',
 13 | 		narrower: '(max-width: 960px)',
 14 | 		mobile: '(max-width: 736px)'
 15 | 	});
 16 | 
 17 | 	$(function() {
 18 | 
 19 | 		var	$window = $(window),
 20 | 			$body = $('body');
 21 | 
 22 | 		// Disable animations/transitions until the page has loaded.
 23 | 			$body.addClass('is-loading');
 24 | 
 25 | 			$window.on('load', function() {
 26 | 				$body.removeClass('is-loading');
 27 | 			});
 28 | 
 29 | 		// CSS polyfills (IE<9).
 30 | 			if (skel.vars.IEVersion < 9)
 31 | 				$(':last-child').addClass('last-child');
 32 | 
 33 | 		// Fix: Placeholder polyfill.
 34 | 			$('form').placeholder();
 35 | 
 36 | 		// Prioritize "important" elements on mobile.
 37 | 			skel.on('+mobile -mobile', function() {
 38 | 				$.prioritize(
 39 | 					'.important\\28 mobile\\29',
 40 | 					skel.breakpoint('mobile').active
 41 | 				);
 42 | 			});
 43 | 
 44 | 		// Scrolly links.
 45 | 			$('.scrolly').scrolly();
 46 | 
 47 | 		// Nav.
 48 | 			var $nav_a = $('#nav a.scrolly');
 49 | 
 50 | 			// Scrolly-fy links.
 51 | 				if($nav_a.scrolly()){
 52 | 					$nav_a
 53 | 						.scrolly()
 54 | 						.on('click', function(e) {
 55 | 
 56 | 							var t = $(this),
 57 | 								href = t.attr('href');
 58 | 
 59 | 							if (href[0] != '#')
 60 | 								return;
 61 | 
 62 | 							e.preventDefault();
 63 | 
 64 | 							// Clear active and lock scrollzer until scrolling has stopped
 65 | 								$nav_a
 66 | 									.removeClass('active')
 67 | 									.addClass('scrollzer-locked');
 68 | 
 69 | 							// Set this link to active
 70 | 								t.addClass('active');
 71 | 
 72 | 						});
 73 | 				}
 74 | 
 75 | 			// Initialize scrollzer.
 76 | 				var ids = [];
 77 | 
 78 | 				$nav_a.each(function() {
 79 | 
 80 | 					var href = $(this).attr('href');
 81 | 
 82 | 					if (href[0] != '#')
 83 | 						return;
 84 | 
 85 | 					ids.push(href.substring(1));
 86 | 
 87 | 				});
 88 | 
 89 | 				$.scrollzer(ids, { pad: 200, lastHack: true });
 90 | 
 91 | 		// Header (narrower + mobile).
 92 | 
 93 | 			// Toggle.
 94 | 				$(
 95 | 					'<div id="headerToggle">' +
 96 | 						'<a href="#header" class="toggle"></a>' +
 97 | 					'</div>'
 98 | 				)
 99 | 					.appendTo($body);
100 | 
101 | 			// Header.
102 | 				$('#header')
103 | 					.panel({
104 | 						delay: 500,
105 | 						hideOnClick: true,
106 | 						hideOnSwipe: true,
107 | 						resetScroll: true,
108 | 						resetForms: true,
109 | 						side: 'left',
110 | 						target: $body,
111 | 						visibleClass: 'header-visible'
112 | 					});
113 | 
114 | 			// Fix: Remove transitions on WP<10 (poor/buggy performance).
115 | 				if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
116 | 					$('#headerToggle, #header, #main')
117 | 						.css('transition', 'none');
118 | 
119 | 	});
120 | 
121 | })(jQuery);


--------------------------------------------------------------------------------
/assets/js/skel.min.js:
--------------------------------------------------------------------------------
1 | /* skel.js v3.0.1 | (c) skel.io | MIT licensed */
2 | var skel=function(){"use strict";var t={breakpointIds:null,events:{},isInit:!1,obj:{attachments:{},breakpoints:{},head:null,states:{}},sd:"/",state:null,stateHandlers:{},stateId:"",vars:{},DOMReady:null,indexOf:null,isArray:null,iterate:null,matchesMedia:null,extend:function(e,n){t.iterate(n,function(i){t.isArray(n[i])?(t.isArray(e[i])||(e[i]=[]),t.extend(e[i],n[i])):"object"==typeof n[i]?("object"!=typeof e[i]&&(e[i]={}),t.extend(e[i],n[i])):e[i]=n[i]})},newStyle:function(t){var e=document.createElement("style");return e.type="text/css",e.innerHTML=t,e},_canUse:null,canUse:function(e){t._canUse||(t._canUse=document.createElement("div"));var n=t._canUse.style,i=e.charAt(0).toUpperCase()+e.slice(1);return e in n||"Moz"+i in n||"Webkit"+i in n||"O"+i in n||"ms"+i in n},on:function(e,n){var i=e.split(/[\s]+/);return t.iterate(i,function(e){var a=i[e];if(t.isInit){if("init"==a)return void n();if("change"==a)n();else{var r=a.charAt(0);if("+"==r||"!"==r){var o=a.substring(1);if(o in t.obj.breakpoints)if("+"==r&&t.obj.breakpoints[o].active)n();else if("!"==r&&!t.obj.breakpoints[o].active)return void n()}}}t.events[a]||(t.events[a]=[]),t.events[a].push(n)}),t},trigger:function(e){return t.events[e]&&0!=t.events[e].length?(t.iterate(t.events[e],function(n){t.events[e][n]()}),t):void 0},breakpoint:function(e){return t.obj.breakpoints[e]},breakpoints:function(e){function n(t,e){this.name=this.id=t,this.media=e,this.active=!1,this.wasActive=!1}return n.prototype.matches=function(){return t.matchesMedia(this.media)},n.prototype.sync=function(){this.wasActive=this.active,this.active=this.matches()},t.iterate(e,function(i){t.obj.breakpoints[i]=new n(i,e[i])}),window.setTimeout(function(){t.poll()},0),t},addStateHandler:function(e,n){t.stateHandlers[e]=n},callStateHandler:function(e){var n=t.stateHandlers[e]();t.iterate(n,function(e){t.state.attachments.push(n[e])})},changeState:function(e){t.iterate(t.obj.breakpoints,function(e){t.obj.breakpoints[e].sync()}),t.vars.lastStateId=t.stateId,t.stateId=e,t.breakpointIds=t.stateId===t.sd?[]:t.stateId.substring(1).split(t.sd),t.obj.states[t.stateId]?t.state=t.obj.states[t.stateId]:(t.obj.states[t.stateId]={attachments:[]},t.state=t.obj.states[t.stateId],t.iterate(t.stateHandlers,t.callStateHandler)),t.detachAll(t.state.attachments),t.attachAll(t.state.attachments),t.vars.stateId=t.stateId,t.vars.state=t.state,t.trigger("change"),t.iterate(t.obj.breakpoints,function(e){t.obj.breakpoints[e].active?t.obj.breakpoints[e].wasActive||t.trigger("+"+e):t.obj.breakpoints[e].wasActive&&t.trigger("-"+e)})},generateStateConfig:function(e,n){var i={};return t.extend(i,e),t.iterate(t.breakpointIds,function(e){t.extend(i,n[t.breakpointIds[e]])}),i},getStateId:function(){var e="";return t.iterate(t.obj.breakpoints,function(n){var i=t.obj.breakpoints[n];i.matches()&&(e+=t.sd+i.id)}),e},poll:function(){var e="";e=t.getStateId(),""===e&&(e=t.sd),e!==t.stateId&&t.changeState(e)},_attach:null,attach:function(e){var n=t.obj.head,i=e.element;return i.parentNode&&i.parentNode.tagName?!1:(t._attach||(t._attach=n.firstChild),n.insertBefore(i,t._attach.nextSibling),e.permanent&&(t._attach=i),!0)},attachAll:function(e){var n=[];t.iterate(e,function(t){n[e[t].priority]||(n[e[t].priority]=[]),n[e[t].priority].push(e[t])}),n.reverse(),t.iterate(n,function(e){t.iterate(n[e],function(i){t.attach(n[e][i])})})},detach:function(t){var e=t.element;return t.permanent||!e.parentNode||e.parentNode&&!e.parentNode.tagName?!1:(e.parentNode.removeChild(e),!0)},detachAll:function(e){var n={};t.iterate(e,function(t){n[e[t].id]=!0}),t.iterate(t.obj.attachments,function(e){e in n||t.detach(t.obj.attachments[e])})},attachment:function(e){return e in t.obj.attachments?t.obj.attachments[e]:null},newAttachment:function(e,n,i,a){return t.obj.attachments[e]={id:e,element:n,priority:i,permanent:a}},init:function(){t.initMethods(),t.initVars(),t.initEvents(),t.obj.head=document.getElementsByTagName("head")[0],t.isInit=!0,t.trigger("init")},initEvents:function(){t.on("resize",function(){t.poll()}),t.on("orientationChange",function(){t.poll()}),t.DOMReady(function(){t.trigger("ready")}),window.onload&&t.on("load",window.onload),window.onload=function(){t.trigger("load")},window.onresize&&t.on("resize",window.onresize),window.onresize=function(){t.trigger("resize")},window.onorientationchange&&t.on("orientationChange",window.onorientationchange),window.onorientationchange=function(){t.trigger("orientationChange")}},initMethods:function(){document.addEventListener?!function(e,n){t.DOMReady=n()}("domready",function(){function t(t){for(r=1;t=n.shift();)t()}var e,n=[],i=document,a="DOMContentLoaded",r=/^loaded|^c/.test(i.readyState);return i.addEventListener(a,e=function(){i.removeEventListener(a,e),t()}),function(t){r?t():n.push(t)}}):!function(e,n){t.DOMReady=n()}("domready",function(t){function e(t){for(h=1;t=i.shift();)t()}var n,i=[],a=!1,r=document,o=r.documentElement,s=o.doScroll,c="DOMContentLoaded",d="addEventListener",u="onreadystatechange",l="readyState",f=s?/^loaded|^c/:/^loaded|c/,h=f.test(r[l]);return r[d]&&r[d](c,n=function(){r.removeEventListener(c,n,a),e()},a),s&&r.attachEvent(u,n=function(){/^c/.test(r[l])&&(r.detachEvent(u,n),e())}),t=s?function(e){self!=top?h?e():i.push(e):function(){try{o.doScroll("left")}catch(n){return setTimeout(function(){t(e)},50)}e()}()}:function(t){h?t():i.push(t)}}),Array.prototype.indexOf?t.indexOf=function(t,e){return t.indexOf(e)}:t.indexOf=function(t,e){if("string"==typeof t)return t.indexOf(e);var n,i,a=e?e:0;if(!this)throw new TypeError;if(i=this.length,0===i||a>=i)return-1;for(0>a&&(a=i-Math.abs(a)),n=a;i>n;n++)if(this[n]===t)return n;return-1},Array.isArray?t.isArray=function(t){return Array.isArray(t)}:t.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)},Object.keys?t.iterate=function(t,e){if(!t)return[];var n,i=Object.keys(t);for(n=0;i[n]&&e(i[n],t[i[n]])!==!1;n++);}:t.iterate=function(t,e){if(!t)return[];var n;for(n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])===!1)break},window.matchMedia?t.matchesMedia=function(t){return""==t?!0:window.matchMedia(t).matches}:window.styleMedia||window.media?t.matchesMedia=function(t){if(""==t)return!0;var e=window.styleMedia||window.media;return e.matchMedium(t||"all")}:window.getComputedStyle?t.matchesMedia=function(t){if(""==t)return!0;var e=document.createElement("style"),n=document.getElementsByTagName("script")[0],i=null;e.type="text/css",e.id="matchmediajs-test",n.parentNode.insertBefore(e,n),i="getComputedStyle"in window&&window.getComputedStyle(e,null)||e.currentStyle;var a="@media "+t+"{ #matchmediajs-test { width: 1px; } }";return e.styleSheet?e.styleSheet.cssText=a:e.textContent=a,"1px"===i.width}:t.matchesMedia=function(t){if(""==t)return!0;var e,n,i,a,r={"min-width":null,"max-width":null},o=!1;for(i=t.split(/\s+and\s+/),e=0;e<i.length;e++)n=i[e],"("==n.charAt(0)&&(n=n.substring(1,n.length-1),a=n.split(/:\s+/),2==a.length&&(r[a[0].replace(/^\s+|\s+$/g,"")]=parseInt(a[1]),o=!0));if(!o)return!1;var s=document.documentElement.clientWidth,c=document.documentElement.clientHeight;return null!==r["min-width"]&&s<r["min-width"]||null!==r["max-width"]&&s>r["max-width"]||null!==r["min-height"]&&c<r["min-height"]||null!==r["max-height"]&&c>r["max-height"]?!1:!0},navigator.userAgent.match(/MSIE ([0-9]+)/)&&RegExp.$1<9&&(t.newStyle=function(t){var e=document.createElement("span");return e.innerHTML='&nbsp;<style type="text/css">'+t+"</style>",e})},initVars:function(){var e,n,i,a=navigator.userAgent;e="other",n=0,i=[["firefox",/Firefox\/([0-9\.]+)/],["bb",/BlackBerry.+Version\/([0-9\.]+)/],["bb",/BB[0-9]+.+Version\/([0-9\.]+)/],["opera",/OPR\/([0-9\.]+)/],["opera",/Opera\/([0-9\.]+)/],["edge",/Edge\/([0-9\.]+)/],["safari",/Version\/([0-9\.]+).+Safari/],["chrome",/Chrome\/([0-9\.]+)/],["ie",/MSIE ([0-9]+)/],["ie",/Trident\/.+rv:([0-9]+)/]],t.iterate(i,function(t,i){return a.match(i[1])?(e=i[0],n=parseFloat(RegExp.$1),!1):void 0}),t.vars.browser=e,t.vars.browserVersion=n,e="other",n=0,i=[["ios",/([0-9_]+) like Mac OS X/,function(t){return t.replace("_",".").replace("_","")}],["ios",/CPU like Mac OS X/,function(t){return 0}],["wp",/Windows Phone ([0-9\.]+)/,null],["android",/Android ([0-9\.]+)/,null],["mac",/Macintosh.+Mac OS X ([0-9_]+)/,function(t){return t.replace("_",".").replace("_","")}],["windows",/Windows NT ([0-9\.]+)/,null],["bb",/BlackBerry.+Version\/([0-9\.]+)/,null],["bb",/BB[0-9]+.+Version\/([0-9\.]+)/,null]],t.iterate(i,function(t,i){return a.match(i[1])?(e=i[0],n=parseFloat(i[2]?i[2](RegExp.$1):RegExp.$1),!1):void 0}),t.vars.os=e,t.vars.osVersion=n,t.vars.IEVersion="ie"==t.vars.browser?t.vars.browserVersion:99,t.vars.touch="wp"==t.vars.os?navigator.msMaxTouchPoints>0:!!("ontouchstart"in window),t.vars.mobile="wp"==t.vars.os||"android"==t.vars.os||"ios"==t.vars.os||"bb"==t.vars.os}};return t.init(),t}();!function(t,e){"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?module.exports=e():t.skel=e()}(this,function(){return skel});
3 | 


--------------------------------------------------------------------------------
/assets/js/util.js:
--------------------------------------------------------------------------------
  1 | (function($) {
  2 | 
  3 | 	/**
  4 | 	 * Generate an indented list of links from a nav. Meant for use with panel().
  5 | 	 * @return {jQuery} jQuery object.
  6 | 	 */
  7 | 	$.fn.navList = function() {
  8 | 
  9 | 		var	$this = $(this);
 10 | 			$a = $this.find('a'),
 11 | 			b = [];
 12 | 
 13 | 		$a.each(function() {
 14 | 
 15 | 			var	$this = $(this),
 16 | 				indent = Math.max(0, $this.parents('li').length - 1),
 17 | 				href = $this.attr('href'),
 18 | 				target = $this.attr('target');
 19 | 
 20 | 			b.push(
 21 | 				'<a ' +
 22 | 					'class="link depth-' + indent + '"' +
 23 | 					( (typeof target !== 'undefined' && target != '') ? ' target="' + target + '"' : '') +
 24 | 					( (typeof href !== 'undefined' && href != '') ? ' href="' + href + '"' : '') +
 25 | 				'>' +
 26 | 					'<span class="indent-' + indent + '"></span>' +
 27 | 					$this.text() +
 28 | 				'</a>'
 29 | 			);
 30 | 
 31 | 		});
 32 | 
 33 | 		return b.join('');
 34 | 
 35 | 	};
 36 | 
 37 | 	/**
 38 | 	 * Panel-ify an element.
 39 | 	 * @param {object} userConfig User config.
 40 | 	 * @return {jQuery} jQuery object.
 41 | 	 */
 42 | 	$.fn.panel = function(userConfig) {
 43 | 
 44 | 		// No elements?
 45 | 			if (this.length == 0)
 46 | 				return $this;
 47 | 
 48 | 		// Multiple elements?
 49 | 			if (this.length > 1) {
 50 | 
 51 | 				for (var i=0; i < this.length; i++)
 52 | 					$(this[i]).panel(userConfig);
 53 | 
 54 | 				return $this;
 55 | 
 56 | 			}
 57 | 
 58 | 		// Vars.
 59 | 			var	$this = $(this),
 60 | 				$body = $('body'),
 61 | 				$window = $(window),
 62 | 				id = $this.attr('id'),
 63 | 				config;
 64 | 
 65 | 		// Config.
 66 | 			config = $.extend({
 67 | 
 68 | 				// Delay.
 69 | 					delay: 0,
 70 | 
 71 | 				// Hide panel on link click.
 72 | 					hideOnClick: false,
 73 | 
 74 | 				// Hide panel on escape keypress.
 75 | 					hideOnEscape: false,
 76 | 
 77 | 				// Hide panel on swipe.
 78 | 					hideOnSwipe: false,
 79 | 
 80 | 				// Reset scroll position on hide.
 81 | 					resetScroll: false,
 82 | 
 83 | 				// Reset forms on hide.
 84 | 					resetForms: false,
 85 | 
 86 | 				// Side of viewport the panel will appear.
 87 | 					side: null,
 88 | 
 89 | 				// Target element for "class".
 90 | 					target: $this,
 91 | 
 92 | 				// Class to toggle.
 93 | 					visibleClass: 'visible'
 94 | 
 95 | 			}, userConfig);
 96 | 
 97 | 			// Expand "target" if it's not a jQuery object already.
 98 | 				if (typeof config.target != 'jQuery')
 99 | 					config.target = $(config.target);
100 | 
101 | 		// Panel.
102 | 
103 | 			// Methods.
104 | 				$this._hide = function(event) {
105 | 
106 | 					// Already hidden? Bail.
107 | 						if (!config.target.hasClass(config.visibleClass))
108 | 							return;
109 | 
110 | 					// If an event was provided, cancel it.
111 | 						if (event) {
112 | 
113 | 							event.preventDefault();
114 | 							event.stopPropagation();
115 | 
116 | 						}
117 | 
118 | 					// Hide.
119 | 						config.target.removeClass(config.visibleClass);
120 | 
121 | 					// Post-hide stuff.
122 | 						window.setTimeout(function() {
123 | 
124 | 							// Reset scroll position.
125 | 								if (config.resetScroll)
126 | 									$this.scrollTop(0);
127 | 
128 | 							// Reset forms.
129 | 								if (config.resetForms)
130 | 									$this.find('form').each(function() {
131 | 										this.reset();
132 | 									});
133 | 
134 | 						}, config.delay);
135 | 
136 | 				};
137 | 
138 | 			// Vendor fixes.
139 | 				$this
140 | 					.css('-ms-overflow-style', '-ms-autohiding-scrollbar')
141 | 					.css('-webkit-overflow-scrolling', 'touch');
142 | 
143 | 			// Hide on click.
144 | 				if (config.hideOnClick) {
145 | 
146 | 					$this.find('a')
147 | 						.css('-webkit-tap-highlight-color', 'rgba(0,0,0,0)');
148 | 
149 | 					$this
150 | 						.on('click', 'a', function(event) {
151 | 
152 | 							var $a = $(this),
153 | 								href = $a.attr('href'),
154 | 								target = $a.attr('target');
155 | 
156 | 							if (!href || href == '#' || href == '' || href == '#' + id)
157 | 								return;
158 | 
159 | 							// Cancel original event.
160 | 								event.preventDefault();
161 | 								event.stopPropagation();
162 | 
163 | 							// Hide panel.
164 | 								$this._hide();
165 | 
166 | 							// Redirect to href.
167 | 								window.setTimeout(function() {
168 | 
169 | 									if (target == '_blank')
170 | 										window.open(href);
171 | 									else
172 | 										window.location.href = href;
173 | 
174 | 								}, config.delay + 10);
175 | 
176 | 						});
177 | 
178 | 				}
179 | 
180 | 			// Event: Touch stuff.
181 | 				$this.on('touchstart', function(event) {
182 | 
183 | 					$this.touchPosX = event.originalEvent.touches[0].pageX;
184 | 					$this.touchPosY = event.originalEvent.touches[0].pageY;
185 | 
186 | 				})
187 | 
188 | 				$this.on('touchmove', function(event) {
189 | 
190 | 					if ($this.touchPosX === null
191 | 					||	$this.touchPosY === null)
192 | 						return;
193 | 
194 | 					var	diffX = $this.touchPosX - event.originalEvent.touches[0].pageX,
195 | 						diffY = $this.touchPosY - event.originalEvent.touches[0].pageY,
196 | 						th = $this.outerHeight(),
197 | 						ts = ($this.get(0).scrollHeight - $this.scrollTop());
198 | 
199 | 					// Hide on swipe?
200 | 						if (config.hideOnSwipe) {
201 | 
202 | 							var result = false,
203 | 								boundary = 20,
204 | 								delta = 50;
205 | 
206 | 							switch (config.side) {
207 | 
208 | 								case 'left':
209 | 									result = (diffY < boundary && diffY > (-1 * boundary)) && (diffX > delta);
210 | 									break;
211 | 
212 | 								case 'right':
213 | 									result = (diffY < boundary && diffY > (-1 * boundary)) && (diffX < (-1 * delta));
214 | 									break;
215 | 
216 | 								case 'top':
217 | 									result = (diffX < boundary && diffX > (-1 * boundary)) && (diffY > delta);
218 | 									break;
219 | 
220 | 								case 'bottom':
221 | 									result = (diffX < boundary && diffX > (-1 * boundary)) && (diffY < (-1 * delta));
222 | 									break;
223 | 
224 | 								default:
225 | 									break;
226 | 
227 | 							}
228 | 
229 | 							if (result) {
230 | 
231 | 								$this.touchPosX = null;
232 | 								$this.touchPosY = null;
233 | 								$this._hide();
234 | 
235 | 								return false;
236 | 
237 | 							}
238 | 
239 | 						}
240 | 
241 | 					// Prevent vertical scrolling past the top or bottom.
242 | 						if (($this.scrollTop() < 0 && diffY < 0)
243 | 						|| (ts > (th - 2) && ts < (th + 2) && diffY > 0)) {
244 | 
245 | 							event.preventDefault();
246 | 							event.stopPropagation();
247 | 
248 | 						}
249 | 
250 | 				});
251 | 
252 | 			// Event: Prevent certain events inside the panel from bubbling.
253 | 				$this.on('click touchend touchstart touchmove', function(event) {
254 | 					event.stopPropagation();
255 | 				});
256 | 
257 | 			// Event: Hide panel if a child anchor tag pointing to its ID is clicked.
258 | 				$this.on('click', 'a[href="#' + id + '"]', function(event) {
259 | 
260 | 					event.preventDefault();
261 | 					event.stopPropagation();
262 | 
263 | 					config.target.removeClass(config.visibleClass);
264 | 
265 | 				});
266 | 
267 | 		// Body.
268 | 
269 | 			// Event: Hide panel on body click/tap.
270 | 				$body.on('click touchend', function(event) {
271 | 					$this._hide(event);
272 | 				});
273 | 
274 | 			// Event: Toggle.
275 | 				$body.on('click', 'a[href="#' + id + '"]', function(event) {
276 | 
277 | 					event.preventDefault();
278 | 					event.stopPropagation();
279 | 
280 | 					config.target.toggleClass(config.visibleClass);
281 | 
282 | 				});
283 | 
284 | 		// Window.
285 | 
286 | 			// Event: Hide on ESC.
287 | 				if (config.hideOnEscape)
288 | 					$window.on('keydown', function(event) {
289 | 
290 | 						if (event.keyCode == 27)
291 | 							$this._hide(event);
292 | 
293 | 					});
294 | 
295 | 		return $this;
296 | 
297 | 	};
298 | 
299 | 	/**
300 | 	 * Apply "placeholder" attribute polyfill to one or more forms.
301 | 	 * @return {jQuery} jQuery object.
302 | 	 */
303 | 	$.fn.placeholder = function() {
304 | 
305 | 		// Browser natively supports placeholders? Bail.
306 | 			if (typeof (document.createElement('input')).placeholder != 'undefined')
307 | 				return $(this);
308 | 
309 | 		// No elements?
310 | 			if (this.length == 0)
311 | 				return $this;
312 | 
313 | 		// Multiple elements?
314 | 			if (this.length > 1) {
315 | 
316 | 				for (var i=0; i < this.length; i++)
317 | 					$(this[i]).placeholder();
318 | 
319 | 				return $this;
320 | 
321 | 			}
322 | 
323 | 		// Vars.
324 | 			var $this = $(this);
325 | 
326 | 		// Text, TextArea.
327 | 			$this.find('input[type=text],textarea')
328 | 				.each(function() {
329 | 
330 | 					var i = $(this);
331 | 
332 | 					if (i.val() == ''
333 | 					||  i.val() == i.attr('placeholder'))
334 | 						i
335 | 							.addClass('polyfill-placeholder')
336 | 							.val(i.attr('placeholder'));
337 | 
338 | 				})
339 | 				.on('blur', function() {
340 | 
341 | 					var i = $(this);
342 | 
343 | 					if (i.attr('name').match(/-polyfill-field$/))
344 | 						return;
345 | 
346 | 					if (i.val() == '')
347 | 						i
348 | 							.addClass('polyfill-placeholder')
349 | 							.val(i.attr('placeholder'));
350 | 
351 | 				})
352 | 				.on('focus', function() {
353 | 
354 | 					var i = $(this);
355 | 
356 | 					if (i.attr('name').match(/-polyfill-field$/))
357 | 						return;
358 | 
359 | 					if (i.val() == i.attr('placeholder'))
360 | 						i
361 | 							.removeClass('polyfill-placeholder')
362 | 							.val('');
363 | 
364 | 				});
365 | 
366 | 		// Password.
367 | 			$this.find('input[type=password]')
368 | 				.each(function() {
369 | 
370 | 					var i = $(this);
371 | 					var x = $(
372 | 								$('<div>')
373 | 									.append(i.clone())
374 | 									.remove()
375 | 									.html()
376 | 									.replace(/type="password"/i, 'type="text"')
377 | 									.replace(/type=password/i, 'type=text')
378 | 					);
379 | 
380 | 					if (i.attr('id') != '')
381 | 						x.attr('id', i.attr('id') + '-polyfill-field');
382 | 
383 | 					if (i.attr('name') != '')
384 | 						x.attr('name', i.attr('name') + '-polyfill-field');
385 | 
386 | 					x.addClass('polyfill-placeholder')
387 | 						.val(x.attr('placeholder')).insertAfter(i);
388 | 
389 | 					if (i.val() == '')
390 | 						i.hide();
391 | 					else
392 | 						x.hide();
393 | 
394 | 					i
395 | 						.on('blur', function(event) {
396 | 
397 | 							event.preventDefault();
398 | 
399 | 							var x = i.parent().find('input[name=' + i.attr('name') + '-polyfill-field]');
400 | 
401 | 							if (i.val() == '') {
402 | 
403 | 								i.hide();
404 | 								x.show();
405 | 
406 | 							}
407 | 
408 | 						});
409 | 
410 | 					x
411 | 						.on('focus', function(event) {
412 | 
413 | 							event.preventDefault();
414 | 
415 | 							var i = x.parent().find('input[name=' + x.attr('name').replace('-polyfill-field', '') + ']');
416 | 
417 | 							x.hide();
418 | 
419 | 							i
420 | 								.show()
421 | 								.focus();
422 | 
423 | 						})
424 | 						.on('keypress', function(event) {
425 | 
426 | 							event.preventDefault();
427 | 							x.val('');
428 | 
429 | 						});
430 | 
431 | 				});
432 | 
433 | 		// Events.
434 | 			$this
435 | 				.on('submit', function() {
436 | 
437 | 					$this.find('input[type=text],input[type=password],textarea')
438 | 						.each(function(event) {
439 | 
440 | 							var i = $(this);
441 | 
442 | 							if (i.attr('name').match(/-polyfill-field$/))
443 | 								i.attr('name', '');
444 | 
445 | 							if (i.val() == i.attr('placeholder')) {
446 | 
447 | 								i.removeClass('polyfill-placeholder');
448 | 								i.val('');
449 | 
450 | 							}
451 | 
452 | 						});
453 | 
454 | 				})
455 | 				.on('reset', function(event) {
456 | 
457 | 					event.preventDefault();
458 | 
459 | 					$this.find('select')
460 | 						.val($('option:first').val());
461 | 
462 | 					$this.find('input,textarea')
463 | 						.each(function() {
464 | 
465 | 							var i = $(this),
466 | 								x;
467 | 
468 | 							i.removeClass('polyfill-placeholder');
469 | 
470 | 							switch (this.type) {
471 | 
472 | 								case 'submit':
473 | 								case 'reset':
474 | 									break;
475 | 
476 | 								case 'password':
477 | 									i.val(i.attr('defaultValue'));
478 | 
479 | 									x = i.parent().find('input[name=' + i.attr('name') + '-polyfill-field]');
480 | 
481 | 									if (i.val() == '') {
482 | 										i.hide();
483 | 										x.show();
484 | 									}
485 | 									else {
486 | 										i.show();
487 | 										x.hide();
488 | 									}
489 | 
490 | 									break;
491 | 
492 | 								case 'checkbox':
493 | 								case 'radio':
494 | 									i.attr('checked', i.attr('defaultValue'));
495 | 									break;
496 | 
497 | 								case 'text':
498 | 								case 'textarea':
499 | 									i.val(i.attr('defaultValue'));
500 | 
501 | 									if (i.val() == '') {
502 | 										i.addClass('polyfill-placeholder');
503 | 										i.val(i.attr('placeholder'));
504 | 									}
505 | 
506 | 									break;
507 | 
508 | 								default:
509 | 									i.val(i.attr('defaultValue'));
510 | 									break;
511 | 
512 | 							}
513 | 						});
514 | 
515 | 				});
516 | 
517 | 		return $this;
518 | 
519 | 	};
520 | 
521 | 	/**
522 | 	 * Moves elements to/from the first positions of their respective parents.
523 | 	 * @param {jQuery} $elements Elements (or selector) to move.
524 | 	 * @param {bool} condition If true, moves elements to the top. Otherwise, moves elements back to their original locations.
525 | 	 */
526 | 	$.prioritize = function($elements, condition) {
527 | 
528 | 		var key = '__prioritize';
529 | 
530 | 		// Expand $elements if it's not already a jQuery object.
531 | 			if (typeof $elements != 'jQuery')
532 | 				$elements = $($elements);
533 | 
534 | 		// Step through elements.
535 | 			$elements.each(function() {
536 | 
537 | 				var	$e = $(this), $p,
538 | 					$parent = $e.parent();
539 | 
540 | 				// No parent? Bail.
541 | 					if ($parent.length == 0)
542 | 						return;
543 | 
544 | 				// Not moved? Move it.
545 | 					if (!$e.data(key)) {
546 | 
547 | 						// Condition is false? Bail.
548 | 							if (!condition)
549 | 								return;
550 | 
551 | 						// Get placeholder (which will serve as our point of reference for when this element needs to move back).
552 | 							$p = $e.prev();
553 | 
554 | 							// Couldn't find anything? Means this element's already at the top, so bail.
555 | 								if ($p.length == 0)
556 | 									return;
557 | 
558 | 						// Move element to top of parent.
559 | 							$e.prependTo($parent);
560 | 
561 | 						// Mark element as moved.
562 | 							$e.data(key, $p);
563 | 
564 | 					}
565 | 
566 | 				// Moved already?
567 | 					else {
568 | 
569 | 						// Condition is true? Bail.
570 | 							if (condition)
571 | 								return;
572 | 
573 | 						$p = $e.data(key);
574 | 
575 | 						// Move element back to its original location (using our placeholder).
576 | 							$e.insertAfter($p);
577 | 
578 | 						// Unmark element as moved.
579 | 							$e.removeData(key);
580 | 
581 | 					}
582 | 
583 | 			});
584 | 
585 | 	};
586 | 
587 | })(jQuery);


--------------------------------------------------------------------------------
/blog.html:
--------------------------------------------------------------------------------
1 | ---
2 | layout: blog
3 | title: Amazing Blog
4 | icon: fa-pencil-alt
5 | order: 2
6 | ---


--------------------------------------------------------------------------------
/index.md:
--------------------------------------------------------------------------------
1 | ---
2 | # You don't need to edit this file, it's empty on purpose.
3 | # Edit theme's home layout instead if you wanna make some changes
4 | # See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
5 | layout: home
6 | title: My Great Homepage
7 | icon: fa-home
8 | order: 1
9 | ---


--------------------------------------------------------------------------------
/jekyll-theme-prologue.gemspec:
--------------------------------------------------------------------------------
 1 | # coding: utf-8
 2 | 
 3 | Gem::Specification.new do |spec|
 4 |   spec.name          = "jekyll-theme-prologue"
 5 |   spec.version       = "0.3.2"
 6 |   spec.authors       = ["HTML5 UP", "Chris Bobbe"]
 7 |   spec.email         = ["csbobbe@gmail.com"]
 8 | 
 9 |   spec.summary       = %q{A Jekyll version of the Prologue theme by HTML5 UP.}
10 |   spec.description   = "A Jekyll version of the Prologue theme by HTML5 UP. Demo: https://chrisbobbe.github.io/jekyll-theme-prologue/"
11 |   spec.homepage      = "https://github.com/chrisbobbe/jekyll-theme-prologue"
12 |   spec.license       = "CC-BY-3.0"
13 | 
14 |   spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r{^(assets|_layouts|_includes|_sass|_config.yml|404.html|LICENSE|README)}i) }
15 | 
16 |   spec.add_development_dependency "jekyll", "~> 3.3"
17 |   spec.add_development_dependency "bundler", "~> 1.12"
18 | end
19 | 


--------------------------------------------------------------------------------
/reading-list.md:
--------------------------------------------------------------------------------
 1 | ---
 2 | title: Reading List
 3 | subtitle: a list of books I read
 4 | layout: "page"
 5 | icon: fa-book
 6 | order: 3
 7 | ---
 8 | 
 9 | I love books! Here are some I'm reading now:
10 | 
11 | 1. Robert Burton: *The Anatomy of Melancholy*
12 | 2. Robert Musil: *The Man Without Qualities*
13 | 3. Kazuo Ishiguro: *The Unconsoled*
14 | 4. Malcolm Lowry: *Under the Volcano*
15 | 5. Virginia Woolf: *The Waves*
16 | 6. James Joyce: *Finnegans Wake*
17 | 7. Thomas Wolfe: *Look Homeward, Angel*
18 | 8. William Thackeray: *Pendennis*
19 | 9. Karl Marx: *Capital*
20 | 10. James Woodforde: *The Diary of A Country Parson*
21 | 
22 | source: [The Guardian](https://www.theguardian.com/books/booksblog/2011/jan/04/best-boring-books)


---------------------------------------------------------
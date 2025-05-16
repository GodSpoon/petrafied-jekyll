├── .gitattributes
├── .github
    ├── FUNDING.yml
    ├── issue_template.md
    ├── pull_request_template.md
    └── workflows
    │   └── ci.yml
├── .gitignore
├── 404.html
├── Appraisals
├── CHANGELOG.md
├── Gemfile
├── LICENSE
├── README.md
├── _config.yml
├── _data
    └── ui-text.yml
├── _includes
    ├── cloudflare_analytics.html
    ├── commentbox.html
    ├── comments.html
    ├── disqus.html
    ├── ext-css.html
    ├── ext-js.html
    ├── fb-comment.html
    ├── footer-minimal.html
    ├── footer-scripts.html
    ├── footer.html
    ├── giscus-comment.html
    ├── google_analytics.html
    ├── gtag.html
    ├── gtm_body.html
    ├── gtm_head.html
    ├── head.html
    ├── header.html
    ├── mathjax.html
    ├── matomo.html
    ├── nav.html
    ├── readtime.html
    ├── search.html
    ├── social-networks-links.html
    ├── social-share.html
    ├── staticman-comment.html
    ├── staticman-comments.html
    └── utterances-comment.html
├── _layouts
    ├── base.html
    ├── default.html
    ├── home.html
    ├── minimal.html
    ├── page.html
    └── post.html
├── _posts
    ├── 2020-02-26-flake-it-till-you-make-it.md
    └── 2020-02-28-sample-markdown.md
├── aboutme.md
├── assets
    ├── css
    │   ├── beautifuljekyll-minimal.css
    │   ├── beautifuljekyll.css
    │   ├── bootstrap-social.css
    │   ├── pygment_highlights.css
    │   └── staticman.css
    ├── data
    │   └── searchcorpus.json
    ├── img
    │   ├── 404-southpark.jpg
    │   ├── avatar-icon.png
    │   ├── bgimage.png
    │   ├── crepe.jpg
    │   ├── path.jpg
    │   └── thumb.png
    └── js
    │   ├── beautifuljekyll.js
    │   └── staticman.js
├── beautiful-jekyll-theme.gemspec
├── feed.xml
├── index.html
├── screenshot.png
├── staticman.yml
└── tags.html


/.gitattributes:
--------------------------------------------------------------------------------
 1 | # Define standard eol format
 2 | 
 3 | # Web Files
 4 | *.html text eol=lf
 5 | *.md text eol=lf
 6 | *.css text eol=lf
 7 | *.js text eol=lf
 8 | 
 9 | # Jekyll related files
10 | *.yml text eol=lf
11 | 
12 | # Git related files
13 | .gittattributes text eol=lf
14 | .gitignore text eol=lf
15 | .gitkeep text eol=lf
16 | 
17 | # Ruby files
18 | *.rb text eol=lf
19 | Gemfile text eol=lf
20 | Gemfile.lock text eol=lf
21 | 
22 | # Github specific fies
23 | LICENCE text eol=lf
24 | 
25 | # Docker specific files
26 | Dockerfile text eol=lf
27 | 
28 | # VSCode files
29 | *.json text eol=lf
30 | 
31 | # General multimedia files
32 | *.jpg binary
33 | *.jpeg binary
34 | *.gif binary
35 | *.png binary
36 | *.t3x binary
37 | *.t3d binary
38 | *.exe binary
39 | *.data binary
40 | *.ttf binary
41 | *.eof binary
42 | *.eot binary
43 | *.swf binary
44 | *.mov binary
45 | *.mp4 binary
46 | *.mp3 binary
47 | *.ogg binary
48 | *.flv binary
49 | 


--------------------------------------------------------------------------------
/.github/FUNDING.yml:
--------------------------------------------------------------------------------
1 | # These are supported funding model platforms
2 | 
3 | github: daattali
4 | patreon: DeanAttali
5 | 


--------------------------------------------------------------------------------
/.github/issue_template.md:
--------------------------------------------------------------------------------
1 | Please only submit feature suggestions or bug reports if you believe something is broken.
2 | 
3 | If you need help, you can attend the [Office Hours](https://beautifuljekyll.com/officehours) (only available for [sponsors](https://beautifuljekyll.com/plans/)).
4 | 


--------------------------------------------------------------------------------
/.github/pull_request_template.md:
--------------------------------------------------------------------------------
1 | Please note that if you are trying to update **your** website, this is the wrong place to do so. Please carefully follow the Beautiful Jekyll instructions (found at https://github.com/daattali/beautiful-jekyll#readme) and make sure you submit changes to **your** version of the project.
2 | 
3 | If your intention is to submit a Pull Request, please describe what your pull request achieves.
4 | 
5 | Thank you!
6 | 


--------------------------------------------------------------------------------
/.github/workflows/ci.yml:
--------------------------------------------------------------------------------
 1 | name: Beautiful Jekyll CI
 2 | on: [push, pull_request]
 3 | jobs:
 4 |   build:
 5 |     name: Build Jekyll
 6 |     runs-on: ubuntu-latest
 7 |     steps:
 8 |       - uses: actions/checkout@v4
 9 |       - uses: ruby/setup-ruby@v1
10 |         with:
11 |           ruby-version: '3.3'
12 |       - name: Install dependencies
13 |         run: bundle install && bundle exec appraisal install
14 |       - name: Setup Pages
15 |         id: configure-pages
16 |         uses: actions/configure-pages@v5
17 |       - name: Setup CI config
18 |         run: |
19 |           echo "---" > _config_ci.yml
20 |           echo "baseurl: ${{ steps.configure-pages.outputs.base_path }}" >> _config_ci.yml
21 |       - name: Build site
22 |         env:
23 |           JEKYLL_ENV: production
24 |         run: bundle exec appraisal jekyll build --future --config _config_ci.yml,_config.yml
25 |       - name: Upload artifact
26 |         uses: actions/upload-pages-artifact@v3
27 | 


--------------------------------------------------------------------------------
/.gitignore:
--------------------------------------------------------------------------------
 1 | # project
 2 | _site
 3 | .sass-cache
 4 | .vagrant
 5 | 
 6 | # general
 7 | .DS_Store
 8 | Thumbs.db
 9 | ehthumbs.db
10 | 
11 | Gemfile.lock
12 | 
13 | beautiful-jekyll-theme-*.gem
14 | 


--------------------------------------------------------------------------------
/404.html:
--------------------------------------------------------------------------------
 1 | ---
 2 | layout: default
 3 | title: 404 - Page not found
 4 | permalink: /404.html
 5 | ---
 6 | 
 7 | <div class="text-center">
 8 |   <h1>Whoops, this page doesn't exist.</h1>
 9 |   <h1>Move along. (404 error)</h1>
10 |   <br/>
11 | 
12 |   <img src="{{ 'assets/img/404-southpark.jpg' | relative_url }}" alt="Not found" />
13 | </div>
14 | 


--------------------------------------------------------------------------------
/Appraisals:
--------------------------------------------------------------------------------
1 | appraise "jekyll-3" do
2 |   gem "jekyll", "3.9.4"
3 | end
4 | appraise "jekyll-4" do
5 |   gem "jekyll", "4.3.3"
6 | end
7 | 


--------------------------------------------------------------------------------
/CHANGELOG.md:
--------------------------------------------------------------------------------
  1 | ## Unreleased version
  2 | - BREAKING CHANGE: Allow changing the order of the social network links that appear in the footer (#1152)
  3 | - BREAKING CHANGE: `google-scholar` social network link no longer requires the prefix `citations?user=`; if you previously set this parameter, it needs to be updated (#1189)
  4 | - Added `mathjax` YAML parameter to allow support for MathJax, used to write LaTeX expressions (#195)
  5 | - Added explicit support for favicons, you only need to add a `favicon.ico` file to the root directory
  6 | - The footer of a page always sticks to the bottom, even on short pages (#576)
  7 | - Added `author` YAML parameter to allow specifying the author(s) of a post (#1220)
  8 | - Fixed bug where search results broke if a post title had a backslash (#1279)
  9 | - Fixed bug where hovering over search results showed the text "{desc}" (#1156)
 10 | - Added social network links for GitLab, Bluesky, Whatsapp, Untappd, Strava (#1168, #1218, #1299, #1307, #1443)
 11 | - Support reddit social network link to either be a subreddit or a user (#1371)
 12 | - Use CSS variables (#661)
 13 | - Added instructions and example on how to fix image links in project sites (#1171)
 14 | - Pagination buttons: use nicer arrows, and don't show text on small screens (#1221)
 15 | - Updated Yelp URL format - if you previously used the `yelp` social network config parameter, you might need to update the config value (#1259)
 16 | - Added `title-on-all-pages` config setting, that adds the website title to all page titles (#1272)
 17 | - Change Twitter icon to X (#1193)
 18 | - Upgraded font-awesome to 6.5.2 (#1330)
 19 | - Fixed tables not having a scroll bar when wider than the page (usually happened on mobile) (#1452)
 20 | - Add author name to RSS feed (#1442)
 21 | 
 22 | ## v6.0.1 (2023-06-08)
 23 | 
 24 | This version has been in the works for a few years. It includes several new features that were highly requested, numerous bug fixes, new documentation, and aggresively encourages migrating from the old Google Universal Analytics to the new Analytics 4.
 25 | 
 26 | #### Breaking changes
 27 | 
 28 | - As of July 2023, Google Universal Analytics is going away and being replaced by Google Analytics 4. Beautiful Jekyll sites that still use the old analytics tag will show a warning to encourage them to move to Analytics 4 (#1096).
 29 | - More control over RSS feed sharing: previously, an RSS feed was *always* generated, and if the config setting `rss-description` was set then there was an RSS icon in the footer. Now, an RSS feed is only generated when the config setting `rss-description` exists, and an RSS footer icon is only shown if `rss: true` is set in the `social-network-links` config settings.
 30 | 
 31 | #### New parameters and settings
 32 | 
 33 | - Added `navbar-var-length` config setting that allows the navigation menu to be the same length as the longest sub-menu, so that long words in the submenu are not cut off (#765) 
 34 | - Added `post_search` config setting that creates a Search button in the navbar (#770)
 35 | - Added `edit_page_button` config setting that adds a "Edit page" button to the footer (to edit the current page on GitHub) (#1004)
 36 | - Added `footer-hover-col` config setting to customize the hover colour of links in the footer (#848)
 37 | 
 38 | #### New features and improvements
 39 | 
 40 | - Made the home page feed more accessible for screen readers (#950)
 41 | - Added support for giscus comments (#886) and CommentBox (#960)
 42 | - Added support for Cloudflare Analytics (#797)
 43 | - Added Reddit in share options of posts (#815)
 44 | 
 45 | #### Bug fixes
 46 | 
 47 | - Fixed page titles, subtitles, and excerpts rendering correctly when there are special characeters in them (#856) 
 48 | - Fixed bug where navbar secondary level dropdown items didn't inherit the same colour as the primary navbar links
 49 | - Fixed bug where the navbar "burger" collapsed button didn't always revert back to a light colour
 50 | - Fixed bug where using an image as a navbar title did not render in GitHub Project pages that did not have a custom domain
 51 | - Fixed bug where image thumbnails on the feed page were always forced into a square rather than maintaining a proper image aspect ratio
 52 | - Fixed bug where special characters in the title led to broken share tags (#744)
 53 | - Fixed bug where staticman didn't work jQuery slim version is used (#766)
 54 | - Fixed very long strings to wrap around the next line rather than go off-screen (#787)
 55 | 
 56 | #### Small changes
 57 | 
 58 | - Updated staticman from using v2 (public servers) to v3 (private servers) due to the public servers becoming obsolete (#775)
 59 | - Added social network links for Patreon, Medium, Itch.io, Discord, Kaggle, Hackerrank (#783, #788, #907, #961, #978)
 60 | - Slightly reworked margins and position for avatar image to resolve an alignment issue on Safari
 61 | - Changed the width at which the navbar collapses to a higher threshold because most modern non-mobile browsers are >1000px
 62 | 
 63 | 
 64 | ## v5.0.0 (2020-09-15)
 65 | 
 66 | One of the major changes in this version is that a lot of time was spent on rethinking the entire SEO and social media sharing model (how a page looks on eg. Google, Twitter, Facebok). It was redesigned to be more simple and customizable. The new documentation has a section dedicated to SEO and social media sharing of a page. Unfortunately some changes that are not backwards-compatible had to be made.
 67 | 
 68 | #### Breaking changes
 69 | 
 70 | - Renamed `description` YAML parameter to `share-description` to be more clear
 71 | - Renamed `description` config setting to `rss-description` since it was only used in RSS (the FAQ explains the difference between YAML parameters and config settings if you're confused)
 72 | - Removed YAML parameter `use-site-title` (you can now specify the exact title using `share-title`)
 73 | - Removed undocumented YAML parameters `meta-title` and `meta-description`
 74 | - Removed `link-tags` config setting because it wasn't necessary. If you use tags, there will now always be a tags page created; if you don't use tags there won't be a tags page.
 75 | - The YAML parameter `show-avatar` is now true by default. This has always been the case for GitHub Pages users, but not for `remote_theme` users. For consistency, it's now the default for everyone. (#715)
 76 | 
 77 | #### New parameters and settings
 78 | 
 79 | - Added `full-width` YAML parameter to allow having full-width pages
 80 | - Added `feed_show_excerpt` config setting to show/hide the post excerpts on the feed page
 81 | - Added `feed_show_tags` config setting to show/hide the list of tags on post previews on the feed page
 82 | - Added `share-title` YAML parameter to give control over the search engine/social media title
 83 | - Added `last-updated` YAML parameter to show a "Last Updated on" date for blog posts
 84 | - Added `before-content` and `after-content` YAML parameters that allow you to add some common HTML before the main content of a page (below the title) or after the main content (above the footer). Works in a similar way to `footer-extra`.
 85 | - Added `head-extra` YAML parameter which is similar to `footer-extra` but is used to include custom HTML code in a page's `<head>` tag
 86 | - Added `site-js` config setting to provide JavaScript files that are used on all pages in the site
 87 | 
 88 | #### New features and improvements
 89 | 
 90 | - Improved the `footer-extra` YAML parameter to support multiple files instead of only a single file
 91 | - Added automatic navbar color detection (#702)
 92 | - When `nav-short` is turned on, the avatar will also be shorter
 93 | - Changed navbar and footer background colour to be slightly darker, for better contrast with the default white page background for accessibility reasons
 94 | - Changed the behaviour of `site-css` to include site-wide CSS file **before** instead of after page-specific files
 95 | - Renamed internal css/js files from "main" to "beautifuljekyll" to make it easier for users to troubleshoot
 96 | - Added alt text to all images for better accessibility
 97 | - Made thumbnail images square instead of circles, as users reported that circles cut off important parts of images
 98 | 
 99 | #### Bug fixes
100 | 
101 | - Fixed rendering issues with `nav-short` parameter that caused the body of the page to start too low
102 | - Fixed some CSS styles that broke during the bootstrap 4 migration (#716)
103 | 
104 | #### Library upgrades
105 | 
106 | - Upgraded kramdown to version 2.3.0 to fix security issues
107 | - Upgraded jQuery to version 3.5.1 to fix a couple security vulnerabilities with the previous version
108 | 
109 | ## v4.1.0 (2020-08-08)
110 | 
111 | - Added Open Graph `site_name` meta field to pages automatically
112 | - Added `text-col` config setting  for main text color (#694)
113 | - Added `keywords` config setting to set the meta keywords on all pages (for SEO purposes) (#691)
114 | - Added `mobile-theme-col` config setting to allow a mobile theme colour (#692)
115 | - Added `site-css` config setting in the config file to provide CSS files that are used on all pages in the site (#695)
116 | - Added YAML parameter `description`: creates the meta description on a page, intended to provide a brief description of the page for search engines and when the page is shared (#690)
117 | 
118 | ## v4.0.1 (2020-07-13)
119 | 
120 | - Fixed staticman comments UI that was broken since the migration to bootstrap 4
121 | 
122 | ## v4.0.0 (2020-07-12)
123 | 
124 | - **BREAKING CHANGE** Replace `image` YAML parameter with `thumbnail-img` to be more clear
125 | - **MAJOR BEHAVIOUR CHANGE** Don't use the thumbnail as the avatar image
126 | - Cover image will automatically be used as thumbnail if none is provided
127 | - Image to share on social media will use the cover image or thumbnail if none is provided
128 | - All images (social media share, thumbnail, cover) can use either relative or absoluate paths.
129 | - Fixed issue where if a dropdown menu was the last item in the menu bar, it did not have a proper margin on the right
130 | - Added social network links: Mastodon (#646), Google Scholar, ORCID (#670)
131 | - Added support for sharing pages on new social network: VK (#657)
132 | - Use Open Graph type 'article' for blog posts (#669)
133 | - Use Twitter's large sumary card (large image) when there is a cover image, thumbnail image, or share image specified (#668)
134 | - Made post images in the feed page smaller on smaller devices
135 | - Fixed jQuery version in staticman (#671)
136 | 
137 | ## v3.0.0 (2020-05-07)
138 | 
139 | - **BREAKING CHANGE** Upgraded from Bootstrap 3.3.2 to 4.4.1. This involved a major rewrite of most components. This shouldn't affect any users unless you have custom HTML/CSS code which the new Bootstrap could have broken.
140 | - **BREAKING CHANGE** Renamed `bigimg` YAML parameter to `cover-img`
141 | - **BREAKING CHANGE** Removed `googlefonts` YAML parameter since googlefonts are just CSS so they can be loaded via `ext-css`
142 | - **BREAKING CHANGE** Upgraded from jQuery 1.11.2 to 3.4.2. This should not affect most people
143 | - Added `navbar-border-col` setting in the config file
144 | - Added accessibility features where possible
145 | - Made the theme completely responsive by rewriting all CSS to use 'rem' instead of 'px'
146 | - Rewrote and simplified some JavaScript code to use CSS or Bootstrap alternatives that weren't available in 2015
147 | - Removed most of the sample posts so that users only have two sample posts to learn from
148 | - Improvements to the README instructions
149 | 
150 | ## v2.3.0 (2020-04-29)
151 | 
152 | - Added YAML parameter `footer-extra` for including custom content in the footer
153 | - Fixed issue: linking to a specific part of a page resulted in scrolling too far (#69)
154 | - Added YAML parameter `nav-short` to have navbar permanently collapsed
155 | - Added social network link: Calendly
156 | - Fixed bug where RSS link in footer was showing even when turned off
157 | 
158 | ## v2.2.0 (2020-04-27)
159 | 
160 | - Added social network link: Telegram (#625) (thanks @mashed-potatoes)
161 | - Moved the demo site to an independent URL: https://beautifuljekyll.com
162 | - Major documentation overhaul and cleanup of old files
163 | - Fixed a few bugs from the remote_theme migration
164 | 
165 | ## v2.0.0 (2020-04-26)
166 | 
167 | - Beautiful-Jekyll v2.0.0 available as an official Ruby gem
168 | - Beautifull-Jekyll now supports the `remote_theme` config (#339) (thanks @gpotter2 and @skalee)
169 | - Consolidated the demo site, the ruby gem, and the master branch into one
170 | - Added a `home` layout and used it in the index page
171 | - Added readtime support for the post header (#622) (thanks @MutMatt and @rubyreads)
172 | - Removed the dependency on `_data` folder since it doesn't get copied when using `remote_theme` (#614)
173 | - Added support for configuring lang attribute on `html` tag (#608) (thanks @skalee)
174 | - Added ability to disable round logo (thanks @gpotter2)
175 | - Added support for Utterances comments (#596) (thanks @colynn)
176 | - Removed 'just-comments' as it's getting killed at the end of the year
177 | - Upgraded font-awesome to 5.12.1 (#587) (thanks @cketti)
178 | 
179 | ## Prior to 2020
180 | 
181 | **2018-12-24** Add support for Staticman comments (#440) (thanks @VincentTam)
182 | 
183 | **2018-10-19** Move Google Analytics to the head (#419) (thanks @jpvicari)
184 | 
185 | **2018-06-08** Add support for Facebook comments (#350) (thanks @npes87184)
186 | 
187 | **2018-02-22** Automatically generate sitemap (#323) (thanks @JosemyDuarte)
188 | 
189 | **2018-01-18** Add clickable tags to each post and a tags index page, works for GitHub sites (#307) (thanks @OCram85)
190 | 
191 | **2018-01-14** Redo Dockerfile (#302) (thanks @jennydaman)
192 | 
193 | **2018-01-06** More color personalization options (#297 and #299) (thanks @jennydaman)
194 | 
195 | **2018-01-05** Abstract the social networks logic (thanks @OCram85)
196 | 
197 | **2018-01-03** Avatar image no longer causes a ghost click (thanks @alefi87)
198 | 
199 | **2017-10-16** Add GitHub buttons to posts (#265) (thanks @yonicd)
200 | 
201 | **2017-09-04** Ability to change colour/image of navbar/footer/body
202 | 
203 | **2017-08-17** Add support for notification, error, and warning boxes in markdown (#227) (thanks @OCram85)
204 | 
205 | **2017-08-12** Add social buttons for twitch, yelp, and steam (#234) (thanks @TheRealBenForce)
206 | 
207 | **2017-03-30** Make the footer contact links friendly for screen readers (thanks @eugenius1)
208 | 
209 | **2017-03-30** Started a CHANGELOG file (thanks @eugenius1)
210 | 
211 | **2017-01-28** Add Subresource Integrity (SRI) support (#164) (thanks @tony-ho)
212 | 
213 | **2017-01-09** Add Google Tag Manager Integration (#157) (thanks @csarigoz)
214 | 
215 | **2017-01-06** Add options to configure HTML document title (#154) (thanks @tony-ho)
216 | 
217 | **2016-12-25** Allow dynamic images on each blog post (#143) (thanks @bbritten)
218 | 
219 | **2016-12-15** Support `title-img` config param to have image in the navbar instead of text
220 | 
221 | **2016-12-08** Add support for phone numbers in footer; fix #136
222 | 
223 | **2016-12-06** Update gemfile (#134) (thanks @stephentuso)
224 | 
225 | **2016-10-09** Add Docker deployment (#114) (thanks @mangar)
226 | 
227 | **2016-08-06** Add social share buttons for posts (thanks @rtlee9)
228 | 
229 | **2016-07-29** Add CSS styling to code chunks
230 | 
231 | **2016-07-27** Add clickable tags that lead to a tag page (doesn't work for GitHub hosted sites) (thanks @epwalsh)
232 | 
233 | **2016-07-21** Add support for twitter cards (sharing on Twitter will be better); fixes #70
234 | 
235 | **2016-03-18** Support full-width images in page headers; fixes #37
236 | 
237 | **2016-03-18** Support menus in navigation bar
238 | 
239 | **2016-02-07** Avatar is now conditional (thanks @hristoyankov)
240 | 
241 | **2016-02-02** Migrate (forced to...) to jekyll 3
242 | 
243 | **2016-01-22** Make sure not to include JQuery twice, fixes #29
244 | 
245 | **2015-11-19** Support external links in navigation bar; fixes #3
246 | 
247 | ... Many small changes because the site was in its infancy
248 | 
249 | **2015-03-12** Beautiful Jekyll version 0.0000001 is released!
250 | 
251 | 


--------------------------------------------------------------------------------
/Gemfile:
--------------------------------------------------------------------------------
 1 | # frozen_string_literal: true
 2 | 
 3 | source "https://rubygems.org"
 4 | 
 5 | # Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
 6 | # and associated library.
 7 | platforms :mingw, :x64_mingw, :mswin, :jruby do
 8 |   gem "tzinfo", ">= 1", "< 3"
 9 |   gem "tzinfo-data"
10 | end
11 | 
12 | # Performance-booster for watching directories on Windows
13 | gem "wdm", "~> 0.1", :platforms => [:mingw, :x64_mingw, :mswin]
14 |   
15 | gemspec
16 | 
17 | 


--------------------------------------------------------------------------------
/LICENSE:
--------------------------------------------------------------------------------
 1 | MIT License
 2 | 
 3 | Copyright (c) 2023 Dean Attali
 4 | 
 5 | Permission is hereby granted, free of charge, to any person obtaining a copy
 6 | of this software and associated documentation files (the "Software"), to deal
 7 | in the Software without restriction, including without limitation the rights
 8 | to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 9 | copies of the Software, and to permit persons to whom the Software is
10 | furnished to do so, subject to the following conditions:
11 | 
12 | The above copyright notice and this permission notice shall be included in all
13 | copies or substantial portions of the Software.
14 | 
15 | THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
16 | IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
17 | FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
18 | AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
19 | LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
20 | OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
21 | SOFTWARE.
22 | 


--------------------------------------------------------------------------------
/README.md:
--------------------------------------------------------------------------------
  1 | # Beautiful Jekyll
  2 | 
  3 | [![Gem Version](https://badge.fury.io/rb/beautiful-jekyll-theme.svg)](https://badge.fury.io/rb/beautiful-jekyll-theme)
  4 | 
  5 | > By [Dean Attali](https://deanattali.com) &middot; [Demo](https://beautifuljekyll.com/)
  6 | 
  7 | **Beautiful Jekyll** is a ready-to-use template to help you create a beautiful website quickly. Perfect for personal sites, blogs, or simple project websites.  [Check out a demo](https://beautifuljekyll.com) of what you'll get after just two minutes.  You can also look at [my personal website](https://deanattali.com) or [my consulting website](https://attalitech.com) to see it in use, or see [examples of websites](http://beautifuljekyll.com/examples) other people created using this theme.
  8 | 
  9 | **If you enjoy Beautiful Jekyll, please consider [supporting me](https://github.com/sponsors/daattali). You'll also gain access to office hours and more features! ❤**
 10 | 
 11 | ## Table of contents
 12 | 
 13 | - [Features](#features)
 14 | - [Sponsors 🏆](#sponsors)
 15 | - [**Build your website in 3 steps**](#build-your-website-in-3-steps)
 16 | - [Plans](#plans)
 17 | - [Add your own content](#add-your-own-content)
 18 | - [Customizing parameters for each page](#customizing-parameters-for-each-page)
 19 | - [Supported parameters](#supported-parameters)
 20 | - [Featured users (success stories!)](#featured-users-success-stories)
 21 | - [Next steps](#next-steps)
 22 | - [Getting help](#getting-help)
 23 | - [Credits and contributions](#contributions)
 24 | 
 25 | # Features
 26 | 
 27 | __Check out [*What's New?*](https://beautifuljekyll.com/updates/) to see the latest features!__
 28 | 
 29 | - **SIMPLE**: The primary goal of Beautiful Jekyll is to allow literally *anyone* to create a website in a few minutes.
 30 | - **Modern**: Uses the latest best practices and technologies to achieve nearly perfect scores on Google Chrome's Audit.
 31 | - **Mobile-first**: Designed to look great on both large-screen and small-screen (mobile) devices.
 32 | - **Highly customizable**: Many personalization settings such as changing the background colour/image, adding a logo.
 33 | - **Flexible usage**: Use Beautiful Jekyll directly on GitHub or via a Ruby gem - choose the best [development method](#build-your-website-in-3-steps) for you.
 34 | - **Battle-tested**: By using Beautiful Jekyll, you'll be joining 50,000+ users enjoying this theme since 2015.
 35 | - **SEO and social media support**: Customize how your site looks on Google and when shared on social media.
 36 | - **Comments support**: Add comments to any page using either [Disqus](https://disqus.com/), [Facebook comments](https://developers.facebook.com/docs/plugins/comments), [Utterances](https://utteranc.es/), [Staticman](https://staticman.net), [giscus](https://giscus.app), or [CommentBox](https://commentbox.io/).
 37 | - **Tags**: Any blog post can be tagged with keywords, and an index page is automatically generated.
 38 | - **Analytics**: Easily integrate Google Analytics, or other analytics platforms, to track visits to your website.
 39 | - **Search**: Let users easily find any page using a Search button in the navigation bar.
 40 | - **Photos support**: Any page can have a full-width cover photo and thumbnail.
 41 | - **RSS**: An RSS feed is automatically created, so you can even host a podcast easily with Beautiful Jekyll.
 42 | 
 43 | <h2 id="sponsors">Sponsors 🏆</h2>
 44 | 
 45 | Developing and maintaining Beautiful Jekyll takes a lot of time and effort - thank you to anyone who helps fund this effort!
 46 | 
 47 | - [DoFollow](https://dofollow.co.uk/)
 48 | - [Varna Sri Raman](https://about.me/varna)
 49 | 
 50 | **[Become a sponsor for Beautiful Jekyll and unlock new features\!](https://github.com/sponsors/daattali/sponsorships?tier_id=39856)**
 51 | 
 52 | # Build your website in 3 steps
 53 | 
 54 | There are a few different ways to build a website using Beautiful Jekyll, and this document will go through the simplest one: using a fork on GitHub. For most people (including myself!), this easy method is the recommended one.
 55 | 
 56 | Even if you choose to use one of the [advanced installation methods](https://beautifuljekyll.com/getstarted/#install-steps-hard), I still suggest you read through the easy method first.
 57 | 
 58 | ## The easy way (recommended!)
 59 | 
 60 | Getting started is *literally* as easy as 1-2-3 :smile:
 61 | 
 62 | Scroll down to see the steps involved, but here is a 30-second video just as a reference as you work through the steps. If you don't already have a [GitHub account](https://github.com), you'll need to sign up.
 63 | 
 64 | ![Installation steps](https://beautifuljekyll.com/assets/img/install-steps.gif)
 65 | 
 66 | ### 1. Fork this project
 67 | 
 68 | Click on the __*Fork*__ button at the top right corner of this page. Forking means that you're copying this entire project and all its files into your account. Do not click on the __*Create fork*__ button on the next page yet.
 69 | 
 70 | ### 2. Rename the repository to `YOURUSERNAME.github.io`
 71 | 
 72 | You'll see the word "repository" used a lot in GitHub - it simply means "project". Under __*Repository name*__ you should see the name `beautiful-jekyll`, this is where you need to rename your project to `YOURUSERNAME.github.io` (replace `YOURUSERNAME` with your GitHub user name). It's important to use this exact name so that GitHub will recognize it and automatically create a website for this project.   
 73 | 
 74 | > Tip: If you want to use a different URL for your website, check out the [FAQ](https://beautifuljekyll.com/faq/#custom-domain)
 75 |  
 76 | ### 3. Customize your website settings
 77 | 
 78 | Edit the `_config.yml` file to change any settings you want. To edit the file, first click on it to view the file, and on the next page click on the pencil icon to edit it (watch the video tutorial above if you're confused).  The settings in the file are self-explanatory and there are comments inside the file to help you understand what each setting does. Any line that begins with a hashtag (`#`) is a comment, and the other lines are actual settings. After changing the settings, click the green __*Commit changes*__ button to save these edits.
 79 | 
 80 | > Note: In the video above, only one setting in the `_config.yml` file is edited, but you should go through the rest of the settings as well.
 81 | 
 82 | ### 4. Congratulations! You have a website!
 83 | 
 84 | If you named your project correctly and made an edit to the config file, your website should be ready in a minute or two at `https://YOURUSERNAME.github.io`. Every time you make a change to any file, your website will get rebuilt and should be updated in about a minute or so. Your website will be initialized with several sample blog posts and a couple other pages.
 85 | 
 86 | ## The harder way (for advanced users)
 87 | 
 88 | The instructions above explain how to use Beautiful Jekyll in the easiest way: by forking on GitHub. There are more [advanced installation methods](https://beautifuljekyll.com/getstarted/#install-steps-hard) that include either using GitHub Pages with remote themes, or using Ruby gems. They provide you with more control, but are only intended for advanced users.
 89 | 
 90 | > Note: Beautiful Jekyll was primarily designed to be used as a GitHub theme, so you will not get any support if you use this theme via Ruby gems. 
 91 | 
 92 | # Plans
 93 | 
 94 | Beautiful Jekyll is, and always will be, free. But if you want to remove the Beautiful Jekyll ad from your website, use a Dark Mode skin, access office hours, or simply support the development efforts, [check out the different plans](https://beautifuljekyll.com/plans).
 95 | 
 96 | # Add your own content
 97 | 
 98 | To add pages to your site, you can either write a markdown file (`.md`) or you can write an HTML file. It's much easier to write markdown than HTML, so that's the recommended approach ([here's a great tutorial](https://markdowntutorial.com/) if you need to learn markdown in 5 minutes).
 99 | 
100 | To see an example of a markdown file, click on any file that ends in `.md`, for example [`aboutme.md`](./aboutme.md). On that page you can see some nicely formatted text (there's a word in bold, a link, a few bullet points), and if you click on the pencil icon to edit the file, you'll see the markdown code that generated the pretty text. Very easy! 
101 | 
102 | In contrast, look at [`tags.html`](./tags.html). That's how your write HTML - not as pretty. So stick with markdown if you don't know HTML.
103 | 
104 | Any markdown or HTML file that you create will be available on your website under `https://<yourusername>.github.io/<pagename>`. For example, if you create a file `about.md` (or `about.html`) then it'll exist at `https://<yourusername>.github.io/about`.
105 | 
106 | Files you create inside the [`_posts`](./_posts) directory will be treated as blog entries. You can look at the existing files there to get an idea of how to write blog posts. Note the format of the blog post files - they must follow the naming convention of `YEAR-MONTH-DAY-title.md`. After you successfully add your own post, you can delete the existing files inside [`_posts`](./_posts) to remove the sample posts, as those are just demo posts to help you learn.
107 | 
108 | # Customizing parameters for each page
109 | 
110 | **One last important thing**: In order to have your new pages use this template and not just be plain HTML pages, **you must add [YAML front matter](https://jekyllrb.com/docs/front-matter/) to the top of each page**:
111 | 
112 | 
113 | ```
114 | ---
115 | ---
116 | ```
117 | 
118 | This is where you'll be able to give each page some extra parameters (such as a title, a subtitle, an image, etc - [below is a list of all parameters](#supported-parameters)). Add any parameters you want between these two dashed lines, for example:
119 | 
120 | ```
121 | ---
122 | title: Contact me
123 | subtitle: Here you'll find all the ways to get in touch with me
124 | ---
125 | ```
126 | 
127 | If you don't want to use any parameters on a page, you still need to use the two dashed lines. If you don't, then your file will be shown as-is without the Beautiful Jekyll template.
128 | 
129 | You can look at the top of [`aboutme.md`](https://raw.githubusercontent.com/daattali/beautiful-jekyll/master/aboutme.md) as an example.
130 | 
131 | **Important takeaway: ALWAYS add the YAML front matter, which is two lines of three dashes, to EVERY page. If you have any parameters, they go between the two lines.**
132 | 
133 | # Supported parameters
134 | 
135 | Below is a list of the parameters that Beautiful Jekyll supports (any of these can be added to the YAML front matter of any page). Remember to also look in the `_config.yml` file to see additional site-wide settings. If there's a parameter that you want to apply to the entire site instead of one specific page, check out [this FAQ answer](https://beautifuljekyll.com/faq/#default-params).
136 | 
137 | ## Main parameters
138 | 
139 | These are the basic YAML parameters that you are most likely to use on most pages.
140 | 
141 | Parameter   | Description
142 | ----------- | -----------
143 | title       | Page or blog post title
144 | subtitle    | Short description of page or blog post that goes under the title
145 | tags        | List of tags to categorize the post. Separate the tags with commas and place them inside square brackets. Example: `[personal, analysis, finance]`
146 | cover-img   | Include a large full-width image at the top of the page. You can either provide the path to a single image (eg. `"/path/to/img"`) , or a list of images to cycle through (eg. `["/path/img1", "/path/img2"]`). If you want to add a caption to an image, then you must use the list notation (use `[]` even if you have only one image), and each image should be provided as `"/path/to/img" : "Caption of image"`.
147 | thumbnail-img | For blog posts, if you want to add a thumbnail that will show up in the feed, use `thumbnail-img: /path/to/image`. If no thumbnail is provided, then `cover-img` will be used as the thumbnail. You can use `thumbnail-img: ""` to disable a thumbnail.
148 | comments    | If you want do add comments to a specific page, use `comments: true`. Comments only work if you enable one of the comments providers (Facebook, disqus, staticman, utterances, giscus, CommentBox) in `_config.yml` file. Comments are automatically enabled on blog posts but not on other pages; to turn comments off for a specific post, use `comments: false`.
149 | mathjax     | If you want to use LaTeX formulas, you need to enable MathJax. Note that in MathJax you need to use `$$` and `\\(` to start and end expressions
150 | 
151 | ## Parameters for SEO and social media sharing
152 | 
153 | These parameters let you control what information shows up when a page is shown in a search engine (such as Google) or gets shared on social media (such as Twitter/Facebook).
154 | 
155 | Parameter   | Description
156 | ----------- | -----------
157 | share-title | A title for the page. If not provided, then `title` will be used, and if that's missing then the site title (from `_config.yml`) is used.
158 | share-description | A brief description of the page. If not provided, then `subtitle` will be used, and if that's missing then an excerpt from the page content is used.
159 | share-img   | The image to show. If not provided, then `cover-img` or `thumbnail-img` will be used if one of them is provided.
160 | 
161 | ## Less commonly used parameters
162 | 
163 | These are parameters that you may not use often, but can come in handy sometimes.
164 | 
165 | Parameter   | Description
166 | ----------- | -----------
167 | author      | Specify the author of a blog post (useful if a website has multiple authors).
168 | readtime    | If you want a post to show how many minutes it will take to read it, use `readtime: true`.
169 | show-avatar | If you have an avatar configured in the `_config.yml` but you want to turn it off on a specific page, use `show-avatar: false`.
170 | social-share | By default, every blog post has buttons to share the page on social media. If you want to turn this feature off, use `social-share: false`.
171 | nav-short   | By default, the navigation bar gets shorter after scrolling down the page. If you want the navigation bar to always be short on a certain page, use `nav-short: true`
172 | gh-repo   | If you want to show GitHub buttons at the top of a post, this sets the GitHub repo name (eg. `daattali/beautiful-jekyll`). You must also use the `gh-badge` parameter to specify what buttons to show.
173 | gh-badge  | Select which GitHub buttons to display. Available options are: [star, watch, fork, follow]. You must also use the `gh-repo` parameter to specify the GitHub repo.
174 | last-updated | If you want to show that a blog post was updated after it was originally released, you can specify an "Updated on" date.
175 | layout      | What type of page this is (default is `post` for blog posts and `page` for other pages). See _Page types_ section below for more information.
176 | 
177 | ## Advanced parameters
178 | 
179 | These are advanced parameters that are only useful for people who need very fine control over their website.
180 | 
181 | Parameter   | Description
182 | ----------- | -----------
183 | footer-extra | If you want to include extra content below the social media icons in the footer, create an HTML file in the `_includes/` folder (for example `_includes/myinfo.html`) and set `footer-extra` to the name of the file (for example `footer-extra: myinfo.html`). Accepts a single file or a list of files.
184 | before-content | Similar to `footer-extra`, but used for including HTML before the main content of the page (below the title).
185 | after-content | Similar to `footer-extra`, but used for including HTML after the main content of the page (above the footer).
186 | head-extra   | Similar to `footer-extra`, but used if you have any HTML code that needs to be included in the `<head>` tag of the page.
187 | language    | HTML language code to be set on the page's &lt;html&gt; element.
188 | full-width  | By default, page content is constrained to a standard width. Use `full-width: true` to allow the content to span the entire width of the window.
189 | js          | List of local JavaScript files to include in the page (eg. `/assets/js/mypage.js`)
190 | ext-js      | List of external JavaScript files to include in the page (eg. `//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.2/underscore-min.js`). External JavaScript files that support [Subresource Integrity (SRI)](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity) can be specified using the `href` and `sri` parameters eg.<br/>`href: "//code.jquery.com/jquery-3.1.1.min.js"`<br/>`sri: "sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="`
191 | css         | List of local CSS files to include in the page
192 | ext-css      | List of external CSS files to include in the page. External CSS files using SRI (see `ext-js` parameter) are also supported.
193 | 
194 | ## Page types
195 | 
196 | - **post** - To write a blog post, add a markdown or HTML file in the `_posts` folder. As long as you give it YAML front matter (the two lines of three dashes), it will automatically be rendered like a blog post. Look at the existing blog post files to see examples of how to use YAML parameters in blog posts.
197 | - **page** - Any page outside the `_posts` folder that uses YAML front matter will have a very similar style to blog posts.
198 | - **home** - The home layout is meant to act as the homepage of your blog posts - it will display all your blog posts, sorted from newest to oldest. A file using the `home` layout must be named `index.html` (not `index.md` or anything else!).
199 | - **minimal** - If you want to create a page with minimal styling (ie. without the bulky navigation bar and footer), assign `layout: minimal` to the YAML front matter.
200 | - If you want to completely bypass the template engine and just write your own HTML page, simply omit the YAML front matter. Only do this if you know how to write HTML!
201 | 
202 | # Featured users (success stories!)
203 | 
204 | Visit the [Official website](http://beautifuljekyll.com/examples) to see sample websites using Beautiful Jekyll.
205 | 
206 | If you'd like to showcase yourself and join this list, [upgrading to the Individual plan](https://github.com/sponsors/daattali/sponsorships?&tier_id=7362) will give you that publicity plus some other rewards!
207 | 
208 | # Next steps
209 | 
210 | Congratulations on making it this far! You now have all the tools to easily build a beautiful website for free. 
211 | 
212 | - After you get comfortable with the basics of writing in markdown, I suggest taking a look at this [sample post](https://beautifuljekyll.com/2020-02-28-sample-markdown/) and [the code that created it](https://raw.githubusercontent.com/daattali/beautiful-jekyll/master/_posts/2020-02-28-sample-markdown.md) to learn some more advanced tips about markdown.
213 | 
214 | - I **highly recommend** going over the [*Frequently Asked Questions*](https://beautifuljekyll.com/faq/) to find out answers to questions you may not even know you have. Every few months I suggest checking the [*What's New?*](https://beautifuljekyll.com/updates/) page to see if there are new features, and learn [how to update your site to the newest version](https://beautifuljekyll.com/faq/#updating) when it's time.
215 | 
216 | - You can also check out the [advanced installation methods](https://beautifuljekyll.com/getstarted/#install-steps-hard) that give you a little more control but are harder to use. Keep in mind that Beautiful Jekyll was primarily designed to be used as a GitHub theme, so you will not get any support if you choose one of the Ruby installation methods. 
217 | 
218 | - Remember that Beautiful Jekyll is built on top of Jekyll. This means that reading through the [Jekyll documentation](https://jekyllrb.com/) will introduce you to many more features that you might find useful!
219 | 
220 | # Getting help
221 | 
222 | Visit the [FAQ page](https://beautifuljekyll.com/faq) for answers to commonly asked questions.
223 | 
224 | **If you choose to [become a sponsor](https://beautifuljekyll.com/plans/), you'll have access to my [office hours](https://beautifuljekyll.com/officehours/) where you can ask for help.** You can also use the [Discussions](https://github.com/daattali/beautiful-jekyll/discussions) area to try and get help from the community.
225 | 
226 | Beautiful Jekyll is used by 50,000+ people with wildly varying degrees of web skills, so it's impossible to answer all the questions that may arise. For any question that's not specifically related to Beautiful Jekyll and is more about Jekyll or web development in general, the answer can often be found on Google, in the [Jekyll documentation](https://jekyllrb.com/), or on the [Jekyll support forum](https://talk.jekyllrb.com/).
227 | 
228 | # Contributions
229 | 
230 | Thank you to [all past contributors](https://github.com/daattali/beautiful-jekyll/graphs/contributors). If you find any problems or would like to contribute in any way, feel free to create a pull request/open an issue/send me a message.
231 | 
232 | You can also contribute by becoming an [official sponsor](https://github.com/sponsors/daattali/sponsorships?tier_id=39856) to help keep Beautiful Jekyll well-maintained!
233 | 
234 | # Credits
235 | 
236 | This template was not made *entirely* from scratch. I'd like to give special thanks to [Jekyll Now](https://github.com/barryclark/jekyll-now) and [Bootstrap Clean Blog](https://github.com/IronSummitMedia/startbootstrap-clean-blog), from whom I've taken several ideas initially.
237 | 
238 | I'd also like to thank [Dr. Jekyll's Themes](https://drjekyllthemes.github.io/), [Jekyll Themes](http://jekyllthemes.org/), and another [Jekyll Themes](http://jekyllrc.github.io/jekyllthemes/) for featuring Beautiful Jekyll in their Jekyll theme directories.
239 | 
240 | 


--------------------------------------------------------------------------------
/_config.yml:
--------------------------------------------------------------------------------
  1 | ###########################################################
  2 | ### Welcome to Beautiful Jekyll!
  3 | ### This config file is meant for settings that affect your entire website. When you first
  4 | ### set up your website you should go through all these settings and edit them, but after
  5 | ### the initial set up you won't need to come back to this file often.
  6 | ###########################################################
  7 | 
  8 | ############################
  9 | # --- Required options --- #
 10 | ############################
 11 | 
 12 | # Name of website
 13 | title: My website
 14 | 
 15 | # Your name to show in the footer
 16 | author: Some Person
 17 | 
 18 | ###############################################
 19 | # --- List of links in the navigation bar --- #
 20 | ###############################################
 21 | 
 22 | navbar-links:
 23 |   About Me: "aboutme"
 24 |   Resources:
 25 |     - Beautiful Jekyll: "https://beautifuljekyll.com"
 26 |     - Learn markdown: "https://www.markdowntutorial.com/"
 27 |   Author's home: "https://deanattali.com"
 28 | 
 29 | ################
 30 | # --- Logo --- #
 31 | ################
 32 | 
 33 | # Image to show in the navigation bar - works best with a square image
 34 | # Remove this parameter if you don't want an image in the navbar
 35 | avatar: "/assets/img/avatar-icon.png"
 36 | 
 37 | # By default, the image is cut into a circle. You can disable this behaviour by setting 'round-avatar: false'
 38 | round-avatar: true
 39 | 
 40 | # If you want to have an image logo in the top-left corner instead of having the title of the website,
 41 | # then specify the following parameter
 42 | #title-img: /path/to/image
 43 | 
 44 | 
 45 | #####################################
 46 | # --- Footer social media links --- #
 47 | #####################################
 48 | 
 49 | # Select the social network links that you want to show in the footer.
 50 | # You can change the order that they show up on the page by changing the order here.
 51 | # Uncomment the links you want to show and add your information to each one.
 52 | social-network-links:
 53 |   email: "someone@example.com"
 54 |   rss: true  # remove this line if you don't want to show an RSS link at the bottom
 55 |   facebook: deanattali
 56 |   github: daattali
 57 |   twitter: daattali
 58 |   patreon: DeanAttali
 59 |   youtube: "@daattali"
 60 |   whatsapp: 15551212
 61 | #  medium: yourname
 62 | #  reddit: yourname or r/yoursubreddit
 63 | #  linkedin: daattali
 64 | #  xing: yourname
 65 | #  stackoverflow: "3943160/daattali"
 66 | #  snapchat: deanat78
 67 | #  instagram: deanat78
 68 | #  spotify: yourname
 69 | #  telephone: +14159998888
 70 | #  steam: deanat78
 71 | #  twitch: yourname
 72 | #  yelp: yourname
 73 | #  telegram: yourname
 74 | #  calendly: yourname
 75 | #  mastodon: instance.url/@username
 76 | #  bluesky: yourname
 77 | #  ORCID: your ORCID ID
 78 | #  google-scholar: your google scholar
 79 | #  discord: "invite_code" or "users/userid" or "invite/invite_code"
 80 | #  kaggle: yourname
 81 | #  hackerrank: yourname
 82 | #  gitlab: yourname
 83 | #  itchio: yourname
 84 | #  untappd: yourname
 85 | #  strava: youruserid
 86 | 
 87 | # If you want your website to generate an RSS feed, provide a description
 88 | # The URL for the feed will be https://<your_website>/feed.xml
 89 | rss-description: This website is a virtual proof that I'm awesome
 90 | 
 91 | ###########################
 92 | # --- General options --- #
 93 | ###########################
 94 | 
 95 | # Select which social network share links to show in posts
 96 | share-links-active:
 97 |   twitter: true
 98 |   facebook: true
 99 |   linkedin: true
100 |   vk: false
101 |   reddit: false
102 | 
103 | # How to display the link to your website in the footer
104 | # Remove this if you don't want a link in the footer
105 | url-pretty: "MyWebsite.com"
106 | 
107 | # Add the website title to the title of every page
108 | title-on-all-pages: true
109 | 
110 | # Excerpt word length - Truncate the excerpt of each post on the feed page to the specified number of words
111 | excerpt_length: 50
112 | 
113 | # Whether or not to show an excerpt for every blog post in the feed page
114 | feed_show_excerpt: true
115 | 
116 | # Whether or not to show a list of tags below each post preview in the feed page
117 | feed_show_tags: true
118 | 
119 | # Add a search button to the navbar
120 | post_search: true
121 | 
122 | # Add a button in the footer to edit the current page. Only works if your website is hosted on GitHub
123 | edit_page_button: true
124 | 
125 | # Allow sub-menu items (second-level navigation menu items) to be longer than the top-level menu
126 | # If this setting is off, then long sub-menu words might get cut off
127 | # See https://github.com/daattali/beautiful-jekyll/issues/765 to understand the issue this setting can solve
128 | navbar-var-length: false
129 | 
130 | # The keywords to associate with your website, for SEO purposes
131 | #keywords: "my,list,of,keywords"
132 | 
133 | ######################################
134 | # --- Colours / background image --- #
135 | ######################################
136 | 
137 | # Personalize the colours in your website. Colour values can be any valid CSS colour
138 | 
139 | page-col: "#FFFFFF"
140 | text-col: "#404040"
141 | link-col: "#008AFF"
142 | hover-col: "#0085A1"
143 | navbar-col: "#EAEAEA"
144 | navbar-text-col: "#404040"
145 | navbar-border-col: "#DDDDDD"
146 | footer-col: "#EAEAEA"
147 | footer-text-col: "#777777"
148 | footer-link-col: "#404040"
149 | footer-hover-col: "#0085A1"
150 | 
151 | # Alternatively, the navbar, footer, and page background can be set to an image
152 | # instead of colour
153 | 
154 | #navbar-img: "/assets/img/bgimage.png"
155 | #footer-img: "/assets/img/bgimage.png"
156 | #page-img: "/assets/img/bgimage.png"
157 | 
158 | # Suggest a colour for mobile browsers to use as the browser's theme. This is only supported by a few mobile browsers.
159 | #mobile-theme-col: "#0085A1"
160 | 
161 | # For any extra visual customization, you can include additional CSS files in every page on your site. List any custom CSS files here
162 | #site-css:
163 | #  - "/assets/css/custom-styles.css"
164 | 
165 | # If you have common JavaScript files that should be included in every page, list them here
166 | #site-js:
167 | #  - "/assets/js/custom-script.js"
168 | 
169 | #################################
170 | # --- Web Analytics Section --- #
171 | #################################
172 | 
173 | # Fill in your Google Analytics tag ID (or "Measurement ID") to track your website usage
174 | #gtag: "G-XXXXXXXXXX"
175 | 
176 | # Fill in your Cloudflare Analytics beacon token to track your website using Cloudflare Analytics
177 | #cloudflare_analytics: ""
178 | 
179 | # Google Tag Manager ID
180 | #gtm: ""
181 | 
182 | # Matomo (aka Piwik) Web statistics
183 | # Uncomment the following section to enable Matomo. The opt-out parameter controls
184 | # whether or not you want to allow users to opt out of tracking.
185 | #matomo:
186 | #  site_id: "9"
187 | #  uri: "demo.wiki.pro"
188 | #  opt-out: true
189 | 
190 | # Google Universal Analytics ID -- deprecated
191 | # As of July 2023 this is no longer supported by Google! If you are still using `google_analytics`,
192 | # you should switch to using the `gtag` field above instead.
193 | #google_analytics: "UA-XXXXXXXX-X"
194 | 
195 | ####################
196 | # --- Comments --- #
197 | ####################
198 | 
199 | # To use Disqus comments, sign up to https://disqus.com and fill in your Disqus shortname (NOT the userid)
200 | #disqus: ""
201 | 
202 | # To use Facebook Comments, create a Facebook app and fill in the Facebook App ID
203 | #fb_comment_id: ""
204 | 
205 | # To use CommentBox, sign up for a Project ID on https://commentbox.io
206 | #commentbox: "" # Project ID, e.g. "5694267682979840-proj"
207 | 
208 | # To use Utterances comments: (0) uncomment the following section, (1) fill in
209 | # "repository" (make sure the repository is public), (2) Enable Issues in your repository,
210 | # (3) Install the Utterances app in your repository https://github.com/apps/utterances
211 | # See more details about the parameters below at https://utteranc.es/
212 | #utterances:
213 | #  repository: # GitHub username/repository eg. "daattali/beautiful-jekyll"
214 | #  issue-term: title   # Mapping between blog posts and GitHub issues
215 | #  theme: github-light # Utterances theme
216 | #  label: blog-comments # Label that will be assigned to GitHub Issues created by Utterances
217 | 
218 | # To use Staticman comments, uncomment the following section. You may leave the reCaptcha
219 | # section commented if you aren't using reCaptcha for spam protection.
220 | # Using Staticman requires advanced knowledge, please consult
221 | # https://github.com/eduardoboucas/staticman/ and https://staticman.net/ for further
222 | # instructions. For any support with staticman please direct questions to staticman and
223 | # not to BeautifulJekyll.
224 | #staticman:
225 | #  repository : # GitHub username/repository eg. "daattali/beautiful-jekyll"
226 | #  branch     : master # If you're not using `master` branch, then you also need to update the `branch` parameter in `staticman.yml`
227 | #  endpoint   : # URL of your deployment, with a trailing slash eg. "https://<your-api>/v3/entry/github/"
228 | #  reCaptcha:   # (optional, set these parameters in `staticman.yml` as well)
229 | #    siteKey  : # You need to apply for a site key on Google
230 | #    secret   : # Encrypt your password by going to https://<your-own-api>/v3/encrypt/<your-site-secret>
231 | 
232 | # To use giscus comments:
233 | # (0) Uncomment the following giscus section, (1) Enable Discussions in your GitHub repository,
234 | # (2) Install the giscus app in your repository (details at https://giscus.app),
235 | # (3) Fill in *all* the parameters below
236 | # See more details about giscus and each of the following parameters at https://giscus.app
237 | #giscus:
238 | #  hostname: giscus.app # Replace with your giscus instance's hostname if self-hosting
239 | #  repository: # GitHub username/repository eg. "daattali/beautiful-jekyll"
240 | #  repository-id: # ID of your repository, retrieve this info from https://giscus.app
241 | #  category: Announcements # Category name of your GitHub Discussion posts
242 | #  category-id: # ID of your category, retrieve this info from https://giscus.app
243 | #  mapping: pathname
244 | #  reactions-enabled: 1
245 | #  emit-metadata: 0
246 | #  theme: light
247 | 
248 | ################
249 | # --- Misc --- #
250 | ################
251 | 
252 | # Ruby Date Format to show dates of posts
253 | date_format: "%B %-d, %Y"
254 | 
255 | # Facebook App ID
256 | #fb_app_id: ""
257 | 
258 | #################################################################################
259 | # --- You don't need to touch anything below here (but you can if you want) --- #
260 | #################################################################################
261 | 
262 | # Output options (more information on Jekyll's site)
263 | timezone: "America/Toronto"
264 | markdown: kramdown
265 | highlighter: rouge
266 | permalink: /:year-:month-:day-:title/
267 | paginate: 5
268 | 
269 | kramdown:
270 |   input: GFM
271 | 
272 | # Default YAML values (more information on Jekyll's site)
273 | defaults:
274 |   -
275 |     scope:
276 |       path: ""
277 |       type: "posts"
278 |     values:
279 |       layout: "post"
280 |       comments: true  # add comments to all blog posts
281 |       social-share: true # add social media sharing buttons to all blog posts
282 |   -
283 |     scope:
284 |       path: "" # any file that's not a post will be a "page" layout by default
285 |     values:
286 |       layout: "page"
287 | 
288 | # Exclude these files from production site
289 | exclude:
290 |   - CHANGELOG.md
291 |   - CNAME
292 |   - Gemfile
293 |   - Gemfile.lock
294 |   - LICENSE
295 |   - README.md
296 |   - screenshot.png
297 |   - docs/
298 | 
299 | plugins:
300 |   - jekyll-paginate
301 |   - jekyll-sitemap
302 | 
303 | # Beautiful Jekyll / Dean Attali
304 | # 2fc73a3a967e97599c9763d05e564189
305 | 
306 | 


--------------------------------------------------------------------------------
/_data/ui-text.yml:
--------------------------------------------------------------------------------
/_includes/cloudflare_analytics.html:
--------------------------------------------------------------------------------
1 | {% if site.cloudflare_analytics %}
2 | <!-- Cloudflare Web Analytics -->
3 | <script defer
4 |     src='https://static.cloudflareinsights.com/beacon.min.js'
5 |     data-cf-beacon='{"token": "{{ site.cloudflare_analytics}}"}'>
6 | </script>
7 | <!-- End Cloudflare Web Analytics -->
8 | {% endif %}
9 | 


--------------------------------------------------------------------------------
/_includes/commentbox.html:
--------------------------------------------------------------------------------
1 | {% if site.commentbox %}
2 | 
3 |     <div class="commentbox"></div>
4 |     <script src="https://unpkg.com/commentbox.io/dist/commentBox.min.js"></script>
5 |     <script>commentBox('{{ site.commentbox }}')</script>
6 | 
7 | {% endif %}
8 | 


--------------------------------------------------------------------------------
/_includes/comments.html:
--------------------------------------------------------------------------------
1 | {% if page.comments %}
2 |   {% include disqus.html %}
3 |   {% include fb-comment.html %}
4 |   {% include staticman-comments.html %}
5 |   {% include utterances-comment.html %}
6 |   {% include giscus-comment.html %}
7 |   {% include commentbox.html %}
8 | {% endif %}
9 | 


--------------------------------------------------------------------------------
/_includes/disqus.html:
--------------------------------------------------------------------------------
 1 | {%- if site.disqus -%}
 2 | <div class="disqus-comments">
 3 |   <div class="comments">
 4 |     <div id="disqus_thread"></div>
 5 |     <script type="text/javascript">
 6 | 	  var disqus_shortname = '{{ site.disqus }}';
 7 | 	  /* ensure that pages with query string get the same discussion */
 8 | 	  var url_parts = window.location.href.split("?");
 9 | 	  var disqus_url = url_parts[0];
10 | 	  (function() {
11 | 		var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
12 | 		dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
13 | 		(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
14 | 	  })();
15 |     </script>
16 |     <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
17 |   </div>
18 | </div>
19 | {%- endif -%}
20 | 


--------------------------------------------------------------------------------
/_includes/ext-css.html:
--------------------------------------------------------------------------------
1 | {% if include.css.sri %}
2 |   <link href="{{ include.css.href }}" rel="stylesheet" integrity="{{ include.css.sri }}" crossorigin="anonymous">
3 | {% elsif include.css.href %}
4 |   <link rel="stylesheet" href="{{ include.css.href }}">
5 | {% else %}
6 |   <link rel="stylesheet" href="{{ include.css }}">
7 | {% endif %}
8 | 


--------------------------------------------------------------------------------
/_includes/ext-js.html:
--------------------------------------------------------------------------------
1 | {% if include.js.sri %}
2 |   <script src="{{ include.js.href }}" integrity="{{ include.js.sri }}" crossorigin="anonymous"></script>
3 | {% elsif include.js.href %}
4 |   <script src="{{ include.js.href }}"></script>
5 | {% else %}
6 |   <script src="{{ include.js }}"></script>
7 | {% endif %}
8 | 


--------------------------------------------------------------------------------
/_includes/fb-comment.html:
--------------------------------------------------------------------------------
 1 | {%- if site.fb_comment_id -%}
 2 | <div class="comments">
 3 |   <div id="fb-root"></div>
 4 |   <script>
 5 |     (function(d, s, id) {
 6 |       var js, fjs = d.getElementsByTagName(s)[0];
 7 |       if (d.getElementById(id)) return;
 8 |       js = d.createElement(s); js.id = id;
 9 |       js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.12&appId={{ site.fb_comment_id }}&autoLogAppEvents=1';
10 |       fjs.parentNode.insertBefore(js, fjs);
11 |     }(document, 'script', 'facebook-jssdk'));
12 |   </script>
13 |   <div class="fb-comments" data-href="{{ page.url | absolute_url }}" data-width="100%" data-numposts="5"></div>
14 |   <noscript>Please enable JavaScript to view the comments powered by Facebook.</noscript>
15 | </div>
16 | {%- endif -%}
17 | 


--------------------------------------------------------------------------------
/_includes/footer-minimal.html:
--------------------------------------------------------------------------------
 1 | <footer class="footer-min">
 2 |   <div class="text-muted">
 3 |     {% if site.author %}
 4 |       {{ site.author }}
 5 |       &nbsp;&nbsp;&bull;&nbsp;&nbsp;
 6 |     {% endif %}
 7 |     {% if page.date %}
 8 |       {{ page.date }}
 9 |     {% else %}
10 |       {{ site.time | date: '%Y' }}
11 |     {% endif %}
12 | 
13 |     {% if site.url-pretty %}
14 |       &nbsp;&nbsp;&bull;&nbsp;&nbsp;
15 |       <a href="{{ '/' | absolute_url }}">{{ site.url-pretty }}</a>
16 |     {% endif %}
17 |   </div>
18 | </footer>
19 | 


--------------------------------------------------------------------------------
/_includes/footer-scripts.html:
--------------------------------------------------------------------------------
 1 | {% if layout.common-ext-js %}
 2 |   {% for js in layout.common-ext-js %}
 3 |     {% include ext-js.html js=js %}
 4 |   {% endfor %}
 5 | {% endif %}
 6 | 
 7 | {% if layout.common-js %}
 8 |   {% for js in layout.common-js %}
 9 |     <!-- doing something a bit funky here because I want to be careful not to include JQuery twice! -->
10 |     {% if js contains 'jquery' %}
11 |       <script>
12 |         if (typeof jQuery == 'undefined') {
13 |           document.write('<script src="{{ js | relative_url }}"></scr' + 'ipt>');
14 |         }
15 |       </script>
16 |     {% else %}
17 |       <script src="{{ js | relative_url }}"></script>
18 |     {% endif %}
19 |   {% endfor %}
20 | {% endif %}
21 | 
22 | {% if site.site-js %}
23 |   {% for js in site.site-js %}
24 |     <script src="{{ js | relative_url }}"></script>
25 |   {% endfor %}
26 | {% endif %}
27 | 
28 | {% if page.ext-js %}
29 |   {% for js in page.ext-js %}
30 |     {% include ext-js.html js=js %}
31 |   {% endfor %}
32 | {% endif %}
33 | 
34 | {% if page.js %}
35 |   {% for js in page.js %}
36 |     <script src="{{ js | relative_url }}"></script>
37 |   {% endfor %}
38 | {% endif %}
39 | 


--------------------------------------------------------------------------------
/_includes/footer.html:
--------------------------------------------------------------------------------
 1 | <footer>
 2 |   <div class="container-md beautiful-jekyll-footer">
 3 |     <div class="row">
 4 |       <div class="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
 5 |       {% include social-networks-links.html %}
 6 |       {% if page.footer-extra %}
 7 |         <div class="footer-custom-content">
 8 |           {% for file in page.footer-extra %}
 9 |             {% include {{ file }} %}
10 |           {% endfor %}
11 |         </div>
12 |       {% endif %}
13 |       <p class="copyright text-muted">
14 |       {% if site.author %}
15 |         {{ site.author }}
16 |         &nbsp;&bull;&nbsp;
17 |       {% endif %}
18 |       {{ site.time | date: '%Y' }}
19 | 
20 |       {% if site.url-pretty %}
21 |         &nbsp;&bull;&nbsp;
22 |         <span class="author-site">
23 |           <a href="{% if site.url-canonical %}{{ site.url-canonical }}{% else %}{{ '/' | absolute_url }}{% endif %}">{{ site.url-pretty }}</a>
24 |         </span>
25 |       {% endif %}
26 | 
27 |       {% if site.matomo %}
28 |         {% if site.matomo.opt-out %}
29 |           &nbsp;&bull;&nbsp;
30 |           <a href="http://{{- site.matomo.uri -}}/index.php?module=CoreAdminHome&action=optOut" target="_blank" class="text_muted">Do-not-Track</a>
31 |         {% endif %}
32 |       {% endif%}
33 | 
34 |       {% if site.edit_page_button and site.github.repository_url %}
35 |         &nbsp;&bull;&nbsp;
36 |         <a title="Edit this page on GitHub" href="{{ site.github.repository_url }}/edit/{{ site.github.source.branch }}/{{ page.path }}" class="text_muted">Edit page</a>
37 |        {% endif%}
38 | 
39 |       </p>
40 |       {% unless site.remove-ads %}<p class="theme-by text-muted">
41 |         Powered by
42 |         <a href="https://beautifuljekyll.com">Beautiful Jekyll</a>
43 |       </p>{% endunless %}
44 |       </div>
45 |     </div>
46 |   </div>
47 | </footer>
48 | 


--------------------------------------------------------------------------------
/_includes/giscus-comment.html:
--------------------------------------------------------------------------------
 1 | {% if site.giscus.repository and site.giscus.hostname %}
 2 | 
 3 | <script src="https://{{ site.giscus.hostname }}/client.js"
 4 |         data-repo="{{ site.giscus.repository }}"
 5 |         data-repo-id="{{ site.giscus.repository-id }}"
 6 |         data-category="{{ site.giscus.category }}"
 7 |         data-category-id="{{ site.giscus.category-id }}"
 8 |         data-mapping="{{ site.giscus.mapping }}"
 9 |         data-reactions-enabled="{{ site.giscus.reactions-enabled }}"
10 |         data-emit-metadata="{{ site.giscus.emit-metadata }}"
11 |         data-theme="{{ site.giscus.theme }}"
12 |         crossorigin="anonymous"
13 |         async>
14 | </script>
15 | 
16 | {% endif %}
17 | 


--------------------------------------------------------------------------------
/_includes/google_analytics.html:
--------------------------------------------------------------------------------
 1 | {% if site.google_analytics %}
 2 | <!-- Google Analytics -->
 3 | {% unless site.gtag %}
 4 | <div id="bj-ganalytics-deprecated-msg" style="position: fixed; background: #b90404; bottom: 0; width: 100%; z-index: 10000; color: #f0f0f0; text-align: center; padding: 0.5rem;">
 5 |   <div title="Close" onclick="$(this).parent().remove()" style="position: absolute; right: 5px; top: 0; font-size: 1.5em; line-height: 1; cursor: pointer;">&times;</div>
 6 |   <div style="max-width: 800px; margin: auto; font-size: 1.1em;">
 7 |     This website is using outdated Google Analytics
 8 |     <details style="font-size: 0.8em;">
 9 |       <summary>More info</summary>
10 |       As of July 2023, Google's Universal Analytics is going away and being replaced by Google Analytics 4. This website is still using the old Universal Analytics. In order to remove this message, the website owner must remove the <code>google_analytics</code> property in the website's config file, and optionally replace it with the new <code>gtag</code> property.
11 |     </details>
12 |   </div>
13 | </div>
14 | {% endunless %}
15 | <script>
16 |   (function (i, s, o, g, r, a, m) {
17 |     i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
18 |       (i[r].q = i[r].q || []).push(arguments)
19 |     }, i[r].l = 1 * new Date(); a = s.createElement(o),
20 |       m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
21 |   })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
22 |   ga('create', '{{ site.google_analytics }}', 'auto');
23 |   ga('send', 'pageview');
24 | </script>
25 | <!-- End Google Analytics -->
26 | {% endif %}
27 | 


--------------------------------------------------------------------------------
/_includes/gtag.html:
--------------------------------------------------------------------------------
 1 | {% if site.gtag %}
 2 | <!-- Global site tag (gtag.js) - Google Analytics -->
 3 | <script async src="https://www.googletagmanager.com/gtag/js?id={{ site.gtag }}"></script>
 4 | <script>
 5 |   window.dataLayer = window.dataLayer || [];
 6 |   function gtag(){dataLayer.push(arguments);}
 7 |   gtag('js', new Date());
 8 |   gtag('config', '{{ site.gtag }}');
 9 | </script>
10 | {% endif %}
11 | 


--------------------------------------------------------------------------------
/_includes/gtm_body.html:
--------------------------------------------------------------------------------
1 | {% if site.gtm %}
2 |   <!-- Google Tag Manager (noscript) -->
3 |   <noscript><iframe src="https://www.googletagmanager.com/ns.html?id={{ site.gtm }}" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
4 |   <!-- End Google Tag Manager (noscript) -->
5 | {% endif %}
6 | 


--------------------------------------------------------------------------------
/_includes/gtm_head.html:
--------------------------------------------------------------------------------
 1 | {% if site.gtm %}
 2 |   <!-- Google Tag Manager -->
 3 |   <script>
 4 |     (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
 5 |       new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
 6 |       j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
 7 |       'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
 8 |     })(window,document,'script','dataLayer','{{ site.gtm }}');
 9 |   </script>
10 |   <!-- End Google Tag Manager -->
11 | {% endif %}
12 | 


--------------------------------------------------------------------------------
/_includes/head.html:
--------------------------------------------------------------------------------
  1 | <head>
  2 |   <meta charset="utf-8">
  3 |   <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  4 | 
  5 |   {% capture pagetitle %}
  6 |     {%- if page.share-title -%}
  7 |       {{ page.share-title | strip_html | xml_escape }}
  8 |     {%- elsif page.title -%}
  9 |       {{ page.title | strip_html | xml_escape  }}
 10 |     {%- else -%}
 11 |       {{ site.title | strip_html | xml_escape }}
 12 |     {%- endif -%}
 13 |   {% endcapture %}
 14 | 
 15 |   {% capture title %}
 16 |     {%- if site.title and site.title-on-all-pages and (site.title != pagetitle) -%}
 17 |       {{ pagetitle }} | {{ site.title }}
 18 |     {%- else -%}
 19 |       {{ pagetitle }}
 20 |     {%- endif -%}
 21 |   {% endcapture %}
 22 | 
 23 |   {% capture description %}
 24 |     {%- if page.share-description -%}
 25 |       {{ page.share-description | strip_html | xml_escape }}
 26 |     {%- elsif page.subtitle -%}
 27 |       {{ page.subtitle | strip_html | xml_escape }}
 28 |     {%- else -%}
 29 |       {%- assign excerpt_length = site.excerpt_length | default: 50 -%}
 30 |       {{ page.content | strip_html | xml_escape | truncatewords: excerpt_length | strip }}
 31 |     {%- endif -%}
 32 |   {% endcapture %}
 33 | 
 34 |   <title>{{ title }}</title>
 35 | 
 36 |   {% capture author %}
 37 |     {%- if page.author -%}
 38 |       {{  page.author | strip_html }}
 39 |     {%- elsif site.author -%}
 40 |       {{ site.author }}
 41 |     {%- endif -%}
 42 |   {% endcapture %}
 43 |   {% if author != "" %}
 44 |   <meta name="author" content="{{ author }}">
 45 |   {% endif %}
 46 | 
 47 |   <meta name="description" content="{{ description }}">
 48 | 
 49 |   {% if site.mobile-theme-col %}
 50 |   <meta name="theme-color" content="{{ site.mobile-theme-col }}">
 51 |   {% endif %}
 52 | 
 53 |   {% if site.keywords %}
 54 |   <meta name="keywords" content="{{ site.keywords }}">
 55 |   {% endif %}
 56 | 
 57 |   {% if site.rss-description %}
 58 |   <link rel="alternate" type="application/rss+xml" title="{{ site.title }}" href="{{ '/feed.xml' | absolute_url }}">
 59 |   {% endif %}
 60 | 
 61 |   {% include gtag.html %}
 62 |   {% include gtm_head.html %}
 63 |   {% include google_analytics.html %}
 64 |   {% include cloudflare_analytics.html %}
 65 |   {% include mathjax.html %}
 66 | 
 67 |   {% if layout.common-ext-css %}
 68 |     {% for css in layout.common-ext-css %}
 69 |       {% include ext-css.html css=css %}
 70 |     {% endfor %}
 71 |   {% endif %}
 72 | 
 73 |   {% if layout.common-css %}
 74 |     {% for css in layout.common-css %}
 75 |       <link rel="stylesheet" href="{{ css | relative_url }}">
 76 |     {% endfor %}
 77 |   {% endif %}
 78 | 
 79 |   {% if site.site-css %}
 80 |     {% for css in site.site-css %}
 81 |       <link rel="stylesheet" href="{{ css | relative_url }}">
 82 |     {% endfor %}
 83 |   {% endif %}
 84 | 
 85 |   {% if page.ext-css %}
 86 |     {% for css in page.ext-css %}
 87 |       {% include ext-css.html css=css %}
 88 |     {% endfor %}
 89 |   {% endif %}
 90 |   
 91 |   {% if page.css %}
 92 |     {% for css in page.css %}
 93 |       <link rel="stylesheet" href="{{ css | relative_url }}">
 94 |     {% endfor %}
 95 |   {% endif %}
 96 | 
 97 |   {% if site.fb_app_id %}
 98 |   <meta property="fb:app_id" content="{{ site.fb_app_id }}">
 99 |   {% endif %}
100 | 
101 |   {% if site.title %}
102 |   <meta property="og:site_name" content="{{ site.title }}">
103 |   {% endif %}
104 | 
105 |   {%- capture img -%}
106 |     {%- if page.share-img -%}
107 |       {{ page.share-img }}
108 |     {%- elsif page.cover-img -%}
109 |       {%- if page.cover-img.first -%}
110 |         {{ page.cover-img[0].first.first }}
111 |       {%- else -%}
112 |         {{ page.cover-img }}
113 |       {%- endif -%}
114 |     {%- elsif page.thumbnail-img -%}
115 |       {{ page.thumbnail-img }}
116 |     {%- elsif site.avatar -%}
117 |       {{ site.avatar }}
118 |     {% endif %}
119 |   {%- endcapture -%}
120 |   {%- assign img=img | strip -%}
121 | 
122 |   <meta property="og:title" content="{{ title }}">
123 |   <meta property="og:description" content="{{ description }}">
124 | 
125 |   {% if img != "" %}
126 |   <meta property="og:image" content="{{ img | absolute_url }}">
127 |   {% endif %}
128 | 
129 |   {% if page.id %}
130 |   <meta property="og:type" content="article">
131 |   {% if author != "" %}
132 |   <meta property="og:article:author" content="{{ author }}">
133 |   {% endif %}
134 |   <meta property="og:article:published_time" content="{{ page.date | date_to_xmlschema }}">
135 |   <meta property="og:url" content="{{ page.url | absolute_url }}">
136 |   <link rel="canonical" href="{{ page.url | absolute_url }}">
137 |   {% else %}
138 |   <meta property="og:type" content="website">
139 |   <meta property="og:url" content="{{ page.url | absolute_url | strip_index }}">
140 |   <link rel="canonical" href="{{ page.url | absolute_url | strip_index }}">
141 |   {% endif %}
142 | 
143 |   {% if img != "" and img != site.avatar %}
144 |   <meta name="twitter:card" content="summary_large_image">
145 |   {% else %}
146 |   <meta name="twitter:card" content="summary">
147 |   {% endif %}
148 |   <meta name="twitter:site" content="@{{ site.social-network-links.twitter }}">
149 |   <meta name="twitter:creator" content="@{{ site.social-network-links.twitter }}">
150 | 
151 |   <meta property="twitter:title" content="{{ title }}">
152 |   <meta property="twitter:description" content="{{ description }}">
153 | 
154 |   {% if img != "" %}
155 |   <meta name="twitter:image" content="{{ img | absolute_url }}">
156 |   {% endif %}
157 | 
158 |   {% include matomo.html %}
159 | 
160 |   {% if page.comments and site.staticman.repository and site.staticman.branch %}
161 |   <link rel="stylesheet" href="{{ "/assets/css/staticman.css" | relative_url }}">
162 |   {% endif %}
163 | 
164 |   {% assign favicon_exists = site.static_files | where: "path", "/favicon.ico" | size %}
165 |   {% if favicon_exists == 1 %}
166 |   <link rel="icon" href="{{ '/favicon.ico' | relative_url }}" />
167 |   {% endif %}
168 | 
169 |   {% if page.head-extra %}
170 |     {% for file in page.head-extra %}
171 |       {% include {{ file }} %}
172 |     {% endfor %}
173 |   {% endif %}
174 | 
175 | </head>
176 | 


--------------------------------------------------------------------------------
/_includes/header.html:
--------------------------------------------------------------------------------
 1 | {% assign date_format = site.date_format | default: "%B %-d, %Y" %}
 2 | 
 3 | {% if page.cover-img %}
 4 |   <div id="header-big-imgs" data-num-img={% if page.cover-img.first %}{{ page.cover-img.size }}{% else %}1{% endif %}
 5 |     {% for bigimg in page.cover-img %}
 6 |     {% assign imgnum = forloop.index %}
 7 |     {% for imginfo in bigimg %}
 8 |     {% if imginfo[0] %}
 9 |       data-img-src-{{ imgnum }}="{{ imginfo[0] | absolute_url }}"
10 |       data-img-desc-{{ imgnum }}="{{ imginfo[1] }}"
11 |     {% else %}
12 |       data-img-src-{{ imgnum }}="{{ imginfo | absolute_url }}"
13 |     {% endif %}
14 |     {% endfor %}
15 |     {% endfor %}
16 |   ></div>
17 | {% endif %}
18 | 
19 | <header class="header-section {% if page.cover-img %}has-img{% endif %}">
20 | <div class="intro-header {% if page.cover-img %} big-img {% endif %}">
21 |   {% if page.cover-img or page.title %}
22 |   <div class="container-md">
23 |     <div class="row">
24 |       <div class="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
25 |         <div class="{{ include.type }}-heading">
26 |           <h1>{% if page.title %}{{ page.title | strip_html }}{% else %}<br/>{% endif %}</h1>
27 |           {% if page.subtitle %}
28 |             {% if include.type == "page" %}
29 |               <hr class="small">
30 |               <span class="{{ include.type }}-subheading">{{ page.subtitle | strip_html }}</span>
31 |             {% else %}
32 |               <h2 class="{{ include.type }}-subheading">{{ page.subtitle | strip_html }}</h2>
33 |             {% endif %}
34 |           {% endif %}
35 |           
36 |           {% if include.type == "post" %} 
37 |             {% if page.author %}
38 |               By <strong>{{ page.author | strip_html }}</strong><br>
39 |             {% endif%}
40 |             <span class="post-meta">Posted on {{ page.date | date: date_format }}</span>
41 |             {% if page.last-updated %}
42 |               <span class="post-meta">
43 |                 <span class="d-none d-md-inline middot">&middot;</span>
44 |                 Last updated {{ page.last-updated | date: date_format }}
45 |               </span>
46 |             {% endif %}
47 |             {% if page.readtime %}
48 |               {% include readtime.html %}
49 |             {% endif %}
50 |           {% endif %}
51 |         </div>
52 |       </div>
53 |     </div>
54 |   </div>
55 |   {% endif %}
56 |   {% if page.cover-img %}<span class='img-desc'></span>{% endif %}
57 | </div>
58 | 
59 | {% if page.header-extra %}
60 |   {% for file in page.header-extra %}
61 |     {% include {{ file }} %}
62 |   {% endfor %}
63 | {% endif %}
64 | 
65 | </header>
66 | 


--------------------------------------------------------------------------------
/_includes/mathjax.html:
--------------------------------------------------------------------------------
 1 | {% if page.mathjax %}
 2 | <script type="text/javascript">
 3 |   MathJax = {
 4 |     options: {
 5 |       skipHtmlTags: [
 6 |         'script', 'noscript', 'style', 'textarea', 'pre', 'code'
 7 |       ]
 8 |     }
 9 |   };
10 | </script>
11 | <script type="text/javascript" async src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML"></script>
12 | {% endif %}
13 | 


--------------------------------------------------------------------------------
/_includes/matomo.html:
--------------------------------------------------------------------------------
 1 | {% if site.matomo %}
 2 |   <!-- Matomo -->
 3 |   <script type="text/javascript">
 4 |     var _paq = _paq || [];
 5 |     /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
 6 |     _paq.push(['trackPageView']);
 7 |     _paq.push(['enableLinkTracking']);
 8 |     (function() {
 9 |       var u="//{{- site.matomo.uri -}}/";
10 |       _paq.push(['setTrackerUrl', u+'piwik.php']);
11 |       _paq.push(['setSiteId', '{{- site.matomo.site_id -}}']);
12 |       var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
13 |       g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);
14 |     })();
15 |   </script>
16 |   <!-- End Piwik Code -->
17 | {% endif %}
18 | 


--------------------------------------------------------------------------------
/_includes/nav.html:
--------------------------------------------------------------------------------
 1 | <nav class="navbar navbar-expand-xl navbar-light fixed-top navbar-custom {% if page.nav-short %}top-nav-short-permanent{% else %}top-nav-regular{% endif %}">
 2 | 
 3 |   {%- if site.title-img -%}
 4 |     <a class="navbar-brand navbar-brand-logo" href="{{ '/' | absolute_url }}"><img alt="{{ site.title }} Logo" src="{{ site.title-img | relative_url}}"/></a>
 5 |   {%- elsif site.title -%}
 6 |     <a class="navbar-brand" href="{{ '/' | absolute_url }}">{{ site.title }}</a>
 7 |   {%- endif -%}
 8 | 
 9 |   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-navbar" aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
10 |     <span class="navbar-toggler-icon"></span>
11 |   </button>
12 | 
13 |   <div class="collapse navbar-collapse" id="main-navbar">
14 |     <ul class="navbar-nav ml-auto">
15 |       {%- for link in site.navbar-links -%}
16 |         {%- if link[1].first %}
17 |           <li class="nav-item dropdown">
18 |             <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{{ link[0] }}</a>
19 |             <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
20 |               {%- for childlink in link[1] -%}
21 |                 {%- for linkparts in childlink %}
22 |                   <a class="dropdown-item" href="{{ linkparts[1] | relative_url }}">{{ linkparts[0] }}</a>
23 |                 {%- endfor -%}
24 |               {%- endfor %}
25 |             </div>
26 |           </li>
27 |         {% else %}
28 |           <li class="nav-item">
29 |             <a class="nav-link" href="{{ link[1] | relative_url }}">{{ link[0] }}</a>
30 |           </li>
31 |         {%- endif -%}
32 |       {%- endfor -%}
33 |       {% if site.post_search %}
34 |         <li class="nav-item">
35 |           <a class="nav-link" id="nav-search-link" href="#" title="Search">
36 |             <span id="nav-search-icon" class="fa fa-search"></span>
37 |             <span id="nav-search-text">Search</span>
38 |           </a>
39 |         </li>
40 |       {%- endif -%}
41 |     </ul>
42 |   </div>
43 | 
44 |   {% if site.navbar-extra %}
45 |     {% for file in site.navbar-extra %}
46 |       {% include {{ file }} %}
47 |     {% endfor %}
48 |   {% endif %}
49 | 
50 |   {% if site.avatar and page.show-avatar != false %}
51 |     <div class="avatar-container">
52 |       <div class="avatar-img-border">
53 |         <a href="{{ '/' | absolute_url }}">
54 |           <img alt="Navigation bar avatar" class="avatar-img" src="{{ site.avatar | relative_url }}" />
55 |         </a>
56 |       </div>
57 |     </div>
58 |   {% endif %}
59 | 
60 | </nav>
61 | 
62 | {% include search.html %}
63 | 


--------------------------------------------------------------------------------
/_includes/readtime.html:
--------------------------------------------------------------------------------
 1 | <!--- "ReadTime on GitHub Jekyll" (c) 2020 Ruby Griffith Ramirez, MIT License -->
 2 | 
 3 | {% assign ReadTime = page.content | strip_html | number_of_words %}
 4 | {% assign calcReadTime = ReadTime | float %}
 5 | {% assign finalReadTime = calcReadTime | divided_by:200 | round: 2 %}
 6 | {% assign number = finalReadTime | round %}
 7 | {% if number >= 1 %}
 8 |   {% assign yesReadTime = number | append: " minute read" %}
 9 |   <span class="post-meta"><span class="d-none d-md-inline middot">&middot;</span> {{ yesReadTime }}</span>
10 | {% elsif number < 1 %}
11 |   {% assign minReadTime = '&lt; 1 minute read' %}
12 |   <span class="post-meta"><span class="d-none d-md-inline middot">&middot;</span> {{ minReadTime }}</span>
13 | {% else %}
14 |   {% assign nilReadTime = number | replace:'0',' ' %}
15 |   {{ nilReadTime }}
16 | {% endif %}
17 | 


--------------------------------------------------------------------------------
/_includes/search.html:
--------------------------------------------------------------------------------
 1 | {% if site.post_search %}
 2 | 
 3 | <div id="beautifuljekyll-search-overlay">
 4 | 
 5 |   <div id="nav-search-exit" title="Exit search">✕</div>
 6 |   <input type="text" id="nav-search-input" placeholder="Search">
 7 |   <ul id="search-results-container"></ul>
 8 |   
 9 |   <script src="https://unpkg.com/simple-jekyll-search@latest/dest/simple-jekyll-search.min.js"></script>
10 |   <script>
11 |     SimpleJekyllSearch({
12 |       searchInput: document.getElementById('nav-search-input'),
13 |       resultsContainer: document.getElementById('search-results-container'),
14 |       json: '{{ site.baseurl }}/assets/data/searchcorpus.json' 
15 |     });
16 |   </script>
17 | </div>
18 | 
19 | {% endif %}
20 | 


--------------------------------------------------------------------------------
/_includes/social-networks-links.html:
--------------------------------------------------------------------------------
  1 | {% if site.social-network-links %}
  2 | <ul class="list-inline text-center footer-links">
  3 | 
  4 | {%- for network in site.social-network-links -%}
  5 | 
  6 |   {%- if network[0] == "rss" and network[1] and site.rss-description -%}
  7 |   <li class="list-inline-item">
  8 |     <a href="{{ '/feed.xml' | relative_url }}" title="RSS">
  9 |       <span class="fa-stack fa-lg" aria-hidden="true">
 10 |         <i class="fas fa-circle fa-stack-2x"></i>
 11 |         <i class="fas fa-rss fa-stack-1x fa-inverse"></i>
 12 |       </span>
 13 |       <span class="sr-only">RSS</span>
 14 |     </a>
 15 |   </li>
 16 |   {%- endif -%}
 17 | 
 18 |   {%- if network[0] == "email" -%}
 19 |   <li class="list-inline-item">
 20 |     <a href="mailto:{{ network[1] }}" title="Email me">
 21 |       <span class="fa-stack fa-lg" aria-hidden="true">
 22 |         <i class="fas fa-circle fa-stack-2x"></i>
 23 |         <i class="fas fa-envelope fa-stack-1x fa-inverse"></i>
 24 |       </span>
 25 |       <span class="sr-only">Email me</span>
 26 |    </a>
 27 |   </li>
 28 |   {%- endif -%}
 29 | 
 30 |   {%- if network[0] == "calendly" -%}
 31 |   <li class="list-inline-item">
 32 |     <a href="https://calendly.com/{{ network[1] }}" title="Schedule a meeting with me">
 33 |       <span class="fa-stack fa-lg" aria-hidden="true">
 34 |         <i class="fas fa-circle fa-stack-2x"></i>
 35 |         <i class="fas fa-calendar-check fa-stack-1x fa-inverse"></i>
 36 |       </span>
 37 |       <span class="sr-only">Schedule a meeting with me</span>
 38 |    </a>
 39 |   </li>
 40 |   {%- endif -%}
 41 | 
 42 |   {%- if network[0] == "facebook" -%}
 43 |   <li class="list-inline-item">
 44 |     <a href="https://www.facebook.com/{{ network[1] }}" title="Facebook">
 45 |       <span class="fa-stack fa-lg" aria-hidden="true">
 46 |         <i class="fas fa-circle fa-stack-2x"></i>
 47 |         <i class="fab fa-facebook fa-stack-1x fa-inverse"></i>
 48 |       </span>
 49 |       <span class="sr-only">Facebook</span>
 50 |    </a>
 51 |   </li>
 52 |   {%- endif -%}
 53 | 
 54 |   {%- if network[0] == "telegram" -%}
 55 |   <li class="list-inline-item">
 56 |     <a href="https://t.me/{{ network[1] }}" title="Telegram">
 57 |       <span class="fa-stack fa-lg" aria-hidden="true">
 58 |         <i class="fas fa-circle fa-stack-2x"></i>
 59 |         <i class="fab fa-telegram-plane fa-stack-1x fa-inverse"></i>
 60 |       </span>
 61 |       <span class="sr-only">Telegram</span>
 62 |     </a>
 63 |   </li>
 64 |   {%- endif -%}
 65 | 
 66 |   {%- if network[0] == "whatsapp" -%}
 67 |   <li class="list-inline-item">
 68 |     <a href="https://wa.me/{{ network[1] }}" title="Whatsapp">
 69 |       <span class="fa-stack fa-lg" aria-hidden="true">
 70 |         <i class="fas fa-circle fa-stack-2x"></i>
 71 |         <i class="fab fa-whatsapp fa-stack-1x fa-inverse"></i>
 72 |       </span>
 73 |       <span class="sr-only">Whatsapp</span>
 74 |     </a>
 75 |   </li>
 76 |   {%- endif -%}
 77 | 
 78 |   {%- if network[0] == "github" -%}
 79 |   <li class="list-inline-item">
 80 |     <a href="https://github.com/{{ network[1] }}" title="GitHub">
 81 |       <span class="fa-stack fa-lg" aria-hidden="true">
 82 |         <i class="fas fa-circle fa-stack-2x"></i>
 83 |         <i class="fab fa-github fa-stack-1x fa-inverse"></i>
 84 |       </span>
 85 |       <span class="sr-only">GitHub</span>
 86 |    </a>
 87 |   </li>
 88 |   {%- endif -%}
 89 | 
 90 |   {%- if network[0] == "gitlab" -%}
 91 |   <li class="list-inline-item">
 92 |     <a href="https://gitlab.com/{{ network[1] }}" title="GitLab">
 93 |       <span class="fa-stack fa-lg" aria-hidden="true">
 94 |         <i class="fas fa-circle fa-stack-2x"></i>
 95 |         <i class="fab fa-gitlab fa-stack-1x fa-inverse"></i>
 96 |       </span>
 97 |       <span class="sr-only">GitLab</span>
 98 |    </a>
 99 |   </li>
100 |   {%- endif -%}
101 | 
102 |   {%- if network[0] == "twitter" -%}
103 |   <li class="list-inline-item">
104 |     <a href="https://twitter.com/{{ network[1] }}" title="X (Twitter)">
105 |       <span class="fa-stack fa-lg" aria-hidden="true">
106 |         <i class="fas fa-circle fa-stack-2x"></i>
107 |         <i class="fab fa-x-twitter fa-stack-1x fa-inverse"></i>
108 |       </span>
109 |       <span class="sr-only">X (Twitter)</span>
110 |    </a>
111 |   </li>
112 |   {%- endif -%}
113 | 
114 |   {%- if network[0] == "reddit" -%}
115 |   {% assign reddit_start = network[1] | split: "/" | first -%}
116 |   {% unless reddit_start == 'r' or reddit_start == 'u' -%}
117 |     {% assign reddit_url_prefix = 'u/' -%}
118 |   {% endunless -%}
119 |   <li class="list-inline-item">
120 |     <a href="https://reddit.com/{{ reddit_url_prefix }}{{ network[1] }}" title="Reddit">
121 |       <span class="fa-stack fa-lg" aria-hidden="true">
122 |         <i class="fas fa-circle fa-stack-2x"></i>
123 |         <i class="fab fa-reddit fa-stack-1x fa-inverse"></i>
124 |       </span>
125 |       <span class="sr-only">Reddit</span>
126 |    </a>
127 |   </li>
128 |   {%- endif -%}
129 | 
130 |   {%- if network[0] == "linkedin" -%}
131 |   <li class="list-inline-item">
132 |     <a href="https://linkedin.com/in/{{ network[1] }}" title="LinkedIn">
133 |       <span class="fa-stack fa-lg" aria-hidden="true">
134 |         <i class="fas fa-circle fa-stack-2x"></i>
135 |         <i class="fab fa-linkedin fa-stack-1x fa-inverse"></i>
136 |       </span>
137 |       <span class="sr-only">LinkedIn</span>
138 |    </a>
139 |   </li>
140 |   {%- endif -%}
141 | 
142 |   {%- if network[0] == "xing" -%}
143 |   <li class="list-inline-item">
144 |     <a href="https://www.xing.com/profile/{{ network[1] }}" title="Xing">
145 |       <span class="fa-stack fa-lg" aria-hidden="true">
146 |         <i class="fas fa-circle fa-stack-2x"></i>
147 |         <i class="fab fa-xing fa-stack-1x fa-inverse"></i>
148 |       </span>
149 |       <span class="sr-only">Xing</span>
150 |    </a>
151 |   </li>
152 |   {%- endif -%}
153 | 
154 |   {%- if network[0] == "stackoverflow" -%}
155 |   <li class="list-inline-item">
156 |     <a href="https://stackoverflow.com/users/{{ network[1] }}" title="StackOverflow">
157 |       <span class="fa-stack fa-lg" aria-hidden="true">
158 |         <i class="fas fa-circle fa-stack-2x"></i>
159 |         <i class="fab fa-stack-overflow fa-stack-1x fa-inverse"></i>
160 |       </span>
161 |       <span class="sr-only">StackOverflow</span>
162 |    </a>
163 |   </li>
164 |   {%- endif -%}
165 | 
166 |   {%- if network[0] == "snapchat" -%}
167 |   <li class="list-inline-item">
168 |     <a href="https://www.snapchat.com/add/{{ network[1] }}" title="Snapchat">
169 |       <span class="fa-stack fa-lg" aria-hidden="true">
170 |         <i class="fas fa-circle fa-stack-2x"></i>
171 |         <i class="fab fa-snapchat-ghost fa-stack-1x fa-inverse"></i>
172 |       </span>
173 |       <span class="sr-only">Snapchat</span>
174 |    </a>
175 |   </li>
176 |   {%- endif -%}
177 | 
178 |   {%- if network[0] == "instagram" -%}
179 |   <li class="list-inline-item">
180 |     <a href="https://www.instagram.com/{{ network[1] }}" title="Instagram">
181 |       <span class="fa-stack fa-lg" aria-hidden="true">
182 |         <i class="fas fa-circle fa-stack-2x"></i>
183 |         <i class="fab fa-instagram fa-stack-1x fa-inverse"></i>
184 |       </span>
185 |       <span class="sr-only">Instagram</span>
186 |    </a>
187 |   </li>
188 |   {%- endif -%}
189 | 
190 |   {%- if network[0] == "youtube" -%}
191 |   <li class="list-inline-item">
192 |     <a href="https://www.youtube.com/{{ network[1] }}" title="YouTube">
193 |       <span class="fa-stack fa-lg" aria-hidden="true">
194 |         <i class="fas fa-circle fa-stack-2x"></i>
195 |         <i class="fab fa-youtube fa-stack-1x fa-inverse"></i>
196 |       </span>
197 |       <span class="sr-only">YouTube</span>
198 |    </a>
199 |   </li>
200 |   {%- endif -%}
201 | 
202 |   {%- if network[0] == "spotify" -%}
203 |   <li class="list-inline-item">
204 |     <a href="https://open.spotify.com/user/{{ network[1] }}" title="Spotify">
205 |       <span class="fa-stack fa-lg" aria-hidden="true">
206 |         <i class="fas fa-circle fa-stack-2x"></i>
207 |         <i class="fab fa-spotify fa-stack-1x fa-inverse"></i>
208 |       </span>
209 |       <span class="sr-only">Spotify</span>
210 |    </a>
211 |   </li>
212 |   {%- endif -%}
213 | 
214 |   {%- if network[0] == "telephone" -%}
215 |   <li class="list-inline-item">
216 |     <a href="tel:{{ network[1] }}" title="Phone">
217 |       <span class="fa-stack fa-lg" aria-hidden="true">
218 |         <i class="fas fa-circle fa-stack-2x"></i>
219 |         <i class="fas fa-phone fa-stack-1x fa-inverse"></i>
220 |       </span>
221 |       <span class="sr-only">Phone</span>
222 |    </a>
223 |   </li>
224 |   {%- endif -%}
225 | 
226 |   {%- if network[0] == "steam" -%}
227 |   <li class="list-inline-item">
228 |     <a href="https://steamcommunity.com/id/{{ network[1] }}" title="Steam">
229 |       <span class="fa-stack fa-lg" aria-hidden="true">
230 |         <i class="fas fa-circle fa-stack-2x"></i>
231 |         <i class="fab fa-steam fa-stack-1x fa-inverse"></i>
232 |       </span>
233 |       <span class="sr-only">Steam</span>
234 |    </a>
235 |   </li>
236 |   {%- endif -%}
237 | 
238 |   {%- if network[0] == "twitch" -%}
239 |   <li class="list-inline-item">
240 |     <a href="https://www.twitch.tv/{{ network[1] }}" title="Twitch">
241 |       <span class="fa-stack fa-lg" aria-hidden="true">
242 |         <i class="fas fa-circle fa-stack-2x"></i>
243 |         <i class="fab fa-twitch fa-stack-1x fa-inverse"></i>
244 |       </span>
245 |       <span class="sr-only">Twitch</span>
246 |    </a>
247 |   </li>
248 |   {%- endif -%}
249 | 
250 |   {%- if network[0] == "yelp" -%}
251 |   <li class="list-inline-item">
252 |     <a href="https://yelp.com/{{ network[1] }}" title="Yelp">
253 |       <span class="fa-stack fa-lg" aria-hidden="true">
254 |         <i class="fas fa-circle fa-stack-2x"></i>
255 |         <i class="fab fa-yelp fa-stack-1x fa-inverse"></i>
256 |       </span>
257 |       <span class="sr-only">Yelp</span>
258 |    </a>
259 |   </li>
260 |   {%- endif -%}
261 | 
262 |   {%- if network[0] == "mastodon" -%}
263 |   <li class="list-inline-item">
264 |     <a rel="me" href="https://{{ network[1] }}" title="Mastodon">
265 |       <span class="fa-stack fa-lg" aria-hidden="true">
266 |         <i class="fas fa-circle fa-stack-2x"></i>
267 |         <i class="fab fa-mastodon fa-stack-1x fa-inverse"></i>
268 |       </span>
269 |       <span class="sr-only">Mastodon</span>
270 |     </a>
271 |   </li>
272 |   {%- endif -%}
273 | 
274 |   {%- if network[0] == "bluesky" -%}
275 |   <li class="list-inline-item">
276 |     <a rel="me" href="https://bsky.app/profile/{{ network[1] }}" title="Bluesky">
277 |       <span class="fa-stack fa-lg" aria-hidden="true">
278 |         <i class="fas fa-circle fa-stack-2x"></i>
279 |         <i class="fas fa-brands fa-bluesky fa-stack-1x fa-inverse"></i>
280 |       </span>
281 |       <span class="sr-only">Bluesky</span>
282 |     </a>
283 |   </li>
284 |   {%- endif -%}
285 | 
286 |   {%- if network[0] == "ORCID" -%}
287 |  <li class="list-inline-item">
288 |    <a href="https://orcid.org/{{ network[1] }}" title="ORCID">
289 |      <span class="fa-stack fa-lg" aria-hidden="true">
290 |        <i class="fas fa-circle fa-stack-2x"></i>
291 |        <i class="fab fa-orcid fa-stack-1x fa-inverse"></i>
292 |      </span>
293 |      <span class="sr-only">ORCID</span>
294 |    </a>
295 |  </li>
296 |   {%- endif -%}
297 | 
298 |   {%- if network[0] == "google-scholar" -%}
299 |   <li class="list-inline-item">
300 |     <a href="https://scholar.google.com/citations?user={{ network[1] }}" title="Google Scholar">
301 |       <span class="fa-stack fa-lg" aria-hidden="true">
302 |         <i class="fas fa-circle fa-stack-2x"></i>
303 |         <i class="fa fa-graduation-cap fa-stack-1x fa-inverse"></i>
304 |       </span>
305 |       <span class="sr-only">Google Scholar</span>
306 |     </a>
307 |   </li>
308 |   {%- endif -%}
309 | 
310 |   {%- if network[0] == "patreon" -%}
311 |   <li class="list-inline-item">
312 |     <a href="https://patreon.com/{{ network[1] }}" title="Patreon">
313 |       <span class="fa-stack fa-lg" aria-hidden="true">
314 |         <i class="fas fa-circle fa-stack-2x"></i>
315 |         <i class="fab fa-patreon fa-stack-1x fa-inverse"></i>
316 |       </span>
317 |       <span class="sr-only">Patreon</span>
318 |     </a>
319 |   </li>
320 |   {%- endif -%}
321 | 
322 |   {%- if network[0] == "medium" -%}
323 |   <li class="list-inline-item">
324 |     <a href="https://medium.com/@{{ network[1] }}" title="Medium">
325 |       <span class="fa-stack fa-lg" aria-hidden="true">
326 |         <i class="fas fa-circle fa-stack-2x"></i>
327 |         <i class="fab fa-medium fa-stack-1x fa-inverse"></i>
328 |       </span>
329 |       <span class="sr-only">Medium</span>
330 |     </a>
331 |   </li>
332 |   {%- endif -%}
333 | 
334 |   {%- if network[0] == "itchio" -%}
335 |   <li class="list-inline-item">
336 |     <a href="https://{{ network[1] }}.itch.io/" title="Itchio">
337 |       <span class="fa-stack fa-lg" aria-hidden="true">
338 |         <i class="fas fa-circle fa-stack-2x"></i>
339 |         <i class="fab fa-itch-io fa-stack-1x fa-inverse"></i>
340 |       </span>
341 |       <span class="sr-only">Itchio</span>
342 |    </a>
343 |   </li>
344 |   {%- endif -%}
345 | 
346 |   {%- if network[0] == "discord" -%}
347 |   {% assign discord_start = network[1] | split: "/" | first -%}
348 |   {% unless discord_start == 'users' or discord_start == 'invite' -%}
349 |     {% assign discord_url_prefix = 'invite/' -%}
350 |   {% endunless -%}
351 |   <li class="list-inline-item">
352 |     <a href="https://discord.com/{{discord_url_prefix}}{{network[1]}}" title="Discord">
353 |       <span class="fa-stack fa-lg" aria-hidden="true">
354 |         <i class="fas fa-circle fa-stack-2x"></i>
355 |         <i class="fab fa-discord fa-stack-1x fa-inverse"></i>
356 |       </span>
357 |       <span class="sr-only">Discord</span>
358 |    </a>
359 |   </li>
360 |   {%- endif -%}
361 | 
362 |   {%- if network[0] == "kaggle" -%}
363 |   <li class="list-inline-item">
364 |     <a href="https://www.kaggle.com/{{ network[1] }}" title="Kaggle">
365 |       <span class="fa-stack fa-lg" aria-hidden="true">
366 |         <i class="fas fa-circle fa-stack-2x"></i>
367 |         <i class="fab fa-kaggle fa-stack-1x fa-inverse"></i>
368 |       </span>
369 |       <span class="sr-only">Kaggle</span>
370 |    </a>
371 |   </li>
372 |   {%- endif -%}
373 | 
374 |   {%- if network[0] == "hackerrank" -%}
375 |   <li class="list-inline-item">
376 |     <a href="https://www.hackerrank.com/{{ network[1] }}" title="Hackerrank">
377 |       <span class="fa-stack fa-lg" aria-hidden="true">
378 |         <i class="fas fa-circle fa-stack-2x"></i>
379 |         <i class="fab fa-hackerrank fa-stack-1x fa-inverse"></i>
380 |       </span>
381 |       <span class="sr-only">Hackerrank</span>
382 |    </a>
383 |   </li>
384 |   {%- endif -%}
385 | 
386 |   {%- if network[0] == "untappd" -%}
387 |   <li class="list-inline-item">
388 |     <a href="https://untappd.com/user/{{ network[1] }}" title="Untappd">
389 |       <span class="fa-stack fa-lg" aria-hidden="true">
390 |         <i class="fas fa-circle fa-stack-2x"></i>
391 |         <i class="fab fa-untappd fa-stack-1x fa-inverse"></i>
392 |       </span>
393 |       <span class="sr-only">Untappd</span>
394 |    </a>
395 |   </li>
396 |   {%- endif -%}
397 | 
398 |   {%- if network[0] == "strava" -%}
399 |   <li class="list-inline-item">
400 |     <a href="https://www.strava.com/athletes/{{ site.social-network-links.strava}}" title="Strava">
401 |       <span class="fa-stack fa-lg" aria-hidden="true">
402 |         <i class="fas fa-circle fa-stack-2x"></i>
403 |         <i class="fab fa-strava fa-stack-1x fa-inverse"></i>
404 |       </span>
405 |       <span class="sr-only">Strava</span>
406 |    </a>
407 |   </li>
408 |   {%- endif -%}
409 | 
410 | {%- endfor -%}
411 | 
412 | </ul>
413 | {% endif %}
414 | 


--------------------------------------------------------------------------------
/_includes/social-share.html:
--------------------------------------------------------------------------------
 1 | <!-- Check if any share-links are active -->
 2 | {% assign any-share-links = false %}
 3 | {% for links in site.share-links-active %}
 4 |   {% if links[1] == true %}
 5 |     {% assign any-share-links = true %}
 6 |   {% endif %}
 7 | {% endfor %}
 8 | 
 9 | {% if any-share-links %}
10 | <section id = "social-share-section">
11 |   <span class="sr-only">Share: </span>
12 | 
13 |   {% if site.share-links-active.twitter %}
14 |     <a href="https://twitter.com/intent/tweet?text={{ page.title | strip_html | url_encode }}&url={{ page.url | absolute_url | url_encode }}"
15 |       class="btn btn-social-icon btn-twitter" title="Share on X (Twitter)">
16 |       <span class="fab fa-fw fa-x-twitter" aria-hidden="true"></span>
17 |       <span class="sr-only">X (Twitter)</span>
18 |     </a>
19 |   {% endif %}
20 | 
21 |   {% if site.share-links-active.facebook %}
22 |     <a href="https://www.facebook.com/sharer/sharer.php?u={{ page.url | absolute_url | url_encode }}"
23 |       class="btn btn-social-icon btn-facebook" title="Share on Facebook">
24 |       <span class="fab fa-fw fa-facebook" aria-hidden="true"></span>
25 |       <span class="sr-only">Facebook</span>
26 |     </a>
27 |   {% endif %}
28 | 
29 |   {% if site.share-links-active.linkedin %}
30 |     <a href="https://www.linkedin.com/shareArticle?mini=true&url={{ page.url | absolute_url | url_encode }}"
31 |       class="btn btn-social-icon btn-linkedin" title="Share on LinkedIn">
32 |       <span class="fab fa-fw fa-linkedin" aria-hidden="true"></span>
33 |       <span class="sr-only">LinkedIn</span>
34 |     </a>
35 |   {% endif %}
36 | 
37 |   {% if site.share-links-active.vk %}
38 |     <a href="https://vk.com/share.php?url={{ page.url | absolute_url | url_encode }}"
39 |       class="btn btn-social-icon btn-vk" title="Share on VK">
40 |       <span class="fab fa-fw fa-vk" aria-hidden="true"></span>
41 |       <span class="sr-only">VK</span>
42 |     </a>
43 |   {% endif %}
44 | 
45 |   {% if site.share-links-active.reddit %}
46 |     <a href="https://www.reddit.com/submit?url={{ page.url | absolute_url | url_encode }}"
47 |       class="btn btn-social-icon btn-reddit" title="Share on Reddit">
48 |       <span class="fab fa-fw fa-reddit" aria-hidden="true"></span>
49 |       <span class="sr-only">Reddit</span>
50 |     </a>
51 |   {% endif %}
52 | 
53 | </section>
54 | 
55 | {% endif %}
56 | 


--------------------------------------------------------------------------------
/_includes/staticman-comment.html:
--------------------------------------------------------------------------------
 1 | <article id="comment{{ include.index }}" class="js-comment comment" itemprop="comment" itemscope itemtype="https://schema.org/Comment">
 2 |   <div class="comment__avatar-wrapper">
 3 |     <img class="comment__avatar" src="https://www.gravatar.com/avatar/{{ include.email }}?d=mm&s=80" alt="{{ include.name }}">
 4 |   </div>
 5 |   <div class="comment__content-wrapper">
 6 |     <h4 class="comment__author" itemprop="author" itemscope itemtype="https://schema.org/Person">
 7 |       {% unless include.url == blank %}
 8 |         <span itemprop="name"><a rel="external nofollow" itemprop="url" href="{{ include.url }}">{{ include.name }}</a></span>
 9 |       {% else %}
10 |         <span itemprop="name">{{ include.name }}</span>
11 |       {% endunless %}
12 |     </h4>
13 |     <p class="comment__date">
14 |       {% if include.date %}
15 |         {% if include.index %}<a href="#comment{{ include.index }}" itemprop="url">{% endif %}
16 |         <time datetime="{{ include.date | date_to_xmlschema }}" itemprop="datePublished">{{ include.date | date: "%B %d, %Y at %I:%M %p" }}</time>
17 |         {% if include.index %}</a>{% endif %}
18 |       {% endif %}
19 |     </p>
20 |     <div itemprop="text">{{ include.message | markdownify }}</div>
21 |   </div>
22 | </article>
23 | 


--------------------------------------------------------------------------------
/_includes/staticman-comments.html:
--------------------------------------------------------------------------------
 1 | {% if site.staticman.repository and site.staticman.branch %}
 2 | <div class="staticman-comments">
 3 |   <div class="page__comments">
 4 |     <!-- Start static comments -->
 5 |     <div class="js-comments">
 6 |       {% if site.data.comments[page.slug] %}
 7 |         <h3 class="page__comments-title">{{ site.data.ui-text[site.locale].comments_title | default: "Comments" }}</h3>
 8 |         {% assign comments = site.data.comments[page.slug] | sort %}
 9 |         {% for comment in comments %}
10 |           {% assign email = comment[1].email %}
11 |           {% assign name = comment[1].name %}
12 |           {% assign url = comment[1].url %}
13 |           {% assign date = comment[1].date %}
14 |           {% assign message = comment[1].message %}
15 |           {% include staticman-comment.html index=forloop.index email=email name=name url=url date=date message=message %}
16 |         {% endfor %}
17 |       {% endif %}
18 |     </div>
19 |     <!-- End static comments -->
20 |     <!-- Start new comment form -->
21 |     <div class="page__comments-form">
22 |       <h3 class="page__comments-title">{{ site.data.ui-text[site.locale].comments_label | default: "Leave a Comment" }}</h3>
23 |       <p class="small">{{ site.data.ui-text[site.locale].comment_form_info | default: "Your email address will not be published. Required fields are marked" }} <span class="required">*</span></p>
24 |       <form id="new_comment" class="page__comments-form js-form form" method="post">
25 |         <div class="form-group">
26 |           <label for="comment-form-message">{{ site.data.ui-text[site.locale].comment_form_comment_label | default: "Comment" }} <small class="required">*</small></label><br>
27 |           <textarea type="text" rows="12" cols="36" id="comment-form-message" name="fields[message]" tabindex="1"></textarea>
28 |           <div class="small form-text"><a href="https://daringfireball.net/projects/markdown/">{{ site.data.ui-text[site.locale].comment_form_md_info | default: "Markdown is supported." }}</a></div>
29 |         </div>
30 |         <div class="form-group">
31 |           <label for="comment-form-name">{{ site.data.ui-text[site.locale].comment_form_name_label | default: "Name" }} <small class="required">*</small></label>
32 |           <input type="text" id="comment-form-name" name="fields[name]" tabindex="2" />
33 |         </div>
34 |         <div class="form-group">
35 |           <label for="comment-form-email">{{ site.data.ui-text[site.locale].comment_form_email_label | default: "Email address" }} <small class="required">*</small></label>
36 |           <input type="email" id="comment-form-email" name="fields[email]" tabindex="3" />
37 |         </div>
38 |         <div class="form-group">
39 |           <label for="comment-form-url">{{ site.data.ui-text[site.locale].comment_form_website_label | default: "Website (optional)" }}</label>
40 |           <input type="url" id="comment-form-url" name="fields[url]" tabindex="4"/>
41 |         </div>
42 |         <div class="form-group d-none" style="display: none;">
43 |           <input type="hidden" name="options[origin]" value="{{ page.url | absolute_url }}">
44 |           <input type="hidden" name="options[slug]" value="{{ page.slug }}">
45 |           <label for="comment-form-location">Not used. Leave blank if you are a human.</label>
46 |           <input type="text" id="comment-form-location" name="fields[hidden]" autocomplete="off"/>
47 |           {% if site.staticman.reCaptcha.siteKey %}<input type="hidden" name="options[reCaptcha][siteKey]" value="{{ site.staticman.reCaptcha.siteKey }}">{% endif %}
48 |           {% if site.staticman.reCaptcha.secret %}<input type="hidden" name="options[reCaptcha][secret]" value="{{ site.staticman.reCaptcha.secret }}">{% endif %}
49 |         </div>
50 |         <!-- Start comment form alert messaging -->
51 |         <p class="d-none js-notice alert">
52 |           <strong class="js-notice-text-success d-none">{{ site.data.ui-text[site.locale].comment_success_msg | default: "Thanks for your comment! It will show on the site once it has been approved." }}</strong>
53 |           <strong class="js-notice-text-failure d-none">{{ site.data.ui-text[site.locale].comment_error_msg | default: "Sorry, there was an error with your submission. Please make sure all required fields have been completed and try again." }}</strong>
54 |         </p>
55 |         <!-- End comment form alert messaging -->
56 |         {% if site.staticman.reCaptcha.siteKey %}
57 |           <div class="form-group">
58 |             <div class="g-recaptcha" data-sitekey="{{ site.staticman.reCaptcha.siteKey }}"></div>
59 |           </div>
60 |         {% endif %}
61 |         <div class="form-group">
62 |           <button type="submit" id="comment-form-submit" tabindex="5" class="btn btn-primary btn-lg">{{ site.data.ui-text[site.locale].comment_btn_submit | default: "Submit Comment" }}</button>
63 |           <button type="submit" id="comment-form-submitted" tabindex="5" class="btn btn-primary btn-lg d-none" disabled>{{ site.data.ui-text[site.locale].comment_btn_submitted | default: "Submitted" }}</button>
64 |         </div>
65 |       </form>
66 |     </div>
67 |     <!-- End new comment form -->
68 |     <!-- Load reCaptcha if site key is set -->
69 |     {% if site.staticman.reCaptcha.siteKey %}
70 |       <script async src="https://www.google.com/recaptcha/api.js"></script>
71 |     {% endif %}
72 |   </div>
73 | 
74 |   <!-- Load script to handle comment form submission -->
75 |   <!-- doing something a bit funky here because I want to be careful not to include JQuery twice! -->
76 |   <script>
77 |     if (typeof jQuery == 'undefined') {
78 |       document.write('<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></scr' + 'ipt>');
79 |     }
80 |   </script>
81 |   <script src="{{ "/assets/js/staticman.js" | relative_url }}"></script>
82 | </div>
83 | {% endif %}
84 | 


--------------------------------------------------------------------------------
/_includes/utterances-comment.html:
--------------------------------------------------------------------------------
 1 | {% if site.utterances.repository and site.utterances.issue-term  %}
 2 | 
 3 | <script src="https://utteranc.es/client.js"
 4 |         repo="{{ site.utterances.repository }}"
 5 |         issue-term="{{ site.utterances.issue-term }}"
 6 |         theme="{{ site.utterances.theme}}"
 7 |         label="{{ site.utterances.label}}"
 8 |         crossorigin="anonymous"
 9 |         async>
10 | </script>
11 | 
12 | {% endif %}
13 | 
14 | 


--------------------------------------------------------------------------------
/_layouts/base.html:
--------------------------------------------------------------------------------
 1 | ---
 2 | common-css:
 3 |   - "/assets/css/bootstrap-social.css"
 4 |   - "/assets/css/beautifuljekyll.css"
 5 | common-ext-css:
 6 |   - href: "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
 7 |     sri: "sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
 8 |   - "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
 9 |   - "https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic"
10 |   - "https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800"
11 | common-ext-js:
12 |   - href: "https://code.jquery.com/jquery-3.5.1.slim.min.js"
13 |     sri: "sha256-4+XzXVhsDmqanXGHaHvgh1gMQKX40OUvDEBTu8JcmNs="
14 |   - href: "https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
15 |     sri: "sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
16 |   - href: "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
17 |     sri: "sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
18 | common-js:
19 |   - "/assets/js/beautifuljekyll.js"
20 | ---
21 | 
22 | <!DOCTYPE html>
23 | <html lang="{{ page.language | default: site.language | default: 'en' }}">
24 | <!-- Beautiful Jekyll 6.0.1 | Copyright Dean Attali 2023 -->
25 | {% include head.html %}
26 | 
27 | <body>
28 |   {% include gtm_body.html %}
29 | 
30 |   {% include nav.html %}
31 | 
32 |   {{ content }}
33 | 
34 |   {% include footer.html %}
35 | 
36 |   {% include footer-scripts.html %}
37 | 
38 | </body>
39 | </html>
40 | 


--------------------------------------------------------------------------------
/_layouts/default.html:
--------------------------------------------------------------------------------
 1 | ---
 2 | layout: base
 3 | ---
 4 | 
 5 | <div class="intro-header"></div>
 6 | 
 7 | <main class="{% if page.full-width %} container-fluid {% else %} container-md {% endif %}">
 8 |   {% if page.before-content %}
 9 |     <div class="before-content">
10 |       {% for file in page.before-content %}
11 |         {% include {{ file }} %}
12 |       {% endfor %}
13 |     </div>
14 |   {% endif %}
15 | 
16 |   {{ content }}
17 | 
18 |   {% if page.after-content %}
19 |     <div class="after-content">
20 |       {% for file in page.after-content %}
21 |         {% include {{ file }} %}
22 |       {% endfor %}
23 |     </div>
24 |   {% endif %}
25 | </main>
26 | 


--------------------------------------------------------------------------------
/_layouts/home.html:
--------------------------------------------------------------------------------
  1 | ---
  2 | layout: page
  3 | ---
  4 | 
  5 | {{ content }}
  6 | 
  7 | {% assign posts = paginator.posts | default: site.posts %}
  8 | 
  9 | <!-- role="list" needed so that `list-style: none` in Safari doesn't remove the list semantics -->
 10 | <ul class="posts-list list-unstyled" role="list">
 11 |   {% for post in posts %}
 12 |   <li class="post-preview">
 13 |     <article>
 14 | 
 15 |       {%- capture thumbnail -%}
 16 |         {% if post.thumbnail-img %}
 17 |           {{ post.thumbnail-img }}
 18 |         {% elsif post.cover-img %}
 19 |           {% if post.cover-img.first %}
 20 |             {{ post.cover-img[0].first.first }}
 21 |           {% else %}
 22 |             {{ post.cover-img }}
 23 |           {% endif %}
 24 |         {% else %}
 25 |         {% endif %}
 26 |       {% endcapture %}
 27 |       {% assign thumbnail=thumbnail | strip %}
 28 | 
 29 |       {% if site.feed_show_excerpt == false %}
 30 |       {% if thumbnail != "" %}
 31 |       <div class="post-image post-image-normal">
 32 |         <a href="{{ post.url | absolute_url }}" aria-label="Thumbnail">
 33 |           <img src="{{ thumbnail | absolute_url }}" alt="Post thumbnail">
 34 |         </a>
 35 |       </div>
 36 |       {% endif %}
 37 |       {% endif %}
 38 | 
 39 |       <a href="{{ post.url | absolute_url }}">
 40 |         <h2 class="post-title">{{ post.title | strip_html }}</h2>
 41 | 
 42 |         {% if post.subtitle %}
 43 |           <h3 class="post-subtitle">
 44 |           {{ post.subtitle | strip_html }}
 45 |           </h3>
 46 |         {% endif %}
 47 |       </a>
 48 | 
 49 |       {% if post.author %}
 50 |         <span>By <strong>{{ post.author | strip_html }}</strong></span>
 51 |       {% endif %}
 52 |       <p class="post-meta">
 53 |         {% assign date_format = site.date_format | default: "%B %-d, %Y" %}
 54 |         Posted on {{ post.date | date: date_format }}
 55 |       </p>
 56 | 
 57 |       {% if thumbnail != "" %}
 58 |       <div class="post-image post-image-small">
 59 |         <a href="{{ post.url | absolute_url }}" aria-label="Thumbnail">
 60 |           <img src="{{ thumbnail | absolute_url }}" alt="Post thumbnail">
 61 |         </a>
 62 |       </div>
 63 |       {% endif %}
 64 | 
 65 |       {% unless site.feed_show_excerpt == false %}
 66 |       {% if thumbnail != "" %}
 67 |       <div class="post-image post-image-short">
 68 |         <a href="{{ post.url | absolute_url }}" aria-label="Thumbnail">
 69 |           <img src="{{ thumbnail | absolute_url }}" alt="Post thumbnail">
 70 |         </a>
 71 |       </div>
 72 |       {% endif %}
 73 | 
 74 |       <div class="post-entry">
 75 |         {% assign excerpt_length = site.excerpt_length | default: 50 %}
 76 |         {{ post.excerpt | strip_html | truncatewords: excerpt_length }}
 77 |         {% assign excerpt_word_count = post.excerpt | number_of_words %}
 78 |         {% if post.content != post.excerpt or excerpt_word_count > excerpt_length %}
 79 |           <a href="{{ post.url | absolute_url }}" class="post-read-more">[Read&nbsp;More]</a>
 80 |         {% endif %}
 81 |       </div>
 82 |       {% endunless %}
 83 | 
 84 |       {% if site.feed_show_tags != false and post.tags.size > 0 %}
 85 |       <div class="blog-tags">
 86 |         <span>Tags:</span>
 87 |         <!-- role="list" needed so that `list-style: none` in Safari doesn't remove the list semantics -->
 88 |         <ul class="d-inline list-inline" role="list">
 89 |           {% for tag in post.tags %}
 90 |           <li class="list-inline-item">
 91 |             <a href="{{ '/tags' | absolute_url }}#{{- tag -}}">{{- tag -}}</a>
 92 |           </li>
 93 |           {% endfor %}
 94 |         </ul>
 95 |       </div>
 96 |       {% endif %}
 97 | 
 98 |     </article>
 99 |   </li>
100 |   {% endfor %}
101 | </ul>
102 | 
103 | {% if paginator.total_pages > 1 %}
104 | <ul class="pagination main-pager">
105 |   {% if paginator.previous_page %}
106 |   <li class="page-item previous">
107 |     <a class="page-link" href="{{ paginator.previous_page_path | absolute_url }}">
108 |       <i class="fas fa-arrow-left" alt="Newer Posts"></i>
109 |       <span class="d-none d-sm-inline-block">Newer Posts</span>
110 |     </a>
111 |   </li>
112 |   {% endif %}
113 |   {% if paginator.next_page %}
114 |   <li class="page-item next">
115 |     <a class="page-link" href="{{ paginator.next_page_path | absolute_url }}">
116 |       <span class="d-none d-sm-inline-block">Older Posts</span>
117 |       <i class="fas fa-arrow-right" alt="Older Posts"></i>
118 |     </a>
119 |   </li>
120 |   {% endif %}
121 | </ul>
122 | {% endif %}
123 | 


--------------------------------------------------------------------------------
/_layouts/minimal.html:
--------------------------------------------------------------------------------
 1 | ---
 2 | common-css:
 3 |   - "/assets/css/beautifuljekyll-minimal.css"
 4 | common-ext-css:
 5 |   - href: "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
 6 |     sri: "sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
 7 | common-ext-js:
 8 |   - href: "https://code.jquery.com/jquery-3.5.1.slim.min.js"
 9 |     sri: "sha256-4+XzXVhsDmqanXGHaHvgh1gMQKX40OUvDEBTu8JcmNs="
10 |   - href: "https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
11 |     sri: "sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
12 |   - href: "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
13 |     sri: "sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
14 | ---
15 | 
16 | <!DOCTYPE html>
17 | <html lang="{{ page.language | default: site.language | default: 'en' }}">
18 | 
19 |   {% include head.html %}
20 | 
21 |   <body>
22 | 
23 |     <main class="{% if page.full-width %} container-fluid {% else %} container-md {% endif %} main-content">
24 |       {% if page.before-content %}
25 |         <div class="before-content">
26 |           {% for file in page.before-content %}
27 |             {% include {{ file }} %}
28 |           {% endfor %}
29 |         </div>
30 |       {% endif %}
31 | 
32 |       {{ content }}
33 | 
34 |       {% if page.after-content %}
35 |         <div class="after-content">
36 |           {% for file in page.after-content %}
37 |             {% include {{ file }} %}
38 |           {% endfor %}
39 |         </div>
40 |       {% endif %}
41 |     </main>
42 | 
43 |     {% include footer-minimal.html %}
44 | 
45 |     {% include footer-scripts.html %}
46 | 
47 |   </body>
48 | </html>
49 | 


--------------------------------------------------------------------------------
/_layouts/page.html:
--------------------------------------------------------------------------------
 1 | ---
 2 | layout: base
 3 | ---
 4 | 
 5 | {% include header.html type="page" %}
 6 | 
 7 | <main class="{% if page.full-width %} container-fluid {% else %} container-md {% endif %}">
 8 |   <div class="row">
 9 |     <div class="{% if page.full-width %} col {% else %} col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 {% endif %}">
10 |       {% if page.before-content %}
11 |         <div class="before-content">
12 |           {% for file in page.before-content %}
13 |             {% include {{ file }} %}
14 |           {% endfor %}
15 |         </div>
16 |       {% endif %}
17 | 
18 |       {{ content }}
19 | 
20 |       {% if page.after-content %}
21 |         <div class="after-content">
22 |           {% for file in page.after-content %}
23 |             {% include {{ file }} %}
24 |           {% endfor %}
25 |         </div>
26 |       {% endif %}
27 | 
28 |       {% include comments.html %}
29 |     </div>
30 |   </div>
31 | </main>
32 | 


--------------------------------------------------------------------------------
/_layouts/post.html:
--------------------------------------------------------------------------------
 1 | ---
 2 | layout: base
 3 | ---
 4 | 
 5 | {% include header.html type="post" %}
 6 | 
 7 | <main class="{% if page.full-width %} container-fluid {% else %} container-md {% endif %}">
 8 |   <div class="row">
 9 |     <div class="{% if page.full-width %} col {% else %} col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 {% endif %}">
10 | 
11 |       {% if page.gh-repo %}
12 |         {% assign gh_split =  page.gh-repo | split:'/'  %}
13 |         {% assign gh_user =  gh_split[0]  %}
14 |         {% assign gh_repo =  gh_split[1]  %}
15 | 
16 |         <div id="header-gh-btns">
17 |           {% if page.gh-badge.size > 0 %}
18 |             {% for badge in page.gh-badge %}
19 |               {% case badge %}
20 |                 {% when 'star'%}
21 |                   <iframe src="https://ghbtns.com/github-btn.html?user={{ gh_user }}&repo={{ gh_repo }}&type=star&count=true" frameborder="0" scrolling="0" width="120px" height="20px"></iframe>
22 |                 {% when 'watch'%}
23 |                   <iframe src="https://ghbtns.com/github-btn.html?user={{ gh_user }}&repo={{ gh_repo }}&type=watch&v=2&count=true" frameborder="0" scrolling="0" width="120px" height="20px"></iframe>
24 |                 {% when 'fork'%}
25 |                   <iframe src="https://ghbtns.com/github-btn.html?user={{ gh_user }}&repo={{ gh_repo }}&type=fork&count=true" frameborder="0" scrolling="0" width="120px" height="20px"></iframe>
26 |                 {% when 'follow'%}
27 |                   <iframe src="https://ghbtns.com/github-btn.html?user={{ gh_user }}&type=follow&count=true" frameborder="0" scrolling="0" width="220px" height="20px"></iframe>
28 |               {% endcase %}
29 |             {% endfor %}
30 |           {% endif %}
31 |         </div>
32 |       {% endif %}
33 | 
34 |       {% if page.before-content %}
35 |         <div class="before-content">
36 |           {% for file in page.before-content %}
37 |             {% include {{ file }} %}
38 |           {% endfor %}
39 |         </div>
40 |       {% endif %}
41 | 
42 |       <div class="blog-post">
43 |         {{ content }}
44 |       </div>
45 | 
46 |       {% if page.tags.size > 0 %}
47 |         <div class="blog-tags">
48 |           <span>Tags:</span>
49 |           {% for tag in page.tags %}
50 |             <a href="{{ '/tags' | relative_url }}#{{- tag -}}">{{- tag -}}</a>
51 |           {% endfor %}
52 |         </div>
53 |       {% endif %}
54 | 
55 |       {% if page.after-content %}
56 |         <div class="after-content">
57 |           {% for file in page.after-content %}
58 |             {% include {{ file }} %}
59 |           {% endfor %}
60 |         </div>
61 |       {% endif %}
62 | 
63 |       {% if page.social-share %}
64 |         {% include social-share.html %}
65 |       {% endif %}
66 | 
67 |       <ul class="pagination blog-pager">
68 |         {% if page.previous.url %}
69 |         <li class="page-item previous">
70 |           <a class="page-link" href="{{ page.previous.url | relative_url }}" data-toggle="tooltip" data-placement="top" title="{{page.previous.title | strip_html | xml_escape}}">
71 |             <i class="fas fa-arrow-left" alt="Previous Post"></i>
72 |             <span class="d-none d-sm-inline-block">Previous Post</span>
73 |           </a>
74 |         </li>
75 |         {% endif %}
76 |         {% if page.next.url %}
77 |         <li class="page-item next">
78 |           <a class="page-link" href="{{ page.next.url | relative_url }}" data-toggle="tooltip" data-placement="top" title="{{page.next.title | strip_html | xml_escape}}">
79 |             <span class="d-none d-sm-inline-block">Next Post</span>
80 |             <i class="fas fa-arrow-right" alt="Next Post"></i>
81 |           </a>
82 |         </li>
83 |         {% endif %}
84 |       </ul>
85 |       {% include comments.html %}
86 |     </div>
87 |   </div>
88 | </main>
89 | 


--------------------------------------------------------------------------------
/_posts/2020-02-26-flake-it-till-you-make-it.md:
--------------------------------------------------------------------------------
 1 | ---
 2 | layout: post
 3 | title: Flake it till you make it
 4 | subtitle: Excerpt from Soulshaping by Jeff Brown
 5 | cover-img: /assets/img/path.jpg
 6 | thumbnail-img: /assets/img/thumb.png
 7 | share-img: /assets/img/path.jpg
 8 | tags: [books, test]
 9 | author: Sharon Smith and Barry Simpson
10 | ---
11 | 
12 | Under what circumstances should we step off a path? When is it essential that we finish what we start? If I bought a bag of peanuts and had an allergic reaction, no one would fault me if I threw it out. If I ended a relationship with a woman who hit me, no one would say that I had a commitment problem. But if I walk away from a seemingly secure route because my soul has other ideas, I am a flake?
13 | 
14 | The truth is that no one else can definitively know the path we are here to walk. It’s tempting to listen—many of us long for the omnipotent other—but unless they are genuine psychic intuitives, they can’t know. All others can know is their own truth, and if they’ve actually done the work to excavate it, they will have the good sense to know that they cannot genuinely know anyone else’s. Only soul knows the path it is here to walk. Since you are the only one living in your temple, only you can know its scriptures and interpretive structure.
15 | 
16 | At the heart of the struggle are two very different ideas of success—survival-driven and soul-driven. For survivalists, success is security, pragmatism, power over others. Success is the absence of material suffering, the nourishing of the soul be damned. It is an odd and ironic thing that most of the material power in our world often resides in the hands of younger souls. Still working in the egoic and material realms, they love the sensations of power and focus most of their energy on accumulation. Older souls tend not to be as materially driven. They have already played the worldly game in previous lives and they search for more subtle shades of meaning in this one—authentication rather than accumulation. They are often ignored by the culture at large, although they really are the truest warriors.
17 | 
18 | A soulful notion of success rests on the actualization of our innate image. Success is simply the completion of a soul step, however unsightly it may be. We have finished what we started when the lesson is learned. What a fear-based culture calls a wonderful opportunity may be fruitless and misguided for the soul. Staying in a passionless relationship may satisfy our need for comfort, but it may stifle the soul. Becoming a famous lawyer is only worthwhile if the soul demands it. It is an essential failure if you are called to be a monastic this time around. If you need to explore and abandon ten careers in order to stretch your soul toward its innate image, then so be it. Flake it till you make it.


--------------------------------------------------------------------------------
/_posts/2020-02-28-sample-markdown.md:
--------------------------------------------------------------------------------
  1 | ---
  2 | layout: post
  3 | title: Sample blog post to learn markdown tips
  4 | subtitle: There's lots to learn!
  5 | gh-repo: daattali/beautiful-jekyll
  6 | gh-badge: [star, fork, follow]
  7 | tags: [test]
  8 | comments: true
  9 | mathjax: true
 10 | author: Bill Smith
 11 | ---
 12 | 
 13 | {: .box-success}
 14 | This is a demo post to show you how to write blog posts with markdown.  I strongly encourage you to [take 5 minutes to learn how to write in markdown](https://markdowntutorial.com/) - it'll teach you how to transform regular text into bold/italics/tables/etc.<br/>I also encourage you to look at the [code that created this post](https://raw.githubusercontent.com/daattali/beautiful-jekyll/master/_posts/2020-02-28-sample-markdown.md) to learn some more advanced tips about using markdown in Beautiful Jekyll.
 15 | 
 16 | **Here is some bold text**
 17 | 
 18 | ## Here is a secondary heading
 19 | 
 20 | [This is a link to a different site](https://deanattali.com/) and [this is a link to a section inside this page](#local-urls).
 21 | 
 22 | Here's a table:
 23 | 
 24 | | Number | Next number | Previous number |
 25 | | :------ |:--- | :--- |
 26 | | Five | Six | Four |
 27 | | Ten | Eleven | Nine |
 28 | | Seven | Eight | Six |
 29 | | Two | Three | One |
 30 | 
 31 | You can use [MathJax](https://www.mathjax.org/) to write LaTeX expressions. For example:
 32 | When \\(a \ne 0\\), there are two solutions to \\(ax^2 + bx + c = 0\\) and they are $$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$$
 33 | 
 34 | How about a yummy crepe?
 35 | 
 36 | ![Crepe](https://beautifuljekyll.com/assets/img/crepe.jpg)
 37 | 
 38 | It can also be centered!
 39 | 
 40 | ![Crepe](https://beautifuljekyll.com/assets/img/crepe.jpg){: .mx-auto.d-block :}
 41 | 
 42 | Here's a code chunk:
 43 | 
 44 | ~~~
 45 | var foo = function(x) {
 46 |   return(x + 5);
 47 | }
 48 | foo(3)
 49 | ~~~
 50 | 
 51 | And here is the same code with syntax highlighting:
 52 | 
 53 | ```javascript
 54 | var foo = function(x) {
 55 |   return(x + 5);
 56 | }
 57 | foo(3)
 58 | ```
 59 | 
 60 | And here is the same code yet again but with line numbers:
 61 | 
 62 | {% highlight javascript linenos %}
 63 | var foo = function(x) {
 64 |   return(x + 5);
 65 | }
 66 | foo(3)
 67 | {% endhighlight %}
 68 | 
 69 | ## Boxes
 70 | You can add notification, warning and error boxes like this:
 71 | 
 72 | ### Notification
 73 | 
 74 | {: .box-note}
 75 | **Note:** This is a notification box.
 76 | 
 77 | ### Warning
 78 | 
 79 | {: .box-warning}
 80 | **Warning:** This is a warning box.
 81 | 
 82 | ### Error
 83 | 
 84 | {: .box-error}
 85 | **Error:** This is an error box.
 86 | 
 87 | ## Local URLs in project sites {#local-urls}
 88 | 
 89 | When hosting a *project site* on GitHub Pages (for example, `https://USERNAME.github.io/MyProject`), URLs that begin with `/` and refer to local files may not work correctly due to how the root URL (`/`) is interpreted by GitHub Pages. You can read more about it [in the FAQ](https://beautifuljekyll.com/faq/#links-in-project-page). To demonstrate the issue, the following local image will be broken **if your site is a project site:**
 90 | 
 91 | ![Crepe](/assets/img/crepe.jpg)
 92 | 
 93 | If the above image is broken, then you'll need to follow the instructions [in the FAQ](https://beautifuljekyll.com/faq/#links-in-project-page). Here is proof that it can be fixed:
 94 | 
 95 | ![Crepe]({{ '/assets/img/crepe.jpg' | relative_url }})
 96 | 
 97 | <details markdown="1">
 98 | <summary>Click here!</summary>
 99 | Here you can see an **expandable** section
100 | </details>
101 | 


--------------------------------------------------------------------------------
/aboutme.md:
--------------------------------------------------------------------------------
 1 | ---
 2 | layout: page
 3 | title: About me
 4 | subtitle: Why you'd want to go on a date with me
 5 | ---
 6 | 
 7 | My name is Inigo Montoya. I have the following qualities:
 8 | 
 9 | - I rock a great mustache
10 | - I'm extremely loyal to my family
11 | 
12 | What else do you need?
13 | 
14 | ### My story
15 | 
16 | To be honest, I'm having some trouble remembering right now, so why don't you just watch [my movie](https://en.wikipedia.org/wiki/The_Princess_Bride_%28film%29) and it will answer **all** your questions.
17 | 


--------------------------------------------------------------------------------
/assets/css/beautifuljekyll-minimal.css:
--------------------------------------------------------------------------------
 1 | .main-content {
 2 |   padding-bottom: 3.125rem;
 3 | }
 4 | 
 5 | footer.footer-min {
 6 |   position: fixed;
 7 |   bottom: 0;
 8 |   width: 100%;
 9 |   padding: 0.1875rem;
10 |   background-color: #f5f5f5;
11 |   border-top: 1px solid #eeeeee;
12 |   text-align: center;
13 | }
14 | 


--------------------------------------------------------------------------------
/assets/css/beautifuljekyll.css:
--------------------------------------------------------------------------------
   1 | ---
   2 | layout: null
   3 | ---
   4 | 
   5 | @import url("pygment_highlights.css");
   6 | 
   7 | :root {
   8 |   /* config file CSS variables */
   9 |   --page-col: {{ site.page-col | default: "#FFFFFF" }};
  10 |   --text-col: {{ site.text-col | default: "#404040" }};
  11 |   --link-col: {{ site.link-col | default: "#008AFF" }};
  12 |   --hover-col: {{ site.hover-col | default: "#0085A1" }};
  13 |   --navbar-col: {{ site.navbar-col | default: "#EAEAEA" }};
  14 |   --navbar-text-col: {{ site.navbar-text-col | default: "#404040" }};
  15 |   --navbar-border-col: {{ site.navbar-border-col | default: "#DDDDDD" }};
  16 |   --footer-col: {{ site.footer-col | default: "#EAEAEA" }};
  17 |   --footer-text-col: {{ site.footer-text-col | default: "#777777" }};
  18 |   --footer-link-col: {{ site.footer-link-col | default: "#404040" }};
  19 |   --footer-hover-col: {{ site.footer-hover-col | default: "#0085A1" }};
  20 | 
  21 |   /* common CSS variables */
  22 |   --body-font: 'Lora', 'Times New Roman', serif;
  23 |   --header-font: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  24 |   --mid-col: #808080;
  25 | }
  26 | 
  27 | /* --- General --- */
  28 | 
  29 | html {
  30 |   font-size: 100%
  31 | }
  32 | 
  33 | body {
  34 |   font-family: var(--body-font);
  35 |   font-size: 1.125rem;
  36 |   color: var(--text-col);
  37 |   position: relative;
  38 |   background-color: var(--page-col);
  39 |   {% if site.page-img %}
  40 |   background-image: url({{ site.page-img | relative_url }});
  41 |   background-attachment: fixed;
  42 |   {% endif %}
  43 |   overflow-wrap: break-word;
  44 |   min-height: 100vh;
  45 |   display: flex;
  46 |   flex-direction: column;
  47 | }
  48 | body > main {
  49 |   flex: 1;
  50 | }
  51 | p {
  52 |   line-height: 1.5;
  53 |   margin: 1.875rem 0;
  54 | }
  55 | h1,h2,h3,h4,h5,h6 {
  56 |   font-family: var(--header-font);
  57 |   font-weight: 800;
  58 |   line-height: 1.1;
  59 | }
  60 | h1 {
  61 |   font-size: 2.25rem;
  62 | }
  63 | h2 {
  64 |   font-size: 1.875rem;
  65 | }
  66 | h3 {
  67 |   font-size: 1.5rem;
  68 | }
  69 | h4 {
  70 |   font-size: 1.125rem;
  71 | }
  72 | h1, h2, h3, h4 {
  73 |   margin-top: 1.25rem;
  74 | }
  75 | a {
  76 |   color: var(--link-col);
  77 | }
  78 | a:hover,
  79 | a:focus {
  80 |   color: var(--hover-col);
  81 | }
  82 | blockquote {
  83 |   color: var(--mid-col);
  84 |   font-style: italic;
  85 | }
  86 | blockquote p:first-child {
  87 |   margin-top: 0;
  88 | }
  89 | .jumbotron {
  90 |   background: #EEE;
  91 | }
  92 | hr.small {
  93 |   max-width: 6.25rem;
  94 |   margin: 1rem auto;
  95 |   border-width: 0.25rem;
  96 |   border-color: inherit;
  97 |   border-radius: 0.1875rem;
  98 | }
  99 | 
 100 | /* fix in-page anchors to not be behind fixed header */
 101 | :target:before {
 102 |   content: "";
 103 |   display: block;
 104 |   height: 3.125rem; /* navbar height */
 105 |   margin: -3.125rem 0 0;
 106 | }
 107 | 
 108 | .hideme {
 109 |   display: none;
 110 | }
 111 | 
 112 | ::-moz-selection {
 113 |   color: var(--page-col);
 114 |   background-color: var(--hover-col);
 115 |   text-shadow: none;
 116 | }
 117 | ::selection {
 118 |   color: var(--page-col);
 119 |   background-color: var(--hover-col);
 120 |   text-shadow: none;
 121 | }
 122 | img::selection {
 123 |   color: var(--hover-col);
 124 |   background: transparent;
 125 | }
 126 | img::-moz-selection {
 127 |   color: var(--hover-col);
 128 |   background: transparent;
 129 | }
 130 | 
 131 | img {
 132 |   max-width: 100%;
 133 | }
 134 | 
 135 | .linked-section {
 136 |   padding-top: 3.75rem;
 137 |   margin-top: -1.5625rem;
 138 | }
 139 | 
 140 | /* Comments */
 141 | 
 142 | .disqus-comments {
 143 |   margin-top: 1.875rem;
 144 | }
 145 | 
 146 | @media (min-width: 768px) {
 147 |   .disqus-comments {
 148 |     margin-top: 2.5rem;
 149 |   }
 150 | }
 151 | 
 152 | /* --- Navbar --- */
 153 | 
 154 | .navbar-custom {
 155 |   background-color: var(--navbar-col);
 156 |   border-bottom: 1px solid var(--navbar-border-col);
 157 |   font-family: var(--header-font);
 158 |   {% if site.navbar-img %}
 159 |     background-image: url({{ site.navbar-img | relative_url }});
 160 |     background-attachment: fixed;
 161 |   {% endif %}
 162 |   -webkit-transition: padding .5s ease-in-out;
 163 |   -moz-transition: padding .5s ease-in-out;
 164 |   transition: padding .5s ease-in-out;
 165 | }
 166 | 
 167 | .navbar-custom,
 168 | .navbar-custom.top-nav-short,
 169 | .navbar-custom.top-nav-short-permanent {
 170 |   padding-top: 0;
 171 |   padding-bottom: 0;
 172 | }
 173 | 
 174 | .navbar-custom .navbar-brand {
 175 |   line-height: 1.5;
 176 |   padding-top: 0.625rem;
 177 |   padding-bottom: 0.625rem;
 178 |   font-size: 1.125rem;
 179 | }
 180 | 
 181 | .navbar-custom .navbar-brand-logo {
 182 |   -webkit-transition: padding .5s ease-in-out;
 183 |   -moz-transition: padding .5s ease-in-out;
 184 |   transition: padding .5s ease-in-out;
 185 | }
 186 | 
 187 | .navbar-custom .navbar-brand-logo,
 188 | .navbar-custom.top-nav-short .navbar-brand-logo,
 189 | .navbar-custom.top-nav-short-permanent .navbar-brand-logo {
 190 |   padding-top: 0.3125rem;
 191 |   padding-bottom: 0.3125rem;
 192 | }
 193 | 
 194 | .navbar-custom .navbar-brand-logo img {
 195 |   -webkit-transition: height .5s ease-in-out;
 196 |   -moz-transition: height .5s ease-in-out;
 197 |   transition: height .5s ease-in-out;
 198 | }
 199 | 
 200 | .navbar-custom .navbar-brand-logo img,
 201 | .navbar-custom.top-nav-short .navbar-brand-logo img,
 202 | .navbar-custom.top-nav-short-permanent .navbar-brand-logo img {
 203 |   height: 2.5rem;
 204 | }
 205 | 
 206 | .navbar-custom .navbar-nav .nav-item {
 207 |   text-transform: uppercase;
 208 |   font-size: 0.8125rem;
 209 |   letter-spacing: 0.0625rem;
 210 | }
 211 | 
 212 | .navbar-custom .navbar-nav .nav-link {
 213 |   line-height: 1.25rem;
 214 |   padding-top: 0.9375rem;
 215 |   padding-bottom: 0.9375rem;
 216 | }
 217 | 
 218 | .navbar-custom .navbar-brand,
 219 | .navbar-custom .navbar-nav .nav-link {
 220 |   font-weight: 800;
 221 |   color: var(--navbar-text-col);
 222 | }
 223 | 
 224 | .navbar-toggler {
 225 |   font-size: 1rem;
 226 |   margin: 0.5rem 0;
 227 | }
 228 | .navbar-custom .navbar-toggler:focus,
 229 | .navbar-custom .navbar-toggler:hover {
 230 |   background-color: initial;
 231 | }
 232 | 
 233 | .navbar-custom .navbar-toggler[aria-expanded="true"] {
 234 |   background-color: rgba(0, 0, 0, 0.2);
 235 | }
 236 | 
 237 | .dropdown-toggle::after {
 238 |   border-width: 0.4em;
 239 | }
 240 | 
 241 | @media (min-width: 1200px) {
 242 |   .navbar-custom {
 243 |     padding-top: 1.25rem;
 244 |     padding-bottom: 1.25rem;
 245 |   }
 246 | 
 247 |   .navbar-custom .navbar-brand-logo {
 248 |     padding-top: 0;
 249 |     padding-bottom: 0;
 250 |   }
 251 | 
 252 |   .navbar-custom .navbar-brand-logo img {
 253 |     height: 3.125rem;
 254 |   }
 255 | 
 256 |   .navbar-expand-xl .navbar-nav .nav-link {
 257 |     padding-left: 0.9375rem;
 258 |     padding-right: 0.9375rem;
 259 |   }
 260 | 
 261 |   .navbar-expand-xl .navbar-nav .nav-item:not(.dropdown):last-child .nav-link {
 262 |     padding-right: 0;
 263 |   }
 264 | }
 265 | 
 266 | @media (min-width: 1200px) {
 267 |   .navbar-custom .nav-item.dropdown:hover {
 268 |     background: rgba(0, 0, 0, 0.1);
 269 |   }
 270 | }
 271 | 
 272 | .navbar-custom .nav-item.dropdown.show {
 273 |   background: rgba(0, 0, 0, 0.2);
 274 | }
 275 | 
 276 | .navbar-custom .nav-item.dropdown .dropdown-menu {
 277 |   margin-top: 0;
 278 |   font-size: 1em;
 279 |   border: 0;
 280 |   padding: 0;
 281 |   {% if site.navbar-var-length %}
 282 |   min-width: 100%;
 283 |   {% else %}
 284 |   min-width: 0;
 285 |   width: 100%;
 286 |   word-break: break-word;
 287 |   {% endif %}
 288 | }
 289 | 
 290 | .navbar-custom .nav-item.dropdown .dropdown-menu .dropdown-item {
 291 |   padding: 0.625rem;
 292 |   background-color: var(--navbar-col);
 293 |   text-decoration: none !important;
 294 |   font-weight: normal;
 295 |   color: var(--navbar-text-col);
 296 |   {% unless site.navbar-var-length %}
 297 |   white-space: normal;
 298 |   {% endunless %}
 299 | }
 300 | 
 301 | @media (min-width: 1200px) {
 302 |   .navbar-custom .nav-item.dropdown .dropdown-menu {
 303 |     text-align: center;
 304 |   }
 305 | 
 306 |   .navbar-custom .nav-item.dropdown .dropdown-menu .dropdown-item {
 307 |     padding-left: 0.625rem;
 308 |     border: 1px solid var(--navbar-border-col);
 309 |     border-width: 0 1px 1px;
 310 |   }
 311 | 
 312 |   .navbar-custom .nav-item.dropdown .dropdown-menu .dropdown-item:first-child {
 313 |     border-top-width: 1px;
 314 |   }
 315 | }
 316 | 
 317 | @media (max-width: 1199px) {
 318 |   .navbar-custom .navbar-collapse {
 319 |     border-top: 1px solid var(--navbar-border-col);
 320 |     margin: 0 -1rem;
 321 |   }
 322 | 
 323 |   .navbar-custom .navbar-nav {
 324 |     padding: 0.5rem 0;
 325 |   }
 326 | 
 327 |   .navbar-custom .navbar-nav .nav-link {
 328 |     padding: 0.675rem 0 0.675rem 1rem;
 329 |   }
 330 | 
 331 |   .navbar-custom .nav-item.dropdown.show {
 332 |     background: rgba(0, 0, 0, 0.2);
 333 |   }
 334 | 
 335 |   .navbar-custom .nav-item.dropdown .dropdown-menu .dropdown-item {
 336 |     padding-left: 2rem;
 337 |   }
 338 | }
 339 | .navbar-custom .navbar-brand:hover,
 340 | .navbar-custom .navbar-brand:focus ,
 341 | .navbar-custom .navbar-nav .nav-link:hover,
 342 | .navbar-custom .navbar-nav .nav-link:focus,
 343 | .navbar-custom .navbar-nav .dropdown-menu .dropdown-item:hover,
 344 | .navbar-custom .navbar-nav .dropdown-menu .dropdown-item:focus {
 345 |   color: var(--hover-col);
 346 | }
 347 | 
 348 | .navbar-custom .avatar-container {
 349 |   position: absolute;
 350 |   left: 50%;
 351 |   width: 3.125rem;
 352 |   bottom: -1.5rem;
 353 |   transition: opacity 0.5s ease-in-out;
 354 |   -webkit-transition: opacity 0.5s ease-in-out;
 355 |   -moz-transition: opacity 0.5s ease-in-out;
 356 | }
 357 | .navbar-custom.top-nav-short .avatar-container {
 358 |   opacity: 0;
 359 |   visibility: hidden;
 360 |   transition: visibility linear 0.5s, opacity 0.5s ease-in-out;
 361 |   -webkit-transition: visibility linear 0.5s, opacity 0.5s ease-in-out;
 362 |   -moz-transition: visibility linear 0.5s, opacity 0.5s ease-in-out;
 363 | }
 364 | 
 365 | .navbar-custom .avatar-container .avatar-img-border {
 366 |   width: 100%;
 367 |   margin-left: -50%;
 368 |   {% unless site.round-avatar == false %}
 369 |     border-radius: 50%;
 370 |     box-shadow: 0 0 0.5rem rgba(0, 0, 0, .8);
 371 |     -webkit-box-shadow: 0 0 0.3125rem rgba(0, 0, 0, .8);
 372 |     -moz-box-shadow: 0 0 0.5rem rgba(0, 0, 0, .8);
 373 |   {% endunless %}
 374 | }
 375 | .navbar-custom .avatar-container .avatar-img {
 376 |   width: 100%;
 377 |   {% unless site.round-avatar == false %}
 378 |     border-radius: 50%;
 379 |   {% endunless %}
 380 |   display: block;
 381 | }
 382 | 
 383 | .navbar-custom.top-nav-expanded .avatar-container {
 384 |   display: none;
 385 | }
 386 | 
 387 | @media (min-width: 1200px) {
 388 |   .navbar-custom.top-nav-regular .avatar-container {
 389 |     width: 6.25rem;
 390 |     bottom: -1.9375rem;
 391 |   }
 392 | 
 393 |   .navbar-custom.top-nav-regular .avatar-container .avatar-img-border {
 394 |     width: 100%;
 395 |     {% unless site.round-avatar == false %}
 396 |     box-shadow: 1px 1px 2px rgba(0, 0, 0, .8);
 397 |     -webkit-box-shadow: 1px 1px 2px rgba(0, 0, 0, .8);
 398 |     -moz-box-shadow: 1px 1px 2px rgba(0, 0, 0, .8);
 399 |     {% endunless %}
 400 |   }
 401 | 
 402 |   .navbar-custom.top-nav-regular .avatar-container .avatar-img {
 403 |     width: 100%;
 404 |   }
 405 | }
 406 | 
 407 | /* --- Footer --- */
 408 | 
 409 | footer {
 410 |   padding: 1.875rem 0;
 411 |   border-top: 1px var(--footer-col) solid;
 412 |   margin-top: 3.125rem;
 413 |   font-size: 0.875rem;
 414 |   background-color: var(--footer-col);
 415 |   {% if site.footer-img %}
 416 |     background-image: url({{ site.footer-img | relative_url }});
 417 |     background-attachment: fixed;
 418 |   {% endif %}
 419 | }
 420 | 
 421 | footer p.text-muted {
 422 |   color: var(--footer-text-col) !important;
 423 | }
 424 | 
 425 | footer a {
 426 |   color: var(--footer-link-col);
 427 | }
 428 | footer .footer-links a {
 429 |   color: var(--text-col);
 430 | }
 431 | footer .footer-links .fa-inverse {
 432 |   color: var(--page-col);
 433 | }
 434 | 
 435 | footer a:hover,
 436 | footer a:focus {
 437 |   color: var(--footer-hover-col);
 438 | }
 439 | 
 440 | footer .list-inline {
 441 |   margin: 0;
 442 |   padding: 0;
 443 |   margin-bottom: 1.375rem;
 444 | }
 445 | footer .list-inline .list-inline-item {
 446 |   margin-bottom: 0.5rem;
 447 | }
 448 | footer .copyright {
 449 |   font-family: var(--header-font);
 450 |   text-align: center;
 451 |   margin-bottom: 0;
 452 |   margin-top: 0;
 453 | }
 454 | footer .theme-by {
 455 |   text-align: center;
 456 |   margin: 0.625rem 0 0;
 457 | }
 458 | footer .footer-custom-content {
 459 |   text-align: center;
 460 |   margin-bottom: 0.9375rem;
 461 |   font-family: var(--header-font);
 462 | }
 463 | 
 464 | @media (min-width: 768px) {
 465 |   footer {
 466 |     padding: 3.125rem 0;
 467 |   }
 468 |   footer .footer-links {
 469 |     font-size: 1.125rem;
 470 |   }
 471 |   footer .copyright {
 472 |     font-size: 1rem;
 473 |   }
 474 |   footer .footer-custom-content {
 475 |     font-size: 1rem;
 476 |   }
 477 | }
 478 | 
 479 | /* --- Post preview (feed) --- */
 480 | 
 481 | .posts-list {
 482 |     margin: 0;
 483 | }
 484 | 
 485 | .post-preview {
 486 |   padding: 1.25rem 0;
 487 |   border-bottom: 1px solid #eee;
 488 |   overflow: hidden;
 489 | }
 490 | 
 491 | @media (min-width: 768px) {
 492 |   .post-preview {
 493 |     padding: 2.1875rem 0;
 494 |   }
 495 | }
 496 | 
 497 | .post-preview:last-child {
 498 |   border-bottom: 0;
 499 | }
 500 | 
 501 | .post-preview a {
 502 |   text-decoration: none;
 503 |   font-family: var(--header-font);
 504 |   color: var(--text-col);
 505 | }
 506 | 
 507 | .post-preview a:focus,
 508 | .post-preview a:hover {
 509 |   text-decoration: none;
 510 |   color: var(--hover-col);
 511 | }
 512 | 
 513 | .post-preview .post-title {
 514 |   font-size: 1.875rem;
 515 |   margin-top: 0;
 516 | }
 517 | .post-preview .post-subtitle {
 518 |   margin: 0;
 519 |   font-weight: 300;
 520 |   margin-bottom: 0.625rem;
 521 | }
 522 | .post-preview .post-meta,
 523 | .post-heading .post-meta {
 524 |   color: var(--mid-col);
 525 |   font-size: 1.125rem;
 526 |   font-style: italic;
 527 |   margin: 0 0 0.625rem;
 528 |   font-family: var(--body-font);
 529 | }
 530 | .post-heading .post-meta {
 531 |   display: inline-block;
 532 | }
 533 | @media (max-width: 767px) {
 534 |   .post-heading .post-meta {
 535 |     display: block;
 536 |     margin-bottom: 0;
 537 |   }
 538 | }
 539 | .post-heading .post-meta .middot {
 540 |   margin: 0 0.625rem;
 541 | }
 542 | .post-preview .post-entry {
 543 |   width: 100%;
 544 | }
 545 | .post-preview .post-image {
 546 |   float: right;
 547 |   margin-left: 0.625rem;
 548 |   height: 12rem;
 549 |   width: 12rem;
 550 | }
 551 | .post-preview .post-image {
 552 |   filter: grayscale(40%);
 553 | }
 554 | .post-preview .post-image:hover {
 555 |   filter: grayscale(0%);
 556 | }
 557 | .post-preview .post-image img {
 558 |   max-height: 100%;
 559 |   max-width: 100%;
 560 | }
 561 | .post-preview .post-image-short {
 562 |   margin-top: -2.1875rem;
 563 | }
 564 | @media (max-width: 767px) {
 565 |   .post-preview .post-image {
 566 |     height: 9rem;
 567 |     width: 9rem;
 568 |   }
 569 |   .post-preview .post-image-short {
 570 |     margin-top: 0;
 571 |   }
 572 | }
 573 | .post-preview .post-image-small {
 574 |   width: 100%;
 575 |   height: 100%;
 576 |   text-align: center;
 577 |   display: none;
 578 | }
 579 | .post-preview .post-image-small img {
 580 |   max-width: 6.25rem;
 581 |   max-height: 6.25rem;
 582 | }
 583 | @media (max-width: 500px) {
 584 |   .post-preview .post-image {
 585 |     display: none;
 586 |   }
 587 |   .post-preview .post-image-small {
 588 |     display: block;
 589 |   }
 590 | }
 591 | 
 592 | .post-preview .post-read-more {
 593 |   font-weight: 800;
 594 | }
 595 | 
 596 | @media (min-width: 768px) {
 597 |   .post-preview .post-title {
 598 |     font-size: 2.25rem;
 599 |   }
 600 | }
 601 | 
 602 | /* --- Tags --- */
 603 | 
 604 | .blog-tags {
 605 |   font-family: var(--header-font);
 606 |   font-size: 0.9375rem;
 607 |   margin: 1.875rem 0;
 608 | }
 609 | 
 610 | .blog-tags span {
 611 |   color: var(--text-col);
 612 |   opacity: 0.8;
 613 | }
 614 | 
 615 | .blog-tags .list-inline-item {
 616 |   margin-right: 0;
 617 | }
 618 | 
 619 | .blog-tags a {
 620 |   color: var(--text-col);
 621 |   text-decoration: none;
 622 |   padding: 0 0.3125rem;
 623 |   opacity: 0.8;
 624 |   border: 1px solid transparent;
 625 |   border-radius: 0.1875rem;
 626 | }
 627 | 
 628 | .blog-tags a:hover {
 629 |   opacity: 1;
 630 |   color: var(--text-col);
 631 |   border-color: var(--text-col);
 632 | }
 633 | 
 634 | .post-preview .blog-tags {
 635 |   margin-top: 0.3125rem;
 636 |   margin-bottom: 0;
 637 | }
 638 | 
 639 | @media (min-width: 768px) {
 640 |   .post-preview .blog-tags {
 641 |     margin-top: 0.625rem;
 642 |   }
 643 | }
 644 | 
 645 | /* Tags page */
 646 | 
 647 | .tag-btn {
 648 |   margin: 0.3125rem;
 649 | }
 650 | 
 651 | #full-tags-list {
 652 |   font-family: var(--header-font);
 653 | }
 654 | 
 655 | #full-tags-list .tag-entry {
 656 |   margin: 0 0 0.9375rem 1.5625rem;
 657 | }
 658 | 
 659 | #full-tags-list .tag-entry a {
 660 |   font-size: 1.25rem;
 661 | }
 662 | 
 663 | #full-tags-list .tag-entry .entry-date {
 664 |   color: var(--mid-col);
 665 |   font-style: italic;
 666 |   font-size: 1rem;
 667 | }
 668 | 
 669 | /* --- Post and page headers --- */
 670 | 
 671 | .intro-header {
 672 |   margin: 5rem 0 1.25rem;
 673 |   position: relative;
 674 | }
 675 | .intro-header.big-img {
 676 |   background: no-repeat center center;
 677 |   -webkit-background-size: cover;
 678 |   -moz-background-size: cover;
 679 |   background-size: cover;
 680 |   -o-background-size: cover;
 681 |   margin-top: 3.1875rem; /* The small navbar is 50px tall + 1px border */
 682 |   margin-bottom: 2.1875rem;
 683 | }
 684 | nav.top-nav-short-permanent ~ header > .intro-header {
 685 |   margin-top: 5rem;
 686 | }
 687 | nav.top-nav-short-permanent ~ header > .intro-header.big-img {
 688 |   margin-top: 3.1875rem;
 689 | }
 690 | .intro-header.big-img .big-img-transition {
 691 |   position: absolute;
 692 |   width: 100%;
 693 |   height: 100%;
 694 |   opacity: 0;
 695 |   background: no-repeat center center;
 696 |   -webkit-background-size: cover;
 697 |   -moz-background-size: cover;
 698 |   background-size: cover;
 699 |   -o-background-size: cover;
 700 |   -webkit-transition: opacity 1s linear;
 701 |   -moz-transition: opacity 1s linear;
 702 |   transition: opacity 1s linear;
 703 | }
 704 | .intro-header .page-heading {
 705 |   text-align: center;
 706 | }
 707 | .intro-header.big-img .page-heading,
 708 | .intro-header.big-img .post-heading {
 709 |   padding: 6.25rem 0;
 710 |   color: #FFF;
 711 |   text-shadow: 1px 1px 3px #000;
 712 | }
 713 | .intro-header .page-heading h1 {
 714 |   margin-top: 0;
 715 |   font-size: 3.125rem;
 716 | }
 717 | .intro-header .post-heading h1 {
 718 |   margin-top: 0;
 719 |   font-size: 2.1875rem;
 720 | }
 721 | .intro-header .page-heading .page-subheading,
 722 | .intro-header .post-heading .post-subheading {
 723 |   font-size: 1.6875rem;
 724 |   line-height: 1.1;
 725 |   display: block;
 726 |   font-family: var(--header-font);
 727 |   font-weight: 300;
 728 |   margin: 0.625rem 0 0;
 729 | }
 730 | .intro-header .post-heading .post-subheading {
 731 |   margin-bottom: 1.25rem;
 732 | }
 733 | .intro-header.big-img .page-heading .page-subheading,
 734 | .intro-header.big-img .post-heading .post-subheading {
 735 |   font-weight: 400;
 736 | }
 737 | .intro-header.big-img .page-heading hr {
 738 |   box-shadow: 1px 1px 3px #000;
 739 |   -webkit-box-shadow: 1px 1px 3px #000;
 740 |   -moz-box-shadow: 1px 1px 3px #000;
 741 | }
 742 | .intro-header.big-img .post-heading .post-meta {
 743 |   color: #EEE;
 744 | }
 745 | .intro-header.big-img .img-desc {
 746 |   background: rgba(30, 30, 30, 0.6);
 747 |   position: absolute;
 748 |   padding: 0.3125rem 0.625rem;
 749 |   font-size: 0.6875rem;
 750 |   color: #EEE;
 751 |   font-family: var(--header-font);
 752 |   right: 0;
 753 |   bottom: 0;
 754 |   display: none;
 755 | }
 756 | @media (min-width: 1200px) {
 757 |   .intro-header {
 758 |     margin-top: 8.125rem;
 759 |   }
 760 |   .intro-header.big-img {
 761 |     margin-top: 5.6875rem; /* Full navbar is small navbar + 20px padding on each side when expanded */
 762 |   }
 763 |   .intro-header.big-img .page-heading,
 764 |   .intro-header.big-img .post-heading {
 765 |     padding: 9.375rem 0;
 766 |   }
 767 |   .intro-header .page-heading h1 {
 768 |     font-size: 5rem;
 769 |   }
 770 |   .intro-header .post-heading h1 {
 771 |     font-size: 3.125rem;
 772 |   }
 773 |   .intro-header.big-img .img-desc {
 774 |     font-size: 0.875rem;
 775 |   }
 776 | }
 777 | 
 778 | #header-gh-btns {
 779 |   margin-bottom: 0.9375rem;
 780 | }
 781 | @media (max-width: 500px) {
 782 |   #header-gh-btns > iframe {
 783 |     display: block;
 784 |     margin-bottom: 0.3125rem;
 785 |   }
 786 | }
 787 | 
 788 | /* --- Pagination --- */
 789 | 
 790 | .pagination {
 791 |   margin: 0.625rem 0 0;
 792 |   justify-content: space-between;
 793 | }
 794 | 
 795 | .pagination.blog-pager {
 796 |   margin-top: 0;
 797 | }
 798 | 
 799 | .pagination .page-item.next {
 800 |   margin-left: auto;
 801 | }
 802 | 
 803 | @media (min-width: 768px) {
 804 |   .pagination.blog-pager {
 805 |     margin-top: 0.625rem;
 806 |   }
 807 | }
 808 | 
 809 | .pagination .page-item .page-link {
 810 |   font-family: var(--header-font);
 811 |   text-transform: uppercase;
 812 |   font-size: 0.875rem;
 813 |   font-weight: 800;
 814 |   letter-spacing: 1px;
 815 |   padding: 0.625rem 0.3125rem;
 816 |   background-color: var(--page-col);
 817 |   border-radius: 0;
 818 |   color: var(--text-col);
 819 |   padding: 0.75rem 1rem;
 820 | }
 821 | @media (min-width: 768px) {
 822 |   .pagination .page-item .page-link {
 823 |     padding: 0.9375rem 1.5625rem;
 824 |   }
 825 | }
 826 | .pagination .page-item .page-link:hover,
 827 | .pagination .page-item .page-link:focus {
 828 |   color: var(--page-col);
 829 |   border: 1px solid var(--hover-col);
 830 |   background-color: var(--hover-col);
 831 | }
 832 | 
 833 | /* --- Tables --- */
 834 | 
 835 | table {
 836 |   padding: 0;
 837 |   overflow-x: auto;
 838 |   display: block;
 839 | }
 840 | table tr {
 841 |   border-top: 1px solid #cccccc;
 842 |   background-color: var(--page-col);
 843 |   margin: 0;
 844 |   padding: 0;
 845 | }
 846 | table tr:nth-child(2n) {
 847 |   background-color: #f8f8f8;
 848 | }
 849 | table tr th,
 850 | table tr td {
 851 |   border: 1px solid #cccccc;
 852 |   text-align: left;
 853 |   margin: 0;
 854 |   padding: 0.375rem 0.8125rem;
 855 | }
 856 | table tr th {
 857 |   font-weight: bold;
 858 | }
 859 | table tr th :first-child,
 860 | table tr td :first-child {
 861 |   margin-top: 0;
 862 | }
 863 | table tr th :last-child,
 864 | table tr td :last-child {
 865 |   margin-bottom: 0;
 866 | }
 867 | 
 868 | /* --- Code blocks --- */
 869 | 
 870 | code {
 871 |   padding: 0.125rem 0.25rem;
 872 |   color: #c7254e;
 873 |   background-color: #f9f2f4;
 874 |   border-radius: 0.25rem;
 875 | }
 876 | 
 877 | pre code {
 878 |   padding: 0;
 879 |   background-color: transparent;
 880 |   border-radius: 0;
 881 | }
 882 | 
 883 | pre {
 884 |   font-size: 0.875rem;
 885 |   line-height: 1.5em;
 886 |   border-radius: 0.25rem;
 887 |   padding: 0.59375rem;
 888 | }
 889 | .highlight pre {
 890 |   border: none;
 891 |   background: none;
 892 |   margin: 0;
 893 | }
 894 | .highlight > pre {
 895 |   background-image: linear-gradient(
 896 |     rgba(0,0,0,0.03), rgba(0,0,0,0.03) 1.5em, rgba(0,0,0,0.02) 1.5em, rgba(0,0,0,0.02) 3em);
 897 |   background-size: auto 3em;
 898 |   background-position-y: 0.625rem;
 899 |   border: 1px solid rgba(0,0,0,0.1);
 900 |   border-left: 0.4375rem solid #444;
 901 | }
 902 | .highlight > pre:not([class~="highlight"]) { /* code block with line number */
 903 |   padding: 0;
 904 | }
 905 | .highlight table,
 906 | .highlight tr,
 907 | .highlight td { /* to be removed after fixing table styles */
 908 |   border: none;
 909 |   background: none;
 910 |   padding: 0;
 911 |   margin: 0;
 912 | }
 913 | .highlight pre.lineno {
 914 |   color: rgba(0,0,0,0.3);
 915 |   border-radius: 0;
 916 |   border-right: 2px solid #444;
 917 | }
 918 | 
 919 | /* Make line numbers unselectable: excludes line numbers from copy-paste user ops */
 920 | .lineno {
 921 |   -webkit-user-select: none;
 922 |      -moz-user-select: none;
 923 |       -ms-user-select: none;
 924 |           user-select: none;
 925 | }
 926 | .lineno::selection, .lineno::-moz-selection {
 927 |   background: none;
 928 | }
 929 | 
 930 | /* Fix table border github gist snippets */
 931 | 
 932 | .gist, .gist-file table tr {
 933 |   border: unset;
 934 | }
 935 | 
 936 | .gist, .gist-file table tr td {
 937 |   border: unset;
 938 | }
 939 | 
 940 | /* --- Social media sharing section --- */
 941 | 
 942 | #social-share-section {
 943 |   margin-bottom: 1.875rem;
 944 |   margin-top: 1.875rem;
 945 | }
 946 | 
 947 | /* --- Notification boxes --- */
 948 | .box-note,
 949 | .box-warning,
 950 | .box-error,
 951 | .box-success {
 952 |   padding: 0.9375rem 0.9375rem 0.9375rem 0.625rem;
 953 |   margin: 1.25rem 1.25rem 1.25rem 0.3125rem;
 954 |   border: 1px solid #eee;
 955 |   border-left-width: 0.3125rem;
 956 |   border-radius: 0.3125rem 0.1875rem 0.1875rem 0.3125rem;
 957 | }
 958 | 
 959 | .box-note {
 960 |   background-color: #eee;
 961 |   border-left-color: #2980b9;
 962 | }
 963 | 
 964 | .box-warning {
 965 |   background-color: #fdf5d4;
 966 |   border-left-color: #f1c40f;
 967 | }
 968 | 
 969 | .box-error {
 970 |   background-color: #f4dddb;
 971 |   border-left-color: #c0392b;
 972 | }
 973 | 
 974 | .box-success {
 975 |   background-color: #98FB98;
 976 |   border-left-color: #3CB371;
 977 | }
 978 | 
 979 | /* --- Misc blog post styles --- */
 980 | 
 981 | .blog-post :first-child {
 982 |   margin-top: 0;
 983 | }
 984 | 
 985 | .blog-post img {
 986 |   max-width: 100%;
 987 | }
 988 | 
 989 | .blog-post .caption {
 990 |   text-align: center;
 991 |   font-size: 0.875rem;
 992 |   padding: 0.625rem;
 993 |   font-style: italic;
 994 |   color: #777;
 995 |   margin: 0;
 996 |   display: block;
 997 |   border-bottom-right-radius: 0.3125rem;
 998 |   border-bottom-left-radius: 0.3125rem;
 999 | }
1000 | 
1001 | .blog-post hr {
1002 |   max-width: 25%;
1003 |   border-width: 0.25rem;
1004 |   border-radius: 0.1875rem;
1005 |   border-color: var(--mid-col);
1006 | }
1007 | 
1008 | .blog-post blockquote {
1009 |   padding: 0.625rem 1.25rem;
1010 |   margin: 0 0 1.25rem;
1011 |   font-size: 1.1rem;
1012 |   border-left: 0.3125rem solid #eee;
1013 | }
1014 | 
1015 | .blog-post blockquote p:last-child {
1016 |   margin-bottom: 0;
1017 | }
1018 | 
1019 | .center {
1020 |   display: block;
1021 |   margin: 0 auto;
1022 | }
1023 | 
1024 | /* Search bar */
1025 | #beautifuljekyll-search-overlay {
1026 |   font-family: var(--header-font);
1027 |   display: none;
1028 |   z-index: 999999;
1029 |   position: fixed;
1030 |   background: rgba(0,0,0,0.9);
1031 |   left: 0;
1032 |   right: 0;
1033 |   top: 0;
1034 |   bottom: 0;
1035 |   text-align: center;
1036 |   padding: 1rem;
1037 | }
1038 | 
1039 | #nav-search-exit {
1040 |   position: absolute;
1041 |   top: 1.5rem;
1042 |   cursor: pointer;
1043 |   right: 25%;
1044 |   margin-right: 2rem;
1045 |   color: #555;
1046 |   font-size: 2rem;
1047 |   line-height: 2rem;
1048 |   font-weight: bold;
1049 | }
1050 | #nav-search-exit:hover {
1051 |   color: #000;
1052 | }
1053 | #nav-search-input {
1054 |   text-align: center;
1055 |   background: #e7edee;
1056 |   margin: auto;
1057 |   display: block;
1058 |   font-size: 2rem;
1059 |   width: 50%;
1060 |   transition: width 300ms ease;
1061 |   color: #222;
1062 |   border-radius: 5rem;
1063 |   outline: none;
1064 |   border: none;
1065 |   padding: 0 3rem;
1066 | }
1067 | 
1068 | @media (max-width: 1199px) {
1069 |   #nav-search-input {
1070 |     width: 75%;
1071 |   }
1072 |   #nav-search-exit {
1073 |     right: 12.5%;
1074 |   }
1075 | }
1076 | @media (max-width: 767px) {
1077 |   #nav-search-input {
1078 |     width: 100%;
1079 |   }
1080 |   #nav-search-exit {
1081 |     right: 0;
1082 |   }
1083 | }
1084 | #nav-search-input:focus {
1085 |   background: #f3f8fe;
1086 |   box-shadow: 0px 0.15rem 1rem #e7f4ff;
1087 |   outline: none;
1088 | }
1089 | 
1090 | #nav-search-input::placeholder {
1091 |   color: #777;
1092 | }
1093 | 
1094 | #search-results-container {
1095 |   list-style: none;
1096 |   padding-left: unset;
1097 |   margin-top: 1.5rem;
1098 |   color: #fff;
1099 |   font-size: 1.5rem;
1100 |   max-height: calc(100vh - 6.5rem);
1101 |   overflow-y: auto;
1102 | }
1103 | #search-results-container a {
1104 |   color: #fff;
1105 |   text-decoration: none;
1106 | }
1107 | #search-results-container a:hover {
1108 |   color: #fff;
1109 |   text-decoration: underline;
1110 | }
1111 | 
1112 | #nav-search-icon {
1113 |   display: inline-block;
1114 | }
1115 | #nav-search-text {
1116 |   display: none;
1117 | }
1118 | 
1119 | @media (max-width: 1199px) {
1120 |   #nav-search-icon {
1121 |     display: none;
1122 |   }
1123 |   #nav-search-text {
1124 |     display: inline-block;
1125 |   }
1126 | }
1127 | 


--------------------------------------------------------------------------------
/assets/css/pygment_highlights.css:
--------------------------------------------------------------------------------
 1 | /* .highlight  { background: #ffffff; } Dean commented out */
 2 | /* .highlight pre { background-color: #fff; font-size: 16px } */
 3 | .highlight .c { color: #999988; font-style: italic } /* Comment */
 4 | .highlight .err { color: #a61717; background-color: #e3d2d2 } /* Error */
 5 | .highlight .k { font-weight: bold } /* Keyword */
 6 | .highlight .o { font-weight: bold } /* Operator */
 7 | .highlight .cm { color: #999988; font-style: italic } /* Comment.Multiline */
 8 | .highlight .cp { color: #999999; font-weight: bold } /* Comment.Preproc */
 9 | .highlight .c1 { color: #999988; font-style: italic } /* Comment.Single */
10 | .highlight .cs { color: #999999; font-weight: bold; font-style: italic } /* Comment.Special */
11 | .highlight .gd { color: #000000; background-color: #ffdddd } /* Generic.Deleted */
12 | .highlight .gd .x { color: #000000; background-color: #ffaaaa } /* Generic.Deleted.Specific */
13 | .highlight .ge { font-style: italic } /* Generic.Emph */
14 | .highlight .gr { color: #aa0000 } /* Generic.Error */
15 | .highlight .gh { color: #999999 } /* Generic.Heading */
16 | .highlight .gi { color: #000000; background-color: #ddffdd } /* Generic.Inserted */
17 | .highlight .gi .x { color: #000000; background-color: #aaffaa } /* Generic.Inserted.Specific */
18 | .highlight .go { color: #888888 } /* Generic.Output */
19 | .highlight .gp { color: #555555 } /* Generic.Prompt */
20 | .highlight .gs { font-weight: bold } /* Generic.Strong */
21 | .highlight .gu { color: #aaaaaa } /* Generic.Subheading */
22 | .highlight .gt { color: #aa0000 } /* Generic.Traceback */
23 | .highlight .kc { font-weight: bold } /* Keyword.Constant */
24 | .highlight .kd { font-weight: bold } /* Keyword.Declaration */
25 | .highlight .kp { font-weight: bold } /* Keyword.Pseudo */
26 | .highlight .kr { font-weight: bold } /* Keyword.Reserved */
27 | .highlight .kt { color: #445588; font-weight: bold } /* Keyword.Type */
28 | .highlight .m { color: #009999 } /* Literal.Number */
29 | .highlight .s { color: #d14 } /* Literal.String */
30 | .highlight .na { color: #008080 } /* Name.Attribute */
31 | .highlight .nb { color: #0086B3 } /* Name.Builtin */
32 | .highlight .nc { color: #445588; font-weight: bold } /* Name.Class */
33 | .highlight .no { color: #008080 } /* Name.Constant */
34 | .highlight .ni { color: #800080 } /* Name.Entity */
35 | .highlight .ne { color: #990000; font-weight: bold } /* Name.Exception */
36 | .highlight .nf { color: #990000; font-weight: bold } /* Name.Function */
37 | .highlight .nn { color: #555555 } /* Name.Namespace */
38 | .highlight .nt { color: #000080 } /* Name.Tag */
39 | .highlight .nv { color: #008080 } /* Name.Variable */
40 | .highlight .ow { font-weight: bold } /* Operator.Word */
41 | .highlight .w { color: #bbbbbb } /* Text.Whitespace */
42 | .highlight .mf { color: #009999 } /* Literal.Number.Float */
43 | .highlight .mh { color: #009999 } /* Literal.Number.Hex */
44 | .highlight .mi { color: #009999 } /* Literal.Number.Integer */
45 | .highlight .mo { color: #009999 } /* Literal.Number.Oct */
46 | .highlight .sb { color: #d14 } /* Literal.String.Backtick */
47 | .highlight .sc { color: #d14 } /* Literal.String.Char */
48 | .highlight .sd { color: #d14 } /* Literal.String.Doc */
49 | .highlight .s2 { color: #d14 } /* Literal.String.Double */
50 | .highlight .se { color: #d14 } /* Literal.String.Escape */
51 | .highlight .sh { color: #d14 } /* Literal.String.Heredoc */
52 | .highlight .si { color: #d14 } /* Literal.String.Interpol */
53 | .highlight .sx { color: #d14 } /* Literal.String.Other */
54 | .highlight .sr { color: #009926 } /* Literal.String.Regex */
55 | .highlight .s1 { color: #d14 } /* Literal.String.Single */
56 | .highlight .ss { color: #990073 } /* Literal.String.Symbol */
57 | .highlight .bp { color: #999999 } /* Name.Builtin.Pseudo */
58 | .highlight .vc { color: #008080 } /* Name.Variable.Class */
59 | .highlight .vg { color: #008080 } /* Name.Variable.Global */
60 | .highlight .vi { color: #008080 } /* Name.Variable.Instance */
61 | .highlight .il { color: #009999 } /* Literal.Number.Integer.Long */
62 | 


--------------------------------------------------------------------------------
/assets/css/staticman.css:
--------------------------------------------------------------------------------
  1 | /* ==========================================================================
  2 |  Forms
  3 |  ========================================================================== */
  4 | .staticman-comments form {
  5 |   margin: 0 0 5px 0;
  6 |   padding: 1em;
  7 |   background-color: #f2f3f3;
  8 | }
  9 | .staticman-comments form p {
 10 |   margin-bottom: 2.5px;
 11 | }
 12 | .staticman-comments form br {
 13 |   display: none;
 14 | }
 15 | .staticman-comments label, .staticman-comments input, .staticman-comments button, .staticman-comments textarea {
 16 |   vertical-align: baseline;
 17 |   vertical-align: middle;
 18 | }
 19 | .staticman-comments input, .staticman-comments button, .staticman-comments textarea {
 20 |   box-sizing: border-box;
 21 | }
 22 | .staticman-comments label {
 23 |   display: block;
 24 |   margin-bottom: 0.25em;
 25 |   color: #494e52;
 26 |   cursor: pointer;
 27 | }
 28 | .staticman-comments label small {
 29 |   font-size: 0.75em;
 30 | }
 31 | .staticman-comments label input, .staticman-comments label textarea {
 32 |   display: block;
 33 | }
 34 | .staticman-comments input, .staticman-comments textarea {
 35 |   display: inline-block;
 36 |   width: 100%;
 37 |   padding: 0.25em;
 38 |   margin-bottom: 0.5em;
 39 |   color: #494e52;
 40 |   background-color: #fff;
 41 |   border: #f2f3f3;
 42 |   border-radius: 4px;
 43 |   box-shadow: 0 1px 1px rgba(0, 0, 0, 0.125);
 44 | }
 45 | .staticman-comments .input-mini {
 46 |   width: 60px;
 47 | }
 48 | .staticman-comments .input-small {
 49 |   width: 90px;
 50 | }
 51 | .staticman-comments input[type="button"], .staticman-comments input[type="reset"], .staticman-comments input[type="submit"] {
 52 |   width: auto;
 53 |   height: auto;
 54 |   cursor: pointer;
 55 |   overflow: visible;
 56 | }
 57 | .staticman-comments textarea {
 58 |   resize: vertical;
 59 |   height: auto;
 60 |   overflow: auto;
 61 |   vertical-align: top;
 62 | }
 63 | .staticman-comments input[type="hidden"] {
 64 |   display: none;
 65 | }
 66 | .staticman-comments .form {
 67 |   position: relative;
 68 | }
 69 | /*
 70 |  Focus & active state
 71 |  ========================================================================== */
 72 | .staticman-comments input:focus, .staticman-comments textarea:focus {
 73 |   border-color: #7a8288;
 74 |   outline: 0;
 75 |   outline: thin dotted \9;
 76 |   box-shadow: inset 0 1px 3px rgba(73, 78, 82, 0.06), 0 0 5px rgba(122, 130, 136, 0.7);
 77 | }
 78 | .staticman-comments input[type="file"]:focus, .staticman-comments input[type="radio"]:focus, .staticman-comments input[type="checkbox"]:focus:focus {
 79 |   box-shadow: none;
 80 | }
 81 | /*
 82 |  Help text
 83 |  ========================================================================== */
 84 | .staticman-comments .form-text {
 85 |   color: #898c8e;
 86 | }
 87 | .staticman-comments .form-text {
 88 |   display: block;
 89 |   margin-bottom: 1em;
 90 |   line-height: 1em;
 91 | }
 92 | /*
 93 |  .form-group
 94 |  ========================================================================== */
 95 | .staticman-comments .form-group {
 96 |   margin-bottom: 5px;
 97 |   padding: 0;
 98 |   border-width: 0;
 99 | }
100 | /*
101 |  Comments
102 |  ========================================================================== */
103 | .staticman-comments .page__comments {
104 |   float: left;
105 |   margin-left: 0;
106 |   margin-right: 0;
107 |   width: 100%;
108 |   clear: both;
109 | }
110 | .staticman-comments .page__comments-title {
111 |   margin-top: 2rem;
112 |   margin-bottom: 10px;
113 |   padding-top: 2rem;
114 |   border-top: 1px solid #f2f3f3;
115 | }
116 | .staticman-comments .page__comments-form {
117 |   -webkit-transition: all 0.2s ease-in-out;
118 |   transition: all 0.2s ease-in-out;
119 | }
120 | .staticman-comments .page__comments-form.disabled input, .staticman-comments .page__comments-form.disabled button, .staticman-comments .page__comments-form.disabled textarea, .staticman-comments .page__comments-form.disabled label {
121 |   pointer-events: none;
122 |   cursor: not-allowed;
123 |   filter: alpha(opacity=65);
124 |   box-shadow: none;
125 |   opacity: 0.65;
126 | }
127 | .staticman-comments .comment {
128 |   margin: 1em 0;
129 | }
130 | .staticman-comments .comment:not(:last-child) {
131 |   border-bottom: 1px solid #f2f3f3;
132 | }
133 | .staticman-comments .comment__avatar-wrapper {
134 |   float: left;
135 |   width: 60px;
136 |   height: 60px;
137 | }
138 | .staticman-comments .comment__avatar {
139 |   width: 40px;
140 |   height: 40px;
141 |   border-radius: 50%;
142 | }
143 | .staticman-comments .comment__content-wrapper {
144 |   width: calc(100% - 60px);
145 | }
146 | .staticman-comments .comment__author {
147 |   margin: 0;
148 | }
149 | .staticman-comments .comment__author a {
150 |   text-decoration: none;
151 | }
152 | .staticman-comments .comment__date {
153 |   margin: 0;
154 | }
155 | .staticman-comments .comment__date a {
156 |   text-decoration: none;
157 | }
158 | /* ==========================================================================
159 |  PRINT STYLES
160 |  ========================================================================== */
161 | .staticman-comments @media print {
162 |   /*
163 |    Hide the following elements on print
164 |    ========================================================================== */
165 | .staticman-comments [hidden] {
166 |     display: none;
167 |   }
168 | .staticman-comments .masthead, .staticman-comments .toc, .staticman-comments .page__share, .staticman-comments .page__related, .staticman-comments .pagination, .staticman-comments .ads, .staticman-comments .page__footer, .staticman-comments .page__comments-form, .staticman-comments .author__avatar, .staticman-comments .author__content, .staticman-comments .author__urls-wrapper, .staticman-comments .nav__list, .staticman-comments .sidebar, .staticman-comments .adsbygoogle {
169 |     display: none !important;
170 |     height: 1px !important;
171 |   }
172 | }
173 | /*
174 |  Post pagination navigation links
175 |  ========================================================================== */
176 | .staticman-comments .page__comments + .staticman-comments .pagination {
177 |   margin-top: 2em;
178 |   padding-top: 2em;
179 |   border-top: 1px solid #f2f3f3;
180 | }
181 | 


--------------------------------------------------------------------------------
/assets/data/searchcorpus.json:
--------------------------------------------------------------------------------
 1 | ---
 2 | layout: null
 3 | ---
 4 | [ 
 5 | {% for post in site.posts %} 
 6 | { 
 7 | "title"    : "{% if post.title != "" %}{{ post.title | strip_html | escape }}{% else %}{{ post.excerpt | strip_html | escape | strip }}{%endif%}", 
 8 | "desc"     : "{% if post.title != "" %}{{ post.title | strip_html | escape }}{% else %}{{ post.excerpt | strip_html | escape | strip }}{%endif%}", 
 9 | "category" : "{{ post.tags | join: ', ' }}", 
10 | "url"      : "{{ site.baseurl }}{{ post.url | escape }}", 
11 | "date"     : "{{ post.date | date: "%B %e, %Y" | default: "January 1, 1970" }}" 
12 | }, 
13 | {% endfor %} 
14 | {% for page in site.html_pages %}{% if page.title != "{title}" and page.title != "404 - Page not found" %} 
15 | { 
16 | "title"    : "{% if page.title != "" %}{{ page.title | strip_html | escape }}{% else %}{{ page.excerpt | strip_html | escape | strip }}{% endif %}", 
17 | "desc"     : "{% if page.title != "" %}{{ page.title | strip_html | escape }}{% else %}{{ page.excerpt | strip_html | escape | strip }}{% endif %}", 
18 | "category" : "{% if page.tags %}{{ page.tags | join: ', ' }}{% else %}page{% endif %}", 
19 | "url"      : "{{ site.baseurl }}{{ page.url }}", 
20 | "date"     : "{{ page.date | date: '%B %e, %Y' | default: "January 1, 1970" }}" 
21 | }{% unless forloop.last %},{% endunless %} 
22 | {% endif %}{% endfor %} 
23 | ]
24 | 


--------------------------------------------------------------------------------
https://raw.githubusercontent.com/daattali/beautiful-jekyll/476d4a4144bdc62cc57f5d69f72903d299a7c0df/assets/img/404-southpark.jpg


--------------------------------------------------------------------------------
https://raw.githubusercontent.com/daattali/beautiful-jekyll/476d4a4144bdc62cc57f5d69f72903d299a7c0df/assets/img/avatar-icon.png


--------------------------------------------------------------------------------
https://raw.githubusercontent.com/daattali/beautiful-jekyll/476d4a4144bdc62cc57f5d69f72903d299a7c0df/assets/img/bgimage.png


--------------------------------------------------------------------------------
https://raw.githubusercontent.com/daattali/beautiful-jekyll/476d4a4144bdc62cc57f5d69f72903d299a7c0df/assets/img/crepe.jpg


--------------------------------------------------------------------------------
https://raw.githubusercontent.com/daattali/beautiful-jekyll/476d4a4144bdc62cc57f5d69f72903d299a7c0df/assets/img/path.jpg


--------------------------------------------------------------------------------
https://raw.githubusercontent.com/daattali/beautiful-jekyll/476d4a4144bdc62cc57f5d69f72903d299a7c0df/assets/img/thumb.png


--------------------------------------------------------------------------------
/assets/js/beautifuljekyll.js:
--------------------------------------------------------------------------------
  1 | // Dean Attali / Beautiful Jekyll 2023
  2 | 
  3 | let BeautifulJekyllJS = {
  4 | 
  5 |   bigImgEl : null,
  6 |   numImgs : null,
  7 | 
  8 |   init : function() {
  9 |     setTimeout(BeautifulJekyllJS.initNavbar, 10);
 10 | 
 11 |     // Shorten the navbar after scrolling a little bit down
 12 |     $(window).scroll(function() {
 13 |         if ($(".navbar").offset().top > 50) {
 14 |             $(".navbar").addClass("top-nav-short");
 15 |         } else {
 16 |             $(".navbar").removeClass("top-nav-short");
 17 |         }
 18 |     });
 19 | 
 20 |     // On mobile, hide the avatar when expanding the navbar menu
 21 |     $('#main-navbar').on('show.bs.collapse', function () {
 22 |       $(".navbar").addClass("top-nav-expanded");
 23 |     });
 24 |     $('#main-navbar').on('hidden.bs.collapse', function () {
 25 |       $(".navbar").removeClass("top-nav-expanded");
 26 |     });
 27 | 
 28 |     // show the big header image
 29 |     BeautifulJekyllJS.initImgs();
 30 | 
 31 |     BeautifulJekyllJS.initSearch();
 32 |   },
 33 | 
 34 |   initNavbar : function() {
 35 |     // Set the navbar-dark/light class based on its background color
 36 |     const rgb = $('.navbar').css("background-color").replace(/[^\d,]/g,'').split(",");
 37 |     const brightness = Math.round(( // http://www.w3.org/TR/AERT#color-contrast
 38 |       parseInt(rgb[0]) * 299 +
 39 |       parseInt(rgb[1]) * 587 +
 40 |       parseInt(rgb[2]) * 114
 41 |     ) / 1000);
 42 |     if (brightness <= 125) {
 43 |       $(".navbar").removeClass("navbar-light").addClass("navbar-dark");
 44 |     } else {
 45 |       $(".navbar").removeClass("navbar-dark").addClass("navbar-light");
 46 |     }
 47 |   },
 48 | 
 49 |   initImgs : function() {
 50 |     // If the page was large images to randomly select from, choose an image
 51 |     if ($("#header-big-imgs").length > 0) {
 52 |       BeautifulJekyllJS.bigImgEl = $("#header-big-imgs");
 53 |       BeautifulJekyllJS.numImgs = BeautifulJekyllJS.bigImgEl.attr("data-num-img");
 54 | 
 55 |       // 2fc73a3a967e97599c9763d05e564189
 56 |       // set an initial image
 57 |       const imgInfo = BeautifulJekyllJS.getImgInfo();
 58 |       const src = imgInfo.src;
 59 |       const desc = imgInfo.desc;
 60 |       BeautifulJekyllJS.setImg(src, desc);
 61 | 
 62 |       // For better UX, prefetch the next image so that it will already be loaded when we want to show it
 63 |       const getNextImg = function() {
 64 |         const imgInfo = BeautifulJekyllJS.getImgInfo();
 65 |         const src = imgInfo.src;
 66 |         const desc = imgInfo.desc;
 67 | 
 68 |         const prefetchImg = new Image();
 69 |         prefetchImg.src = src;
 70 |         // if I want to do something once the image is ready: `prefetchImg.onload = function(){}`
 71 | 
 72 |         setTimeout(function(){
 73 |           const img = $("<div></div>").addClass("big-img-transition").css("background-image", 'url(' + src + ')');
 74 |           $(".intro-header.big-img").prepend(img);
 75 |           setTimeout(function(){ img.css("opacity", "1"); }, 50);
 76 | 
 77 |           // after the animation of fading in the new image is done, prefetch the next one
 78 |           //img.one("transitioned webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){
 79 |           setTimeout(function() {
 80 |             BeautifulJekyllJS.setImg(src, desc);
 81 |             img.remove();
 82 |             getNextImg();
 83 |           }, 1000);
 84 |           //});
 85 |         }, 6000);
 86 |       };
 87 | 
 88 |       // If there are multiple images, cycle through them
 89 |       if (BeautifulJekyllJS.numImgs > 1) {
 90 |         getNextImg();
 91 |       }
 92 |     }
 93 |   },
 94 | 
 95 |   getImgInfo : function() {
 96 |     const randNum = Math.floor((Math.random() * BeautifulJekyllJS.numImgs) + 1);
 97 |     const src = BeautifulJekyllJS.bigImgEl.attr("data-img-src-" + randNum);
 98 |     const desc = BeautifulJekyllJS.bigImgEl.attr("data-img-desc-" + randNum);
 99 | 
100 |     return {
101 |       src : src,
102 |       desc : desc
103 |     }
104 |   },
105 | 
106 |   setImg : function(src, desc) {
107 |     $(".intro-header.big-img").css("background-image", 'url(' + src + ')');
108 |     if (typeof desc !== typeof undefined && desc !== false) {
109 |       $(".img-desc").text(desc).show();
110 |     } else {
111 |       $(".img-desc").hide();
112 |     }
113 |   },
114 | 
115 |   initSearch : function() {
116 |     if (!document.getElementById("beautifuljekyll-search-overlay")) {
117 |       return;
118 |     }
119 | 
120 |     $("#nav-search-link").click(function(e) {
121 |       e.preventDefault();
122 |       $("#beautifuljekyll-search-overlay").show();
123 |       $("#nav-search-input").focus().select();
124 |       $("body").addClass("overflow-hidden");
125 |     });
126 |     $("#nav-search-exit").click(function(e) {
127 |       e.preventDefault();
128 |       $("#beautifuljekyll-search-overlay").hide();
129 |       $("body").removeClass("overflow-hidden");
130 |     });
131 |     $(document).on('keyup', function(e) {
132 |       if (e.key == "Escape") {
133 |         $("#beautifuljekyll-search-overlay").hide();
134 |         $("body").removeClass("overflow-hidden");
135 |       }
136 |     });
137 |   }
138 | };
139 | 
140 | // 2fc73a3a967e97599c9763d05e564189
141 | 
142 | document.addEventListener('DOMContentLoaded', BeautifulJekyllJS.init);
143 | 


--------------------------------------------------------------------------------
/assets/js/staticman.js:
--------------------------------------------------------------------------------
 1 | ---
 2 | layout: null
 3 | ---
 4 | 
 5 | (function ($) {
 6 |   $('#new_comment').submit(function () {
 7 |     const form = this;
 8 | 
 9 |     $(form).addClass('disabled');
10 | 
11 |     {% assign sm = site.staticman -%}
12 |     const endpoint = '{{ sm.endpoint }}';
13 |     const repository = '{{ sm.repository }}';
14 |     const branch = '{{ sm.branch }}';
15 |     const url = endpoint + repository + '/' + branch + '/comments';
16 |     const data = $(this).serialize();
17 | 
18 |     const xhr = new XMLHttpRequest();
19 |     xhr.open("POST", url);
20 |     xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
21 |     xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
22 |     xhr.onreadystatechange = function () {
23 |       if(xhr.readyState === XMLHttpRequest.DONE) {
24 |         const status = xhr.status;
25 |         if (status >= 200 && status < 400) {
26 |           formSubmitted();
27 |         } else {
28 |           formError();
29 |         }
30 |       }
31 |     };
32 | 
33 |     function formSubmitted() {
34 |       $('#comment-form-submit').addClass('d-none');
35 |       $('#comment-form-submitted').removeClass('d-none');
36 |       $('.page__comments-form .js-notice').removeClass('alert-danger');
37 |       $('.page__comments-form .js-notice').addClass('alert-success');
38 |       showAlert('success');
39 |     }
40 | 
41 |     function formError() {
42 |       $('#comment-form-submitted').addClass('d-none');
43 |       $('#comment-form-submit').removeClass('d-none');
44 |       $('.page__comments-form .js-notice').removeClass('alert-success');
45 |       $('.page__comments-form .js-notice').addClass('alert-danger');
46 |       showAlert('failure');
47 |       $(form).removeClass('disabled');
48 |     }
49 | 
50 |     xhr.send(data);
51 | 
52 |     return false;
53 |   });
54 | 
55 |   function showAlert(message) {
56 |     $('.page__comments-form .js-notice').removeClass('d-none');
57 |     if (message == 'success') {
58 |       $('.page__comments-form .js-notice-text-success').removeClass('d-none');
59 |       $('.page__comments-form .js-notice-text-failure').addClass('d-none');
60 |     } else {
61 |       $('.page__comments-form .js-notice-text-success').addClass('d-none');
62 |       $('.page__comments-form .js-notice-text-failure').removeClass('d-none');
63 |     }
64 |   }
65 | })(jQuery);
66 | 


--------------------------------------------------------------------------------
/beautiful-jekyll-theme.gemspec:
--------------------------------------------------------------------------------
 1 | # frozen_string_literal: true
 2 | 
 3 | Gem::Specification.new do |spec|
 4 |   spec.name          = "beautiful-jekyll-theme"
 5 |   spec.version       = "6.0.1"
 6 |   spec.authors       = ["Dean Attali"]
 7 |   spec.email         = ["daattali@gmail.com"]
 8 | 
 9 |   spec.summary       = "Beautiful Jekyll is a ready-to-use Jekyll theme to help you create an awesome website quickly. Perfect for personal blogs or simple project websites, with a focus on responsive and clean design."
10 |   spec.homepage      = "https://beautifuljekyll.com"
11 |   spec.license       = "MIT"
12 | 
13 |   spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r{^(assets|_layouts|_includes|LICENSE|README|feed|404|_data|tags|staticman)}i) }
14 | 
15 |   spec.metadata      = {
16 |     "changelog_uri"     => "https://beautifuljekyll.com/updates/",
17 |     "documentation_uri" => "https://github.com/daattali/beautiful-jekyll#readme"
18 |   }
19 | 
20 |   spec.add_runtime_dependency "jekyll", ">= 3.9.3"
21 |   spec.add_runtime_dependency "jekyll-paginate", "~> 1.1"
22 |   spec.add_runtime_dependency "jekyll-sitemap", "~> 1.4"
23 |   spec.add_runtime_dependency "kramdown-parser-gfm", "~> 1.1"
24 |   spec.add_runtime_dependency "kramdown", "~> 2.3"
25 |   spec.add_runtime_dependency "webrick", "~> 1.8"
26 | 
27 |   spec.add_development_dependency "bundler", ">= 1.16"
28 |   spec.add_development_dependency "rake", "~> 12.0"
29 |   spec.add_development_dependency "appraisal", "~> 2.5"
30 | end
31 | 


--------------------------------------------------------------------------------
/feed.xml:
--------------------------------------------------------------------------------
 1 | ---
 2 | layout: null
 3 | ---
 4 | <?xml version="1.0" encoding="UTF-8"?>
 5 | <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
 6 |   <channel>
 7 |     {% if site.title %}
 8 |     <title>{{ site.title | xml_escape }}</title>
 9 |     {% endif %}
10 |     {% if site.rss-description %}
11 |     <description>{{ site.rss-description | xml_escape }}</description>
12 |     {% endif %}
13 |     <link>{{ '/' | absolute_url }}</link>
14 |     <atom:link href="{{ 'feed.xml' | absolute_url }}" rel="self" type="application/rss+xml" />
15 |     {% assign excerpt_length = site.excerpt_length | default: 50 %}
16 |     {% for post in site.posts limit:20 %}
17 |       <item>
18 |         <title>{{ post.title | strip_html | xml_escape }}</title>
19 |         {% if post.author %}
20 |         <dc:creator><![CDATA[ {{ post.author | xml_escape }} ]]></dc:creator>
21 |         {% elsif site.author %}
22 |         <dc:creator><![CDATA[ {{ site.author | xml_escape }} ]]></dc:creator>
23 |         {% endif %}
24 |         <description>
25 |           {% if post.subtitle %}{{ post.subtitle | strip_html | xml_escape }} - {% endif %}
26 |           {{ post.content | strip_html | xml_escape | truncatewords: excerpt_length }}
27 |         </description>
28 |         <pubDate>{{ post.date | date: "%a, %d %b %Y %H:%M:%S %z" }}</pubDate>
29 |         <link>{{ post.url | absolute_url }}</link>
30 |         <guid isPermaLink="true">{{ post.url | absolute_url }}</guid>
31 |       </item>
32 |     {% endfor %}
33 |   </channel>
34 | </rss>
35 | 


--------------------------------------------------------------------------------
/index.html:
--------------------------------------------------------------------------------
1 | ---
2 | layout: home
3 | title: My website
4 | subtitle: This is where I will tell my friends way too much about me
5 | ---
6 | 


--------------------------------------------------------------------------------
https://raw.githubusercontent.com/daattali/beautiful-jekyll/476d4a4144bdc62cc57f5d69f72903d299a7c0df/screenshot.png


--------------------------------------------------------------------------------
/staticman.yml:
--------------------------------------------------------------------------------
  1 | # Name of the property. You can have multiple properties with completely
  2 | # different config blocks for different sections of your site.
  3 | # For example, you can have one property to handle comment submission and
  4 | # another one to handle posts.
  5 | # To encrypt strings use the following endpoint:
  6 | # https://{STATICMAN API INSTANCE}/v3/encrypt/{TEXT TO BE ENCRYPTED}
  7 | # {STATICMAN API INSTANCE} should match the `endpoint` in the theme config
  8 | # file.
  9 | 
 10 | comments:
 11 |   # (*) REQUIRED
 12 |   #
 13 |   # Names of the fields the form is allowed to submit. If a field that is
 14 |   # not here is part of the request, an error will be thrown.
 15 |   allowedFields: ["name", "email", "url", "message"]
 16 | 
 17 |   # (*) REQUIRED WHEN USING NOTIFICATIONS
 18 |   #
 19 |   # When allowedOrigins is defined, only requests sent from one of the domains
 20 |   # listed will be accepted. The origin is sent as part as the `options` object
 21 |   # (e.g. <input name="options[origin]" value="https://yourdomain.com/post1")
 22 |   # allowedOrigins: ["https://example.com"]
 23 | 
 24 |   # (*) REQUIRED
 25 |   #
 26 |   # Name of the branch being used. Must match the `branch` in the theme config
 27 |   # file.
 28 |   branch: "master"   #  use "master" for user page or "gh-pages" for project pages
 29 | 
 30 |   commitMessage: "New comment by {fields.name}"
 31 | 
 32 |   # (*) REQUIRED
 33 |   #
 34 |   # Destination path (filename) for the data files. Accepts placeholders.
 35 |   filename: "comment-{@timestamp}"
 36 | 
 37 |   # The format of the generated data files. Accepted values are "json", "yaml"
 38 |   # or "frontmatter"
 39 |   format: "yaml"
 40 | 
 41 |   # List of fields to be populated automatically by Staticman and included in
 42 |   # the data file. Keys are the name of the field. The value can be an object
 43 |   # with a `type` property, which configures the generated field, or any value
 44 |   # to be used directly (e.g. a string, number or array)
 45 |   generatedFields:
 46 |     date:
 47 |       type: "date"
 48 |       options:
 49 |         format: "iso8601" # "iso8601" (default), "timestamp-seconds", "timestamp-milliseconds"
 50 | 
 51 |   # Whether entries need to be approved before they are published to the main
 52 |   # branch. If set to `true`, a pull request will be created for your approval.
 53 |   # Otherwise, entries will be published to the main branch automatically.
 54 |   moderation: false
 55 | 
 56 |   # Akismet spam detection.
 57 |   # akismet:
 58 |   #   enabled: true
 59 |   #   author: "name"
 60 |   #   authorEmail: "email"
 61 |   #   authorUrl: "url"
 62 |   #   content: "message"
 63 |   #   type: "comment"
 64 | 
 65 |   # Name of the site. Used in notification emails.
 66 |   # name: "Your Site"
 67 | 
 68 |   # Notification settings. When enabled, users can choose to receive notifications
 69 |   # via email when someone adds a reply or a new comment. This requires an account
 70 |   # with Mailgun, which you can get for free at https://mailgun.com.
 71 |   # notifications:
 72 |     # Enable notifications
 73 |     # enabled: true
 74 | 
 75 |     # (!) ENCRYPTED
 76 |     #
 77 |     # Mailgun API key
 78 |     # apiKey: ""
 79 | 
 80 |     # (!) ENCRYPTED
 81 |     #
 82 |     # Mailgun domain (encrypted)
 83 |     # domain: ""
 84 | 
 85 |   # (*) REQUIRED
 86 |   #
 87 |   # Destination path (directory) for the data files. Accepts placeholders.
 88 |   path: "_data/comments/{options.slug}" # (default)
 89 | 
 90 |   # Names of required files. If any of these isn't in the request or is empty,
 91 |   # an error will be thrown.
 92 |   requiredFields: ["name", "email", "message"]
 93 | 
 94 |   # List of transformations to apply to any of the fields supplied. Keys are
 95 |   # the name of the field and values are possible transformation types.
 96 |   transforms:
 97 |     email: md5
 98 | 
 99 |   # reCAPTCHA (OPTIONAL)
100 |   # To enable reCAPTCHA:
101 |   # 1. Set `enabled` to `true`
102 |   # 2. Register your domain at https://www.google.com/recaptcha/ and choose reCAPTCHA V2
103 |   # 3. Uncomment `siteKey` and `secret` and fill them in with your values
104 |   reCaptcha:
105 |     enabled: false
106 |     #siteKey: ""
107 |     # ENCRYPT reCaptcha secret key using Staticman /encrypt endpoint
108 |     # i.e. https://{STATICMAN API INSTANCE}/v3/encrypt/{your-site-secret}
109 |     # For more information, visit https://staticman.net/docs/encryption
110 |     #secret: ""
111 | 


--------------------------------------------------------------------------------
/tags.html:
--------------------------------------------------------------------------------
 1 | ---
 2 | layout: page
 3 | title: 'Tag Index'
 4 | ---
 5 | 
 6 | {% assign date_format = site.date_format | default: "%B %-d, %Y" %}
 7 | 
 8 | {%- capture site_tags -%}
 9 |     {%- for tag in site.tags -%}
10 |         {{- tag | first -}}{%- unless forloop.last -%},{%- endunless -%}
11 |     {%- endfor -%}
12 | {%- endcapture -%}
13 | {%- assign tags_list = site_tags | split:',' | sort -%}
14 | 
15 | {%- for tag in tags_list -%}
16 |     <a href="#{{- tag -}}" class="btn btn-primary tag-btn"><i class="fas fa-tag" aria-hidden="true"></i>&nbsp;{{- tag -}}&nbsp;({{site.tags[tag].size}})</a>
17 | {%- endfor -%}
18 | 
19 | <div id="full-tags-list">
20 | {%- for tag in tags_list -%}
21 |     <h2 id="{{- tag -}}" class="linked-section">
22 |         <i class="fas fa-tag" aria-hidden="true"></i>
23 |         &nbsp;{{- tag -}}&nbsp;({{site.tags[tag].size}})
24 |     </h2>
25 |     <div class="post-list">
26 |         {%- for post in site.tags[tag] -%}
27 |             <div class="tag-entry">
28 |                 <a href="{{ post.url | relative_url }}">{{- post.title | strip_html -}}</a>
29 |                 <div class="entry-date">
30 |                     <time datetime="{{- post.date | date_to_xmlschema -}}">{{- post.date | date: date_format -}}</time>
31 |                 </div>
32 |             </div>
33 |         {%- endfor -%}
34 |     </div>
35 | {%- endfor -%}
36 | </div>
37 | 


---------------------------------------------------------
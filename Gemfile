source "https://rubygems.org"

# Jekyll dependencies
gem "jekyll", "~> 4.3.2"
gem "minima", "~> 2.5"
gem "webrick", "~> 1.7"

# Use Dart Sass instead of LibSass (which has compatibility issues)
gem "jekyll-sass-converter", "~> 3.0"

# Required by Ruby 3.4.0+
gem "csv"
gem "logger"
gem "bigdecimal"
gem "base64"

group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.15.1"
  gem "jekyll-paginate", "~> 1.1.0"
  gem "jekyll-sitemap", "~> 1.4.0"
end

# Windows and JRuby does not include zoneinfo files
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]

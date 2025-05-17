#!/bin/bash
# Script to sort GIFs by size and format

# Define source and destination directories
GIF_DIR="/home/sam/SPOON_GIT/petrafied-jekyll/assets/images/gifs"
SMALL_DIR="$GIF_DIR/small"
MEDIUM_DIR="$GIF_DIR/medium"
LARGE_DIR="$GIF_DIR/large"
BANNER_DIR="$GIF_DIR/banner"
ICON_DIR="$GIF_DIR/icon"
ANIMATED_DIR="$GIF_DIR/animated"

# Create directories if they don't exist
mkdir -p "$SMALL_DIR" "$MEDIUM_DIR" "$LARGE_DIR" "$BANNER_DIR" "$ICON_DIR" "$ANIMATED_DIR"

# Create a catalog file
CATALOG_FILE="$GIF_DIR/gif_catalog.md"
echo "# GIF Catalog" > "$CATALOG_FILE"
echo "Generated on $(date)" >> "$CATALOG_FILE"
echo "" >> "$CATALOG_FILE"
echo "| Filename | Size | Dimensions | Type | Category |" >> "$CATALOG_FILE"
echo "|----------|------|------------|------|----------|" >> "$CATALOG_FILE"

# Function to determine if a GIF is animated
is_animated() {
  frames=$(identify -format "%n" "$1" 2>/dev/null | head -1)
  if [ -z "$frames" ] || [ "$frames" -le 1 ]; then
    return 1
  else
    return 0
  fi
}

# Process each GIF file
cd "$GIF_DIR"
for gif in *.gif; do
  # Skip if it's a directory
  if [ -d "$gif" ]; then
    continue
  fi
  
  # Get dimensions and size of GIF
  dimensions=$(identify -format "%wx%h" "$gif" 2>/dev/null | head -1)
  width=$(echo $dimensions | cut -d'x' -f1)
  height=$(echo $dimensions | cut -d'x' -f2)
  filesize=$(du -h "$gif" | cut -f1)
  
  # Check if GIF is animated
  if is_animated "$gif"; then
    category="animated"
    type="Animated"
    cp "$gif" "$ANIMATED_DIR/"
  else
    type="Static"
    
    # Categorize based on shape and dimensions
    if [ "$width" -gt 200 ] && [ "$height" -lt 100 ]; then
      category="banner"
      cp "$gif" "$BANNER_DIR/"
    elif [ "$width" -le 50 ] && [ "$height" -le 50 ]; then
      category="icon"
      cp "$gif" "$ICON_DIR/"
    elif [ "$width" -le 100 ] && [ "$height" -le 100 ]; then
      category="small"
      cp "$gif" "$SMALL_DIR/"
    elif [ "$width" -le 200 ] && [ "$height" -le 200 ]; then
      category="medium"
      cp "$gif" "$MEDIUM_DIR/"
    else
      category="large"
      cp "$gif" "$LARGE_DIR/"
    fi
  fi
  
  # Add to catalog
  echo "| [$gif]($gif) | $filesize | $dimensions | $type | $category |" >> "$CATALOG_FILE"
  
  echo "Processed: $gif ($dimensions) -> $category"
done

echo "GIF sorting complete. Catalog saved to $CATALOG_FILE"

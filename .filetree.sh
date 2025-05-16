Now, here's a standalone script version you can use outside of `.zshrc`:

```bash
#!/bin/bash
# filetree_json.sh - Generate a condensed JSON representation of directory structure
# Usage: ./filetree_json.sh [output_file]
#        If output_file is not specified, defaults to filetree.json

OUTPUT_FILE="${1:-filetree.json}"

find . -type f -o -type d -not -path "*/\.*" | sort | python3 -c "
import sys, json, os

tree = {}
for line in sys.stdin:
    path = line.strip()
    if path == \".\": continue
    
    is_file = os.path.isfile(path)
    parts = path[2:].split(\"/\")  # Remove ./ prefix
    current = tree
    
    for i, part in enumerate(parts):
        is_last = i == len(parts) - 1
        
        if is_last and is_file:
            current[part] = 1  # Files as 1 to save tokens
        else:
            if part not in current:
                current[part] = {}
            current = current[part]

print(json.dumps(tree))
" > "$OUTPUT_FILE"

echo "File tree JSON created at: $OUTPUT_FILE"

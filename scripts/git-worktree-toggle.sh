#!/bin/bash

FILES=(
    "config/emi.css"
    "config/modlistmemory.json"
)

for file in "${FILES[@]}"; do
if git ls-files -v "$file" | grep -q "^S"; then
  git update-index --no-skip-worktree "$file"
  echo "✓ Unskipped: $file"
    else
    git update-index --skip-worktree "$file"
    echo "✓ Skipped:   $file"
  fi
done
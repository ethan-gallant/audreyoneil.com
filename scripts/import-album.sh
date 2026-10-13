#!/bin/sh
# Adds a Google Photos album (downloaded "Download all" zip, or a folder of photos) as a portfolio collection.
#   sh scripts/import-album.sh "<zip or folder>" "<collection folder name, e.g. 03-Figurative 2024>"
# Photos are converted to web-friendly JPEGs (max 2400px) and numbered in their original order.
set -e
src="$1"; dest="src/my-site/portfolio/$2"
cd "$(dirname "$0")/.."
tmp=$(mktemp -d)
if [ -d "$src" ]; then cp -R "$src"/. "$tmp"/; else unzip -qo "$src" -d "$tmp"; fi
mkdir -p "$dest"
i=0
find "$tmp" -type f \( -iname '*.jpg' -o -iname '*.jpeg' -o -iname '*.png' -o -iname '*.heic' -o -iname '*.webp' \) | sort | while read -r f; do
  i=$((i + 1))
  sips -s format jpeg -s formatOptions 82 -Z 2400 "$f" --out "$dest/$(printf '%02d' $i).jpg" >/dev/null
done
rm -rf "$tmp"
echo "$(ls "$dest" | wc -l | tr -d ' ') photos in $dest"

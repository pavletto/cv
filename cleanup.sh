#!/usr/bin/env sh

HTML_FILE=$1

if [ ! -f "$HTML_FILE" ]; then
    echo "File $HTML_FILE not found!"
    exit 1
fi

SCRIPT_FILES=$(perl -nE 'say $1 if /<script[^>]*src="([^"]+)"/' "$HTML_FILE")

cp "$HTML_FILE" "${HTML_FILE}.bak"

perl -i -0pe 's/<script[^>]*>.*?<\/script>//gs' "$HTML_FILE"

for SCRIPT in $SCRIPT_FILES; do
    if [ -f "$SCRIPT" ]; then
        rm "$SCRIPT"
    fi
done

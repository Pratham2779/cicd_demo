#!/bin/bash

WATCH_DIR="."
COMMIT_MSG="Auto-commit on changes detected"

while true; do
    inotifywait -r -e modify,create,delete,move $WATCH_DIR

    git add .
    git commit -m "$COMMIT_MSG"
    git push origin main
done

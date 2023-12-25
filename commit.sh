#!/bin/sh

echo "About to add Mint.Club to staging area"
git add .

echo "ABout to commit Mint.Club"
git commit -am "chore: $1"

echo "About To push to github"
git push -u origin main


echo "All process finished with status 0"

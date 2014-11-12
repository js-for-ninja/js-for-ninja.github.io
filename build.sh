#!/bin/bash

jekyll build

cp ./_site/* ../js-for-ninja.github.io/

cd ../js-for-ninja.github.io/

git add .

git commit -m "Relese" -a

git push origin master

cd ../js-for-ninja.github.io.source

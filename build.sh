#!/bin/bash

jekyll build

rm -rf _site/node_modules

gulp autoprefixer

rm -rf ../js-for-ninja.github.io/*

cp -R ./_site/* ../js-for-ninja.github.io/

cd ../js-for-ninja.github.io/

git add . --all

git commit -m "Release" -a

git push origin master

cd ../js-for-ninja.github.io.source

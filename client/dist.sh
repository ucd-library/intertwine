#! /bin/bash

rm -rf dist
mkdir dist

cp -r -L public/images dist/
cp -r -L public/loader dist/

cp public/index.html dist/
cp public/ie.html dist/

webpack --config webpack-dist.config.js

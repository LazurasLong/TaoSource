# ng build --target=production --environment=prod --aot --build-optimizer --output-hashing --output-path dist
ng build --target=production --environment=prod --output-path dist --aot --build-optimizer &&
rm -rf dist/assets/images/

# ng build --target=production --environment=prod --aot --build-optimizer --output-hashing --output-path dist
ng build --target=production --environment=prod --output-path docs/Published --aot --build-optimizer &&
rm -rf docs/Published/assets/images &&
cp docs/Static/robots.txt docs/Static/sitemap.xml docs/Published/
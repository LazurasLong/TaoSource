# ng build --target=production --environment=prod --aot --build-optimizer --output-hashing --output-path dist
ng build --target=production --environment=prod --output-path docs/Published --aot --build-optimizer &&
rm -rf docs/Published/assets/images docs/Published/3rdpartylicenses.txt &&
cp docs/Static/robots.txt docs/Static/sitemap.xml docs/Published/
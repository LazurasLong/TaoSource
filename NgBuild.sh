ng build --target=production --environment=prod --aot --build-optimizer --vendor-chunk=true --output-hashing --sourcemaps &&
sleep 40 &&
echo "project is built" &&
rm dist/*.gz &&
echo "gz files removed from dist/" &&
cp -Rv redirects/* dist/* . &&
git add . && git commit -m "set me alive at github" && git push
echo "Done - in few secounds / minutes we can see the result alive"

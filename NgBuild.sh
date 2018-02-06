ng build --target=production --environment=prod --aot --build-optimizer --output-hashing &&
sleep 40 &&
echo "project is built" &&
cp -Rv redirects/* dist/* . && 
git add . && git commit -m "set me alive at github" && git push
echo "Done - in few secounds / minutes we can see the result alive"

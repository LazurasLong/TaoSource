ng build --prod --output-hashing --sourcemaps &&
sleep 4 &&
echo "project is built" &&
rm dist/*.gz &&
echo "gz files removed from dist/" &&
cp -Rv redirects/* dist/ &&
echo "dist/ folder ready to firebase deploy" &&
git add . &&
echo "changes saved in git - give your own commit message!"

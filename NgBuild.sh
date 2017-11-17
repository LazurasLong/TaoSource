ng build --prod --output-hashing --sourcemaps &&
sleep 4 &&
echo "project is built" &&
rm dist/*.gz &&
echo "gz files removed from dist/" &&
cp -Rv redirects/* dist/ &&
echo "dist/ folder ready to firebase deploy" &&
git add . && 
echo "Lets hope there is no error >D - commiting / publishing project" &&
echo "while we wait for firebase upload...lets give them more 60 secounds " && sleep 60 &&
echo "changes saved in git - give your own commit message!" &&
echo "git commit -m"
firebase deploy &&

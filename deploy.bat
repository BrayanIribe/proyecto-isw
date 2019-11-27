CALL npm run build
CALL git add dist -f && git commit -m "Initial dist subtree commit"
CALL git subtree push --prefix dist origin gh-pages
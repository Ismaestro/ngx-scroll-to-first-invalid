rm -Rf dist/
npm run build:library
cd dist/ngx-scroll-to-first-invalid
npm login --registry=https://registry.npmjs.org
npm publish --registry=https://registry.npmjs.org --access public

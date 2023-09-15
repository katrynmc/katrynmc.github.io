## Github Pages
This repository contains two relevant branches:
- main - the source code of the React app
- gh-pages - the React app built from that source code

To deploy a new version of the site:
`yarn deploy` from the main branch

If the `CNAME` file is not present add it manually. See the example in `public/CNAME`

## Start local server
`npm install`

DEV: `npm run start-dev`
Create assets for Prod: `npm run build`

[http://localhost:8080/](http://localhost:8080/)

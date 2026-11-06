# Jakob Coughlan portfolio

React 18 portfolio with client-side routing, an animated home page, and a project gallery.

## Development

```sh
npm ci
npm start
```

## Production

```sh
npm run build
```

The output is in `build/`. The app uses hash routing (`/#/Home` and `/#/Projects`)
so refreshing or opening a project-page link works on GitHub Pages without server
rewrite rules. Use these hash URLs when sharing links. `npm run deploy` builds and
publishes to GitHub Pages using the existing custom domain configuration.

Home interactions use React state and an effect with event listener cleanup.
Project content lives in `src/Projects/projectData.js`. Every entry automatically
appears in the gallery using its title, sorted from newest to oldest by date (undated entries appear last). Descriptions
and external links are optional. Static images and the resume are in `public/`.

## Project thumbnails

Gallery cards use WebP thumbnails in `public/thumbnails/` (up to 800 pixels on
the longest edge, without cropping or enlarging). Modals use the original images.
After adding or replacing project images, regenerate thumbnails and their size manifest:

```sh
python -m pip install Pillow
python scripts/generate_thumbnails.py
```

Commit `public/thumbnails/` and `src/Projects/thumbnails.json` along with your changes.
Python is only needed to regenerate thumbnails; the normal React build does not need it.

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

The output is in `build/`. Serve that directory with an SPA fallback to `index.html`
so direct visits to `/Home` and `/Projects` work. `npm run deploy` publishes to
GitHub Pages using the existing custom domain configuration.

Home interactions use React state and an effect with event listener cleanup.
Project content lives in `src/Projects/projectData.js`. Every entry automatically
appears in the gallery using its title, sorted from newest to oldest by date (undated entries appear last). Descriptions
and external links are optional. Static images and the resume are in `public/`.

const { spawnSync } = require('node:child_process');

// npm run deploy runs this build immediately before publishing to GitHub Pages.
const result = spawnSync(process.execPath, [require.resolve('react-scripts/bin/react-scripts'), 'build'], {
  stdio: 'inherit',
  env: { ...process.env, REACT_APP_DEPLOYED_AT: new Date().toISOString() },
});

if (result.error) throw result.error;
process.exit(result.status ?? 1);

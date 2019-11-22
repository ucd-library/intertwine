# intertWINE
California's modern wine network


## Development

In the root, let's install our dependancies needed to construct our code.

```
npm install
```

Navigate to ./client/public and once again run `npm install`.

Run `ln -s node_modules/@ucd-lib/cork-app-load/lib loader`.  This command should create a *loader* directory which contains the required polyfills.

Set up webpack to continuously update its bundles.  This command is setup in the `package.json` file at the project's root.

```bash
npm run watch
```

Next navigate to the root directory and run `node server.js`.

And you are now running your development setup on `localhost`.
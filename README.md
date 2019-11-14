# intertWINE
California's modern wine network


## Development

In the root, let's install our dependancies needed to construct our code.

```
npm install
```

Next, navigate to ./client/public and once again run `npm install`.

Set up webpack to continuously update it's bundles.  This command is
setup in the `package.json` file at the project's root.

```bash
npm run watch
```

Next navigate to the root directory and run `node server.js`.

And you are now running your development setup on `localhost`.

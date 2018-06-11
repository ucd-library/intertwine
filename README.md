# inter-wine
California's modern wine network


## Development

In the root, let's install our dependancies needed to construct our code.

```
npm install
```

In addition, we need to install modules for the client as well.

```
(cd client/public; yarn install)
```


Set up webpack to continuously update it's bundles.  This command is
setup in the `package.json`.

```bash
npm run watch
```

Then, start an httpserver in the public space

```bash
cd client/public
httpserver
```

And you are now running your development setup on `localhost`.

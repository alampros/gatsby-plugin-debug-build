# gatsby-plugin-debug-build
Gatsby plugin to force the dev version of builds

This is a [Gatsby](https://www.gatsbyjs.org) plugin that simply removes any
`UglifyJsPlugin` instances from the webpack chain and sets the `NODE_ENV` to
`development`.  This makes webpack include the full development bundle of react
in your built project, which is useful for debugging runtime errors in the
compiled output.

# NOT FOR USE IN PRODUCTION

**This is a debugging utility**. Don't do stupid things with it.


# Usage

Add it to your project

```sh
yarn add gatsby-plugin-debug-build
```

Then add it to your `gatsby-config.js`:

```js
{
  plugins: [
    'gatsby-plugin-debug-build',
  ]
}
```


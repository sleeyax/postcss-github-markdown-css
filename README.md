# postcss-github-markdown-css

PostCSS plugin to add [TailwindCSS](https://tailwindcss.com/) `.dark` and `.light` classes to [sindresorhus/github-markdown-css](https://github.com/sindresorhus/github-markdown-css).

Based on: https://github.com/sindresorhus/github-markdown-css/issues/104#issuecomment-1774279738.

## Installation

`npm install --save-dev postcss-github-markdown-css`

## Usage
Add the plugin to your postcss configuration file:

```js
// postcss.config.js

const githubMarkdownCss = require('postcss-github-markdown-css');

const config = {
  plugins: {
    // ...
    githubMarkdownCss,
  },
};

module.exports = config;
```

Finally, import `github-markdown-css` as usual.

React example:

```tsx
import "github-markdown-css/github-markdown.css";

export function SomeMarkdownComponent() {
  return (
    <div className="markdown-body">
      {/* Your markdown content here */}
    </div>
  );
}
```

The plugin will automatically add the `.dark` and `.light` classes to the `.markdown-body` element so it works with TailwindCSS dark mode.

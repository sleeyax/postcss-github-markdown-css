/**
 * @type {import('postcss').PluginCreator}
 */
module.exports = (opts = {filePath: "github-markdown.css"}) => {
  return {
    postcssPlugin: 'postcss-github-markdown-css',
    AtRule: {
      media(media, { Rule }) {
        if (opts.filePath != null) {
          const currentFilePath = media.root().source?.input?.file ?? "";

          if (!currentFilePath.endsWith(opts.filePath)){
            return;
          }
        }

        let scopeSelector;
        switch (media.params) {
          case "(prefers-color-scheme: dark)":
            scopeSelector = ".dark";
            break;
          case "(prefers-color-scheme: light)":
            scopeSelector = ".light";
            break;
          default:
            return;
        }

        media.each((child) => {
          if (child.type !== "rule") {
            return;
          }

          const newRule = new Rule({
            selector: `${scopeSelector} ${child.selector}`,
          });

          child.each((grandChild) => newRule.append(grandChild.clone()));

          media.before(newRule);
        });
        media.remove();
      },
    },
  }
}

module.exports.postcss = true

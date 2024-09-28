const postcss = require("postcss");
const { equal } = require("node:assert");
const { test } = require("node:test");
const plugin = require("./");

async function run(input, output, opts = {}) {
  const result = await postcss([plugin(opts)]).process(input, {
    from: undefined,
  });
  equal(result.css, output);
  equal(result.warnings().length, 0);
}

test("it inserts .dark and .light classes", async () => {
  const input = `
@media (prefers-color-scheme: dark) {
  .markdown-body, [data-theme="dark"] {
    color-scheme: dark;
    --example-color: #ffffff;
  }
}
@media (prefers-color-scheme: light) {
  .markdown-body, [data-theme="light"] {
    color-scheme: light;
    --example-color: #0000;
  }
}
  `;
  const output = `
.dark .markdown-body, [data-theme="dark"] {
    color-scheme: dark;
    --example-color: #ffffff
}
.light .markdown-body, [data-theme="light"] {
    color-scheme: light;
    --example-color: #0000
}
  `;

  await run(input.trim(), output.trim(), { filePath: null });
});

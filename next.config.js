/** @type { import("nextra").Nextra } */
const nextra = require("nextra");
const { getHighlighter, BUNDLED_LANGUAGES } = require("shiki");

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  defaultShowCopyCode: true,
  readingTime: true,
  mdxOptions: {
    rehypePrettyCodeOptions: {
      getHighlighter: (options) => {
        return getHighlighter({
          ...options,
          langs: [
            ...BUNDLED_LANGUAGES,
          ],
        });
      },
    },
  },
});

module.exports = {
  ...withNextra({
    output: "export",
    images: { unoptimized: true },
  }),
};

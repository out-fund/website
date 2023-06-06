module.exports = function (eleventyConfig) {
  return {
    dir: {
      input: "src/pages",
      includes: "../includes",
      layouts: "../includes/layouts",
      output: "dist",
    },
  };
};

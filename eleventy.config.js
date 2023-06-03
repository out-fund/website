module.exports = function (eleventyConfig) {
  return {
    dir: {
      input: "pages",
      includes: "../includes",
      layouts: "../includes/layouts",
      output: "dist",
    },
  };
};

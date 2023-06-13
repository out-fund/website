module.exports = function (eleventyConfig) {
  
  // Ignores styles folder
  eleventyConfig.ignores.add("src/styles/**/*");
  eleventyConfig.watchIgnores.add("src/styles/**/*");

  // passthrough copy
  eleventyConfig.addPassthroughCopy({ "./src/static": "/" });
  eleventyConfig.addPassthroughCopy({"./src/assets/fonts": "/"});
  eleventyConfig.addPassthroughCopy({"./src/assets/images": "/"});


  eleventyConfig.setServerOptions({
    watch: ["./**/*.css", "./**/*.js"],
    port: 8080,
  });
  
  return {
    dir: {
      input: "src/pages",
      includes: "../includes",
      layouts: "../includes/layouts",
      output: "dist",
    },
  };
};

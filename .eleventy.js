module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");
  return {
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "_site",
    },
  };
};

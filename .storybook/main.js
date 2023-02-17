const withRecommendedConfig = require("@bm/clientside-storybook-config");
const path = require("path");

process.env.BM_PROJECT_ROOT = path.resolve(__dirname, "..");

module.exports = withRecommendedConfig({
  staticDirs: [path.resolve(__dirname, "..", "..", "..", "public")],
});

const withRecommendedConfig = require("@bm/clientside-rollup-config/recommended");

process.env.BM_PROJECT_ROOT = __dirname;

module.exports = withRecommendedConfig({});

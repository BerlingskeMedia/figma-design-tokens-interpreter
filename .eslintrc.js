require("@bm/clientside-eslint-config/patch");

process.env.BM_PROJECT_ROOT = __dirname;

module.exports = {
  extends: [require.resolve("@bm/clientside-eslint-config/recommended")],
};

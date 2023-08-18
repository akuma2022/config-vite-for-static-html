const { resolve } = require("path");
const root = resolve(__dirname, "src");
const outDir = resolve(__dirname, "dist");
const publicDir = resolve(__dirname, "public");
module.exports = {
  root,
  publicDir,
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        setting: resolve(root, "pages", "index.html"),
        about: resolve(root, "pages", "about.html"),
      },
    },
  },
  server: {
    port: "4500",
    open: resolve(root, "pages", "index.html"),
  },
};

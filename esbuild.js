const { build } = require("esbuild");
const { dependencies } = require("./package.json");

const shared = {
  entryPoints: ["src/index.ts"],
  bundle: true,
  external: Object.keys(dependencies),
  logLevel: "info",
};

build({
  ...shared,
  outfile: "dist/index.js",
  format: "cjs",
});

build({
  ...shared,
  outfile: "dist/index.mjs",
  format: "esm",
});

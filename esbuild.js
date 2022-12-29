const { build } = require("esbuild");

build({
  entryPoints: ["./src/index.ts"],
  minify: true,
  keepNames: true,
  bundle: true,
  sourcemap: true,
  outfile: "./build/index.js",
}).catch(() => {
  process.exit(1);
});

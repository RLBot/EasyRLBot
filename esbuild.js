const esbuild = require("esbuild");

esbuild
  .build({
    entryPoints: ["./src/index.ts"],
    outdir: "./dist",
    bundle: true,
    minify: false,
    platform: "node",
    sourcemap: true,
    target: "node16",
    external: ["flatbuffers"],
  })
  .catch(() => process.exit(1));

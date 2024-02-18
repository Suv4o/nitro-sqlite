import typescript from "rollup-plugin-typescript2";

export default defineNitroConfig({
  rollupConfig: {
    plugins: [typescript()],
  },
  typescript: {
    tsConfig: {
      compilerOptions: {
        lib: ["es2021"],
        target: "es2021",
        module: "es2022",
        moduleResolution: "node",
        allowSyntheticDefaultImports: true,
        emitDecoratorMetadata: true,
        experimentalDecorators: true,
        sourceMap: true,
      },
    },
  },
});

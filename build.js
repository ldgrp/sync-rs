const { build } = require("esbuild");
const fs = require('fs');

const args = process.argv.slice(2);

const minify = args.some(a => a === "--minify");
const sourcemap = args.some(a => a === "--sourcemap");
const watch = args.some(a => a === "--watch");

async function main() {
    try {
        await build({
            entryPoints: ['src/index.tsx'],
            outdir: 'build',
            bundle: true,
            minify,
            sourcemap,
            watch,
        })
    } catch (_err) {
        process.exit(1)
    }
    fs.copyFileSync("./public/index.html", "./build/index.html")
}

main()
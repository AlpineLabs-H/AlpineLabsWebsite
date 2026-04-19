import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const src = fs.readFileSync(path.join(root, "src", "assets", "logo-blue.svg"), "utf8");
const m = src.match(/<g id="svgg">[\s\S]*<\/g>/);
if (!m) throw new Error("Could not find <g id=\"svgg\"> in logo-blue.svg");
const inner = m[0];
// Crop to the left mark (mountain); wordmark starts ~x 150+
const out = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="52 76 86 68" width="32" height="32" role="img" aria-label="Alpine Labs">
<rect x="52" y="76" width="86" height="68" fill="#07090d"/>
${inner}
</svg>
`;
fs.writeFileSync(path.join(root, "public", "favicon.svg"), out);
console.log("Wrote public/favicon.svg");

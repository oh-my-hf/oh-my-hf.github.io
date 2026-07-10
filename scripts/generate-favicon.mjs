/**
 * Build browser-tab favicon: fill transparent pixels with white.
 * Source: public/icon-source.png → public/favicon.png
 *
 * Usage: node scripts/generate-favicon.mjs
 */
import { existsSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const sourcePath = join(root, 'public', 'icon-source.png');
const outPath = join(root, 'public', 'favicon.png');

if (!existsSync(sourcePath)) {
  throw new Error(`Missing ${sourcePath}`);
}

const png = await sharp(sourcePath)
  .ensureAlpha()
  .resize(512, 512)
  .flatten({ background: { r: 255, g: 255, b: 255 } })
  .png()
  .toBuffer();

writeFileSync(outPath, png);
console.log(`Wrote ${outPath} (white-backed, ${png.length} bytes)`);

/**
 * One-shot OG image generator. Not part of `pnpm build`.
 *
 * Usage: pnpm generate:og
 */
import { writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outPath = join(__dirname, '..', 'public', 'og.png');

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#0A0D13"/>
  <!-- hairline frame -->
  <rect x="48" y="48" width="1104" height="534" fill="none" stroke="#242C3A" stroke-width="1"/>
  <!-- accent bar -->
  <rect x="48" y="48" width="4" height="534" fill="#8A97FF"/>
  <!-- three-pane mark -->
  <g transform="translate(96, 120)">
    <rect x="0" y="0" width="18" height="48" rx="3" fill="#8A97FF"/>
    <rect x="24" y="0" width="18" height="48" rx="3" fill="#E8EDF4"/>
    <rect x="48" y="0" width="18" height="48" rx="3" fill="#4AD6A6"/>
  </g>
  <!-- wordmark -->
  <text x="96" y="260" font-family="Georgia, 'Times New Roman', serif" font-size="96" font-weight="600" fill="#E8EDF4" letter-spacing="-2">ohmyhf</text>
  <!-- slogan -->
  <text x="96" y="340" font-family="Georgia, 'Times New Roman', serif" font-size="32" fill="#9AA7BA">The Hugging Face desktop client that should have existed.</text>
  <!-- unofficial line -->
  <text x="96" y="520" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="18" fill="#8A97FF" letter-spacing="2">unofficial · open source</text>
</svg>`;

const png = await sharp(Buffer.from(svg)).png().toBuffer();
writeFileSync(outPath, png);
console.log(`Wrote ${outPath} (${png.length} bytes)`);

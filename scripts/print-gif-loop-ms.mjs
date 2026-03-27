/**
 * Lê o GIF do hero e imprime duração do loop (soma dos delays dos Graphic Control Extensions).
 * Atualiza src/config/heroIntroGifMeta.ts manualmente com o valor `totalMs`.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

function parseGifFrameDelaysMs(data) {
  const delays = [];
  if (data.length < 13) return delays;
  const sig = String.fromCharCode(...data.subarray(0, 6));
  if (sig !== "GIF89a" && sig !== "GIF87a") return delays;
  let i = 13;
  const packedGlobal = data[10];
  if (packedGlobal & 0x80) {
    const gct = 3 * 2 ** ((packedGlobal & 0x07) + 1);
    i += gct;
  }
  while (i < data.length) {
    const b = data[i];
    if (b === 0x3b) break;
    if (b === 0x21) {
      const label = data[i + 1];
      if (label === 0xf9) {
        const hundredths = data[i + 4] | (data[i + 5] << 8);
        delays.push(Math.max(hundredths, 2) * 10);
        i += 8;
        continue;
      }
      i += 2;
      let sub = data[i];
      while (sub !== 0 && i < data.length) {
        i += 1 + sub;
        sub = data[i];
      }
      i += 1;
      continue;
    }
    if (b === 0x2c) {
      if (i + 9 >= data.length) break;
      const descPacked = data[i + 9];
      i += 10;
      if (descPacked & 0x80) {
        const lct = 3 * 2 ** ((descPacked & 0x07) + 1);
        i += lct;
      }
      if (i >= data.length) break;
      i += 1;
      let sub = data[i];
      while (sub !== 0 && i < data.length) {
        i += 1 + sub;
        sub = data[i];
      }
      i += 1;
      continue;
    }
    i += 1;
  }
  return delays;
}

const gifPath = path.join(root, "src", "components", "CTLI INTRo.gif");
const buf = fs.readFileSync(gifPath);
const delays = parseGifFrameDelaysMs(buf);
const total = delays.reduce((a, d) => a + d, 0);
console.log(JSON.stringify({ frames: delays.length, totalMs: total, lastFrameMs: delays[delays.length - 1] }, null, 2));

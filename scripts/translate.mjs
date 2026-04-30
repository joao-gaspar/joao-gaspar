import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { translate } from '@vitalets/google-translate-api';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const messagesDir = path.join(__dirname, '../messages');
const ptFile = path.join(messagesDir, 'pt.json');
const enFile = path.join(messagesDir, 'en.json');
const esFile = path.join(messagesDir, 'es.json');

const ptDict = JSON.parse(fs.readFileSync(ptFile, 'utf8'));
const enDict = fs.existsSync(enFile) ? JSON.parse(fs.readFileSync(enFile, 'utf8')) : {};
const esDict = fs.existsSync(esFile) ? JSON.parse(fs.readFileSync(esFile, 'utf8')) : {};

// Helper to deeply merge/translate missing keys
async function syncDictionaries(source, target, lang) {
  let hasChanges = false;
  const delay = (ms) => new Promise(res => setTimeout(res, ms));
  
  async function traverse(src, tgt) {
    for (const key in src) {
      if (typeof src[key] === 'object' && src[key] !== null) {
        if (!tgt[key] || typeof tgt[key] !== 'object') {
          if (Array.isArray(src[key])) tgt[key] = [];
          else tgt[key] = {};
        }
        await traverse(src[key], tgt[key]);
      } else if (typeof src[key] === 'string') {
        if (!tgt[key] || tgt[key] === '') {
          // Missing translation!
          try {
            console.log(`Translating to ${lang}: "${src[key]}"...`);
            const res = await translate(src[key], { to: lang });
            tgt[key] = res.text;
            hasChanges = true;
            await delay(150); // prevent rate limits
          } catch (error) {
            console.error(`Error translating "${src[key]}" to ${lang}:`, error.message);
            await delay(1000); // Wait longer on error
          }
        }
      }
    }
  }

  await traverse(source, target);
  return hasChanges;
}

async function run() {
  console.log('--- Starting translation sync ---');
  
  console.log('Syncing English...');
  const enChanged = await syncDictionaries(ptDict, enDict, 'en');
  if (enChanged) fs.writeFileSync(enFile, JSON.stringify(enDict, null, 2));
  
  console.log('Syncing Spanish...');
  const esChanged = await syncDictionaries(ptDict, esDict, 'es');
  if (esChanged) fs.writeFileSync(esFile, JSON.stringify(esDict, null, 2));

  console.log('--- Sync complete ---');
}

run();

import { execSync } from 'child_process';
import fs from 'fs';

const files = ['./.webstudio/data.json', './app/__generated__/_index.tsx'];
const search = 'http://localhost:1337';
const replace = 'https://admin.devmat.spirosroadto.info';

files.forEach(file => {
  if (fs.existsSync(file)) {
    const content = fs.readFileSync(file, 'utf8');
    const updated = content.split(search).join(replace);
    fs.writeFileSync(file, updated, 'utf8');
    console.log(`✅ Updated URLs in ${file}`);
    execSync(`git add ${file}`);
  }
});
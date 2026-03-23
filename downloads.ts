// Run "npx tsx downloads.ts" to get all time downloads

import https from 'https';

function getDownloads(): void {
  const packageName = '@scurrlin/stencil';
  const today = new Date().toISOString().split('T')[0];
  const url = `https://api.npmjs.org/downloads/point/2025-01-01:${today}/${encodeURIComponent(packageName)}`;

  https
    .get(url, (res) => {
      let data = '';

      res.on('data', (chunk: Buffer) => {
        data += chunk.toString();
      });

      res.on('end', () => {
        try {
          const result: { downloads?: number } = JSON.parse(data);
          console.log(result.downloads ?? 0);
        } catch {
          console.log(0);
        }
      });
    })
    .on('error', () => {
      console.log(0);
    });
}

getDownloads();

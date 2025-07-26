#!/usr/bin/env node

// Run "node downloads.js" to get all time downloads

const https = require('https');

function getDownloads() {
  const packageName = '@scurrlin/stencil';
  const today = new Date().toISOString().split('T')[0];
  const url = `https://api.npmjs.org/downloads/point/2025-01-01:${today}/${encodeURIComponent(packageName)}`;
  
  https.get(url, (res) => {
    let data = '';
    
    res.on('data', (chunk) => {
      data += chunk;
    });
    
    res.on('end', () => {
      try {
        const result = JSON.parse(data);
        console.log(result.downloads || 0);
      } catch (error) {
        console.log(0);
      }
    });
  }).on('error', () => {
    console.log(0);
  });
}

getDownloads();
const fs = require('fs');
const readline = require('readline');

async function transformFile(filePath, options = {}) {
  const { startLine = null, endLine = null } = options;

  // Check if file exists
  if (!fs.existsSync(filePath)) {
    throw new Error(`File not found: ${filePath}`);
  }

  // Create readable stream with UTF-8 encoding
  const fileStream = fs.createReadStream(filePath, { encoding: 'utf-8' });

  // Handle stream errors
  fileStream.on('error', (err) => {
    throw new Error(`Unable to read file: ${err.message}`);
  });

  // Create an interface for reading the file line by line
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  let currentLine = 0;
  let transformedLines = [];

  for await (const line of rl) {
    currentLine++;

    // Determine if the current line should be transformed
    if (
      (startLine === null || currentLine >= startLine) &&
      (endLine === null || currentLine <= endLine)
    ) {
      transformedLines.push(transformLine(line));
    } else {
      transformedLines.push(line);
    }
  }

  return transformedLines.join('\n');
}

function transformLine(line) {
  // Regular expression to match sequences of letters and numbers
  // \p{L} matches any kind of letter from any language
  // \p{N} matches any kind of numeric character
  // The 'u' flag enables Unicode support
  // The 'g' flag enables global matching
  return line.replace(/[\p{L}\p{N}]+/gu, (match) => {
    return match[0]; // Retain only the first character
  });
}

module.exports = {
  transformFile,
  transformLine
};

const fs = require('fs');
const readline = require('readline');

/**
 * Transforms a file by preserving the first character of each word, along with punctuation and numbers.
 * @param {string} filePath - The path to the file to transform.
 * @param {Object} options - Transformation options.
 * @param {number|null} options.startLine - The first line number to transform (1-based). If null, starts from the first line.
 * @param {number|null} options.endLine - The last line number to transform (1-based). If null, continues to the end of the file.
 * @returns {Promise<string>} - The transformed file content.
 */

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

/**
 * Transforms a single line by keeping the first character of each word, preserving punctuation and numbers.
 * @param {string} line - The line of text to transform.
 * @returns {string} - The transformed line.
 */

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

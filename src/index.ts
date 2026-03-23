import fs from 'node:fs';
import readline from 'node:readline';

interface TransformOptions {
  startLine?: number | null;
  endLine?: number | null;
}

export async function transformFile(
  filePath: string,
  options: TransformOptions = {}
): Promise<string> {
  const { startLine = null, endLine = null } = options;

  if (!fs.existsSync(filePath)) {
    throw new Error(`File not found: ${filePath}`);
  }

  const fileStream = fs.createReadStream(filePath, { encoding: 'utf-8' });

  fileStream.on('error', (err: Error) => {
    throw new Error(`Unable to read file: ${err.message}`);
  });

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  let currentLine = 0;
  const transformedLines: string[] = [];

  for await (const line of rl) {
    currentLine++;

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

export function transformLine(line: string): string {
  // \p{L} matches any kind of letter from any language
  // \p{N} matches any kind of numeric character
  return line.replace(/[\p{L}\p{N}]+/gu, (match) => {
    return match[0];
  });
}

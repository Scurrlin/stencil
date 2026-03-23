#!/usr/bin/env node

import { transformFile } from '../src/index.js';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

async function run(): Promise<void> {
  const argv = await yargs(hideBin(process.argv))
    .usage('Usage: stencil <path> [options]')

    .example(
      'npx stencil path/to/file.py --start 2 --end 10',
      'Transform only lines 2-10 (local installation)\n'
    )

    .example(
      'stencil path/to/file.py --start 2 --end 10',
      'Transform only lines 2-10 (global installation)'
    )

    .option('start', {
      alias: 's',
      type: 'number',
      default: undefined,
      describe: 'Start line number for transformation'
    })
    .option('end', {
      alias: 'e',
      type: 'number',
      default: undefined,
      describe: 'End line number for transformation'
    })
    .demandCommand(1, 'Please provide the path to the file you wish to transform.')
    .help('h')
    .alias('h', 'help')
    .argv;

  const filePath = argv._[0] as string;
  const { start, end } = argv;

  try {
    const transformedCode = await transformFile(filePath, { startLine: start, endLine: end });
    console.log(transformedCode);
  } catch (error) {
    console.error('Error:', (error as Error).message);
    process.exit(1);
  }
}

run();

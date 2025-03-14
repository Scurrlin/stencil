#!/usr/bin/env node

const { transformFile } = require('../src/index');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

async function run() {
  const argv = yargs(hideBin(process.argv))
    .usage('Usage: stencil <path> [options]')
    
    // Local Installation Example
    .example(
      'npx stencil path/to/file.py --start 2 --end 10',
      'Transform only lines 2-10 (local installation)\n'
    )
    
    // Global Installation Example
    .example(
      'stencil path/to/file.py --start 2 --end 10',
      'Transform only lines 2-10 (global installation)'
    )

    .option('start', {
      alias: 's',
      type: 'number',
      default: null,
      describe: 'Start line number for transformation'
    })
    .option('end', {
      alias: 'e',
      type: 'number',
      default: null,
      describe: 'End line number for transformation'
    })
    .demandCommand(1, 'Please provide the path to the file you wish to transform.')
    .help('h')
    .alias('h', 'help')
    .argv;

  const filePath = argv._[0];
  const { start, end } = argv;

  try {
    const transformedCode = await transformFile(filePath, { startLine: start, endLine: end });
    console.log(transformedCode);
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

run();
#!/usr/bin/env node

const { transformFile } = require('../src/index');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

async function run() {
  const argv = yargs(hideBin(process.argv))
    .usage('Usage: stencil <path> [options]')
    .example('stencil path/to/file.py --start 2 --end 10', 'Transform only lines 2-10')
    .option('start', {
      alias: 's',
      type: 'number',
      defaut: null,
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
    const transformedCode = await transformFile(filePath, { startline: start, endLine: end });
    console.log(transformedCode);
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

run();
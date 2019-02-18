'use strict';

const program = require('commander');

program
  .version('0.1')
  .option('-i, --input <path>','Input file path')
  .parse(process.argv);

console.log(program.input);
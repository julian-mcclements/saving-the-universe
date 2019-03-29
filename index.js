'use strict';
const program = require('commander');
const fs = require('fs');
const TestCaseIterator = require('./src/testCaseIterator');
const findFurthest = require('./src/findFurthest');

const getOutputFilename = () => {
    const now = new Date(Date.now());
    return `${now.getHours()}_${now.getMinutes()}_${now.getSeconds()}.OUT`
};
 
program
  .version('0.1')
  .option('-i, --input <path>','Input file path')
  .parse(process.argv);

const iterator = TestCaseIterator.create(program.input);
const fileStreamWriter = fs.createWriteStream(`./output/${getOutputFilename()}`, {
    flags: 'a' 
  });
let switchCount;

while(iterator.next()) {
	const { id, searchEngines, queries } = iterator.currentItem();
    switchCount = 0;
    let currentSearchEngine = findFurthest(searchEngines, queries);
    queries.forEach((query, index) => {
        if(query === currentSearchEngine) {
            currentSearchEngine = findFurthest(searchEngines, queries.slice(index));
            switchCount++;
        }
    });
    fileStreamWriter.write(`Case #${id}: ${switchCount}\n`);
}
fileStreamWriter.end();

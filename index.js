'use strict';

const program = require('commander');

program
  .version('0.1')
  .option('-i, --input <path>','Input file path')
  .parse(process.argv);

console.log(program.input);

// Read input file (https://medium.com/@dalaidunc/fs-readfile-vs-streams-to-read-text-files-in-node-js-5dd0710c80ea)

// Read test case count

// For each test case

//      Read search engine count

//      Read all search engines

//      Read query count

//      Read all queries

//      Is there a search engine that is not in the query list?

//          Yes! 

//              Select that search engine to run all queries

//          No!

//              Get last occurrences of all search engines in query list

//              Select search engine with largest last occurrence and set it to run queries

//      Set the switch engine count to zero

//      For each query

//          Does query match current selected search engine?

//              Yes!

//                  Is there a search engine that is not in the outstanding segment of the query list?

//                      Yes!

//                          Select that search engine to run all remaining queries

//                      No!

//                          Get last occurrences of all search engines in the outstanding segment of the query list

//                          Select search engine with largest last occurrence and set it to run remaining queries

//                  Increment the switch engine count

//              No!

//                  Run query

//      Write test case number and the switch engine count  (https://stackoverflow.com/questions/3459476/how-to-append-to-a-file-in-node/43370201#43370201)
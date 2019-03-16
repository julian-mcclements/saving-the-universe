const findFurthest = require('../src/findFurthest');

describe("Find furthest search engine for query collection", function() {

    it("Return undefined for empty search engine collection", async() => {
        const searchEngine = findFurthest([], [ "Googol" ])
        expect(searchEngine).toBe(undefined);
    });

    it("Return undefined for empty query collection", async() => {
        const searchEngine = findFurthest([ "Googol" ], [])
        expect(searchEngine).toBe(undefined);
    });

    it("Return undefined for empty search and query collections", async() => {
        const searchEngine = findFurthest([], [])
        expect(searchEngine).toBe(undefined);
    });

    it("Return first search engine not found in query collection", async() => {
        const testCases = [
            {   
                searchEngines: ["Googol Norway"], 
                queries: ["Googol Germany"],
                expectedResult: "Googol Norway"
            },
            {   
                searchEngines: ["Googol Norway", "Googol France"], 
                queries: ["Googol Germany", "Googol France"],
                expectedResult: "Googol Norway"
            }, 
            {   
                searchEngines: ["Googol France", "Googol Norway"], 
                queries: ["Googol Germany", "Googol France"],
                expectedResult: "Googol Norway"
            },                                     
            {   
                searchEngines: ["Googol Norway", "Googol Philippines"], 
                queries: ["Googol Germany"],
                expectedResult: "Googol Norway"
            }              
        ];

        testCases.forEach((testCase) => {
            const {searchEngines, queries, expectedResult} = testCase;
            const searchEngine = findFurthest(searchEngines, queries)
            expect(searchEngine).toBe(expectedResult);
        });
    });

    it("Return search engine with largest search index", async() => {
        const testCases = [
            {   
                searchEngines: ["Googol Norway"], 
                queries: ["Googol Norway"],
                expectedResult: "Googol Norway"
            },
            {   
                searchEngines: ["Googol Germany", "Googol Norway"], 
                queries: ["Googol Germany", "Googol Norway"],
                expectedResult: "Googol Norway"
            }             
        ];

        testCases.forEach((testCase) => {
            const {searchEngines, queries, expectedResult} = testCase;
            const searchEngine = findFurthest(searchEngines, queries)
            expect(searchEngine).toBe(expectedResult);
        });
    });

});
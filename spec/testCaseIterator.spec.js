const TestCaseIterator = require('../src/testCaseIterator');

describe("Parsing an input file", function() {

    const RESOURCE_FOLDER_PATH = './spec/resources/';

    it("Handle empty input file with no test cases", async() => {
        const iterator = TestCaseIterator.create(`${RESOURCE_FOLDER_PATH}empty.in`);
        expect(iterator.next()).toBe(false);
        expect(iterator.currentItem()).toBe(null);
    });

    it("Handle input file with one test case that has no engines or queries", async() => {
        const iterator = TestCaseIterator.create(`${RESOURCE_FOLDER_PATH}single-testcase-no-data.in`);
        expect(iterator.next()).toBe(true);
        const currentItem = iterator.currentItem();
        expect(currentItem.id).toBe(1);
        expect(currentItem.searchEngines.length).toBe(0);
        expect(currentItem.queries.length).toBe(0);
        expect(iterator.next()).toBe(false);
    });

    it("Handle input file with one test case that has multiple engines but no queries", async() => {
        const iterator = TestCaseIterator.create(`${RESOURCE_FOLDER_PATH}single-testcase-no-queries.in`);
        expect(iterator.next()).toBe(true);
        const currentItem = iterator.currentItem();
        expect(currentItem.id).toBe(1);
        expect(currentItem.searchEngines.length).toBe(2);
        expect(currentItem.searchEngines[0]).toBe('Googol USA');
        expect(currentItem.searchEngines[1]).toBe('Googol Japan');
        expect(currentItem.queries.length).toBe(0);
        expect(iterator.next()).toBe(false);
    });

    it("Handle input file with one test case that has multiple engines and one query", async() => {
        const iterator = TestCaseIterator.create(`${RESOURCE_FOLDER_PATH}single-testcase-one-query.in`);
        expect(iterator.next()).toBe(true);
        const currentItem = iterator.currentItem();
        expect(currentItem.id).toBe(1);
        expect(currentItem.searchEngines.length).toBe(2);
        expect(currentItem.searchEngines[0]).toBe('Googol USA');
        expect(currentItem.searchEngines[1]).toBe('Googol Japan');
        expect(currentItem.queries.length).toBe(1);
        expect(currentItem.queries[0]).toBe('Googol USA');
        expect(iterator.next()).toBe(false);
    });  
    
    it("Handle input file with one test case that has multiple engines and multiple queries", async() => {
        const iterator = TestCaseIterator.create(`${RESOURCE_FOLDER_PATH}single-testcase-multiple-queries.in`);
        expect(iterator.next()).toBe(true);
        const currentItem = iterator.currentItem();
        expect(currentItem.id).toBe(1);
        expect(currentItem.searchEngines.length).toBe(2);
        expect(currentItem.searchEngines[0]).toBe('Googol USA');
        expect(currentItem.searchEngines[1]).toBe('Googol Japan');
        expect(currentItem.queries.length).toBe(2);
        expect(currentItem.queries[0]).toBe('Googol USA');
        expect(currentItem.queries[1]).toBe('Googol USA');        
        expect(iterator.next()).toBe(false);
    });    
    
    it("Handle input file with two test cases", async() => {
        const iterator = TestCaseIterator.create(`${RESOURCE_FOLDER_PATH}two-testcases.in`);
        expect(iterator.next()).toBe(true);
        const item1 = iterator.currentItem();
        expect(item1.id).toBe(1);
        expect(item1.searchEngines.length).toBe(2);
        expect(item1.searchEngines[0]).toBe('Googol USA');
        expect(item1.searchEngines[1]).toBe('Googol Japan');
        expect(item1.queries.length).toBe(2);
        expect(item1.queries[0]).toBe('Googol USA');
        expect(item1.queries[1]).toBe('Googol USA');       
        expect(iterator.next()).toBe(true); 
        const item2 = iterator.currentItem();
        expect(item2.id).toBe(2);
        expect(item2.searchEngines.length).toBe(2);
        expect(item2.searchEngines[0]).toBe('Googol Sweden');
        expect(item2.searchEngines[1]).toBe('Googol Vietnam');
        expect(item2.queries.length).toBe(2);
        expect(item2.queries[0]).toBe('Googol Vietnam');
        expect(item2.queries[1]).toBe('Googol Vietnam');        
        expect(iterator.next()).toBe(false);
    });        

});
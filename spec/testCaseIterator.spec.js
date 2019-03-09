const { TestCaseIterator } = require('../src/testCaseIterator');

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

    it("Handle input file with one test case that has engines but no queries", async() => {
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

    it("Handle input file with one test case that has engines and one query", async() => {
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

});
const fs = require('fs');

class TestCase {

    constructor(id, searchEngines, queries){
        this.id = id;
        this.searchEngines = searchEngines;
        this.queries = queries;
    }
}

class TestCaseIterator {

    constructor(lines) {
        this._lines = lines;
        this._ubound = this._lines.length - 1;
        this._currentLineIndex = 0;
        this._testCaseCount = this._readLineAsInt();
        this._currentTestCaseId = 1;
    }

    _isOutOfRange() {
        return this._currentLineIndex >= this._ubound;
    }

    _readLine() {
        return this._lines[this._currentLineIndex++];
    }

    _readLineAsInt() {
        return parseInt(this._lines[this._currentLineIndex++], 10);
    }

    _readCollection() {
        const count = this._readLineAsInt();
        const collection = [];
        for(let index = 1; index <= count; index++){
            collection.push(this._readLine())
        }
        return collection;
    }

    currentItem() {
        if(this._isOutOfRange()) {
            return null;
        }
        const searchEngines = this._readCollection();
        const queries = this._readCollection();
        return new TestCase(this._currentTestCaseId++, searchEngines, queries);
    }

    next(){
        return !this._isOutOfRange();
    }

    static create(path) {
        try {  
            const content = fs.readFileSync(path, 'utf8');
            return new TestCaseIterator(content.split(/\r\n/));
        } catch(e) {
            console.log('Error:', e.message, e.stack);
        }
    }

}

exports.TestCaseIterator = TestCaseIterator;
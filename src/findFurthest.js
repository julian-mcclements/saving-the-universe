function findFurthest (searchEngines, queries) {
    if(searchEngines.length === 0 || queries.length === 0) {
        return undefined;
    }
    const firstIndexes = {};
    searchEngines.forEach((engine) => {
        firstIndexes[engine] = queries.indexOf(engine);
    });
    let max = -1;
    let furthest = undefined;
    for(const indexedEngine in firstIndexes) {
        const indexOf = firstIndexes[indexedEngine];
        if (indexOf === -1) {
            furthest = indexedEngine;
            break;
        }
        if (indexOf > max){
            furthest = indexedEngine;
            max = indexOf;
        }
    }
    return furthest
};

module.exports = findFurthest;
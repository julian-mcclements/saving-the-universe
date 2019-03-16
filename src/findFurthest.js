function findFurthest (searchEngines, queries) {
    if(searchEngines.length === 0 || queries.length === 0) {
        return undefined;
    }
    const indexes = {};
    searchEngines.forEach((engine) => {
        indexes[engine] = queries.indexOf(engine);
    });
    let max = -1;
    let furthest = undefined;
    for(const engine in indexes) {
        const index = indexes[engine];
        if (index === -1) {
            furthest = engine;
            break;
        }
        if (index > max){
            furthest = engine;
            max = index;
        }
    }
    return furthest
};

module.exports = findFurthest;
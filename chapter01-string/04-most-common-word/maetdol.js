/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    const SEPARATORS = ` !?',;.'`;
    const words = splitParagraphBy(
        SEPARATORS,
        paragraph.toLowerCase()
    );
    const counts = countOfWords(words);
    
    for(const bannedWord of banned) {
        counts[bannedWord] = -1;
    }
    
    const key = largestValuesKeyOfMap(counts);
    return key;
};

function splitParagraphBy(separators, paragraph) {
    const SEPARATOR_REGEX = new RegExp(`[${separators}]`, 'g');
    return paragraph
        .split(SEPARATOR_REGEX)
        .filter(v => v.length);
}

function countOfWords(words) {
    const map = {};
    for(const word of words) {
        const count = map[word];
        map[word] = count ? count + 1 : 1;
    }
    
    return map;
}

function largestValuesKeyOfMap(map) {
    let maxKey = null;
    for(const key in map) {
        if(maxKey === null) {
            maxKey = key;
            continue;
        }
        
        if(map[key] > map[maxKey]) {
            maxKey = key;
        }
    }
    
    return maxKey;
}
/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
    const letterLogs = logs.filter(isLetterLog);
    const digitLogs = logs.filter(isDigitLog);

    return [].concat(
        orderLetterLogs(letterLogs),
        digitLogs,
    );
};

function orderLetterLogs(logs) {
    return logs
        .map(parseLetterLog)
        .sort(compareLog)
        .map(toRawLog);
}

function isLetterLog(log) {
    return isNaN(log[log.length-1]);
}
    
function isDigitLog(log) {
    return !isNaN(log[log.length-1]);
}

function compareLog(a, b) {
    const A_IS_FIRST = -1;
    const A_IS_AFTER = 1;
    
    for(let i=1; i < a.length; i++) {
        const aIsSmaller = a[i] < b[i];
        if(aIsSmaller) return A_IS_FIRST;
        
        const aIsBigger = a[i] > b[i];
        if(aIsBigger) return A_IS_AFTER;
    }
    
    if(a.length > b.length) return A_IS_AFTER;
    if(a.length < b.length) return A_IS_FIRST;
    
    const aIdentifier = a[0];
    const bIdentifier = b[0];
    return aIdentifier < bIdentifier ? A_IS_FIRST : A_IS_AFTER;
}

function parseLetterLog(log) {
    return log.split(' ');
}

function toRawLog(parsedLog) {
    return parsedLog.join(' ');
}
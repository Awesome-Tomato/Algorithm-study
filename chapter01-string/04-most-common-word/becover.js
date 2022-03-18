/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
const mostCommonWord = function(paragraph, banned) {
    const hash = paragraph.replaceAll(/[\s|!|?|'|,|;|.]/g,' ').split(' ').reduce((acc, str)=>{
        const STR = str.toLowerCase().replaceAll(/[^a-z]/g, '');
        if(!STR) return acc;
        if(banned.indexOf(STR) > -1) return acc;
        acc[STR] ? acc[STR]++ : acc[STR] = 1;
        return acc;
    },{});
    const sortedAsc = Object.entries(hash);
    sortedAsc.sort((a,z)=>z[1]-a[1]);
    return sortedAsc[0][0];
};

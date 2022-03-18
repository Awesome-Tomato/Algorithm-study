/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
const mostCommonWord = function(paragraph, banned) {
    const hash = paragraph.split(' ').reduce((acc, str)=>{
        const STR = str.toLowerCase().replaceAll(/[^a-z]/g, '');
        if(!STR) return;
        if(banned.indexOf(STR) > -1) return;
        acc[STR] ? acc[STR]++ : acc[STR] = 1; //이라인이 에러남 ㅠ.ㅠ
        return acc;
    },{});
    const sortedAsc = Object.entries(hash).sort((a,z)=>a-z);
    return sortedAsc[0][0];
};

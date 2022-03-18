/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function (logs) {
  const letter = [];
  const digit = [];
  logs.forEach((log) => {
    const stringToArray = log.split(" ");
    if (!isNaN(stringToArray[1])) {
      digit.push(log);
    } else {
      letter.push(log);
    }
  });

  const sortedLetter = letter
    .reduce((arr, cur) => {
      const tmp = cur.split(" ");
      const newArray = [tmp[0], tmp.slice(1).join(" ")];
      arr.push(newArray);
      return arr;
    }, [])
    .sort((a, z) => {
      if (a[1] > z[1]) return 1;
      if (a[1] === z[1]) {
        if (a[0] > z[0]) return 1;
        if (a[0] < z[0]) return -1;
      }
      if (a[1] < z[1]) return -1;
    })
    .map((a) => a.join(" "));

  return [...sortedLetter, ...digit];
};

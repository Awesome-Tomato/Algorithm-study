/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let water = 0;
  let leftPillarIndex = height.findIndex((pillar) => pillar);
  if (leftPillarIndex === -1) return 0;

  let submergedPillarHeights = 0;
  for (let i = leftPillarIndex + 1; i < height.length; i++) {
    const leftPillar = height[leftPillarIndex];
    const pillar = height[i];

    if (pillar < leftPillar) {
      submergedPillarHeights += pillar;
      continue;
    }

    const distanceOfBothPillar = i - leftPillarIndex - 1;
    water += distanceOfBothPillar * leftPillar - submergedPillarHeights;
    submergedPillarHeights = 0;
    leftPillarIndex = i;
  }

  const halfEnd = leftPillarIndex;
  let rightPillarIndex = height.length - 1;
  submergedPillarHeights = 0;
  for (let i = height.length - 2; i >= halfEnd; i--) {
    const rightPillar = height[rightPillarIndex];
    const pillar = height[i];

    if (pillar < rightPillar) {
      submergedPillarHeights += pillar;
      continue;
    }

    const distanceOfBothPillar = rightPillarIndex - i - 1;
    water += distanceOfBothPillar * rightPillar - submergedPillarHeights;
    submergedPillarHeights = 0;
    rightPillarIndex = i;
  }

  return water;
};

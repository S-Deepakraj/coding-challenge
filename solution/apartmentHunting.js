function apartmentHunting(blocks, reqs) {
  let minDistance = Number.POSITIVE_INFINITY;
  let optimalBlock;
  //finding distance of any requirement from any blocks
  function findDistance(requirement, blockNo) {
    console.log(blocks[blockNo]);
    if (
      Object.keys(blocks[blockNo]).find(
        (key) =>
          key === requirement && //AN EXTRA CONFIRMATION: for checking whether a requirement details having the requirement or not
          blocks[blockNo][requirement] //MUST NEEDED: for checking whether the building provides the requirement or not
      )
    ) {
      return 0;
    } else {
      for (
        let i = blockNo, j = blockNo - 1;
        j >= 0 || i < blocks.length;
        i++, j--
      ) {
        if (
          i < blocks.length &&
          Object.keys(blocks[i]).find(
            (key) =>
              key === requirement && //AN EXTRA CONFIRMATION: for checking whether a requirement details having the requirement or not
              blocks[i][requirement] //MUST NEEDED: for checking whether the building provides the requirement or not
          )
        ) {
          return i - blockNo;
        }

        if (
          j >= 0 &&
          Object.keys(blocks[j]).find(
            (key) =>
              key === requirement && //AN EXTRA CONFIRMATION: for checking whether a requirement details having the requirement or not
              blocks[j][requirement] //MUST NEEDED: for checking whether the building provides the requirement or not
          )
        ) {
          return blockNo - j;
        }
      }
    }
  }
  for (let i = 0; i < blocks.length; i++) {
    let distance = [];
    for (let j = 0; j < reqs.length; j++) {
      distance.push(findDistance(reqs[j], i));
    }
    distance.sort((a, b) => {
      return b - a;
    });
    if (minDistance > distance[0]) {
      minDistance = distance[0];
      optimalBlock = i;
    }
  }
  return optimalBlock;
}

// Do not edit the line below.
exports.apartmentHunting = apartmentHunting;

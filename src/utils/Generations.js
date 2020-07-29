class Generations {
  static nextGeneration(currentGeneration) {
    const nextGen = currentGeneration.map((isAlive, cellId) => {
      let aliveNeighborsCount = this._count_alive_neighbors(cellId, currentGeneration);
      return this._set_next_status(isAlive, aliveNeighborsCount);
    });
    return nextGen;
  }

  static _count_alive_neighbors(cellId, currentGeneration) {
    let count = 0;
    for (const neighborId of this._find_neighbors(cellId)) {
      if (currentGeneration[neighborId]) {
        count++;
      }
    }
    return count;
  }

  static _find_neighbors(cellId) {
    const neighborLocations = [-26, -25, -24, -1, 1, 24, 25, 26];
    const neighbors = [];
    for (const location of neighborLocations) {
      const neighborId = cellId + parseInt(location);
      if (this._is_valid_id(cellId, neighborId)) {
        neighbors.push(neighborId);
      }
    }
    return neighbors;
  }

  static _is_valid_id(cellId, neighborId) {
    if (neighborId < 0 || neighborId > 624) {
      return false;
    }
    const cellRow = Math.floor(cellId / 25);
    const neighborRow = Math.floor(neighborId / 25);
    if (Math.abs(cellRow - neighborRow) > 1) {
      return false;
    }
    const cellCol = cellId % 25;
    const neighborCol = neighborId % 25;
    if (Math.abs(cellCol - neighborCol) > 1) {
      return false;
    }
    return true;
  }

  static _set_next_status(isAlive, aliveNeighborsCount) {
    if (isAlive) {
      if (aliveNeighborsCount < 2 || aliveNeighborsCount > 3) {
        return false;
      }
      return true;
    } else {
      if (aliveNeighborsCount === 3) {
        return true;
      }
      return false;
    }
  }
}

export default Generations;

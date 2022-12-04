export interface MapsData {
  maps: Map[]
}

export interface Map {
  id: string
  description: string
  terrains: string[]
  height: number
  width: number
}

const SHUFFLE_PROBA = 0.5

export const shuffleMap = (map: Map) => {
  if (Math.random() < SHUFFLE_PROBA) {
    reverseHorizontaly(map)
  }
  if (Math.random() < SHUFFLE_PROBA) {
    reverseVerticaly(map)
  }
  if (Math.random() < SHUFFLE_PROBA) {
    rotate(map)
  }
}

export const reverseHorizontaly = (map: Map) => {
  map.terrains.forEach(row => row.split('').reverse().join(''))
}

export const reverseVerticaly = (map: Map) => {
  map.terrains.reverse()
}

export const rotate = (map: Map) => {
  const {
    terrains,
    height,
    width
  } = map

  let result: string[] = []

  for (let y = 0 ; y < width; y++) {
    let resultRow = ''
    for (let x = 0 ; x < height; x++) {
      resultRow += terrains[x][y]
    }
    result.push(resultRow)
  }

  map.terrains = result
  map.height = width
  map.width = height
}
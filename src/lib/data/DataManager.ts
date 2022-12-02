import {
  Maps,
  Terrains,
} from './Data'

const load = async (url) => {
  const headers = new Headers()

  const request = {
    method: 'GET',
    headers
  }

  const response = await fetch(
    url,
    request
  )

  return await response.json()
}

export const loadMapsData = async () => {
  const maps = await load('/data/maps.json')
  maps.maps.forEach((map) => {
    // Check map
    const height = map.terrains.length
    const width = map.terrains[0].length
    if (map.terrains.some(row => row.length !== width)) {
      console.error(`Invalid map '${map.id}'`)
    } else {
      // Store map
      Maps[map.id] = {
        ...map,
        width,
        height
      }
    }
  })
}

export const loadTerrainsData = async () => {
  const terrains = await load('/data/terrains.json')
  terrains.terrains.forEach((terrain) => {
    Terrains[terrain.id] = terrain
  })
}

export const loadData = async () => {
  return Promise.all([
    loadMapsData(),
    loadTerrainsData(),
  ])
}
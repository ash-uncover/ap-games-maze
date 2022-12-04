import { DataManager } from '@uncover/games-common'

import CONFIG from 'config'

import { Map, MapsData } from './map.helper'
import { Terrain, TerrainsData } from './terrain.helper'

export const Maps: { [key: string]: Map } = {}
export const Terrains: { [key: string]: Terrain } = {}

const Data = new DataManager(`${CONFIG.AP_GAMES_MEMORY_PUBLIC}/data/`)

export const loadMapsData = async () => {
  const maps = await Data.load<MapsData>('maps.json')
  maps.maps.forEach((map: Map) => {
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
  const terrains = await Data.load<TerrainsData>('terrains.json')
  terrains.terrains.forEach((terrain: Terrain) => {
    Terrains[terrain.id] = terrain
  })
}

export const loadData = async () => {
  return Promise.all([
    loadMapsData(),
    loadTerrainsData(),
  ])
}
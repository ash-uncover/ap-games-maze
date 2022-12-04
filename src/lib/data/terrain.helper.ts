export interface TerrainsData {
  terrains: Terrain[]
}

export interface Terrain {
  id: string
  name: string
  color: string
  accessible: boolean
}

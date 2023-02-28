export interface GameBoardElement {
  id: string
  src: string
  x: number
  y: number
}

export interface GameBoardItem extends GameBoardElement {
  type: 'item'
  itemId: string
}

export interface GameBoardCharacter extends GameBoardElement {
  type: 'character'
  playerId: string
}

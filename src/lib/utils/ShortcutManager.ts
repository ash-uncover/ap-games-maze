import { ArrayUtils } from "@uncover/js-utils"

let SHORTCUTS_DOWN = {}
let SHORTCUTS_UP = {}
let SHORTCUTS_SETS: Shortcuts[] = []

document.addEventListener('keydown', (event) => {
  const shortcutId = getShortcutId(event)
  const shortcut = SHORTCUTS_DOWN[shortcutId]
  if (shortcut) {
    shortcut.callback()
  }
})

document.addEventListener('keyup', (event) => {
  const shortcutId = getShortcutId(event)
  const shortcut = SHORTCUTS_UP[shortcutId]
  if (shortcut) {
    shortcut.callback()
  }
})

export interface Shortcuts {
  id: string
  priority: number
  shortcuts: Shortcut[]
}

export interface ShortcutId {
  code: string
  altKey?: boolean
  ctrlKey?: boolean
  shiftKey?: boolean
}

export interface Shortcut extends ShortcutId {
  down?: boolean
  priority?: number
  callback: () => void
}

export const getShortcutId = (shortcut: ShortcutId) => {
  return `${shortcut.code}-${Boolean(shortcut.altKey)}-${Boolean(shortcut.ctrlKey)}-${Boolean(shortcut.shiftKey)}`
}
export const updateShortcuts = () => {
  SHORTCUTS_DOWN = SHORTCUTS_SETS.reduce((acc, shortcutSet) => {
    shortcutSet.shortcuts.forEach((shortcut) => {
      if (shortcut.down) {
        const shortcutId = getShortcutId(shortcut)
        const currentShortcut = acc[shortcutId]
        if (!currentShortcut || currentShortcut.priority < shortcutSet.priority) {
          acc[shortcutId] = shortcut
        }
      }
    })
    return acc
  }, {})
  SHORTCUTS_UP = SHORTCUTS_SETS.reduce((acc, shortcutSet) => {
    shortcutSet.shortcuts.forEach((shortcut) => {
      if (!shortcut.down) {
        const shortcutId = getShortcutId(shortcut)
        const currentShortcut = acc[shortcutId]
        if (!currentShortcut || currentShortcut.priority < shortcutSet.priority) {
          acc[shortcutId] = shortcut
        }
      }
    })
    return acc
  }, {})
}

const ShortcutManager = {
  addShortcuts: (shortcuts: Shortcuts) => {
    ShortcutManager.removeShortcuts(shortcuts.id, false)
    SHORTCUTS_SETS.push(shortcuts)
    updateShortcuts()
  },
  removeShortcuts: (id: string, update?: boolean) => {
    const set = SHORTCUTS_SETS.find(set => set.id === id)
    SHORTCUTS_SETS = ArrayUtils.removeElement(SHORTCUTS_SETS, set)
    if (update !== false) {
      updateShortcuts()
    }
  },
  reset: () => {
    SHORTCUTS_DOWN = {}
    SHORTCUTS_UP = {}
    SHORTCUTS_SETS.length = 0
  }
}

export default ShortcutManager
import { ArrayUtils } from "@uncover/js-utils"

let SHORTCUTS = {}
let SHORTCUTS_SETS: Shortcuts[] = []

document.addEventListener('keyup', (event) => {
  console.log(event)
  const shortcutId = getShortcutId(event)
  const shortcut = SHORTCUTS[shortcutId]
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
  priority?: number
  callback: () => void
}

export const getShortcutId = (shortcut: ShortcutId) => {
  return `${shortcut.code}-${Boolean(shortcut.altKey)}-${Boolean(shortcut.ctrlKey)}-${Boolean(shortcut.shiftKey)}`
}
export const updateShortcuts = () => {
  SHORTCUTS = SHORTCUTS_SETS.reduce((acc, shortcutSet) => {
    shortcutSet.shortcuts.forEach((shortcut) => {
      const shortcutId = getShortcutId(shortcut)
      const currentShortcut = acc[shortcutId]
      if (!currentShortcut || currentShortcut.priority < shortcutSet.priority) {
        acc[shortcutId] = shortcut
      }
    })
    return acc
  }, {})
  console.log(SHORTCUTS)
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
      console.log('update after ' + id)
      updateShortcuts()
    }
  },
  reset: () => {
    SHORTCUTS = {}
    SHORTCUTS_SETS.length = 0
  }
}

export default ShortcutManager
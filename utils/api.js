import { AsyncStorage } from 'react-native'
import { DECKS_STORAGE_KEY, formatDecksResults } from './_deck'

export function getDecks () {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(formatDecksResults)
}

export function getDeck (id) {
  return getDecks()
    .then((decks) => decks[id])
}

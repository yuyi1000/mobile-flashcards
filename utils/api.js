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

export function addCardToDeck (title, card) {
  getDeck(title)
    .then((deck) => {
      deck.questions.push(card)
      AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringfy({
        [title]: deck
      }))
    })
}

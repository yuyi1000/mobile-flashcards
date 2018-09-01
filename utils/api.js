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
  return getDeck(title)
    .then((deck) => {
      deck.questions.push(card)
      return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
        [title]: deck
      }))
    })
}

export function saveDeckTitle (title) {
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
    [title]: {
      title: [title],
      questions: [],
    }
  }))
}

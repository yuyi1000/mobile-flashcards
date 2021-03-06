import { AsyncStorage } from 'react-native'
import { DECKS_STORAGE_KEY, formatDecksResults } from './_deck'

export function getDecks () {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(formatDecksResults)
}

function showDecks () {
  AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then((data) => console.log(JSON.parse(data)))
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
        // .then(showDecks)
    })
}

export function saveDeckTitle (title) {
  // showDecks()
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
    [title]: {
      title,
      questions: [],
    }
  }))
    // .then(showDecks)
}

export function deleteDeck (id) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then((results) => {
      const data = JSON.parse(results)
      // console.log('deleting deck.');
      // console.log(data);
      data[id] = undefined
      delete data[id]
      AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data))
        // .then(showDecks)
    })
}

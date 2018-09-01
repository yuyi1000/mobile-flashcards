export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_NEW_QUESTION = 'ADD_NEW_QUESTION'
export const ADD_NEW_DECK = 'ADD_NEW_DECK'


export function receiveDecks (decks) {
  return {
    type: RECEIVE_DECKS,
    decks,
  }
}

export function addNewQuestion (title, question, answer ) {
  return {
    type: ADD_NEW_QUESTION,
    title,
    question,
    answer,
  }
}

export function addNewDeck (title) {
  return {
    type: ADD_NEW_DECK,
    title,
  }
}

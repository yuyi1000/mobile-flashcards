// data of sample decks is from Udacity Mobile Flashcards projects

import { AsyncStorage } from 'react-native'

export const DECKS_STORAGE_KEY = 'MobileFlashcards:decks'

let sampeDecks = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  },
  Python: {
    title: 'Python',
    questions: [
      {
        question: 'What is TensorFlow?',
        answer: 'A Python library for deep learning.'
      }
    ]
  },
}

export function formatDecksResults (result) {
  return result === null
    ? sampleDecks
    : JSON.parse(result)
}

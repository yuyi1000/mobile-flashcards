import { RECEIVE_DECKS, ADD_NEW_QUESTION, ADD_NEW_DECK, REMOVE_DECK } from '../actions'

export default function decks (state={}, action) {
  switch (action.type) {
    case RECEIVE_DECKS :
      return {
        ...state,
        ...action.decks,
      }
    case ADD_NEW_QUESTION :
      const { title, question, answer } = action
      return {
        ...state,
        [title]: {
          ...state[title],
          questions: state[title].questions.concat({
            question,
            answer,
          })
        }
      }
    case ADD_NEW_DECK :
      const { newDeckTitle } = action
      // console.log('add new deck.');
      // console.log(action);
      return {
        ...state,
        [newDeckTitle]: {
          title: newDeckTitle,
          questions: [],
        }
      }
    case REMOVE_DECK :
      const { id } = action
      // console.log(action);
      const { [id]: value, ...rest } = state
      // console.log('remove deck');
      // console.log(rest);
      // console.log(value);
      return rest
    default :
      return state
  }
}

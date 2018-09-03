import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import DeckList from './components/DeckList'
import EachDeck from './components/EachDeck'
import NewDeck from './components/NewDeck'
import NewQuestion from './components/NewQuestion'
import Quiz from './components/Quiz'
import QuizResult from './components/QuizResult'
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import logger from 'redux-logger'
import { setLocalNotification } from './utils/helper'
import { FontAwesome, Ionicons } from '@expo/vector-icons'



const DecksNavigator = createStackNavigator(
  {
    DeckList: {
      screen: DeckList,
    },
    EachDeck: {
      screen: EachDeck,
    },
    NewQuestion: {
      screen: NewQuestion,
    },
    Quiz: {
      screen: Quiz,
    },
    QuizResult: {
      screen: QuizResult
    },
  }
)

const Tabs = createBottomTabNavigator(
  {
    Decks: {
      screen: DecksNavigator,
      navigationOptions: {
        tabBarLabel: 'Decks',
        tabBarIcon: ({ tintColor }) => <Ionicons name='ios-card-outline' size={30} color={tintColor} />
      }
    },
    AddDeck: {
      screen: NewDeck,
      navigationOptions: {
        tabBarLabel: 'Add Deck',
        tabBarIcon: ({ tintColor }) => <Ionicons name='ios-add-circle-outline' size={30} color={tintColor} />
      }
    },
  }
)

const store = createStore(
  reducer,
  applyMiddleware(logger)
)


export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification()
  }
  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <Tabs />
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

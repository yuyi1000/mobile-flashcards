import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import DeckList from './components/DeckList'
import EachDeck from './components/EachDeck'
import NewDeck from './components/NewDeck'
import Error from './components/Error'
import NewQuestion from './components/NewQuestion'
import Quiz from './components/Quiz'
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'



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
    Error: {
      screen: Error,
    },
    Quiz: {
      screen: Quiz,
    },
  }
)

const Tabs = createBottomTabNavigator(
  {
    Decks: {
      screen: DecksNavigator,
    },
    AddDeck: {
      screen: NewDeck,
    },
  }
)

export default class App extends React.Component {
  render() {
    return (

      <View style={{flex: 1}}>
        <Tabs />
      </View>
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

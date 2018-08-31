import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import DeckList from './components/DeckList'
import EachDeck from './components/EachDeck'
import NewDeck from './components/NewDeck'
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'

const Tabs = createBottomTabNavigator(
  {
    Decks: {
      screen: DeckList,
    },
    AddDeck: {
      screen: NewDeck,
    },
  },
)

const MainNav = createStackNavigator(
  {
    EachDeck: {
      screen: EachDeck,
    },
    Decks: {
      screen: DeckList,
    },

  }
)

export default class App extends React.Component {
  render() {
    return (
      // <View style={styles.container}>
      //   <Text>haha</Text>
      //   <Text>haha</Text>
      //   <Text>haha</Text>
      //   <MainNav />
      //
      // </View>
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

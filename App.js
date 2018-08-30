import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DeckList from './components/DeckList'
import EachDeck from './components/EachDeck'
import NewDeck from './components/NewDeck'
import { createBottomTabNavigator } from 'react-navigation'



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

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Tabs />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

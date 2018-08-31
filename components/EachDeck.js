import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { getDeck } from '../utils/api'

class EachDeck extends Component {

  state = {
    deck: {},
    ready: false,
  }

  componentDidMount() {
    const deckTitle = this.props.navigation.getParam('deckTitle', 'NO-TITLE')
    getDeck(deckTitle)
      .then((deck) => this.setState({deck, ready: true}))
  }

  render() {
    const { deck, ready } = this.state

    if (!ready) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>
            Still loading data.
          </Text>
        </View>
      )
    }


    console.log(deck);
    const title = deck.title
    const numberOfCards = deck.questions.length
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>
          This is EachDeck View.
        </Text>
        <Text>{title}</Text>
        <Text>{numberOfCards}</Text>
      </View>
    )
  }
}

export default EachDeck

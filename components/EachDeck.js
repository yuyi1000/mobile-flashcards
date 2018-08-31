import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { getDeck } from '../utils/api'

class EachDeck extends Component {

  state = {
    deck: {}
  }

  componentDidMount() {
    const deckTitle = this.props.navigation.getParam('deckTitle', 'NO-TITLE')
    getDeck(deckTitle)
      .then((deck) => this.setState({deck}))
  }

  render() {
    const { deck } = this.state
    console.log(deck)
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>
          This is EachDeck View.
        </Text>
      </View>
    )
  }
}

export default EachDeck

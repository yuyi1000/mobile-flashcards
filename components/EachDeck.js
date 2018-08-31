import React, { Component } from 'react'
import { View, Text } from 'react-native'

class EachDeck extends Component {

  state = {
    deck: {}
  }

  render() {

    const deckTitle = this.props.navigation.getParam('deckTitle', 'NO-TITLE')
    // console.log(deckTitle)
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

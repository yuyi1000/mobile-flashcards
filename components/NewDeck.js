import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

class NewDeck extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>
          This is NewDeck View.
        </Text>
        <Text>
          What is the title of your new deck?
        </Text>


      </View>

    )
  }

}

export default NewDeck

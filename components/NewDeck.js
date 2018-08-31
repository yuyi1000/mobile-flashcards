import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

class NewDeck extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>
          This is NewDeck View.
        </Text>
        <Button
          title='Go to Decks tab'
          onPress={() => this.props.navigation.navigate('Decks')}
        />
      </View>

    )
  }

}

export default NewDeck

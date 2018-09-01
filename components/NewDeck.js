import React, { Component } from 'react'
import { View, Text, Button, TextInput } from 'react-native'

class NewDeck extends Component {
  state = {
    title: '',
  }

  submit = () => {
    console.log('new deck submitted!');
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>
          This is NewDeck View.
        </Text>
        <Text>
          What is the title of your new deck?
        </Text>
        <TextInput style={{ margin: 10, borderWidth: 1 }}
          placeholder='Deck Title'
          onChangeText={(text) => this.setState({title: text})}
        />
        <Button
          title='Create Deck'
          onPress={this.submit}
        />

      </View>

    )
  }

}

export default NewDeck

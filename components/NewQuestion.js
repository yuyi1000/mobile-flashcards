import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'

class NewQuestion extends Component {
  state = {
    question: '',
    answer: '',
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>
          This is NewQuestion View.
        </Text>
        <TextInput
          placeholder='Question'
          onChangeText={(text) => this.setState({question: text})}
        />
      </View>
    )
  }

}

export default NewQuestion

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
        <TextInput style={{ margin: 10, borderWidth: 1 }}
          placeholder='Question'
          onChangeText={(text) => this.setState({question: text})}
        />
        <TextInput style={{ margin: 10, borderWidth: 1 }}
          placeholder='Answer'
          onChangeText={(text) => this.setState({answer: text})}
        />        
      </View>
    )
  }

}

export default NewQuestion

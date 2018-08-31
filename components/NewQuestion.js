import React, { Component } from 'react'
import { View, Text, TextInput, Button } from 'react-native'

class NewQuestion extends Component {
  state = {
    question: '',
    answer: '',
  }

  submit = () => {
    const { question, answer } = this.state
    if (question === '') {
      alert('Please input question before submit.')
      return
    }

    if (answer === '') {
      alert('Please input answer before submit.')
      return
    }

    

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
        <Button
          title='Submit'
          onPress={this.submit}
        />
      </View>
    )
  }

}

export default NewQuestion

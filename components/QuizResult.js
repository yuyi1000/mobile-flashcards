import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

class QuizResult extends Component {
  render() {

    const { correctedQuestions, answeredQuestions } = this.props.navigation.state.params

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>
          This is QuizResult View.
        </Text>
        <Text>
          You got {correctedQuestions} out of {answeredQuestions} questions answered correctly.
        </Text>
        <Button
          title='Start again'
          onPress={() => this.props.navigation.goBack()}
        />
        <Button
          title='Check another deck'
          onPress={() => this.props.navigation.navigate('DeckList')}
        />
      </View>

    )
  }

}

export default QuizResult

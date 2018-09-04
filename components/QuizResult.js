import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import TextButton from './TextButton'

class QuizResult extends Component {
  render() {

    const { correctedQuestions, answeredQuestions } = this.props.navigation.state.params

    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          You got {correctedQuestions} out of {answeredQuestions} questions answered correctly.
        </Text>

        <TextButton onPress={() => this.props.navigation.goBack()}>
          Start again
        </TextButton>

        <TextButton onPress={() => this.props.navigation.navigate('DeckList')}>
          Check another deck
        </TextButton>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    padding: 20,
  },
})

export default QuizResult

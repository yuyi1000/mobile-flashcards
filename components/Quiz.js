import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { connect } from 'react-redux'


class Quiz extends Component {

  state = {
    ready: false,
    answeredQuestions: 0,
    maxAnsweredQuestions: 0,
    correctedQuestions: 0,
    showQuestion: true,
    deck: {}
  }

  componentDidMount() {
    const deck = this.props.navigation.getParam('deck', {})
    console.log(deck);
    this.setState({
      deck,
      ready: true,
      maxAnsweredQuestions: deck.questions.length,
    })
  }

  correctBtn = () => {
    const { answeredQuestions, deck, correctedQuestions } = this.state
    const { navigation } = this.props
    if (answeredQuestions === deck.questions.length) {
      navigation.navigate('QuizResult', {
        correctedQuestions: correctedQuestions + 1,
        answeredQuestions,
      })
    }
    this.setState((prevState) => ({
      correctedQuestions: prevState.correctedQuestions + 1,
      showQuestion: true,
    }))
  }




  render() {
    const { showQuestion, deck, answeredQuestions, ready } = this.state
    if (!ready) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>
            Still loading.
          </Text>
        </View>
      )
    }
    // console.log(deck);
    // console.log(this.state);
    if (showQuestion) {
      const questionText = deck.questions[answeredQuestions].question
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>
            This is Quiz View.
          </Text>
          <Text>
            {questionText}
          </Text>
          <Button
            title='Answer'
            onPress={() => this.setState((prevState) => ({
              answeredQuestions: prevState.answeredQuestions + 1,
              showQuestion: false,
            }))}
          />

        </View>
      )
    }

    const answerText = deck.questions[answeredQuestions - 1].answer
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>
          This is Quiz View.
        </Text>
        <Text>
          {answerText}
        </Text>
        <Button
          title='Correct'
          onPress={this.correctBtn}
        />
        <Button
          title='Incorrect'
          onPress={() => this.setState(() => ({
            showQuestion: true,
          }))}
        />

      </View>
    )
  }
}

function mapStateToProps (decks) {
  return {
    decks,
  }
}

export default connect(mapStateToProps)(Quiz)

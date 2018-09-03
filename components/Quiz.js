import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { connect } from 'react-redux'

class Quiz extends Component {



  state = {
    ready: false,
    answeredQuestions: 0,
    correctedQuestions: 0,
    totalQuestions: 0,
    showQuestion: true,
    deck: {}
  }

  componentDidMount() {
    const deck = this.props.navigation.getParam('deck', {})
    console.log(deck);
    this.setState({
      deck,
      ready: true,
      totalQuestions: deck.questions.length
    })
  }

  correctBtn = () => {
    const { answeredQuestions, deck, correctedQuestions } = this.state
    const { navigation } = this.props
    if (answeredQuestions + 1 === deck.questions.length) {
      navigation.navigate('QuizResult', {
        correctedQuestions: correctedQuestions + 1,
        answeredQuestions: answeredQuestions + 1,
      })
      this.setState({
        answeredQuestions: 0,
        correctedQuestions: 0,
        showQuestion: true,
      })
    }
    else {
      this.setState((prevState) => ({
        correctedQuestions: prevState.correctedQuestions + 1,
        answeredQuestions: prevState.answeredQuestions + 1,
        showQuestion: true,
      }))
    }
  }

  incorrectBtn = () => {
    const { answeredQuestions, deck, correctedQuestions } = this.state
    const { navigation } = this.props
    if (answeredQuestions + 1 === deck.questions.length) {
      navigation.navigate('QuizResult', {
        correctedQuestions,
        answeredQuestions: answeredQuestions + 1,
      })
      this.setState({
        answeredQuestions: 0,
        correctedQuestions: 0,
        showQuestion: true,
      })
    }
    else {
      this.setState((prevState) => ({
        answeredQuestions: prevState.answeredQuestions + 1,
        showQuestion: true,
      }))
    }
  }

  render() {
    const { showQuestion, deck, answeredQuestions, ready, totalQuestions } = this.state
    const remainingQuestions = totalQuestions - answeredQuestions
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

    if (totalQuestions === 0) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>
            Sorry, you cannot take a quiz because there are no cards in the deck.
          </Text>
        </View>
      )
    }

    if (showQuestion) {
      const questionIndex = answeredQuestions === totalQuestions ? answeredQuestions - 1 : answeredQuestions
      const questionText = deck.questions[questionIndex].question

      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>
            This is Quiz View.
          </Text>
          <Text>
            {remainingQuestions}/{totalQuestions}
          </Text>
          <Text>
            {questionText}
          </Text>
          <Button
            title='Answer'
            onPress={() => this.setState((prevState) => ({
              showQuestion: false,
            }))}
          />

        </View>
      )
    }

    const answerText = deck.questions[answeredQuestions].answer
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>
          This is Quiz View.
        </Text>
        <Text>
          {remainingQuestions}/{totalQuestions}
        </Text>
        <Text>
          {answerText}
        </Text>
        <Button
          title='Question'
          onPress={() => this.setState({showQuestion: true})}
        />
        <Button
          title='Correct'
          onPress={this.correctBtn}
        />
        <Button
          title='Incorrect'
          onPress={this.incorrectBtn}
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

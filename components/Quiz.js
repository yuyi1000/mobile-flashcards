import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'


class Quiz extends Component {

  state = {
    ready: false,
    answeredQuestions: 0,
    showQuestion: true,
    deck: {}
  }

  componentDidMount() {
    const deck = this.props.navigation.getParam('deck', {})
    console.log(deck);
    this.setState({
      deck,
      ready: true,
    })
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


        </View>
      )
    }

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>
          This is Quiz View.
        </Text>
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

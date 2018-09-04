import React, { Component } from 'react'
import { View, Text, Button, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

class Quiz extends Component {

  static navigationOptions = {
    title: 'Quiz',
  }

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
          <Text style={{ position: 'absolute', top: 5, left: 5, }}>
            {remainingQuestions}/{totalQuestions}
          </Text>
          <Text style={{ fontSize: 25, padding: 20 }}>
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
        <Text style={{ position: 'absolute', top: 5, left: 5, }}>
          {remainingQuestions}/{totalQuestions}
        </Text>
        <Text style={{ fontSize: 25, padding: 20 }}>
          {answerText}
        </Text>
        <Button
          title='Question'
          onPress={() => this.setState({showQuestion: true})}
        />

        <TouchableOpacity
          style={{
            width: 200,
            marginRight:40,
            marginLeft:40,
            marginTop:10,
            paddingTop:10,
            paddingBottom:10,
            backgroundColor:'#1E6738',
            borderRadius:10,
            borderWidth: 1,
            borderColor: '#fff'
          }}
          onPress={this.correctBtn}
          >
          <Text style={{
            color:'#fff',
            textAlign:'center',
            paddingLeft : 10,
            paddingRight : 10
          }}
          >
            Correct
          </Text>
        </TouchableOpacity>


        <TouchableOpacity
          style={{
            width: 200,
            marginRight:40,
            marginLeft:40,
            marginTop:10,
            paddingTop:10,
            paddingBottom:10,
            backgroundColor:'#DC143C',
            borderRadius:10,
            borderWidth: 1,
            borderColor: '#fff'
          }}
          onPress={this.incorrectBtn}
          >
          <Text style={{
            color:'#fff',
            textAlign:'center',
            paddingLeft : 10,
            paddingRight : 10
          }}
          >
            Incorrect
          </Text>
        </TouchableOpacity>


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

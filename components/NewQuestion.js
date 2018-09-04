import React, { Component } from 'react'
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native'
import { addCardToDeck } from '../utils/api'
import { connect } from 'react-redux'
import { addNewQuestion } from '../actions'


class NewQuestion extends Component {

  static navigationOptions = {
    title: 'Add Card',
  }

  state = {
    question: '',
    answer: '',
  }

  submit = () => {
    const { question, answer } = this.state
    const { navigation, dispatch } = this.props
    const deckTitle = navigation.getParam('deckTitle', 'NO-TITLE')
    if (question === '') {
      alert('Please input question before submit.')
      return
    }

    if (answer === '') {
      alert('Please input answer before submit.')
      return
    }

    addCardToDeck(deckTitle, {
      question,
      answer,
    })

    dispatch(addNewQuestion(deckTitle, question, answer))

    navigation.goBack()

  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.textInput}
          placeholder='Question'
          onChangeText={(text) => this.setState({question: text})}
        />
        <TextInput
          style={styles.textInput}
          placeholder='Answer'
          onChangeText={(text) => this.setState({answer: text})}
        />

        <TouchableOpacity
          style={{
            width: 200,
            marginRight:40,
            marginLeft:40,
            marginTop:50,
            paddingTop:10,
            paddingBottom:10,
            backgroundColor:'#1E6738',
            borderRadius:10,
            borderWidth: 1,
            borderColor: '#fff'
          }}
          onPress={this.submit}
          >
          <Text style={{
            color:'#fff',
            textAlign:'center',
            paddingLeft : 10,
            paddingRight : 10
          }}
          >
            Submit
          </Text>
        </TouchableOpacity>

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
  textInput: {
    margin: 10,
    borderWidth: 1,
    backgroundColor: 'white',
    width: 300,
    height: 30,
  },
})


export default connect()(NewQuestion)

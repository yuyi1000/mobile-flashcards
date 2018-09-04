import React, { Component } from 'react'
import { View, Text, Button, TouchableOpacity } from 'react-native'

class QuizResult extends Component {
  render() {

    const { correctedQuestions, answeredQuestions } = this.props.navigation.state.params

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 20, padding: 20, }}>
          You got {correctedQuestions} out of {answeredQuestions} questions answered correctly.
        </Text>

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
          onPress={() => this.props.navigation.goBack()}
          >
          <Text style={{
            color:'#fff',
            textAlign:'center',
            paddingLeft : 10,
            paddingRight : 10
          }}
          >
            Start again
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
            backgroundColor:'#1E6738',
            borderRadius:10,
            borderWidth: 1,
            borderColor: '#fff'
          }}
          onPress={() => this.props.navigation.navigate('DeckList')}
          >
          <Text style={{
            color:'#fff',
            textAlign:'center',
            paddingLeft : 10,
            paddingRight : 10
          }}
          >
            Check another deck
          </Text>
        </TouchableOpacity>



      </View>

    )
  }

}

export default QuizResult

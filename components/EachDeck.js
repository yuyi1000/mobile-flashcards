import React, { Component } from 'react'
import { View, Text, Button, TouchableOpacity } from 'react-native'
import { getDeck, deleteDeck } from '../utils/api'
import { connect } from 'react-redux'
import { removeDeck } from '../actions'
import { clearLocalNotification, setLocalNotification } from '../utils/helper'


class EachDeck extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('deckTitle', 'undefined'),
    }
  }

  deleteDeckBtn = (id) => {
    const { navigation, dispatch } = this.props
    deleteDeck(id)
    dispatch(removeDeck(id))
    navigation.goBack()

  }

  shouldComponentUpdate (nextProps) {
    return nextProps.navigation.state.params.deckTitle in nextProps.decks
  }

  startQuizBtn = (deck) => {
    clearLocalNotification()
      .then(setLocalNotification)

    this.props.navigation.navigate('Quiz', {
      deck,
    })
  }

  render() {

    const { navigation, decks } = this.props
    const deckTitle = navigation.getParam('deckTitle', 'NO-TITLE')
    const deck = decks[deckTitle]
    const title = deck.title
    const numberOfCards = deck.questions.length
    const displayNumber = numberOfCards + (numberOfCards === 1 ? ' card' : ' cards')
    // console.log(title);
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 20 }}>{title}</Text>
        <Text>{displayNumber}</Text>
        <Button
          title='Add Card'
          onPress={() => this.props.navigation.navigate('NewQuestion', {
            deckTitle: title,
          })}
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
          onPress={() => this.props.navigation.navigate('NewQuestion', {
            deckTitle: title,
          })}
          >
          <Text style={{
            color:'#fff',
            textAlign:'center',
            paddingLeft : 10,
            paddingRight : 10
          }}
          >
            Add Card
          </Text>
        </TouchableOpacity>

        <Button
          title='Start Quiz'
          onPress={() => this.startQuizBtn(deck)}
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
          onPress={() => this.startQuizBtn(deck)}
          >
          <Text style={{
            color:'#fff',
            textAlign:'center',
            paddingLeft : 10,
            paddingRight : 10
          }}
          >
            Start Quiz
          </Text>
        </TouchableOpacity>

        <Button
          title='Delete Deck'
          onPress={() => this.deleteDeckBtn(title)}
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
          onPress={() => this.deleteDeckBtn(title)}
          >
          <Text style={{
            color:'#fff',
            textAlign:'center',
            paddingLeft : 10,
            paddingRight : 10
          }}
          >
            Delete Deck
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

export default connect(mapStateToProps)(EachDeck)

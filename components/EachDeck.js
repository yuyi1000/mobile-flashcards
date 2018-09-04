import React, { Component } from 'react'
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native'
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
      <View style={styles.container}>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.numberText}>{displayNumber}</Text>

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

        <TouchableOpacity
          style={{
            width: 200,
            marginRight:40,
            marginLeft:40,
            marginTop:10,
            paddingTop:10,
            paddingBottom:10,
            backgroundColor:'white',
            borderRadius:10,
            borderWidth: 1,
            borderColor: '#fff'
          }}
          onPress={() => this.deleteDeckBtn(title)}
          >
          <Text style={{
            color:'red',
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


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 20,
  },
  numberText: {
    marginBottom: 50
  },
})

function mapStateToProps (decks) {
  return {
    decks,
  }
}

export default connect(mapStateToProps)(EachDeck)

import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { getDeck, deleteDeck } from '../utils/api'
import { connect } from 'react-redux'
import { removeDeck } from '../actions'


class EachDeck extends Component {

  deleteDeckBtn = (id) => {
    const { navigation, dispatch } = this.props
    deleteDeck(id)
    dispatch(removeDeck(id))
    navigation.goBack()

  }

  shouldComponentUpdate (nextProps) {
    return nextProps.navigation.state.params.deckTitle in nextProps.decks
  }

  render() {

    const { navigation, decks } = this.props
    const deckTitle = navigation.getParam('deckTitle', 'NO-TITLE')
    const deck = decks[deckTitle]
    const title = deck.title
    const numberOfCards = deck.questions.length
    // console.log(title);
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>
          This is EachDeck View.
        </Text>
        <Text>{title}</Text>
        <Text>{numberOfCards}</Text>
        <Button
          title='Add Card'
          onPress={() => this.props.navigation.navigate('NewQuestion', {
            deckTitle: title,
          })}
        />
        <Button
          title='Start Quiz'
          onPress={() => this.props.navigation.navigate('Quiz')}
        />
        <Button
          title='Delete Deck'
          onPress={() => this.deleteDeckBtn(title)}
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

export default connect(mapStateToProps)(EachDeck)

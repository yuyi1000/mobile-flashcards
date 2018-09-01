import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { getDeck } from '../utils/api'
import { connect } from 'react-redux'


class EachDeck extends Component {


  render() {

    const { navigation, decks } = this.props
    const deckTitle = navigation.getParam('deckTitle', 'NO-TITLE')
    const deck = decks[deckTitle]

    const title = deck.title
    const numberOfCards = deck.questions.length
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
          onPress={() => this.props.navigation.goBack()}
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

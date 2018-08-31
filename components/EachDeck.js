import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { getDeck } from '../utils/api'

class EachDeck extends Component {

  state = {
    // deck: {},
    ready: false,
  }

  componentDidMount() {
    const deckTitle = this.props.navigation.getParam('deckTitle', 'NO-TITLE')
    getDeck(deckTitle)
      .then(() => this.setState({ready: true}))
  }

  render() {
    const { ready } = this.state
    // console.log(deck);
    // const deckTitle = this.props.navigation.getParam('deckTitle', 'NO-TITLE')



    if (!ready) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>
            Still loading data.
          </Text>
        </View>
      )
    }

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
      </View>
    )
  }
}

export default EachDeck

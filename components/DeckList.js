import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { fetchDecksResults } from '../utils/api'


class DeckList extends Component {

  state = {
    decks: null,
  }

  componentDidMount() {
    fetchDecksResults()
      .then((decks) => this.setState({decks}))
  }

  render() {
    const { decks } = this.state
    console.log(decks)
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>
          This is DeckList View.
          {/* {decks} */}
        </Text>
      </View>
    )
  }

}

export default DeckList

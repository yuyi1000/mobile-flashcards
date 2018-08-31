import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
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
    // console.log(decks)
    if (decks === null) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>
            There are no decks.
          </Text>
        </View>
      )
    }

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>
          This is DeckList View.
          {/* {decks} */}
        </Text>

        {Object.keys(decks).map((key) => {

          const title = decks[key].title
          const numberOfCards = decks[key].questions.length
          const displayInfo = title + '\n' + numberOfCards + (numberOfCards === 1 ? ' card' : ' cards')
          return (
            <Button key={key}
              title={displayInfo}
              onPress={() => this.props.navigation.navigate('EachDeck')}
            />
          )
        })}
      </View>
    )

  }

}

export default DeckList

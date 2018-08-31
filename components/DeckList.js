import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { getDecks } from '../utils/api'
import { connect } from 'react-redux'
import { receiveDecks } from '../actions'


class DeckList extends Component {

  state = {
    ready: false,
  }

  componentDidMount() {
    const { dispatch } = this.props
    getDecks()
      .then((decks) => dispatch(receiveDecks(decks)))
      .then(() => this.setState({ready: true}))
  }

  render() {
    const { ready } = this.state
    if (!ready) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>
            Still loading.
          </Text>
        </View>
      )
    }

    const { decks } = this.props
    console.log(decks);
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
              onPress={() => this.props.navigation.navigate('EachDeck', {
                deckTitle: title
              })}
            />
          )
        })}
      </View>
    )

  }

}

function mapStateToProps(decks) {
  return {
    decks,
  }
}


export default connect(mapStateToProps)(DeckList)

import React, { Component } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
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
        <View style={styles.container}>
          <Text>
            Still loading.
          </Text>
        </View>
      )
    }

    const { decks } = this.props
    // console.log(decks);
    return (
      <View style={styles.container}>

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

function mapStateToProps(decks) {
  return {
    decks,
  }
}

export default connect(mapStateToProps)(DeckList)

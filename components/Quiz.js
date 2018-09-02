import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'


class Quiz extends Component {

  state = {
    answeredQuestions: 0,
    deck: {}
  }

  componentDidMount() {
    const deck = this.props.navigation.getParam('deck', {})
    this.setState({deck})
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>
          This is Quiz View.
        </Text>
      </View>
    )
  }
}

function mapStateToProps (decks) {
  return {
    decks,
  }
}

export default connect(mapStateToProps)(Quiz)

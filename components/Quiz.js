import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'


class Quiz extends Component {
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

export default connect()(Quiz)

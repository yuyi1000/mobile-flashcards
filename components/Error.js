import React, { Component } from 'react'
import { View, Text } from 'react-native'

class Error extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>
          This is Error View.
        </Text>
      </View>
    )
  }

}

export default Error

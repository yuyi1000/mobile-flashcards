import React, { Component } from 'react'
import { View, Text, Button, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { saveDeckTitle } from '../utils/api'
import { addNewDeck } from '../actions'


class NewDeck extends Component {

  state = {
    title: '',
  }

  submit = () => {
    // console.log('new deck submitted!');
    const { title } = this.state
    const { dispatch, navigation } = this.props
    if (title === '') {
      alert('Please input a title for a new deck.')
      return
    }
    saveDeckTitle(title)
    dispatch(addNewDeck(title))
    this.setState({title: ''})
    navigation.navigate('DeckList')
  }

  render() {
    // console.log(this.state);
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>
          This is NewDeck View.
        </Text>
        <Text>
          What is the title of your new deck?
        </Text>
        <TextInput style={{ margin: 10, borderWidth: 1 }}
          placeholder='Deck Title'
          value={this.state.title}
          onChangeText={(text) => this.setState({title: text})}
        />
        <Button
          title='Create Deck'
          onPress={this.submit}
        />

      </View>

    )
  }

}

export default connect()(NewDeck)

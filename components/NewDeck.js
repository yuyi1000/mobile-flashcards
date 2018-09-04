import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { saveDeckTitle } from '../utils/api'
import { addNewDeck } from '../actions'
import TextButton from './TextButton'

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
      <View style={styles.container}>
        <Text style={styles.text}>
          What is the title of your new deck?
        </Text>
        <TextInput style={styles.textInput}
          placeholder='Deck Title'
          value={this.state.title}
          onChangeText={(text) => this.setState({title: text})}
        />

        <TextButton onPress={this.submit}>
          Create Deck
        </TextButton>

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
  text: {
    fontSize: 20,
  },
  textInput: {
    margin: 10,
    borderWidth: 1,
    backgroundColor: 'white',
    width: 300,
    height: 30
  },
})

export default connect()(NewDeck)

import React, { Component } from 'react'
import { View, Text, Button, TextInput, TouchableOpacity } from 'react-native'
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
        <Text style={{ fontSize: 20,  }}>
          What is the title of your new deck?
        </Text>
        <TextInput style={{ margin: 10, borderWidth: 1, backgroundColor: 'white', width: 300, height: 30, }}
          placeholder='Deck Title'
          value={this.state.title}
          onChangeText={(text) => this.setState({title: text})}
        />

        <TouchableOpacity
          style={{
            marginRight:40,
            marginLeft:40,
            marginTop:10,
            paddingTop:10,
            paddingBottom:10,
            backgroundColor:'#1E6738',
            borderRadius:10,
            borderWidth: 1,
            borderColor: '#fff'
          }}
          onPress={this.submit}
          >
          <Text style={{
            color:'#fff',
            textAlign:'center',
            paddingLeft : 10,
            paddingRight : 10
          }}
          >
            Create Deck
          </Text>
        </TouchableOpacity>


      </View>

    )
  }

}

export default connect()(NewDeck)

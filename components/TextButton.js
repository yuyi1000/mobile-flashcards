import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function TextButton ({ children, onPress, buttonStyle = {}, textStyle = {}, }) {
  return (
    <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
      <Text style={[styles.text, textStyle]}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    width: 200,
    marginRight:40,
    marginLeft:40,
    marginTop:10,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#1E6738',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  text: {
    color:'#fff',
    textAlign:'center',
    paddingLeft : 10,
    paddingRight : 10    
  }
})

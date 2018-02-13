import React, { Component } from 'react'
import { Platform, Text, View, ScrollView } from 'react-native'

import styles from './styles'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu'
})

export default class App extends Component {
  render() {
    console.log('+++')

    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.welcome}>
              Welcome to React Native! 2
            </Text>
            <Text style={styles.instructions}>
              To get started, edit App.js
            </Text>
            <Text style={styles.instructions}>
              {instructions}
            </Text>
          </View>
        </ScrollView>
      </View>
    )
  }
}

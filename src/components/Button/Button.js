import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import PropTypes from 'prop-types'

import styles from './styles'

export default class Button extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired
  }

  render() {
    const { onPress, text } = this.props

    return (
      <View style={styles.view}>
        <TouchableOpacity
          onPress={onPress}
          style={styles.buttonContainer}>
          <View style={styles.buttonView}>
            <Text style={styles.buttonText}>
              {text}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

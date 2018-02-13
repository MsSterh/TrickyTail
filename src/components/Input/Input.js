import React, { Component } from 'react'
import { TextInput } from 'react-native'
import PropTypes from 'prop-types'

import styles from './styles'

export default class Input extends Component {
  static propTypes = {
    value: PropTypes.string,
    onChangeText: PropTypes.func,
    onSubmitText: PropTypes.func
  }

  onChangeText = text => {
    const { onChangeText } = this.props

    if (onChangeText) {
      onChangeText(text)
    }
  }

  render() {
    const { value, onSubmitText } = this.props

    return (
      <TextInput
        style={styles.textInput}
        value={value}
        autoCapitalize='none'
        onChangeText={this.onChangeText}
        onSubmitEditing={onSubmitText}
        underlineColorAndroid='transparent'
      />
    )
  }
}

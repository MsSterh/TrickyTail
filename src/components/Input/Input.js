import React, { Component } from 'react'
import { TextInput } from 'react-native'
import PropTypes from 'prop-types'

import styles from './styles'
import { COLORS } from '../../constants'
import { isDefined } from '../../libs/utils'

export default class Input extends Component {
  static propTypes = {
    value: PropTypes.string,
    maxLength: PropTypes.number,
    className: PropTypes.string,
    keyboardType: PropTypes.string,
    autoFocus: PropTypes.bool,
    onChangeText: PropTypes.func,
    onSubmitText: PropTypes.func,
    onBlur: PropTypes.func
  }

  onChangeText = text => {
    const { onChangeText } = this.props

    if (onChangeText) {
      onChangeText(text)
    }
  }

  render() {
    const { value, onSubmitText, onBlur, maxLength, keyboardType,
      className, autoFocus } = this.props

    return (
      <TextInput
        style={[styles.textInput, className === 'Red' ? styles.textInputRed : '']}
        value={value}
        autoFocus={isDefined(autoFocus) ? autoFocus : true}
        autoCapitalize='none'
        onChangeText={this.onChangeText}
        onSubmitEditing={onSubmitText}
        onBlur={onBlur}
        selectionColor={className === 'Red' ? COLORS.WHITE : COLORS.RED}
        underlineColorAndroid='transparent'
        maxLength = {maxLength || 200}
        keyboardType={keyboardType || 'default'}
      />
    )
  }
}

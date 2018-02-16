import React, { Component } from 'react'
import { TextInput } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import styles from './styles'
import { setInputField } from '../../actions/input'

const mapStateToProps = state => ({
  text: state.input.text
})

class Input extends Component {
  static propTypes = {
    value: PropTypes.string,
    onChangeText: PropTypes.func,
    onSubmitText: PropTypes.func,
    setInputField: PropTypes.func.isRequired,
    text: PropTypes.string
  }

  onChangeText = text => {
    this.props.setInputField(text)
  }

  render() {
    const { text, onSubmitText } = this.props

    return (
      <TextInput
        style={styles.textInput}
        value={text}
        autoCapitalize='none'
        onChangeText={this.onChangeText}
        onSubmitEditing={onSubmitText}
        underlineColorAndroid='transparent'
      />
    )
  }
}

export default connect(mapStateToProps, { setInputField })(Input)

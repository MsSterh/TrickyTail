import React, { Component } from 'react'
import { Text, View } from 'react-native'
import PropTypes from 'prop-types'

import styles from './styles'
import Hint from '../Hint'
import Button from '../Button'
import Input from '../Input'

export default class Page0 extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired
  }

  render() {
    const { onClick } = this.props

    return (
      <View style={styles.containerView}>
        <Text style={styles.title}>
          Page 0
        </Text>
        <Text style={styles.paragraph}>
          Press Cmd+R to reload,\n Cmd+D or shake for dev menu
        </Text>

        <Input
          onSubmitText={onClick}
        />
        <Button
          text="Click on me"
          onPress={onClick}
        />

        <Hint
          count="1"
          text="Number 1"
        />
        <Hint
          count="2"
          text="Number 2"
        />
      </View>
    )
  }
}

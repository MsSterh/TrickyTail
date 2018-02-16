import React, { Component } from 'react'
import { Text, View } from 'react-native'
import PropTypes from 'prop-types'

import styles from './styles'

export default class HintCounter extends Component {
  static propTypes = {
    page: PropTypes.number.isRequired,
    hint: PropTypes.number.isRequired
  }

  render() {
    const { page, hint } = this.props

    return (
      <View>
        { page > 0 ?
          <View style={styles.hintView}>
            <Text style={styles.hintText}>
              Подсказок: {hint}
            </Text>
          </View>
          :
          null}
      </View>
    )
  }
}

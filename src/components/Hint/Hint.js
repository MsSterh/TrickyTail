import React, { Component } from 'react'
import { Text, TouchableHighlight, View } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { incHint } from '../../actions/hint'

import styles from './styles'

class Hint extends Component {
  static propTypes = {
    count: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      clicked: false
    }
  }

  onPress = () => {
    this.setState({
      clicked: true
    })
    this.props.incHint()
  }

  render() {
    const { count, text } = this.props

    return (
      <View style={styles.container}>
        { !this.state.clicked ?
          <TouchableHighlight
            onPress={this.onPress}
            style={styles.link}>
            <View style={styles.linkView}>
              <Text style={styles.linkText}>
                Подсказка №{count} ⇨
              </Text>
            </View>
          </TouchableHighlight>
          :
          <Text style={styles.text}>
            "{text}"
          </Text>
        }
      </View>
    )
  }
}

export default connect(null, { incHint })(Hint)
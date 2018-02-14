import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { setPage } from '../../actions/page'

import styles from './styles'
import Hint from '../Hint'
import Button from '../Button'
import Input from '../Input'

const mapStateToProps = state => ({
  page: state.page.current,
  hint: state.hint.current
})

class App extends Component {
  static propTypes = {
    setPage: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    hint: PropTypes.number.isRequired
  }

  stepInc = () => {
    this.props.setPage(this.props.page + 1)
  }

  render() {
    const { page, hint } = this.props
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.containerView}>
            <Text style={styles.welcome}>
              Welcome to React Native!
            </Text>
            <Text style={styles.instructions}>
              {this.props.page}
            </Text>
            <Text style={styles.instructions}>
              Press Cmd+R to reload,\n Cmd+D or shake for dev menu
            </Text>

            <Input
              onSubmitText={this.stepInc}
            />
            <Button
              text="Click on me"
              onPress={this.stepInc}
            />

            <Hint
              count="1"
              text="Number 1"
            />
            <Hint
              count="2"
              text="Number 2"
            />
            <Hint
              count="2"
              text="Number 2"
            />
            { page > 0 ?
              <View style={styles.hintView}>
                <Text style={styles.hintText}>
                  Подсказок: {hint}
                </Text>
              </View>
              :
              null}
          </View>
        </ScrollView>
      </View>
    )
  }
}

export default connect(mapStateToProps, { setPage })(App)

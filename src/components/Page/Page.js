import React, { Component } from 'react'
import { View, ScrollView, Image, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { setPage } from '../../actions/page'
import { setInputField } from '../../actions/input'

import styles from './styles'
import SelectPage from './SelectPage'
import HintCounter from '../HintCounter'
import Stash from '../Stash'
import { KEYS, TEST_KEYS } from '../../constants'

import bgImage from '../../images/bg/bg.jpg'

const mapStateToProps = state => ({
  page: state.page.current,
  hint: state.hint.current,
  input: state.input.text
})

class App extends Component {
  static propTypes = {
    setPage: PropTypes.func.isRequired,
    setInputField: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    hint: PropTypes.number.isRequired,
    input: PropTypes.string
  }

  scrollToTop = () => {
    setTimeout(() => {
      this.scrollView.scrollTo({x: 0, y: 0, animated: true})
    }, 50)
  }

  goToNextPage = () => {
    this.props.setPage(this.props.page + 1)
    this.scrollToTop()
  }

  checkKey = () => {
    if (this.props.input.toLowerCase() === TEST_KEYS[this.props.page].toLowerCase() ||
      this.props.input.toLowerCase() === KEYS[this.props.page].toLowerCase()) {
      this.props.setInputField('')
      this.goToNextPage()
    } else {
      this.props.setInputField('не-а')
    }
  }

  render() {
    const { page, hint } = this.props

    return (
      <View style={styles.container}>
        <Image
          source={bgImage}
          style={[styles.bg, styles.bgTop]}
          resizeMode='repeat'
        />
        <KeyboardAvoidingView behavior={'padding'}>
          <Stash />
          <ScrollView
            ref={ref => {
              this.scrollView = ref
            }}>
            <Image
              source={bgImage}
              style={styles.bg}
              resizeMode='repeat'
            />
            <SelectPage
              page={page}
              onClick={this.checkKey}
              goToNextPage={this.goToNextPage}
            />
            <HintCounter
              page={page}
              hint={hint}
            />
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    )
  }
}

export default connect(mapStateToProps, {
  setPage,
  setInputField
})(App)

import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { setPage } from '../../actions/page'
import { setInputField } from '../../actions/input'

import styles from './styles'
import SelectPage from './SelectPage'
import HintCounter from '../HintCounter'
import { KEYS } from '../../constants'

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

  goToNextPage = () => {
    if (this.props.input === KEYS[this.props.page]) {
      this.props.setInputField('')
      this.props.setPage(this.props.page + 1)
    } else {
      this.props.setInputField('не-а')
    }
  }

  render() {
    const { page, hint } = this.props

    return (
      <View style={styles.container}>
        <ScrollView>
          <SelectPage
            page={page}
            onClick={this.goToNextPage}
          />
          <HintCounter
            page={page}
            hint={hint}
          />
        </ScrollView>
      </View>
    )
  }
}

export default connect(mapStateToProps, {
  setPage,
  setInputField
})(App)

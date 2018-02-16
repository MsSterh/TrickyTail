import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { setPage } from '../../actions/page'

import styles from './styles'
import SelectPage from './SelectPage'
import HintCounter from '../HintCounter'

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
          <SelectPage
            page={page}
            onClick={this.stepInc}
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

export default connect(mapStateToProps, { setPage })(App)

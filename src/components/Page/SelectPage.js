import React, { Component } from 'react'
import { PropTypes } from 'prop-types'

import Page0 from './Page0'
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'
import Page12 from './Page12'

export default class SelectPage extends Component {
  static propTypes = {
    page: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired
  }

  components = {
    page0: Page0,
    page1: Page1,
    page2: Page2,
    page3: Page3,
    page12: Page12
  }

  render() {
    const PageName = this.components[`page${this.props.page}`] || this.components.page12

    return (
      <PageName
        onClick={this.props.onClick}
      />
    )
  }
}

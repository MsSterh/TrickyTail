import React, { Component } from 'react'
import { PropTypes } from 'prop-types'

import Page0 from './Page0'
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'
import Page4 from './Page4'
import Page5 from './Page5'
import Page6 from './Page6'
import Page7 from './Page7'
import Page8 from './Page8'
import Page9 from './Page9'

export default class SelectPage extends Component {
  static propTypes = {
    page: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
    goToNextPage: PropTypes.func.isRequired
  }

  components = {
    page0: Page0,
    page1: Page1,
    page2: Page2,
    page3: Page3,
    page4: Page4,
    page5: Page5,
    page6: Page6,
    page7: Page7,
    page8: Page8,
    page9: Page9
  }

  render() {
    const PageName = this.components[`page${this.props.page}`] || this.components.page9

    return (
      <PageName
        onClick={this.props.onClick}
        goToNextPage={this.props.goToNextPage}
      />
    )
  }
}

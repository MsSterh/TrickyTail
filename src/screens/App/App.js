import React from 'react'
import { KeyboardAvoidingView, Platform } from 'react-native'

import Page from '../../components/Page'
import styles from './styles'

const App = () => {
  return (
    <KeyboardAvoidingView
      behavior= {(Platform.OS === 'ios') ? 'padding' : null}
      style={styles.container}>
      <Page />
    </KeyboardAvoidingView>
  )
}

export default App

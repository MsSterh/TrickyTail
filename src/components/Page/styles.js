import { StyleSheet, Dimensions } from 'react-native'
import { COLORS, SIZES } from '../../constants'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.BG,
    minHeight: Dimensions.get('window').height
  },
  welcome: {
    fontSize: SIZES.TITLE,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    fontSize: SIZES.FONT,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
})

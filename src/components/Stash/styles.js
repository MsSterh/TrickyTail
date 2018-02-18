import { StyleSheet } from 'react-native'
import { SIZES } from '../../constants'

export default StyleSheet.create({
  view: {
    position: 'absolute',
    top: 40,
    left: 0,
    right: 0
  },
  titleText: {
    fontSize: SIZES.TITLE,
    textAlign: 'center'
  },
  text: {
    fontSize: SIZES.FONT,
    textAlign: 'center'
  }
})

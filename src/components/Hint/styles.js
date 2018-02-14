import { StyleSheet } from 'react-native'
import { COLORS, SIZES } from '../../constants'

export default StyleSheet.create({
  container: {
  },
  link: {
    backgroundColor: 'transparent'
  },
  linkView: {
    paddingTop: 30
  },
  linkText: {
    backgroundColor: 'transparent',
    color: COLORS.FONT_LIGHT,
    fontSize: SIZES.HINT - 2,
    fontWeight: 'bold'
  },
  text: {
    backgroundColor: 'transparent',
    color: COLORS.FONT,
    fontSize: SIZES.HINT,
    paddingTop: 30
  }
})

import { StyleSheet } from 'react-native'
import { COLORS, SIZES } from '../../constants'

export default StyleSheet.create({
  container: {
    marginHorizontal: SIZES.PADDING
  },
  link: {
    backgroundColor: 'transparent'
  },
  linkView: {
    paddingTop: 30
  },
  linkText: {
    backgroundColor: 'transparent',
    color: COLORS.FONT_DARK,
    fontSize: SIZES.HINT - 2,
    fontWeight: 'bold'
  },
  textView: {
    paddingTop: 30
  },
  title: {
    backgroundColor: 'transparent',
    color: COLORS.FONT,
    fontSize: SIZES.HINT - 4,
    fontWeight: 'bold'
  },
  text: {
    backgroundColor: 'transparent',
    color: COLORS.FONT,
    fontSize: SIZES.HINT
  }
})

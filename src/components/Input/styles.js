import { StyleSheet } from 'react-native'
import { COLORS, SIZES } from '../../constants'

export default StyleSheet.create({
  textInput: {
    alignSelf: 'stretch',
    backgroundColor: 'transparent',
    borderColor: COLORS.INPUT,
    borderWidth: 1,
    borderRadius: 25,
    color: COLORS.FONT,
    fontSize: 14,
    height: 50,
    marginTop: 25,
    marginHorizontal: SIZES.PADDING,
    paddingLeft: 20,
    paddingRight: 20,
    paddingVertical: 0
  }
})

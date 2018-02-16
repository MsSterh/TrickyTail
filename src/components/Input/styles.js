import { StyleSheet } from 'react-native'
import { COLORS } from '../../constants'

export default StyleSheet.create({
  textInput: {
    alignSelf: 'stretch',
    backgroundColor: 'transparent',
    borderColor: COLORS.INPUT,
    borderWidth: 1,
    borderRadius: 25,
    color: COLORS.FONTFONT,
    fontSize: 14,
    height: 50,
    paddingLeft: 20,
    paddingRight: 20,
    paddingVertical: 0
  }
})

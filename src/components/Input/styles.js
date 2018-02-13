import { StyleSheet } from 'react-native'
import { COLORS } from '../../constants'

export default StyleSheet.create({
  textInput: {
    alignSelf: 'stretch',
    backgroundColor: 'transparent',
    borderColor: COLORS.BLUE,
    borderWidth: 1,
    borderRadius: 25,
    color: COLORS.BLUE,
    fontSize: 14,
    height: 50,
    paddingLeft: 20,
    paddingRight: 20,
    paddingVertical: 0
  },
  textInputRed: {
    backgroundColor: COLORS.RED,
    borderColor: COLORS.RED,
    color: COLORS.WHITE
  }
})

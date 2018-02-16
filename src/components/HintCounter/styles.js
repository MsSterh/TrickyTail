import { StyleSheet } from 'react-native'
import { COLORS } from '../../constants'

export default StyleSheet.create({
  hintView: {
    backgroundColor: COLORS.FONT,
    borderRadius: 20,
    position: 'absolute',
    top: 20,
    right: 10
  },
  hintText: {
    color: COLORS.BG,
    fontSize: 12,
    paddingVertical: 5,
    paddingHorizontal: 10
  }
})

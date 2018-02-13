import { StyleSheet } from 'react-native'
import { COLORS } from '../../constants'

export default StyleSheet.create({
  buttonContainer: {
    backgroundColor: COLORS.RED,
    borderRadius: 25,
    height: 50
  },
  buttonView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50
  },
  buttonText: {
    backgroundColor: 'transparent',
    color: COLORS.WHITE,
    fontSize: 13,
    textAlign: 'center'
  }
})

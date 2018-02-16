import { StyleSheet } from 'react-native'
import { COLORS } from '../../constants'

export default StyleSheet.create({
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  buttonContainer: {
    backgroundColor: COLORS.INPUT,
    borderRadius: 25,
    height: 50,
    paddingHorizontal: 20
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
    fontSize: 16,
    textAlign: 'center'
  }
})

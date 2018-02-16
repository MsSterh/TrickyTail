import { StyleSheet, Dimensions } from 'react-native'
import { COLORS, SIZES } from '../../constants'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BG,
    minHeight: Dimensions.get('window').height
  },
  containerView: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
    minHeight: Dimensions.get('window').height
  },
  title: {
    fontSize: SIZES.TITLE,
    textAlign: 'center',
    marginVertical: 10
  },
  paragraph: {
    fontSize: SIZES.FONT,
    textAlign: 'center',
    color: COLORS.FONT,
    marginVertical: 10
  },
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

import { StyleSheet, Dimensions } from 'react-native'
import { COLORS, SIZES } from '../../constants'

const WIDTH = Dimensions.get('window').width - 2 * SIZES.PADDING

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BG,
    minHeight: Dimensions.get('window').height
  },
  containerView: {
    flex: 1,
    paddingVertical: SIZES.PADDING,
    minHeight: Dimensions.get('window').height
  },
  bg: {
    flex: 1,
    width: Dimensions.get('window').width,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    resizeMode: 'repeat'
  },
  title: {
    color: COLORS.TITLE,
    fontSize: SIZES.TITLE,
    textAlign: 'center',
    paddingHorizontal: SIZES.PADDING,
    marginVertical: 10
  },
  paragraph: {
    color: COLORS.FONT,
    fontSize: SIZES.FONT,
    lineHeight: SIZES.FONT * 1.4,
    paddingHorizontal: SIZES.PADDING,
    marginVertical: 10
  },
  paragraphCenter: {
    textAlign: 'center'
  },
  textLine: {
    flex: 1
  },
  foxImg: {
    flex: 1,
    alignItems: 'center'
  },
  fox1: {
    height: WIDTH * 669 / 703,
    width: WIDTH
  }
})

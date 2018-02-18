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
    bottom: 0
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
  fox0: {
    height: WIDTH * 669 / 703,
    width: WIDTH
  },
  fox1: {
    height: WIDTH * 389 / 691,
    width: WIDTH
  },
  fox2: {
    height: WIDTH * 503 / 709,
    width: WIDTH
  },
  fox3: {
    height: WIDTH * 720 / 678,
    width: WIDTH
  },
  fox4: {
    height: WIDTH * 791 / 635,
    width: WIDTH
  },
  fox5: {
    height: WIDTH * 579 / 709,
    width: WIDTH
  },
  fox6: {
    height: WIDTH * 313 / 706,
    width: WIDTH
  },
  fox7: {
    height: WIDTH * 310 / 740,
    width: WIDTH
  },
  fox8: {
    height: WIDTH * 663 / 750,
    width: WIDTH
  },
  fox9: {
    height: WIDTH * 270 / 704,
    width: WIDTH
  }
})

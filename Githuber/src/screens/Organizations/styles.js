import { StyleSheet } from 'react-native'

import { metrics, colors } from '˜/styles'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.ligther,
  },

  loading: {
    marginTop: metrics.baseMargin * 2,
  },

  columnWrapper: {
    justifyContent: 'space-between',
    marginHorizontal: metrics.baseMargin * 2,
  },
})

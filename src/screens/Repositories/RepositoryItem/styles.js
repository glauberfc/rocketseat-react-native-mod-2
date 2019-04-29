import { StyleSheet } from 'react-native'

import { metrics, colors } from '˜/styles'

export default StyleSheet.create({
  container: {
    marginTop: metrics.baseMargin,
    marginHorizontal: metrics.baseMargin * 2,
    padding: metrics.basePadding,
    borderRadius: metrics.baseRadius,
    backgroundColor: colors.white,
  },

  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },

  infoContainer: {
    flexDirection: 'row',
    marginTop: metrics.baseMargin,
  },

  info: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: metrics.baseMargin,
  },

  infoIcon: {
    color: colors.dark,
  },

  infoText: {
    marginLeft: metrics.baseMargin / 2,
    fontSize: 12,
    color: colors.dark,
  },
})

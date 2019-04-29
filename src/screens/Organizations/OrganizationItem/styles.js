import { StyleSheet } from 'react-native'

import { metrics, colors } from '˜/styles'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    maxWidth: (metrics.screenWidth - 60) / 2,
    marginTop: metrics.baseMargin,
    padding: metrics.basePadding,
    borderRadius: metrics.baseRadius,
    backgroundColor: colors.white,
  },

  avatar: {
    width: 50,
    height: 50,
  },

  title: {
    marginTop: metrics.baseMargin,
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.darker,
  },
})

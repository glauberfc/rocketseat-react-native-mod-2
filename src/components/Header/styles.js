import { StyleSheet } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'

import { metrics, colors } from '˜/styles'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 45 + getStatusBarHeight(),
    paddingTop: getStatusBarHeight(),
    paddingHorizontal: metrics.basePadding,
    borderBottomWidth: 1,
    borderBottomColor: colors.light,
    backgroundColor: colors.white,
  },

  left: {},

  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.darker,
  },

  icon: {
    color: colors.darker,
  },
})

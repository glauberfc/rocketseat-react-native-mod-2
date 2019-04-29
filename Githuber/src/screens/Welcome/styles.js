import { StyleSheet } from 'react-native'

import { colors, metrics } from '˜/styles'

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: metrics.basePadding * 2,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: colors.secondary,
  },

  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.white,
  },

  text: {
    marginTop: metrics.baseMargin,
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 21,
    color: colors.white,
  },

  error: {
    marginTop: metrics.baseMargin,
    textAlign: 'center',
    color: colors.danger,
  },

  form: {
    marginTop: metrics.baseMargin * 2,
  },

  input: {
    height: 44,
    paddingHorizontal: metrics.basePadding,
    borderRadius: metrics.baseRadius,
    backgroundColor: colors.white,
  },

  button: {
    height: 44,
    marginTop: metrics.baseMargin,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: metrics.baseRadius,
    backgroundColor: colors.primary,
  },

  buttonText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
})

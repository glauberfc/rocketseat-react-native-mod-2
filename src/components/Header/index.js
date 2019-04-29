import React from 'react'
import { withNavigation } from 'react-navigation'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  AsyncStorage,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import styles from './styles'

const Header = ({ title, navigation }) => {
  async function signOut() {
    await AsyncStorage.clear()

    navigation.navigate('Welcome')
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.left} />
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={signOut}>
        <Icon name="exchange" size={16} style={styles.icon} />
      </TouchableOpacity>
    </View>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
}

export default withNavigation(Header)

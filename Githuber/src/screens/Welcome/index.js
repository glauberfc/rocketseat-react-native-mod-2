import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  AsyncStorage,
  ActivityIndicator,
} from 'react-native'

import styles from './styles'
import api from '˜/services/api'

class Welcome extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  }

  state = {
    username: '',
    loading: false,
    error: false,
  }

  signIn = async () => {
    const { username } = this.state
    const { navigation } = this.props

    this.setState({ loading: true })

    try {
      await this.checkUserExists(username)
      await this.saveUser(username)
      navigation.navigate('Repositories')
    } catch (error) {
      this.setState({ loading: false, error: true })
    }
  }

  checkUserExists = async username => {
    const user = await api.get(`/users/${username}`)

    return user
  }

  saveUser = async username => {
    await AsyncStorage.setItem('@Githuber:username', username)
  }

  render() {
    const { username, loading, error } = this.state

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.text}>Enter with a Github username</Text>

        {error && <Text style={styles.error}>This user do not exists</Text>}

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            value={username}
            onChangeText={text => this.setState({ username: text })}
            autoFocus
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Github username"
            underlineColorAndroid="transparent"
          />

          <TouchableOpacity style={styles.button} onPress={this.signIn}>
            {loading ? (
              <ActivityIndicator size="small" color="#FFF" />
            ) : (
              <Text style={styles.buttonText}>Continue</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
export default Welcome

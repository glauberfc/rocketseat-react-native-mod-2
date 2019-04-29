import React, { Component } from 'react'
import { View, AsyncStorage, ActivityIndicator, FlatList } from 'react-native'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/FontAwesome'

import Header from '../../components/Header'
import api from '˜/services/api'
import styles from './styles'
import OrganizationItem from './OrganizationItem'

const TabIcon = ({ tintColor }) => (
  <Icon name="building" size={20} color={tintColor} />
)

TabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
}

export default class Organizations extends Component {
  static navigationOptions = {
    tabBarIcon: TabIcon,
  }

  state = {
    data: [],
    loading: true,
    refreshing: true,
  }

  componentDidMount() {
    this.loadOrganizations()
  }

  loadOrganizations = async () => {
    this.setState({ refreshing: true })

    const username = await AsyncStorage.getItem('@Githuber:username')

    const { data } = await api.get(`/users/${username}/orgs`)

    this.setState({ data, loading: false, refreshing: false })
  }

  renderListItem = ({ item }) => <OrganizationItem organization={item} />

  renderList = () => {
    const { data, refreshing } = this.state

    return (
      <FlatList
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderListItem}
        onRefresh={this.loadOrganizations}
        refreshing={refreshing}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
      />
    )
  }

  render() {
    const { loading } = this.state

    return (
      <View style={styles.container}>
        <Header title="Organizations" />
        {loading ? (
          <ActivityIndicator style={styles.loading} />
        ) : (
          this.renderList()
        )}
      </View>
    )
  }
}

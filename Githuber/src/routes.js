import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator,
} from 'react-navigation'

import Welcome from './screens/Welcome'
import Repositories from './screens/Repositories'
import Organizations from './screens/Organizations'
import { colors } from './styles'

const createNavigator = (userLogged = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Welcome,
        User: createBottomTabNavigator(
          {
            Repositories,
            Organizations,
          },
          {
            tabBarOptions: {
              showIcon: true,
              showLabel: false,
              activeTintColor: colors.white,
              inactiveTintColor: colors.lightTransparent,
              style: {
                backgroundColor: colors.secondary,
              },
            },
          }
        ),
      },
      {
        initialRouteName: userLogged ? 'User' : 'Welcome',
      }
    )
  )

export default createNavigator

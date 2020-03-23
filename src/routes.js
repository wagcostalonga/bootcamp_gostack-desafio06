/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import Users from './pages/Users';
import Repository from './pages/Repository';

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator
      screenOptions = {{
        headerTitleAlign: 'center',
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: '#7159c1'
        }
      }}
      >
        <Screen
          name="Main"
          component={Main}
          options={{ title: 'Usuários'}}
          />
        <Screen
          name="Users"
          component={Users}
          options={({ route }) => ({ title: route.params.user.name })}
        />
        <Screen
          name="Repository"
          component={Repository}
          options={({ route }) => ({ title: route.params.repository.name })}
          />
      </Navigator>
    </NavigationContainer>
  );
}

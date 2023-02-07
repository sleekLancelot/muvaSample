import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Tabs } from '../../../Navigations'
import { Text, View } from 'react-native';

const Stack = createStackNavigator()

function Location() {
    return (
      <View style={{ height: '100%' }}>
        <Text>Location</Text>
        <Tabs />
      </View>
    );
  }

const LocationHomeScreen = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen
          name='LocationScreen'
          component={Location}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name='BottomTab'
          component={Tabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
  )
}

export {LocationHomeScreen}
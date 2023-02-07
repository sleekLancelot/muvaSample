import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Tabs } from '../../../Navigations'
import { Text, View } from 'react-native';

const Stack = createStackNavigator()

function Book() {
  return (
    <View style={{ height: '100%' }}>
      <Text>Book</Text>
      <Tabs />
    </View>
  );
}

const BookHomeScreen = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen
          name='BookScreen'
          component={Book}
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

export {BookHomeScreen}
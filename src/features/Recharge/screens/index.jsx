import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Tabs } from '../../../Navigations'
import { Text, View } from 'react-native';

const Stack = createStackNavigator()

function Recharge() {
  return (
    <View style={{ height: '100%' }}>
      <Text>Recharge</Text>
      <Tabs />
    </View>
  );
}

const RechargeHomeScreen = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen
          name='RechargeScreen'
          component={Recharge}
          options={{ headerShown: false }}
        />

        {/* <Stack.Screen
          name='BottomTab'
          component={Tabs}
          options={{ headerShown: false }}
        /> */}
      </Stack.Navigator>
  )
}

export {RechargeHomeScreen}
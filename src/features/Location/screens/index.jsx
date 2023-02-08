import React from 'react'
import { Button, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Tabs } from '../../../Navigations'
import { PreviousLocation } from './PreviousLocation'
import { CheckScreen } from './CheckScreen'
import { MyLocation } from './MyLocation'

const Stack = createStackNavigator()

function Location({navigation}) {
    return (
    <View style={{ height: '100%' }}>
      <View
        style={{
          display: 'flex',
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <View style={{
          marginVertical: 10,
        }}>
          <Text>This is the Locations screen</Text>
          <Button
            title="Go to CheckScreen Page"
            onPress={() => navigation.navigate("CheckScreen")}
          />
        </View>

        <View style={{
          marginVertical: 10,
        }}>
          <Text>This is the My Locations screen</Text>
          <Button
            title="Go to MyLocation Page"
            onPress={() => navigation.navigate("MyLocation")}
          />
        </View>

        <View style={{
          marginVertical: 10,
        }}>
          <Text>This is the Previous Locations screen</Text>
          <Button
            title="Go to Previous Locations Screen"
            onPress={() => navigation.navigate("PreviousLocation")}
          />
        </View>
      </View>
      <Tabs />
    </View>
    );
  }

const LocationHomeScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#fc8900",
        },
        headerTintColor: "white",
        headerBackTitle: "Back",
      }}
    >
        <Stack.Screen
          name='Location'
          component={Location}
          // options={{ headerShown: false }}
        />

        <Stack.Screen
          name='CheckScreen'
          component={CheckScreen}
          // options={{ headerShown: false }}
        />

        <Stack.Screen
          name='MyLocation'
          component={MyLocation}
          // options={{ headerShown: false }}
        />

        <Stack.Screen
          name='PreviousLocation'
          component={PreviousLocation}
          // options={{ headerShown: false }}
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
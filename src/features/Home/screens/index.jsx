import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Button, Text, View } from 'react-native'
import { OurCompany } from './OurCompany'
import { WhatWeDo } from './WhatWeDo'

const Stack = createStackNavigator()

const HomeScreen = ({navigation}) => {
  return (
    <View style={{
      // height: '100%',
      flex: 1, justifyContent: 'center', alignItems: 'center'
    }}>
        <Text style={{
          textAlign: "center",
          marginTop: 20,
        }}>Home!</Text>

        {/* <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: "space-around",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Button
            title="What we do"
            onPress={() => navigation.navigate("WhatWeDo")}
          />

        <Button
            title="Our Company"
            onPress={() => navigation.navigate("OurCompany")}
          />
      </View> */}
    </View>
  )
}

const HomeStack = () => {
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
          name='HomeScreen'
          component={HomeScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name='WhatWeDo'
          component={WhatWeDo}
          // options={{ headerShown: false }}
        />

        <Stack.Screen
          name='OurCompany'
          component={OurCompany}
          // options={{ headerShown: false }}
        />
      </Stack.Navigator>
  )
}

export {HomeStack}
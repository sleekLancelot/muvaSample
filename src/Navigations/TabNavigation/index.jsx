import React from 'react'
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

function Home() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
  
  function About() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>About!</Text>
      </View>
    );
  }
  
  function Contact() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Contact!</Text>
      </View>
    );
  }  

const Tab = createBottomTabNavigator()

const Tabs = () => {
  return (
    <Tab.Navigator
        initialRouteName='Home'
        backBehavior='history'
        screenOptions={{
            tabBarActiveTintColor: '#fc8900',
        }}
    >
        <Tab.Screen
            name='Home'
            component={Home}
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="home" color={color} size={size} />
                ),
            }}
        />
        <Tab.Screen
            name='About'
            component={About}
            options={{
                tabBarLabel: 'About',
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="information-circle" size={size} color={color} />
                )
            }}
        />
        <Tab.Screen
            name='Contact'
            component={Contact}
            options={{
                tabBarLabel: 'Contact',
                tabBarIcon: ({ color, size }) => (
                    <MaterialIcons name="perm-contact-calendar" size={size} color={color} />
                )
            }}
        />
    </Tab.Navigator>
  )
}

export {Tabs}
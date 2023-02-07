import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { About, Contact, Home } from '../../features';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator()

const Tabs = () => {
  return (
    <NavigationContainer>
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
    </NavigationContainer>
  )
}

export {Tabs}
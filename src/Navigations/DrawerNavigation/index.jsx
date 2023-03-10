import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { BookHomeScreen, LocationHomeScreen, RechargeHomeScreen } from '../../features';

const Drawer = createDrawerNavigator()

const DrawerNavigation = () => {
  return (
    // <NavigationContainer>
        <Drawer.Navigator
            screenOptions={{
                drawerActiveTintColor: '#fc8900',
            }}
        >
            <Drawer.Screen
                name='LocationNav'
                component={LocationHomeScreen}
                options={{
                    drawerLabel: 'Location',
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="md-location" size={size} color={color} />
                    ),
                    headerShown: false,
                }}
            />

            <Drawer.Screen
                name='Recharge'
                component={RechargeHomeScreen}
                options={{
                    drawerLabel: 'Recharge',
                    drawerIcon: ({ color, size }) => (
                        <MaterialIcons name="format-color-fill" size={size} color={color} />
                    )
                }}
            />

            <Drawer.Screen
                name='Book'
                component={BookHomeScreen}
                options={{
                    drawerLabel: 'Book',
                    drawerIcon: ({ color, size }) => (
                        <FontAwesome name="bookmark" size={size} color={color} />
                    )
                }}
            />
        </Drawer.Navigator>
    // </NavigationContainer>
  )
}

export {DrawerNavigation}
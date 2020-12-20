import React from 'react'

import BuyerHome from './BuyerHome'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import BuyerProfile from './BuyerProfile';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Tab = createMaterialBottomTabNavigator();
import BuyerMessages from './BuyerMessages'
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import NotificationBuyerDashboard from './NotificationBuyerDashboard';
import DrawerContent from './DrawerContent'
const Drawer = createDrawerNavigator();

export default function BuyerDashboard({ navigation, route }) {



    return (
        <Drawer.Navigator drawerContent={props => <DrawerContent Buyer={route.params.username} {...props} />}>

            <Drawer.Screen name="Home" component={BuyerHome}
                initialParams={{ username: route.params.username }}
            />


            <Drawer.Screen name="Chat"
                children={() => <BuyerMessages from={route.params.username} navigation={navigation} />}
            />
            <Drawer.Screen name="Notification"
                children={() => <NotificationBuyerDashboard Buyer={route.params.username} navigation={navigation} />}
            />


        </Drawer.Navigator>

    )
}




function MainDrawerNavigator({ navigation, route }) {


    return (

        <Tab.Navigator
            initialRouteName="BuyerHome"
            activeColor="#fff"
            shifting={true}
        >
            <Tab.Screen name="BuyerHome" component={BuyerHome}
                initialParams={{ username: route.params.username }}


                options={{
                    tabBarLabel: 'Home',
                    tabBarColor: '#009387',
                    tabBarIcon: ({ color }) => (
                        <Icon name="ios-home" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen name="BuyerProfile" component={BuyerProfile}
                initialParams={{ Buyer: route.params.username }}
                options={{
                    tabBarLabel: 'BuyerProfile',
                    tabBarColor: '#272b2b',
                    tabBarIcon: ({ color }) => (
                        <Icon name="ios-home" color={color} size={26} />
                    ),
                }} />

        </Tab.Navigator>
    )
}
import React from 'react'
import { View, Text } from 'react-native'
import SellerHome from './SellerHome'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import SellerProfile from './SellerProfile';
import GigCreation from './GigCreation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Tab = createMaterialBottomTabNavigator();
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Mygigs from './Mygigs'
import SellerMessages from './SellerMessages'
const Drawer = createDrawerNavigator();
import Message from '../../Controller/MessageController'
import NotificationSellerDashboard from './NotificationSellerDashboard';

const MessageController = new Message()



export default function SellerDashboard({ navigation, route }) {



    return (
        <Drawer.Navigator>

            <Drawer.Screen name="Home" component={SellerHome}
                initialParams={{ username: route.params.username, navigation: navigation }}
            />

            <Drawer.Screen name="MyGigs"
                children={() => <Mygigs Seller={route.params.username} />}
            />
            <Drawer.Screen name="Chat"
                children={() => <SellerMessages from={route.params.username} navigation={navigation} />}
            />
            <Drawer.Screen name="Notification"
                children={() => <NotificationSellerDashboard Seller={route.params.username} navigation={navigation} />}
            />


        </Drawer.Navigator>
    )

}






function MainDrawerNavigator({ route, navigation }) {


    return (

        <Tab.Navigator initialRouteName="SellerHome"
            barStyle={{ backgroundColor: '#009387' }}
        >
            <Tab.Screen name="SellerHome" component={SellerHome}

                options={{

                    tabBarLabel: 'SellerHome',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26}
                        />
                    ), tabBarColor: 'red'
                }}
            />
            <Tab.Screen name="GigCreation"
                children={() => <GigCreation navigation={navigation} username={route.params.username} />}
                options={{
                    tabBarLabel: 'Create New gig',

                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account-circle" color={color} size={26} />
                    ),
                }} />
        </Tab.Navigator>
    )
}



import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import { ListItem } from './ItemLista';
import { Lista } from './Lista';
import Feed from './screens/Feed';
import Info from './screens/Info';
// import FeedScreen from '../screens/FeedScreen';
// import ProfileScreen from '../screens/ProfileScreen';
// import SettingScreen from '../screens/SettingScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Lista} />
            <Tab.Screen name="Feed" component={Feed} />
            <Tab.Screen name="Info" component={Info} />
        </Tab.Navigator>
    );
};

export default TabNavigator;

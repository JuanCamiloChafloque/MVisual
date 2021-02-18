import React from 'react'
import { View, Text, StyleSheet, Colors } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyFilesScreen from '../screens/MyFiles/MyFiles';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {

    return (
        <Tab.Navigator tabBarOptions={{
            showLabel: true,
            backgroundColor: "transparent",
            elevation: 0,
            style: styles.container
        }} >
            <Tab.Screen
                name={"Main Files Page"}
                component={MyFilesScreen}
            />
            <Tab.Screen
                name={"Processed Image"}
                component={MyFilesScreen}
            />
            <Tab.Screen
                name={"Upload Image"}
                component={MyFilesScreen}
            />


        </Tab.Navigator>

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderTopWidth: 0
    }
});

export default TabNavigator

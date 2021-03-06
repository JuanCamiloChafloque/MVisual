import React from 'react'
import { View, Text, StyleSheet, Colors, Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyFilesScreen from '../screens/MyFiles';
import ProcessImage from '../screens/ProcessImage';
import UploadImageScreen from '../screens/UploadImage';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {

    return (
        <Tab.Navigator tabBarOptions={{
            showLabel: false,
            backgroundColor: "transparent",
            elevation: 0,
            style: styles.container,
        }} >
            <Tab.Screen
                name={"Main Files Page"}
                component={MyFilesScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={focused ?require('../../assets/images/files_selected.png'): require('../../assets/images/folder.png') }
                            resizeMode="contain"
                            style={{
                                width: focused ? 30:25,
                                height: focused ? 30:25,

                            }}
                        />
                    )
                }}
            />
            <Tab.Screen
                name={"Process Image"}
                component={ProcessImage}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={focused ?require('../../assets/images/scan_selected.png'):require('../../assets/images/qr-code-scan.png')}
                            resizeMode="contain"
                            style={{
                                width: focused ? 30:25,
                                height: focused ? 30:25,

                            }}
                        />
                    )
                }}
            />
            <Tab.Screen
                name={"Upload Image"}
                component={UploadImageScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={focused ? require('../../assets/images/upload_selected.png'):require('../../assets/images/photo.png')}
                            resizeMode="contain"
                            style={{
                                width: focused ? 30:25,
                                height: focused ? 30:25,

                            }}
                        />
                    )
                }}
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

import React from 'react'
import { View, Text } from 'react-native'
import MyFilesScreen from '../screens/MyFiles/MyFiles'
import TabNavigator from './TabNavigator'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, StackActions } from '@react-navigation/native';


const Stack = createStackNavigator();

const Router = () => {

    return (

        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} >
                <Stack.Screen
                    name={'Main Files Page'}
                    component={TabNavigator}
                />
            </Stack.Navigator>
        </NavigationContainer>

    )
}

export default Router

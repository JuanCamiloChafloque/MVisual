import React from 'react'
import { View, Text } from 'react-native'
import MyFilesScreen from '../screens/MyFiles/MyFiles'
import TabNavigator from './TabNavigator'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import PatientsListScreen from '../screens/PatientsList';
import SeriesbyPatientStudy from '../screens/SeriesbyPatientStudy';
import Studies from '../screens/Studies';
import Series from '../screens/Series';


const Stack = createStackNavigator();

const Router = () => {

    return (

        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} >
                <Stack.Screen
                    name={'Main Files Page'}
                    component={TabNavigator}
                />
                <Stack.Screen
                    name={'Patients'}
                    component={PatientsListScreen}
                />
                <Stack.Screen
                    name={'Studies'}
                    component={Studies}
                />
                <Stack.Screen
                    name={'Series'}
                    component={Series}
                />
                <Stack.Screen
                    name={'SeriesbyPatientStudy'}
                    component={SeriesbyPatientStudy}
                />
            </Stack.Navigator>
        </NavigationContainer>

    )
}

export default Router

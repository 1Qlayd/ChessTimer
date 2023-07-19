import React from 'react';
import { MainScreen } from '../components/MainScreen';
import { SettingsScreen } from '../components/SettingsScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export function AppNavigator(){
    return(
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Main" screenOptions={{ headerShown: false }}>
            <Stack.Screen 
                name = "Main"
                component = {MainScreen}
                />
            <Stack.Screen 
                name = "Settings"
                component = {SettingsScreen}
                />
        </Stack.Navigator>
    </NavigationContainer>
)}
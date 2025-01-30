import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const HomeLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false, statusBarBackgroundColor: "#F56606", title: "Home", statusBarTranslucent: true, statusBarStyle: 'auto', }} />
        </Stack>
    )
}

export default HomeLayout
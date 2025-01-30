import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const SupportLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false, statusBarBackgroundColor: "white", title: "Support" }} />
        </Stack>
    )
}

export default SupportLayout
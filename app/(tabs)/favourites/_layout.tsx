import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const FavouritesLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false, statusBarBackgroundColor: "white", title: "Favourites" }} />
        </Stack>
    )
}

export default FavouritesLayout
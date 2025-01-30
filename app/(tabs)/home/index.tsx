import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Stack } from 'expo-router'
import LinearGradientHeader from '@/components/LinearGradientHeader'
import { Searchbar } from 'react-native-paper'
import PromotionalBanner from '@/components/Promo'

const index = () => {
    const [searchQuery, setSearchQuery] = useState("")
    return (
        <ScrollView className='flex-1'>
            <Stack.Screen options={{ headerShown: true, header: (...props) => <LinearGradientHeader /> }} />
            <View>
                <View className='mt-3'>

                    <Searchbar
                        placeholder="Search"
                        onChangeText={setSearchQuery}
                        value={searchQuery}
                        style={{ backgroundColor: "white" }}
                    />
                </View>

                <View className=''>
                    <PromotionalBanner />
                </View>

            </View>

        </ScrollView>
    )
}

export default index
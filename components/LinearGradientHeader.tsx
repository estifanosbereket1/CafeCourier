import { View, Text } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Image } from 'react-native'
import { Avatar } from 'react-native-paper'
import { EvilIcons } from '@expo/vector-icons'

const LinearGradientHeader = () => {

    const { top } = useSafeAreaInsets()
    return (
        <LinearGradient
            colors={['#F56606', '#8F3C03']}
            start={[0, 0]}
            end={[1, 0]}
            className="w-full h-20 px-3 shadow-md"
            style={{ marginTop: top }}
        >
            <View className="flex flex-row  justify-between items-center h-full">
                <View className="flex flex-row gap-6">
                    <View>
                        {/* <Image
                            source={require("@/assets/mainlogo.png")}
                            style={{ width: 40, height: 40, }}
                            className='rounded-[50%]'
                        /> */}
                        <Avatar.Image size={40} source={require('@/assets/mainlogo.png')} />

                    </View>
                    <View className='flex flex-col gap-2'>

                        <Text className="text-xl text-white font-semibold">
                            hey Aayan ! 👋🏾
                        </Text>
                        <Text className='text-sm text-white font-normal'>Welcome Back</Text>
                    </View>
                </View>
                <View className="flex flex-row gap-4 items-center">
                    <View className="relative ml-3">
                        <View className="bg-[#FFFFFF12] p-2 rounded-full">
                            <EvilIcons name="bell" size={20} color="white" />
                        </View>
                        <View className="absolute top-1 right-2 h-2 w-2 bg-red-500 rounded-full" />
                    </View>
                </View>
            </View>
        </LinearGradient>
    )
}

export default LinearGradientHeader
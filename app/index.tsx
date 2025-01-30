import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome6 } from '@expo/vector-icons'
import { useRouter } from 'expo-router'

const index = () => {
    const router = useRouter()
    return (
        <View className='flex flex-col items-center flex-1 justify-center mx-8'>
            <View>
                <Image source={require("@/assets/mainlogo.png")} className='h-60 w-60' />
            </View>
            {/* TODO :MAKE THE TEXT COLOR GRADIENT */}
            <Text className='text-center text-[#F56606] font-bold text-4xl my-4'>
                Welcome to Campus Cafe Finder
            </Text>
            <Text className='text-center text-[#F56606] font-semibold text-2xl leading-10'>
                Let’s make your campus experience a blend of comfort and great coffee.
            </Text>
            <View className='my-8 flex flex-col items-center justify-center gap-4 '>
                <View className=' flex flex-row items-center gap-4'>
                    <FontAwesome6 name="hand-holding-heart" size={24} color="#F56606" />
                    <Text className='font-normal text-[#F56606] text-xl'>Reliable Recommendations</Text>
                </View>
                <View className=' flex flex-row items-center gap-4'>
                    <FontAwesome6 name="map-location-dot" size={24} color="#F56606" />
                    <Text className='font-normal text-[#F56606] text-xl'>Order and Track with Ease</Text>
                </View>

            </View>
            <View className='flex flex-col gap-6'>
                <TouchableOpacity className='w-full  bg-[#F56606] rounded-md py-6 ' onPress={() => router.replace("/auth/login")}>
                    <Text className='text-center text-white font-semibold text-xl'>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity className='w-full  bg-[#F56606] rounded-md py-6 '>
                    <Text className='text-center text-white font-semibold text-xl'>Register</Text>
                </TouchableOpacity>
            </View>


        </View>
    )
}

export default index
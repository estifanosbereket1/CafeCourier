import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Link, Stack, useRouter } from 'expo-router'
import LinearGradientHeader from '@/components/LinearGradientHeader'
import { Searchbar } from 'react-native-paper'
import PromotionalBanner from '@/components/Promo'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { useFetchResturants, useResturantPagination } from '@/api/api.resturants'
import { Image } from 'react-native'
import { TouchableOpacity } from 'react-native'

const index = () => {
    const [searchQuery, setSearchQuery] = useState("")

    const [queryParams, setQueryParams] = useState<Record<string, any>>();
    const { page, pages, size, setPage, setSize } = useResturantPagination(queryParams);
    const { data: restaurants } = useFetchResturants(page, size, queryParams);


    const [viewAll, setViewAll] = useState(false);

    const handleViewMore = () => {
        setViewAll(!viewAll);
    };

    const router = useRouter()

    const user = useSelector((state: RootState) => state.auth.user);
    console.log(user, "yyyyyyyyyyyyyyyyyyyy")
    return (
        <ScrollView className='flex-1'>
            <Stack.Screen options={{ headerShown: true, header: (...props) => <LinearGradientHeader /> }} />
            <View className='flex-1'>
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

                <View className="bg-gray-100 p-4">
                    <Text className="text-xl font-bold mb-4">Recommended</Text>
                    {restaurants &&
                        <>


                            <ScrollView>
                                {restaurants.slice(0, viewAll ? restaurants.length : 3).map((restaurant, index) => (
                                    <TouchableOpacity
                                        onPress={() => {
                                            router.push({
                                                pathname: "/(tabs)/home/[resturant]",
                                                params: {
                                                    id: restaurant.id.toString()
                                                }
                                            })
                                        }}
                                        key={index}
                                    >


                                        <View key={index} className="bg-white my-4 rounded-lg shadow-md mb-4 p-4">
                                            <View className='flex flex-row justify-between gap-4 items-center'>
                                                <Image source={{ uri: restaurant.imageUrl }} className="w-[60%] h-40 rounded-lg" />
                                                <View>
                                                    <Text className="font-semibold text-lg mt-2">{restaurant.name}</Text>
                                                    <Text className="text-sm text-gray-600">{restaurant.address}</Text>
                                                    <View className='my-2'>
                                                        <Text className="text-md font-bold text-green-400">Open
                                                            <Text className='font-extralight text-gray-400'>
                                                                {" "}  |
                                                            </Text>
                                                            <Text className='font-normal text-xs text-gray-500'>
                                                                {restaurant.openingHours}
                                                            </Text>
                                                        </Text>
                                                    </View>

                                                    <Text className="text-yellow-500 mt-1">
                                                        {'⭐'.repeat(Math.round(restaurant.rating))} {restaurant.rating}
                                                    </Text>
                                                </View>
                                            </View>

                                        </View>
                                    </TouchableOpacity>


                                ))}
                            </ScrollView>

                            <TouchableOpacity
                                onPress={handleViewMore}
                                className="bg-orange-500 p-2 rounded-full mt-4"
                            >
                                <Text className="text-white text-center">{viewAll ? 'View Less' : 'View More'}</Text>
                            </TouchableOpacity>
                        </>

                    }

                </View>

            </View>

        </ScrollView>
    )
}

export default index
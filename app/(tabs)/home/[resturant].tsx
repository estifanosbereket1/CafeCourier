import { View, Text, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native'
import React from 'react'
import { ParamListBase, RouteProp, useRoute } from '@react-navigation/native'
import { Stack, useRouter } from 'expo-router'
import { AntDesign, Entypo, Fontisto, MaterialCommunityIcons } from '@expo/vector-icons'
import { useFetchViewResturant } from '@/api/api.resturants'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '@/redux/slices/cartSlice'
import { RootState } from '@/redux/store'

const ResturantDetails = () => {
    const route: RouteProp<ParamListBase> & { params: { id?: string } } = useRoute()
    const { id } = route.params
    const { data } = useFetchViewResturant(id)
    const screenWidth = Dimensions.get("window").width;
    const router = useRouter()
    const dispatch = useDispatch()

    // Get cart items from Redux store
    const cartItems = useSelector((state: RootState) => state.cart.items)
    const cartCount = cartItems.length

    // Function to add items to cart
    const handleAddToCart = (item: any) => {
        dispatch(addToCart({
            id: item.id,
            name: item.name,
            price: item.price,
            restaurantId: item.restaurantId,
            menuId: item.id,
            quantity: 1,
            imageUrl: item.imageUrl
        }))
    }

    return (
        <View className="flex-1">
            <ScrollView className="flex-1">
                <Stack.Screen options={{
                    headerShown: true,
                    headerTitle: data?.name,
                    headerLeft: () => (
                        <TouchableOpacity
                            onPress={() => router.back()}
                            className="pl-3 flex-row items-center"
                        >
                            <AntDesign name="arrowleft" size={24} color="#fff" />
                        </TouchableOpacity>
                    ),
                    headerStyle: { backgroundColor: "#F56606" },
                    headerTitleStyle: { color: "white" }
                }} />

                <Image source={{ uri: data?.imageUrl }} style={{ width: screenWidth, height: 250, borderRadius: 8 }} />

                <View className="flex flex-col gap-3 my-8 mx-4">
                    <View className="flex flex-row items-center gap-6">
                        <Entypo name="location" size={26} color="#F56606" />
                        <Text className="font-bold text-lg">{data?.address}</Text>
                    </View>
                    <View className="flex flex-row items-center gap-6">
                        <Entypo name="old-mobile" size={26} color="#F56606" />
                        <Text className="font-bold text-lg">{data?.phone}</Text>
                    </View>
                    <View className="flex flex-row items-center gap-6">
                        <Entypo name="clock" size={26} color="#F56606" />
                        <Text className="font-bold text-lg">{data?.openingHours}</Text>
                    </View>
                    <View className="flex flex-row items-center gap-6">
                        <MaterialCommunityIcons name="web-check" size={26} color="#F56606" />
                        <Text className="font-bold text-lg">{data?.website}</Text>
                    </View>
                    <View className="flex flex-row items-center gap-6">
                        <Fontisto name="quote-a-left" size={26} color="#F56606" />
                        <Text className="font-bold text-lg">{data?.description}</Text>
                    </View>
                </View>

                <View className="bg-gray-100 p-4">
                    <Text className="text-2xl font-bold text-center mb-6">Menu</Text>

                    {data?.menu.map((item: any) => (
                        <View key={item.id} className="bg-white rounded-lg shadow-lg mx-2 mb-4 p-4 flex-row">
                            <Image source={{ uri: item.imageUrl }} className="w-24 h-24 rounded-lg mr-4" />
                            <View className="flex-1">
                                <Text className="text-xl font-semibold text-gray-800">{item.name}</Text>
                                <Text className="text-sm text-gray-600 my-2">{item.description}</Text>
                                <Text className="text-lg font-bold text-green-500">${item.price}</Text>

                                <TouchableOpacity
                                    className="bg-[#F56606] p-2 rounded-lg mt-4"
                                    onPress={() => handleAddToCart(item)}
                                >
                                    <Text className="text-white text-center font-bold">Add to Cart</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))}
                </View>
            </ScrollView>

            {/* Fixed Cart Icon - Only visible when cart has items */}
            {cartCount > 0 && (
                <TouchableOpacity
                    className="absolute bottom-6 right-6 bg-[#F56606] p-4 rounded-full shadow-lg flex-row items-center"
                    onPress={() => router.push({
                        pathname: "/(tabs)/home/checkout",
                        params: {}
                    })} // Navigate to checkout
                >
                    <AntDesign name="shoppingcart" size={28} color="white" />
                    <View className="bg-red-600 w-6 h-6 rounded-full absolute -top-2 -right-2 flex items-center justify-center">
                        <Text className="text-white text-xs font-bold">{cartCount}</Text>
                    </View>
                </TouchableOpacity>
            )}
        </View>
    )
}

export default ResturantDetails

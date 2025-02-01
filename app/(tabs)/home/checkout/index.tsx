// import { View, Text } from 'react-native'
// import React from 'react'
// import { ScrollView } from 'react-native'
// import { TouchableOpacity } from 'react-native'
// import { useRouter } from 'expo-router'
// import { Stack } from 'expo-router'
// import { AntDesign } from '@expo/vector-icons'

// const CheckOut = () => {

//     const router = useRouter()
//     return (
//         <ScrollView className='flex-1'>

//             <Stack.Screen options={{
//                 headerShown: true,
//                 headerTitle: "CheckOut",
//                 headerLeft: () => (
//                     <TouchableOpacity
//                         onPress={() => { return router.back() }}
//                         style={{
//                             flexDirection: "row",
//                             alignItems: "center",
//                             paddingLeft: 10,
//                         }}
//                     >
//                         <AntDesign
//                             name="arrowleft"
//                             size={24}
//                             color="#fff"
//                             style={{ marginRight: 15 }}
//                         />
//                     </TouchableOpacity>
//                 ),
//                 headerStyle: { backgroundColor: "#F56606", },
//                 headerTitleStyle: { color: "white" }
//             }} />
//         </ScrollView>
//     )
// }

// export default CheckOut

import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { AntDesign } from '@expo/vector-icons'
import { incrementQuantity, decrementQuantity, removeFromCart } from '@/redux/slices/cartSlice'
import { Stack } from 'expo-router'

const index = () => {
    const router = useRouter()
    const dispatch = useDispatch()

    const cartItems = useSelector((state: RootState) => state.cart.items)
    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)

    return (

        <ScrollView className='flex-1'>

            <Stack.Screen options={{
                headerShown: true,
                headerTitle: "CheckOut",
                headerLeft: () => (
                    <TouchableOpacity
                        onPress={() => { return router.back() }}
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            paddingLeft: 10,
                        }}
                    >
                        <AntDesign
                            name="arrowleft"
                            size={24}
                            color="#fff"
                            style={{ marginRight: 15 }}
                        />
                    </TouchableOpacity>
                ),
                headerStyle: { backgroundColor: "#F56606", },
                headerTitleStyle: { color: "white" }
            }} />

            <View className="flex-1 bg-gray-100">
                <View className="bg-[#F56606] p-4 flex-row justify-between items-center">
                    <TouchableOpacity onPress={() => router.back()}>
                        <AntDesign name="arrowleft" size={24} color="white" />
                    </TouchableOpacity>
                    <Text className="text-white text-lg font-bold">Checkout</Text>
                    <View style={{ width: 24 }} />
                </View>

                <ScrollView className="p-4">
                    {cartItems.length === 0 ? (
                        <Text className="text-center text-gray-600 mt-10 text-lg">Your cart is empty</Text>
                    ) : (
                        cartItems.map((item) => (
                            <View key={item.id} className="bg-white rounded-lg shadow-lg p-4 flex-row mb-4">
                                <Image source={{ uri: item.imageUrl }} className="w-24 h-24 rounded-lg mr-4" />
                                <View className="flex-1">
                                    <Text className="text-lg font-semibold">{item.name}</Text>
                                    <Text className="text-gray-600">${item.price}</Text>
                                    <View className="flex-row items-center mt-2">
                                        <TouchableOpacity
                                            className="bg-gray-300 p-2 rounded-lg"
                                            onPress={() => dispatch(decrementQuantity(item.id))}
                                        >
                                            <AntDesign name="minus" size={18} color="black" />
                                        </TouchableOpacity>
                                        <Text className="mx-4 text-lg">{item.quantity}</Text>
                                        <TouchableOpacity
                                            className="bg-gray-300 p-2 rounded-lg"
                                            onPress={() => dispatch(incrementQuantity(item.id))}
                                        >
                                            <AntDesign name="plus" size={18} color="black" />
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            className="ml-auto bg-red-500 p-2 rounded-lg"
                                            onPress={() => dispatch(removeFromCart(item.id))}
                                        >
                                            <AntDesign name="delete" size={18} color="white" />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        ))
                    )}
                </ScrollView>

                {cartItems.length > 0 && (
                    <View className="p-4 bg-white shadow-lg">
                        <Text className="text-lg font-bold">Total: ${totalAmount.toFixed(2)}</Text>
                        <TouchableOpacity
                            className="bg-[#F56606] p-4 rounded-lg mt-4"
                            onPress={() => console.log('Order Placed!')}
                        >
                            <Text className="text-white text-center text-lg font-bold">Place Order</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </View>
        </ScrollView>


    )
}

export default index

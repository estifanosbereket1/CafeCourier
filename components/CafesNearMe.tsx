import React from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";

interface CaffesNearMeInterface {
    name: string;
    img?: any;
    minutes: number;
    distance: string;
    deliveryFee: string;
}

export const cafesNearMe: CaffesNearMeInterface[] = [
    {
        name: "Amrogn Chicken",
        minutes: 25,
        distance: "3.2 km",
        deliveryFee: "$3.50",
        img: require("@/assets/images/Amrogn logo.png"),
    },
    {
        name: "Ako Coffee",
        minutes: 15,
        distance: "1.5 km",
        deliveryFee: "$1.50",
        img: require("@/assets/images/Akko.png"),
    },
    {
        name: "Majet Foods",
        minutes: 30,
        distance: "4.8 km",
        deliveryFee: "$4.00",
        img: require("@/assets/images/maget.jpg"),
    },
    {
        name: "Cocun Shake",
        minutes: 20,
        distance: "2.0 km",
        deliveryFee: "$2.00",
        img: require("@/assets/images/Cocoon.jpg"),
    },
    {
        name: "Mama's Kitchen",
        minutes: 35,
        distance: "5.5 km",
        deliveryFee: "$5.00",
        img: require("@/assets/images/Mamas Kitchen.jpg"),
    },
    {
        name: "Wow Burger",
        minutes: 18,
        distance: "2.7 km",
        deliveryFee: "$2.50",
        img: require("@/assets/images/Wow burger.jpg"),
    },
];

const CafeList = () => {
    return (
        <ScrollView style={styles.container}>
            {cafesNearMe.map((item) => (
                <View key={item.name} style={styles.card}>
                    <View style={styles.imageWrapper}>
                        <Image source={item.img} style={styles.image} />
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.info}>📍 {item.distance}</Text>
                        <Text style={styles.info}>⏱ {item.minutes} min</Text>
                        <Text style={styles.info}>💵 {item.deliveryFee} Delivery</Text>
                    </View>
                </View>
            ))}
        </ScrollView>
    );
};

export default CafeList;

const styles = StyleSheet.create({
    container: {
        padding: 10,
        // backgroundColor: "#f9f9f9",
    },
    card: {
        flexDirection: "row",
        backgroundColor: "#fff",
        borderRadius: 10,
        overflow: "hidden",
        marginBottom: 15,
        elevation: 2,
        gap: 10
    },
    imageWrapper: {
        width: "30%",
        height: 100,
        borderRadius: 10,
        overflow: "hidden",
    },
    image: {
        width: "100%",
        height: "100%",
    },
    details: {
        flex: 1,
        padding: 10,
        justifyContent: "space-between",
    },
    name: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#333",
    },
    info: {
        fontSize: 14,
        color: "#666",
    },
});

import React, { useRef, useState, useEffect } from "react";
import { View, Text, Image, ScrollView, Dimensions, StyleSheet } from "react-native";

const banners = [
    {
        id: 1,
        title: "Amrogn Chicken - 20% Off!",
        description: "Get the best grilled chicken in town.",
        img: require('@/assets/images/Amrogn logo.png'),
    },
    {
        id: 2,
        title: "Ako Coffee - Buy 1 Get 1 Free!",
        description: "Perfect coffee for your perfect morning.",
        img: require('@/assets/images/Akko.png'),
    },
    {
        id: 3,
        title: "Majet Foods - Free Delivery!",
        description: "Delicious meals delivered to your door.",
        img: require('@/assets/images/maget.jpg'),
    },
    {
        id: 4,
        title: "Cocun Shake - Summer Special!",
        description: "Cool down with refreshing shakes.",
        img: require('@/assets/images/Cocoon.jpg'),
    },
    {
        id: 5,
        title: "Mama's Kitchen - Family Feast!",
        description: "Tasty home-cooked meals for everyone.",
        img: require('@/assets/images/Mamas Kitchen.jpg'),
    },
    {
        id: 6,
        title: "Wow Burger - Combo Deals!",
        description: "Juicy burgers with amazing sides.",
        img: require('@/assets/images/Wow burger.jpg'),
    },
];

const { width } = Dimensions.get("window");

const PromotionalBanner = () => {
    const scrollViewRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const nextIndex = (currentIndex + 1) % banners.length;
            scrollViewRef?.current?.scrollTo({ x: nextIndex * width, animated: true });
            setCurrentIndex(nextIndex);
        }, 3000);

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, [currentIndex]);

    const onScroll = (event: any) => {
        const contentOffsetX = event.nativeEvent.contentOffset.x;
        const newIndex = Math.round(contentOffsetX / width);
        setCurrentIndex(newIndex);
    };

    return (
        <View style={styles.carouselWrapper}>
            <ScrollView
                ref={scrollViewRef}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={onScroll}
                scrollEventThrottle={16}
            >
                {banners.map((item) => (
                    <View key={item.id} style={styles.bannerContainer}>
                        <Image source={item.img} style={styles.bannerImage} resizeMode="cover" />
                        <View style={styles.textContainer}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.description}>{item.description}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>

            {/* Dots for pagination */}
            <View style={styles.paginationWrapper}>
                {banners.map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.dot,
                            currentIndex === index ? styles.activeDot : styles.inactiveDot,
                        ]}
                    />
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    carouselWrapper: {
        marginTop: 20,
    },
    bannerContainer: {
        width: width,
        borderRadius: 20,
        overflow: "hidden",
        alignItems: "center",
        backgroundColor: "#fff",
        paddingHorizontal: 10,
        paddingTop: 15

    },
    bannerImage: {
        width: "100%",
        height: 150,
    },
    textContainer: {
        padding: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#333",
    },
    description: {
        fontSize: 14,
        color: "#666",
        marginTop: 5,
    },
    paginationWrapper: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 5,
    },
    activeDot: {
        backgroundColor: "#333",
    },
    inactiveDot: {
        backgroundColor: "#ccc",
    },
});

export default PromotionalBanner;

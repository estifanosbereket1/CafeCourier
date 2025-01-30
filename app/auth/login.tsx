import { View, Text, KeyboardAvoidingView, Platform, ScrollView, Image, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { Link, useRouter } from 'expo-router';
import { Controller, useForm } from 'react-hook-form';
import { MaterialIcons } from '@expo/vector-icons';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";



const schema = yup.object().shape({
    email: yup.string().email("Invalid email format").required("Email is required"),
    password: yup
        .string()
        .min(6, "Password must be at least 6 characters long")
        .test(
            "has-lowercase",
            "Password must contain at least 1 lowercase letter",
            (value) => /[a-z]/.test(value || "")
        )
        .test("has-number", "Password must contain at least 1 number", (value) =>
            /\d/.test(value || "")
        )
        .required("Password is required"),
});

const login = () => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const router = useRouter();
    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            email: "",
            password: "",
        },
    });
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
        >
            <ScrollView
                contentContainerStyle={{ justifyContent: "center" }}
                keyboardShouldPersistTaps="handled"
            >
                <View className="flex flex-col mt-0">
                    <View className="mx-auto mt-28 ">
                        <Image
                            source={require("@/assets/mainlogo.png")}
                            className="h-56 w-56 text-center"
                        />
                    </View>
                    <View className="flex flex-col mx-4">
                        <View className="mt-9 flex flex-col">
                            <Text className="font-semibold text-4xl text-[#333333] leading-9">
                                Login
                            </Text>

                            <View className="flex flex-col gap-[10px] mt-10">
                                <Text className="font-semibold text-sm leading-6 text-[#333333]">
                                    Email <Text className="text-red-500">*</Text>
                                </Text>
                                <Controller
                                    control={control}
                                    name="email"
                                    render={({ field: { onChange, value } }) => (
                                        <TextInput
                                            className="focus:outline-none border h-14 px-[12px] py-[10px] border-gray-300 rounded-lg placeholder:font-normal placeholder:text-sm placeholder:leading-6"
                                            placeholder="abebekebede@gmail.com"
                                            keyboardType="email-address"
                                            autoCapitalize="none"
                                            value={value}
                                            onChangeText={onChange}
                                            editable={!isSubmitting}
                                        />
                                    )}
                                />
                                {errors.email && (
                                    <Text className="text-red-500 text-xs mt-1">
                                        {errors.email.message}
                                    </Text>
                                )}
                            </View>

                            <View className="flex flex-col gap-[10px] my-2">
                                <Text className="font-semibold text-sm leading-6 text-[#333333]">
                                    Password <Text className="text-red-500">*</Text>
                                </Text>
                                <View className="relative">
                                    <Controller
                                        control={control}
                                        name="password"
                                        render={({ field: { onChange, value } }) => (
                                            <TextInput
                                                secureTextEntry={!isPasswordVisible}
                                                className="focus:outline-none border px-[12px] h-14 py-[10px] border-gray-300 rounded-lg pr-10"
                                                placeholder="******"
                                                value={value}
                                                onChangeText={onChange}
                                                editable={!isSubmitting}
                                            />
                                        )}
                                    />
                                    <TouchableOpacity
                                        onPress={togglePasswordVisibility}
                                        className="absolute right-[10px] top-[15px]"
                                        disabled={isSubmitting}
                                    >
                                        <MaterialIcons
                                            name={isPasswordVisible ? "visibility" : "visibility-off"}
                                            size={24}
                                            color="gray"
                                        />
                                    </TouchableOpacity>
                                </View>
                                {errors.password && (
                                    <Text className="text-red-500 text-xs mt-1">
                                        {errors.password.message}
                                    </Text>
                                )}
                            </View>

                            {errorMessage && (
                                <Text className="text-red-500 text-center mt-4">
                                    {errorMessage}
                                </Text>
                            )}

                            <View>
                                <TouchableOpacity
                                    className={`w-full py-4 px-8 rounded-lg mt-3 ${isSubmitting ? "bg-gray-400" : "bg-[#F56606]"
                                        }`}
                                    onPress={() => router.replace("/(tabs)/home")}
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <View className="flex-row justify-center items-center">
                                            <ActivityIndicator color="white" />
                                            <Text className="text-white text-sm font-semibold ml-2">
                                                Logging in...
                                            </Text>
                                        </View>
                                    ) : (
                                        <Text className="text-center text-white text-sm font-semibold">
                                            Login
                                        </Text>
                                    )}
                                </TouchableOpacity>
                            </View>

                            <TouchableOpacity
                                className="mt-8"
                                disabled={isSubmitting}
                            >
                                <Text className="text-[#F56606] text-xs font-normal">
                                    Forgot password?
                                </Text>
                            </TouchableOpacity>

                            <View className='my-6 flex flex-row text-center mx-auto'>
                                <Text className='text-center'>
                                    Don't have an account?
                                    <Link href={"./register"}>
                                        <Text className='text-[#F56606]'>
                                            {" "}  Sign up
                                        </Text>
                                    </Link>
                                </Text>
                                <Text> {" "}here</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default login
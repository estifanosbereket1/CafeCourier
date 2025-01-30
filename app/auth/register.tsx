import { View, Text, KeyboardAvoidingView, Platform, ScrollView, Image, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { Link, useRouter } from 'expo-router';
import { Controller, useForm } from 'react-hook-form';
import { MaterialIcons } from '@expo/vector-icons';
import * as yup from "yup";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from '@/components/schema/auth.schema';
import z from "zod"
import DateTimePicker from 'react-native-ui-datepicker';
import { Chip } from 'react-native-paper';
import AllergySelector from '@/components/ChipTest';





const register = () => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const router = useRouter();
    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    type FormValues = z.infer<typeof registerSchema>
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>({
        resolver: zodResolver(registerSchema),
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
                                Register
                            </Text>

                            <View className="flex flex-col gap-[10px] mt-10">
                                <Text className="font-semibold text-sm leading-6 text-[#333333]">
                                    First Name <Text className="text-red-500">*</Text>
                                </Text>
                                <Controller
                                    control={control}
                                    name="firstName"
                                    render={({ field: { onChange, value } }) => (
                                        <TextInput
                                            className="focus:outline-none border h-14 px-[12px] py-[10px] border-gray-300 rounded-lg placeholder:font-normal placeholder:text-sm placeholder:leading-6"
                                            placeholder="Abebe"
                                            keyboardType="default"
                                            autoCapitalize="words"
                                            value={value}
                                            onChangeText={onChange}
                                            editable={!isSubmitting}
                                        />
                                    )}
                                />
                                {errors.firstName && (
                                    <Text className="text-red-500 text-xs mt-1">
                                        {errors.firstName.message}
                                    </Text>
                                )}
                            </View>


                            <View className="flex flex-col gap-[10px] mt-10">
                                <Text className="font-semibold text-sm leading-6 text-[#333333]">
                                    Last Name <Text className="text-red-500">*</Text>
                                </Text>
                                <Controller
                                    control={control}
                                    name="lastName"
                                    render={({ field: { onChange, value } }) => (
                                        <TextInput
                                            className="focus:outline-none border h-14 px-[12px] py-[10px] border-gray-300 rounded-lg placeholder:font-normal placeholder:text-sm placeholder:leading-6"
                                            placeholder="Kebede"
                                            keyboardType="default"
                                            autoCapitalize="words"
                                            value={value}
                                            onChangeText={onChange}
                                            editable={!isSubmitting}
                                        />
                                    )}
                                />
                                {errors.lastName && (
                                    <Text className="text-red-500 text-xs mt-1">
                                        {errors.lastName.message}
                                    </Text>
                                )}
                            </View>

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
                                            placeholder="Abekebe@gmail.com"
                                            keyboardType="default"
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

                            <View className="flex flex-col gap-[10px] mt-10">
                                <Text className="font-semibold text-sm leading-6 text-[#333333]">
                                    Phone Number <Text className="text-red-500">*</Text>
                                </Text>
                                <Controller
                                    control={control}
                                    name="phoneNumber"
                                    render={({ field: { onChange, value } }) => (
                                        <TextInput
                                            className="focus:outline-none border h-14 px-[12px] py-[10px] border-gray-300 rounded-lg placeholder:font-normal placeholder:text-sm placeholder:leading-6"
                                            placeholder="091145...."
                                            keyboardType="phone-pad"
                                            value={value}
                                            onChangeText={onChange}
                                            editable={!isSubmitting}
                                        />
                                    )}
                                />
                                {errors.phoneNumber && (
                                    <Text className="text-red-500 text-xs mt-1">
                                        {errors.phoneNumber.message}
                                    </Text>
                                )}
                            </View>

                            <View className="flex flex-col gap-[10px] mt-10">
                                <Text className="font-semibold text-sm leading-6 text-[#333333]">
                                    Birth Date <Text className="text-red-500">*</Text>
                                </Text>
                                <Controller
                                    control={control}
                                    name="dateOfBirth"
                                    render={({ field: { onChange, value } }) => (
                                        // <TextInput
                                        //     className="focus:outline-none border h-14 px-[12px] py-[10px] border-gray-300 rounded-lg placeholder:font-normal placeholder:text-sm placeholder:leading-6"
                                        //     placeholder="091145...."
                                        //     keyboardType="phone-pad"
                                        //     value={value}
                                        //     onChangeText={onChange}
                                        //     editable={!isSubmitting}
                                        // />
                                        <DateTimePicker
                                            mode="single"
                                            date={value}
                                            onChange={(params) => onChange(params.date)}

                                        />
                                    )}
                                />
                                {errors.dateOfBirth && (
                                    <Text className="text-red-500 text-xs mt-1">
                                        {errors.dateOfBirth.message}
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

                            <View className="flex flex-col gap-[10px] my-2">
                                <Text className="font-semibold text-sm leading-6 text-[#333333]">
                                    Confirm Password <Text className="text-red-500">*</Text>
                                </Text>
                                <View className="relative">
                                    <Controller
                                        control={control}
                                        name="confirmPassword"
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
                                {errors.confirmPassword && (
                                    <Text className="text-red-500 text-xs mt-1">
                                        {errors.confirmPassword.message}
                                    </Text>
                                )}
                            </View>

                            {errorMessage && (
                                <Text className="text-red-500 text-center mt-4">
                                    {errorMessage}
                                </Text>
                            )}

                            <AllergySelector />

                            {/* <Chip icon="information" onPress={() => console.log('Pressed')}>Example Chip</Chip> */}

                            <View>
                                <TouchableOpacity
                                    className={`w-full py-4 px-8 rounded-lg mt-3 ${isSubmitting ? "bg-gray-400" : "bg-[#F56606]"
                                        }`}
                                    onPress={() => router.replace("/(tabs)/home")}
                                    // onPress={handleSubmit(onSubmit)}
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <View className="flex-row justify-center items-center">
                                            <ActivityIndicator color="white" />
                                            <Text className="text-white text-sm font-semibold ml-2">
                                                Regsitering...
                                            </Text>
                                        </View>
                                    ) : (
                                        <Text className="text-center text-white text-sm font-semibold">
                                            Register
                                        </Text>
                                    )}
                                </TouchableOpacity>
                            </View>



                            <View className='my-6 flex flex-row text-center mx-auto'>
                                <Text className='text-center'>
                                    Have an account?
                                    <Link href={"./login"}>
                                        <Text className='text-[#F56606]'>
                                            {" "}  Log in
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

export default register
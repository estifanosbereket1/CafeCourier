import React, { FC } from "react";
import { View, Text } from "react-native";

interface HeaderProps {
  title: string;
  subTitle: string;
  main?: boolean;
}

const Header: FC<HeaderProps> = ({ title, subTitle, main }) => {
  return (
    <View className="flex flex-col items-start justify-center gap-2 mt-5 mx-2">
      <Text className="font-bold text-3xl text-black">{title}</Text>
      <Text className="text-sm text-gray-700">{subTitle}</Text>
    </View>
  );
};

export default Header;

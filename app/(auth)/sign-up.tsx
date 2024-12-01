/* eslint-disable prettier/prettier */
import { Redirect } from "expo-router";
import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images, icons } from "@/constants";
import InputField from "@/components/InputField";

const SignUp = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  return (
    <ScrollView>
      <View className="flex-1 bg-white">
        <View className="flex-1 bg-white">
          <View className="relative w-full h-[250px]">
            <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
            <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">
              Create Your Account
            </Text>
          </View>

          <View className="p-5">
            <InputField
              label="Name"
              placeholder="Enter your name"
              icon={icons.person}
              value={form.name}
              onChangeText={(value: any) => setForm({ ...form, name: value })}
              labelStyle={undefined}
              containerStyle={undefined}
              inputStyle={undefined}
              iconStyle={undefined}
              className={undefined}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );

  // return <Redirect href="/(auth)/welcome"/>;
};

export default SignUp;

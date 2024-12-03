/* eslint-disable prettier/prettier */
import { Link, Redirect } from "expo-router";
import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images, icons } from "@/constants";
import InputField from "@/components/InputField";
import CustomButton from "@/components/CustomButton";
import OAuth from "@/components/OAuth";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const onSignInPress = async () => {};

  return (
    <ScrollView>
      <View className="flex-1 bg-white">
        <View className="flex-1 bg-white">
          <View className="relative w-full h-[250px]">
            <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
            <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">
              Welcome
            </Text>
          </View>

          <View className="p-5">
            <InputField
              label="Email"
              placeholder="Enter your email"
              icon={icons.email}
              value={form.email}
              onChangeText={(value: any) => setForm({ ...form, email: value })}
              labelStyle={undefined}
              containerStyle={undefined}
              inputStyle={undefined}
              iconStyle={undefined}
              className={undefined}
            />

            <InputField
              label="Password"
              placeholder="Enter your password"
              icon={icons.lock}
              secureTextEntry={true}
              value={form.password}
              onChangeText={(value: any) =>
                setForm({ ...form, password: value })
              }
              labelStyle={undefined}
              containerStyle={undefined}
              inputStyle={undefined}
              iconStyle={undefined}
              className={undefined}
            />

            <CustomButton
              title="Sign In"
              onPress={onSignInPress}
              className="mt-6"
            />

            <OAuth />
            <Link href="/sign-up">
              <Text className="text-lg text-center text-general-200 mt-10">
                Don't have an account? {" "}
              </Text>
              <Text className="text-primary-500">Sign Up</Text>
            </Link>
          </View>

          {/*verification modal */}
        </View>
      </View>
    </ScrollView>
  );
};

export default SignIn;

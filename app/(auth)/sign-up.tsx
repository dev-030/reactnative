import { createUser } from "@/lib/appwrite";
import { Link, router } from "expo-router";
import { useState } from "react";
import { Alert, Button, Text, TextInput, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";




export default function SignUp() {

  const [isSubmitting, setSubmitting] = useState(false)

  const [form, setFrom] = useState({
      username:"",
      email: "",
      password: ""
  })

  const submit = async() => {  

    if(!form.email || !form.password || !form.username){
      Alert.alert('Error', 'Please fill in all the fields.')
      return;
    }

    setSubmitting(true)

    try {

      const user = await createUser({email:form.email, password:form.password, username:form.username})

      router.replace("/home")
    } catch (error:any) {
        Alert.alert('Error',error.message)
    } finally {
      setSubmitting(false)
    }

  }


  return (
    <SafeAreaView className="bg-[#161622] h-full w-full">
        <ScrollView>

          <Text className="text-white text-center text-4xl font-bold mt-40">Sign Up</Text>

          <View className="gap-2 mt-10 min-w-[40vh] mx-auto">

            <TextInput
              className="border-2 p-2 border-white rounded text-white font-psemibold text-base"
              placeholder={'User Name'}
              placeholderTextColor="#7B7B8B"
              onChangeText={(e)=> setFrom({...form, username:e})}
            />

            <TextInput
              className="border-2 p-2 border-white rounded text-white font-psemibold text-base"
              placeholder={'Email'}
              placeholderTextColor="#7B7B8B"
              keyboardType="email-address"
              onChangeText={(e)=> setFrom({...form, email:e})}
            />

            <TextInput
              className="border-2 p-2 border-white rounded text-white font-psemibold text-base"
              placeholder={'Passwrod'}
              placeholderTextColor="#7B7B8B"
              onChangeText={(e)=> setFrom({...form, password:e})}
            />

            <TouchableOpacity onPress={submit} 
            className="rounded-2xl border-2 border-black-200 focus:border-secondary">
                <Text className="text-white text-center font-bold text-lg border-2 border-orange-400 p-2 rounded mt-5">Submit</Text>
            </TouchableOpacity>

          </View>

          <View className="flex-row justify-center gap-1 mt-10">
              <Text className="text-white font-bold">Already have an account?</Text>
              <Link className="text-orange-400 font-bold" href={"/sign-in"}>Sign In</Link>
          </View>

        </ScrollView>
    </SafeAreaView>
  );
}
import { signIn, CurrentUser } from "@/lib/appwrite";
import { Link, router } from "expo-router";
import { useState } from "react";
import { Alert, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";



export default function SignIn() {

  const [isSubmitting, setSubmitting] = useState(false)

  const [form, setFrom] = useState({
      email: "",
      password: ""
  })


  const submit = async() => {  

    // const val = CurrentUser()

    if(!form.email || !form.password){
      Alert.alert("Please full up both fiels")
      return;
    }

    setSubmitting(true);

    try {
      await signIn(form.email,form.password)


      router.replace('/home')
    } catch (error:any) {
      Alert.alert('Error',error.message)
    } finally {
      setSubmitting(false)
    }

  }


  return (
  <>

    <SafeAreaView className="bg-[#161622] h-full ">
        <ScrollView>

          <Text className="text-white text-center text-4xl font-bold mt-40">Sign In</Text>

          <View className="gap-2 mt-10 min-w-[40vh] mx-auto">

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
              <Text className="text-white font-bold">Don't have an account?</Text>
              <Link className="text-orange-400 font-bold" href={"/sign-up"}>Sign Up</Link>
          </View>


        </ScrollView>
    </SafeAreaView>

</>
)}
import { useGlobalContext } from "@/context/GlobalProvider";
import { Link, Redirect } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";






export default function App() {

    // const {isLogged,loading} = useGlobalContext()

    // if(!loading){
    //     if(isLogged){
    //         return <Redirect href="/home"/>
    //     }else{
    //         return (
    //             <SafeAreaView>
    //             <View className="items-center justify-center h-full bg-black">
    //                 <Text className="text-white text-4xl font-semibold">Welcome</Text>
    //                 <Link className="text-white border-2 border-yellow-400 p-2 mt-5 rounded-lg" href="/sign-in">Next</Link>
    //             </View>
    //         </SafeAreaView>
    //         )
    //     }
    // }

    return (
        <SafeAreaView>
                <View className="items-center justify-center h-full bg-black">
                    <Text className="text-white text-4xl font-semibold">Welcome</Text>
                    <Link className="text-white border-2 border-yellow-400 p-2 mt-5 rounded-lg" href="/sign-in">Next</Link>
                </View>
        </SafeAreaView>
    )
}
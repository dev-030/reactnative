import { Redirect, Stack, Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useGlobalContext } from '@/context/GlobalProvider';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const {isLogged,loading} = useGlobalContext()

  if (!loading && !isLogged) return <Redirect href="/sign-in" />;

  

  return (

    <Tabs screenOptions={{ tabBarShowLabel: false,
        tabBarActiveTintColor: "#FFA001",
        tabBarInactiveTintColor: "#CDCDE0",
        tabBarStyle:{
          backgroundColor: "black",
          borderTopWidth: 1,
          borderTopColor: "#232533",
          height: 60,
        }
    }}>

      <Tabs.Screen name='home' options={{title:"Home", headerShown:false, tabBarIcon:({color, focused})=>(
        <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color}/>
      )}}/>

      <Tabs.Screen name='explore' options={{title:"Explore", headerShown:false, tabBarIcon:({color, focused})=>(
        <TabBarIcon name={focused ? 'code-slash':'code-slash-outline'} color={color}/>
      )}}/>

    </Tabs>

  );
}

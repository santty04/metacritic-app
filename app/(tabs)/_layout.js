
import { View } from "react-native";
import { HomeIcon, InfoIcon } from '../../components/Icons';
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
    screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#000",
        },
        tabBarActiveTintColor: "yellow",
    }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarIcon: ({ color }) => <InfoIcon color={color} />,
        }}
      />
    </Tabs>
  );
}

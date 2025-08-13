import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import Home from "../screens/Home";
import Features from "../screens/Features";
import Settings from "../screens/Settings";
import Profile from "../screens/Profile";

const Tab = createBottomTabNavigator();

export default function MainNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Features") {
            iconName = focused ? "star" : "star-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          } else {
            iconName = "home-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#f97316",
        tabBarInactiveTintColor: "#64748b",
        tabBarStyle: {
          backgroundColor: "white",
          borderTopWidth: 1,
          borderTopColor: "#e2e8f0",
          paddingBottom: 8,
          paddingTop: 8,
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
        headerShown: false,
      })}
    >
      <Tab.Screen 
        name="Home" 
        component={Home}
        options={{
          title: "Home",
        }}
      />
      <Tab.Screen 
        name="Features" 
        component={Features}
        options={{
          title: "Features",
        }}
      />
      <Tab.Screen 
        name="Settings" 
        component={Settings}
        options={{
          title: "Settings",
        }}
      />
      <Tab.Screen 
        name="Profile" 
        component={Profile}
        options={{
          title: "Profile",
        }}
      />
    </Tab.Navigator>
  );
} 
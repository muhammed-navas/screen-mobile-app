import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Settings() {
  const [notifications, setNotifications] = React.useState(true);
  const [darkMode, setDarkMode] = React.useState(false);

  const settingsItems = [
    {
      id: 1,
      title: "Notifications",
      subtitle: "Manage your notification preferences",
      icon: "notifications",
      type: "switch",
      value: notifications,
      onValueChange: setNotifications,
    },
    {
      id: 2,
      title: "Dark Mode",
      subtitle: "Switch between light and dark theme",
      icon: "moon",
      type: "switch",
      value: darkMode,
      onValueChange: setDarkMode,
    },
    {
      id: 3,
      title: "Account",
      subtitle: "Manage your account settings",
      icon: "person",
      type: "navigate",
    },
    {
      id: 4,
      title: "Privacy",
      subtitle: "Control your privacy settings",
      icon: "shield-checkmark",
      type: "navigate",
    },
    {
      id: 5,
      title: "Help & Support",
      subtitle: "Get help and contact support",
      icon: "help-circle",
      type: "navigate",
    },
    {
      id: 6,
      title: "About",
      subtitle: "Learn more about the app",
      icon: "information-circle",
      type: "navigate",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Settings</Text>
        <Text style={styles.headerSubtitle}>Customize your experience</Text>
      </View>
      
      <View style={styles.settingsList}>
        {settingsItems.map((item) => (
          <TouchableOpacity key={item.id} style={styles.settingItem}>
            <View style={styles.settingLeft}>
              <View style={styles.iconContainer}>
                <Ionicons name={item.icon as any} size={20} color="#f97316" />
              </View>
              <View style={styles.settingText}>
                <Text style={styles.settingTitle}>{item.title}</Text>
                <Text style={styles.settingSubtitle}>{item.subtitle}</Text>
              </View>
            </View>
            {item.type === "switch" ? (
              <Switch
                value={item.value}
                onValueChange={item.onValueChange}
                trackColor={{ false: "#e2e8f0", true: "#f97316" }}
                thumbColor={item.value ? "#ffffff" : "#f4f3f4"}
              />
            ) : (
              <Ionicons name="chevron-forward" size={20} color="#cbd5e1" />
            )}
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    padding: 24,
    paddingTop: 60,
    backgroundColor: "#f97316",
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: "800",
    color: "white",
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    color: "rgba(255, 255, 255, 0.8)",
  },
  settingsList: {
    padding: 16,
  },
  settingItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  settingLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#fef3c7",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  settingText: {
    flex: 1,
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1e293b",
    marginBottom: 2,
  },
  settingSubtitle: {
    fontSize: 14,
    color: "#64748b",
  },
}); 
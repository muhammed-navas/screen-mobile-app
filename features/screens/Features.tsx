import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Features() {
  const features = [
    {
      id: 1,
      title: "Quick Delivery",
      description: "Get your groceries delivered in minutes",
      icon: "flash",
      color: "#f97316",
    },
    {
      id: 2,
      title: "Fresh Products",
      description: "Handpicked fresh items daily",
      icon: "leaf",
      color: "#22c55e",
    },
    {
      id: 3,
      title: "Best Prices",
      description: "Competitive prices on all items",
      icon: "pricetag",
      color: "#3b82f6",
    },
    {
      id: 4,
      title: "24/7 Support",
      description: "Round the clock customer support",
      icon: "headset",
      color: "#8b5cf6",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Features</Text>
        <Text style={styles.headerSubtitle}>Discover what makes us special</Text>
      </View>
      
      <View style={styles.featuresGrid}>
        {features.map((feature) => (
          <TouchableOpacity key={feature.id} style={styles.featureCard}>
            <View style={[styles.iconContainer, { backgroundColor: feature.color }]}>
              <Ionicons name={feature.icon as any} size={24} color="white" />
            </View>
            <Text style={styles.featureTitle}>{feature.title}</Text>
            <Text style={styles.featureDescription}>{feature.description}</Text>
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
  featuresGrid: {
    padding: 16,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  featureCard: {
    width: "48%",
    backgroundColor: "white",
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1e293b",
    marginBottom: 4,
  },
  featureDescription: {
    fontSize: 14,
    color: "#64748b",
    lineHeight: 20,
  },
}); 
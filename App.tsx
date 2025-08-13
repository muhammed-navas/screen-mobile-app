import "./global.css"
import { NavigationContainer } from "@react-navigation/native";
import Onboarding from "./features/screens/Onboarding";
import MainNavigator from "./features/navigation/MainNavigator";
import { useState } from "react";

export default function App() {
  const [showOnboarding, setShowOnboarding] = useState(true);

  if (showOnboarding) {
    return (
      <Onboarding
        onDone={() => setShowOnboarding(false)}
        onSkip={() => setShowOnboarding(false)}
      />
    );
  }

  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
}

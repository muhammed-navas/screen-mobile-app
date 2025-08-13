import "./global.css"
import Onboarding from "./features/screens/Onboarding";
import Home from "./features/screens/Home";
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

  return <Home />;
}

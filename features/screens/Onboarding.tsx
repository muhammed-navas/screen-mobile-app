import { StatusBar } from "expo-status-bar";
import React, { useCallback, useRef, useState } from "react";
import { 
  FlatList, 
  Image, 
  Pressable, 
  Text, 
  View, 
  ViewToken,
  Dimensions,
  StyleSheet
} from "react-native";

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const slides = [
  {
    key: "slide-1",
    title: "Homework Easily",
    description: "It is recommended that you complete this assign to improve your all skills for beginner languages.",
    image: require("../../assets/first.jpg"),
  },
  {
    key: "slide-2", 
    title: "Next Step",
    description: "Continue your journey and explore more advanced topics to level up your coding skills.",
    image: require("../../assets/second.jpg"),
  },
];

export default function Onboarding({ onDone, onSkip }: { onDone?: () => void; onSkip?: () => void; }) {
  const listRef = useRef<FlatList<any>>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const onViewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: Array<ViewToken> }) => {
      if (viewableItems && viewableItems.length > 0 && viewableItems[0].index != null) {
        setCurrentIndex(viewableItems[0].index);
      }
    }
  ).current;

  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 60 });

  const handleNext = useCallback(() => {
    const nextIndex = currentIndex + 1;
    if (nextIndex < slides.length) {
      listRef.current?.scrollToIndex({ index: nextIndex, animated: true });
    }
  }, [currentIndex]);

  const handleSkip = useCallback(() => {
    onSkip?.();
  }, [onSkip]);

  const isLast = currentIndex === slides.length - 1;

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      <FlatList
        ref={listRef}
        data={slides}
        keyExtractor={(item) => item.key}
        horizontal
        pagingEnabled
        bounces={false}
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewConfigRef.current}
        renderItem={({ item }) => (
          <View style={styles.slide}>
            {/* Image Container */}
            <View style={styles.imageContainer}>
              <Image
                source={item.image}
                style={styles.image}
                resizeMode="contain"
              />
            </View>

            {/* Content Container */}
            <View style={styles.contentContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          </View>
        )}
      />

      {/* Fixed Bottom Navigation - Outside FlatList */}
      <View style={styles.bottomContainer}>
        {/* Dots Pagination */}
        <View style={styles.dotsContainer}>
          {slides.map((_, i) => (
            <View
              key={`dot-${i}`}
              style={[
                styles.dot,
                currentIndex === i ? styles.activeDot : styles.inactiveDot
              ]}
            />
          ))}
        </View>

        {/* Next/Done Button */}
        <Pressable
          onPress={() => {
            if (isLast) {
              onDone?.();
            } else {
              handleNext();
            }
          }}
          style={[
            styles.nextButton,
            isLast ? styles.activeButton : styles.activeButton
          ]}
        >
          <Text
            style={[
              styles.buttonText,
              styles.activeText
            ]}
          >
            {isLast ? "Done" : "Next"}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  skipButton: {
    position: 'absolute',
    top: 50,
    right: 20,
    zIndex: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  skipText: {
    color: '#f97316',
    fontSize: 16,
    fontWeight: '500',
  },
  slide: {
    width: screenWidth,
    height: screenHeight,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 24,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 80,
    paddingBottom: 40,
  },
  image: {
    width: screenWidth * 0.8, // 80% of screen width
    height: screenHeight * 0.4, // 40% of screen height
    maxWidth: 320,
    maxHeight: 320,
  },
  contentContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e293b',
    textAlign: 'center',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: '#64748b',
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 10,
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    paddingBottom: 50,
    paddingHorizontal: 24,
    backgroundColor: '#ffffff',
  },
  dotsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#1e293b',
  },
  inactiveDot: {
    backgroundColor: '#cbd5e1',
  },
  nextButton: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 25,
    minWidth: 120,
    alignItems: 'center',
  },
  activeButton: {
    backgroundColor: '#1e293b',
  },
  disabledButton: {
    backgroundColor: '#cbd5e1',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  activeText: {
    color: '#ffffff',
  },
  disabledText: {
    color: '#64748b',
  },
});
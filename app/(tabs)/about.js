import { Link } from "expo-router";
import { Pressable, ScrollView, Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { HomeIcon } from "../../components/Icons";

import { styled } from "nativewind";
import { Screen } from "../../components/Screen";

const StyledPressable = styled(Pressable);

export default function About() {
  return (
    <Screen>
      <ScrollView>
        <Link asChild href="/">
          <StyledPressable className={`active:opacity-20`}>
            <HomeIcon />
          </StyledPressable>
        </Link>

        <Text className="text-white font-bold mb-8 text-2xl">
          Sobre el proyecto
        </Text>

        <Text className="text-white text-white/90 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor,
          nunc nec dolor sit amet, consectetur adipiscing elit. Donec auctor,
          nunc nec dolor sit amet, consectetur adipiscing elit. Donec auctor,
          nunc nec
        </Text>
        <Text className="text-white text-white/90 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor,
          nunc nec dolor sit amet, consectetur adipiscing elit. Donec auctor,
          nunc nec dolor sit amet, consectetur adipiscing elit. Donec auctor,
          nunc nec
        </Text>
        <Text className="text-white text-white/90 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor,
          nunc nec dolor sit amet, consectetur adipiscing elit. Donec auctor,
          nunc nec dolor sit amet, consectetur adipiscing elit. Donec auctor,
          nunc nec
        </Text>
        <Text className="text-white text-white/90 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor,
          nunc nec dolor sit amet, consectetur adipiscing elit. Donec auctor,
          nunc nec dolor sit amet, consectetur adipiscing elit. Donec auctor,
          nunc nec
        </Text>
      </ScrollView>
    </Screen>
  );
}

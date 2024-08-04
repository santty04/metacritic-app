import { Link, Stack } from "expo-router";
import { ActivityIndicator, Image, ScrollView, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Screen } from "../components/Screen";
import { getGameDetails } from "../lib/metacritic";
import { useEffect, useState } from "react";
import { Score } from "../components/Score";

export default function Detail() {
  const { id } = useLocalSearchParams();
  const [gameInfo, setGameInfo] = useState(null);

  useEffect(() => {
    getGameDetails(id).then(setGameInfo);
  }, [id]);

  return (
    <Screen>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "yellow" },
          headerTintColor: "black",
          headerLeft: () => {},
          headerTitle: "The legend of Zelda: Breath of the Wild",
          headerRight: () => {},
        }}
      />
      <View>
        {!gameInfo ? (
          <ActivityIndicator color={"#fff"} size={"large"} />
        ) : (
          <ScrollView>
            <View className="justify-center items-center text-center">
              <Image
                className="mb-4 rounded"
                source={{ uri: gameInfo.img }}
                style={{ width: 214, height: 294 }}
              />
              <Score score={gameInfo.score} maxScore={100} />
              <Text className="text-white text-center font-bold text-2xl">
                {gameInfo.title}
              </Text>
              <Text className="text-white/70 mt-4 text-left mb-8 text-base">
                {gameInfo.description}
              </Text>
            </View>
          </ScrollView>
        )}
      </View>
    </Screen>
  );
}

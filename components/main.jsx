import { useEffect, useState } from "react";
import { Link } from "expo-router";
import { StyleSheet, Text, View, Pressable, Image, ScrollView, SafeAreaView, ActivityIndicator, FlatList } from "react-native";
import { getLatestGames } from "../lib/metacritic";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AnimatedGameCard } from "./gamecard";
import { Logo } from "./Logo";
import { AboutIcon } from "./icons";
import "../global.css";
import { Screen } from "./Screen";

export function Main() {
  const [games, setGames] = useState([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    getLatestGames().then((games) => setGames(games));
  }, []);

  return (
    <Screen>
    {/* <View className="bg-black" style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>  */}
    {/* <View className="flex-row items-center justify-between mb-4 mx-2"> 
      <View>
        <Logo />
      </View> */}

      {/* <Link href="/about" className="text-white text-2xl font-bold mb-8" style={{ color: "blue" }}>
         Ir al about
      </Link> */}
       {/* <Link asChild href="/about" >
            <Pressable  >
                <AboutIcon />
            </Pressable>
        </Link>
        </View> */}
      {games.length === 0 ? ( 
        <ActivityIndicator color={"#fff"} size={"large"} />
      ) : (
        // <ScrollView>
        //    {games.map((game) => (
        //       <GameCard key={game.id} game={game} />
        //   ))}
        // </ScrollView>

        <FlatList 
          data={games}
          keyExtractor={(game) => game.id}
          renderItem={({ item, index }) => <AnimatedGameCard game={item} index={index} />}
        />
     )}
    </Screen>
  );
}


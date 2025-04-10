import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Pressable, Image, ScrollView, SafeAreaView } from "react-native";
import { getLatestGames } from "../lib/metacritic";

/** Esto es lo mismo de diferentes formas */
//import icon from "./assets/icon.png";
//const icon = require("./assets/icon.png");

export function Main() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    getLatestGames().then((games) => setGames(games));
  }, []);

  return (
    <>
      <StatusBar style="light" />

      {/* <Image source={icon} style={{ width: 305, height: 159 }} /> */}
      {/* <Image source={{ uri: "https://www.metacritic.com/a/img/catalog/provider/6/3/6-1-4763-13.jpg" }} style={{ width: 215, height: 294 }} />
      <Text style={{ color: "white" }}>Hola mundo</Text> */}
      {/* <Button title="Presiona Aquí" onPress={() => alert("Button pressed")} /> */}
      {/* <TouchableHighlight underlayColor={"#09f"} onPress={() => alert("TouchableHighlight pressed")} style={{ padding: 10, backgroundColor: "blue", borderRadius: 20 }}>
        <Text style={{ color: "white"}}> Pulsa TouchableHighlight</Text>
      </TouchableHighlight> */}
      {/* <Pressable
        onPress={() => {}}
        style={({ pressed }) => [
          { backgroundColor: pressed ? "blue" : "red" },
          { padding: 10, borderRadius: 20 },
            styles.wrapperCustom
        ]}
      >
        {({ pressed }) => (
          <Text style={{ color: "white", fontSize: pressed ? "32" : "16" }}> { pressed ? "Hola" : "Pulsa Pressable" }</Text>
        )}
      </Pressable> */}
      
      <ScrollView>
      {games.map((game) => (
        // <View key={game.slug} style={styles.card}>
        //   <Image source={{ uri: game.image }} style={styles.image} />
        //   <Text style={styles.title}>{game.title}</Text>
        // </View>
         <View key={game.id} style={styles.card}>
         <Image source={{ uri: game.thumbnail }} style={styles.image}/>
         <Text style={styles.title}>{game.title}</Text>
         <Text style={styles.description}>{game.short_description}</Text>
         <Text style={styles.platform}>{game.platform}</Text>
         <Text style={styles.releasedate}>{game.release_date}</Text>
       </View> 
      ))}
      </ScrollView>
      
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    marginBottom: 10
  },
  image: {
    width: 107,
    height: 147,
    borderRadius: 10,
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#eee",
  },
  score: {
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
    marginBottom: 10,
  },
});

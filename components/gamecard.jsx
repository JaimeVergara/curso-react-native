import { StyleSheet, Image, View, Text, Animated, Pressable } from "react-native";
import { useEffect, useRef } from "react";
import "../global.css";
import { Link } from "expo-router";

import { styled } from "nativewind";

//const StyledPressable = styled(Pressable);

export function GameCard({ game }) {
    return (
        <Link href={`${game.id}`} asChild>
            <Pressable>
                <View key={game.id} className="flex-row bg-slate-100/10 p-6 rounded-xl gap-4 mb-10" >
                    <Image source={{ uri: game.thumbnail }} style={styles.image}/>
                    <View>
                        <Text style={styles.title}>{game.title}</Text>
                        <Text style={styles.description}>{game.short_description}</Text>
                        <Text style={styles.platform}>{game.platform}</Text>
                    </View>
                </View>
            </Pressable>
        </Link>
    );
}

export function AnimatedGameCard({ game, index }){
    const opacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 500,
            delay: 500 * index,
            useNativeDriver: true,
        }).start();
    }, [opacity, index]);

    return(
      <Animated.View style={{ opacity }}>
        <GameCard game={game} />
      </Animated.View>  
    );
}

const styles = StyleSheet.create({
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
      marginTop: 10,
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
    platform: {
        fontSize: 16,
        color: "#eee",
        marginBottom: 10,
        fontStyle: "italic",
    }
  });
  
import { Link } from "expo-router";
import { Text, View, ActivityIndicator, ScrollView, Image } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Screen } from "../components/Screen";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { getGameDetails } from "../lib/metacritic";


export default function Detail(){
    const { id } = useLocalSearchParams(); //el id es el nombre del archivo [id].js.
    const [ gameInfo, setGameInfo ] = useState(null);

    useEffect(() => {
        if (id){
            getGameDetails(id).then(setGameInfo);
        }
    }, [id]);

    return(
        <Screen>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: "#ffee00"},
                    headerTintColor: "black",
                    headerLeft: () => {},
                    headerTitle: gameInfo ? gameInfo.title : "",
                }}
            />
            <View>
                {gameInfo === null ? (
                    <ActivityIndicator color={"#fff"} size={"large"} />
                ) : (
                <ScrollView>
                    <View className="justify-center items-center">  
                        <Image className="mb-4 rounded" source={{ uri: gameInfo.thumbnail }} style={{ width: 214, height: 294 }} />
                        <Text className="text-white text-center font-bold mb-8 text-2xl"> 
                            {gameInfo.title}
                        </Text>
                        <Text className="text-white/70 text-left mt-2 mb-8 text-xl"> 
                            {gameInfo.description}
                        </Text>
                    </View>
                </ScrollView>
                )}
            </View>
            {/* <Link href="/" className="text-blue-400">
               Volver atras
            </Link>  */}
        </Screen>
    );
}
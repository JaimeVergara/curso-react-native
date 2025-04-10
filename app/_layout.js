import { View, Pressable } from "react-native";
import { Stack } from "expo-router";
import "../global.css";
import { Logo } from "../components/Logo";
import { Link } from "expo-router";
import { AboutIcon } from "../components/icons";


export default function Layout(){ 
    return(
        <View className="flex-1 bg-black">
            <Stack 
                screenOptions={{
                    headerStyle: {
                        backgroundColor: "black",
                    },
                    headerTintColor: "yellow",
                    headerTitleStyle: {
                        fontWeight: "bold",
                    },
                    headerTitle: "",
                    headerLeft: () => <Logo />,
                    headerRight: () => (
                        <Link href="/about" asChild>
                            <Pressable>
                                <AboutIcon />
                            </Pressable>
                        </Link>
                    ),
                }}
            />
        </View>
    );
}
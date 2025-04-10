import { Link } from "expo-router";
import { Text, ScrollView, Pressable } from "react-native";
import { HomeIcon } from "../../components/icons";
import { Screen } from "../../components/Screen";

export default function About(){
    return(
        <Screen>
            <ScrollView> 
                <Link asChild href="/" >
                    <Pressable  >
                        <HomeIcon />
                    </Pressable>
                </Link>
                <Text className="text-white text-2xl font-bold mb-8">Sobre el proyecto</Text>

                <Text className="text-white/90 mb-9">Lorem ipsum .... </Text>

                <Text className="text-white/90 mb-9">Lorem ipsum .... </Text>

                <Text className="text-white/90 mb-9">Lorem ipsum .... </Text>

                <Text className="text-white/90 mb-9">Lorem ipsum .... </Text>
            </ScrollView>
        </Screen>
    );
}
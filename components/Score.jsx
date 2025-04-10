import { View, Text } from "react-native";

export function Score({ score, maxScore }){ 
    return(
        <View>
            <Text>{score}</Text>
        </View>
    );
}
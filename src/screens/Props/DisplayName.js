import React from "react";
import { View, Text } from "react-native";

const DisplayName = (props) => {
    return(
        <View>
            <Text>{props.name}</Text>
        </View>
    )
}

export default DisplayName;
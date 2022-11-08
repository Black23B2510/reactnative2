import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import DisplayName from "./DisplayName";

const PropsPractice = () => {
    const [name, setName] = useState('');
    const handleName = (name) => {
        setName(name);
    }
    return (
        <View style={{ flex: 1 }}>
            <TextInput
                style={{ backgroundColor: '#fff', padding: 12 }}
                onChangeText={ (name) => setName(name) }
                placeholder="Enter your name"
            >
            </TextInput>
            <TouchableOpacity
                onPress={handleName}
                style={{
                    backgroundColor: 'lightgreen',
                }}
            >
                <Text>+</Text>
            </TouchableOpacity>
            <View style={{backgroundColor: '#fff'}}>
                <DisplayName name = {name}/>
            </View>
        </View>
    )
}

export default PropsPractice;
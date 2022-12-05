import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Keyboard } from "react-native";
import DisplayName from "./DisplayName";

const PropsPractice = (props) => {
    const [name, setName] = useState('');
    const handleName = () =>{
        props.addName(name);
        setName('');
        Keyboard.dismiss();
    }
    return (
        <View style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <TextInput
                style={{
                    width: '80%',
                    height: 50,
                    padding: 12,
                    borderRadius: 10,
                    borderWidth: 1,
                    backgroundColor: '#53d6f2'
                }}
                value={name}
                onChangeText={(txt) => setName(txt)}
                placeholder="Enter your name"
            >
            </TextInput>
            <TouchableOpacity
                onPress={handleName}
                style={{
                    width: 44,
                    height: 44,
                    backgroundColor: '#21a3d0',
                    borderRadius: 44,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth: 1,
                    borderColor: '#eff7f8'
                }}
            >
                <Text style={{
                    fontSize: 22,
                    color: '#fff'
                }}>+</Text>
            </TouchableOpacity>
        </View>
    )
}

export default PropsPractice;
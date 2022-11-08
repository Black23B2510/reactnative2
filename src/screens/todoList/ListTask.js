import { View, SafeAreaView, Text, StyleSheet, Image, FlatList, ImageBackground, ScrollView, Button, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from 'react';

const Tasks = (props) => {
    const {number} = props;
    const numberText = number < 10 ? `0${number}` : number;
    const itemBg = number % 2 === 0 ? styles.even : styles.odd;
    return (
        <TouchableOpacity style={styles.listWraper}>
            <View style={styles.item}>
                <Text style={[styles.no, itemBg]}>{numberText}</Text>
                <Text style={styles.task}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default Tasks;

const styles = StyleSheet.create({
    listWraper: {
        marginVertical: 12
    },
    item: {
        backgroundColor: 'white',
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'

    },
    no: {
        padding: 12,
        color: 'white',
        borderRadius: 10,
        borderWidth: 1,
        fontSize: 20,
        fontWeight: '400'
    },
    even:{
        borderColor: 'lightgreen',
        backgroundColor: 'lightgreen'
    },
    odd:{
        borderColor: '#53d6f2',
        backgroundColor: '#53d6f2'
    },
    task: {
        width: '80%',
        color: 'black',
        fontSize: 20,
        fontWeight: '400'
    }
});
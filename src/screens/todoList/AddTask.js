import { View, Keyboard, Text, StyleSheet, Image, FlatList, ImageBackground, ScrollView, Button, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from 'react';


const AddTasks = (props) => {
    const [task, setTask] = useState('')
    const handleAddTasks = () => {
        if(task.length===0){
            alert('Please enter your task');
            return false;
        }
        props.onAddTasks(task);
        setTask('');
        Keyboard.dismiss();
    }
    return (
        <View style={styles.addTask}>
            <TextInput 
                value={task}
                onChangeText={(text) => setTask(text)}
                placeholder="Your Task"
                style={styles.input}></TextInput>
            <TouchableOpacity 
                onPress={handleAddTasks}
                style={styles.iconWraper}>
                <Text style={styles.icon}>+</Text>
            </TouchableOpacity>
        </View>
    )
};

export default AddTasks;

const styles = StyleSheet.create({
    addTask:{
        bottom: 30,
        paddingHorizontal: 20,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input:{
        width: '80%',
        height: 44,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#21a3d0',
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    iconWraper:{
        width: 44,
        height: 44,
        backgroundColor: '#21a3d0',
        borderRadius: 44,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#eff7f8'
    },
    icon:{
        fontSize: 22,
        color: '#fff'
    }
});
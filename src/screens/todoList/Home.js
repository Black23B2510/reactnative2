import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useState } from 'react';
import Tasks from "./ListTask";
import AddTasks from "./AddTask";

const TodoHome = () => {
    const [taskList, setTaskList] = useState([]);

    const handleAddTasks = (task) => {
        setTaskList([...taskList, task]);
    }
    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <Text style={styles.title}>To do list</Text>
                <ScrollView showsVerticalScrollIndicator = {false}>
                {
                    taskList.map( (item, index) =>{
                        return <Tasks key={index} title={item} number={index+1}/>
                    })
                }
                </ScrollView>
                <AddTasks onAddTasks = {handleAddTasks}/>
            </View>
        </View>
    )
};

export default TodoHome;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    body:{
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 18
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#53d6f2',
        marginBottom: 12
    }
});
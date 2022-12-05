import React from "react";
import { View, Text } from "react-native";
import { useState } from "react";
import PropsPractice from "./PropsPractice";

const DisplayName = () => {
    const [listName, setListName] = useState([]);
    const handleaddName = (name) => {
        setListName([...listName, name]);
    }
    return(
        <View>
            {
                listName.map((item, index) =>{
                    return(
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                            <Text>{index}</Text>
                            <Text>{item}</Text>
                        </View>
                    )
                })
            }
            <PropsPractice addName={handleaddName}/>
        </View>
    )
}

export default DisplayName;
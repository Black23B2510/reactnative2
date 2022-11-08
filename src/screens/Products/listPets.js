import { View, SafeAreaView, Text, StyleSheet, Image, FlatList, ImageBackground, ScrollView, Button } from "react-native";
import React, { useState } from 'react';

function listPet() {
    return(
        <SafeAreaView>
            <View style={styles.header}>
                <Image
                source={require('../../../images/hambegerIcon.png')}
                />
                <Image
                source={require('../../../images/proPicture.png')}
                />
            </View>
        </SafeAreaView>
    );
};

export default listPet;

const styles = StyleSheet.create({
    header:{
        flexDirection: 'row',
        alignItems: 'center'
    }
});
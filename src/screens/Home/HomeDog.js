import * as React from 'react';
import {Text, Image, View, StyleSheet, TouchableOpacity, SafeAreaView} from 'react-native';

const Home = ({navigation}) =>{
    return(
        <SafeAreaView style={{flex:1}}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Image
                style={{width: 50, height: 50}}
                source={require('../../../images/dogIcon.png')}
                />
                <View style={styles.titleHome}>
                    <Text style={{color: '#21a3d0', fontSize: 20}}>Make A New Friend !</Text>
                    <Text style={{color: 'tomato', fontSize: 20, marginTop: 10}}>Adopt A Pet today</Text>
                </View>
                <TouchableOpacity 
                    style = {styles.btn}
                    onPress={()=> navigation.navigate('Products')}>
                    <Text style={{fontSize: 20, fontWeight: '400', fontFamily:'Overlock-Bold'}}>Let's go</Text>
                </TouchableOpacity>
                <Image
                style={styles.imgHome}
                source={require('../../../images/doghm.png')}
                />
            </View>
        </SafeAreaView>
    );
}

export default Home;

const styles = StyleSheet.create({
    titleHome:{
        padding: 20
    },
    btn:{
        padding: 10,
        backgroundColor: 'yellow',
        borderRadius: 10,
        borderWidth: 1,
    },
    imgHome:{
        width: 400,
        height: 450,
        resizeMode: 'contain'
    }
});
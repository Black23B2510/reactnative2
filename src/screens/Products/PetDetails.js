import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import React from 'react';
import { useRoute } from "@react-navigation/native";

const Details = ({navigation}) => {
    const route = useRoute();
    return (
        <View style={styles.container}>
            <View style={styles.itemImg}>
                <Image
                    style={styles.img}
                    source={route.params.img}
                />
            </View>
            <View style={styles.itemDes}>
                <View style={{flexDirection: 'row', justifyContent:'space-between', marginTop: 30}}>
                    <Text style={styles.name}>{route.params.name}</Text>
                    <Text style={styles.price}> $ {route.params.price}</Text>
                </View>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator = {false}
                    // style={{backgroundColor:'red'}}
                >
                    <View style={styles.scrollview}>
                        <Text style={styles.ageTitle}>Age</Text>
                        <Text style={styles.ageValue}>{route.params.age}</Text>
                    </View>
                    <View style={styles.scrollview}>
                        <Text style={styles.ageTitle}>Sex</Text>
                        <Text style={styles.ageValue}>{route.params.gender}</Text>
                    </View>
                    <View style={styles.scrollview}>
                        <Text style={styles.ageTitle}>Color</Text>
                        <Text style={styles.ageValue}>{route.params.color}</Text>
                    </View>
                    <View style={styles.scrollview}>
                        <Text style={styles.ageTitle}>Weight</Text>
                        <Text style={styles.ageValue}>{route.params.weight} kg</Text>
                    </View>
                </ScrollView>
                <View style={styles.owner}>
                    <Image
                    source={require('../../../images/proPicture.png')}
                    />
                    <View>
                        <Text style={{fontSize: 18}}>Ben Benalli</Text>
                        <Text style={styles.ownerDesc}>Owner</Text>
                    </View>
                    <View>
                        <Text style={{fontSize: 18}}>1.68 km</Text>
                        <TouchableOpacity
                            onPress={()=>navigation.navigate('Map')}
                        >
                            <Text style={styles.ownerDesc}>View address on map</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.desWraper}>
                    <Text style={styles.desc}>{route.params.des}</Text>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 12}}>
                    <TouchableOpacity style={styles.btn}>
                        <Image
                            style={{
                                width: 30,
                                height: 30
                            }}
                            source={require('../../../images/dogIcon.png')}
                        />
                        <Text style={{ fontSize: 20, padding: 10, fontWeight: 'bold', color: 'white'}}>Adoption</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        
    )
};

export default Details;

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        flexDirection: 'column', 
        backgroundColor: '#FED3DD'
    },
    itemImg:{
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    itemDes:{
        paddingRight: 12,
        paddingLeft: 12,
        paddingBottom: 100,
        borderWidth: 1,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderColor: 'white',
        backgroundColor: 'white'
        
    },
    img:{
        width: 250,
        height: 270,
    },
    scrollview:{
        marginTop: 12,
        marginRight: 17,
        backgroundColor: 'grey', 
        width: 80, 
        height: 80, 
        padding: 6, 
        alignItems: 'center', 
        justifyContent:'space-around', 
        borderWidth: 1, 
        borderColor: 'lightgrey', 
        borderRadius: 20
    },
    name:{
        fontSize: 20, 
        fontWeight: '600', 
        color: 'grey'
    },
    price:{
        fontSize: 25, 
        fontWeight: '900', 
        color: 'salmon'
    },
    ageTitle:{
        color: 'tomato',
        fontSize: 20,
        fontWeight: '400'    
    },
    ageValue: {
        color: 'black',
        fontWeight: '400',
        fontSize: 15,

    },
    owner:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#FED3DD',
        padding: 12,
        marginTop: 12,
        borderWidth: 1,
        borderColor: '#FED3DD',
        borderRadius: 20
    },
    ownerDesc:{
        fontSize: 15,
        fontWeight: '400'
    },
    desWraper:{
        marginTop: 12,
    },
    desc:{
        fontSize: 20,
        fontWeight: '400',
        color: 'black'
    },
    btn:{
        width: 150,
        height: 70,
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'tomato',
        borderColor: 'tomato',
        borderWidth: 1,
        borderRadius: 20
    }
});
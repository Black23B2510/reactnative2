import { View, SafeAreaView, Text, StyleSheet, Image, FlatList, ImageBackground, ScrollView, Button, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from 'react';
import listPetss from "../../data/pets";
import petType from "../../data/PetTypes";



const ViewPetTypes = ({ item }) => {
  return (
    <TouchableOpacity style={{
      marginTop: 12,
      marginRight: 7,
      // flexDirection: 'column',
      alignItems: 'center',
      width: 90,
      height: 150,
      backgroundColor: '#9CAACA'
    }}>
      <Image
        style={{
          margin: 8,
          width: 50,
          height: 50,
        }}
        source={item.img}
      />
      <Text style={{
        fontFamily:'Overlock-Bold',
        fontWeight: 'bold'
        }}>{item.type}</Text>
    </TouchableOpacity>
  )
};

export default function Products({navigation}) {
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity 
      style={styles.card}
      onPress={ () => navigation.navigate('Details', item)}
      >
        <View style={styles.des}>
          <Text style={{
            fontSize: 18,
            fontFamily:'Overlock-Bold',
            fontWeight: 'bold',
            color: 'white'
          }}>
            {item.name}
          </Text>
          <Text>Lorem Ipsum is simply</Text>
          <Text style={{
            fontSize: 20,
            fontFamily:'Overlock-Bold',
            fontWeight: 'bold'
          }}>$ {item.price}</Text>
        </View>
        <Image
          style={{
            width: 200,
            height: 250
          }}
          source={item.img}
        />
      </TouchableOpacity>
    )
  }
  const [petTypes, setPetTypes] = useState(petType);
  const [listPet, setListPet] = useState(listPetss);
  // const [products, setProducts] = useState([
  //   {
  //     id: 0,
  //     name: 'Sugar Substitute',
  //     img: require('../../../images/image134.png'),
  //     price: ''
  //   },
  //   {
  //     id: 1,
  //     name: 'Juices & Vinegars',
  //     img: require('../../../images/image134.png'),
  //     price: ''
  //   },
  //   {
  //     id: 2,
  //     name: 'Vitamins Medicines',
  //     img: require('../../../images/image134.png'),
  //     price: ''
  //   },
  //   {
  //     id: 3,
  //     name: 'denden',
  //     img: require('../../../images/image134.png'),
  //     price: ''
  //   }
  // ]);
  // const [listProducts, setListProducts] = useState([
  //   {
  //     id: 0,
  //     name: 'Accu-check Active Test Strip',
  //     img: require('../../../images/image134.png'),
  //     price: '112'
  //   },
  //   {
  //     id: 1,
  //     name: 'Omron HEM-8712 BP Monitor',
  //     img: require('../../../images/image134.png'),
  //     price: '150'
  //   },
  //   {
  //     id: 2,
  //     name: 'Accu-check Active Test Strip',
  //     img: require('../../../images/image134.png'),
  //     price: '112'
  //   },
  //   {
  //     id: 3,
  //     name: 'Omron HEM-8712 BP Monitor',
  //     img: require('../../../images/image134.png'),
  //     price: '150'
  //   }
  // ]);
  return (
    <SafeAreaView style={{ flex: 1, margin: 12 }}>
      <View style={styles.header}>
        <Image
          style={{
            width: 50,
            height: 50
          }}
          source={require('../../../images/hambegerIcon.png')}
        />
        <Image
          style={{
            width: 50,
            height: 50
          }}
          source={require('../../../images/proPicture.png')}
        />
      </View>
      <View style={styles.searchBar}>
        <Text style={{
          fontSize: 15,
          fontWeight: 'bold',
          paddingTop: 12,
          paddingBottom: 12,
        }}>Search for a Pet</Text>
        <TextInput
          style={styles.search}
          placeholder="search"
        />
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={petTypes}
        renderItem={ViewPetTypes}
        keyExtractor={item => item.id}
      >
      </FlatList>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={listPet}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        refreshControl={
          <RefreshControl
          refreshing={false}
          onRefresh={() => {
            setListPet(listPet);
          }}/>
      }
      >
      </FlatList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 25,
    paddingRight: 25
  },
  banner: {
    position: 'relative',
    marginTop: 15,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  txtGroup: {
    position: 'absolute',
  },
  text: {
    marginTop: 28,
    marginLeft: 24,
    marginBottom: 6,
    width: 119,
    height: 42,
    fontSize: 18,
    color: '#1987FB',
    fontWeight: '700',
    lineHeight: 21,
    fontFamily: 'Overpass'
  },
  txt: {
    width: 124,
    height: 32,
    marginBottom: 32,
    marginLeft: 23,
    fontSize: 12,
    fontWeight: '300',
    fontFamily: 'Overpass',
    color: 'rgba(9, 15, 71, 0.65)',
  },
  product: {
    flex: 1.5,
  },
  item: {
    width: 110,
    height: 162,
    backgroundColor: '#F5F7FA',
    borderRadius: 10,
    marginRight: 16
  },
  itemName: {
    width: 60,
    fontSize: 13,
    marginLeft: 17,
    marginTop: 13,
    fontFamily: 'Overlock-Bold',
    fontWeight: '400',
    color: '#090F47',
    lineHeight: 18,
  },
  title: {
    marginTop: 19,
    marginBottom: 16,
    color: '#090F47',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 20
  },
  allProducts: {
    flex: 2.5,
  },
  titlePro: {
    marginTop: 15,
    marginBottom: 24,
    color: '#090F47',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 20
  },
  bgListProducts: {
    flex: 1,
    flexDirection: 'column',
    width: 157,
    height: 250,
    backgroundColor: '#FFFFFF',
    marginRight: 14,
    marginBottom: 16
  },
  proName: {
    marginLeft: 16,
    marginBottom: 8,
    width: 108,
    fontFamily: 'Overpass-Italic',
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 19,
    color: '#090F47'
  },
  proPrice: {
    marginLeft: 16,
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 19,
    color: '#090F47',
  },
  img: {
    width: 116,
    height: 120,
    margin: 22,
  },
  //style for listPets
  header: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  search: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5
  },
  card: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    height: 260,
    backgroundColor: '#F2C9D4',
    borderRadius: 10,
    borderWidth: 1,
  },
  des: {
    marginLeft: 12
  }
});

    // <SafeAreaView style={styles.container}>
    //   <View style={styles.banner}>
    //     <ImageBackground source={require("../../../images/banner.png")} style={styles.image}>
    //       <View style={styles.txtGroup}>
    //         <Text style={styles.text}>Save extra on every order</Text>
    //         <Text style={styles.txt}>Etiam mollis metus non faucibus sollicitudin.</Text>
    //       </View>
    //     </ImageBackground>
    //   </View>
    //   <View style={styles.product}>
    //     <Text style={styles.title}>
    //       Diabetic Diet
    //     </Text>
    //     <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
    //       <FlatList
    //         horizontal
    //         data={products}
    //         keyExtractor={item => item.id}
    //         renderItem={({ item }) => {
    //           return <View
    //             style={styles.item}>
    //             <Image
    //               style={{
    //                 width: 110,
    //                 height: 100,
    //               }}
    //               source={item.img} />
    //             <Text
    //               style={styles.itemName}>{item.name}</Text>
    //           </View>
    //         }}>
    //       </FlatList>
    //     </ScrollView>
    //   </View>
    //   <View style={styles.allProducts}>
    //     <Text style={styles.titlePro}>All Products</Text>
    //     <ScrollView showsVerticalScrollIndicator={false}>
    //       <FlatList
    //         numColumns={2}
    //         data={listProducts}
    //         keyExtractor={item => item.name}
    //         renderItem={({ item }) => {
    //           return <View style={styles.bgListProducts}>
    //             <View style={{
    //               width: 167,
    //               height: 158,
    //               backgroundColor: '#EBEBEB'
    //             }}>
    //               <Image
    //                 style={styles.img}
    //                 source={item.img}
    //               />
    //             </View>
    //             <Text style={styles.proName}>{item.name}</Text>
    //             <Text style={styles.proPrice}>${item.price}</Text>
    //           </View>
    //         }}>
    //       </FlatList>
    //     </ScrollView>
    //   </View>
    // </SafeAreaView>
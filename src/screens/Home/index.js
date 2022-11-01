// import {
//   ActivityIndicator,
//   Dimensions,
//   FlatList,
//   RefreshControl,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import React, {useState} from 'react';

// const SCREEN_WIDTH = Dimensions.get('screen').width;
// const SCREEN_HEIGHT = Dimensions.get('screen').height;

// const INITIAL_DATA = [
//   {
//     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//     title:'Sugar Substitute',
//     img:require('../../../images/image133.png'),
//     price:''
//   },
//   {
//     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//     title:'Sugar Substitute',
//     img:require('../../../images/image133.png'),
//     price:''
//   },
//   {
//     id: '5869d4a0f-3da1-471f-bd96-145571e29d72',
//     title:'Sugar Substitute',
//     img:require('../../../images/image133.png'),
//     price:''
//   },
//   {
//     id: '58694a0f-3da1-471f-bd9d6-145571e29d722',
//     title:'Sugar Substitute',
//     img:require('../../../images/image133.png'),
//     price:''
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-14557129d72',
//     title:'Sugar Substitute',
//     img:require('../../../images/image133.png'),
//     price:''
//   },
//   {
//     id: '58694a0f-3da1-471f-b96-145571e29d72',
//     title:'Sugar Substitute',
//     img:require('../../../images/image133.png'),
//     price:''
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-14557d1e29d72',
//     title:'Sugar Substitute',
//     img:require('../../../images/image133.png'),
//     price:''
//   },
//   {
//     id: '58694a0f-3d1-471f-bd96-145571e29d72',
//     title:'Sugar Substitute',
//     img:require('../../../images/image133.png'),
//     price:''
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-145571e2d72',
//     title:'Sugar Substitute',
//     img:require('../../../images/image133.png'),
//     price:''
//   },
//   {
//     id: '58694a0f-3da1-471-bd96-145571e29d72',
//     title:'Sugar Substitute',
//     img:require('../../../images/image133.png'),
//     price:''
//   },
// ];

// const Home = ({navigation}) => {
//   const [data, setData] = useState(INITIAL_DATA);

//   // const onLoadMore = () => {
//   //   setData([
//   //     ...data,
//   //     {
//   //       id: `${Math.random()}`,
//   //       title: 'New Item',
//   //     },
//   //     {
//   //       id: `${Math.random()}`,
//   //       title: 'New Item',
//   //     },
//   //     {
//   //       id: `${Math.random()}`,
//   //       title: 'New Item',
//   //     },
//   //   ]);
//   // };

//   const renderItem = ({item}) => {
//     return (
//       <TouchableOpacity
//         onPress={() => {
//           navigation.navigate('ProductDetail', {headerTitle: 'Product 2'});
//         }}
//         style={styles.item}>
//         <Text>{item?.title}</Text>
//       </TouchableOpacity>
//     );
//   };

//   // const renderHeader = () => {
//   //   return (
//   //     <View style={styles.headerContainer}>
//   //       <Text>headerTitle</Text>
//   //     </View>
//   //   );
//   // };

//   // const renderEmpty = () => {
//   //   return (
//   //     <View style={styles.emptyContainer}>
//   //       <Text>Empty</Text>
//   //     </View>
//   //   );
//   // };

//   // const renderFooter = () => {
//   //   return (
//   //     <View>
//   //       <ActivityIndicator size={'large'} color="red" />
//   //     </View>
//   //   );
//   // };

//   return (
//     <View style={styles.container}>
//       <FlatList
//         // ListHeaderComponent={renderHeader}
//         // ListFooterComponent={renderFooter}
//         // ListEmptyComponent={renderEmpty}
//         stickyHeaderIndices={[0]}
//         keyExtractor={item => item.id}
//         data={data}
//         renderItem={renderItem}
//         showsVerticalScrollIndicator={false}
//         refreshControl={
//           <RefreshControl
//             refreshing={false}
//             onRefresh={() => {
//               setData(INITIAL_DATA);
//             }}
//           />
//         }
//         // onEndReached={onLoadMore}
//       />
//     </View>
//   );
// };

// export default Home;

// const styles = StyleSheet.create({
//   item: {
//     backgroundColor: 'white',
//     width: SCREEN_WIDTH,
//     height: 80,
//     borderWidth: 1,
//     marginTop: 10,
//   },
//   container: {alignItems: 'center', justifyContent: 'center', flex: 1},
//   emptyContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: SCREEN_HEIGHT,
//     width: SCREEN_WIDTH,
//     backgroundColor: 'pink',
//   },
//   headerContainer: {height: 44, backgroundColor: 'pink'},
// });

import { View, Text, StyleSheet, Alert, Image,FlatList, ImageBackground, ScrollView, Button} from "react-native";
import React, {useState} from 'react';

export default function Home({navigation}) {
  const [products, setProducts] = useState([
    {
      id:0,
      name:'Sugar Substitute',
      img:require('../../../images/image134.png'),
      price:''
    },
    {
      id:1,
      name:'Juices & Vinegars',
      img:require('../../../images/image134.png'),
      price:''
    },
    {
      id:2,
      name:'Vitamins Medicines',
      img:require('../../../images/image134.png'),
      price:''
    },
    {
      id:3,
      name:'denden',
      img:require('../../../images/image134.png'),
      price:''
    }
  ]);
  const [listProducts, setListProducts] = useState([
    {
      id:0,
      name:'Accu-check Active Test Strip',
      img:require('../../../images/image134.png'),
      price:'112'
    },
    {
      id:1,
      name:'Omron HEM-8712 BP Monitor',
      img:require('../../../images/image134.png'),
      price:'150'
    },
    {
      id:2,
      name:'Accu-check Active Test Strip',
      img:require('../../../images/image134.png'),
      price:'112'
    },
    {
      id:3,
      name:'Omron HEM-8712 BP Monitor',
      img:require('../../../images/image134.png'),
      price:'150'
    }
  ]);
  return(
    <View style={styles.container}>
      <Button
        title="Go to Notifycation"
        onPress={() => navigation.navigate('Notifications')}
      />
      <View style={styles.banner}>
        <ImageBackground source={require("../../../images/banner.png" )}  style={styles.image}>
          <View style={styles.txtGroup}>
            <Text style={styles.text}>Save extra on every order</Text>
            <Text style={styles.txt}>Etiam mollis metus non faucibus sollicitudin.</Text>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.product}>
        <Text style={styles.title}>
          Diabetic Diet
        </Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <FlatList
        horizontal
        data={products}
        keyExtractor={item => item.name}
        renderItem={({item}) => {
          return <View
          style={styles.item}>
            <Image
              style={{
                width: 110,
                height: 100,
              }}
              source={item.img}/>
            <Text
              style={styles.itemName}>{item.name}</Text>
          </View>
        }}>
        </FlatList>
        </ScrollView>
      </View>
      <View style={styles.allProducts}>
        <Text style={styles.titlePro}>All Products</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <FlatList
          numColumns={2}
          data={listProducts}
          keyExtractor={item => item.name}
          renderItem = {({item}) => {
            return <View style={styles.bgListProducts}>
              <View style={{
                width: 167,
                height: 158,
                backgroundColor: '#EBEBEB'
              }}>
                <Image
                style={styles.img}
                source={item.img}
                />
              </View>
              <Text style={styles.proName}>{item.name}</Text>
              <Text style={styles.proPrice}>${item.price}</Text>
            </View>
          }}>
          </FlatList>
        </ScrollView>
      </View>
    </View>
  );
}

const styles =  StyleSheet.create({
  container:{
    flex:1,
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
  txtGroup:{
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
    fontFamily:'Overpass'
  },
  txt:{
    width: 124,
    height: 32,
    marginBottom: 32,
    marginLeft: 23,
    fontSize: 12,
    fontWeight: '300',
    fontFamily:'Overpass',
    color: 'rgba(9, 15, 71, 0.65)',
  },
  product:{
    flex:1.5,
  },
  item:{
    width: 110,
    height: 162,
    backgroundColor: '#F5F7FA',
    borderRadius: 10,
    marginRight: 16
  },
  itemName:{
    width: 60,
    fontSize: 13,
    marginLeft: 17,
    marginTop: 13,
    fontFamily: 'Overlock-Bold',
    fontWeight: '400',
    color: '#090F47',
    lineHeight: 18,
  },
  title:{
    marginTop: 19,
    marginBottom: 16,
    color: '#090F47',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 20
  },
  allProducts:{
    flex:2.5,
  },
  titlePro:{
    marginTop: 15,
    marginBottom: 24,
    color: '#090F47',
    fontSize:16,
    fontWeight: '600',
    lineHeight: 20
  },
  bgListProducts:{
    flex:1,
    flexDirection: 'column',
    width: 157,
    height: 250,
    backgroundColor: '#FFFFFF',
    marginRight: 14,
    marginBottom: 16
  },
  proName:{
    marginLeft: 16,
    marginBottom: 8,
    width: 108,
    fontFamily: 'Overpass-Italic',
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 19,
    color: '#090F47'
  },
  proPrice:{
    marginLeft: 16,
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 19,
    color: '#090F47',
  },
  img:{
    width: 116,
    height: 120,
    margin: 22,
  }
});
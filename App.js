import React, { useState } from 'react';
import { Text, Image, View, SafeAreaView, TouchableOpacity, RefreshControl, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyNavigation from './src/screens/Navigation';
// import Products from './src/screens/Products';
// import Home from './src/screens/Home/HomeDog';
// import listPet from './src/screens/Products/listPets';
// import TodoHome from './src/screens/todoList/Home';
// import PropsPractice from './src/screens/Props/PropsPractice';

const Stack = createNativeStackNavigator();

const renderItem = ({ item }) => {
  return (
    <View>
      <Text>{item.name}</Text>
      <Text>{item.content}</Text>
    </View>
  );
}
const App = () => {
  // const [listProduct, setListProduct] = useState(listProducts)
  return (
    <NavigationContainer>
      <MyNavigation />
    </NavigationContainer>

  );
}

//TODOLIST
// const App = () => {
//   return(
//     <PropsPractice/>
//   )
// }
// <SafeAreaView style={{flex: 1}}>
//   <FlatList
//   // numColumns={2}
//   style = {{flex: 1}}
//   data={listProducts}
//   renderItem = {renderItem}
//   keyExtractor = {item => item.name}
//   refreshControl={
//     <RefreshControl
//       refreshing={false}
//       onRefresh={() => {
//         setListProduct(listProduct);
//       }}
//     />
//   }
//   >
//   </FlatList>
// 
export default App;


//MAPVIEW
// import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
// import { StyleSheet, View } from 'react-native';

// const styles = StyleSheet.create({
//  container: {
//    ...StyleSheet.absoluteFillObject,
//    height: 400,
//    width: 400,
//    justifyContent: 'flex-end',
//    alignItems: 'center',
//  },
//  map: {
//    ...StyleSheet.absoluteFillObject,
//  },
// });

// export default () => (
//    <View style={styles.container}>
//      <MapView
//        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
//        style={styles.map}
//        region={{
//          latitude: 37.78825,
//          longitude: -122.4324,
//          latitudeDelta: 0.015,
//          longitudeDelta: 0.0121,
//        }}
//      >
//      </MapView>
//    </View>
// );

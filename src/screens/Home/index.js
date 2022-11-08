import * as React from 'react';
import {Text, Button, View, StyleSheet} from 'react-native';

const Homes = ({navigation}) =>{
  return(
    <View style = {styles.container}>
      <View style= {{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Home</Text>
        <Button
          title='View products'
          onPress={() => navigation.navigate('Products')}
        />
      </View>
    </View>
  );
}
export default Homes;

const styles = StyleSheet.create({
  container:{
    flex: 1,
  }
});
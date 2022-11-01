import * as React from 'react';
import {Text, Button, View} from 'react-native';
export default function Notifications({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Notifycation</Text>
      <Button
        title="Go back Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
  }
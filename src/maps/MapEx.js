import * as React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { useRoute } from '@react-navigation/native';

export default function Map() {
  const route = useRoute();
  return (
    <View style={{ flex: 1, alignItems: 'center', }}>
      <MapView style={styles.map}
        provider={PROVIDER_GOOGLE}
        showsUserLocation
        zoomControlEnabled={true}
        zoomEnabled={true}
        initialRegion={{
          latitude: 16.047079,
          longitude: 108.206230,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}>
        <Marker
          coordinate={{ latitude: 16.047079, longitude: 108.206230}}
          title='Pet lover'
          description='Adopt a pet here'
        />
      </MapView>
      {/* <View>
        <Image
          style={styles.img}
          source={require('../../images/welcome.png')}
        />
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: 770,
  },
});
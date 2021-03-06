import React from 'react';
import MapView from 'react-native-maps';

import {View} from 'react-native';

const App = () => (
  <View style={{flex: 1}}>
    <MapView
      style={{flex: 1}}
      region={{
        latitude: -19.7477482,
        longitude: -47.9438657,
        latitudeDelta: 0.0143,
        longitudeDelta: 0.0134,
      }}
      showsUserLocation
      loadingEnabled
    />
  </View>
);

export default App;

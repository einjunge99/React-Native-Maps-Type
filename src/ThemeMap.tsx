import React, { useState } from 'react';
import { StyleSheet, View, Text, Dimensions, Button } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Button as NavigationButton } from '@react-navigation/elements';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const ThemeMap = () => {
  const [mapType, toggleMapType] = useState<'standard' | 'hybrid'>('standard');

  const [region] = useState({
    latitude: LATITUDE,
    longitude: LONGITUDE,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  });

  return (
    <View style={styles.container}>
      <Button
        title={`Switch to ${mapType === 'standard' ? 'hybrid' : 'standard'}`}
        onPress={() =>
          toggleMapType(previous =>
            previous === 'hybrid' ? 'standard' : 'hybrid',
          )
        }
      />
      <NavigationButton screen="Second">Go to Details</NavigationButton>
      <Text>{mapType}</Text>
      <MapView style={styles.map} mapType={mapType} initialRegion={region}>
        <Marker
          title="This is a title"
          description="This is a description"
          coordinate={region}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
  },
  map: {
    width: 200,
    height: 200,
  },
});

export default ThemeMap;

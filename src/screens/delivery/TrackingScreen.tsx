import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView, { Region } from "react-native-maps";
import { useLocation } from "../../hooks/useLocation";
import CustomerContact from "./components/CustomerContact";
import HeaderTracking from "./components/HeaderTracking";
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  //your styles go here!!
});

interface TrackingScreenProps {}

const TrackingScreen: React.FC<TrackingScreenProps> = (props) => {
  const [lat, lng, loading] = useLocation();
  const [region, setRegion] = useState<Region>({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  useEffect(() => {}, []);
  return (
    <MapView
      style={{ flex: 1 }}
      provider="google"
      initialRegion={{
        latitude: region.latitude,
        longitude: region.longitude,
        latitudeDelta: region.latitudeDelta,
        longitudeDelta: region.longitudeDelta,
      }}
    >
      <HeaderTracking />
      <CustomerContact />
    </MapView>
  );
};
export default TrackingScreen;

import React, { useRef, useState, useEffect } from "react";
import {
  ActivityIndicator,
  Dimensions,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import MapView, { Callout, Circle, Marker } from "react-native-maps";
import { useLocation } from "../../hooks/useLocation";
import HomeHeader from "../../navigation/header/HomeHeader";

const HomeDelivery: React.FC<{}> = (props: any) => {
  const map = useRef<MapView>(null);
  const [pin, setPin] = useState({
    latitude: 37.785834,
    longitude: -122.406417,
  });

  const [lat, lng, loading] = useLocation();

  const [region, setRegion] = useState({
    latitude: 13.364047,
    longitude: 103.860313,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
  });
  useEffect(() => {
    setRegion({
      ...region,
      latitude: Number(lat),
      longitude: Number(lng),
    });
  }, []);

  if (loading) {
    return (
      <ActivityIndicator
        style={{
          flex: 1,
          alignSelf: "center",
        }}
      />
    );
  }
  return (
    <View style={{ flex: 1 }}>
      <HomeHeader title="Delivery" disableIcon {...props} />
    </View>
  );
};
export default HomeDelivery;

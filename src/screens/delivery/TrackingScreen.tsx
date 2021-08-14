import React, { useState, useEffect, createRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import MapView, { Callout, Circle, Marker, Region } from "react-native-maps";
import { useLocation } from "../../hooks/useLocation";
import { Colors } from "../../styles";
import CustomerContact from "./components/CustomerContact";
import HeaderTracking from "./components/HeaderTracking";
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
    width: Dimensions.get("window").width,
    // height: Dimensions.get("window").height / 1.5,
  },
  //your styles go here!!
});

interface TrackingScreenProps {}

const TrackingScreen: React.FC<TrackingScreenProps> = (props) => {
  const [lat, lng, loading] = useLocation();
  const ref = createRef<MapView>();
  const [pin, setPin] = React.useState({
    latitude: 13.358120559790281,
    longitude: 103.86713334339859,
  });
  const [region, setRegion] = useState<Region>({
    latitude: 13.358120559790281,
    longitude: 103.86713334339859,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
  });
  useEffect(() => {
    if (ref && ref.current) {
      ref.current.animateCamera({
        center: {
          latitude: region.latitude,
          longitude: region.longitude,
        },
        heading: 0,
        pitch: 0,
      });
    }
  }, []);

  const onRegionChangeComplete = (r: Region) => {
    setPin({
      latitude: r.latitude,
      longitude: r.longitude,
    });
  };
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color={Colors.BASECOLOR} />
      </View>
    );
  }
  return (
    <View style={{ flex: 1 }}>
      <MapView
        ref={ref}
        mapType={Platform.OS == "android" ? "none" : "standard"}
        style={styles.map}
        provider="google"
        initialRegion={{
          latitude: region.latitude,
          longitude: region.longitude,
          latitudeDelta: region.latitudeDelta,
          longitudeDelta: region.longitudeDelta,
        }}
        onRegionChangeComplete={onRegionChangeComplete}
      >
        <HeaderTracking />
        <Marker
          draggable={true}
          coordinate={pin}
          anchor={{ x: 0.5, y: 0.5 }}
          centerOffset={{ x: 0.5, y: 0.5 }}
        >
          <Callout>
            <Text>I'm here</Text>
          </Callout>
        </Marker>
        <Circle center={pin} radius={100} />
      </MapView>
      <CustomerContact />
    </View>
  );
};
export default TrackingScreen;

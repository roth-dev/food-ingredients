import React, { useRef, useState, useEffect } from "react";
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import MapView, { Callout, Circle, Marker } from "react-native-maps";
import { useLocation } from "../../hooks/useLocation";
import { getRouteParam, INavigationScreenProps } from "../../navigation";
import HomeHeader from "../../navigation/header/HomeHeader";
import { Colors } from "../../styles";
import NewOrder from "./components/NewOrder";

const HomeDelivery: React.FC<INavigationScreenProps> = (props: any) => {
  const getParams = getRouteParam(props);
  const detail = getParams("detail", false);
  // if (loading) {
  //   return (
  //     <ActivityIndicator
  //       style={{
  //         flex: 1,
  //         alignSelf: "center",
  //       }}
  //     />
  //   );
  // }
  return (
    <View style={{ flex: 1, backgroundColor: Colors.WHITE }}>
      <HomeHeader title="Delivery" disableIcon {...props} />
      <FlatList
        data={[1]}
        keyExtractor={(_, i) => i.toString()}
        renderItem={() => {
          return <NewOrder detail={detail} />;
        }}
      />
    </View>
  );
};
export default HomeDelivery;

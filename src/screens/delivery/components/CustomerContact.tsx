import React from "react";
import {
  View,
  Linking,
  Text,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";
import assets from "../../../assets";
import { Button, Icons, Label, LabelIcon } from "../../../components/commons";
import { Colors, Themes } from "../../../styles";
import { HPADDING, PADDING, WTDP } from "../../../styles/scale";
import { FONT_SIZE_16 } from "../../../styles/Typography";
const WIDTH = WTDP(20, 600);
const styles = StyleSheet.create({
  container: {
    margin: PADDING,
    backgroundColor: Colors.WHITE,
    borderRadius: 20,
  },
});

interface CustomerContactProps {}

const CustomerContact: React.FC<CustomerContactProps> = (props) => {
  const phone = "095482494";
  const onCall = () => {
    Linking.openURL(`tel:${phone}`);
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          margin: PADDING,
        }}
      >
        <View
          style={[
            Themes.ROW,
            {
              paddingBottom: PADDING,
              borderBottomColor: "#ddd",
              borderBottomWidth: 1,
            },
          ]}
        >
          <Image
            source={assets.PROFILE}
            style={{
              width: WIDTH,
              height: WIDTH,
              borderRadius: WIDTH / 2,
            }}
          />
          <View style={{ paddingLeft: PADDING }}>
            <Label bold style={{ fontSize: FONT_SIZE_16 }}>
              Heng Sotheareak
            </Label>
            <Label>Customer</Label>
            <Label>Delivery Time</Label>
            <LabelIcon leftIcon={Icons.clock} title="13-30 mn" />
          </View>
        </View>
      </View>
      <Button
        bold
        textStyle={{
          padding: HPADDING,
          fontSize: FONT_SIZE_16,
        }}
        style={{
          borderRadius: 10,

          margin: PADDING,
          backgroundColor: "#333",
        }}
        title="Call Customer"
        onPress={onCall}
      />
    </View>
  );
};
export default CustomerContact;

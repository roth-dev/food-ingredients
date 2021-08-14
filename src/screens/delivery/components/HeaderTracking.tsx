import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, Icons, Label } from "../../../components/commons";
import { goBack } from "../../../navigation/navigation";
import { Themes } from "../../../styles";
import { PADDING } from "../../../styles/scale";
import { FONT_SIZE_18 } from "../../../styles/Typography";

const styles = StyleSheet.create({
  container: {
    margin: PADDING,
  },
});

interface HeaderTrackingProps {}

const HeaderTracking: React.FC<HeaderTrackingProps> = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={[Themes.ROW, styles.container]}>
        <Button
          onPress={() => goBack()}
          style={{
            width: 40,
            height: 40,
            borderRadius: 40,
            backgroundColor: "#ddd",
            flex: 0,
          }}
          iconStyle={{
            width: "auto",
            color: "#000",
            marginRight: 0,
            fontSize: FONT_SIZE_18,
          }}
          leftIcon={Icons.chevronLeft}
        />
        <Label style={{ flex: 1, textAlign: "center", fontSize: FONT_SIZE_18 }}>
          Tracking Order
        </Label>
      </View>
    </View>
  );
};
export default HeaderTracking;

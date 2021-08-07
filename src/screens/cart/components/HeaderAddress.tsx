import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Button, ExpoIcons, Icons, Label } from "../../../components/commons";
import { Colors, Themes } from "../../../styles";
import { HPADDING, PADDING, WTDP } from "../../../styles/scale";
import { FONT_SIZE_24 } from "../../../styles/Typography";
const BUTTON_WIDTH = WTDP(12, 600);
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: PADDING,
    justifyContent: "space-around",
  },
  button: {
    flex: 0,
    marginLeft: HPADDING,
    backgroundColor: "#333",
    width: BUTTON_WIDTH,
    height: BUTTON_WIDTH,
    borderRadius: BUTTON_WIDTH,
  },
  icon: {
    width: "auto",
    marginLeft: 0,
    fontSize: FONT_SIZE_24,
  },
  address_container: {
    flexDirection: "row",
    margin: HPADDING,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    padding: PADDING,
    borderRadius: 15,
  },
});

interface Props {}
const address = [
  {
    title: "Home",
    address: "Siem Reap",
    icon: "home",
    iconType: "Feather",
  },
  {
    title: "Work",
    address: "Phumi ta vean, Siem Reap",
    icon: "work-outline",
    iconType: "MaterialIcons",
  },
];
export default (props: Props) => {
  const [index, setIndex] = React.useState(0);

  const onItemPress = (ix: number) => {
    setIndex((prev) => (ix !== prev ? ix : prev));
  };
  return (
    <View style={[Themes.ROW, styles.container]}>
      {address.map((item, i) => {
        const color = i === index ? "white" : "black";
        const iconColor = i === index ? "white" : Colors.BASECOLOR;
        return (
          <TouchableOpacity
            onPress={() => onItemPress(i)}
            key={i}
            style={[
              styles.address_container,
              { backgroundColor: index === i ? "#333" : "#f5f5f5" },
            ]}
          >
            <ExpoIcons
              size={24}
              style={{ paddingRight: PADDING }}
              color={iconColor}
              name={item.icon as any}
              type={item.iconType as any}
            />
            <View>
              <Label
                bold
                style={{
                  color,
                }}
                numberOfLines={1}
              >
                {item.title}
              </Label>
              <Label numberOfLines={1} style={{ color }}>
                {item.address}
              </Label>
            </View>
          </TouchableOpacity>
        );
      })}

      <Button
        iconStyle={styles.icon}
        style={styles.button}
        rightIcon={Icons.plus}
      />
    </View>
  );
};

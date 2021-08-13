import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Colors } from "../../styles";
import { BOTTOM } from "../../styles/scale";
import { FONT_SIZE_16, FONT_SIZE_18 } from "../../styles/Typography";
import { Icons, LabelIcon } from "../../components/commons";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: "100%",
    height: 60,
    backgroundColor: Colors.GRAY_MEDIUM,
  },
  content: {
    flexDirection: "row",
    width: "100%",
    height: 60,
    borderBottomColor: Colors.GRAY_MEDIUM,
    borderBottomWidth: 0.4,
    justifyContent: "space-between",
  },
  textHeader: {
    justifyContent: "center",
    alignItems: "center",
    margin: BOTTOM,
    fontSize: FONT_SIZE_18,
    fontWeight: "600",
  },
  textContent: {
    justifyContent: "center",
    margin: BOTTOM,
    fontSize: FONT_SIZE_16,
    fontWeight: "normal",
  },
  icon: {
    color: Colors.GREEN,
    fontSize: 25,
    marginRight: BOTTOM,
  },
});

const SettingDeliveryScreen: React.FC<{}> = (props) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.textHeader}>App Settings</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.textContent}>Dark Mode</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.textContent}>Notification</Text>
          <LabelIcon iconStyle={styles.icon} leftIcon={Icons.caretRight} />
        </View>
        <View style={styles.content}>
          <Text style={styles.textContent}>Languages</Text>
          <LabelIcon iconStyle={styles.icon} leftIcon={Icons.caretRight} />
        </View>
        <View style={styles.header}>
          <Text style={styles.textHeader}>More Settings</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.textContent}>Follow Us On Facebook</Text>
          <LabelIcon iconStyle={styles.icon} leftIcon={Icons.caretRight} />
        </View>
        <View style={styles.content}>
          <Text style={styles.textContent}>Visit Our Website</Text>
          <LabelIcon iconStyle={styles.icon} leftIcon={Icons.caretRight} />
        </View>
        <View style={styles.content}>
          <Text style={styles.textContent}>Contact Us</Text>
          <LabelIcon iconStyle={styles.icon} leftIcon={Icons.caretRight} />
        </View>
        <View style={styles.content}>
          <Text style={styles.textContent}>Feedback</Text>
          <LabelIcon iconStyle={styles.icon} leftIcon={Icons.caretRight} />
        </View>
      </ScrollView>
    </View>
  );
};
export default SettingDeliveryScreen;

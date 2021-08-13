import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { HPADDING, PADDING, BOTTOM } from "../../styles/scale";
import { Button, Icons, LabelIcon } from "../../components/commons";
import { Colors } from "../../styles";
import {
  FONT_SIZE_12,
  FONT_SIZE_15,
  FONT_SIZE_16,
  FONT_SIZE_18,
  FONT_SIZE_20,
} from "../../styles/Typography";
import { ScrollView } from "react-native-gesture-handler";
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: PADDING,
    margin: PADDING,
    marginBottom: HPADDING,
    borderWidth: 1,
    height: 130,
    width: "95%",
    borderColor: "#d2d4d6",
    backgroundColor: "#fff",
    borderRadius: 5,
  },
  icon: {
    color: Colors.GRAY_DARK,
    fontSize: 40,
    paddingRight: BOTTOM * 2,
  },
});

interface HistoryDeliveryScreenProps {}

const HistoryDeliveryScreen: React.FC<HistoryDeliveryScreenProps> = (props) => {
  return (
    <ScrollView>
      <TouchableOpacity>
        <View style={styles.item}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={{ flexDirection: "row", margin: HPADDING }}>
              {/* put image instead */}
              <LabelIcon iconStyle={styles.icon} leftIcon={Icons.gift} />
              <View style={{ justifyContent: "center" }}>
                <Text style={{ fontSize: FONT_SIZE_18 }}>name of user</Text>
                <Text style={{ fontSize: FONT_SIZE_15, color: "gray" }}>
                  14/08/2021 17:50
                </Text>
                <Text style={{ fontSize: FONT_SIZE_15 }}>ស្ងោរជ្រក់សាច់គោ</Text>
                <Text style={{ fontSize: FONT_SIZE_15 }}>Total : $5.00</Text>
              </View>
            </View>
            <View style={{ flexDirection: "row", margin: HPADDING }}>
              <View>
                <Text
                  style={{
                    fontSize: FONT_SIZE_15,
                    color: "black",
                    textAlign: "right",
                  }}
                >
                  Finish
                </Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};
export default HistoryDeliveryScreen;

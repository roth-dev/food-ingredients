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
import { Icons, LabelIcon } from "../../components/commons";
import { Colors } from "../../styles";
import {
  FONT_SIZE_15,
  FONT_SIZE_16,
  FONT_SIZE_20,
} from "../../styles/Typography";
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: PADDING,
    margin: PADDING,
    marginBottom: HPADDING,
    borderWidth: 1,
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

interface Promotion {
  title: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface Props {}
const promotion: Promotion[] = [
  {
    title: "FOOD APP",
    startDate: "August 14 2021",
    endDate: "August 16 2021",
    description:
      "ចាប់ពីថ្ងៃនេះដល់ថ្ងៃទី 30 សីហា 2021 នេះទៅ ក្នុងការកុម៉្មង់ចាប់ពី 5$ ឡើងទៅហ្នឹងមានការ Discount 15% ភ្លាមៗ",
  },
  {
    title: "Happy New Year Promotion",
    startDate: "August 14 2021",
    endDate: "August 16 2021",
    description:
      "ចាប់ពីថ្ងៃនេះដល់ថ្ងៃទី 30 សីហា 2021 នេះទៅ ក្នុងការកុម៉្មង់ចាប់ពី 5$ ឡើងទៅហ្នឹងមានការ Discount 15% ភ្លាមៗ",
  },
  {
    title: "Pchhum Ben day Promotion",
    startDate: "August 14 2021",
    endDate: "August 16 2021",
    description:
      "ចាប់ពីថ្ងៃនេះដល់ថ្ងៃទី 30 សីហា 2021 នេះទៅ ក្នុងការកុម៉្មង់ចាប់ពី 5$ ឡើងទៅហ្នឹងមានការ Discount 15% ភ្លាមៗ",
  },
];

const PromotionItems = (props: Promotion) => {
  return (
    <TouchableOpacity>
      <View style={styles.item}>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flexDirection: "row" }}>
            <LabelIcon iconStyle={styles.icon} leftIcon={Icons.gift} />
          </View>
          <View style={{ flexDirection: "column" }}>
            <Text style={{ fontSize: FONT_SIZE_20 }}>{props.title}</Text>
            <Text style={{ fontSize: FONT_SIZE_15, color: "gray" }}>
              {props.startDate}
            </Text>
          </View>
        </View>
        <View>
          <Text
            style={{
              textAlign: "auto",
              fontSize: FONT_SIZE_16,
              color: "black",
            }}
          >
            {props.description}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default (props: Props) => {
  const [loading, setLoading] = useState<boolean>(true);
  const timer = () => setLoading(false);

  useEffect(() => {
    setTimeout(timer, 1000);
  }, []);

  if (loading)
    return (
      <ActivityIndicator
        size="large"
        style={{ flex: 1, alignSelf: "center" }}
      />
    );
  return (
    <View style={styles.container}>
      <FlatList
        data={promotion}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => <PromotionItems {...item} />}
      />
    </View>
  );
};

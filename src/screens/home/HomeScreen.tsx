import { useDispatch } from "react-redux";
import { StackHeaderProps } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList, ActivityIndicator } from "react-native";
import HomeHeader from "../../navigation/header/HomeHeader";
import { Colors } from "../../styles";
import { BOTTOM, PADDING } from "../../styles/scale";
import Items from "./components";
import { getCategories } from "../../store/actions/categories";
import { Label } from "../../components/commons";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
});

interface HomeScreenProps extends StackHeaderProps {}

const HomeScreen: React.FC<HomeScreenProps> = (props) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const dispatch = useDispatch();
  const onRefresh = () => {
    setRefreshing(true);
    Promise.all([dispatch(getCategories())])
      .then(() => {
        setLoading(false);
        setRefreshing(false);
      })
      .catch(() => {
        setLoading(false);
        setRefreshing(false);
      });
  };

  const renderItems = () => {
    return <Items />;
  };
  return (
    <View style={styles.container}>
      <HomeHeader {...props} />
      <FlatList
        data={[1]}
        keyExtractor={(_, i) => i.toString()}
        renderItem={renderItems}
        refreshing={refreshing}
        onRefresh={onRefresh}
        contentContainerStyle={{
          padding: PADDING,
          paddingTop: BOTTOM,
        }}
      />
    </View>
  );
};
export default HomeScreen;

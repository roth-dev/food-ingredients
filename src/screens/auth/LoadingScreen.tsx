import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { useDispatch } from "react-redux";
import { Button, Label } from "../../components/commons";
import { getCategories } from "../../store/actions/categories";
import { Colors } from "../../styles";
import { HPADDING, PADDING } from "../../styles/scale";
import { FONT_SIZE_16, FONT_SIZE_18 } from "../../styles/Typography";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  message: {
    fontSize: FONT_SIZE_16,
    textAlign: "center",
    color: Colors.GRAY_DARK,
    marginHorizontal: PADDING * 2,
  },
});

interface LoadingScreenProps {}

const LoadingScreen: React.FC<LoadingScreenProps> = (props) => {
  const [error, setError] = useState<string | null>();
  const dispatch = useDispatch();

  const fetchCategories = async () => {
    try {
      await dispatch(getCategories());
    } catch (error) {
      setError(error.message);
    }
  };

  const onRreload = async () => {
    setError(null);
    await fetchCategories();
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  if (error) {
    return (
      <View style={styles.container}>
        <Label
          style={{
            fontSize: FONT_SIZE_18,
            lineHeight: 26,
          }}
          bold
        >
          Something when wrong!
        </Label>
        <Label style={styles.message}>
          This may be because of a technical error that we're working to get
          fixed. Try to reloading this page.
        </Label>
        <Button
          bold
          style={{
            marginTop: PADDING,
          }}
          textStyle={{
            padding: HPADDING / 2,
            fontSize: FONT_SIZE_16,
          }}
          title="Reload This Page"
          onPress={onRreload}
        />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={Colors.BASECOLOR} />
      <Label>Fetching data...</Label>
    </View>
  );
};
export default LoadingScreen;

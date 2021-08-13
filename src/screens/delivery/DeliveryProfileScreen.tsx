import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { Colors } from "../../styles";
import ProfileDeliveryMenu from "./ProfileDeliveryMenu";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  //your styles go here!!
});

interface ProfileDeliveryScreenProps {}

const ProfileDeliveryScreen: React.FC<ProfileDeliveryScreenProps> = (props) => {
  const renderItem = () => {
    return <ProfileDeliveryMenu />;
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={[1]}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};
export default ProfileDeliveryScreen;

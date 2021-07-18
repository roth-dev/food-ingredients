import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
  //your styles go here!!

})

interface EditProfileScreenProps {

}

const EditProfileScreen: React.FC<EditProfileScreenProps> = (props) => {
  return (
    <View style={styles.container}>
      <Text>EditProfileScreen Screen</Text>
    </View>
  );
}
export default EditProfileScreen
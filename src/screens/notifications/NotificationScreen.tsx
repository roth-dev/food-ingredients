import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
  //your styles go here!!

})

interface NotificationScreenProps {

}

const NotificationScreen: React.FC<NotificationScreenProps> = (props) => {
  return (
    <View style={styles.container}>
      <Text>NotificationScreen Screen</Text>
    </View>
  );
}
export default NotificationScreen
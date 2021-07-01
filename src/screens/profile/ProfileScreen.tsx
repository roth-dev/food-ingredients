import React, { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from '../../components/commons';
import { AppCreateContext } from '../../context';
import { LogcalStorage } from '../../storage/LocalStorage';

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
  //your styles go here!!

})

interface ProfileScreenProps {

}

const ProfileScreen: React.FC<ProfileScreenProps> = (props) => {
  const { logout } = useContext(AppCreateContext)

  const onLogout = () => {
    logout()
    LogcalStorage.logout()
  }
  return (
    <View style={styles.container}>
      <Text>ProfileScreen Screen</Text>
      <Button
        title="Logout"
        onPress={onLogout}
      />
    </View>
  );
}
export default ProfileScreen
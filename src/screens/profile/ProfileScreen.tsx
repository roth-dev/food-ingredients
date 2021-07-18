import React, { useContext } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { Colors } from '../../styles';
import ProfileMenu from './ProfileMenu';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE
  }
  //your styles go here!!

})

interface ProfileScreenProps {

}

const ProfileScreen: React.FC<ProfileScreenProps> = (props) => {

  const renderItem = () => {
    return <ProfileMenu />
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={[1]}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}
export default ProfileScreen
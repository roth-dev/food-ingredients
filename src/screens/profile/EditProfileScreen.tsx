import React from 'react'
import { View, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native'
import { Container } from '../../components'
import { Button, Icons,  Label,Editor } from '../../components/commons'
import { Colors, Themes } from '../../styles'
import { BOTTOM, HEIGHT, PADDING } from '../../styles/scale'
import {
  FONT_SIZE_15,
  FONT_SIZE_16,
  FONT_SIZE_18,
  FONT_SIZE_20,
  FONT_SIZE_32
} from '../../styles/Typography'
import { facebookLogIn } from '../../libs/auth'
import { LogcalStorage } from '../../storage/LocalStorage'
import { AppCreateContext } from '../../context'
import assets from '../../assets';
import { login } from '../../store/actions/user'
import { UserInput } from '../../models/user'
import Validate from '../../utils/validate'
import { ScrollView } from 'react-native-gesture-handler'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: PADDING,
    backgroundColor: Colors.WHITE,
  },
  formControl: {
    marginTop: PADDING,
  },
  input: {
    marginTop: BOTTOM,
    margin: PADDING,
    marginBottom: 0,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  icon: {
    color: Colors.GRAY_DARK,
    fontSize: FONT_SIZE_18,
    paddingRight:BOTTOM
  }
});


interface EditProfileScreenProps {

}
const Input = () => {
  return (
    <View style={styles.formControl}>
      <Editor
        //value={userInput.identifier}
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        //reference={emailRef}
        //textStyle={styles.textInput}
        placeholder="Name"
        leftIcon={Icons.user}
        iconStyle={styles.icon}
        //onChangeText={(value) => onChangeText(value, "identifier")}
      />
      <Editor
        //value={userInput.password}
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        //reference={passwordRef}
        //textStyle={styles.textInput}
        placeholder="Phone number"
        leftIcon={Icons.phoneSquare}
        iconStyle={styles.icon}
        //onChangeText={(value) => onChangeText(value, "password")}

      />
      <Editor
        //value={userInput.password}
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        //reference={passwordRef}
        //textStyle={styles.textInput}
        placeholder="Address"
        leftIcon={Icons.addressCard}
        iconStyle={styles.icon}
        //onChangeText={(value) => onChangeText(value, "password")}

      />
    </View>
  )
}
const Buttons = () => {
  return (
    <View style={{ margin: PADDING, marginTop: BOTTOM }}>
      <Button
        title="Save Change"
        style={{
          borderRadius: 5,
          backgroundColor: Colors.BLUE,
        }}

        loading={false}
        //onPress={onVerify}
        textStyle={{
          flex: 1,
          textAlign: "center",
          fontSize: FONT_SIZE_18,
          padding: PADDING
        }}
      />
    </View>

  )
}
const EditProfileScreen: React.FC<EditProfileScreenProps> = (props) => {
  
  return (
    <View
    style={styles.container}>
    <ScrollView>
    <Input/>
    <Buttons/>
    </ScrollView>
    </View>
    
  );
}
export default EditProfileScreen
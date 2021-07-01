import React, { useContext } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Container } from '../../components'
import { Button, Input, Label } from '../../components/commons'
import { Colors, Themes } from '../../styles'
import { BOTTOM, PADDING } from '../../styles/scale'
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
import assets from '../../assets'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: PADDING,
    backgroundColor: Colors.WHITE,
  },
  title: {
    textAlign: "center",
    marginVertical: PADDING,
    fontSize: FONT_SIZE_32
  },
  label: {
    opacity: .5,
    textAlign: "center",
    fontSize: FONT_SIZE_16
  },
  wrapBtnSocail: {
    marginTop: BOTTOM * 4,
    paddingBottom: BOTTOM,
    justifyContent: 'center',
    alignItems: "center"
  },
  socailBtn: {
    flex: 1,
    borderRadius: 5,
    margin: PADDING,
  },
  formControl: {

  },
  input: {
    marginTop: BOTTOM,
    margin: PADDING,
    marginBottom: 0,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  textInput: {
    padding: PADDING,
    fontSize: FONT_SIZE_16
  },
  googleText: {
    padding: PADDING,
    color: "#333",
    fontSize: FONT_SIZE_20
  }

})

interface LoginScreenProps {

}

const LoginScreen: React.FC<LoginScreenProps> = (props) => {
  const { setState } = useContext(AppCreateContext)
  const onPressFacebookLogin = async () => {
    const response = await facebookLogIn()
    setState({
      token: response?.token
    })
    LogcalStorage.setToken(response?.token)
  }
  const renderBtnSocail = () => {
    return (
      <View style={styles.wrapBtnSocail}>
        <Label style={{
          marginBottom: BOTTOM,
          fontSize: FONT_SIZE_15
        }}>Enter vai socail networks</Label>
        <View style={[Themes.ROW]}>
          <Button
            style={[styles.socailBtn,
            {
              backgroundColor: Colors.WHITE,
              borderWidth: 1,
              borderColor: "#ddd"
            }]}
            bold
            textStyle={styles.googleText}
            leftSource={assets.GOOGLE}
            imageStyle={{
              width: 20,
              height: 20
            }}
            title="Google" />
          <Button
            bold
            onPress={onPressFacebookLogin}
            leftSource={assets.FACEBOOK}
            imageStyle={{
              width: 20,
              height: 20
            }}
            style={[styles.socailBtn, { backgroundColor: "#4267B2" }]}
            textStyle={{ padding: PADDING, fontSize: FONT_SIZE_20 }}
            title="Facebook" />
        </View>
      </View>
    )
  }
  const renderInput = () => {
    return (
      <View style={styles.formControl}>
        <Label style={{ textAlign: "center", marginBottom: BOTTOM }}>And login with account delivery only</Label>
        <Input
          style={styles.input}
          textStyle={styles.textInput}
          placeholder="Email"
        />
        <Input
          style={styles.input}
          textStyle={styles.textInput}
          placeholder="Email"
        />
        <Button
          style={{
            margin: PADDING,
            alignSelf: "flex-end",
            backgroundColor: Colors.WHITE,
          }}
          textStyle={{
            color: "#000",
            opacity: 0.5,
            fontSize: FONT_SIZE_15
          }}
          title="Forgot Password?" />
      </View>
    )
  }
  const renderButton = () => {
    return (
      <View style={{ margin: PADDING, marginTop: BOTTOM }}>
        <Button
          title="Login"
          style={{
            borderRadius: 5,
            backgroundColor: Colors.BLUE
          }}
          textStyle={{
            flex: 1,
            textAlign: "center",
            fontSize: FONT_SIZE_18,
            padding: PADDING
          }}
        />
        <TouchableOpacity
          style={{
            marginTop: BOTTOM,
            alignItems: "center"
          }}
        >
          <Label style={{
            fontSize: FONT_SIZE_15
          }}>Dont't have an account ? <Label style={{
            fontSize: FONT_SIZE_15,
            color: Colors.BLUE
          }}>Sign Up</Label></Label>
        </TouchableOpacity>
      </View>

    )
  }
  return (
    <Container
      isInput
      style={styles.container}>
      <Label style={styles.title}>Login Now</Label>
      <Label style={styles.label}>Please login or sign up to continue using our app</Label>
      {renderBtnSocail()}
      {renderInput()}
      {renderButton()}
    </Container>
  );
}
export default LoginScreen
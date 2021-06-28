import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Container } from '../../components'
import { Button, Icons, Input, Label } from '../../components/commons'
import { Colors, Themes } from '../../styles'
import { BOTTOM, PADDING } from '../../styles/scale'
import { FONT_SIZE_15, FONT_SIZE_16, FONT_SIZE_18, FONT_SIZE_20, FONT_SIZE_32 } from '../../styles/Typography'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: PADDING,
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
    margin: PADDING
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
  }

})

interface LoginScreenProps {

}

const LoginScreen: React.FC<LoginScreenProps> = (props) => {
  const renderBtnSocail = () => {
    return (
      <View style={styles.wrapBtnSocail}>
        <Label style={{
          marginBottom: BOTTOM,
          fontSize: FONT_SIZE_15
        }}>Enter vai socail networks</Label>
        <View style={[Themes.ROW]}>
          <Button
            style={styles.socailBtn}
            bold
            textStyle={{ padding: PADDING, fontSize: FONT_SIZE_20 }}
            title="Google" />
          <Button
            bold
            style={[styles.socailBtn, { backgroundColor: Colors.BLUE }]}
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
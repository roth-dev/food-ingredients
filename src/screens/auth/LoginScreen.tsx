import React, { createRef, useState } from "react";
import { useDispatch } from "react-redux";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import { Container } from "../../components";
import { Button, Icons, Input, Label } from "../../components/commons";
import { Colors, Themes } from "../../styles";
import { BOTTOM, PADDING } from "../../styles/scale";
import {
  FONT_SIZE_15,
  FONT_SIZE_16,
  FONT_SIZE_18,
  FONT_SIZE_20,
  FONT_SIZE_32,
} from "../../styles/Typography";
import { facebookLogIn } from "../../libs/auth";
import assets from "../../assets";
import { login } from "../../store/actions/user";
import { UserInput } from "../../models/user";
import Validate from "../../utils/validate";
import { useNavigation } from "@react-navigation/native";
import { navigate } from "../../navigation/navigation";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: PADDING,
    backgroundColor: Colors.WHITE,
  },
  title: {
    textAlign: "center",
    marginVertical: PADDING,
    fontSize: FONT_SIZE_32,
  },
  label: {
    opacity: 0.5,
    textAlign: "center",
    fontSize: FONT_SIZE_16,
  },
  wrapBtnSocail: {
    marginTop: BOTTOM * 4,
    paddingBottom: BOTTOM,
    justifyContent: "center",
    alignItems: "center",
  },
  socailBtn: {
    flex: 1,
    borderRadius: 5,
    margin: PADDING,
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
  textInput: {
    padding: PADDING,
    fontSize: FONT_SIZE_16,
  },
  googleText: {
    padding: PADDING,
    color: "#333",
    fontSize: FONT_SIZE_20,
  },
  icon: {
    color: Colors.GRAY_DARK,
    fontSize: FONT_SIZE_18,
  },
});

interface LoginScreenProps {}
const LoginScreen: React.FC<LoginScreenProps> = (props) => {
  const navigation = useNavigation();
  const emailRef = createRef<TextInput>();
  const passwordRef = createRef<TextInput>();
  const [loading, setLoading] = useState<boolean>(false);
  const [userInput, setUserInput] = useState<UserInput>({
    identifier: "",
    password: "",
  });
  const dispatch = useDispatch();
  const onPressFacebookLogin = async () => {
    setLoading(true);
    const response = await facebookLogIn();
    setLoading(false);
  };
  const onlogin = async () => {
    setLoading(true);
    try {
      await dispatch(login(userInput));
      setLoading(false);
    } catch {
      setLoading(false);
    }
  };
  const onVerify = () => {
    let message: string = "";
    let title: string = "";
    let onPress: () => void;
    if (
      Validate.isEmpty(userInput.identifier) ||
      !Validate.isEmail(userInput.identifier)
    ) {
      title = "Invalid Email";
      message = "Please enter valid email.";
      onPress = () => emailRef.current?.focus();
    } else if (Validate.isEmpty(userInput.password)) {
      title = "Invalid Password";
      message = "Please enter password.";
      onPress = () => passwordRef.current?.focus();
    }
    if (message) {
      Alert.alert(title, message, [
        {
          text: "Ok",
          onPress: () => onPress(),
        },
      ]);
    } else {
      onlogin();
    }
  };
  const onChangeText = (value: string, type: "identifier" | "password") => {
    setUserInput({
      ...userInput,
      [type]: value,
    });
  };
  const renderBtnSocail = () => {
    return (
      <View style={styles.wrapBtnSocail}>
        <Label
          style={{
            marginBottom: BOTTOM,
            fontSize: FONT_SIZE_15,
          }}
        >
          Enter vai socail networks
        </Label>
        <View style={[Themes.ROW]}>
          <Button
            style={[
              styles.socailBtn,
              {
                backgroundColor: Colors.WHITE,
                borderWidth: 1,
                borderColor: "#ddd",
              },
            ]}
            bold
            textStyle={styles.googleText}
            leftSource={assets.GOOGLE}
            imageStyle={{
              width: 20,
              height: 20,
            }}
            title="Google"
          />
          <Button
            bold
            // loading={loading}
            onPress={onPressFacebookLogin}
            leftSource={assets.FACEBOOK}
            imageStyle={{
              width: 20,
              height: 20,
            }}
            style={[styles.socailBtn, { backgroundColor: "#4267B2" }]}
            textStyle={{ padding: PADDING, fontSize: FONT_SIZE_20 }}
            title="Facebook"
          />
        </View>
      </View>
    );
  };
  const renderInput = () => {
    return (
      <View style={styles.formControl}>
        <Label
          style={{
            textAlign: "center",
          }}
        >
          And login with account delivery and customer
        </Label>
        <Input
          value={userInput.identifier}
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
          reference={emailRef}
          textStyle={styles.textInput}
          placeholder="Email"
          leftIcon={Icons.user}
          iconStyle={styles.icon}
          onChangeText={(value) => onChangeText(value, "identifier")}
        />
        <Input
          value={userInput.password}
          style={styles.input}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
          reference={passwordRef}
          textStyle={styles.textInput}
          placeholder="Password"
          leftIcon={Icons.lockAlt}
          iconStyle={styles.icon}
          onChangeText={(value) => onChangeText(value, "password")}
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
            fontSize: FONT_SIZE_15,
          }}
          title="Forgot Password?"
        />
      </View>
    );
  };
  const renderButton = () => {
    return (
      <View style={{ margin: PADDING, marginTop: BOTTOM }}>
        <Button
          title="Login"
          style={{
            borderRadius: 5,
            backgroundColor: Colors.BLUE,
          }}
          loading={loading}
          onPress={onVerify}
          textStyle={{
            flex: 1,
            textAlign: "center",
            fontSize: FONT_SIZE_18,
            padding: PADDING,
          }}
        />
        <TouchableOpacity
          style={{
            marginTop: BOTTOM,
            alignItems: "center",
          }}
          onPress={() => navigate("SignUp")}
        >
          <Label
            style={{
              fontSize: FONT_SIZE_15,
            }}
          >
            Dont't have an account ?{" "}
            <Label
              style={{
                fontSize: FONT_SIZE_15,
                color: Colors.BLUE,
              }}
            >
              Sign Up
            </Label>
          </Label>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <Container isInput style={styles.container}>
      <Label style={styles.title}>Login Now</Label>
      <Label style={styles.label}>
        Please login or sign up to continue using our app
      </Label>
      {renderInput()}
      {renderButton()}
      {renderBtnSocail()}
    </Container>
  );
};
export default LoginScreen;

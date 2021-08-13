import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
  Image,
} from "react-native";
import { Container } from "../../components";
import { Button, Icons, Label, Input } from "../../components/commons";
import { Colors, Themes } from "../../styles";
import { BOTTOM, HEIGHT, HPADDING, PADDING, WTDP } from "../../styles/scale";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  FONT_SIZE_15,
  FONT_SIZE_16,
  FONT_SIZE_18,
  FONT_SIZE_20,
  FONT_SIZE_32,
} from "../../styles/Typography";
import { LogcalStorage } from "../../storage/LocalStorage";
import assets from "../../assets";
import { createUser } from "../../store/actions/user";
import { UserInput } from "../../models/user";
import Validate from "../../utils/validate";
import { createRef } from "react";
import { useDispatch } from "react-redux";
const IMAGE_WIDTH = WTDP(40, 600);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: PADDING,
    backgroundColor: Colors.WHITE,
  },
  formControl: {
    marginTop: PADDING,
  },
  textInput: {
    padding: HPADDING,
  },
  input: {
    marginVertical: HPADDING,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  icon: {
    color: Colors.GRAY_DARK,
    fontSize: FONT_SIZE_18,
    paddingRight: BOTTOM,
  },
});

interface SignUpScreenProps {}
const SignUpScreen: React.FC<SignUpScreenProps> = (props) => {
  const [loading, setLoading] = useState(false);
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [cfPassword, setCfPassword] = useState("");
  const usernameRef = createRef<TextInput>();
  const phoneRef = createRef<TextInput>();
  const emailRef = createRef<TextInput>();
  const passRef = createRef<TextInput>();
  const cfpassRef = createRef<TextInput>();
  const dispatch = useDispatch();
  const onVerify = () => {
    let title: string = "";
    let message: string = "";
    let onPress: () => void;
    if (Validate.isEmpty(userName)) {
      title = "Invalid user name";
      message = "Please input user name";
      onPress = () => usernameRef.current?.focus();
    } else if (Validate.isEmpty(email) || !Validate.isEmail(email)) {
      title = "Invalid email";
      message = "Please input email";
      onPress = () => emailRef.current?.focus();
    } else if (Validate.isEmpty(phoneNumber)) {
      title = "Invalid phone number";
      message = "Please input phone number";
      onPress = () => phoneRef.current?.focus();
    } else if (Validate.isEmpty(password)) {
      title = "Invalid password";
      message = "Please input password";
      onPress = () => passRef.current?.focus();
    } else if (Validate.isEmpty(cfPassword)) {
      title = "Invalid confirm password";
      message = "Please input confirm password";
      onPress = () => cfpassRef.current?.focus();
    } else if (password !== cfPassword) {
      title = "password not match";
      message = "Please correct your password";
      onPress = () => passRef.current?.focus();
    }
    if (message) {
      Alert.alert(title, message, [
        {
          text: "Cancel",
          onPress: () => {},
        },
        {
          text: "OK",
          onPress: () => onPress,
        },
      ]);
    } else {
      submit();
    }
  };
  const submit = async () => {
    const userInput: UserInput = {
      username: userName,
      email: email,
      password: password,
      phonenumber: phoneNumber,
    };
    try {
      setLoading(true);
      await dispatch(createUser(userInput));
      setLoading(false);
    } catch (e) {
      Alert.alert("Error", e.message);
      setLoading(false);
    }
  };
  return (
    <KeyboardAwareScrollView>
      <View style={styles.container}>
        <Image
          source={assets.LOGO_APP}
          style={{
            width: IMAGE_WIDTH,
            height: IMAGE_WIDTH,
            alignSelf: "center",
          }}
        />
        <View style={styles.formControl}>
          <Input
            value={userName}
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
            reference={usernameRef}
            textStyle={styles.textInput}
            placeholder="Name"
            leftIcon={Icons.user}
            iconStyle={styles.icon}
            onSubmitEditing={() => phoneRef.current?.focus()}
            onChangeText={(value) => setUsername(value)}
          />
          <Input
            value={phoneNumber}
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            reference={phoneRef}
            textStyle={styles.textInput}
            placeholder="Phone number"
            leftIcon={Icons.phoneSquare}
            iconStyle={styles.icon}
            onSubmitEditing={() => emailRef.current?.focus()}
            onChangeText={(value) => setPhoneNumber(value)}
          />
          <Input
            value={email}
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            reference={emailRef}
            textStyle={styles.textInput}
            placeholder="Email Address"
            leftIcon={Icons.addressCard}
            iconStyle={styles.icon}
            onSubmitEditing={() => passRef.current?.focus()}
            onChangeText={(value) => setEmail(value)}
          />
          <Input
            value={password}
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
            reference={passRef}
            textStyle={styles.textInput}
            placeholder="Password"
            leftIcon={Icons.lockAlt}
            iconStyle={styles.icon}
            secureTextEntry
            onChangeText={(value) => setPassword(value)}
          />
          <Input
            value={cfPassword}
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
            reference={cfpassRef}
            secureTextEntry
            returnKeyType="done"
            textStyle={styles.textInput}
            placeholder="Confirm Password"
            leftIcon={Icons.lockAlt}
            iconStyle={styles.icon}
            onChangeText={(value) => setCfPassword(value)}
          />
        </View>
        <View style={{ margin: PADDING, marginTop: BOTTOM }}>
          <Button
            title="Sign Up"
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
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};
export default SignUpScreen;

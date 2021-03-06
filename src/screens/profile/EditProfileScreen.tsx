import React, { useState, createRef } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import { Container } from "../../components";
import { Button, Icons, Label, Input } from "../../components/commons";
import { Colors, Themes } from "../../styles";
import { BOTTOM, HEIGHT, HPADDING, PADDING } from "../../styles/scale";
import {
  FONT_SIZE_15,
  FONT_SIZE_16,
  FONT_SIZE_18,
  FONT_SIZE_20,
  FONT_SIZE_32,
} from "../../styles/Typography";
import { LogcalStorage } from "../../storage/LocalStorage";
import { AppCreateContext } from "../../context";
import { createUser, login } from "../../store/actions/user";
import { UserInput } from "../../models/user";
import Validate from "../../utils/validate";
import { ScrollView } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../store";
import { useEffect } from "react";
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

interface EditProfileScreenProps {}

const EditProfileScreen: React.FC<EditProfileScreenProps> = (props) => {
  const { user } = useAppSelector((state) => state.user);
  const [loading, setLoading] = useState(false);
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const usernameRef = createRef<TextInput>();
  const phoneRef = createRef<TextInput>();
  const emailRef = createRef<TextInput>();
  const dispatch = useDispatch();
  useEffect(() => {
    setUsername(user?.username!);
    setPhoneNumber(user?.phonenumber!);
    setEmail(user?.email!);
  }, []);
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
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.formControl}>
          <Input
            value={userName}
            autoCorrect={false}
            style={styles.input}
            reference={usernameRef}
            //textStyle={styles.textInput}
            placeholder="Name"
            leftIcon={Icons.user}
            iconStyle={styles.icon}
            onChangeText={(value) => setUsername(value)}
          />
          <Input
            value={phoneNumber}
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            reference={phoneRef}
            //textStyle={styles.textInput}
            placeholder="Phone number"
            leftIcon={Icons.phoneSquare}
            iconStyle={styles.icon}
            onChangeText={(value) => setPhoneNumber(value)}
          />
          <Input
            value={email}
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            reference={emailRef}
            //textStyle={styles.textInput}
            placeholder="Email Address"
            leftIcon={Icons.addressCard}
            iconStyle={styles.icon}
            onChangeText={(value) => setEmail(value)}
          />
        </View>
        <View style={{ margin: PADDING, marginTop: BOTTOM }}>
          <Button
            title="Save Change"
            style={{
              borderRadius: 5,
              backgroundColor: Colors.BLUE,
            }}
            loading={false}
            onPress={onVerify}
            textStyle={{
              flex: 1,
              textAlign: "center",
              fontSize: FONT_SIZE_18,
              padding: PADDING,
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};
export default EditProfileScreen;

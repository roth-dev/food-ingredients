import React from 'react'
import { StyleSheet, Image, View } from 'react-native'
import assets from '../../assets';
import { Container } from '../../components';
import { Button, Label } from '../../components/commons';
import { navigate } from '../../navigation/navigation';
import { Colors } from '../../styles';
import { BOTTOM, HEADER, PADDING, WTDP } from '../../styles/scale';
import { FONT_SIZE_16, FONT_SIZE_18, FONT_SIZE_32 } from '../../styles/Typography';
const IMAGE_WIDTH = WTDP(70, 600)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: HEADER * 2,
    marginHorizontal: BOTTOM,
    backgroundColor: Colors.WHITE,
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    fontSize: FONT_SIZE_32
  },
  label: {
    opacity: 0.5,
    textAlign: "center",
    marginVertical: PADDING,
    fontSize: FONT_SIZE_16
  },
  img: {
    width: IMAGE_WIDTH,
    height: IMAGE_WIDTH,
    resizeMode: "contain"
  },
  btnContainer: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center"
  },
  btn: {
    borderRadius: 5,
    backgroundColor: Colors.BLUE
  },
  btnText: {
    flex: 1,
    textAlign: "center",
    fontSize: FONT_SIZE_18,
    padding: PADDING
  }

})

interface WelcomeScreenProps {

}

const WelcomeScreen: React.FC<WelcomeScreenProps> = (props) => {
  const renderImage = () => {
    return (
      <Image
        style={styles.img}
        source={assets.WELCOME}
      />
    )
  }
  const renderButton = () => {
    return (
      <View style={styles.btnContainer}>
        <Button
          style={styles.btn}
          textStyle={styles.btnText}
          title="Continue to login"
          onPress={() => navigate("Login")}
        />
      </View>

    )
  }
  return (
    <Container
      style={styles.container}
      disableHeader>
      <Label style={styles.title}>Welcome</Label>
      <Label style={styles.label}>Please login or signup to continue using our app</Label>
      {renderImage()}
      {renderButton()}
    </Container>
  );
}
export default WelcomeScreen
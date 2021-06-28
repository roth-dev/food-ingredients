import React from 'react';
import {
  View,
  StyleProp,
  ViewStyle,
  TextStyle,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { goBack } from '../../navigation/navigation';
import { Themes } from '../../styles';
import { HEADER, HPADDING } from '../../styles/scale';
import { FONT_SIZE_18, FONT_SIZE_22 } from '../../styles/Typography';
import { Button, Icons, Label } from '../commons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  wrapper: {
    flex: 1,
  },
  btnContainer: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    height: HEADER,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    paddingHorizontal: HPADDING
  },
  headerTitle: {
    flex: 1,
    textAlign: "center",
    fontSize: FONT_SIZE_18,
  },
  backBtn: {
    flex: 0,
    marginLeft: HPADDING,
    backgroundColor: "transparent"
  },
  leftIcon: {
    color: "#000",
    width: 'auto',
    fontSize: FONT_SIZE_22
  },
  rightIcon: {
    color: "#fff",
    width: 'auto',
    fontSize: FONT_SIZE_22
  },
})
interface Props {
  title?: string,
  popToTop?: boolean
  isInput?: boolean
  disableHeader?: boolean
  enableScroll?: boolean
  children?: React.ReactNode,
  style?: StyleProp<ViewStyle>
  headerStyle?: StyleProp<ViewStyle>
  titileStyle?: StyleProp<TextStyle>
  leftIcon?: string,
  rightIcon?: string
  leftIconStyle?: StyleProp<TextStyle>
  rightIconStyle?: StyleProp<TextStyle>
  leftButtonPress?: () => void
}
const defaultProps: Props = {
  enableScroll: false
}
export default function Container(props = defaultProps) {

  const renderHeader = () => {
    return (
      <View style={[Themes.ROW, styles.header, props.headerStyle]}>
        <Button
          font="light"
          style={styles.backBtn}
          leftIcon={Icons.chevronLeft || props.leftIcon}
          leftIconStyle={[styles.leftIcon, props.leftIconStyle]}
          onPress={props.popToTop ? props.leftButtonPress : () => goBack()}
        />
        <Label
          bold
          style={[
            styles.headerTitle,
            props.titileStyle]}>{props.title}</Label>
        <Button
          font="light"
          style={[styles.backBtn, { paddingRight: 0 }]}
          leftIcon={props.rightIcon || Icons.plus}
          leftIconStyle={[styles.rightIcon, props.rightIconStyle]}
        />
      </View>
    )
  };
  return (
    <SafeAreaView style={styles.container}>
      {!props.disableHeader && renderHeader()}
      {
        !props.isInput ? (
          <View style={[styles.wrapper, props.style]}>{props.children}</View>
        ) : (
          <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} >
            <View style={[styles.wrapper, props.style]}>{props.children}</View>
          </TouchableWithoutFeedback>
        )
      }
    </SafeAreaView>
  )
}

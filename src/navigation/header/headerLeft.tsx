import { StackHeaderLeftButtonProps } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Icons } from '../../components/commons';
import { Colors } from '../../styles';
import { HEADER, PADDING } from '../../styles/scale';
import { FONT_SIZE_18, FONT_SIZE_22 } from '../../styles/Typography';
import { goBack } from '../navigation';

const SIZE = HEADER;

const styles = StyleSheet.create({
  btn: {
    paddingLeft: PADDING * 1.5,
    height: SIZE,
    borderRadius: 0,
    backgroundColor: '#0000',
  },
  icon: {
    width: "auto",
    marginRight: 0,
    fontSize: FONT_SIZE_22,
    color: Colors.BASECOLOR
  },
  wrap_title: {
    zIndex: -1,
    height: SIZE,
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
    justifyContent: 'center'
  },
  title: {
    textAlign: 'center',
    color: "#000",
    fontSize: FONT_SIZE_18,
  },
})
export default (props: StackHeaderLeftButtonProps) => {
  const isGoBack = props.canGoBack;
  const onPressHandler = () => {
    isGoBack && goBack()
  }
  return (
    <Button
      font="solid"
      leftIcon={Icons.arrowLeft}
      onPress={onPressHandler}
      iconStyle={styles.icon}
      style={styles.btn}
    />
  )
}
import React from 'react';
import { Text, TextProps } from 'react-native';

import { Themes } from '../../../styles';

interface IProps extends TextProps {
  bold?: boolean,
  children?: any,
  language?: 'en'
}

export default (props: IProps) => {
  return (
    <Text
      {...props}
      style={[Themes.TEXT, { fontWeight: props.bold ? '700' : '400' }, props.style]}
    >{props.children}</Text>
  );
}
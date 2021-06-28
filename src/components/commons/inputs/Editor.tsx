import React from 'react'
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ReturnKeyTypeOptions,
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
} from 'react-native'
import { Colors, Themes } from '../../../styles'
import { PADDING } from '../../../styles/scale'
import { FONT_SIZE_14, FONT_SIZE_16 } from '../../../styles/Typography'
import LabelIcon from '../labels/LabelIcon'
import Input from './Input'
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  formControll: {
    borderBottomColor: "#ddd",
    borderBottomWidth: .8,
    marginVertical: PADDING * 1.2,
    marginHorizontal: PADDING
  },
  icon: {
    width: "auto",
    fontSize: FONT_SIZE_16,
    color: Colors.GRAY_DARK
  },
})

interface EditorProps {
  value?: string
  title?: string
  icon?: string
  rightIcon?: string
  labelColor?: string
  placeholder?: string
  maxLength?: number
  returnKeyType?: ReturnKeyTypeOptions
  keyboardType?: KeyboardTypeOptions
  secureTextEntry?: boolean
  onPress?: () => void
  onChangeText?: (text: string) => void
  onLabelPress?: () => void
  onSubmitEditing?: (e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void
}

const Editor: React.FC<EditorProps> = React.forwardRef((props, ref?: React.LegacyRef<TextInput>) => {
  return (
    <View style={[Themes.ROW, styles.formControll]}>
      <TouchableOpacity onPress={props.onLabelPress} >
        <LabelIcon
          style={{ flex: 0 }}
          title={props.title}
          titleStyle={{
            color: props.labelColor || Colors.TEXT,
            fontSize: FONT_SIZE_14
          }}
          leftIcon={props.icon}
          leftIconStyle={styles.icon}
        />
      </TouchableOpacity>
      <Input
        //@ts-ignore
        reference={ref}
        {...props}
        value={props.value}
        style={{ flex: 1 }}
        textStyle={{
          color: "#000",
          fontSize: FONT_SIZE_16,
        }}
        rightIconStyle={{
          width: "auto",
          color: Colors.GRAY_DARK,
          fontSize: FONT_SIZE_14
        }}
      />
    </View>
  )
})
export default Editor
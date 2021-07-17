import React from 'react'
import {
  StackHeaderProps
} from '@react-navigation/stack';
import { View, StyleSheet } from 'react-native'
import { HPADDING, PADDING } from '../../styles/scale';
import { Button, Icons, Label } from '../../components/commons';
import { Colors, Themes } from '../../styles';
import { FONT_SIZE_16, FONT_SIZE_18, FONT_SIZE_22 } from '../../styles/Typography';
import { navigate } from '../navigation';

const styles = StyleSheet.create({
  container: {
    padding: PADDING,
    flexDirection: "row",
    backgroundColor: Colors.WHITE,
    alignItems: "center",
    justifyContent: "space-between",
  },
  btnSearch: {
    flex: 1,
    borderWidth: 1,
    borderColor: Colors.BASECOLOR,
    borderRadius: 10,
    backgroundColor: Colors.WHITE,
  },
  textSearch: {
    color: "#000",
    opacity: 0.5,
    padding: HPADDING,
    fontSize: FONT_SIZE_16,
  },
  title: {
    flex: 1,
    paddingLeft: PADDING,
    color: Colors.BASECOLOR,
    textAlign: "center",
    fontSize: FONT_SIZE_22,
  },
  btnBell: {
    flex: 1,
    backgroundColor: Colors.WHITE
  },
  bellIcon: {
    flex: 1,
    color: "#20D0C4",
    textAlign: "right",
    width: "auto",
    fontSize: FONT_SIZE_22,
  }

})

interface HomeHeaderProps extends StackHeaderProps { }

const HomeHeader: React.FC<HomeHeaderProps> = (props) => {
  return (
    <View style={[Themes.SHADOW, styles.container]}>
      <Button
        leftIcon={Icons.search}
        iconStyle={{
          fontSize: FONT_SIZE_18,
          color: Colors.BASECOLOR
        }}
        style={styles.btnSearch}
        title="Search..."
        textStyle={styles.textSearch}
        onPress={() => navigate("Search")}
      />

      <Label bold style={styles.title}>Resturant</Label>
      <Button
        rightIcon={Icons.bell}
        iconStyle={{
          fontSize: FONT_SIZE_18,
          color: Colors.BASECOLOR
        }}
        style={styles.btnBell}
        rightIconStyle={styles.bellIcon}
        onPress={() => navigate("Notification")}
      />
    </View>
  );
}
export default HomeHeader
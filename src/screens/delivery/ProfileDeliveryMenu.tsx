import React from "react";
import { useDispatch } from "react-redux";
import { View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import assets from "../../assets";
import {
  Icons,
  ImageLoading,
  Label,
  LabelIcon,
} from "../../components/commons";
import { navigate } from "../../navigation/navigation";
import { Colors, Themes } from "../../styles";
import { BOTTOM, HPADDING, PADDING, WTDP } from "../../styles/scale";
import {
  FONT_SIZE_16,
  FONT_SIZE_17,
  FONT_SIZE_18,
  FONT_SIZE_20,
} from "../../styles/Typography";
import { logout } from "../../store/actions/user";
import { useAppSelector } from "../../store";
import moment from "moment";
const IMAGE_WIDTH = WTDP(20, 600);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: PADDING,
  },
  wrapp_profile: {
    padding: PADDING,
    borderRadius: 15,
    backgroundColor: Colors.BASECOLOR,
  },
  profile_info: {
    flex: 1,
    paddingLeft: PADDING,
  },
  profile_img: {
    width: IMAGE_WIDTH,
    height: IMAGE_WIDTH,
    resizeMode: "cover",
  },
  info: {
    borderBottomColor: "#000",
  },
  title: {
    fontSize: FONT_SIZE_17,
    color: Colors.GRAY_DARK,
    paddingBottom: HPADDING,
  },
  profile_menu: {
    marginTop: BOTTOM * 2,
  },
  wrapp_menu: {
    paddingVertical: PADDING,
    justifyContent: "space-between",
    borderBottomColor: Colors.GRAY_DARK,
    borderBottomWidth: 0.5,
  },
});

interface ProfileDeliveryMenuProps {}

interface MenuProps {
  onPress?: () => void;
  title?: string;
  icon?: string;
}

const Menu = (props: MenuProps) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[Themes.ROW, styles.wrapp_menu]}
    >
      <LabelIcon
        titleStyle={{
          fontSize: FONT_SIZE_18,
          padding: PADDING,
        }}
        title={props.title}
        leftIcon={props.icon}
        iconStyle={{
          width: "auto",
          fontSize: FONT_SIZE_20,
        }}
      />
      {props.title !== "Logout" && <LabelIcon rightIcon={Icons.chevronRight} />}
    </TouchableOpacity>
  );
};

const ProfileDeliveryMenu: React.FC<ProfileDeliveryMenuProps> = (props) => {
  const { user } = useAppSelector((state) => state.user);
  const joinDate = moment(user?.createdAt).format("MMM, YYYY");
  const dispatch = useDispatch();
  const onLogout = () => {
    Alert.alert("Are you sure you want to logout?", " ", [
      {
        text: "Cancel",
        onPress: () => {},
      },
      {
        text: "Ok",
        onPress: () => dispatch(logout()),
      },
    ]);
  };
  return (
    <View style={styles.container}>
      <View style={[Themes.ROW, Themes.SHADOW, styles.wrapp_profile]}>
        <ImageLoading
          disabled
          imageStyle={styles.profile_img}
          style={[styles.profile_img, { flex: 0 }]}
          source={!user?.image?.url ? assets.PROFILE : { uri: user.image.url }}
        />
        <View style={styles.profile_info}>
          <LabelIcon
            titleBold
            style={styles.info}
            titleStyle={[styles.title, { textTransform: "uppercase" }]}
            title={user?.username}
          />
          <LabelIcon
            titleBold
            style={styles.info}
            titleStyle={{
              fontSize: FONT_SIZE_16,
              paddingBottom: PADDING,
            }}
            title={`Customer since ${joinDate}`}
          />
          <LabelIcon
            titleBold
            style={styles.info}
            titleStyle={styles.title}
            title={user?.email}
          />
          <LabelIcon
            titleBold
            style={[styles.info, { borderBottomWidth: undefined }]}
            titleStyle={styles.title}
            title={`0${user?.phone}`}
          />
        </View>
      </View>
      <View style={styles.profile_menu}>
        <Menu
          icon={Icons.listAlt}
          title="Your Orders"
          onPress={() => navigate("OrderDelivery")}
        />
        <Menu
          icon={Icons.clock}
          title="History"
          onPress={() => navigate("HistoryDelivery")}
        />
        <Menu
          icon={Icons.slidersH}
          title="Settings"
          onPress={() => navigate("Settings")}
        />
        <Menu
          icon={Icons.userEdit}
          title="Edit Profile"
          onPress={() => navigate("EditProfile")}
        />
        <Menu icon={Icons.powerOff} title="Logout" onPress={onLogout} />
      </View>
      <Label
        style={{
          paddingTop: PADDING,
          textAlign: "center",
          fontSize: FONT_SIZE_16,
          color: Colors.GRAY_DARK,
        }}
      >
        App Version: 1.0.0
      </Label>
    </View>
  );
};
export default ProfileDeliveryMenu;

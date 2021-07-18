import React, { useContext } from 'react'
import { useDispatch } from 'react-redux';
import { View, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import assets from '../../assets';
import { Icons, ImageLoading, Label, LabelIcon } from '../../components/commons';
import { AppCreateContext } from '../../context';
import { navigate } from '../../navigation/navigation';
import { LogcalStorage } from '../../storage/LocalStorage';
import { Colors, Themes } from '../../styles';
import { BOTTOM, HPADDING, PADDING, WTDP } from '../../styles/scale';
import { FONT_SIZE_16, FONT_SIZE_17, FONT_SIZE_18, FONT_SIZE_20 } from '../../styles/Typography';
import { logout } from '../../store/actions/localStorage';
const IMAGE_WIDTH = WTDP(20, 600)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: PADDING
  },
  wrapp_profile: {
    padding: PADDING,
    borderRadius: 15,
    backgroundColor: Colors.BASECOLOR,
  },
  profile_info: {
    flex: 1,
    paddingLeft: PADDING
  },
  profile_img: {
    width: IMAGE_WIDTH,
    height: IMAGE_WIDTH,
    resizeMode: 'cover'
  },
  info: {
    borderBottomColor: "#000",
  },
  title: {
    fontSize: FONT_SIZE_17,
    color: Colors.GRAY_DARK,
    paddingBottom: HPADDING
  },
  profile_menu: {
    marginTop: BOTTOM * 2
  },
  wrapp_menu: {
    paddingVertical: PADDING,
    justifyContent: "space-between",
    borderBottomColor: Colors.GRAY_DARK,
    borderBottomWidth: .5
  }

})

interface ProfileMenuProps {

}

interface MenuProps {
  onPress?: () => void
  title?: string
  icon?: string
}

const Menu = (props: MenuProps) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[Themes.ROW, styles.wrapp_menu]}>
      <LabelIcon titleStyle={{
        fontSize: FONT_SIZE_18,
        padding: PADDING
      }}
        title={props.title}
        leftIcon={props.icon}
        iconStyle={{
          width: "auto",
          fontSize: FONT_SIZE_20
        }}
      />
      {props.title !== "Logout" && <LabelIcon
        rightIcon={Icons.chevronRight}
      />}

    </TouchableOpacity>
  )
}

const ProfileMenu: React.FC<ProfileMenuProps> = (props) => {
  const dispatch = useDispatch()
  const onLogout = () => {
    Alert.alert("Are you sure you want to logout?", " ", [
      {
        text: "Cancel",
        onPress: () => { }
      },
      {
        text: "Ok",
        onPress: () => dispatch(logout())
      }
    ])
  }
  return (
    <View style={styles.container}>
      <View style={[Themes.ROW, Themes.SHADOW, styles.wrapp_profile]}>
        <ImageLoading
          disabled
          imageStyle={styles.profile_img}
          style={[styles.profile_img, { flex: 0 }]} source={assets.PROFILE} />
        <View style={styles.profile_info}>
          <LabelIcon
            titleBold
            style={styles.info}
            titleStyle={[styles.title, { textTransform: "uppercase" }]}
            title="Developer"
          />
          <LabelIcon
            titleBold
            style={styles.info}
            titleStyle={{
              fontSize: FONT_SIZE_16,
              paddingBottom: PADDING
            }}
            title="Customer since Jul, 2021"
          />
          <LabelIcon
            titleBold
            style={styles.info}
            titleStyle={styles.title}
            title="roth.dev.ops@gmail.com"
          />
          <LabelIcon
            titleBold
            style={[styles.info, { borderBottomWidth: undefined }]}
            titleStyle={styles.title}
            title="0966006145"
          />
        </View>
      </View>
      <View style={styles.profile_menu}>
        <Menu
          icon={Icons.listAlt}
          title="Your Orders"
        />
        <Menu
          icon={Icons.gift}
          title="Promotions"
        />
        <Menu
          icon={Icons.star}
          title="Your Favorite"
          onPress={() => navigate("Favorite")}
        />
        <Menu
          icon={Icons.bell}
          title="Notification"
          onPress={() => navigate("Notification")}
        />
        <Menu
          icon={Icons.slidersH}
          title="Settings"
        />
        <Menu
          icon={Icons.userEdit}
          title="Edit Profile"
        />
        <Menu
          icon={Icons.powerOff}
          title="Logout"
          onPress={onLogout}
        />
      </View>
      <Label style={{
        paddingTop: PADDING,
        textAlign: "center",
        fontSize: FONT_SIZE_16,
        color: Colors.GRAY_DARK
      }}>App Version: 1.0.0</Label>
    </View>
  );
}
export default ProfileMenu
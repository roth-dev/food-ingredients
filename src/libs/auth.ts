import * as Facebook from 'expo-facebook'
import { Alert } from 'react-native';
export async function facebookLogIn() {
  try {
    await Facebook.initializeAsync({
      appId: '966946864131017',
    });
    const {
      type,
      token,
      expirationDate,
      permissions,
      declinedPermissions,
    } = await Facebook.logInWithReadPermissionsAsync({
      permissions: ['public_profile'],
    });
    if (type === 'success') {
      // Get the user's name using Facebook's Graph API
      const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
      return {
        token: token,
        data: await response.json()
      };
    } else {
      // type === 'cancel'
    }
  } catch ({ message }) {
    alert(`Facebook Login Error: ${message}`);
  }
}
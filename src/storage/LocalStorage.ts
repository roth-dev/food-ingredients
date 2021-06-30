import AsyncStorage from '@react-native-async-storage/async-storage';

interface Init {
  token: string | null
}

export const LogcalStorage = {
  init: () => {
    const keys = [
      "auth_token"
    ]
    return new Promise<Init>((resolve, reject) => {
      AsyncStorage.multiGet(keys).then(r => {
        const token = r[0][1];
        resolve({ token });
      }).catch(e => reject(e))
    })
  },
  setToken: (token: string) => {
    return AsyncStorage.setItem("auth_token", token)
  },
  logout: () => {
    const keys = [
      'auth_token'
    ];
    AsyncStorage.multiRemove(keys)
  }
}
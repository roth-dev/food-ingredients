import * as Location from 'expo-location';
interface ILocation extends Location.LocationPermissionResponse { }
export function getLocationPermission(): Promise<ILocation> {
  return new Promise<ILocation>((resolve, reject) => {
    Location.requestForegroundPermissionsAsync().then((s) => {
      resolve(s)
    }).catch((e) => {
      reject(e)
    })
  })
}
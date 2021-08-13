
import { useEffect, useState } from 'react';
import {
  Accuracy,
  getCurrentPositionAsync,
} from 'expo-location';
import { ANDROID } from '../utils/platform';

export function useLocation() {
  const [state, setState] = useState<{
    lat: number | null,
    lng: number | null,
    loading: boolean
  }>({
    lat: null,
    lng: null,
    loading: true
  });
  useEffect(() => {
    (async () => {
      await getCurrentPositionAsync({
        accuracy: ANDROID ? Accuracy.Low
          : Accuracy.Lowest
      }).then((res) => {
        setState({
          loading: false,
          lat: res.coords.latitude,
          lng: res.coords.longitude,
        })
      }).catch((err: Error) => {
        setState({
          lat: null,
          lng: null,
          loading: false
        })
      })
    })()
  }, [])
  const { lat, lng, loading } = state;
  return [lat, lng, loading]
}
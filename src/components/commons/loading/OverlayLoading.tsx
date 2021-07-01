import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Animated,
  Easing,
  ActivityIndicator,
  Modal,
  ImageSourcePropType,
  EasingFunction
} from 'react-native';
import Label from '../labels/Label';
import { WTDP, HPADDING } from '../../../styles/scale'
import { FONT_SIZE_14 } from '../../../styles/Typography';
const SIZE = WTDP(22, 600)
const styles = StyleSheet.create({
  loadingView: {
    flex: 1,
    backgroundColor: '#00000033',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loading: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    marginTop: HPADDING,
    color: "#FFF",
    textAlign: "center",
    fontSize: FONT_SIZE_14
  }
});

export interface ILoadingOverlay {
  image?: ImageSourcePropType | null
  backgroundColor?: string
  borderRadius?: number
  size?: number
  imageSize?: number
  indicatorColor?: string
  easing?: EasingFunction
  loading?: boolean | null
  doingAnimation?: boolean
}
export interface State {
  show: boolean
  rotate_value: Animated.AnimatedValue
  startAnimation: boolean
}

type DefaultProps = ILoadingOverlay
export default class Loading extends Component<ILoadingOverlay, State> {
  static EasingType = Easing;
  private easing: EasingFunction
  private doingAnimation: boolean

  static defaultProps: DefaultProps = {
    image: null,
    backgroundColor: "#333333",
    borderRadius: 5,
    size: SIZE,
    imageSize: 40,
    indicatorColor: "#fff",
    easing: Easing.ease,
    loading: null,
  };

  constructor(props: ILoadingOverlay) {
    super(props);
    this.doingAnimation = false;
    this.easing = Easing.ease;
    this.state = {
      rotate_value: new Animated.Value(0),
      show: false,
      startAnimation: false,
    };
  }

  _startAnimation = () => {
    this.doingAnimation = true;
    this.state.rotate_value.setValue(0);
    Animated.timing(this.state.rotate_value, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
      easing: Easing.out(this.easing),
    }).start(() => {
      if (this.state.startAnimation) {
        this._startAnimation();
      }
    });
  };

  /**
   * show loading
   * @param isShow
   */
  show(isShow = true) {
    if (isShow) {
      this.setState((state: State) => {
        state.show = true;
        state.startAnimation = true;
        return state;
      });
      !this.doingAnimation && this._startAnimation();
    } else {
      this.close();
    }
  }

  /**
   * hide loading
   */
  close() {
    this.doingAnimation = false;
    this.setState((state: State) => {
      state.show = false;
      state.startAnimation = false;
      return state;
    });
  }

  render() {
    const {
      image = null,
      backgroundColor = "#333333",
      borderRadius = 5,
      size = SIZE,
      imageSize = 40,
      indicatorColor = "#fff",
      easing = Easing.ease,
      loading = null,
    } = this.props;
    this.easing = easing;

    let { show } = this.state;
    if (loading != null) {
      show = loading;
    }
    return (
      <Modal transparent={true} visible={show}>
        <View style={styles.loadingView}>
          <View
            style={[
              styles.loading,
              {
                backgroundColor,
                borderRadius: borderRadius,
                width: size,
                height: size,
              },
            ]}>
            {image ? (
              <Animated.Image
                style={{
                  width: imageSize,
                  height: imageSize,
                  transform: [
                    {
                      rotateZ: this.state.rotate_value?.interpolate({
                        inputRange: [0, 1],
                        outputRange: ['0deg', '360deg'],
                      }),
                    },
                  ],
                }}
                source={image}
              />
            ) : (
              <ActivityIndicator
                size={'large'}
                color={indicatorColor}
                animating={true}
              />
            )}
            <Label style={styles.label}>Loading...</Label>
          </View>
        </View>
      </Modal>
    );
  }
}


export const EasingType = Loading.EasingType;

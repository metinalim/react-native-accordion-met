import React from 'react';
import {
  Animated,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native'

interface Props {
  duration?: number
  open?: boolean
  style?: ViewStyle
  children?: React.ReactNode
}

interface State {
  contentHeight: number
}

export default class ItemContent extends React.Component<Props, State> {

  private animHeight: Animated.Value
  private _captureRef: React.Ref<View> | undefined

  constructor(props: Props) {
    super(props);
    this.state = { contentHeight: 100 }
    this.animHeight = (props.open) ? new Animated.Value(this.state.contentHeight) : new Animated.Value(0)
  }

  expand = () => {
    Animated.timing(this.animHeight, {
      toValue: this.state.contentHeight,
      duration: this.props.duration,
    }
    ).start()
  }

  shrink = () => {
    Animated.timing(this.animHeight, {
      toValue: 0,
      duration: this.props.duration,
    }
    ).start()
  }

  setContentHeight = (height: number) => {
    this.setState({ contentHeight: height }, () => {
      if (this.props.open === true) {
        Animated.timing(this.animHeight, {
          toValue: this.state.contentHeight,
          duration: 50,
        }).start();
      }
    })
  }

  buildStyle = (givenStyle: ViewStyle) => {
    const style = StyleSheet.flatten(givenStyle) || {}
    const newStyle = {}
    // Add style { alignSelf: stretch } to cover the parent view
    if (style.alignSelf === undefined) {
      newStyle['alignSelf'] = 'stretch'
    }

    Object.keys(style).map((key) => {
      newStyle[key] = style[key];
    });
    if (this.props.open !== true) {
      newStyle['height'] = 0;
    }
    newStyle['overflow'] = 'hidden';
    const newStyleSheet = StyleSheet.create({ style: newStyle });
    return newStyleSheet.style;
  }

  render() {
    const { children, style } = this.props;
    const viewStyle = style ? this.buildStyle(style) : null
    const animHeightStyle = { height: this.animHeight }
    return (
      <Animated.View style={[viewStyle, animHeightStyle]} ref={this._captureRef}>
        {children}
      </Animated.View>
    )
  }

}
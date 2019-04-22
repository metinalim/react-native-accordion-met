import React, { ReactElement } from 'react';
import {
  LayoutChangeEvent,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native'

interface Props {
  setOpened?: () => void
  addChildHeight?: (height: number) => void
  style?: ViewStyle
  children?: ReactElement & { duration?: number, style?: ViewStyle }
}

export default class ItemHeader extends React.Component<Props> {

  private _captureRef: React.Ref<TouchableOpacity> | undefined

  constructor(props: Props) {
    super(props);
  }

  buildStyle = (givenStyle: ViewStyle) => {
    const style = StyleSheet.flatten(givenStyle) || {}
    const newStyle = {}
    // Add style { backgroundColor: '#eee' } to cover the parent view when no flex has defined
    if (style.backgroundColor === undefined) {
      newStyle['backgroundColor'] = '#eee'
    }
    // Add style { height: undefined } to cover the parent view when no height has defined
    if (style.height === undefined) {
      newStyle['height'] = 38
    }
    // Add style { width: undefined } to cover the parent view when no width has defined
    if (style.width === undefined) {
      newStyle['width'] = undefined
    }
    // Add style { alignSelf: stretch } to cover the parent view
    if (style.alignSelf === undefined) {
      newStyle['alignSelf'] = 'stretch'
    }
    // Add style { justifyContent: 'center' } if not defined
    if (style.justifyContent === undefined) {
      newStyle['justifyContent'] = 'center'
    }

    Object.keys(style).map((key) => {
      newStyle[key] = style[key];
    });
    const newStyleSheet = StyleSheet.create({ style: newStyle });
    return newStyleSheet.style;
  }

  setOpened = () => {
    const props = this.props
    if (!props.setOpened) {
      return
    }
    props.setOpened()
  }

  addChildHeight = (event: LayoutChangeEvent) => {
    const props = this.props
    if (!props.addChildHeight) {
      return
    }
    const { layout } = event.nativeEvent
    const { height } = layout
    props.addChildHeight(height)
  }

  expand = () => { }

  shrink = () => { }

  setContentHeight = (height: number) => { }

  render() {
    const { children, style } = this.props;
    const viewStyle = style ? this.buildStyle(style) : null

    return (
      <TouchableOpacity style={viewStyle} ref={this._captureRef} onPress={() => { this.setOpened() }} onLayout={(event) => this.addChildHeight(event)}>
        {children}
      </TouchableOpacity>
    )
  }

}
import React from 'react';
import {
  LayoutChangeEvent,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native'
import ItemContent from './ItemContent';
import ItemHeader from './ItemHeader';
import MenuItem from './MenuItem';

interface Props {
  childTitleHeights?: number
  children?: React.ReactElement[]
  style?: ViewStyle
  duration?: number
}

export default class Accmenu extends React.Component<Props> {

  static Item: typeof MenuItem = MenuItem;
  static Header: typeof ItemHeader = ItemHeader;
  static Content: typeof ItemContent = ItemContent;
  private childTitleHeights: number[]
  private refers: {
    [key: string]: React.RefObject<MenuItem>;
  } = {}

  constructor(props: Props) {
    super(props);
    this.childTitleHeights = [];
  }

  buildStyle = (givenStyle: ViewStyle) => {
    const style = StyleSheet.flatten(givenStyle) || {}
    const newStyle = {}
    // Add style { flex: 1 } to cover the parent view when no flex has defined
    if (style.flex === undefined) {
      newStyle['flex'] = 1
    }
    // Flex direction
    if (style.flexDirection === undefined) {
      newStyle['flexDirection'] = 'column'
    }
    // Add style { height: undefined } to cover the parent view when no height has defined
    if (style.height === undefined) {
      newStyle['height'] = undefined
    }
    // Add style { width: undefined } to cover the parent view when no width has defined
    if (style.width === undefined) {
      newStyle['width'] = undefined
    }
    // Add style { alignSelf: stretch } to cover the parent view
    if (style.alignSelf === undefined) {
      newStyle['alignSelf'] = 'stretch'
    }
    Object.keys(style).map((key) => {
      newStyle[key] = style[key];
    });
    const newStyleSheet = StyleSheet.create({ style: newStyle });
    return newStyleSheet.style;
  }

  setupContentSize = (event: LayoutChangeEvent) => {
    const { height } = event.nativeEvent.layout;
    setTimeout(() => {
      let totalHeight = 0;
      for (const val of this.childTitleHeights) {
        totalHeight += val
      }
      const contentHeight = (height - totalHeight)
      for (const ref of Object.keys(this.refers)) {
        this.refers[ref].current!.setContentHeight(contentHeight)
      }
    }, 20)
  }

  addChildHeight = (index: number, height: number) => {
    this.childTitleHeights[index] = height;
  }

  shrinkSiblings = (ind: number) => {
    const { children } = this.props
    /* tslint:disable:no-unused-expression */
    children !== undefined && children.map((_child, i: number) => {
      if (i !== ind) {
        const refName = 'item' + i
        this.refers[refName].current!.shrink()
      }
    });
  }

  render() {
    const { children, style, duration } = this.props;
    const viewStyle = style ? this.buildStyle(style) : null
    const childrenWithProps = React.Children.map(children, (child, i: number) => {
      const refName = `item${i}`
      this.refers[refName] = React.createRef<MenuItem>()
      return React.cloneElement((child as React.ReactElement<any>), {
        index: i,
        ref: this.refers[refName],
        shrinkSiblings: this.shrinkSiblings,
        addChildHeight: this.addChildHeight,
        duration: duration || 200,
      })
    });
    return (
      <View style={viewStyle} onLayout={(event) => this.setupContentSize(event)}>
        {childrenWithProps}
      </View >
    )
  }
}

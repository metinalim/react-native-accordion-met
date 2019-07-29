import React, { ReactNode } from 'react';
import {
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native'
import ItemContent from './ItemContent';
import ItemHeader from './ItemHeader';

interface Props {
  open?: boolean
  shrinkSiblings?: (ind: number) => void
  addChildHeight?: (ind: number, height: number) => void
  index?: number
  style?: ViewStyle
  duration?: number
}
interface State {
  opened: boolean
}

export default class MenuItem extends React.Component<Props, State> {

  private _captureRef: React.Ref<View> | undefined
  private refers: {
    [key: string]: React.RefObject<ItemContent | ItemHeader>;
  } = {}

  constructor(props: Props) {
    super(props);
    this.state = { opened: this.props.open ? this.props.open : false }
  }

  buildStyle = (givenStyle: ViewStyle) => {
    const style = StyleSheet.flatten(givenStyle) || {}
    // Add style { alignSelf: stretch } to cover the parent view
    const newStyle = {}
    newStyle['alignSelf'] = 'stretch'
    Object.keys(style).map((key) => {
      newStyle[key] = style[key];
    });
    const newStyleSheet = StyleSheet.create({ style: newStyle });
    return newStyleSheet.style;
  }

  setOpened = () => {
    const props = this.props
    if (!props.shrinkSiblings) {
      return
    }
    props.shrinkSiblings(props.index!)
    const ref = `refContent${this.props.index}`
    this.refers[ref].current!.expand();
    this.setState({ opened: true })
  }

  addChildHeight = (height: number) => {
    const props = this.props
    if (!props.addChildHeight) {
      return
    }
    props.addChildHeight(props.index!, height)
  }

  shrink = () => {
    const ref = `refContent${this.props.index}`
    this.refers[ref].current!.shrink();
    this.setState({ opened: false })
  }

  setContentHeight = (height: number) => {
    const ref = `refContent${this.props.index}`
    this.refers[ref].current!.setContentHeight(height);
  }

  render() {
    const { children, style, index, duration } = this.props;
    const viewStyle = style ? this.buildStyle(style) : null

    const childrenWithProps = React.Children.map(children, (child: ReactNode, _i) => {
      let refName
      if (React.isValidElement(child) && ((child.type as React.SFC).displayName === 'ItemContent')) {
        refName = `refContent${index}`
        this.refers[refName] = React.createRef<ItemContent>()
      } else {
        refName = `refTitle${index}`
        this.refers[refName] = React.createRef<ItemHeader>()
      }
      return React.cloneElement(child as React.ReactElement<any>, {
        ref: this.refers[refName],
        open: this.state.opened,
        index,
        setOpened: this.setOpened,
        addChildHeight: this.addChildHeight,
        setContentHeight: this.setContentHeight,
        duration,
      })
    });

    return (
      <View style={viewStyle} ref={this._captureRef} >
        {childrenWithProps}
      </View>
    )
  }

}
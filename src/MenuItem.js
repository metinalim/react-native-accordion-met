'use strict';

import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Dimensions,
    TouchableOpacity,
} from 'react-native'

class MenuItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = { opened: this.props.open ? this.props.open : false }
    }

    buildStyle = (style) => {
        var style = StyleSheet.flatten(style) || {}
        var newStyle = {}
        // Add style { alignSelf: stretch } to cover the parent view
        if (style.alignSelf == undefined) {
            newStyle.alignSelf = 'stretch'
        }

        Object.keys(style).map((key) => {
            newStyle[key] = style[key];
        });
        var newStyleSheet = StyleSheet.create({ style: newStyle });
        return newStyleSheet.style;
    }

    setOpened = () => {
        var props = this.props
        props.shrinkSiblings(props.index)
        var ref = 'refContent' + props.index
        this.refs[ref].expand();
        this.setState({ opened: true })
    }

    addChildHeight = (height) => {
        this.props.addChildHeight(this.props.index, height)
    }

    shrink = () => {
        var ref = 'refContent' + this.props.index
        this.refs[ref].shrink();
        this.setState({ opened: false })
    }

    setContentHeight = (height) => {
        var ref = 'refContent' + this.props.index
        this.refs[ref].setContentHeight(height);
    }

    render() {
        const { children, style, index, duration, ...props } = this.props;
        var viewStyle = this.buildStyle(style)

        var childrenWithProps = React.Children.map(children, (child, i) => {
            var ref = (child.type.displayName == 'ItemContent') ? 'refContent' + index : 'refTitle' + index
            return React.cloneElement(child, {
                ref: ref,
                open: this.state.opened,
                index: index,
                setOpened: this.setOpened,
                addChildHeight: this.addChildHeight,
                setContentHeight: this.setContentHeight,
                duration: duration,
            })
        });

        return (
            <View style={viewStyle} ref={this._captureRef}>
                {childrenWithProps}
            </View>
        )
    }

}
module.exports = MenuItem
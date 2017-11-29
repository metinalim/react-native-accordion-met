'use strict';

import React from 'react';
import {
    StyleSheet,
    Text,
    Animated,
    View,
    ScrollView,
    Dimensions,
    TouchableOpacity,
} from 'react-native'




class ItemContent extends React.Component {

    constructor(props) {
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

    setContentHeight = (height) => {
        this.setState({ contentHeight: height }, () => {
            if (this.props.open == true) {
                Animated.timing(this.animHeight, {
                    toValue: this.state.contentHeight,
                    duration: 50,
                }).start();
            }
        })
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
        if (this.props.open !== true) {
            newStyle.height = 0;
        }
        newStyle.overflow = 'hidden';
        var newStyleSheet = StyleSheet.create({ style: newStyle });
        return newStyleSheet.style;
    }

    render() {
        const { children, style, open, ...props } = this.props;
        var viewStyle = this.buildStyle(style)
        var animHeightStyle = { height: this.animHeight }
        return (
            <Animated.View style={[viewStyle, animHeightStyle]} ref={this._captureRef}>
                {children}
            </Animated.View>
        )
    }

}
module.exports = ItemContent
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




class ItemHeader extends React.Component {

    constructor(props) {
        super(props);
    }

    buildStyle = (style) => {
        var style = StyleSheet.flatten(style) || {}
        var newStyle = {}
        // Add style { backgroundColor: '#eee' } to cover the parent view when no flex has defined
        if ( style.backgroundColor == undefined ) {
            newStyle.backgroundColor = '#eee'
        }
        // Add style { height: undefined } to cover the parent view when no height has defined
        if (style.height == undefined) {
            newStyle.height = 38
        }
        // Add style { width: undefined } to cover the parent view when no width has defined
        if (style.width == undefined) {
            newStyle.width = undefined
        }
        // Add style { alignSelf: stretch } to cover the parent view
        if (style.alignSelf == undefined) {
            newStyle.alignSelf = 'stretch'
        }
        // Add style { justifyContent: 'center' } if not defined
        if (style.justifyContent == undefined) {
            newStyle.justifyContent = 'center'
        }

        Object.keys(style).map((key) => {
            newStyle[key] = style[key];
        });
        var newStyleSheet = StyleSheet.create({ style: newStyle });
        return newStyleSheet.style;
    }

    setOpened = () => {
        this.props.setOpened()
    }

    addChildHeight = (event) => {
        var {x, y, width, height} = event.nativeEvent.layout;
        this.props.addChildHeight(height)
    }

    setContentHeight = (height) => {
    }

    render() {
        const { children, style, ...props } = this.props;
        var viewStyle = this.buildStyle(style)

        return (
            <TouchableOpacity style={viewStyle} ref={this._captureRef} onPress={()=>{this.setOpened()}} onLayout={(event)=>this.addChildHeight(event)}>
                {children}
            </TouchableOpacity>
        )
    }

}
module.exports = ItemHeader
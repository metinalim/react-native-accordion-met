'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Dimensions,
    TouchableOpacity,
} from 'react-native'

import MenuItem from './MenuItem';
import ItemHeader from './ItemHeader';
import ItemContent from './ItemContent';
import { setTimeout } from 'core-js/library/web/timers';



class Accmenu extends Component {



    constructor(props) {
        super(props);
        this.childTitleHeights = [];
    }

    buildStyle = (style) => {
        var style = StyleSheet.flatten(style) || {}
        var newStyle = {}
        // Add style { flex: 1 } to cover the parent view when no flex has defined
        if (style.flex == undefined) {
            newStyle.flex = 1
        }
        // Flex direction
        if (style.flexDirection == undefined) {
            newStyle.flexDirection = 'column'
        }
        // Add style { height: undefined } to cover the parent view when no height has defined
        if (style.height == undefined) {
            newStyle.height = undefined
        }
        // Add style { width: undefined } to cover the parent view when no width has defined
        if (style.width == undefined) {
            newStyle.width = undefined
        }
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

    setupContentSize = (event) => {
        var { x, y, width, height } = event.nativeEvent.layout;
        setTimeout(() => {
            var totalHeight = 0;
            for (var ind in this.childTitleHeights) {
                totalHeight += this.childTitleHeights[ind]
            }
            var contentHeight = (height - totalHeight)
            for (var ref in this.refs) {
                this.refs[ref].setContentHeight(contentHeight)
            }
        }, 20)
    }

    addChildHeight = (index, height) => {
        this.childTitleHeights[index] = height;
    }

    shrinkSiblings = (ind) => {
        this.props.children.map((child, i) => {
            if (i !== ind) {
                var ref = 'item' + i
                this.refs[ref].shrink(i)
            }
        });
    }

    render() {
        const { children, style, duration, ...props } = this.props;
        var viewStyle = this.buildStyle(style)
        var childrenWithProps = React.Children.map(children, (child, i) => {
            return React.cloneElement(child, {
                index: i,
                shrink: this.shrink,
                ref: 'item' + i,
                shrinkSiblings: this.shrinkSiblings,
                addChildHeight: this.addChildHeight,
                duration: duration || 200,
            })
        });
        return (
            <View style={viewStyle} onLayout={(event) => this.setupContentSize(event)}>
                {childrenWithProps}
            </View>
        )
    }
}

Accmenu.Item = MenuItem
Accmenu.Header = ItemHeader
Accmenu.Content = ItemContent

module.exports = Accmenu
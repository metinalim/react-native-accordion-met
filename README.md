# React Native Accordion (by Metin) 
[![npm version](https://badge.fury.io/js/react-native-accordion-met.svg)](https://badge.fury.io/js/react-native-accordion-met) [![dependencies Status](https://img.shields.io/david/prettier/tslint-config-prettier.svg)](https://david-dm.org/prettier/tslint-config-prettier) [![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/tslint-config-prettier)[![Monthly download](https://img.shields.io/npm/dm/react-native-accordion-met.svg)](https://img.shields.io/npm/dm/react-native-accordion-met.svg) [![Total downloads](https://img.shields.io/npm/dt/react-native-accordion-met.svg)](https://img.shields.io/npm/dt/react-native-accordion-met.svg)

An easy, decent way of creating accordion menu for react native

## Installation
```shell
npm i --save react-native-accordion-met
```
or
```shell
yarn add react-native-accordion-met
```

## Usage
Include it...
```shell
import Accordion from 'react-native-accordion-met';
```
The idea...
```shell
    <Accordion>
      <Accordion.Item open={true}>
        <Accordion.Header>
          ...
        </Accordion.Header>
        <Accordion.Content>
          ...
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item>
        <Accordion.Header>
          ...
        </Accordion.Header>
        <Accordion.Content>
          ...
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
```

A working example: 
```shell
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

var Accordion = require('react-native-accordion-met');

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Accordion>
          <Accordion.Item open={true}>
            <Accordion.Header>
              <Text>First Menu Item</Text>
            </Accordion.Header>
            <Accordion.Content>
              <Text>Content for first item</Text>
              <Text>Content for first item</Text>
              <Text>Content for first item</Text>
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item>
            <Accordion.Header>
              <Text>Second Menu Item</Text>
            </Accordion.Header>
            <Accordion.Content>
              <Text>Content for second item</Text>
              <Text>Content for second item</Text>
              <Text>Content for second item</Text>
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item>
            <Accordion.Header>
              <Text>Third Menu Item</Text>
            </Accordion.Header>
            <Accordion.Content>
              <Text>Content for third item</Text>
              <Text>Content for third item</Text>
              <Text>Content for third item</Text>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
```



Some more styling: 
```shell

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import Accordion from './react-native-accordion-met'

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>

        <Accordion style={styles.accordion} duration={1300}>
          <Accordion.Item style={styles.accordionItem} open={true}>
            <Accordion.Header style={styles.accordionTitle}>
              <Text style={styles.accordionTitleText}>First Menu Item</Text>
            </Accordion.Header>
            <Accordion.Content>
              <Text style={styles.accordionTitleText}>Content for first item</Text>
              <Text style={styles.accordionTitleText}>Content for first item</Text>
              <Text style={styles.accordionTitleText}>Content for first item</Text>
              <Text style={styles.accordionTitleText}>Content for first item</Text>
              <Text style={styles.accordionTitleText}>Content for first item</Text>
              <Text style={styles.accordionTitleText}>Content for first item</Text>
              <Text style={styles.accordionTitleText}>Content for first item</Text>
              <Text style={styles.accordionTitleText}>Content for first item</Text>
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item style={styles.accordionItem}>
            <Accordion.Header style={styles.accordionTitle}>
              <Text style={styles.accordionTitleText}>Second Menu Item</Text>
            </Accordion.Header>
            <Accordion.Content>
              <Text style={styles.accordionTitleText}>Content for second item</Text>
              <Text style={styles.accordionTitleText}>Content for second item</Text>
              <Text style={styles.accordionTitleText}>Content for second item</Text>
              <Text style={styles.accordionTitleText}>Content for second item</Text>
              <Text style={styles.accordionTitleText}>Content for second item</Text>
              <Text style={styles.accordionTitleText}>Content for second item</Text>
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item style={styles.accordionItem}>
            <Accordion.Header style={styles.accordionTitle}>
              <Text style={styles.accordionTitleText}>Third Menu Item</Text>
            </Accordion.Header>
            <Accordion.Content>
              <Text style={styles.accordionTitleText}>Content for 3 item</Text>
              <Text style={styles.accordionTitleText}>Content for 3 item</Text>
              <Text style={styles.accordionTitleText}>Content for 3 item</Text>
              <Text style={styles.accordionTitleText}>Content for 3 item</Text>
              <Text style={styles.accordionTitleText}>Content for 3 item</Text>
              <Text style={styles.accordionTitleText}>Content for 3 item</Text>
              <Text style={styles.accordionTitleText}>Content for 3 item</Text>
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item style={styles.accordionItem}>
            <Accordion.Header style={styles.accordionTitle}>
              <Text style={styles.accordionTitleText}>Forth Menu Item</Text>
            </Accordion.Header>
            <Accordion.Content>
              <Text style={styles.accordionTitleText}>Content for 4 item</Text>
              <Text style={styles.accordionTitleText}>Content for 4 item</Text>
              <Text style={styles.accordionTitleText}>Content for 4 item</Text>
              <Text style={styles.accordionTitleText}>Content for 4 item</Text>
              <Text style={styles.accordionTitleText}>Content for 4 item</Text>
              <Text style={styles.accordionTitleText}>Content for 4 item</Text>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>

        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  accordion: {
    backgroundColor: '#eee',
  },
  accordionTitle: {
    backgroundColor: '#f3f3f3',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    height: 50,
  },
  accordionItem: {
    backgroundColor: '#fefefe',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  accordionTitleText: {
    marginLeft: 24,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
```


## Props for Accordion Component 
| Name | Type | Note |
|---|---|---|
|__`duration`__|`integer`|Miliseconds for collapsing animation duration time
|__`style`__|`object`|A StyleSheet rule name just as used for default RN Components.

## Props for <Accordion.Item /> Component 
| Name | Type | Note |
|---|---|---|
|__`open`__|`boolean`|true/false whether the item is opened. Be sure to use it only once for each accordion.
|__`style`__|`object`|A StyleSheet rule name just as used for default RN Components.

## Props for <Accordion.Header /> and <Accordion.Content /> Components
| Name | Type | Note |
|---|---|---|
|__`style`__|`object`|A StyleSheet rule name just as used for default RN Components.


## LICENSE Copyright (c) 2017, Metin Alim

GNU GENERAL PUBLIC LICENSE
Version 3, 29 June 2007

Copyright (C) 2007 Free Software Foundation, Inc. <http://fsf.org/>
Everyone is permitted to copy and distribute verbatim copies
of this license document, but changing it is not allowed.
... https://github.com/metinalim/react-native-accordion-met/blob/master/LICENSE

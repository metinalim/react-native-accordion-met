# React Native Accordion (by Metin)
An easy, decent way of creating accordion menu for react native

## Install
```shell
npm i --save react-native-accordion-met
```

## Usage
Include it...
```shell
var Accordion = require('react-native-accordion-met');
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
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Accordion from './react-native-accordion-met'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>

        <Accordion style={styles.accordion} duration={1300}>
          <Accordion.Item style={styles.accordionItem} open={true}>
            <Accordion.Header style={styles.accordionTitle}>
              <Text style={styles.accordionTitleText}>First Menu Item</Text>
            </Accordion.Header>
            <Accordion.Content style={styles.accordionContent}>
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
            <Accordion.Content style={styles.accordionContent}>
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
            <Accordion.Content style={styles.accordionContent}>
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
            <Accordion.Content style={styles.accordionContent}>
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
  accordionContent: {
    // flex: 1
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
| Name | Value | Note |
|---|---|---|
|__`duration`__|`integer`|Miliseconds for collapsing animation duration time
|__`style`__|`N/A`|A StyleSheet rule name just as used for default RN Components.

## Props for <Accordion.Item /> Component 
| Name | Value | Note |
|---|---|---|
|__`open`__|`boolean`|true/false whether the item is opened. Be sure to use it only once for each accordion.
|__`style`__|`N/A`|A StyleSheet rule name just as used for default RN Components.

## Props for <Accordion.Header /> and <Accordion.Content /> Components
| Name | Value | Note |
|---|---|---|
|__`style`__|`N/A`|A StyleSheet rule name just as used for default RN Components.


## LICENSE Copyright (c) 2017, Metin Alim

GNU GENERAL PUBLIC LICENSE
Version 3, 29 June 2007

Copyright (C) 2007 Free Software Foundation, Inc. <http://fsf.org/>
Everyone is permitted to copy and distribute verbatim copies
of this license document, but changing it is not allowed.
... https://github.com/metinalim/react-native-accordion-met/blob/master/LICENSE

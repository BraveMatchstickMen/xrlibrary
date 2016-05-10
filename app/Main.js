'use strict'

import React, {
  NavigatorIOS,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Home from './views/home';

export default class Main extends React.Component {

  render() {
    return(
      <NavigatorIOS
        style={{flex:1}}
        initialRoute={{
          component: Home,
          title: '首页',
          passProps: {},
        }}
      />
    );
  }
}

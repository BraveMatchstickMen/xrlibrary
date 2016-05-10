'use strict'

import React, {
  View,
  Text,
  StyleSheet,
  NavigatorIOS,
  TouchableHighlight,
  ScrollView
} from 'react-native';

import Me from '../views/me';

export default class Home extends React.Component {

  constructor(props) {
        super(props);
    }

  render() {
    return(
      <ScrollView>
      <TouchableHighlight
        style={styles.touchHighLight}
        onPress={this.goto.bind(this)}>
        <Text style={styles.list_item}>test1</Text>
      </TouchableHighlight>
      <Text style={styles.list_item} onPress={this.goTo}>test2</Text>
      <Text style={styles.list_item} onPress={this.goTo}>test3</Text>
      </ScrollView>
    );
  }

  goto() {
    this.props.navigator.push({
      component: Me,
      title: '详情页面',
      rightButtonTitle: '购物车',
      onRightButtonPress() {
        alert('进入我的购物车');
      }
    });
  }
}

var styles = StyleSheet.create({

  flex:{
    flex: 1,
  },

  list_item:{
    lineHeight:25,
    fontSize:16,
    marginLeft:10,
    marginRight:10
  },

  touchHighLight:{
        flex:1,
        marginBottom:10,
        backgroundColor: '#434243',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

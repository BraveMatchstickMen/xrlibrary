'use strict'

import React, {
  View,
  Text,
  StyleSheet,
  NavigatorIOS,
  TouchableHighlight,
  ScrollView
} from 'react-native';

import Detail from '../views/detail';

class HomeNavBar extends React.Component {

  render() {
    return(
      <ScrollView style={styles.flex}>
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
      component: Detail,
      title: '详情页面',
      rightButtonTitle: '购物车',
      onRightButtonPress() {
        alert('进入我的购物车');
      }
    });
  }
}

export default class Home extends React.Component {

  render() {
    return(
      <NavigatorIOS
        style={styles.navcontainer}
        initialRoute={{
          title: 'Home',
          component: HomeNavBar
        }}
      />
    );
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
    },

  description:{
    fontSize:20,
    backgroundColor:'white'
  },
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  navcontainer:{
    flex:1,
    backgroundColor:'red'
  }
});

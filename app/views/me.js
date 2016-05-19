'use strict'

import React, {
  Text,
  StyleSheet,
  ScrollView,
  NavigatorIOS,
} from 'react-native';

class MeNavBar extends React.Component {
  render(){
    return(
      <ScrollView>
        <Text>我的页面</Text>
        <Text>展示你的个人资料</Text>
      </ScrollView>
    );
  }
};

export default class Me extends React.Component {

  render(){
    return(
      <NavigatorIOS
        style={styles.navcontainer}
        initialRoute={{
          title: '我的',
          component: MeNavBar
        }}
      />
    );
  }
}

var styles = StyleSheet.create({
  navcontainer:{
    flex:1,
    backgroundColor:'red'
  }
});

'use strict'

import React, {
  ScrollView,
  Text,
  View,
  NavigatorIOS,
  StyleSheet
} from 'react-native';

class LoginNavBar extends React.Component {

  render() {
    return(
      <View></View>
    );
  }
}

export default class Login extends React.Component {

  render() {
    return(
      <NavigatorIOS
        style={styles.navcontainer}
        initialRoute={{
          title: 'Login',
          component: LoginNavBar
        }}
      />
    );
  }


  // <NavigatorIOS
  //   style={{flex:1}}
  //   initialRoute={{
  //     component: Login,
  //     title: '首页',
  //     passProps: {},
  //   }}
  // />


};

var styles = StyleSheet.create ({
  message:{
    alignItems:'center',
    marginLeft:5,
    marginRight:5,
  },
  message_title:{
    fontSize:18,
    color: '#18B5FF',
    marginBottom:5,
  },
  list:{
    height:30,
    fontSize:15,
    marginLeft:10,
    marginTop:10,
  },
  escription:{
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

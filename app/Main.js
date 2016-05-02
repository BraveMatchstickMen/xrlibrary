'use strict';

var React = require('react-native');
var Home = require('./views/home').default;
var Me = require('./views/me');
var Util = require('./views/util');
var Service = require('./views/service');

var {
  Component,
  Image,
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  NavigatorIOS,
  StatusBarIOS,
  ScrollView,
  TouchableHighlight,
  ActivityIndicatorIOS,
  TextInput,
} = React;

// StatusBarIOS.setBarStyle('light-content');

var Library = React.createClass ({
  statics: {
    title: '主页',
    description: '选项卡'
  },

  getInitialState: function(){
    return {
      selectedTab: 'home',
      showIndex: {
        height:0,
        opacity:0
      },
      showLogin: {
        flex:1,
        opacity:1
      },
      isLoadingShow: false
    };
  },

  componentDidMount: function() {

  },

  _selectTab: function(tabName) {
    this.setState({
      selectedTab: tabname
    });
  },

  _addNavigator: function(component, title) {
    var data = null;
    if (title === '我的') {
      data = this.state.data;
    }
    return <NavigatorIOS
      style={{flex:1}}
      barTintColor='#007AFF'
      titleTextColor='#fff'
      tintColor='#fff'
      translucent={false}
      initialRoute={{
        component: component,
        title: title,
        passProps: {
          data: data
        }
      }}
    />;
  },

  _getEmail: function(val){
    var email = val;
    this.setState({
      email: email
    });
  },

  _getPassword: function(val) {
    var password = val;
    this.setState({
      password: password
    });
  },

  _login: function(){
    var email = this.state.email;
    var password = this.state.password;
    var path = Service.host;
    var that = this;

    that.setState ({
      showLogin: {
        height:0,
        width:0,
        flex:0,
      },
      isLoadingShow: true
    });
    AdSupportIOS.getAdvertisingTrackingEnabled(function(){
      AdSupportIOS.getAdvertisingId(function(deviceId){

      });
    });
  },

  render: function(){
    return(
      <View style={{flex:1}}>
        {this.state.isLoadingShow ?
          <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <ActivityIndicatorIOS size="small" color="#268DFF"></ActivityIndicatorIOS>
          </View>:null
        }

        {!this.state.isLoadingShow ? 
          <View style={this.state.showIndex}>
            <TabBarIOS barTintColor="#FFF">
              <TabBarIOS.Item 
                icon={require('./img/tab_xingren_highlight.png')}
                title="首页"
                selected={this.state.selectedTab === 'home'}
                onPress={this._selectTab.bind(this, 'home')}
                >
                {this._addNavigator(Home, '主页')}
              </TabBarIOS.Item>

              <TabBarIOS.Item 
                icon={require('./img/tab_xingren_highlight.png')}
                title="我的"
                selected={this.state.selectedTab === 'me'}
                onPress={this._selectTab.bind(this, 'me')}
                >
                {this._addNavigator(Me, '我的')}
              </TabBarIOS.Item>
            </TabBarIOS>
          </View>:null
        }

        <ScrollView style={[this.state.showLogin]}>
          <View style={styles.container}>
            <View>
              <Image 
                style={styles.logo} 
                source={require('./img/tab_xingren_highlight.png')}
              />
            </View>

            <View style={styles.inputRow}>
               <Text>邮箱</Text><TextInput style={styles.input}
               placeHolder="请输入邮箱" onChangeText={this._getEmail}/>
            </View>

            <View style={styles.inputRow}>
               <Text>密码</Text><TextInput style={styles.input}
               placeHolder="请输入密码" password={true} onChangeText={this._getPassword}/>
            </View>

            <View>
              <TouchableHighlight underlayColor="#fff" style={styles.btn}
                 onPress={this._login}>
                 <Text style={{color:'#fff'}}>登录</Text>
              </TouchableHighlight>
            </View>
          </View>
        </ScrollView>

      </View>
    );
  }

});

var styles = StyleSheet.create({
  container:{
    marginTop:50,
    alignItems: 'center',
  },
  logo:{
    width:100,
    height:100,
    resizeMode: Image.resizeMode.contain,
  },
  inputRow:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  input:{
    marginLeft: 10,
    width: 220,
    borderWidth: Util.pixel,
    height: 35,
    paddingLeft: 8,
    borderRadius: 5,
    borderColor: '#ccc'
  },
  btn:{
    marginTop: 10,
    width: 80,
    height: 35,
    backgroundColor: '#3BC1FF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  }
});

module.exports = Library;
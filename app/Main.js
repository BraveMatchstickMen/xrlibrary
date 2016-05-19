'use strict'

import React, {
  NavigatorIOS,
  TabBarIOS,
  StyleSheet,
  ScrollView,
  AsyncStorage,
  TouchableHighlight,
  Image,
  TextInput,
  Text,
  View,
} from 'react-native';

import Home from './views/home';
import Me from './views/me'
import Login from './views/login';
import Util from './views/util';
import Service from './views/service';

export default class Main extends React.Component {

  constructor(props) {
        super(props);
        this.state = {
          selectedTab: 'home',
          showIndex: {
            height:0,
            opacity:0
          },
          showLogin:{
            flex:1,
            opacity:1
          }
        }
    }

    select(tabName) {
      this.setState({
        selectedTab: tabName
      });
    }

  componentDidMount() {
      var that = this;
      AsyncStorage.getItem('username', function(err, username){
        if(!err && username){
          that.setState({
              showLogin: {
                height:0,
                width:0,
                flex:0,
              },
              showIndex:{
                flex:1,
                opacity:1
              }
            });
        } else {
          that.setState({
            showIndex: {
              height:0,
              opacity:0
            },
            showLogin:{
              flex:1,
              opacity:1
            }
        });
      }
    });
  }

    _getEmail(val){
      var email = val;
      this.setState({
        email: email
      });
    }

    _getPassword(val){
      var password = val;
      this.setState({
        password: password
      });
    }

    _login(){
      var email = this.state.email;
      var password = this.state.password;
      var path = Service.host + Service.login;
      var that = this;

      //隐藏登录页 & 加载loading
      that.setState({
        showLogin: {
          height:0,
          width:0,
          flex:0,
        },
      });


      fetch(path, {
        method: 'POST',
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `user_name=${email}&user_pwd=${password}`
      })
        .then((response) => response.json())
        .then((responseText) => {
           console.log(responseText);
           AsyncStorage.multiSet([
             ['username', responseText.body.des_name],
             ['body', responseText.body.des_id],
           ], function(err){
             if(!err){
               that.setState({
                 showLogin: {
                   height:0,
                   width:0,
                   flex:0,
                 },
                 showIndex:{
                   flex:1,
                   opacity:1
                 }
               });
             }
           });
        })
        .catch((error) => {
           console.warn(error);
         });
    }

  render() {
    return(

      <View style={{flex:1}}>

        <View style={this.state.showIndex}>

         <TabBarIOS selectedTab={this.state.selectedTab}>

           <TabBarIOS.Item
            title='首页'
            icon={require('./img/tab_xingren_highlight.png')}
            onPress={this.select.bind(this, 'home')}
            selected={this.state.selectedTab === 'home'}
            >
            <Home/>
          </TabBarIOS.Item>

          <TabBarIOS.Item
            title='我的'
            icon={require('./img/tab_xingren_highlight.png')}
            onPress={this.select.bind(this, 'me')}
            selected={this.state.selectedTab === 'me'}
            >
            <Me/>
           </TabBarIOS.Item>

         </TabBarIOS>
        </View>

        <ScrollView style={this.state.showLogin}>
          <View style={styles.container}>
            <View>
              <Image style={styles.logo} source={require('./img/tab_xingren_highlight.png')}></Image>
            </View>

            <View style={styles.inputRow}>
              <Text>邮箱</Text><TextInput style={styles.input} placeholder="请输入邮箱" onChangeText={this._getEmail.bind(this)}/>
            </View>
            <View style={styles.inputRow}>
              <Text>密码</Text><TextInput style={styles.input} placeholder="请输入密码" password={true} onChangeText={this._getPassword.bind(this)}/>
            </View>

            <View>
              <TouchableHighlight underlayColor="#fff" style={styles.btn} onPress={this._login.bind(this)}>
                <Text style={{color:'#fff'}}>登录</Text>
              </TouchableHighlight>
            </View>
          </View>
        </ScrollView>

      </View>


    );
  }
}

var styles = StyleSheet.create({
  flex:{
    flex: 1,
  },
  container:{
  marginTop:50,
  alignItems:'center',
},
logo:{
  width:100,
  height:100,
  resizeMode: Image.resizeMode.contain
},
inputRow:{
  flexDirection:'row',
  alignItems:'center',
  justifyContent: 'center',
  marginBottom:10,
},
input:{
  marginLeft:10,
  width:220,
  borderWidth:Util.pixel,
  height:35,
  paddingLeft:8,
  borderRadius:5,
  borderColor:'#ccc'
},
btn:{
  marginTop:10,
  width:80,
  height:35,
  backgroundColor:'#3BC1FF',
  justifyContent:'center',
  alignItems:'center',
  borderRadius: 4,
}
});

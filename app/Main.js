'use strict'

import React, {
  NavigatorIOS,
  TabBarIOS,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Home from './views/home';
import Login from './views/login'

export default class Main extends React.Component {

  constructor(props) {
        super(props);
        this.state = {
          selectedTab: 'Home'
        };
    }

  select(tabName) {
    this.setState({
      selectedTab: tabName
    });
  }

  _addNavigator(component, title){
  return <NavigatorIOS
    style={{flex:1}}
    barTintColor='#007AFF'
    titleTextColor="#fff"
    tintColor="#fff"
    translucent={false}
    initialRoute={{
        component: component,
        title: title,
        passProps:{}
      }}
    />
   }

  render() {
    return(
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
          title='测试'
          icon={require('./img/tab_xingren_highlight.png')}
          onPress={this.select.bind(this, 'login')}
          selected={this.state.selectedTab === 'login'}
          >
          <Login/>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

var styles = StyleSheet.create({
  flex:{
    flex: 1,
  }
});

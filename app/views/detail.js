'use strict'

import React, {
  ScrollView,
  Text,
  View,
  NavigatorIOS,
} from 'react-native';

export default class Detail extends React.Component {
  render(){
    return(
      <ScrollView>
        <Text>这是一个详情页面</Text>
        <Text>好漂亮啊</Text>
      </ScrollView>
    );
  }
}

'use strict'

import React, {
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';

export default class Me extends React.Component {

  render() {
    return(
      <ScrollView>
        <Text>详情页</Text>
        <Text>尽管信息很少，但这就是详情页</Text>
      </ScrollView>
    );
  }

}

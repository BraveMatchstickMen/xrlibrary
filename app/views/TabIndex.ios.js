'use strict';

import React, {
  PixelRatio,
  TabBarIOS,
  StyleSheet,
  View
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

var TabArr = [
    {
        key: 0,
        title: '资讯',
        icon: 'ios-list-outline',
        selectedIcon:'ios-list',
    },
    {
        key: 1,
        title: '收藏',
        icon: 'ios-paper-outline',
        selectedIcon:'ios-paper',
    },
];


export default class TabIndex extends React.Component{

    constructor(props) {
      super(props);
      this.state = {
         tabIndex:0,
      };
    }

    _renderScene() {
        switch(this.state.tabIndex) {
            case 0:
                
                break;
            case 1:
                
                break;
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TabBarIOS translucent={true} >
                    {
                        TabArr.map(
                            (val)=>{
                                return (
                                    <Icon.TabBarItem
                                      title={val.title}
                                      selected={this.state.tabIndex === val.key}
                                      iconName={val.icon}
                                      key={val.key}
                                      selectedIconName={val.selectedIcon}

                                      onPress={() => {
                                        this.setState({ tabIndex: val.key,});
                                      }}>
                                      {this._renderScene()}
                                    </Icon.TabBarItem>
                                );
                            }
                        )
                    }
                </TabBarIOS>
            </View>
        );
    }
};

var styles = StyleSheet.create({
    container: {
      flex: 1,
      marginBottom:0
    },
});
'use strict'

import React, {
  View,
  Text,
  StyleSheet,
  NavigatorIOS,
  TouchableHighlight,
  ScrollView,
  ListView,
  Image,
  TouchableOpacity,
} from 'react-native';

import Detail from '../views/detail';
import Service from '../views/service';

class BookItem extends React.Component {
  static propTypes = {
    coverURL: React.PropTypes.string.isRequired,
    author: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
  };
  render() {
    return (
      <TouchableOpacity style={styles.bookItem} {...this.props}>
      <View style={styles.bookItem}>
        <Image style={styles.cover} source={{uri: this.props.coverURL}}/>
        <View style={styles.info}>
          <Text style={styles.author}>{this.props.author}</Text>
          <Text style={styles.title}>{this.props.title}</Text>
        </View>
      </View>
      </TouchableOpacity>
     );
   }
}

class HomeNavBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(Service.booklist)
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData.books),
          loaded: true,
        });
      })
      .catch((error) => {
        console.warn(error);
      });
  }

  render() {

    if (!this.state.loaded) {
    	return this.renderLoadingView();
    }

    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this._renderRow}
        renderHeader={this._renderHeader}
        renderFooter={this._renderFooter}
        style={styles.listView}
      />
    );
  }

    _renderRow(rowData) {
      return (
        <BookItem onPress={() => this._loadPage(rowData.id)}
        coverURL={rowData.image}
        title={rowData.title}
        author={rowData.author[0]}
        />
      );
    }

    _loadPage(id) {
      this.props.navigator.push({
        component: Detail,
        passProps:{
          id: id
        },
        title: '详情页面',
        rightButtonTitle: '收藏',
        onRightButtonPress() {
          alert('程序猿哥哥正在连夜赶工中...');
        }
      });
    }

    _renderHeader(){
      return (
        <View style={styles.sectionDivider}>
        <Text style={styles.headingText}>
          Bestsellers in Hardcover Fiction
        </Text>
       </View>
       );
     }

     _renderFooter() {
       return(
         <View style={styles.sectionDivider}>
           <Text>Data from the New York Times Best Seller list.</Text>
         </View>
        );
     }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>
          正在加载数据……
        </Text>
      </View>
    );
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
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingTop: 24
  },
  list: {
    flex: 1,
    flexDirection: 'row'
  },
  listContent: {
    flex: 1,
    flexDirection: 'column'
  },
  row: {
    flex: 1,
    fontSize: 24,
    padding: 42,
    borderWidth:1,
    borderColor: '#DDDDDD'
  },
  sectionDivider: {
    padding: 8,
    backgroundColor: '#EEEEEE',
    alignItems: 'center'
  },
  headingText: {
    flex: 1,
    fontSize: 24,
    alignSelf: 'center'
  },
  bookItem: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderBottomColor: '#AAAAAA',
    borderBottomWidth: 2,
    padding: 5
  },
  cover: {
    flex: 1,
    height: 150,
    resizeMode: 'contain'
  },
  info: {
    flex: 3,
    alignItems: 'flex-end',
    flexDirection: 'column',
    alignSelf: 'center',
    padding: 20
  },
  author: {
    fontSize: 18
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
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
  navcontainer:{
    flex:1,
    backgroundColor:'red'
  }
});

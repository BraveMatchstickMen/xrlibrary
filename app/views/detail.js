'use strict'

import React, {
  ScrollView,
  Text,
  View,
  NavigatorIOS,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

import Service from '../views/service';
import Util from '../views/util';

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

export default class Detail extends React.Component {

  constructor(props){
    super(props);
    this.state={
      data: null
    };
  }

  componentDidMount(){
    this.fetchData();
  }

  fetchData() {
    var id = this.props.id;
    var url = Service.bookdetail + '/' + id;
    fetch(url)
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);
        this.setState({
          data: responseData
        });
      })
      .catch((error) => {
        console.warn(error);
      });
  }

  render(){
    return(
        <View style={[styles.m10]}>
          <ScrollView style={styles.m10} >
            {
              this.state.data ?
                  <View>
                    <BookItem
                      coverURL={this.state.data.image}
                      title={this.state.data.title}
                      author={this.state.data.author[0]}
                    />
                    <View>
                      <Text style={[styles.title]}>图书简介</Text>
                      <Text style={styles.text}>{this.state.data.summary}</Text>
                    </View>

                    <View>
                      <Text style={[styles.title]}>作者简介</Text>
                      <Text style={styles.text}>{this.state.data.author_intro}</Text>
                    </View>
                    <View style={{height:50}}></View>
                  </View>
                  : Util.loading
            }
          </ScrollView>
        </View>
    );
  }
}

var styles = StyleSheet.create({
  m10:{
    flex:1,
  },
  title:{
    fontSize:16,
    marginLeft:10,
    marginTop:10,
    marginBottom:10
  },
  text:{
    marginLeft:10,
    marginRight:10,
    color:'#000D22'
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
});

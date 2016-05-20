
import React, {
  ActivityIndicatorIOS,
} from 'react-native';

var Util = {

  loading: <ActivityIndicatorIOS color="#3E00FF" style={{marginTop:40}}/>,

  //post
  post: function (url, data, callback) {
    var fetchOptions = {
      method: 'POST',
      body: new FormData(data.querySelector('#form'))
    };

    fetch(url, fetchOptions)
      .then((response) => response.json())
      .then((responseText) => {
        callback(JSON.parse(responseText));
      })
			.catch((error) => {
				console.warn(error);
			});

  },

  //get
  getJSON: function(url, callback){
    fetch(url)
      .then((response) => response.text())
      .then((responseText) => {
        callback(JSON.parse(responseText));
      });
  },
};

module.exports = Util;

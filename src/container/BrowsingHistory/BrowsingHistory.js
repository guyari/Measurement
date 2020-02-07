import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';

//浏览记录
export default class BrowsingHistory extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Text>This is BrowsingHistory</Text>
      </View>
    );
  }
}

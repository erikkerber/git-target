import React, { Component } from 'react';
import { AppRegistry, View, Text, ListView } from 'react-native';
//import { List, ListItem } from 'react-native-elements'
import FeaturedAPI from './FeaturedAPI'

export default class Shop extends Component {
  api = new FeaturedAPI();

  constructor(props) {
      super(props);
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state = {
        dataSource: ds.cloneWithRows(['row 1', 'row 2']),
      };
  }

  componentWillMount() {
    this.api.requestFeatured()
        .then((featured) => {
            //print(featured);
        });
  }

  render() {
    var radius = 140;
    return (
      // Try setting `flexDirection` to `column`.
      <View style={{flex: 1, backgroundColor: 'green'}}>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          height: 300
        }}>
          <View style={{width: radius, height: radius, borderRadius: radius/2, backgroundColor: 'powderblue'}} />
          <View style={{width: radius, height: radius, borderRadius: radius/2, backgroundColor: 'steelblue'}} />
        </View>
        <ListView
          style={{backgroundColor: 'orange'}}
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData}</Text>}
        />
      </View>
    );
  }
};

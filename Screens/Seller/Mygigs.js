import React from 'react'
import { View, Text, StyleSheet, FlatList, Button, Image } from 'react-native'
import GigMini from './GigMini'
import { RFValue } from 'react-native-responsive-fontsize';
import Controller from '../../Controller/ViewGigController'
let ViewGigController = new Controller()

export default class Mygigs extends React.Component {
  constructor() {
    super()
    this.state = {
      filePath: {}, array: []
    };
  }
  componentDidMount() {


  }

  getData() {
    const users = []
    const subscriber = ViewGigController.ViewmyGigs(this.props.Seller, (data) => {
      data.forEach(async documentSnapshot => {

        users.push({
          ...documentSnapshot.data(),
          key: documentSnapshot.id,
        });
      });
      this.setState({ array: users })


    });
  }



  render() {
    this.getData()

    return (

      <View>
        <FlatList
          data={this.state.array}
          style={{ marginHorizontal: RFValue(10), marginVertical: RFValue(30) }}
          renderItem={({ item }) => (
            <GigMini Seller={this.props.Seller} navigation={this.props.navigation} GigTitle={item.Title} ImageUri={item.ImageUri} Price={item.price} GigCategory={item.GigCategory}></GigMini>

          )}
        />
      </View>
    )
  }
}

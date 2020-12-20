import React from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import MiniChatView from '../MiniChatView'
import Msg from '../../Controller/MessageController'
let MessagesController = new Msg()

export default class SellerMessages extends React.Component {


  constructor() {
    super();
    this.state = {
      filePath: {}, array: []
    };
  }
  componentDidMount() {

    this.getData()

  }
  getData() {
    let users = []
    console.log(this.props.route.params.Seller)
    const subscriber = MessagesController.getBuyerD(this.props.route.params.Seller, (data) => {
      users = []
      data.forEach(async documentSnapshot => {

        users.push({
          ...documentSnapshot.val(),
          key: documentSnapshot.key,
        })
      })

      this.setState({ array: users })


    });
  }


  render() {
    return (
      <View style={{ flex: 100 }}>
        <View style={{ flex: 10, backgroundColor: '#009387', justifyContent: 'center' }} >
          <Text style={{ alignSelf: "center", color: 'white', fontSize: 28, fontWeight: 'bold' }}>Seller Chats</Text>
        </View>
        <View style={{ flex: 90 }}>

          <FlatList
            data={this.state.array}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{ height: 100, backgroundColor: 'white', justifyContent: "space-around", padding: 12, margin: 1, elevation: 5 }}
                onPress={() => {

                  this.props.navigation.navigate('Chat', { to: item.key, from: this.props.route.params.Seller })
                }}

              >

                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{item.key}</Text>
                <Text style={{ fontSize: 16 }}>I am here to Assign you Job</Text>

              </TouchableOpacity>
            )}
          />
        </View>

      </View>
    )


  }
}

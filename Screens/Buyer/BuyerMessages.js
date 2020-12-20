import React from 'react'
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import BuyerMiniChatView from './BuyerMiniChatView'
import { RFValue } from 'react-native-responsive-fontsize';
import LinearGradient from 'react-native-linear-gradient';
import MessageG from '../../Images/MessageG.png'
import Message1 from '../../Images/Message1.png'
import User1 from '../../Images/User1.png'
import UserG from '../../Images/UserG.png'

import NotificationG from '../../Images/NotificationG.png'
import Notification1 from '../../Images/Notification1.png'
import Home1 from '../../Images/Home1.png'
import HomeG from '../../Images/HomeG.png'
import Msg from '../../Controller/MessageController'
let MessagesController = new Msg()

export default class BuyerMessages extends React.Component {


  constructor() {
    super();
    this.state = {
      filePath: {}, array: []
    };
  }
  componentDidMount() {

    this.getDataSeller()

  }
  async getDataSeller() {
    let users = []

    await MessagesController.getSeller(this.props.route.params.Buyer, async (data) => {
      users = []
      data.forEach(documentSnapshot => {
        console.log(documentSnapshot.key + '  zas')
        users.push({
          ...documentSnapshot.val(),
          key: documentSnapshot.key,
        });
      })


      this.setState({ array: users })


    });
  }

  componentWillUnmount() {
    this.setState({ array: [] })
  }
  render() {
    this.Home = false
    this.Notification = false
    this.Message = true
    this.User = false
    return (
      <View style={{ flex: 100 }}>
        <LinearGradient
          colors={['#deb459', '#80662C']}
          style={{ flex: 15, backgroundColor: '#009387', justifyContent: 'center', borderBottomLeftRadius: 60, borderBottomRightRadius: 60 }} >
          <Text style={{ alignSelf: "center", color: 'white', fontSize: 28, fontWeight: 'bold' }}>Chats</Text>
        </LinearGradient>
        <View style={{ flex: 90 }}>

          <FlatList
            data={this.state.array}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{ height: 100, backgroundColor: 'white', justifyContent: "space-around", padding: 12, margin: 1, elevation: 5 }}
                onPress={() => {
                  this.setState({ array: [] })
                  this.props.navigation.navigate('ChatBuyer', { to: item.key, from: this.props.route.params.Buyer })
                }}

              >

                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{item.key}</Text>
                <Text style={{ fontSize: 16 }}>I am here to Assign you Job</Text>

              </TouchableOpacity>
            )}
          />
        </View>
        <View style={{ flexDirection: "row", alignSelf: 'center', backgroundColor: 'transparent' }}>

          <TouchableOpacity
            onPress={() => {
              this.Home = true
              this.Notification = false
              this.Message = false
              this.User = false
              this.setState({ array: [] })
              this.props.navigation.navigate('BuyerDashboard', { username: this.props.route.params.Buyer })
              this.forceUpdate()
            }}
            style={{
              borderRadius: RFValue(50),
              height: RFValue(70), width: RFValue(70),
              backgroundColor: this.Home ? '#deb459' : 'transparent',
              margin: RFValue(5),
              justifyContent: 'center'
            }}
            underlayColor='#ccc'
          >
            <Image
              style={{ resizeMode: 'contain', alignSelf: "center", height: RFValue(32), width: RFValue(32) }}
              source={this.Home ? Home1 : HomeG}>


            </Image>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.Home = false
              this.Notification = true
              this.Message = false
              this.User = false
              this.props.navigation.navigate('NotificationBuyerDashboard', { Buyer: this.props.route.params.Buyer })

              this.forceUpdate()
            }}
            style={{
              borderRadius: RFValue(50),
              height: RFValue(70), width: RFValue(70),
              backgroundColor: this.Notification ? '#deb459' : 'transparent',
              margin: RFValue(5),
              justifyContent: 'center'
            }}
            underlayColor='#ccc'>
            <Image
              style={{ resizeMode: 'contain', alignSelf: "center", height: RFValue(32), width: RFValue(32) }}
              source={this.Notification ? Notification1 : NotificationG}>


            </Image>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              this.Home = false
              this.Notification = false
              this.Message = true
              this.User = false

              this.forceUpdate()
            }}
            style={{
              borderRadius: RFValue(50),
              height: RFValue(70), width: RFValue(70),
              backgroundColor: this.Message ? '#deb459' : 'transparent',
              margin: RFValue(5),
              justifyContent: 'center'
            }}
            underlayColor='#ccc'>
            <Image
              style={{ resizeMode: 'contain', alignSelf: "center", height: RFValue(32), width: RFValue(32) }}
              source={this.Message ? Message1 : MessageG}>


            </Image>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.Home = false
              this.Notification = false
              this.Message = false
              this.User = true

              this.forceUpdate()
            }}
            style={{
              borderRadius: RFValue(50),
              height: RFValue(70), width: RFValue(70),
              backgroundColor: this.User ? '#deb459' : 'transparent',
              margin: RFValue(5),
              justifyContent: 'center'
            }}
            underlayColor='#ccc'>
            <Image
              style={{ resizeMode: 'contain', alignSelf: "center", height: RFValue(32), width: RFValue(32) }}
              source={this.User ? User1 : UserG}>


            </Image>

          </TouchableOpacity>
        </View>
      </View>
    )


  }
}

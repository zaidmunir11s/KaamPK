import React from 'react'
import { View, Text, FlatList, TouchableOpacity, RefreshControl, Image } from 'react-native'
import Notif from '../../Controller/NotificationController'
import NotificationBuyer from './NotificationBuyer'
let NotificationController = new Notif()
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

export default class NotificationBuyerDashboard extends React.Component {


  constructor() {
    super();
    this.flag = null
    this.state = {
      filePath: {}, array: [], flag: true, refreshing: false
    };
  }
  setFlag() {
    this.flag = false
  }
  checkFlag() {
    if (this.flag != null) { return false }
    else { return true }
  }
  reload = () => {
    this.forceUpdate()
  }
  getData = () => {
    const users = []
    const subscriber = NotificationController.CheckforNotificationBuyer(this.props.route.params.Buyer, (data) => {

      if (data != null) {
        this.setFlag()

        data.forEach(async documentSnapshot => {

          users.push({
            ...documentSnapshot.val(),
            key: documentSnapshot.key

          });
        });
        this.setState({ array: users })


      }
    });
  }
  onRefresh = () => {
    this.setState({ refreshing: true });
    setTimeout(() => this.setState({ refreshing: false }),
      2000
    )


  }
  render() {
    this.Home = false
    this.Notification = true
    this.Message = false
    this.User = false
    this.getData()

    return (
      <View style={{ flex: 100 }}>
        <LinearGradient
          colors={['#deb459', '#80662C']}
          style={{ flex: 15, backgroundColor: '#009387', justifyContent: 'center', borderBottomLeftRadius: 60, borderBottomRightRadius: 60 }} >
          <Text style={{ alignSelf: "center", color: 'white', fontSize: 28, fontWeight: 'bold' }}>Notifications</Text>
        </LinearGradient>
        <View style={{ flex: 90, justifyContent: "center" }}>
          {this.checkFlag() ? <Text style={{ alignSelf: "center", fontSize: 20 }}>No Notification</Text> :
            <FlatList
              refreshControl={
                <RefreshControl refreshing={this.state.refreshing} onRefresh={this.onRefresh} />
              }
              data={this.state.array}
              renderItem={({ item }) => (

                <NotificationBuyer thiss={this.getData.bind(this)} OrderInfo={item} Buyer={item.Seller} Gig={item.GigDetails} navigation={this.props.navigation}></NotificationBuyer>

              )}
            />}
        </View>
        <View style={{ flexDirection: "row", alignSelf: 'center', backgroundColor: 'transparent' }}>

          <TouchableOpacity
            onPress={() => {
              this.Home = true
              this.Notification = false
              this.Message = false
              this.User = false
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

              this.props.navigation.navigate('BuyerMessages', { Buyer: this.props.route.params.Buyer })
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

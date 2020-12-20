import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, StatusBar } from 'react-native'
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { widthToDp, heightToDp } from '../../Responsive'
import LinearGradient from 'react-native-linear-gradient';
import MessageG from '../../Images/Seller/MessageG.png'
import Message1 from '../../Images/Message1.png'
import User1 from '../../Images/User1.png'
import UserG from '../../Images/Seller/UserG.png'

import NotificationG from '../../Images/Seller/NotificationG.png'
import Notification1 from '../../Images/Notification1.png'
import Home1 from '../../Images/Home1.png'
import HomeG from '../../Images/Seller/HomeG.png'
import Header from '../../Images/DelIcon.png'

import PulseLoader from 'react-native-pulse-loader';

import { RFValue } from 'react-native-responsive-fontsize';
import Location1 from '../../Model/Deliverer'
const Location = new Location1();
export default class SellerHome extends React.Component {
  constructor() {
    super()
    this.Online = false
    this.OrderRequest = true
    this.interval = null
  }




  componentWillUnmount() {
    clearInterval(this._interval);
  }
  render() {
    this.Home = true
    this.Notification = false
    this.Message = false
    this.User = false

    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='transparent' barStyle="light-content" />
        <View style={{ height: RFValue(200), backgroundColor: '#272b2b' }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', position: 'absolute', top: RFValue(50), left: RFValue(280) }}>
            <TouchableOpacity
              onPress={() => {
                this.Online ? this.Online = false : this.Online = true
                this._interval = setInterval(() => {

                  this.Online ? Location.PushDeliverer(this.props.route.params.username, 'Online') : Location.PushDeliverer(this.props.route.params.username, 'Offline')
                }, 5000)
                this.forceUpdate()
              }}
              style={{ width: RFValue(100), height: RFValue(30), borderRadius: RFValue(30) }}>
              <LinearGradient
                colors={[this.Online ? '#08B2A4' : 'white', this.Online ? '#009387' : 'white']}
                style={{
                  width: RFValue(100), height: RFValue(30), borderRadius: RFValue(30),
                  borderWidth: 2, borderColor: this.Online ? 'transparent' : 'black'
                }}
              >
                <Text style={{ color: this.Online ? 'white' : 'black', alignSelf: 'center', marginTop: RFValue(4) }}>{this.Online ? 'Online' : 'Offline'}</Text>
              </LinearGradient>
            </TouchableOpacity>

          </View>
          <Image
            style={{ resizeMode: 'contain', alignSelf: "center", height: RFValue(200), width: RFValue(200), top: RFValue(20), left: RFValue(10) }}
            source={Header}>


          </Image>

        </View>
        <View style={{ flex: 2, justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: RFValue(10) }}>
            <Text style={{ fontSize: RFValue(20), position: 'absolute', left: RFValue(20), fontWeight: 'bold' }}>Recent Orders</Text>
          </View>
          <View style={{
            flexDirection: 'column', backgroundColor: 'white'
            , width: RFValue(350), alignSelf: 'center',
            borderRadius: RFValue(30), elevation: 5,
            position: 'absolute', top: RFValue(50),
            height: RFValue(100), marginTop: RFValue(0)
          }}>
            <View style={{ flexDirection: 'row', marginLeft: RFValue(10), alignSelf: 'flex-start', marginTop: RFValue(15) }}>
              <Text style={{ fontWeight: 'bold' }}>Distance Covered :
   </Text>
              <Text style={{ fontWeight: 'bold' }}>10 KM
   </Text>
            </View>
            <View style={{ flexDirection: 'row', marginLeft: RFValue(10), alignSelf: 'flex-start', marginTop: RFValue(5) }}>
              <Text style={{ fontWeight: 'bold' }}>Time Departure :
   </Text>
              <Text style={{ fontWeight: 'bold' }}>10:10
   </Text>
            </View>
            <View style={{ flexDirection: 'row', marginLeft: RFValue(10), alignSelf: 'flex-start', marginTop: RFValue(5) }}>
              <Text style={{ fontWeight: 'bold' }}>Departure from :
   </Text>
              <Text style={{ fontWeight: 'bold' }}>Seller
   </Text>
            </View>
            <View style={{ flexDirection: 'row', marginLeft: RFValue(10), alignSelf: 'flex-start', position: 'absolute', right: RFValue(50), top: RFValue(40) }}>
              <Text style={{ fontWeight: 'bold', color: 'green' }}>Earning :
   </Text>
              <Text style={{ fontWeight: 'bold', color: 'green' }}>22.0 Rs
   </Text>
            </View>

          </View>
          <View style={{
            flexDirection: 'row', justifyContent: 'space-around', backgroundColor: 'white'
            , width: RFValue(350), alignSelf: 'center',
            borderRadius: RFValue(30), elevation: 5,
            position: 'absolute', top: RFValue(160),
            height: RFValue(100), marginTop: RFValue(0)
          }}>

          </View>
          {this.OrderRequest ?
            <PulseLoader
              style={{ position: 'absolute', top: RFValue(0) }}
              backgroundColor={'black'}
              borderColor={'#deb459'}
              text='Tap to View'
              onPressButton={() => { console.log('Pressed') }}
              avatar={'https://scontent-fra3-1.cdninstagram.com/t51.2885-15/e35/11429705_386886401514376_550879228_n.jpg'}
            /> :
            <Text style={{ position: 'absolute', top: RFValue(300), fontSize: RFValue(20), fontWeight: 'bold', alignSelf: 'center' }}> New Delivery Order Request Appear here</Text>}
          <View style={{ flexDirection: "row", alignSelf: 'center', backgroundColor: 'transparent' }}>

            <TouchableOpacity
              onPress={() => {
                this.Home = true
                this.Notification = false
                this.Message = false
                this.User = false

                this.forceUpdate()
              }}
              style={{
                borderRadius: RFValue(50),
                height: RFValue(70), width: RFValue(70),
                backgroundColor: this.Home ? '#009387' : 'transparent',
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
                this.props.navigation.navigate('NotificationSellerDashboard', { Seller: this.props.route.params.username })
                this.forceUpdate()
              }}
              style={{
                borderRadius: RFValue(50),
                height: RFValue(70), width: RFValue(70),
                backgroundColor: this.Notification ? '#009387' : 'transparent',
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
                console.log(this.props.route.params.username)
                this.props.navigation.navigate('DilevererMessages', { Seller: this.props.route.params.username })
                this.forceUpdate()
              }}
              style={{
                borderRadius: RFValue(50),
                height: RFValue(70), width: RFValue(70),
                backgroundColor: this.Message ? '#009387' : 'transparent',
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
                backgroundColor: this.User ? '#009387' : 'transparent',
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
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1

  }
  ,



})
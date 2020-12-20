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
import Note from '../../Images/PakRs.png'
import box from '../../Images/box.png'
import blog from '../../Images/blog.png'
import advertisement from '../../Images/advertisement.png'
import { RFValue } from 'react-native-responsive-fontsize';

export default class SellerHome extends React.Component {
  render() {
    this.Home = true
    this.Notification = false
    this.Message = false
    this.User = false
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='transparent' barStyle="light-content" />
        <View style={{ height: RFValue(320), backgroundColor: '#272b2b' }}>
          <Text style={{ alignSelf: 'center', fontSize: RFValue(20), fontWeight: 'bold', color: 'white', marginTop: RFValue(50) }}>Standards to Maintain</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: RFValue(5), marginHorizontal: RFValue(25) }}>
            <Text style={{ alignSelf: 'center', fontSize: RFValue(16), fontWeight: 'bold', color: 'white', marginTop: RFValue(10) }}>
              Seller Level</Text>
            <Text style={{ alignSelf: 'center', fontSize: RFValue(16), fontWeight: 'bold', color: 'white', marginTop: RFValue(10) }}>
              New Seller</Text>


          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: RFValue(5), marginHorizontal: RFValue(25) }}>
            <Text style={{ alignSelf: 'center', fontSize: RFValue(16), fontWeight: 'bold', color: 'white', marginTop: RFValue(10) }}>
              Next Evaluation</Text>
            <Text style={{ alignSelf: 'center', fontSize: RFValue(16), fontWeight: 'bold', color: 'red', marginTop: RFValue(10) }}>
              Jan 15,2021</Text>


          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: RFValue(5), marginHorizontal: RFValue(25) }}>
            <Text style={{ alignSelf: 'center', fontSize: RFValue(16), fontWeight: 'bold', color: 'white', marginTop: RFValue(10) }}>
              Response Time</Text>
            <Text style={{ alignSelf: 'center', fontSize: RFValue(16), fontWeight: 'bold', color: 'green', marginTop: RFValue(10) }}>
              1 Hour</Text>


          </View>
          <View style={{ flexDirection: "row", justifyContent: 'space-around', marginTop: RFValue(20), marginHorizontal: RFValue(0) }}>

            <AnimatedCircularProgress
              size={RFValue(90)}
              width={RFValue(4)}
              fill={50}
              tintColor="#009387"

              backgroundColor="grey" >
              {
                () => (
                  <Text style={{ paddingLeft: 0, color: 'white', fontSize: 12, overflow: 'hidden' }}>
                    Rating
                  </Text>
                )
              }
            </AnimatedCircularProgress>


            <AnimatedCircularProgress
              size={RFValue(90)}
              width={RFValue(4)}
              fill={50}
              tintColor="#009387"

              backgroundColor="grey" >
              {
                () => (
                  <Text style={{ paddingLeft: 10, color: 'white', fontSize: 12 }}>
                    Completion Rate
                  </Text>
                )
              }
            </AnimatedCircularProgress>

            <AnimatedCircularProgress
              size={RFValue(90)}
              width={RFValue(4)}
              fill={40}
              tintColor="#009387"

              backgroundColor="grey" >
              {
                () => (
                  <Text style={{ paddingLeft: 15, color: 'white', fontSize: 12 }}>
                    On-Time Delivery
                  </Text>
                )
              }
            </AnimatedCircularProgress>
          </View>

        </View>
        <View style={{ height: RFValue(450), justifyContent: 'space-around' }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: RFValue(10) }}>
            <TouchableOpacity
              style={{
                height: RFValue(150), width: RFValue(150), borderRadius: RFValue(10), backgroundColor: 'white'
                , elevation: RFValue(2), alignSelf: 'center'
              }}>
              <Image
                style={{ resizeMode: 'contain', alignSelf: "center", height: RFValue(100), width: RFValue(120) }}
                source={Note}>


              </Image>
              <Text style={{ alignSelf: 'center', fontSize: RFValue(20), fontWeight: 'bold' }}>Earning</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => { this.props.navigation.navigate('ActiveOrdersSeller', { Buyer: this.props.route.params.username }) }}
              style={{
                height: RFValue(150), width: RFValue(150), borderRadius: RFValue(10), backgroundColor: 'white'
                , elevation: RFValue(2), alignSelf: 'center'
              }}>
              <Image
                style={{ resizeMode: 'contain', alignSelf: "center", height: RFValue(100), width: RFValue(120) }}
                source={box}>


              </Image>
              <Text style={{ alignSelf: 'center', fontSize: RFValue(20), fontWeight: 'bold' }}>Active Orders</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: RFValue(20) }}>
            <TouchableOpacity
              style={{
                height: RFValue(150), width: RFValue(150), borderRadius: RFValue(10), backgroundColor: 'white'
                , elevation: RFValue(2), alignSelf: 'center'
              }}>
              <Image
                style={{ resizeMode: 'contain', alignSelf: "center", height: RFValue(100), width: RFValue(120) }}
                source={advertisement}>


              </Image>
              <Text style={{ alignSelf: 'center', fontSize: RFValue(20), fontWeight: 'bold' }}>My Gigs</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => { this.props.navigation.navigate('GigCreation', { username: this.props.route.params.username }) }}
              style={{
                height: RFValue(150), width: RFValue(150), borderRadius: RFValue(10), backgroundColor: 'white'
                , elevation: RFValue(2), alignSelf: 'center'
              }}>
              <Image
                style={{ resizeMode: 'contain', alignSelf: "center", height: RFValue(100), width: RFValue(100), marginTop: RFValue(10) }}
                source={blog}>


              </Image>
              <Text style={{ alignSelf: 'center', fontSize: RFValue(20), fontWeight: 'bold' }}>New Gig</Text>
            </TouchableOpacity>
          </View>
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
                this.props.navigation.navigate('SellerMessages', { Seller: this.props.route.params.username })
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
    height: RFValue(775)

  }
  ,



})
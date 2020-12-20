import React from 'react'

import { KeyboardAvoidingView, ScrollView, StatusBar, StyleSheet, Text, View, Image, ImageBackground, TextInput, TouchableOpacity } from 'react-native'

import Background from '../../Images/Path551.png'

import profile from '../../Images/Payment/profile.png'

import ThankYou from '../../Images/Payment/Group382.png'

import LinearGradient from 'react-native-linear-gradient';

import back from '../../Images/back1.png'

import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

var radio_props = [
  { label: 'param1', value: -1 },

];
import NotificationCont from '../../Controller/NotificationController'
let NotificationController = new NotificationCont();
export default class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.Home = true,
      this.Notification = false,
      this.Message = false,
      this.User = false,
      this.Reviews = true,
      this.Chat = false,
      this.Photos = false,
      this.Menu = false
    this.state = { array: [] }
    this.username = props.route.params.prop.Title
    this.GigCat = props.route.params.prop.GigCategory
    this.Price = props.route.params.prop.price
    this.from = props.route.params.prop.username
    this.to = props.route.params.Seller
    this.GigId = props.route.params.GigId
    this.Gig = props.route.params.prop
    this.ImageUri = props.route.params.prop.ImageUri
  }

  render() {
    return (

      <View style={{ flex: 1 }}>
        <StatusBar translucent backgroundColor="transparent" />

        <View style={{ height: RFValue(150), backgroundColor: '#000000' }}>


          <ImageBackground
            style={{
              height: '100%', width: '100%', resizeMode: 'cover'
            }}
            source={Background}
            imageStyle={{ opacity: 1 }}
          >
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginRight: RFValue(100), width: '100%' }}>
              <TouchableOpacity>
                <Image
                  style={{
                    resizeMode: 'contain', alignSelf: "center", marginLeft: RFValue(20),
                    height: RFValue(20), width: RFValue(20), marginTop: RFValue(80)
                  }}
                  source={back}>


                </Image>

              </TouchableOpacity>
              <Text style={{
                marginLeft: RFValue(20), fontWeight: 'bold',
                fontSize: RFValue(24), fontFamily: 'Helvetica Neue', color: 'white', marginTop: RFValue(75)
              }}>
                Card Information
</Text>
              <TouchableOpacity>
                <Image
                  style={{
                    resizeMode: 'contain', alignSelf: "center", marginRight: RFValue(20),
                    height: RFValue(40), width: RFValue(40), marginTop: RFValue(70)
                  }}
                  source={profile}>


                </Image>
              </TouchableOpacity>


            </View>

          </ImageBackground>
        </View>



        <LinearGradient

          colors={["#141414", '#2D2D2D', "#474747"]}
          start={{ x: 1, y: 0.1 }}

          style={{ height: RFValue(640) }}
        >

          <View style={{
            flexDirection: "column", alignSelf: 'center'
            , height: '100%', width: RFValue(350), marginTop: RFValue(0)
          }}>





            <View
              style={{
                width: RFValue(320), alignSelf: 'center', flexDirection: "row", marginTop: RFValue(20), justifyContent: "center",
                borderBottomColor: '#deb459', borderBottomWidth: 0
              }}>



              <Image
                style={{
                  resizeMode: 'contain', width: RFValue(200), height: RFValue(200), marginLeft: RFValue(0), alignSelf: "center"
                  , marginTop: RFValue(30)
                }}
                source={ThankYou}>
              </Image>
            </View>

            <TouchableOpacity
              onPress={() => {
                let OrderID = (Math.random().toString(36).substring(7)) + Math.floor(1000 + Math.random() * 9000);

                NotificationController.OrderNotifySeller(this.to, this.from, OrderID, this.GigId, this.Gig)
                alert('Your Order is Placed')
              }}
              style={{ width: RFValue(150), height: RFValue(36), backgroundColor: 'white', marginTop: RFValue(50), alignSelf: "center" }}
            >
              <Text


                style={{ color: '#F7C148', alignSelf: "center", fontSize: RFValue(18), marginTop: RFValue(5) }}
              >
                Continue
               </Text>

            </TouchableOpacity>
          </View>
        </LinearGradient>

      </View>

    )
  }
}

const styles = StyleSheet.create({})



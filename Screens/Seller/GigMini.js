

import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

import { widthToDp, heightToDp } from '../../Responsive'

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,

} from 'react-native-responsive-screen';
import Chefgreen from '../../Images/GigCategoryIcons/chefgreen.png'

import Cameragreen from '../../Images/GigCategoryIcons/cameragreen.png'

import Makeupgreen from '../../Images/GigCategoryIcons/makeupgreen.png'

import Sewinggreen from '../../Images/GigCategoryIcons/sewinggreen.png'
import { RFValue } from "react-native-responsive-fontsize";

export default class GigMiniView extends React.Component {
  constructor() {
    super()
    this.height = RFValue(150)
    this.width = RFValue(360)
    this.fontT = RFValue(18)
    this.fontS = RFValue(14)
    this.fontP = RFValue(20)
    this.ImgHeight = RFValue(145)
    this.ImgWidth = RFValue(200)
  }








  render() {

    return (

      <TouchableOpacity style={{
        flexDirection: "row",
        width: this.width,
        height: this.height,
        marginVertical: hp('2'),
        marginRight: hp('2'),

        backgroundColor: 'white',
        elevation: 4,
        borderWidth: 4,
        borderColor: 'white',
        shadowColor: 'white'


      }}
        onPress={() => this.props.navigation.navigate('GigView', { prop: this.props.item, Buyer: this.props.Buyer, GigId: this.props.GigId })}

      >
        <View style={{ width: this.ImgWidth, height: this.ImgHeight }}>
          <Image source={{ uri: this.props.ImageUri }} style={{
            resizeMode: "stretch", width: '100%',
            height: '100%'
          }} />
        </View>
        <View style={{ flexDirection: "column", flex: 2 }}>
          <Text style={[styles.Text, { fontSize: this.fontT, fontWeight: "bold" }]}>{this.props.GigTitle}  </Text>
          <View style={{ width: RFValue(160), flexDirection: "row", margin: RFValue(5) }} >

            <Image source={this.displayCategory(this.props.GigCategory)} style={{ width: RFValue(30), height: RFValue(30) }}></Image>
            <Text style={{
              alignSelf: "center", fontWeight: "bold", fontSize: this.fontP, marginLeft: RFValue(20), color: 'white', backgroundColor: '#272b2b',
              width: RFValue(100), borderTopLeftRadius: RFValue(10), borderBottomLeftRadius: RFValue(10)
            }}> {this.props.Price} Rs</Text>
          </View>
          <View style={{ backgroundColor: 'white', width: RFValue(120), flexDirection: "row", borderRadius: RFValue(5), margin: RFValue(5) }} >
            <Text style={{ color: '#009387', alignSelf: "center", fontSize: this.fontS, fontWeight: "bold", margin: RFValue(5) }}>{this.props.Seller}</Text>
            <Image source={require('../../Images/new.png')} style={{ width: RFValue(30), height: RFValue(30) }}></Image>

          </View>





        </View>
      </TouchableOpacity>

    )
  }
  displayCategory(category) {
    if (category == 'Cooking') {
      return Chefgreen
    }
    if (category == 'Photography') {
      return Cameragreen
    }
    if (category == 'Beautician') {
      return Makeupgreen
    }
    if (category == 'Stiching') {
      return Sewinggreen
    }
  }
}
const styles = StyleSheet.create({

  container: {


  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
  Text: {
    paddingHorizontal: widthToDp('1.5')

  },
  button: {
    width: wp("40%"),
    height: hp("4%"),
    justifyContent: "flex-end",
    borderRadius: 10,


  }

})

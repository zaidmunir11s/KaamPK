import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
 import Chefgreen from '../../Images/Icons/cooking.png'
 
import Cameragreen from '../../Images/Icons/photograph.png'
 
import Makeupgreen from '../../Images/Icons/makeup.png'
 
import Sewinggreen from '../../Images/Icons/sewing.png'
import { RFValue } from "react-native-responsive-fontsize";

export default class MiniServices extends React.Component {
constructor(){
  super()
  this.height =RFValue(150)
  this.width=RFValue(360)
  this.fontT=RFValue(18)
  this.fontS=RFValue(14)
  this.fontP=RFValue(20)
  this.ImgHeight=RFValue(145)
  this.ImgWidth=RFValue(200)
}


displayCategory(category){
    if(category=='Cooking'){
    return Chefgreen
    }
    if(category=='Photography'){
      return Cameragreen
      }
      if(category=='Beautician'){
        return Makeupgreen
        }
        if(category=='Stiching'){
          return Sewinggreen
          }
    }
    

render(){

  return (

    <TouchableOpacity style={{
      flexDirection: "column",
      width: RFValue(150),
      height:  RFValue(180),
      marginVertical: 2,
      marginRight: RFValue(10),
  
      backgroundColor: 'white',
      elevation: 4,
      borderWidth: 4,
      borderColor: 'white',
      shadowColor: 'white'
  

    }}
       >
      <View style={{ width: RFValue(130), height:RFValue(110) }}>
        <Image source={ this.displayCategory(this.props.Title)} style={{
          resizeMode: "stretch", width: '100%',
          height: '100%'
        }} />
          <Text style={[ { fontSize: RFValue(20), fontWeight: "bold",marginTop:RFValue(20),margin:RFValue(2) }]}>{this.props.Title}  </Text>
          </View>
     
    </TouchableOpacity>

  )
  
}

}
import React from 'react'
import {KeyboardAvoidingView ,ScrollView, StatusBar, StyleSheet, Text, View, Image, ImageBackground, TextInput, TouchableOpacity } from 'react-native'
  
import Background from '../../Images/Path551.png'
import profile from '../../Images/Payment/profile.png'
import location from '../../Images/Payment/location.png'
import Card from '../../Images/Payment/credit-card.png'
import flag from '../../Images/Payment/bahrain.png'
 
 
import LinearGradient from 'react-native-linear-gradient';
 
import back from '../../Images/back1.png'
 
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
 
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
 
 
 



export default class Menu extends React.Component {
    constructor(){
        super()
        this.Home=true,
        this.Notification=false,
        this.Message=false,
        this.User=false,
        this.Reviews=true
        this.Chat=false
        this.Photos=false
        this.Menu=false
        this.Card=1
        this.Cash=0
        this.radio_props1 = [
            {label: ' ', value: 0 },
          
           
        ];
        this.radio_props2 = [
            {label: ' ', value: 1 },
          
           
        ];
    }
    renderNavigation(){

    }
render(){
    return (
        
        <View style={{ flex: 1 }}>
               <StatusBar translucent backgroundColor="transparent" />     
           
            <View style={{ height:RFValue(150),backgroundColor: '#000000'   }}>
       
         
            <ImageBackground
                    style={{
                        height: '100%', width: '100%', resizeMode: 'cover'
                    }}
                    source={Background}
                    imageStyle={{ opacity: 1 }}
                >
              <View style={{flexDirection:"row",justifyContent:"space-between",marginRight:RFValue(100),width:'100%'}}>
               <TouchableOpacity>
                 <Image
                            style={{ resizeMode: 'contain',alignSelf:"center",marginLeft:RFValue(20),
                             height:RFValue(20) ,width:RFValue(20),marginTop:RFValue(80)  }}
                            source={back}>


                        </Image>
                      
                        </TouchableOpacity>
                        <Text style={{marginLeft:RFValue(20)  ,fontWeight:'bold',
                        fontSize:RFValue(24),fontFamily:'Helvetica Neue',color:'white',marginTop:RFValue(75)}}>
Information     
</Text> 
                        <TouchableOpacity>
                        <Image
                            style={{ resizeMode: 'contain',alignSelf:"center",marginRight:RFValue(20),
                             height:RFValue(40) ,width:RFValue(40),marginTop:RFValue(80)  }}
                            source={profile}>


                        </Image>
                        </TouchableOpacity>
 

            </View>
  
    </ImageBackground>
            </View>
     
    
    
            <LinearGradient
 
 colors={["#141414",'#2D2D2D', "#474747"]}
 start={{ x: 1, y: 0.1 }}
  
  style={{height:RFValue(640)}}
  >
      
      <View style={{flexDirection:"column",alignSelf:'center'  
               ,height:'100%',width:RFValue(350),marginTop:RFValue(0) }}>
              

              <View style={{flexDirection:"row",justifyContent:"space-between",marginRight:RFValue(100),width:'100%'}}>
               <TouchableOpacity>
                 <Image
                            style={{ resizeMode: 'contain',alignSelf:"center",marginLeft:RFValue(20),
                             height:RFValue(30) ,width:RFValue(30),marginTop:RFValue(20)  }}
                            source={flag}>


                        </Image>
                      
                        </TouchableOpacity>
             
                        <TouchableOpacity>
                        <Text style={{marginLeft:RFValue(20)  ,fontWeight:'bold',
                        fontSize:RFValue(18),fontFamily:'Helvetica Neue',color:'white',marginTop:RFValue(20)}}>
Default     
</Text> 
                        </TouchableOpacity>
 

            </View>
            <Text
             
            
             style={{marginTop:RFValue(20),color:'#deb459',fontWeight:"bold",
             borderBottomWidth:0.5,width:RFValue(320),alignSelf:"center",height:RFValue(50),fontSize:RFValue(18)}}
               >
                Payment Method
               </Text>
          


               <View style={{flexDirection:"row",justifyContent:'flex-start',width:RFValue(300)
               ,marginLeft:RFValue(20),marginTop:RFValue(0),borderBottomColor:'#f7c148',
             borderBottomWidth:RFValue(1),height:RFValue(50),
               marginBottom:RFValue(10)}}> 
          
          <RadioForm
      
      radio_props={this.radio_props1}
      initial={this.Card}
      formHorizontal={false}
      labelHorizontal={true}
      buttonColor={'#deb459'}
      selectedButtonColor={'#deb459'}
      animation={true}
      buttonSize={8}
      onPress={(value) => { 
        this.Cash=1
        this.Card=1
        this.forceUpdate()
          
        

      }}
      
         
        />
              <Text style={{marginLeft:RFValue(0),alignSelf:"center",marginTop:RFValue(-30),
              fontSize:RFValue(14),fontFamily:'Helvetica Neue',color:'#deb459'}}>
               Pay With Card
            </Text>
      
        <Image
            style={{resizeMode:'contain',width:RFValue(30),height:RFValue(30),marginLeft:RFValue(150)  
            ,marginTop:RFValue(-5)}}
            source={Card}>
            </Image>
        </View> 
        <View style={{flexDirection:"row",justifyContent:'flex-start',width:RFValue(300)
               ,marginLeft:RFValue(20),marginTop:RFValue(0),borderBottomColor:'#f7c148',
             borderBottomWidth:RFValue(1),height:RFValue(50),
               marginBottom:RFValue(10)}}> 
          
          <RadioForm
      
      radio_props={this.radio_props1}
      initial={this.Cash}
      formHorizontal={false}
      labelHorizontal={true}
      buttonColor={'#deb459'}
      selectedButtonColor={'#deb459'}
      animation={true}
      buttonSize={8}
      onPress={(value) => { 
      
          this.Cash=value
          this.Card=0
          this.forceUpdate()
    }}
      
         
        />
              <Text style={{marginLeft:RFValue(0),alignSelf:"center",marginTop:RFValue(-30),
              fontSize:RFValue(14),fontFamily:'Helvetica Neue',color:'#deb459'}}>
               Cash Payment
            </Text>
      
        <Image
            style={{resizeMode:'contain',width:RFValue(30),height:RFValue(30),marginLeft:RFValue(150)  
            ,marginTop:RFValue(-5)}}
            source={Card}>
            </Image>
        </View> 

        <View  style={{flexDirection:"row",margin:RFValue(0),borderBottomColor:'#f7c148',alignSelf:"center",
          borderBottomWidth:RFValue(0.5),width:RFValue(300)}}>  
           <Text
            
          style={{marginTop:RFValue(20),color:'#deb459',alignSelf:"center",height:RFValue(50),fontSize:RFValue(18)}}
            >
Total

            </Text>
            <Text
            
            style={{marginTop:RFValue(30),marginLeft:RFValue(10),color:'#deb459',alignSelf:"center",height:RFValue(50),fontSize:RFValue(12)}}
              >
  (Including Tax)
  
              </Text>
              <Text
            
            style={{marginTop:RFValue(20),marginLeft:RFValue(110),color:'#deb459',alignSelf:"center",height:RFValue(50),fontSize:RFValue(18)}}
              >
  $3,222
  
              </Text>

            </View>  
<View 
            style={{width:RFValue(320),alignSelf:'center',flexDirection:"row",marginTop:RFValue(20),
            borderBottomColor:'#deb459',borderBottomWidth:0.5}}>
          


           
            <TouchableOpacity style={{width:RFValue(240),height:RFValue(40),margin:RFValue(20)
                 ,alignSelf:"center",flexDirection:"row"}}>
           
            <Text
             
            
             style={{color:'#deb459',width:RFValue(240),alignSelf:"center",fontSize:RFValue(18)}}
               >
                  Diplomatic street
Manama, Bahrain.
               </Text>
           
            <Image
            style={{resizeMode:'contain',width:RFValue(30),height:RFValue(30) ,alignSelf:"center",marginTop:RFValue(0)}}
            source={location}>
            </Image>
            </TouchableOpacity>
            </View>

              <TouchableOpacity  
 onPress={()=>{this.props.navigation.navigate('Payment3',{ prop:this.props.route.params.prop ,Seller:this.props.route.params.Seller,GigId:this.props.route.params.GigId})}}
style={{width:RFValue(150),height:RFValue(36),backgroundColor:'white',marginTop:RFValue(20),alignSelf:"center"}}
              >
  <Text
             
            
             style={{color:'#F7C148' ,alignSelf:"center",fontSize:RFValue(18),marginTop:RFValue(5)}}
               >
                 Continue
               </Text>

              </TouchableOpacity>
                  </View>
                </LinearGradient>
       
        </View>

    )}
}

const styles = StyleSheet.create({})



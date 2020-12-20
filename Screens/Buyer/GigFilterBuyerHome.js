import React from 'react'
import { View, Text, StyleSheet, TextInput, FlatList, Button, TouchableOpacity, Image, ScrollView } from 'react-native'
import GigMiniView from '../GigMiniView'
import MiniServices from './MiniServices'
import LinearGradient from 'react-native-linear-gradient';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol
} from 'react-native-responsive-screen';

import { SearchBar } from 'react-native-elements';
import Controller from '../../Controller/ViewGigController'

import { RFValue } from 'react-native-responsive-fontsize';
import MessageG from '../../Images/MessageG.png'
import Message1 from '../../Images/Message1.png'
import User1 from '../../Images/User1.png'
import UserG from '../../Images/UserG.png'
import Location from '../../Model/Location'
import NotificationG from '../../Images/NotificationG.png'
import Notification1 from '../../Images/Notification1.png'
import Home1 from '../../Images/Home1.png'
import HomeG from '../../Images/HomeG.png'
import Chefgreen from '../../Images/Icons/cooking.png'
import HeaderIcon from '../../Images/Path430.png'
import Cameragreen from '../../Images/Icons/photograph.png'

import Makeupgreen from '../../Images/Icons/makeup.png'

import Sewinggreen from '../../Images/Icons/sewing.png'
import Orders from '../../Images/Orders.png'
import * as geolib from 'geolib';
import Geolocation from '@react-native-community/geolocation'

let LocationObject = new Location();

let ViewGigController = new Controller()


export default class BuyerHome extends React.Component {

  constructor() {
    super();
    this.Title = ''
    this.Price = ''
    this.Description = ''
    this.Category = ''
    this.Home = true,
      this.Notification = false,
      this.Message = false,
      this.User = false
    this.Neartoyou = true
    this.TopRated = false
    this.TopChat = false

    this.array = []
    this.state = {
      filePath: {}, array: [], search: '', nearbyuser: []
    };
  }

  DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Cooking',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Beautician',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Photography',
    },
    {
      id: '58694a0f-3da1-471f-bd916-145571e29d72',
      title: 'Stiching',
    },
  ];

  async componentDidMount() {

    this.setState({ array: this.props.route.params.array })


  }
  search(keywords) {


    const users = []
    this.setState({ array: users })
    const subscriber = ViewGigController.search(keywords, (data) => {

      this.setState({ array: data })


    });

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

  getData() {

    const users = []
    this.setState({ array: users })
    const subscriber = LocationObject.getLocation((data) => {
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

    this.Home = false
    this.Notification = false
    this.Message = false
    this.User = false


    return (

      <View style={styles.container} >
        <LinearGradient
          colors={['#272b2b', '#80662C']}
          style={styles.header}
        >
          <View style={{ flexDirection: 'row' }}>
            <Image source={HeaderIcon} style={{
              resizeMode: "stretch", width: RFValue(100), marginTop: RFValue(35), marginLeft: RFValue(150),
              height: RFValue(100)
            }} />
            <TouchableOpacity
              onPress={() => { this.props.navigation.navigate('BuyerProfile', { Buyer: this.props.route.params.username }) }}
              style={{ marginLeft: RFValue(80), marginTop: RFValue(40) }}>
              <Image
                style={{ resizeMode: 'contain', alignSelf: "center", height: RFValue(40), width: RFValue(40) }}
                source={Orders}>


              </Image>
              <Text style={{ fontSize: RFValue(16), color: 'white', fontWeight: 'bold', marginLeft: RFValue(0) }}>Orders</Text>
            </TouchableOpacity>
          </View>


        </LinearGradient>
        <ScrollView  >
          <View>
            <LinearGradient
              colors={['#deb459', '#80662C']}
              style={{ width: RFValue(250), margin: RFValue(5), height: RFValue(50), marginLeft: RFValue(-5), borderTopRightRadius: RFValue(30), borderBottomRightRadius: RFValue(30) }}>
              <Text style={{
                fontSize: RFValue(20), marginLeft: RFValue(20), marginTop: RFValue(10), marginBottom: RFValue(15),
                fontWeight: 'bold', color: 'black'
              }}>Filter :  {this.props.route.params.filter} </Text>
            </LinearGradient>

            <FlatList
              data={this.state.array}
              renderItem={({ item }) => (
                <GigMiniView scroll={false} GigId={item.key} Buyer={this.props.route.params.username} navigation={this.props.navigation} item={item} GigTitle={item.Title} ImageUri={item.ImageUri} Price={item.price} GigCategory={item.GigCategory}></GigMiniView>

              )}
            />
          </View>
        </ScrollView>
        <View style={{ flexDirection: "row", alignSelf: 'center', backgroundColor: 'transparent' }}>

          <TouchableOpacity
            onPress={() => {
              this.Home = true
              this.Notification = false
              this.Message = false
              this.User = false
              this.props.navigation.goBack()
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
              this.props.navigation.navigate('NotificationBuyerDashboard', { Buyer: this.props.route.params.username })
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
              this.props.navigation.navigate('BuyerMessages', { Buyer: this.props.route.params.username })
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  header: {
    height: RFValue(200), width: RFValue(388)
    ,
    justifyContent: "space-around"
  }
  , footer: {

    flexDirection: 'row',
    backgroundColor: 'green'
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    marginTop: RFValue(50),
    marginLeft: RFValue(150),
    fontSize: RFValue(30),
    alignSelf: "center",
    alignContent: "center"
  },

})
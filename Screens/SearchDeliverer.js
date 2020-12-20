/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar, TouchableOpacity
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MapView from 'react-native-maps';

import PulseLoader from 'react-native-pulse-loader';
import Geolocation from '@react-native-community/geolocation'
import Location1 from '../Model/Deliverer'
const Location = new Location1();
import * as geolib from 'geolib';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: true, markers: [],
      region: {
        latitude: 3.148561,
        longitude: 101.652778,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },

    }
  }
  async searchDeliverer() {
    let users = []

    Location.SeacrhDeliverer(async data => {
      Geolocation.getCurrentPosition(

        async position => {

          data.forEach(async documentSnapshot => {
            let distance = geolib.getDistance(position.coords, {
              latitude: documentSnapshot.val().Location.latitude,
              longitude: documentSnapshot.val().Location.longitude,
            })
            if (documentSnapshot.val().ActiveStatus == 'Online' && distance < 10000) {
              users.push({
                ...documentSnapshot.val(),
                key: documentSnapshot.key

              });



            }

          });
          this.setState({ markers: users })



        },
        error => console.log(error.message),
        { enableHighAccuracy: true, timeout: 200000, maximumAge: 1000 }
      )

    })
  }
  componentWillUnmount() {
    clearInterval(this._interval);
  }

  componentDidMount() {
    setTimeout(() => { this.setState({ loading: false }) }, 5000)
    this._interval = setInterval(() => {

      this.searchDeliverer()
    }, 5000)




  }
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column-reverse' }}>
        <MapView
          style={StyleSheet.absoluteFillObject}
          region={{
            latitude: 37.421998333333335,
            longitude: -122.08400000000002,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}

        >
          {this.state.markers.length > 0 ? this.state.markers.map(marker => (
            <MapView.Marker
              coordinate={{
                latitude: marker.Location.latitude,
                longitude: marker.Location.longitude
              }}


            >
              <FontAwesome
                name="motorcycle"
                color={'black'}
                size={20}
                style={{ alignSelf: "center" }}
              />
            </MapView.Marker>
          )) : null}
        </MapView>

        {this.state.loading ?
          <View style={{ height: RFValue(200), backgroundColor: 'white', borderTopLeftRadius: RFValue(50), borderTopRightRadius: RFValue(50) }}>
            <Text style={{ alignSelf: 'center', fontWeight: 'bold', fontSize: RFValue(20), marginVertical: RFValue(30) }}> Searching....</Text>

          </View> :
          <View style={{ height: RFValue(200), backgroundColor: 'white', borderTopLeftRadius: RFValue(50), borderTopRightRadius: RFValue(50) }}>
            <Text style={{ alignSelf: 'center', fontWeight: 'bold', fontSize: RFValue(20), marginVertical: RFValue(10) }}> Deliverer Found</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
              <Text style={{ alignSelf: 'flex-start', position: 'absolute', left: RFValue(40), fontWeight: 'bold', fontSize: RFValue(16), marginVertical: RFValue(10) }}>Name :</Text>
              <Text style={{ alignSelf: 'flex-start', position: 'absolute', left: RFValue(150), fontWeight: 'bold', fontSize: RFValue(16), marginVertical: RFValue(10) }}>Zaid</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', position: 'absolute', top: RFValue(80) }}>
              <Text style={{ alignSelf: 'flex-start', position: 'absolute', left: RFValue(40), fontWeight: 'bold', fontSize: RFValue(16), marginVertical: RFValue(10) }}>Vehicle Number :</Text>
              <Text style={{ alignSelf: 'flex-start', position: 'absolute', left: RFValue(200), fontWeight: 'bold', fontSize: RFValue(16), marginVertical: RFValue(10) }}>Nt-568</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                console.log('Seller ' + this.props.route.params.Seller + 'Dilev  ' + this.state.markers[0].Deliverer)
                this.props.navigation.navigate('DelivererChat', { from: this.props.route.params.Seller, to: this.state.markers[0].Deliverer })
              }}
              style={{ position: 'absolute', borderRadius: RFValue(30), width: RFValue(100), height: RFValue(30), left: RFValue(50), top: RFValue(140), backgroundColor: 'black' }}>
              <Text style={{ fontSize: RFValue(14), alignSelf: 'center', color: 'white', marginTop: RFValue(4) }}> Message</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ position: 'absolute', borderRadius: RFValue(30), width: RFValue(100), height: RFValue(30), left: RFValue(200), top: RFValue(140), backgroundColor: 'black' }}>
              <Text style={{ fontSize: RFValue(14), alignSelf: 'center', color: 'white', marginTop: RFValue(4) }}> Home</Text>
            </TouchableOpacity>
          </View>
        }
      </View>
    );
  }

}
const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
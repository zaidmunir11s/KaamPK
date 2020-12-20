import React, { Component } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Geolocation from '@react-native-community/geolocation'


const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 37.771707;
const LONGITUDE = -122.4053769;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const markerID = '1aa1'
const GOOGLE_MAPS_APIKEY = 'AIzaSyDbk1RWY8nUNiyb0SZYQla4CubeWVatJAM';

class Example extends Component {

  constructor(props) {
    super(props);
    this.distance = null
    // AirBnB's Office, and Apple Park
    this.state = {
      array: [],
      coordinates: [
        {
          latitude: 37.3317876,
          longitude: -122.0054812,
        },
        {
          latitude: 37.771707,
          longitude: -122.4053769,
        },
      ],
    };

    this.mapView = null;
  }
  componentDidMount() {

    this.zoom()
  }
  zoom() {
    Geolocation.getCurrentPosition(
      ({ coords }) => {
        let coordinate = [
          {
            latitude: coords.latitude,
            longitude: coords.longitude,
          },
          {
            latitude: 37.771707,
            longitude: -122.4053769,
          },
        ];
        this.setState({
          coordinates: coordinate
        })
        if (this.mapView) {
          this.mapView.animateToRegion({
            latitude: coords.latitude,
            longitude: coords.longitude,
            latitudeDelta: 0.001,
            longitudeDelta: 0.00
          })
        }
      },
      (error) => alert('Error: Are location services on?'),
      { enableHighAccuracy: true }
    )

  }

  onMapPress = (e) => {
    this.setState({
      coordinates: [
        ...this.state.coordinates,
        e.nativeEvent.coordinate,
      ],
    });
  }

  render() {
    return (
      <MapView
        initialRegion={{
          latitude: LATITUDE,
          longitude: LONGITUDE,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}
        style={StyleSheet.absoluteFill}
        ref={c => this.mapView = c}
        onPress={this.onMapPress}
      >
        {this.state.coordinates.map((coordinate, index) =>
          <MapView.Marker key={`coordinate_${index}`} coordinate={coordinate} />
        )}
        {(this.state.coordinates.length >= 2) && (
          <MapViewDirections
            origin={this.state.coordinates[0]}

            destination={this.state.coordinates[this.state.coordinates.length - 1]}
            mode='DRIVING'
            apikey={GOOGLE_MAPS_APIKEY}
            language='en'
            strokeWidth={4}
            strokeColor="black"
            onStart={(params) => {
              console.log(`Started routing between "${params.origin}" and "${params.waypoints.length}" 
              ${(params.waypoints.length ? " using waypoints: " + params.waypoints.join(', ') : "")}`);

            }}
            onReady={async result => {
              this.distance = await result.distance
              console.log(`Distance: ${result.distance} km`)
              console.log(`Duration: ${result.duration} min.`)
              this.zoom()

              this.mapView.fitToCoordinates(result.coordinates, {
                edgePadding: {
                  right: (width / 20),
                  bottom: (height / 20),
                  left: (width / 20),
                  top: (height / 20),
                }
              });
            }}
            onError={(errorMessage) => {
              // console.log('GOT AN ERROR');
            }}
          />
        )}
      </MapView>
    );
  }
}

export default Example;
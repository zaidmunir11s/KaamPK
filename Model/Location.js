import firestore from '@react-native-firebase/firestore'
import React from 'react'
import * as geolib from 'geolib';
import Geolocation from '@react-native-community/geolocation'
export default class Location extends React.Component {
  constructor() {
    super();

    this.UserAdded = false
    this.Location = null
    this.count = 0
    this.users = []

  }

  async getLocation(ret) {

    Geolocation.getCurrentPosition(

      async position => {
        this.Location = position.coords



        var snapshot = await firestore().collection("UsersKaam").get().then(async querySnapshot => {
          const users = [];
          console.log('ok2')

          querySnapshot.forEach(async documentSnapshot => {
            console.log(documentSnapshot.data().Location.latitude)

            let distance = geolib.getDistance(position.coords, {
              latitude: documentSnapshot.data().Location.latitude,
              longitude: documentSnapshot.data().Location.longitude,
            })
            console.log(distance + ' distance')
            if (distance < 5000) {
              if (documentSnapshot.data().UserType == 'Seller') {
                users.push(
                  documentSnapshot.data().username
                );
              }
            }
          })
          console.log(users)
          let array = []
          await firestore()
            .collection('Sellers')
            .get()
            .then(async querySnapshot => {
              querySnapshot.forEach(documentSnapshot => {
                array.push(
                  documentSnapshot.data().Sellers
                )

              })
            }).then(() => array.forEach(async user => {

              await firestore()
                .collection('SellerDetails').doc(user).collection('Gigs').where("username", "==", users[this.count])
                .get()
                .then(async querySnapshot => {


                  ret(querySnapshot)
                  querySnapshot.forEach(documentSnapshot => {
                    console.log(documentSnapshot.data())

                  });
                });
              this.count++
            }))

        })


      },
      error => console.log(error.message),
      { enableHighAccuracy: true, timeout: 200000, maximumAge: 1000 }
    );
  }
  setLocation() {

    console.log('setted')
  }
}
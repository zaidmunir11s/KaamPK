import firestore from '@react-native-firebase/firestore'
import React from 'react'

export default class UserModel extends React.Component {
  constructor() {
    super();
    username = ''
    password = ''
    email = ''
    userType = ''
    PhoneNO = ''
    Category = ''
    ImageUri = ''
    ImageName = ''
    location = ''
    this.UserAdded = false

  }
  async UserTypeFetch(username, password) {
    let UserType = ''
    var Ref = firestore().collection("UsersKaam");
    await Ref.where("username", "==", username)
      .get()
      .then(async function (querySnapshot) {

        if (!querySnapshot.empty) {




          querySnapshot.forEach(function (doc) {
            // doc.data() is never undefined for query doc snapshots

            if (doc.data().Password == password) {
              console.log('User Present')
              Duplication = true
              UserType = doc.data().UserType
            }
          });

        }

      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
    return UserType
  }

  async UserVerify(username, password) {
    let Duplication = false

    var Ref = firestore().collection("UsersKaam");
    await Ref.where("username", "==", username)
      .get()
      .then(async function (querySnapshot) {
        if (!querySnapshot.empty) {
          querySnapshot.forEach(function (doc) {
            // doc.data() is never undefined for query doc snapshots

            if (doc.data().Password == password) {
              console.log('User Present')
              Duplication = true
              userType = doc.data().UserType

            }
          });

        }

      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
    return Duplication
  }

  async CheckDuplicationEmail(email) {
    let Duplication = false

    var citiesRef = firestore().collection("UsersKaam");
    await citiesRef.where("Email", "==", email)
      .get()
      .then(function (querySnapshot) {

        if (!querySnapshot.empty) {

          Duplication = true


        }

      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });

    return Duplication
  }
  async CheckDuplicationUsername(username) {
    let Duplication = false

    var citiesRef = firestore().collection("UsersKaam");
    await citiesRef.where("username", "==", username)
      .get()
      .then(function (querySnapshot) {

        if (!querySnapshot.empty) {

          Duplication = true


        }

      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });

    return Duplication
  }




  async Save() {
    //Check Duplication Of username
    if (true) {
      console.log('DB Running')
      if (this.userType == 'Seller') {

        await firestore()
          .collection('Sellers')
          .add({
            Sellers: this.username

          }).then(() => { console.log('Seller Stored') })

      }
      await firestore()
        .collection('UsersKaam')
        .add({
          username: this.username,
          Password: this.password,
          Email: this.email,
          PhoneNO: this.PhoneNO,
          UserType: this.userType,
          ImageUri: this.ImageUri,
          Location: this.location,

        })
        .then(() => {
          this.UserAdded = true
          console.log('User added!');
        });
    } else {
      console.log('Duplicate')
      return true
    }
    return this.UserAdded
  }

}

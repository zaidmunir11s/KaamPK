import React from 'react'
import firestore from '@react-native-firebase/firestore'
import { ToastAndroid } from 'react-native';
import database from '@react-native-firebase/database';



export default class Messages extends React.Component {
  constructor() {
    super()

    this.array = []

  }

  async FetchMyMessages(from, to, Data) {

    await database()
      .ref('/Buyer/' + `${to}` + '/Messages/' + `${from}`).on('value', async (snapshot) => {

        snapshot.forEach(shot => {


        })

        Data(snapshot)
      })

  }
  async FetchMyMessagesSeller(from, to, Data) {

    await database()
      .ref('/Seller/' + `${from}` + '/Messages/' + `${to}`).on('value', async (snapshot) => {



        Data(snapshot)
      })

  }

  async GetBuyer(from, Data) {

    const users = []
    database()
      .ref('/Seller/' + `${from}` + '/Messages').on('value', async (snapshot) => {
        snapshot.forEach(async documentSnapshot => {




        })
        await Data(snapshot)
      }
      )

  }
  async GetBuyerD(from, Data) {

    const users = []
    database()
      .ref('/Dileverer/' + `${from}` + '/Messages').on('value', async (snapshot) => {
        snapshot.forEach(async documentSnapshot => {




        })
        await Data(snapshot)
      }
      )

  }
  async GetSellers(from, Data) {
    const users = []
    database()
      .ref('/Buyer/' + `${from}` + '/Messages').on('value', async (snapshot) => {
        snapshot.forEach(async documentSnapshot => {







        })
        await Data(snapshot)
      }
      )
  }

  async Save(Seller, Buyer, body, usertype) {


    console.log('Sending message')

    this.SaveBuyerDetails(Buyer, Seller, body, usertype)

    await database()
      .ref('/Seller/' + `${Seller}` + '/Messages/' + `${Buyer}` + '/' + `${new Date}`)
      .set({
        msg: body,
        From: Seller,
        Date: new Date,
        Day: new Date().getDate(), //Current Day
        month: new Date().getMonth() + 1, //Current Month
        year: new Date().getFullYear(), //Current Year
        hours: new Date().getHours(), //Current Hours
        min: new Date().getMinutes(), //Current Minutes
        sec: new Date().getSeconds()

      })
      .then(() => {
        this.GigAdded = true
        console.log('Message Sent!');
      });
  }
  async SaveBuyerDetails(Buyer, Seller, body) {


    console.log('Sending message')

    database()
      .ref('/Buyer/' + `${Buyer}` + '/Messages/' + `${Seller}` + '/' + `${new Date}`)
      .set({
        msg: body,
        From: Buyer,
        Date: new Date(),
        Day: new Date().getDate(), //Current Day
        month: new Date().getMonth() + 1, //Current Month
        year: new Date().getFullYear(), //Current Year
        hours: new Date().getHours(), //Current Hours
        min: new Date().getMinutes(), //Current Minutes
        sec: new Date().getSeconds()

      })
      .then(() => {

        console.log('Message Sent!');
      });


  }

  async SaveBuyer(from, to, body) {

    if (true) {
      console.log('Sending message')

      this.SaveBuyerDetails(from, to, body)

      database()
        .ref('/Seller/' + `${to}` + '/Messages/' + `${from}` + '/' + `${new Date}`)
        .set({
          msg: body,
          From: from,
          Date: new Date(),
          Day: new Date().getDate(), //Current Day
          month: new Date().getMonth() + 1, //Current Month
          year: new Date().getFullYear(), //Current Year
          hours: new Date().getHours(), //Current Hours
          min: new Date().getMinutes(), //Current Minutes
          sec: new Date().getSeconds()

        })
        .then(() => {
          this.GigAdded = true
          console.log('Message Sent!');
        });
    } else {

    }

  }



  async SaveBuyerDetailsD(Buyer, Dileverer, body) {


    console.log('Sending message')

    database()
      .ref('/Dileverer/' + `${Buyer}` + '/Messages/' + `${Dileverer}` + '/' + `${new Date}`)
      .set({
        msg: body,
        From: Buyer,
        Date: new Date(),
        Day: new Date().getDate(), //Current Day
        month: new Date().getMonth() + 1, //Current Month
        year: new Date().getFullYear(), //Current Year
        hours: new Date().getHours(), //Current Hours
        min: new Date().getMinutes(), //Current Minutes
        sec: new Date().getSeconds()

      })
      .then(() => {

        console.log('Message Sent!');
      });


  }
  async SaveD(Dileverer, Buyer, body, usertype) {


    console.log('Sending message')

    this.SaveBuyerDetailsD(Buyer, Dileverer, body, usertype)

    await database()
      .ref('/SellerDiliverer/' + `${Dileverer}` + '/Messages/' + `${Buyer}` + '/' + `${new Date}`)
      .set({
        msg: body,
        From: Dileverer,
        Date: new Date,
        Day: new Date().getDate(), //Current Day
        month: new Date().getMonth() + 1, //Current Month
        year: new Date().getFullYear(), //Current Year
        hours: new Date().getHours(), //Current Hours
        min: new Date().getMinutes(), //Current Minutes
        sec: new Date().getSeconds()

      })
      .then(() => {
        this.GigAdded = true
        console.log('Message Sent!');
      });
  }
  async SaveBuyerD(Buyer, Deliverer, body) {

    if (true) {
      console.log('Sending message')

      this.SaveBuyerDetailsD(Buyer, Deliverer, body)

      database()
        .ref('/Dileverer/' + `${Deliverer}` + '/Messages/' + `${Buyer}` + '/' + `${new Date}`)
        .set({
          msg: body,
          From: Buyer,
          Date: new Date(),
          Day: new Date().getDate(), //Current Day
          month: new Date().getMonth() + 1, //Current Month
          year: new Date().getFullYear(), //Current Year
          hours: new Date().getHours(), //Current Hours
          min: new Date().getMinutes(), //Current Minutes
          sec: new Date().getSeconds()

        })
        .then(() => {
          this.GigAdded = true
          console.log('Message Sent!');
        });
    } else {

    }

  }

  async FetchMyMessagesSellerD(from, to, Data) {

    await database()
      .ref('/SellerDiliverer/' + `${from}` + '/Messages/' + `${to}`).on('value', async (snapshot) => {



        Data(snapshot)
      })

  }

}
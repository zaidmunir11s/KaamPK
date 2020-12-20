import React from 'react'

import database from '@react-native-firebase/database';



export default class Notification {
  constructor() {
    this.array = []

  }

  OrderNotifySeller(Buyer, Seller, OrderID, GigId, Gig) {
    console.log(Buyer + 'bbbb')
    database()
      .ref('/Seller/' + `${Seller}` + '/Notification/Unread/' + '/Order/' + `${OrderID}`)
      .set({
        From: Buyer,
        OrderID: OrderID,
        GigId: GigId,
        Date: new Date(),
        GigDetails: Gig
      })
      .then(() => console.log('Data set.'));

  }
  OrderReady(Buyer, Seller, OrderID, GigId, Gig) {
    console.log(Buyer + 'bbbb')
    database()
      .ref('/Deliverer/' + `${Seller}` + '/Notification/Unread/' + '/Order/' + `${OrderID}`)
      .set({
        From: Buyer,
        OrderID: OrderID,
        GigId: GigId,
        Date: new Date(),
        GigDetails: Gig
      })
      .then(() => console.log('Data set.'));

  }
  OrderAccepted(Buyer, Seller, OrderID, GigId, Gig, Response) {
    console.log(Buyer + "  Buyeee")
    if (Response != 'Rejected') {
      database()
        .ref('/Buyer/' + `${Buyer}` + '/Notification/Unread/Order/' + `${OrderID}`)
        .set({
          Buyer: Buyer,
          Seller: Seller,
          OrderID: OrderID,
          GigId: GigId,
          Date: new Date(),
          GigDetails: Gig,
          Response: 'Accepted'
        })
        .then(() => console.log('Data set.'));
    }
  }


  PushOrderInArray(snapshot) {
    snapshot.forEach(snap => {


      this.array.push({
        ...snap.val(),

      });


    })
  }
  getArray() {
    return this.array
  }
  async CheckforNotification(Seller, array) {

    const obj = database()
      .ref('/Seller/' + Seller + '/Notification/Unread/Order').orderByChild('date')
    obj.on('value', async (snapshot) => {

      if (await snapshot.exists()) {

        await array(snapshot)
      } else {

        array(null)
      }



    });

  }

  async CheckforNotificationBuyer(Seller, array) {

    const obj = database()
      .ref('/Buyer/' + Seller + '/Notification/Unread/Order').orderByChild('date')
    obj.on('value', async (snapshot) => {

      if (await snapshot.exists()) {

        await array(snapshot)
      } else {

        array(null)
      }



    });

  }
  async CheckBuyerPendingOrder(Seller, array) {

    const obj = database()
      .ref('/Buyer/' + Seller + '/Notification/Unread/PendingOrders').orderByChild('date')
    obj.on('value', async (snapshot) => {

      if (await snapshot.exists()) {

        await array(snapshot)
      } else {

        array(null)
      }



    });

  }
  async CheckSellerPendingOrder(Buyer, array) {

    const obj = database()
      .ref('/Seller/' + Buyer + '/Notification/Unread/PendingOrders').orderByChild('date')
    obj.on('value', async (snapshot) => {

      if (await snapshot.exists()) {

        await array(snapshot)
      } else {

        array(null)
      }



    });

  }

  async CheckForOrder(Seller, Buyer, OrderID, flag) {

    const obj = database()
      .ref('/Seller/' + Seller + '/Notification/Unread/' + '/Order/' + `${OrderID}`)
    obj.on('value', async (snapshot) => {

      if (await snapshot.exists()) {

        await flag(false)

      } else {

        await flag(false)
      }



    });

  }
  PendingOrder(Buyer, Seller, OrderID, GigId, Gig, status) {
    this.PendingOrderBuyer(Buyer, Seller, OrderID, GigId, Gig, status)
    database()
      .ref('/Seller/' + `${Seller}` + '/Notification/Unread/' + '/PendingOrders/' + `${OrderID}`)
      .set({
        Seller: Buyer,
        Buyer: Seller,
        Status: status,
        OrderID: OrderID,
        GigId: GigId,
        Day: new Date().getDate(), //Current Day
        month: new Date().getMonth() + 1, //Current Month
        year: new Date().getFullYear(), //Current Year
        hours: new Date().getHours(), //Current Hours
        min: new Date().getMinutes(),
        GigDetails: Gig
      })
      .then(() => console.log('Pending Order Set.'));

  }
  PendingOrderBuyer(Buyer, Seller, OrderID, GigId, Gig, status) {
    database()
      .ref('/Buyer/' + `${Buyer}` + '/Notification/Unread/' + '/PendingOrders/' + `${OrderID}`)
      .set({
        Seller: Buyer,
        Buyer: Seller,
        Status: status,
        OrderID: OrderID,
        GigId: GigId,
        Day: new Date().getDate(), //Current Day
        month: new Date().getMonth() + 1, //Current Month
        year: new Date().getFullYear(), //Current Year
        hours: new Date().getHours(), //Current Hours
        min: new Date().getMinutes(),

        GigDetails: Gig
      })
      .then(() => console.log('Pending Order Set.'));

  }




  async RemoveSellerOrder(Seller, OrderID) {

    await database()
      .ref('/Seller/' + `${Seller}` + '/Notification/Unread/' + '/Order/' + `${OrderID}`)
      .remove();


  }

}



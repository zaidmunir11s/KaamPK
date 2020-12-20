import React from 'react'

import database from '@react-native-firebase/database';
import Geolocation from '@react-native-community/geolocation'

import * as geolib from 'geolib';
export default class Deliverer {
    constructor() {
        this.array = []

    }

    PushDeliverer(Deliverer, ActiveStatus) {

        let Location = null
        Geolocation.getCurrentPosition(

            async position => {
                Location = await position.coords


                database()
                    .ref('/Deliverer/' + `${Deliverer}`)
                    .set({
                        Deliverer: Deliverer,
                        Location: Location,
                        ActiveStatus: ActiveStatus,

                    })
                    .then(() => console.log('Data set.'));
            },
            error => console.log(error.message),
            { enableHighAccuracy: true, timeout: 200000, maximumAge: 1000 }
        )
    }

    async SeacrhDeliverer(array) {
        let tmp = []
        const obj = database()
            .ref('/Deliverer')
        obj.on('value', async (snapshot) => {

            if (await snapshot.exists()) {
                await array(snapshot)


            } else {


            }



        });

    }
}
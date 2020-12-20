import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import NotificationCont from '../../Controller/NotificationController'
let NotificationController = new NotificationCont();
import LinearGradient from 'react-native-linear-gradient';
import Modal from 'react-native-modal';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
} from 'react-native-responsive-screen';

export default class NotificationBuyer extends React.Component {
    constructor() {
        super()
        this.ModalFlag = false
        this.disableFlag = false
        this.color = 'white'

    }

    render() {

        return (
            <View>
                <TouchableOpacity
                    disabled={this.disableFlag}
                    style={{ height: 70, backgroundColor: this.color, justifyContent: "space-around", padding: 12, margin: 5, elevation: 5, borderRadius: 20 }}
                    onPress={() => {
                        this.props.navigation.navigate('BuyerProfile', { Buyer: this.props.Buyer })
                    }}
                >

                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{this.props.Buyer} Accepted Your Order.Tap to View Status</Text>


                </TouchableOpacity>



            </View>


        )
    }
}
const styles = StyleSheet.create({
    MediumButton: {
        width: wp('45%'),
        height: hp('8'),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});


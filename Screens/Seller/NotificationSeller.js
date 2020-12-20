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

export default class NotificationSeller extends React.Component {
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
                        this.ModalFlag = true
                        this.forceUpdate()
                    }}
                >

                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{this.props.Buyer} Placed an Order</Text>


                </TouchableOpacity>

                <Modal isVisible={this.ModalFlag}>
                    <View style={{ backgroundColor: 'white', elevation: 2, width: wp('90'), height: hp('50'), borderRadius: 9, justifyContent: "space-between" }}>
                        <View style={{ width: wp('90'), height: hp('10'), backgroundColor: '#009387', borderTopLeftRadius: 9, borderTopRightRadius: 9, justifyContent: 'center' }}>
                            <Text style={{ fontSize: 24, fontWeight: "bold", alignSelf: "center", color: 'white' }}>Order Confirmation</Text>
                        </View>

                        <View style={{ flexDirection: 'row', alignSelf: 'center', elevation: 5, width: wp('80'), height: hp('10'), backgroundColor: '#cccccc', borderColor: '#cccccc', borderRadius: 10 }}>

                            <Text style={[styles.textSign, { margin: 18 }]}>Order Request from {this.props.Buyer} On : </Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignSelf: 'center', elevation: 5, width: wp('80'), height: hp('10'), backgroundColor: '#cccccc', borderColor: '#cccccc' }}>
                            <View style={{ width: wp('25') }}>
                                <Image source={{ uri: this.props.Gig.ImageUri }} style={{
                                    resizeMode: "stretch", width: '100%',
                                    height: '100%'
                                }} />

                            </View>

                            <View style={{ justifyContent: 'center' }}>
                                <Text style={{ fontSize: 18, fontWeight: 'bold' }}> {this.props.Gig.Title} </Text>
                                <Text style={{ fontSize: 16 }}> {this.props.Gig.price} Rs </Text>

                            </View>
                        </View>

                        <View style={{ flexDirection: "row" }}>
                            <TouchableOpacity
                                onPress={async () => {

                                    NotificationController.OrderAccepted(this.props.Buyer, this.props.Gig.username, this.props.OrderInfo.OrderID, this.props.Gig.key, this.props.Gig, 'Accepted')
                                    NotificationController.PendingOrder(this.props.Buyer, this.props.Gig.username, this.props.OrderInfo.OrderID, this.props.Gig.key, this.props.Gig, 'Pending')

                                    this.ModalFlag = false
                                    this.disableFlag = true
                                    this.color = '#cccccc'
                                    this.forceUpdate()

                                }}
                            >

                                <LinearGradient
                                    colors={['#08d4c4', '#01ab9d']}
                                    style={[styles.MediumButton, { borderBottomRightRadius: 0, borderTopRightRadius: 0 }]}
                                >
                                    <Text style={[styles.textSign, {
                                        color: '#fff'
                                    }]}>Accept</Text>
                                </LinearGradient>

                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {
                                this.ModalFlag = false
                                this.disableFlag = true
                                this.color = '#cccccc'
                                this.forceUpdate()
                            }} >
                                <LinearGradient
                                    colors={['#08d4c4', '#01ab9d']}
                                    style={[styles.MediumButton, { borderBottomLeftRadius: 0, borderTopLeftRadius: 0 }]}
                                >
                                    <Text style={[styles.textSign, {
                                        color: '#fff'
                                    }]}>Reject</Text>
                                </LinearGradient>

                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>

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


import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import NotificationCont from '../../Controller/NotificationController'
let NotificationController = new NotificationCont();

export default class ActiveOrders extends React.Component {
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
                    style={{ height: 70, backgroundColor: this.color, justifyContent: "space-around", padding: 12, margin: 5, elevation: 5, borderRadius: 20, flexDirection: 'row' }}
                    onPress={() => {
                        this.props.navigation.navigate('OrderComplete', { Gig: this.props.Gig, Order: this.props.OrderInfo })
                    }}
                >
                    <View>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Order Id : {this.props.OrderInfo.OrderID}</Text>

                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Seller     :  {this.props.OrderInfo.Seller}</Text>
                    </View>
                    <View style={{ alignSelf: "center" }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}> TAP to View</Text>
                    </View>
                </TouchableOpacity>

            </View>


        )
    }
} 
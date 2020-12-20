import React from 'react'
import { View, Text, FlatList, TouchableOpacity, RefreshControl, Image } from 'react-native'
import Notif from '../../Controller/NotificationController'
import Activeorders from './Activeorders'
let NotificationController = new Notif()


export default class OrderComplete extends React.Component {

    constructor() {
        super()
    }
    render() {
        return (
            <View style={{ flex: 100, backgroundColor: '#272b2b' }}>

                <View style={{ flex: 15, borderBottomLeftRadius: 60, borderBottomRightRadius: 60, backgroundColor: '#009387', justifyContent: 'center' }}>
                    <Text style={{ alignSelf: "center", fontWeight: "bold", fontSize: 28, color: 'white' }}>Order Status</Text>

                </View>
                <View style={{ flex: 85, backgroundColor: '#272b2b' }}>
                    <View style={{ flex: 75, backgroundColor: 'white', width: '90%', alignSelf: "center", margin: 10, borderRadius: 20 }} >
                        <View style={{ flex: 40, width: '88%', backgroundColor: '#cccccc', alignSelf: "center", marginTop: 20, borderRadius: 20, flexDirection: 'column' }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 20, margin: 10, alignSelf: "center" }}>Gig Details  </Text>
                            <View style={{ flex: 20, width: '90%', alignSelf: "center", margin: 10 }}>

                                <Image source={{ uri: this.props.route.params.Gig.ImageUri }} style={{
                                    resizeMode: "stretch", width: '100%', borderRadius: 20,
                                    height: '100%'
                                }} />
                            </View>

                            <View style={{ flex: 20 }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 20, margin: 10, alignSelf: "center" }}>Gig Title :  </Text>
                                    <Text style={{ fontSize: 16, margin: 10, alignSelf: "center" }}>{this.props.route.params.Gig.Title}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 20, margin: 10, alignSelf: "center" }}>Gig Price :  </Text>
                                    <Text style={{ fontSize: 16, margin: 10, alignSelf: "center" }}>{this.props.route.params.Gig.price}</Text>
                                </View>

                            </View>

                        </View>
                        <View style={{ flex: 35, backgroundColor: 'white' }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 28, margin: 10, marginLeft: 30, alignSelf: "center" }}>Order Id :</Text>
                                <Text style={{ fontWeight: 'bold', fontSize: 20, margin: 10, marginLeft: 30, alignSelf: "center" }}>{this.props.route.params.Order.OrderID}</Text>
                            </View>

                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 28, margin: 10, marginLeft: 30, alignSelf: "center" }}>Seller     :</Text>
                                <Text style={{ fontWeight: 'bold', fontSize: 20, margin: 10, marginLeft: 30, alignSelf: "center" }}>{this.props.route.params.Gig.username}</Text>
                            </View>

                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 28, margin: 10, marginLeft: 30, alignSelf: "center" }}>Status    :</Text>
                                <Text style={{ fontWeight: 'bold', fontSize: 20, margin: 10, marginLeft: 30, alignSelf: "center", color: 'green' }}>Ready</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ flex: 10, backgroundColor: '#272b2b', flexDirection: "row" }} >

                        <TouchableOpacity
                            style={{ flex: 5 }}
                            onPress={() => {
                                this.props.navigation.navigate('RateSeller', { Gig: this.props.route.params.Gig, Order: this.props.route.params.Order })
                            }}

                        >
                            <View style={{ height: '90%', justifyContent: "center", borderRadius: 10, margin: 8, backgroundColor: '#009387' }}>
                                <Text style={{ fontSize: 28, fontWeight: 'bold', color: 'white', alignSelf: 'center' }}>Complete</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{ flex: 5 }}
                            onPress={() => { this.props.navigation.goBack() }}
                        >
                            <View style={{ height: '90%', justifyContent: "center", borderRadius: 10, margin: 8, backgroundColor: '#696969' }}>
                                <Text style={{ fontSize: 28, fontWeight: 'bold', color: 'white', alignSelf: 'center' }}>Cancel</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        )
    }
}






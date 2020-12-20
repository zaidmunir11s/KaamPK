import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import NotificationCont from '../../Controller/NotificationController'
import Icon from 'react-native-vector-icons/Feather';
import DropDownPicker from 'react-native-dropdown-picker';
import { RFValue } from "react-native-responsive-fontsize";
import Geolocation from '@react-native-community/geolocation'
import Location1 from '../../Model/Deliverer'
const Location = new Location1();
import * as geolib from 'geolib';
let NotificationController = new NotificationCont();

export default class ActiveOrders extends React.Component {
    constructor(props) {
        super(props)
        this.ModalFlag = false
        this.disableFlag = false
        this.color = 'white'

        this.state = { country: props.OrderInfo.Status, dropdown: false, array: [] }
    }
    async searchDeliverer() {
        let users = []
        Location.SeacrhDeliverer(async data => {
            data.forEach(async documentSnapshot => {
                users.push({
                    ...documentSnapshot.val(),
                    key: documentSnapshot.key

                });
            });
            this.setState({ array: users })

            console.log(users[0].Location)
        })

    }
    componentDidMount() {
        this.searchDeliverer()
    }
    render() {

        return (
            <View>
                <TouchableOpacity
                    disabled={this.disableFlag}
                    style={{ height: RFValue(150), backgroundColor: this.color, justifyContent: "space-around", padding: 12, margin: 5, elevation: 5, borderRadius: 20, flexDirection: 'row' }}
                    onPress={() => {
                        NotificationController.PendingOrder(this.props.Buyer, this.props.Gig.username, this.props.OrderInfo.OrderID, this.props.Gig.key, this.props.Gig, this.state.country)
                        if (this.state.country == 'Delivered') {


                            this.props.navigation.navigate('SearchDeliverer', { Seller: this.props.route.params.Buyer })
                        }
                        if (this.state.country != 'Delivered') {
                            this.props.navigation.navigate('OrderComplete', { Gig: this.props.Gig, Order: this.props.OrderInfo })
                        }
                    }}
                >
                    <View>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Order Id : {this.props.OrderInfo.OrderID}</Text>

                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Buyer     :  {this.props.OrderInfo.Seller}</Text>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Date     :  {this.props.OrderInfo.Day}/{this.props.OrderInfo.month}/{this.props.OrderInfo.year}</Text>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Time     :  {this.props.OrderInfo.hours}:{this.props.OrderInfo.min}</Text>
                        {this.state.country == 'Ready' ?
                            <Text style={{ fontSize: RFValue(18), fontWeight: 'bold', color: 'red', marginLeft: RFValue(0) }}>Status : Ready</Text>
                            : null}
                        {this.state.country != 'Delivered' ?
                            <Text style={{ fontSize: RFValue(18), fontWeight: 'bold', color: '#009387', marginLeft: RFValue(0) }}>Change Status Then Tap</Text>
                            : null}
                    </View>

                    <View style={{ alignSelf: "flex-start" }}>
                        {this.state.country != 'Delivered' ?
                            <DropDownPicker
                                items={[
                                    { label: 'Pending', value: 'Pending', hidden: true },
                                    { label: 'Ready', value: 'Ready', },
                                    { label: 'Delivered', value: 'Delivered', },
                                ]}
                                defaultValue={this.state.country}
                                containerStyle={{ height: RFValue(30) }}
                                style={{ backgroundColor: '#fafafa', width: RFValue(120), height: RFValue(100) }}
                                itemStyle={{
                                    justifyContent: 'flex-start'
                                }}
                                dropDownStyle={{ backgroundColor: '#fafafa', height: RFValue(200) }}
                                onChangeItem={item => this.setState({
                                    country: item.value
                                })}
                            /> : <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'green' }}> Delivererd</Text>}

                    </View>
                </TouchableOpacity>

            </View>


        )
    }
} 
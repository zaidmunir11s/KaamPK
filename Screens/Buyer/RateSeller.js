import React from 'react'
import { View, Text, FlatList, TouchableOpacity, RefreshControl, Image, TextInput } from 'react-native'
import Notif from '../../Controller/CreateGigController'
import Activeorders from './Activeorders'
import { Rating, AirbnbRating } from 'react-native-ratings';
let RateGig = new Notif()


export default class RateSeller extends React.Component {

    constructor() {
        super()
        this.rate = 0
        this.feedback = ''
    }
    render() {
        return (
            <View style={{ flex: 100, backgroundColor: '#272b2b' }}>

                <View style={{ flex: 15, borderBottomLeftRadius: 60, borderBottomRightRadius: 60, backgroundColor: '#009387', justifyContent: 'center' }}>
                    <Text style={{ alignSelf: "center", fontWeight: "bold", fontSize: 28, color: 'white' }}>Give your Feedback</Text>

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
                            <View style={{ flexDirection: 'row', elevation: 5, flex: 15, borderWidth: 0, margin: 5, justifyContent: "center" }}>
                                <Rating
                                    type='star'
                                    ratingCount={5}
                                    imageSize={40}
                                    style={{ alignSelf: 'center' }}
                                    onFinishRating={(rate) => { this.rate = rate }}
                                />
                            </View>

                            <View style={{ flexDirection: 'column', flex: 20 }}>

                                <Text style={{ fontWeight: 'bold', fontSize: 16, margin: 5, marginLeft: 30, alignSelf: "flex-start", flex: 5 }}>Write your precious Feedback</Text>
                                <TextInput
                                    style={{ elevation: 5, width: '100%', flex: 15, padding: 10 }}
                                    onChangeText={(e) => { this.feedback = e }}
                                ></TextInput>
                            </View>
                        </View>
                    </View>
                    <View style={{ flex: 10, backgroundColor: '#272b2b', flexDirection: "row" }} >

                        <TouchableOpacity
                            style={{ flex: 10 }}
                            onPress={() => {
                                RateGig.RateGig(this.props.route.params.Gig.username, this.props.route.params.Gig.key, this.rate, this.feedback)
                                this.props.navigation.navigate('BuyerDashboard', { username: this.props.route.params.Order.Buyer })
                            }}
                        >
                            <View style={{ height: '90%', justifyContent: "center", borderRadius: 10, margin: 8, backgroundColor: '#009387' }}>
                                <Text style={{ fontSize: 28, fontWeight: 'bold', color: 'white', alignSelf: 'center' }}>Submit</Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                </View>

            </View>
        )
    }
}






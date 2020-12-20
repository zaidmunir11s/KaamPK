import React from 'react'
import firestore from '@react-native-firebase/firestore'
import { View, Text, Image, StyleSheet, FlatList, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { RFValue } from "react-native-responsive-fontsize";
import LinearGradient from 'react-native-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler'
import NotificationCont from '../Controller/NotificationController'
let NotificationController = new NotificationCont();
import Review from './Review'
import GigCont from '../Controller/ViewGigController'
let GigController = new GigCont();

export default class GigView extends React.Component {
    constructor(props) {
        super(props)
        this.state = { array: [] }
        this.username = props.route.params.prop.Title
        this.GigCat = props.route.params.prop.GigCategory
        this.Price = props.route.params.prop.price
        this.from = props.route.params.prop.username
        this.to = props.route.params.Buyer
        this.GigId = props.route.params.GigId
        this.Gig = props.route.params.prop
        this.ImageUri = props.route.params.prop.ImageUri
        this.drop = false
        this.arrow = 'arrow-down-drop-circle-outline'

    }


    getData() {
        const users = []
        const subscriber = GigController.getRating(this.from, this.GigId, (data) => {
            data.forEach(async documentSnapshot => {

                users.push({
                    ...documentSnapshot.data(),
                    key: documentSnapshot.id,
                });
            });
            this.setState({ array: users })


        });
    }





    render() {
        this.getData()
        return (
            <ScrollView contentContainerStyle={{ backgroundColor: '#f2f5f5' }}>
                <View style={{ height: RFValue(270) }}>

                    <Image source={{ uri: this.ImageUri }} style={{
                        resizeMode: "stretch", width: '100%',
                        height: '100%'
                    }} />
                </View>

                <View
                    style={{ flex: 60 }}>
                    <Text style={{ fontSize: 24, fontWeight: 'bold', margin: 10, marginLeft: RFValue(15) }}>
                        {this.username}
                    </Text>


                    <View style={{ elevation: 20, backgroundColor: '#272b2b', borderRadius: RFValue(15), borderColor: 'black', width: RFValue(330), height: RFValue(250), marginBottom: RFValue(0), alignSelf: "center" }}>
                        <Text style={{ fontSize: 16, margin: 10, color: 'white' }}>{this.Gig.description}</Text>
                    </View>

                    <View style={{ backgroundColor: 'white', height: RFValue(40) }}>
                        <TouchableOpacity
                            style={{}}
                            onPress={() => {

                                this.drop ? this.drop = false : this.drop = true
                                this.drop ? this.arrow = 'arrow-up-drop-circle-outline' : this.arrow = 'arrow-down-drop-circle-outline'



                                this.forceUpdate()
                            }}
                            style={{ backgroundColor: 'white', borderRadius: 10 }}

                        >

                            <View style={{ flexDirection: 'row', justifyContent: "space-between", margin: RFValue(10) }}>
                                <Text style={{ alignSelf: 'center', fontSize: 20, fontWeight: 'bold' }}>Reviews</Text>
                                <View style={{ marginRight: RFValue(10), marginTop: RFValue(5) }}>
                                    <Icon
                                        name={this.arrow}
                                        color={'black'}
                                        size={20}

                                    />
                                </View>
                            </View>
                        </TouchableOpacity>

                    </View>
                    {this.drop ?
                        <View style={{ backgroundColor: 'white', paddingBottom: RFValue(50) }} >
                            {this.state.array.map((item) => {
                                return (
                                    <Review key={item.key} Rate={item.Rate} Reviewer={this.to} Feedback={item.Feedback} ></Review>
                                )
                            })}



                        </View> : null}
                </View>
                <View style={{ height: RFValue(70), flexDirection: 'row', justifyContent: "center", marginTop: RFValue(10) }}>

                    <TouchableOpacity
                        style={{ marginRight: RFValue(100) }}
                        onPress={() => {



                            this.props.navigation.navigate('ChatBuyer', { from: this.to, to: this.from })
                        }}
                    >
                        <Icon
                            name="android-messages"
                            color={'#009387'}
                            size={60}

                        />


                    </TouchableOpacity>


                    <TouchableOpacity
                        style={{ backgroundColor: 'white', borderColor: '#009387', marginLeft: RFValue(2), flexDirection: "row", borderRadius: RFValue(10) }}
                        onPress={() => {
                            console.log(this.from + ' from ' + this.to + '  to')
                            this.props.navigation.navigate('Payment1', { prop: this.props.route.params.prop, Seller: this.to, GigId: this.props.route.params.GigId })
                        }}
                    >


                        <Image source={require('../Images/received.png')} style={{ width: RFValue(60), height: RFValue(60) }}></Image>


                    </TouchableOpacity>

                </View>
            </ScrollView>
        )
    }
}


const styles = StyleSheet.create({

    container: {
        flex: 80,
        backgroundColor: 'white',
        elevation: 4,
        borderWidth: 4,
        borderColor: 'white',
        shadowColor: 'white'


    },
})
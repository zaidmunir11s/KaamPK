import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { RFValue } from "react-native-responsive-fontsize";
import StarRating from 'react-native-star-rating';

export default class Review extends React.Component {
    constructor() {
        super()
        this.ModalFlag = false
        this.disableFlag = false


    }

    render() {

        return (
            <View style={{}} >
                <View style={{ flexDirection: "row", marginRight: RFValue(20), marginTop: RFValue(20) }}>
                    <Text style={{ fontSize: 16, width: RFValue(230), fontWeight: 'bold', marginLeft: RFValue(20) }}>{this.props.Reviewer}</Text>
                    <View style={{ alignSelf: 'flex-start' }}>
                        <StarRating
                            disabled={true}
                            maxStars={5}
                            starSize={20}

                            rating={this.props.Rate}

                        />
                    </View>
                </View>
                <TouchableOpacity
                    disabled={this.disableFlag}
                    style={{ height: RFValue(100), width: RFValue(330), backgroundColor: 'white', alignSelf: 'center', padding: 12, margin: 5, elevation: 5, borderRadius: 20, flexDirection: 'column' }}

                >
                    <View>
                        <Text style={{ alignSelf: 'flex-start', fontSize: 14, margin: RFValue(10), fontWeight: 'bold' }}>{this.props.Feedback}</Text>

                    </View>

                </TouchableOpacity>

            </View>


        )
    }
} 
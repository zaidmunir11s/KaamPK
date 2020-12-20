import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

export default class BuyerMiniChatView extends React.Component {

    render() {

        return (
            <TouchableOpacity
                style={{ height: 100, backgroundColor: 'white', justifyContent: "space-around", padding: 12, margin: 1, elevation: 5 }}
                onPress={() => { this.props.navigation.navigate('ChatBuyer', { to: this.props.route.params.to, from: this.props.route.params.from }) }}

            >

                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{this.props.route.params.to}</Text>
                <Text style={{ fontSize: 16 }}>I am here to Assign you Job</Text>

            </TouchableOpacity>
        )


    }
}

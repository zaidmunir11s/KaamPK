import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import Message from '../Controller/MessageController'


const MessageController = new Message()

export default class MiniChatView extends React.Component {
    constructor() {
        super()
        this.fontweight = '100'
    }
    render() {


        return (
            <TouchableOpacity
                style={{ height: 100, backgroundColor: 'white', justifyContent: "space-around", padding: 12, margin: 1, elevation: 5 }}
                onPress={() => {

                    this.props.navigation.navigate('Chat', { to: this.props.to, from: this.props.from })
                }}

            >

                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{this.props.to}</Text>
                <Text style={{ fontSize: 16 }}>I am here to Assign you Job</Text>

            </TouchableOpacity>
        )


    }
}

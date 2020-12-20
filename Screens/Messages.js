import React from 'react'
import { View, Text } from 'react-native'
import MiniChatView from './MiniChatView'
export default class Messages extends React.Component {

    render() {
        return (
            <View style={{ flex: 100 }}>
                <View style={{ flex: 10, backgroundColor: '#009387', justifyContent: 'center' }} >
                    <Text style={{ alignSelf: "center", color: 'white', fontSize: 28, fontWeight: 'bold' }}>Chats</Text>
                </View>
                <View style={{ flex: 90 }}>
                    <MiniChatView from={this.props.route.params.from} to={this.props.route.params.to} navigation={this.props.navigation}></MiniChatView>
                    <MiniChatView from={this.props.route.params.from} to={this.props.route.params.to} navigation={this.props.navigation}></MiniChatView>
                </View>

            </View>
        )


    }
}

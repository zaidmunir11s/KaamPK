import React from 'react'
import { View, Text } from 'react-native'

export default class MessageDisplay extends React.Component {


    async showDay() {
        let ret = false

        if (this.props.Date.min > this.props.Day + 1) {

            await this.props.ret(this.props.Date.min)
            ret = true


        }
        return ret


    }
    checkUser(from, user) {
        if (user == from) {

            return (
                <View style={{ flex: 2, borderBottomLeftRadius: 10, borderTopLeftRadius: 10, alignSelf: 'flex-end', padding: 10, margin: 3, backgroundColor: '#009387' }}>


                    <Text style={{ alignSelf: 'flex-start', fontSize: 16, color: 'white' }}>{this.props.msg}</Text>
                    <Text style={{ alignSelf: 'flex-start', fontSize: 10, color: 'white' }}>{this.props.Date.hours}: {this.props.Date.min}</Text>

                </View>

            )
        } else {
            return (
                <View style={{ flex: 2, borderBottomRightRadius: 10, borderTopRightRadius: 10, alignSelf: 'flex-start', padding: 10, margin: 3, backgroundColor: '#696969' }}>

                    <Text style={{ alignSelf: 'flex-end', fontSize: 16, color: 'white' }}>{this.props.msg}</Text>
                    <Text style={{ alignSelf: 'flex-start', fontSize: 10, color: 'white' }}>{this.props.Date.hours}: {this.props.Date.min}</Text>

                </View>)
        }

    }
    render() {

        return (
            <View style={{ flex: 100 }}>
                <View style={{ flex: 2, borderRadius: 10, alignSelf: 'center', padding: 10, margin: 3, backgroundColor: '#696969' }}>
                    <Text style={{ alignSelf: 'flex-start', fontSize: 10, color: 'white' }}>{this.props.Date.Day} / {this.props.Date.month} / {this.props.Date.year} </Text>
                </View>

                {this.checkUser(this.props.from, this.props.user)}
            </View>
        )
    }
}

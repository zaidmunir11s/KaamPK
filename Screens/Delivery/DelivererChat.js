import React, { useState } from 'react'
import { View, Text, TouchableOpacity, FlatList, KeyboardAvoidingView } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';

import { TextInput } from 'react-native-paper'
import Message from '../../Controller/MessageController'
import MessageDisplay from '../MessageDisplay'
import { RFValue } from "react-native-responsive-fontsize";
const MessageController = new Message()



export default class ChatBuyer extends React.Component {

  constructor() {
    super();
    this.Date = 0
    this.day = 0
    this.array = []
    this.message = ''
    this.state = {
      filePath: {}, array: [], day: 0, value: ''
    };
  }

  getData() {
    let users = []

    const subscriber = MessageController.ViewMyMessagesD(this.props.route.params.from, this.props.route.params.to, (data) => {
      users = []
      data.forEach(async documentSnapshot => {

        users.push({
          ...documentSnapshot.val(),
          key: documentSnapshot.key,
        });
      });

      this.setState({ array: users })


    });
  }

  getday(day) {
    this.day = day




  }
  componentDidMount() {
    this.getData()
  }
  componentWillUnmount() {
    this.setState({ array: [] })
  }
  render() {


    return (
      <KeyboardAvoidingView
        behavior="padding" enabled keyboardVerticalOffset={-200}

        style={{ flex: 100 }}>

        <View style={{ height: RFValue(120), backgroundColor: '#009387' }} >

          <Text style={{ alignSelf: "flex-start", color: 'white', fontSize: RFValue(28), fontWeight: 'bold', marginLeft: RFValue(20), marginTop: RFValue(50) }}>
            {this.props.route.params.to}</Text>
        </View>

        <View style={{ flex: 83 }}>


          <FlatList

            ref={ref => this.flatList = ref}
            onContentSizeChange={() => this.flatList.scrollToEnd({ animated: true })}
            onLayout={() => this.flatList.scrollToEnd({ animated: true })}
            data={this.state.array}

            renderItem={({ item }) => (

              <MessageDisplay Date={item} from={item.From} user={this.props.route.params.from} msg={item.msg} Day={this.day} ret={this.getday.bind(this)} ></MessageDisplay>


            )}
          />

        </View>

        <View style={{ flex: 8, flexDirection: 'row', margin: 2 }}>
          <View style={{ flex: 7 }}>
            <TextInput
              style={{ backgroundColor: 'white', elevation: 2 }}
              placeholder='Write Message'
              onEndEditing={(e) => { this.message = e.nativeEvent.text }}
              value={this.message}
              onChangeText={(e) => {
                this.setState({ value: e })
                this.message = e

              }}

            ></TextInput>
          </View>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              style={{ borderRadius: 10 }}
              onPress={() => {

                MessageController.SaveMsgD(this.props.route.params.from, this.props.route.params.to, this.message, 'Diliverer')
                this.setState({ value: '' })
                this.forceUpdate()

              }}                >
              <FontAwesome
                style={{ alignSelf: "center", margin: 5, color: '#009387' }}
                name="paper-plane"
                color={'black'}
                size={30}
              />

            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    )

  }
}

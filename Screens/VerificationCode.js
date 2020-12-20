import React, { useState } from 'react'
import Modal from 'react-native-modal';
import { View, Text, Button } from 'react-native'
import { TextInput } from 'react-native-paper';

export default function VerificationCode() {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (

    <View style={{ flex: 1 }}>
      <Button title="Show modal" onPress={toggleModal} />

      <Modal isVisible={isModalVisible}>
        <View style={{ flex: 1 }}>
          <Text>Hello!</Text>
          <TextInput></TextInput>


          <Button title="Submit" onPress={toggleModal} />
          <Button title="Cancel" onPress={toggleModal} />
        </View>
      </Modal>
    </View>


  )
}

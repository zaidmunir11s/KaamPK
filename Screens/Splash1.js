import React from 'react'
import { StatusBar, StyleSheet, Text, View, Image, ImageBackground, TextInput, TouchableOpacity } from 'react-native'
import Logo from '../Images/MaskGroup49.png'
import Background from '../Images/Back.png'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";


export default function Splash1({ navigation }) {
    setTimeout(
        function () {
            navigation.navigate('Splash3')
        }
            .bind(this),
        2000
    );
    return (
        <View style={{ backgroundColor: '#000000', justifyContent: "center" }}>
            <StatusBar translucent backgroundColor="transparent" />
            <ImageBackground
                style={{
                    height: '100%', width: '100%', resizeMode: 'cover'
                }}
                source={Background}
                imageStyle={{ opacity: 0.32 }}
            >

                <Image
                    style={{ resizeMode: 'contain', width: RFValue(100), height: RFValue(100), alignSelf: "center", marginTop: RFValue(300) }}
                    source={Logo}>


                </Image>




            </ImageBackground>
        </View>

    )
}

const styles = StyleSheet.create({})

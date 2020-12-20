import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    StatusBar,
    Image
} from 'react-native';
import { widthToDp, heightToDp } from '../Responsive'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
} from 'react-native-responsive-screen';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


class SplashScreen extends React.Component {
    constructor() {
        super()

    }
    render() {
        styles
        const styles = StyleIt()
        return (

            <View style={styles.container}>
                <StatusBar backgroundColor='#009387' barStyle="light-content" />
                <View style={styles.header}>
                    <Animatable.Image
                        animation="bounceIn"
                        duraton="1500"
                        source={require('../Images/Splash/logo.png')}
                        style={styles.logo}

                    />
                </View>
                <Animatable.View
                    style={[styles.footer, {
                        backgroundColor: 'white'
                    }]}
                    animation="fadeInUpBig"
                >
                    <Text style={[styles.title, {
                        color: 'black'
                    }]}>Make Money from Home.</Text>
                    <Text style={styles.text}>Sign in with account</Text>
                    <View style={styles.button}>
                        <TouchableOpacity

                            onPress={() => this.props.navigation.navigate('SignIn')}
                        >
                            <LinearGradient
                                start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
                                locations={[0, 0.6, 1]}
                                colors={['#08d4c4', '#01ab9d', '#02998d']}
                                style={styles.signIn}
                            >
                                <Text style={styles.textSign}>Get Started</Text>
                                <MaterialIcons
                                    name="navigate-next"
                                    color="#fff"
                                    size={20}
                                />
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </Animatable.View>
            </View>
        );
    };
}

export default SplashScreen;
function StyleIt() {
    const { height } = Dimensions.get("screen");
    const height_logo = height * 0.60;

    const styless = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#009387',

        },
        header: {
            flex: 2,
            justifyContent: 'center',
            alignItems: 'center'
        },
        footer: {
            flex: 1,
            backgroundColor: '#fff',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            paddingVertical: heightToDp(5),
            paddingHorizontal: 30,
        },
        logo: {
            width: '100%',
            height: height_logo,
            resizeMode: 'stretch'

        },
        title: {
            color: '#05375a',
            fontSize: 30,
            fontWeight: 'bold'
        },
        text: {
            color: 'grey',
            marginTop: 5
        },
        button: {
            alignItems: 'flex-end',
            marginTop: heightToDp('5')
        },
        signIn: {
            width: wp('40'),
            height: hp('6'),
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 50,
            flexDirection: 'row'
        },
        textSign: {
            color: 'white',
            fontWeight: 'bold'
        }
    });
    return styless
}
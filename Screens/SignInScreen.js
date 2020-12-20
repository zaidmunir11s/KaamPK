import React from 'react';
import {
    View,

    Text,
    TouchableOpacity,
    TextInput,
    Platform,
    StyleSheet,
    StatusBar, Image,
    Alert, ScrollView, Dimensions, ImageBackground
} from 'react-native';
import { widthToDp, heightToDp } from '../Responsive'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
} from 'react-native-responsive-screen';
import Button from '../Images/Signup/Rectangle131.png'
import Location from '../Images/Signup/Iconmaterial-my-location.png'
import Eye from '../Images/Signup/Iconfeather-eye.png'
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import SignIN from '../Controller/SignInController'
import NotificationCont from '../Controller/NotificationController'
import Background from '../Images/food.png'
import Logo from '../Images/Path430.png'

import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
let NotificationController = new NotificationCont();
import Location2 from '../Model/Location'
let LocationObject = new Location2();
const SignInController = new SignIN()

const { height } = Dimensions.get("window");

class SignInScreen extends React.Component {
    constructor() {
        super()

        this.submitFlagCount = false
        this.UserNameflag = false
        this.passwordFlag = false
        this.emailflag = false
        this.PhoneNoflag = false
        this.userTypeflag = false
        this.SignUpflag = false
        this.ShortPasswordFlag = false
        this.shortPhNoFlag = false
        this.DuplicationFlag = false
        this.EmailValidFlag = false
        this.username = ''
        this.password = ''
        this.temp = true
        this.color = '#deb459'
        this.state = { screenHeight: 0 }

    }
    componentDidMount() {
        LocationObject.getLocation(Data => { console.log('a') })
    }
    onContentSizeChange = (contentHeight) => {
        this.setState({ screenHeight: contentHeight });
    };

    PasswordErr(flag) {

        if (flag) {
            return (
                <Animatable.View animation="fadeInLeft" duration={500}>
                    <Text style={styles.errorMsg}>Password is not Correct.</Text>
                </Animatable.View>

            )
        }
    }
    EmptyCheck(value) {

        if (value) {

            return (
                <Animatable.View animation="fadeInLeft" duration={500}>
                    <Text style={styles.errorMsg}>This Should not be empty.</Text>
                </Animatable.View>
            )
        } else value = false
    }

    render() {
        const scrollEnabled = this.state.screenHeight > height;
        return (
            <View style={{ backgroundColor: '#000000', }}>
                <StatusBar translucent backgroundColor="transparent" />
                <ImageBackground
                    style={{
                        height: '100%', width: '100%', resizeMode: 'cover'
                    }}
                    source={Background}
                    imageStyle={{ opacity: 0.25 }}
                >

                    <Image
                        style={{ resizeMode: 'contain', alignSelf: "center", width: RFValue(100), height: RFValue(100), marginTop: RFValue(100) }}
                        source={Logo}>


                    </Image>

                    <Text style={{ alignSelf: "center", fontSize: RFValue(25), fontFamily: 'Helvetica Neue', color: this.color }}>
                        Sign In Now
              </Text>
                    <TextInput
                        placeholder='Email or Phone Number'
                        placeholderTextColor={this.color}
                        onChangeText={(val) => {
                            if (val.length > 0) {
                                this.passwordFlag = false
                                this.forceUpdate()
                            }
                        }}
                        onEndEditing={(e) => {
                            if (e.nativeEvent.text.length == 0) {
                                this.UserNameflag = true
                                this.forceUpdate()
                            } else {
                                this.username = e.nativeEvent.text

                            }
                        }}


                        style={{ marginTop: RFValue(70), color: this.color, borderBottomColor: this.color, borderBottomWidth: 1, width: RFValue(250), alignSelf: "center" }}
                    ></TextInput>
                    <View
                        style={{ width: RFValue(250), alignSelf: 'center', flexDirection: "row", marginTop: RFValue(20), borderBottomColor: this.color, borderBottomWidth: 1 }}>
                        <TextInput
                            placeholder='Password'
                            placeholderTextColor={this.color}

                            onChangeText={(val) => {
                                if (val.length > 0) {
                                    this.passwordFlag = false
                                    this.forceUpdate()
                                }
                            }}
                            onEndEditing={(e) => {
                                if (e.nativeEvent.text.length == 0) {
                                    this.passwordFlag = true
                                    this.forceUpdate()
                                } else {
                                    this.password = e.nativeEvent.text

                                }
                            }}


                            style={{ color: this.color, width: RFValue(230), alignSelf: "center" }}
                        >


                        </TextInput>
                        <TouchableOpacity style={{ width: RFValue(20), height: RFValue(20), alignSelf: "center" }}>
                            <Image
                                style={{ resizeMode: 'contain', width: RFValue(20), height: RFValue(20), alignSelf: "center", marginTop: RFValue(0) }}
                                source={Eye}>
                            </Image>
                        </TouchableOpacity>
                    </View>


                    <TouchableOpacity
                        style={[styles.signIn, { marginTop: RFValue(30), alignSelf: "center" }]}
                        onPress={async () => {

                            console.log('Passing to COntroller')
                            console.log('username  : ' + this.username + "  password :" + this.password)
                            if (await SignInController.PassToModel(this.username, this.password)) {
                                if (await SignInController.getUserType(this.username, this.password) == 'Buyer') {

                                    this.props.navigation.navigate('BuyerDashboard', { username: this.username })
                                }
                                if (await SignInController.getUserType(this.username, this.password) == 'Deliverer') {

                                    this.props.navigation.navigate('DelivererHome', { username: this.username })
                                }
                                if (await SignInController.getUserType(this.username, this.password) == 'Seller') {

                                    this.props.navigation.navigate('SellerDashboard', { username: this.username })
                                }
                            }


                        }}
                    >
                        <LinearGradient
                            colors={[this.color, '#80662C']}
                            style={styles.signIn}
                        >
                            <Text style={[styles.textSign, {
                                color: 'black'
                            }]}>Sign In</Text>
                        </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.signIn, {
                            borderColor: this.color,
                            borderWidth: 1,
                            marginTop: RFValue(15), alignSelf: "center"
                        }]}
                        onPress={() => {

                            this.props.navigation.navigate('SignUp')
                        }}

                    >
                        <Text style={[styles.textSign, {
                            color: this.color
                        }]}>Sign Up</Text>
                    </TouchableOpacity>




                </ImageBackground>
            </View>
        );
    }
};

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000'

    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: widthToDp('5'),
        paddingVertical: heightToDp('10')
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingTop: heightToDp('7'),
        paddingBottom: heightToDp('13')
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: heightToDp('1'),
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'red',
        paddingBottom: heightToDp('1')
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : heightToDp('-1.5'),
        paddingLeft: widthToDp('3'),
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: heightToDp('7'),
    },
    signIn: {
        width: wp('95%'),
        height: hp('8'),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});


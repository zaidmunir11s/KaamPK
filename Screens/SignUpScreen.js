import React from 'react';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';

import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  Button,
  StyleSheet,
  StatusBar,
  Alert, ScrollView, Dimensions, Image, ImageBackground
} from 'react-native';
import * as EmailValidator from 'email-validator';
import { widthToDp, heightToDp } from '../Responsive'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol
} from 'react-native-responsive-screen';
import emailtest from './emailtest'
import Modal from 'react-native-modal';

import { BarPasswordStrengthDisplay } from 'react-native-password-strength-meter';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Seller from '../Images/Icons/sellerblack.png'
import SellerActive from '../Images/Icons/sellergreen.png'
import Deliverer from '../Images/Icons/delivererblack.png'
import DelivererActive from '../Images/Icons/deliverergreen.png'
import Buyer from '../Images/Icons/buyerblack.png'
import BuyerActive from '../Images/Icons/buyergreen.png'
import Background from '../Images/Capture.png'
import RNFS from 'react-native-fs'
import Logo from '../Images/MaskGroup49.png'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import * as geolib from 'geolib';
import Geolocation from '@react-native-community/geolocation'

const { height } = Dimensions.get("window");
import SignUp from '../Controller/SignUpController'

const SignUpController = new SignUp()
class SignUpScreen extends React.Component {
  constructor() {
    super()
    this.GeneratedCode = 0
    this.VerificationCode = 0
    this.ModalFlag = false
    this.submitFlagCount = false
    this.UserNameflag = false
    this.passwordFlag = false
    this.emailflag = false
    this.PhoneNoflag = false
    this.userTypeflag = false
    this.SignUpflag = false
    this.ShortPasswordFlag = false
    this.shortPhNoFlag = false
    this.UsernameDuplicationFlag = false
    this.EmailDuplicationFlag = false
    this.EmailValidFlag = false
    this.DelivererSelected = false
    this.ImageUpload = false
    this.location = false
    this.state = {
      screenHeight: 0, activeS: false, activeB: false, activeD: false, password: '', username: '', email: '', profileImageUrl: ''

    }

  }

  onContentSizeChange = (contentHeight) => {
    this.setState({ screenHeight: contentHeight });
  };
  renderSeller() {
    let imgSource = this.state.activeS ? SellerActive : SellerActive;
    return (
      <Image
        style={{ resizeMode: 'contain', width: wp('20'), height: hp('20') }}
        source={imgSource}
      />
    );
  }
  renderBuyer() {
    let imgSource = this.state.activeB ? BuyerActive : BuyerActive;
    return (
      <Image
        style={{ resizeMode: 'contain', width: wp('20'), height: hp('20') }}
        source={imgSource}
      />
    );
  }
  renderDeliverer() {
    let imgSource = this.state.activeD ? DelivererActive : DelivererActive;
    return (
      <Image
        style={{ resizeMode: 'contain', width: wp('20'), height: hp('20') }}
        source={imgSource}
      />
    );
  }

  PasswordErr(flag) {

    if (flag) {
      return (
        <Animatable.View animation="fadeInLeft" duration={500}>
          <Text style={styles.errorMsg}>Password must be 8 characters long.</Text>
        </Animatable.View>

      )
    }

  }
  PhoneNumberErr(flag) {

    if (flag) {
      return (
        <Animatable.View animation="fadeInLeft" duration={500}>
          <Text style={styles.errorMsg}>Phone Number is not valid.</Text>
        </Animatable.View>

      )
    }

  }

  ChooseImage() {

    const options = {
      maxWidth: 2000,
      maxHeight: 2000,
      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
    };

    launchImageLibrary(options, async (response) => {


      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const uri = response.uri;
        let img = uri;
        const data = await RNFS.readFile(uri, 'base64')



        var a = await storage()
          .ref(`DelivererCredentials/user${this.state.username}.png`)
          .putString(data, 'base64')
          .then((snapshot) => {
            //You can check the image is now uploaded in the storage bucket
            this.ImageUri = true
            console.log(` has been successfully uploaded.`);
          })
          .catch((e) => console.log('uploading image error => ', e));


      }

      let ref = storage()
        .ref(`DelivererCredentials/user${this.state.username}.png`)

      this.ImageUpload = true
      let URI = await ref.getDownloadURL()
      this.setState({ profileImageUrl: URI })



    });

  }

  DelivererSelect(flag) {
    if (flag) {
      return (
        <View style={styles.button}>
          <View style={styles.imageContainer}>
            <Image source={{ uri: this.state.profileImageUrl }} style={styles.previewImage} />
          </View>

          <TouchableOpacity
            style={styles.signIn}
            onPress={() => this.ChooseImage()}

          >
            <Text style={[styles.textSign, {
              color: '#009387'
            }]}>Choose Image</Text>
          </TouchableOpacity>
        </View>
      )
    }
  }

  EmailErr(flag) {

    if (!flag) {
      return (
        <Animatable.View animation="fadeInLeft" duration={500}>
          <Text style={styles.errorMsg}>Email is not valid.</Text>
        </Animatable.View>

      )
    }

  }
  Tick(value1, value2, text) {
    console.log(value1 + "and " + value2)
    if (!value1 && !value2 && text != null) {
      return (<Animatable.View
        animation="bounceIn"
      >
        <Feather
          name="check-circle"
          color="#80662C"
          size={20}
        />
      </Animatable.View>)
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
  Duplication(value) {

    if (value) {

      return (
        <Animatable.View animation="fadeInLeft" duration={500}>
          <Text style={styles.errorMsg}>Username Already Existed.</Text>
        </Animatable.View>
      )
    } else value = false
  }
  EmailDuplication(value) {

    if (value) {

      return (
        <Animatable.View animation="fadeInLeft" duration={500}>
          <Text style={styles.errorMsg}>Email Already Existed.</Text>
        </Animatable.View>
      )
    } else value = false
  }



  async CheckValidity() {
    if (true) {
      console.log('Checking Validity')

      if (SignUpController.getUsername() == null || SignUpController.getUsername().length == 0) {
        this.UserNameflag = true;
        this.forceUpdate()
      } else {
        this.UserNameflag = false
        this.forceUpdate()

      }
      if (SignUpController.getEmail() == null || SignUpController.getEmail().length == 0) {

        this.emailflag = true;
        this.forceUpdate()
      } else {
        this.emailflag = false
        this.forceUpdate()
        this.EmailValidFlag = EmailValidator.validate(SignUpController.getEmail())
      }
      if (SignUpController.getPassword() == null || SignUpController.getPassword().length == 0) {

        this.passwordFlag = true;
        this.forceUpdate()
      } else {
        this.passwordFlag = false
        this.forceUpdate()
        if (SignUpController.getPassword().length < 8 && SignUpController.getPassword().length > 0) {
          this.ShortPasswordFlag = true
          this.forceUpdate()
        } else {
          this.ShortPasswordFlag = false
          this.forceUpdate()
        }

      }
      if (SignUpController.getPhoneNo() == null || SignUpController.getPhoneNo().length == 0) {
        this.PhoneNoflag = true;
        this.forceUpdate()
      } else {
        this.PhoneNoflag = false
        this.forceUpdate()

        if (SignUpController.getPhoneNo().length < 11 && SignUpController.getPhoneNo().length > 0) {
          this.shortPhNoFlag = true
          this.forceUpdate()
        } else {
          this.shortPhNoFlag = false
          this.forceUpdate()
        }
      }
      if (SignUpController.getUserType() == null || SignUpController.getUserType() == 0) {
        this.userTypeflag = true;
        this.forceUpdate()
      } else {
        this.userTypeflag = false
        this.forceUpdate()
      }
    }

  }

  render() {
    const scrollEnabled = this.state.screenHeight > height;
    return (
      <ScrollView style={styles.container}
        scrollEnabled={true}
        onContentSizeChange={this.onContentSizeChange}
      >
        <ImageBackground
          style={{
            height: '100%', width: '100%', resizeMode: 'contain', marginBottom: RFValue(-20)
          }}
          source={Background}
          imageStyle={{ opacity: 0.20 }}
        >
          <StatusBar backgroundColor='transparent' barStyle="light-content" />
          <View style={styles.header}>
            <Image
              style={{ resizeMode: 'contain', width: RFValue(200), height: RFValue(100), alignSelf: "center" }}
              source={Logo}>


            </Image>


          </View>





          <Animatable.View

            animation="fadeInUpBig"
            style={[styles.footer, {
              backgroundColor: 'transparent'
            }]} >

            <Text style={[styles.text_footer, {
              color: '#deb459'
            }]}>Username</Text>
            <View style={styles.action}>
              <FontAwesome
                name="user-o"
                color={'#deb459'}
                size={20}
                style={{ alignSelf: "center" }}
              />
              <TextInput

                placeholder="Your Username"
                placeholderTextColor="#deb459"
                style={[styles.textInput, {
                  color: '#deb459'
                }]}
                autoCapitalize="none"
                onChangeText={(e) => {

                  SignUpController.setUsername(e)
                  this.CheckValidity()
                  SignUpController.getDuplicateUsername(e, (flag) => {
                    this.UsernameDuplicationFlag = flag
                    this.forceUpdate()
                  })


                }}
                onEndEditing={(e) => { this.setState({ username: e.nativeEvent.text }) }}
              />

              {this.Tick(this.UserNameflag, this.UsernameDuplicationFlag, SignUpController.getUsername())}

            </View>
            {this.EmptyCheck(this.UserNameflag)}
            {this.Duplication(this.UsernameDuplicationFlag)}
            <Text style={[styles.text_footer, {
              color: '#deb459'
            }]}>Email</Text>
            <View style={styles.action}>
              <FontAwesome
                name="envelope"
                color={'#deb459'}
                size={20}
                style={{ alignSelf: "center" }}
              />
              <TextInput
                placeholder="Your Email"
                placeholderTextColor="#deb459"
                style={[styles.textInput, {
                  color: '#deb459'
                }]}
                autoCapitalize="none"

                onChangeText={(e) => {

                  SignUpController.setEmail(e)
                  this.CheckValidity()
                  SignUpController.getDuplicateEmail(e, (flag) => {
                    this.EmailDuplicationFlag = flag
                    this.forceUpdate()
                  })




                }}
                onEndEditing={(e) => {
                  SignUpController.setEmail(e.nativeEvent.text)
                }
                }
              />

              {this.Tick(this.emailflag, !this.EmailValidFlag, SignUpController.getEmail())}

            </View>

            {this.EmptyCheck(this.emailflag)}
            {this.EmailDuplication(this.EmailDuplicationFlag)}

            {SignUpController.getEmail() != null ? this.EmailErr(this.EmailValidFlag) : null}
            <Text style={[styles.text_footer, {
              color: '#deb459',
              marginTop: 35
            }]}>Password</Text>
            <View style={styles.action}>
              <Feather
                name="lock"
                color={'#deb459'}
                size={20}
                style={{ alignSelf: "center" }}

              />

              <TextInput

                placeholder="Your Password"
                placeholderTextColor="#deb459"
                style={[styles.textInput, {
                  color: '#deb459'
                }]}
                autoCapitalize="none"
                onFocus={() => this.CheckValidity()}

                onChangeText={(e) => {
                  this.setState({ password: e })
                  SignUpController.setPassword(e)
                  this.CheckValidity()

                }}
                onEndEditing={(e) => {
                  SignUpController.setPassword(e.nativeEvent.text)

                }}

              />
              {this.Tick(this.passwordFlag, this.ShortPasswordFlag, SignUpController.getPassword())}
            </View>
            {!this.location ? <Text style={[styles.text_footer, {
              color: 'red',
              marginTop: 35
            }]}>Tap Icon to Save Location </Text> : null}
            <View style={styles.action}>
              {!this.location ? <TouchableOpacity
                onPress={
                  () => {

                    Geolocation.getCurrentPosition(
                      position => {
                        if (position.coords != null) {
                          this.location = true
                          SignUpController.setLocation(position.coords)
                          this.forceUpdate()
                        }
                      },
                      error => console.log(error.message),
                      { enableHighAccuracy: true, timeout: 200000, maximumAge: 1000 }
                    );

                  }
                }
              >
                <Feather
                  name="map-pin"
                  color={'#deb459'}
                  size={80}
                  style={{ alignSelf: "center", marginLeft: RFValue(150), marginTop: RFValue(10) }}

                />
              </TouchableOpacity>
                : null}
              {this.location ? <Text style={[styles.text_footer, {
                color: '#00B712', fontSize: RFValue(24),
                marginTop: RFValue(15), marginLeft: RFValue(100)

              }]}>Location Saved </Text> : null}
            </View>
            {this.EmptyCheck(this.passwordFlag)}
            {this.PasswordErr(this.ShortPasswordFlag)}

            <Text style={[styles.text_footer, {
              color: '#deb459',
              marginTop: 35
            }]}>Phone No</Text>
            <View style={styles.action}>
              <Feather
                style={{ alignSelf: "center" }}
                name="phone"
                color={'#deb459'}
                size={20}

              />
              <TextInput
                placeholder="e.g 0313 1234567"
                placeholderTextColor="#deb459"
                style={[styles.textInput, {
                  color: '#deb459'
                }]}
                keyboardType='numeric'
                maxLength={11}
                autoCapitalize="none"
                onChangeText={(e) => {

                  SignUpController.setPhoneNo(e)
                  this.CheckValidity()

                }}
                onEndEditing={(e) => SignUpController.setPhoneNo(e.nativeEvent.text)}
              />
              {this.Tick(this.PhoneNoflag, this.shortPhNoFlag, SignUpController.getPhoneNo())}
            </View>
            {this.EmptyCheck(this.PhoneNoflag)}
            {this.PhoneNumberErr(this.shortPhNoFlag)}

            <Text style={[styles.text_footer, {
              color: '#deb459',
              marginTop: 35
            }]}>Please Select User Type</Text>

            <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: RFValue(10) }}>


              <TouchableOpacity
                style={{
                  alignSelf: "center", borderColor: '#deb459', borderWidth: RFValue(this.state.activeS ? 0.5 : 0), borderRadius: RFValue(5)
                  , height: RFValue(100), justifyContent: "center"
                }}
                onPress={() => {

                  this.setState({ activeS: true, activeB: false, activeD: false })
                  SignUpController.setUserType('Seller')
                  this.CheckValidity()
                  this.DelivererSelected = false
                  this.ImageUpload = true
                  this.forceUpdate()

                }}
              >
                {this.renderSeller()}

              </TouchableOpacity>


              <TouchableOpacity
                style={{
                  alignSelf: "center", borderColor: '#deb459', borderWidth: RFValue(this.state.activeB ? 0.5 : 0), borderRadius: RFValue(5)
                  , height: RFValue(100), justifyContent: "center"
                }}
                onPress={() => {

                  this.setState({ activeB: true, activeD: false, activeS: false })
                  SignUpController.setUserType('Buyer')
                  this.CheckValidity()
                  this.DelivererSelected = false
                  this.ImageUpload = true
                  this.forceUpdate()
                }}
              >
                {this.renderBuyer()}

              </TouchableOpacity>


              <TouchableOpacity
                style={{
                  alignSelf: "center", borderColor: '#deb459', borderWidth: RFValue(this.state.activeD ? 0.5 : 0), borderRadius: RFValue(5)
                  , height: RFValue(100), justifyContent: "center"
                }}
                onPress={() => {

                  this.setState({ activeD: true, activeB: false, activeS: false })
                  SignUpController.setUserType('Deliverer')
                  this.CheckValidity()
                  if (!this.UserNameflag) {
                    this.DelivererSelected = true
                    this.ImageUpload = false
                    this.forceUpdate()
                  } else { alert('Please First Enter Username') }
                }}
              >
                {this.renderDeliverer()}

              </TouchableOpacity>
            </View>

            {this.EmptyCheck(this.userTypeflag)}

            {this.DelivererSelect(this.DelivererSelected)}

            <View style={styles.button}>
              <TouchableOpacity
                style={styles.signIn}

                onPress={async () => {
                  this.submitFlagCount = true

                  this.CheckValidity()
                  if (!this.UserNameflag
                    &&
                    !this.emailflag
                    &&
                    !this.getPassword
                    &&
                    !this.getPhoneNo
                    &&
                    !this.userTypeflag
                    &&
                    !this.shortPhNoFlag
                    &&
                    !this.passwordFlag
                    &&
                    !this.UsernameDuplicationFlag
                    &&
                    !this.EmailDuplicationFlag
                    &&
                    this.EmailValidFlag
                    &&
                    this.submitFlagCount
                    &&
                    this.ImageUpload) {
                    this.GeneratedCode = Math.floor(100000 + Math.random() * 900000);
                    console.log(this.GeneratedCode)
                    emailtest(SignUpController.getEmail(), this.GeneratedCode)

                    this.ModalFlag = true
                    this.forceUpdate()
                  }

                }
                }
              >
                <LinearGradient
                  colors={['#deb459', '#80662C']}
                  style={styles.signIn}
                >
                  <Text style={[styles.textSign, {
                    color: 'black'
                  }]}>Sign Up</Text>
                </LinearGradient>
              </TouchableOpacity>

              <Modal isVisible={this.ModalFlag}>
                <View style={{
                  backgroundColor: 'white', elevation: 2, width: wp('90'), height: hp('50'), borderRadius: 9,
                  justifyContent: "space-between"
                }}>
                  <Text style={{ fontSize: 24, fontWeight: "bold", alignSelf: "center" }}>Verification Code</Text>
                  <Text style={styles.textSign}>You Have Received Verification Code at {SignUpController.getEmail()}</Text>
                  <TextInput
                    style={{
                      borderWidth: 2, height: hp('15'), fontSize: 70, fontWeight: "bold", width: wp('70'),
                      alignSelf: "center"
                    }}
                    onChangeText={text => {
                      this.VerificationCode = text

                    }}

                  />

                  <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity
                      onPress={async () => {
                        if (this.VerificationCode == this.GeneratedCode) {

                          if (await SignUpController.Register()) {
                            alert('You Have Registered on KaamPk')
                            this.props.navigation.navigate('SignIn')
                          }
                        }
                      }} >

                      <LinearGradient
                        colors={['#deb459', '#02c2b2']}
                        style={[styles.MediumButton, { borderBottomRightRadius: 0, borderTopRightRadius: 0 }]}
                      >
                        <Text style={[styles.textSign, {
                          color: '#fff'
                        }]}>Submit</Text>
                      </LinearGradient>

                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                      this.ModalFlag = false
                      this.forceUpdate()
                    }} >
                      <LinearGradient
                        colors={['#deb459', '#02c2b2']}
                        style={[styles.MediumButton, { borderBottomLeftRadius: 0, borderTopLeftRadius: 0 }]}
                      >
                        <Text style={[styles.textSign, {
                          color: '#fff'
                        }]}>Cancel</Text>
                      </LinearGradient>

                    </TouchableOpacity>
                  </View>
                </View>
              </Modal>






              <Image source={this.state.profileImageUrl} style={{ width: 100, height: 100 }} />
            </View>
          </Animatable.View>




        </ImageBackground>
      </ScrollView>
    );
  }
};

export default SignUpScreen;

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
  imageContainer: {
    borderWidth: 1,
    borderColor: '#deb459',
    backgroundColor: '#eee',
    width: '80%',
    height: 150
  },

  previewImage: {
    width: '100%',
    height: '100%'
  },

  footer: {
    flex: 3,

    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingTop: heightToDp('7'),
    paddingBottom: heightToDp('10')
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30
  },
  text_footer: {
    color: '#deb459',
    fontSize: 18
  },
  action: {
    flexDirection: 'row',
    marginTop: heightToDp('1'),
    borderBottomWidth: 0,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: heightToDp('1')
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : heightToDp('-1.5'),
    paddingLeft: widthToDp('3'),
    color: '#deb459',
    marginTop: heightToDp('0'),
    borderBottomColor: '#deb459',
    borderBottomWidth: 0.7
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
  MediumButton: {
    width: wp('45%'),
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


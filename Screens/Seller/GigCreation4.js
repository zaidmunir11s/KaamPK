
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text, Alert,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import { RFValue } from "react-native-responsive-fontsize";
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import imgSource from '../../Images/image.png'
import RNFS from 'react-native-fs'
import CreateGigObject from "../../Controller/CreateGigController";
import AwesomeAlert from 'react-native-awesome-alerts';
let CreateGigController = new CreateGigObject();
export default class SignUp extends React.Component {
  constructor() {
    super()
    this.username = ''
    this.activeC = false
    this.activeB = false
    this.activeP = false
    this.activeS = false
    this.Ingrdients = false
    this.ImageUri = false
    this.Category = false
    this.Price = false
    this.Description = false
    this.Title = false
    this.IngrdientsName = []
    this.IngrdientsPrice = []
    this.NoIngFlag = false


    this.state = { profileImageUrl: '../../Images/unnamed.png' }
  }
  ChooseImageFromLib() {


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


        console.log('uri : ' + this.props.route.params.Object.getUsername())
        var a = await storage()
          .ref(`GigPictures/UserGig${this.props.route.params.Object.getUsername()}.png`)
          .putString(data, 'base64')
          .then((snapshot) => {
            //You can check the image is now uploaded in the storage bucket
            this.ImageUri = true
            console.log(` has been successfully uploaded.`);
          })
          .catch((e) => console.log('uploading image error => ', e));


      }

      let ref = storage()
        .ref(`GigPictures/UserGig${this.props.route.params.Object.getUsername()}.png`)


      let URI = await ref.getDownloadURL()
      this.setState({ profileImageUrl: URI })




    });

  }
  OpenCamera() {


    const options = {
      saveToPhotos: true,
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    launchCamera(options, async (response) => {


      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const uri = response.uri;
        let img = uri;


        console.log('uri : ' + img)
        /*  var a = await storage()
            .ref(`GigPictures/UserGig${this.username}.png`)
            .putFile(img)
            .then((snapshot) => {
              //You can check the image is now uploaded in the storage bucket
              this.ImageUri = true
              console.log(` has been successfully uploaded.`);
            })
            .catch((e) => console.log('uploading image error => ', e));
  
  */
      }

      /*   let ref = storage()
           .ref(`GigPictures/UserGig${this.username}.png`)
         const URI = await ref.getDownloadURL()
   
         this.setState({ profileImageUrl: URI })
         CreateGigController.setImageUri(URI)
          
   */


    });

  }

  render() {

    return (
      <View style={{ backgroundColor: '#232526', height: '100%' }}>
        <StatusBar backgroundColor='#232526' barStyle="light-content" />


        <View style={{ width: RFValue(40), height: RFValue(40), justifyContent: 'flex-start' }}>

        </View>

        <View style={{

          zIndex: RFValue(15),
          width: RFValue(330), height: RFValue(500), marginTop: RFValue(120),
          backgroundColor: '#232526', elevation: RFValue(5), borderWidth: RFValue(5), borderColor: '#232526',
          alignSelf: "center",
          borderBottomLeftRadius: RFValue(300)
        }}>



          <LinearGradient
            colors={['#deb459', '#80662C']}
            style={{ width: RFValue(150), margin: RFValue(5), height: RFValue(30), marginLeft: RFValue(-5), borderTopRightRadius: RFValue(20), borderBottomRightRadius: RFValue(20) }}>
            <Text style={{
              fontSize: RFValue(16), marginLeft: RFValue(20), marginTop: RFValue(2), marginBottom: RFValue(15),
              fontWeight: 'bold', color: 'black'
            }}>Select Image</Text>
          </LinearGradient>

          <View style={{
            backgroundColor: '#232526', margin: RFValue(10), width: RFValue(250),
            flexDirection: 'row',

            height: RFValue(150), alignSelf: "center", color: '#deb459',
            borderRightColor: '#232526', borderBottomColor: '#deb459', borderColor: '#deb459',
            borderWidth: RFValue(1), borderRadius: RFValue(30)
          }}>
            <TouchableOpacity
              onPress={() => {
                this.showimage = true
                this.forceUpdate()
              }
              }
              style={{ resizeMode: 'contain', width: RFValue(230), margin: RFValue(10), height: RFValue(130) }}
            >
              <Image
                style={{ resizeMode: 'contain', width: RFValue(230), height: RFValue(130) }}
                source={imgSource}
              />
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <View style={{
              backgroundColor: '#232526', margin: RFValue(10), width: RFValue(80),
              flexDirection: 'row',

              height: RFValue(80), alignSelf: "center", color: '#deb459',
              borderRightColor: '#232526', borderBottomColor: '#deb459', borderColor: '#deb459',
              borderWidth: RFValue(1), borderRadius: RFValue(30)
            }}>

              <Image
                style={{
                  resizeMode: 'cover', width: RFValue(80),
                  height: RFValue(80)
                }}
                source={{ uri: this.state.profileImageUrl }}
              />
            </View>
            <View style={{
              backgroundColor: '#232526', margin: RFValue(10), width: RFValue(80),
              flexDirection: 'row',

              height: RFValue(80), alignSelf: "center", color: '#deb459',
              borderRightColor: '#232526', borderBottomColor: '#deb459', borderColor: '#deb459',
              borderWidth: RFValue(1), borderRadius: RFValue(30)
            }}></View>
            <View style={{
              backgroundColor: '#232526', margin: RFValue(10), width: RFValue(80),
              flexDirection: 'row',

              height: RFValue(80), alignSelf: "center", color: '#deb459',
              borderRightColor: '#232526', borderBottomColor: '#deb459', borderColor: '#deb459',
              borderWidth: RFValue(1), borderRadius: RFValue(30)
            }}></View>

          </View>
          <TouchableOpacity
            onPress={() => {
              this.props.route.params.Object.setImageUri(this.state.profileImageUrl)
              this.props.route.params.Object.PostData();
            }}

            style={{
              alignSelf: "center", margin: RFValue(10), marginLeft: RFValue(60), borderColor: '#deb459', backgroundColor: '#232526',
              borderWidth: RFValue(2), width: RFValue(200), borderBottomLeftRadius: RFValue(30), height: RFValue(50), justifyContent: "center"
            }}


          >

            <Text style={{ fontSize: RFValue(16), alignSelf: "center", fontWeight: 'bold', color: '#deb459' }}>Publish</Text>

          </TouchableOpacity>


        </View>
        <View style={{ flex: 15, flexDirection: "row", marginTop: RFValue(-300) }}>
          <LinearGradient start={{ x: -0.5, y: 0 }}
            colors={['#deb459', '#deb459', '#232526']} style={{
              borderTopLeftRadius: RFValue(100), backgroundColor: '#d12115', flex: 15
            }}></LinearGradient>

        </View>

        <AwesomeAlert
          show={this.showimage}
          showProgress={false}
          title="Image Select"
          message="Choose Camera or Gallery"
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={true}
          showConfirmButton={true}
          cancelText="Camera"
          confirmText="Gallery"
          cancelButtonColor="#DD6B55"
          confirmButtonColor="#DD6B55"
          onCancelPressed={() => {
            this.OpenCamera()
            this.showimage = false
            this.forceUpdate()
          }}
          onConfirmPressed={() => {
            this.ChooseImageFromLib();
            this.showimage = false
            this.forceUpdate()
          }}
        />
      </View>


    );
  }
};

const styles = StyleSheet.create({
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    flex: 100
  }
  , TouchableOpacity:
    { flexDirection: "row", justifyContent: "space-evenly", elevation: 1, borderColor: 'white' },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  text_footer: {
    color: "#05375a",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginTop: RFValue("1"),
    borderBottomWidth: 1,
    borderBottomColor: "black",
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: RFValue("1"),
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : RFValue("-1.5"),
    paddingLeft: RFValue("3"),
    color: "#05375a",
  },
  errorMsg: {
    color: "#FF0000",
    fontSize: 14,
  },
  button: {
    alignItems: "center",
    marginTop: RFValue("7"),
  },
  signIn: {
    width: RFValue("95%"),
    height: RFValue("8"),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "center"
  },
  imageContainer: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#eee',
    width: '80%',
    height: 150
  },

  previewImage: {
    width: '100%',
    height: '100%'
  }
});



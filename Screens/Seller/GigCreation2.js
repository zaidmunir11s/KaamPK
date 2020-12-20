
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


export default class SignUp extends React.Component {


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
            style={{ width: RFValue(100), margin: RFValue(5), height: RFValue(30), marginLeft: RFValue(-5), borderTopRightRadius: RFValue(20), borderBottomRightRadius: RFValue(20) }}>
            <Text style={{
              fontSize: RFValue(16), marginLeft: RFValue(10), marginTop: RFValue(2), marginBottom: RFValue(15),
              fontWeight: 'bold', color: 'black'
            }}>Description</Text>
          </LinearGradient>

          <View style={{
            paddingLeft: RFValue(15), backgroundColor: '#232526', margin: RFValue(10), width: RFValue(250),
            flexDirection: 'row',

            height: RFValue(200), alignSelf: "center", borderTopColor: '#232526', color: '#deb459',
            borderRightColor: '#232526', borderBottomColor: '#deb459', borderLeftColor: '#deb459',
            borderWidth: 2, borderBottomLeftRadius: RFValue(30)
          }}>

            <TextInput
              placeholderTextColor='#80662C'
              placeholder='Enter Description'
              multiline={true}
              numberOfLines={4} onChangeText={(e) => {


                this.Description = e

              }}

              style={{
                marginLeft: RFValue(20), alignSelf: 'flex-start',
                fontSize: RFValue(16), color: '#deb459'
              }}>


            </TextInput>
          </View>


          <TouchableOpacity
            onPress={() => {
              this.props.route.params.Object.setDescription(this.Description)
              this.props.navigation.navigate('GigCreation3', { Object: this.props.route.params.Object })
            }}

            style={{
              alignSelf: "center", margin: RFValue(10), marginLeft: RFValue(60), borderColor: '#deb459', backgroundColor: '#232526',
              borderWidth: RFValue(2), width: RFValue(200), borderBottomLeftRadius: RFValue(30), height: RFValue(50), justifyContent: "center"
            }}


          >

            <Text style={{ fontSize: RFValue(16), alignSelf: "center", fontWeight: 'bold', color: '#deb459' }}>Next</Text>

          </TouchableOpacity>


        </View>
        <View style={{ flex: 15, flexDirection: "row", marginTop: RFValue(-300) }}>
          <LinearGradient start={{ x: -0.5, y: 0 }}
            colors={['#deb459', '#deb459', '#232526']} style={{
              borderTopLeftRadius: RFValue(100), backgroundColor: '#d12115', flex: 15
            }}></LinearGradient>

        </View>


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



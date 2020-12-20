
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
import Chef from '../../Images/GigCategoryIcons/chef.png'
import Chefgreen from '../../Images/GigCategoryIcons/chefgreen.png'
import Camera from '../../Images/GigCategoryIcons/camera.png'
import Cameragreen from '../../Images/GigCategoryIcons/cameragreen.png'
import Makeup from '../../Images/GigCategoryIcons/makeup.png'
import Makeupgreen from '../../Images/GigCategoryIcons/makeupgreen.png'
import Sewing from '../../Images/GigCategoryIcons/sewing.png'
import Sewinggreen from '../../Images/GigCategoryIcons/sewinggreen.png'
import { RFValue } from "react-native-responsive-fontsize";
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import CreateGigObject from "../../Controller/CreateGigController";
let CreateGigController = new CreateGigObject();
export default class SignUp extends React.Component {

  renderImage(imgSource) {

    return (
      <Image
        style={{ resizeMode: 'contain', width: RFValue(50), height: RFValue(50), alignSelf: 'center' }}
        source={imgSource}
      />
    );
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
            style={{ width: RFValue(100), margin: RFValue(5), height: RFValue(30), marginLeft: RFValue(-5), borderTopRightRadius: RFValue(20), borderBottomRightRadius: RFValue(20) }}>
            <Text style={{
              fontSize: RFValue(16), marginLeft: RFValue(10), marginTop: RFValue(2), marginBottom: RFValue(15),
              fontWeight: 'bold', color: 'black'
            }}>Categories</Text>
          </LinearGradient>
          <View style={{ flexDirection: "column", justifyContent: "space-around" }}>


            <TouchableOpacity
              style={styles.TouchableOpacity}
              onPress={() => {
                this.props.route.params.Object.setGigCategory('Cooking')
                this.activeB = false
                this.activeC = true
                this.activeP = false
                this.activeS = false
                this.forceUpdate()
              }}
            >

              {this.activeC ? this.renderImage(Chefgreen) : this.renderImage(Chef)}
              <Text style={[styles.textSign, this.activeC ? {
                color: '#009387'
              } : { color: 'black' }]}>Cooking and Baking</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.TouchableOpacity}
              onPress={() => {
                this.props.route.params.Object.setGigCategory('Beautician')
                this.activeB = true
                this.activeC = false
                this.activeP = false
                this.activeS = false
                this.forceUpdate()
              }}
            >
              {this.activeB ? this.renderImage(Makeupgreen) : this.renderImage(Makeup)}
              <Text style={[styles.textSign, this.activeB ? {
                color: '#009387'
              } : { color: 'black' }]}>Beautician                 </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.TouchableOpacity}
              onPress={() => {
                this.props.route.params.Object.setGigCategory('Stiching')
                this.activeB = false
                this.activeC = false
                this.activeP = false
                this.activeS = true
                this.forceUpdate()
              }}
            >
              {this.activeS ? this.renderImage(Sewinggreen) : this.renderImage(Sewing)}
              <Text style={[styles.textSign, this.activeS ? {
                color: '#009387'
              } : { color: 'black' }]}>Stiching and Design</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.TouchableOpacity, { borderBottomLeftRadius: RFValue(80) }]}
              onPress={() => {
                this.props.route.params.Object.setGigCategory('Photography')
                this.activeB = false
                this.activeC = false
                this.activeP = true
                this.activeS = false
                this.forceUpdate()
              }}
            >
              {this.activeP ? this.renderImage(Cameragreen) : this.renderImage(Camera)}
              <Text style={[styles.textSign, this.activeP ? {
                color: '#009387'
              } : { color: 'black' }]}>Photography             </Text>
            </TouchableOpacity>
          </View>


          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('GigCreation4', { Object: this.props.route.params.Object })
            }}

            style={{
              alignSelf: "center", margin: RFValue(10), marginLeft: RFValue(60), borderColor: '#deb459', backgroundColor: '#232526',
              borderWidth: RFValue(2), width: RFValue(200), borderBottomLeftRadius: RFValue(30), height: RFValue(50), justifyContent: "center"
            }}


          >

            <Text style={{ fontSize: RFValue(16), alignSelf: "center", fontWeight: 'bold', color: '#deb459' }}>Next</Text>

          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Ingredients', { Object: this.props.route.params.Object })
            }}

            style={{
              alignSelf: "center", margin: RFValue(10), marginLeft: RFValue(110), borderColor: '#deb459', backgroundColor: '#232526',
              borderWidth: RFValue(0), borderBottomLeftRadius: RFValue(30), height: RFValue(50), justifyContent: "center"
            }}
          >
            <LinearGradient
              colors={['#deb459', '#80662C']}
              style={{
                borderColor: '#deb459', backgroundColor: '#232526',
                borderWidth: RFValue(0), width: RFValue(150), borderBottomLeftRadius: RFValue(30), height: RFValue(50), justifyContent: "center"
              }}
            >
              <Text style={{ fontSize: RFValue(16), alignSelf: "center", fontWeight: 'bold', color: 'white' }}>Add Extras</Text>
            </LinearGradient>
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
    { flexDirection: "row", height: RFValue(70), justifyContent: "space-evenly", elevation: RFValue(2), borderColor: 'white' },
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



import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  StatusBar,
  TextInput,
  TouchableOpacity, Alert, Image
} from "react-native";
import * as Animatable from "react-native-animatable";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol,
} from "react-native-responsive-screen";

import LinearGradient from "react-native-linear-gradient";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import { widthToDp, heightToDp } from "../../Responsive";
import CreateGigObject from "../../Controller/CreateGigController";

import ImagePicker from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import Chef from '../../Images/GigCategoryIcons/chef.png'
import Chefgreen from '../../Images/GigCategoryIcons/chefgreen.png'
import Camera from '../../Images/GigCategoryIcons/camera.png'
import Cameragreen from '../../Images/GigCategoryIcons/cameragreen.png'
import Makeup from '../../Images/GigCategoryIcons/makeup.png'
import Makeupgreen from '../../Images/GigCategoryIcons/makeupgreen.png'
import Sewing from '../../Images/GigCategoryIcons/sewing.png'
import Sewinggreen from '../../Images/GigCategoryIcons/sewinggreen.png'

let CreateGigController = new CreateGigObject();



export default class CreateGig extends React.Component {
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
  ChooseImage() {


    const options = {
      title: 'Select Avatar',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, async (response) => {


      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const uri = response.uri;
        img = uri;


        console.log('uri : ' + img)
        var a = await storage()
          .ref(`GigPictures/UserGig${this.username}.png`)
          .putFile(img)
          .then((snapshot) => {
            //You can check the image is now uploaded in the storage bucket
            this.ImageUri = true
            console.log(` has been successfully uploaded.`);
          })
          .catch((e) => console.log('uploading image error => ', e));


      }

      let ref = storage()
        .ref(`GigPictures/UserGig${this.username}.png`)
      const URI = await ref.getDownloadURL()

      this.setState({ profileImageUrl: URI })
      CreateGigController.setImageUri(URI)




    });

  }
  renderImage(imgSource) {

    return (
      <Image
        style={{ resizeMode: 'contain', width: wp('10'), height: hp('10') }}
        source={imgSource}
      />
    );
  }

  GigImageSelect(flag) {
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

  AdditionalIngredients(flag) {
    let price = 0
    let ing = ''
    let textInputPrice = ''
    let textInputName = ''
    if (flag) {
      return (
        <View   >

          {this.NoIngFlag ?
            this.IngrdientsName.map((currElement, index) =>

              <View key={index} style={{ flexDirection: "row", justifyContent: "space-around", marginVertical: heightToDp(1), borderBottomWidth: 1, borderBottomColor: 'black' }} >
                <Text
                  style={[
                    styles.text_footer,
                    {
                      color: "black",
                    },
                  ]}
                >
                  {currElement}
                </Text>
                <Text
                  style={[
                    styles.text_footer,
                    {
                      color: "black",
                    },
                  ]}
                >
                  {this.IngrdientsPrice[index]} Rs
</Text>
              </View>

            )

            : null
          }


          <Text
            style={[
              styles.text_footer,
              {
                color: "black",
              },
            ]}
          >
            Ingrdient Detail
  </Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color={"black"} size={20} />
            <TextInput
              ref={input => { this.textInputName = input }}
              placeholder="Ingredient Detail"
              placeholderTextColor="#666666"
              style={[
                styles.textInput,
                {
                  color: "black",
                },
              ]}
              autoCapitalize="none"
              onEndEditing={(e) => { ing = e.nativeEvent.text }}
            />
          </View>
          <Text
            style={[
              styles.text_footer,
              {
                color: "black",
              },
            ]}
          >
            Ingredients Price
  </Text>
          <View style={styles.action}>
            <FontAwesome name="money" color={"black"} size={20} />
            <TextInput
              ref={input => { this.textInputPrice = input }}
              keyboardType='numeric'
              placeholder="Ingredients Price"
              placeholderTextColor="#666666"
              style={[
                styles.textInput,
                {
                  color: "black",
                },
              ]}
              autoCapitalize="none"
              onEndEditing={(e) => { price = e.nativeEvent.text }}
            />
          </View>
          <TouchableOpacity
            style={[styles.signIn, {
              borderColor: '#009387', borderWidth: 2,
              marginVertical: 10,
              width: wp('15'),
              alignSelf: "center"
            }]}
            onPress={() => {
              if (ing.length != 0 && price != 0) {
                this.NoIngFlag = true
                this.IngrdientsName.push(ing)
                this.IngrdientsPrice.push(price)
                this.textInputName.clear()
                this.textInputPrice.clear()

                this.forceUpdate()
              }
            }
            }

          >
            <Image source={require('../../Images/plus.png')} style={{ width: wp('12'), height: hp('5'), resizeMode: "contain" }} />

          </TouchableOpacity>

        </View>

      )
    }
  }

  render() {
    this.username = this.props.username
    CreateGigController.setUsername(this.username)
    return (

      <ScrollView
        style={styles.container}
        scrollEnabled={true}
        onContentSizeChange={this.onContentSizeChange}
      >
        <StatusBar backgroundColor="#009387" barStyle="light-content" />
        <View style={styles.header}>
          <Text style={styles.text_header}>Create New Gig!</Text>

        </View>
        <Animatable.View
          animation="fadeInUpBig"
          style={[
            styles.footer,
            {
              backgroundColor: "white",
            },
          ]}
        >
          <Text
            style={[
              styles.text_footer,
              {
                color: "black",
              },
            ]}
          >
            Gig Title
          </Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color={"black"} size={20} />
            <TextInput
              placeholder="Gig Title"
              placeholderTextColor="#666666"
              style={[
                styles.textInput,
                {
                  color: "black",
                },
              ]}
              autoCapitalize="none"
              onEndEditing={(e) => {
                if (e.nativeEvent.text.length > 10) {
                  CreateGigController.setTitle(e.nativeEvent.text)
                  this.Title = true
                }
                else {
                  alert('Enter minimum 10 letters Title')

                }
              }}
            />
          </View>
          <Text
            style={[
              styles.text_footer,
              {
                color: "black",
              },
            ]}
          >
            Gig Price
          </Text>
          <View style={styles.action}>
            <FontAwesome name="money" color={"black"} size={20} />
            <TextInput
              keyboardType='numeric'
              placeholder="Gig Price"
              placeholderTextColor="#666666"
              style={[
                styles.textInput,
                {
                  color: "black",
                },
              ]}
              autoCapitalize="none"
              onEndEditing={(e) => {
                if (e.nativeEvent.text.length > 0) {
                  this.Price = true
                  CreateGigController.setPrice(e.nativeEvent.text)
                }
              }}
            />
          </View>


          <Text
            style={[
              styles.text_footer,
              {
                color: "black",
                marginTop: 35,
              },
            ]}
          >
            Gig Description
          </Text>
          <View style={styles.action}>
            <Feather name="file-text" color={"black"} size={20} />
            <TextInput
              placeholder=""
              placeholderTextColor="#666666"
              style={[
                styles.textInput,
                {
                  color: "black",
                },
              ]}
              onEndEditing={(e) => {
                if (e.nativeEvent.text.length > 20) {
                  CreateGigController.setDescription(e.nativeEvent.text)
                  this.Description = true
                } else { alert('Please Enter Description of at least 20 letters') }
              }}
            />
          </View>


          <View style={{ flexDirection: "column", justifyContent: "space-around" }}>


            <TouchableOpacity
              style={styles.TouchableOpacity}
              onPress={() => {
                CreateGigController.setGigCategory('Cooking')
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
                CreateGigController.setGigCategory('Beautician')
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
                CreateGigController.setGigCategory('Stiching')
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
              style={styles.TouchableOpacity}
              onPress={() => {
                CreateGigController.setGigCategory('Photography')
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
          {this.activeC ?
            <TouchableOpacity
              style={[styles.signIn, {
                borderColor: '#009387', borderWidth: 2,
                marginVertical: 5,
                width: wp('40'),
                alignSelf: "center"
              }]}
              onPress={() => {
                if (this.Ingrdients == false) {
                  this.Ingrdients = true
                  this.forceUpdate()
                } else {
                  this.Ingrdients = false
                  this.forceUpdate()
                }
              }
              }

            >

              <Text style={[styles.textSign, {
                color: '#009387'
              }]}>Add Ingredients</Text>
            </TouchableOpacity>
            : null
          }
          {this.activeC ? this.AdditionalIngredients(this.Ingrdients) : null}


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
          <View style={styles.button}>
            <TouchableOpacity style={styles.signIn}

              onPress={() => {
                if (true) {
                  CreateGigController.setIngredientsName(this.IngrdientsName)
                  CreateGigController.setIngredientsPrice(this.IngrdientsPrice)

                  CreateGigController.PostData()

                  alert('Gig Published')
                } else {
                  alert('Fill out All Fields')
                }
              }}
            >
              <LinearGradient
                colors={["#08d4c4", "#01ab9d"]}
                style={styles.signIn}
              >
                <Text
                  style={[
                    styles.textSign,
                    {
                      color: "#fff",
                    },
                  ]}
                >
                  Publish Gig
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </Animatable.View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#009387",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: widthToDp("5"),
    paddingVertical: heightToDp("10"),
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingTop: heightToDp("7"),
    paddingBottom: heightToDp("13"),
  },
  TouchableOpacity:
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
    marginTop: heightToDp("1"),
    borderBottomWidth: 1,
    borderBottomColor: "black",
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: heightToDp("1"),
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : heightToDp("-1.5"),
    paddingLeft: widthToDp("3"),
    color: "#05375a",
  },
  errorMsg: {
    color: "#FF0000",
    fontSize: 14,
  },
  button: {
    alignItems: "center",
    marginTop: heightToDp("7"),
  },
  signIn: {
    width: wp("95%"),
    height: hp("8"),
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
  },
});

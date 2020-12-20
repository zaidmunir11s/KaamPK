// import React in our code
import React, { useState } from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  StatusBar,
  Button, ImageBackground, TouchableOpacity
} from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import Background from '../Images/cosmetics.png'
import Background2 from '../Images/stitching.png'
import Background3 from '../Images/food.png'
import Background4 from '../Images/MaskGroup3.png'
import Logo from '../Images/Signup/Path430.png'

//import AppIntroSlider to use it
import AppIntroSlider from 'react-native-app-intro-slider';

const Splash3 = ({ navigation }) => {
  const [showRealApp, setShowRealApp] = useState(false);

  const onDone = () => {
    setShowRealApp(true);
  };
  const onSkip = () => {
    setShowRealApp(true);
  };

  const RenderItem = ({ item }) => {
    return (
      <View style={{ backgroundColor: '#000000', justifyContent: "center" }}>
        <StatusBar translucent backgroundColor="transparent" />
        <ImageBackground
          style={{
            height: '100%', width: '100%', resizeMode: 'cover'
          }}
          source={item.image}
          imageStyle={{ opacity: 0.32 }}
        >

          <Image
            style={{ resizeMode: 'contain', width: RFValue(100), height: RFValue(100), alignSelf: "center", marginTop: RFValue(300) }}
            source={Logo}>


          </Image>
          <Text style={{ alignSelf: "center", marginTop: RFValue(30), fontSize: RFValue(25), fontFamily: 'Helvetica Neue', color: '#deb459' }}>
            Meal Time
        </Text>
          <Text style={{
            width: RFValue(270), textAlign: 'center', alignSelf: "center", marginTop: RFValue(30)
            , fontSize: RFValue(14), fontFamily: 'Helvetica Neue', color: '#deb459'
          }}>
            “Lorem ipsum dolor sit amet, consectetur    adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam,
            </Text>




        </ImageBackground>
      </View>
    );
  };
  const RenderDoneButton = () => {
    return (
      <TouchableOpacity
        style={{
          marginBottom: RFValue(80), marginLeft: RFValue(120), backgroundColor: 'transparent'
          , justifyContent: "center", borderWidth: 1.5, borderRadius: RFValue(50), borderColor: '#deb459', width: RFValue(100),
          height: RFValue(30), zIndex: 100
        }}
        onPress={() => { navigation.navigate('SignIn') }}

      >
        <Text style={{ color: '#deb459', fontSize: RFValue(14), alignSelf: "center" }}> Next</Text>
      </TouchableOpacity>
    );
  };
  const RenderNextButton = () => {
    return (
      <TouchableOpacity
        style={{
          marginBottom: RFValue(80), marginLeft: RFValue(120), backgroundColor: 'transparent'
          , justifyContent: "center", width: RFValue(100),
          height: RFValue(30), zIndex: 100
        }}


      >
        <Text style={{ color: 'transparent', fontSize: RFValue(14), alignSelf: "center" }}> Next</Text>
      </TouchableOpacity>
    );
  };
  return (
    <>

      <AppIntroSlider
        data={slides}
        renderItem={RenderItem}
        onDone={onDone}
        renderDoneButton={RenderDoneButton}
        bottomButton
        dotStyle={{ backgroundColor: '#deb459', marginTop: RFValue(150) }}
        activeDotStyle={{ backgroundColor: 'transparent', borderWidth: 1, borderColor: '#deb459', marginTop: RFValue(150) }}
        renderNextButton={RenderNextButton}


      />

    </>
  );
};

export default Splash3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
  },
  titleStyle: {
    padding: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  paragraphStyle: {
    padding: 20,
    textAlign: 'center',
    fontSize: 16,
  },
  introImageStyle: {
    width: 200,
    height: 200,
  },
  introTextStyle: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    paddingVertical: 30,
  },
  introTitleStyle: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    marginBottom: 16,
    fontWeight: 'bold',
  },
});

const slides = [
  {
    key: 's1',
    text: 'Best Recharge offers',
    title: 'Mobile Recharge',
    image:
      Background4,
    backgroundColor: '#deb459',
  },
  {
    key: 's2',
    text: 'Best Recharge offers',
    title: 'Mobile Recharge',
    image:
      Background,
    backgroundColor: '#deb459',
  },
  {
    key: 's3',
    title: 'Flight Booking',
    text: 'Upto 25% off on Domestic Flights',
    image: Background2,
    backgroundColor: '#deb459',
  },
  {
    key: 's4',
    title: 'Great Offers',
    text: 'Enjoy Great offers on our all services',
    image: Background3,
    backgroundColor: '#deb459',
  },
];
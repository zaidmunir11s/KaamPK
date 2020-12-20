import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol
} from 'react-native-responsive-screen';

import MainSplash from './Screens/MainSplash'
import VerificationCode from './Screens/VerificationCode'
import SplashScreen from './Screens/SplashScreen'
import Splash0 from './Screens/Splash0'
import Splash1 from './Screens/Splash1'
import Splash3 from './Screens/Splash3'
import SearchDeliverer from './Screens/SearchDeliverer'
import SignInScreen from './Screens/SignInScreen'
import emailtest from './Screens/emailtest'
import SignUpScreen from './Screens/SignUpScreen'
import BuyerDashboard from './Screens/Buyer/BuyerDashboard'
import NotificationBuyerDashboard from './Screens/Buyer/NotificationBuyerDashboard'
import SellerDashboard from './Screens/Seller/SellerDashboard'
import DelivererHome from './Screens/Delivery/DelivererHome'
import DelivererChat from './Screens/Delivery/DelivererChat'
import CreateGig from './Screens/Seller/CreateGig'
import GigMiniView from './Screens/GigMiniView'
import SellerHome from './Screens/Seller/SellerHome'
import GigView from './Screens/GigView'
import Chat from './Screens/Seller/Chat'
import Messages from './Screens/Messages'
import BuyerMessages from './Screens/Buyer/BuyerMessages'
import BuyerMiniChatView from './Screens/Buyer/BuyerMiniChatView'
import MiniChatView from './Screens/MiniChatView'
import ChatBuyer from './Screens/Buyer/ChatBuyer'
import BuyerProfile from './Screens/Buyer/BuyerProfile'
import BuyerHome from './Screens/Buyer/BuyerHome'
import OrderComplete from './Screens/Buyer/OrderComplete'
import RateSeller from './Screens/Buyer/RateSeller'
import NotificationSellerDashboard from './Screens/Seller/NotificationSellerDashboard'
import Payment1 from './Screens/Buyer/Payment1'
import Payment2 from './Screens/Buyer/Payment2'
import Payment3 from './Screens/Buyer/Payment3'
import GigFilterBuyerHome from './Screens/Buyer/GigFilterBuyerHome'
import Payment4 from './Screens/Buyer/Payment4'
import GigCreation from './Screens/Seller/GigCreation'
import GigCreation2 from './Screens/Seller/GigCreation2'
import GigCreation3 from './Screens/Seller/GigCreation3'
import GigCreation4 from './Screens/Seller/GigCreation4'
import Ingredients from './Screens/Seller/Ingredients'
import GigMini from './Screens/Seller/GigMini'
import SellerMessages from './Screens/Seller/SellerMessages'
import ActiveOrdersSeller from './Screens/Seller/ActiveOrdersSeller'

import GoogleMaps from './Screens/GoogleMaps'
import {
  firebase
} from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth';

import { utils } from '@react-native-firebase/app';
import storage from '@react-native-firebase/storage';
import { LogBox } from 'react-native'

LogBox.ignoreLogs([
  'Require cycle:'
])

const Stack = createStackNavigator();
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      orientation: '',
    }
    this.init = 'MainSplash'

  }
  connectionToFirebase() {
    var firebaseConfig = {
      apiKey: "AIzaSyCyRO6eFCKSahEoVPiu7RSoj5AD-EHRO78",
      authDomain: "kaampk-f6c5a.firebaseapp.com",
      databaseURL: "https://kaampk-f6c5a.firebaseio.com",
      projectId: "kaampk-f6c5a",
      storageBucket: "kaampk-f6c5a.appspot.com",
      messagingSenderId: "790135559923",
      appId: "1:790135559923:web:6f813de81fa45349eb8986",
      measurementId: "G-RDEGP7CW4P"
    };
    // Initialize Firebase
    !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();


  }
  async uploadimage() {
    const reference = storage().ref('buyerblack.png');
    const pathToFile = `${utils.FilePath.PICTURES_DIRECTORY}/buyerblack.png`;
    // uploads file
    await reference.putFile(pathToFile);
  }
  componentDidMount() {

    this.connectionToFirebase()
    auth().signInAnonymously()
    //  TestClass()
    loc(this);


  }
  componentWillUnMount() {
    rol();
  }
  render() {

    return (

      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false,
          gestureEnabled: true
          , gestureDirection: "horizontal"
        }}>

          <Stack.Screen name="SignIn" component={SignInScreen} />
          <Stack.Screen name="SearchDeliverer" component={SearchDeliverer} />

          <Stack.Screen name="GigFilterBuyerHome" component={GigFilterBuyerHome} />
          <Stack.Screen name="Splash0" component={Splash0} />
          <Stack.Screen name="GigCreation" component={GigCreation} />
          <Stack.Screen name="DelivererChat" component={DelivererChat} />
          <Stack.Screen name="Ingredients" component={Ingredients} />
          <Stack.Screen name="SellerMessages" component={SellerMessages} />
          <Stack.Screen name="GigCreation3" component={GigCreation3} />
          <Stack.Screen name="ActiveOrdersSeller" component={ActiveOrdersSeller} />
          <Stack.Screen name="CreateGig" component={CreateGig} />
          <Stack.Screen name="BuyerMiniChatView" component={BuyerMiniChatView} />
          <Stack.Screen name="Splash1" component={Splash1} />
          <Stack.Screen name="Splash3" component={Splash3} />
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Payment4" component={Payment4} />
          <Stack.Screen name="Payment3" component={Payment3} />
          <Stack.Screen name="Payment2" component={Payment2} />
          <Stack.Screen name="Payment1" component={Payment1} />
          <Stack.Screen name="GigCreation4" component={GigCreation4} />
          <Stack.Screen name="GigMini" component={GigMini} />

          <Stack.Screen name="GigCreation2" component={GigCreation2} />

          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="SellerDashboard" component={SellerDashboard} />
          <Stack.Screen name="DelivererHome" component={DelivererHome} />
          <Stack.Screen name="GigMiniView" component={GigMiniView} />
          <Stack.Screen name="GigView" component={GigView} />

          <Stack.Screen name="SellerHome" component={SellerHome} />
          <Stack.Screen name="VerificationCode" component={VerificationCode} />
          <Stack.Screen name="Messages" component={Messages} />
          <Stack.Screen name="BuyerMessages" component={BuyerMessages} />
          <Stack.Screen name="MiniChatView" component={MiniChatView} />
          <Stack.Screen name="BuyerDashboard" component={BuyerDashboard} />
          <Stack.Screen name="Chat" component={Chat} />
          <Stack.Screen name="ChatBuyer" component={ChatBuyer} />
          <Stack.Screen name="NotificationSellerDashboard" component={NotificationSellerDashboard} />
          <Stack.Screen name="NotificationBuyerDashboard" component={NotificationBuyerDashboard} />
          <Stack.Screen name="BuyerProfile" component={BuyerProfile} />
          <Stack.Screen name="RateSeller" component={RateSeller} />
          <Stack.Screen name="OrderComplete" component={OrderComplete} />


        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}


export default App;
import React from 'react'
import { View, Text, FlatList, TouchableOpacity, RefreshControl } from 'react-native'
import Notif from '../../Controller/NotificationController'
import Activeorders from './ActiveOrders'
import Icon from 'react-native-vector-icons/Feather';
import DropDownPicker from 'react-native-dropdown-picker';
let NotificationController = new Notif()


export default class BuyerProfile extends React.Component {

  constructor() {
    super();
    this.flag = null
    this.state = {
      filePath: {}, array: [], flag: true, refreshing: false, country: 'uk', dropdown: false
    };
  }
  setFlag() {
    this.flag = false
  }
  checkFlag() {
    if (this.flag != null) { return false }
    else { return true }
  }
  reload = () => {
    this.forceUpdate()
  }
  getData = () => {
    let users = []
    const subscriber = NotificationController.CheckSellerPendingOrder(this.props.route.params.Buyer, (data) => {
      users = []
      if (data != null) {
        this.setFlag()

        data.forEach(async documentSnapshot => {

          users.push({
            ...documentSnapshot.val(),
            key: documentSnapshot.key

          });
        });
        this.setState({ array: users })


      }
    });
  }
  onRefresh = () => {
    this.setState({ refreshing: true });
    setTimeout(() => this.setState({ refreshing: false }),
      2000
    )


  }



  render() {
    this.getData()
    return (
      <View style={{ flex: 100, backgroundColor: '#272b2b' }}>

        <View style={{ flex: 15, borderBottomLeftRadius: 60, borderBottomRightRadius: 60, backgroundColor: '#009387', justifyContent: 'center' }}>
          <Text style={{ alignSelf: "center", fontWeight: "bold", fontSize: 28, color: 'white' }}>Buyer Dashboard</Text>

        </View>
        <View style={{ flex: 85, backgroundColor: '#272b2b' }}>

          <Text style={{ alignSelf: "flex-start", fontWeight: "bold", fontSize: 20, color: 'white', margin: 10 }}>Pending Orders</Text>


          {this.checkFlag() ? <Text style={{ alignSelf: "center", fontSize: 20 }}>No Pending Orders</Text> :
            <FlatList
              refreshControl={
                <RefreshControl refreshing={this.state.refreshing} onRefresh={this.onRefresh} />
              }
              data={this.state.array}
              renderItem={({ item }) => (

                <Activeorders thiss={this.getData.bind(this)} Seller={this.props.route.params.Buyer} route={this.props.route}
                  OrderInfo={item} Buyer={item.Buyer} Gig={item.GigDetails} navigation={this.props.navigation}></Activeorders>

              )}
            />}

        </View>

      </View>
    )
  }
}






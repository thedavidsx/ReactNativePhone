import React, { Component } from 'react';
import { connect } from "react-redux";
import {
    Container,
    Content,
    Icon,
    Spinner,
    Button,
    Text,
    List,
    Header, Left, Body, Title, Right
  } from 'native-base';
// import * as Permissions from 'expo-permissions';
// import * as Contacts_ from 'expo-contacts';
import {Modal, TouchableHighlight, View, Alert,Image,ImageBackground } from 'react-native';
import { ListItem } from 'react-native-elements'
import { Layout, Colors, Screens, ActionTypes } from '../../constants';
import appStyles from '../../theme/appStyles';
import Strings from '../../constants/Strings';
import Statusbar from "../../components/Statusbar";
import imgs from '../../assets/images';


const list = [
  {
    name: 'Amy Farha',
    avatar_url: imgs.contacWhite,
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: imgs.contacWhite,
    subtitle: 'Vice Chairman'
  }
];




class RecentCall extends Component {

constructor(props) {
    super(props);

    // this.state = { 
    //     dataContacts:[],
    //     modalVisible: false,
    // };
}

// async componentWillMount() {
//     const { permissions } = await Permissions.askAsync(Permissions.CONTACTS);
//     alert(permissions);
//     if (permissions.status !== 'granted') {
//         //alert('Hey! You might want to enable notifications for my app, they are good.');
//     }

//     const { data } = await Contacts_.getContactsAsync({
//         fields: [ 
//             Contacts.PHONE_NUMBERS,
//             Contacts.EMAILS
//         ],
//     });

//     this.setState({dataContacts : data});
// }

async componentDidMount() {
   
}

setModalVisible(visible) {
    this.setState({modalVisible: visible});
}

renderItem = ({ item }) => (
  
  <ListItem
    title={item.name}
    subtitle={item.subtitle}
    leftAvatar={{
      source: item.avatar_url && { uri: item.avatar_url },
      title: item.name[0]
    }}
    bottomDivider
    chevron
  />
)

render() {
    return (
      <Container style={{marginTop:22}}>
          <Content>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              {/* <Text>LLAMADAS RECIENTES.!!!</Text> */}
              <Image source={imgs.recentCall} resizeMode="contain" />
              {/* {
                list.map((data, index) => (
                  <ListItem
                    key={index}
                    leftAvatar={
                      { source: { 
                          uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'
                        }
                      }
                    }
                    title={'Chris Jackson'}
                    subtitle={'Vice Chairman'}
                    bottomDivider
                  />
                ))
              } */}
            </View>
          </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
    return {
      user: state.auth.user,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
         logout: () => dispatch(userActions.logoutUser()),
     };
  };
  
  // Exports
  export default connect(mapStateToProps, mapDispatchToProps)(RecentCall);